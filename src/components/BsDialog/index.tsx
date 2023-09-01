/*
 * @Author: 陈宇环
 * @Date: 2023-01-16 10:34:55
 * @LastEditTime: 2023-09-01 11:48:34
 * @LastEditors: 陈宇环
 * @Description: 基础dialog组件
 */

import { defineComponent, ref, reactive, nextTick } from 'vue'
import { dialogFace } from './interface/index'
import { CustomDynamicComponent } from '../CustomDynamicComponent'
import merge from 'lodash/merge'

export default defineComponent({
  setup(props: any, { expose }) {
    const dialogFormVisible = ref<boolean>(false)
    const loading = ref<boolean>(false)

    const dialogDefultConfig = reactive<dialogFace>({
      title: '',
      width: '600px',
      confirmText: '确认',
      cancelText: '关闭',
      showFooter: true,
    })

    const dialogConfig = ref<dialogFace>({
      title: '',
    })

    const show:(config: dialogFace) => void = async(config) => {
      dialogConfig.value = merge({}, dialogDefultConfig, config)
      loading.value = false
      dialogFormVisible.value = true
      await nextTick()
    }

    expose({ show } as {show: (config: dialogFace) => void})

    return () => {
      const dynamicComponent = new CustomDynamicComponent()
      const {
        dynamicDialog,
      } = dynamicComponent
      let footer = null
      if (dialogConfig.value.showFooter) {
        footer = () => {
          return (
            <>
              <el-button disabled={loading.value} loading={loading.value} onClick={async() => {
                loading.value = true
                if (dialogConfig.value.cancel) {
                  dialogConfig.value.cancel && await dialogConfig.value.cancel() !== false && (dialogFormVisible.value = false)
                } else {
                  dialogFormVisible.value = false
                }
                loading.value = false
              }}>{dialogConfig.value.cancelText}</el-button>
              {
                dialogConfig.value.confirm && <el-button type="primary" disabled={loading.value} loading={loading.value} onClick={async() => {
                  loading.value = true
                  try {
                    dialogConfig.value.confirm && await dialogConfig.value.confirm() !== false && (dialogFormVisible.value = false)
                  } catch (error) {
                    loading.value = false
                  }
                  loading.value = false
                }}>{dialogConfig.value.confirmText}</el-button >
              }
            </>
          )
        }
        if (dialogConfig.value.footerRender) {
          footer = () => {
            return dialogConfig.value.footerRender && dialogConfig.value.footerRender(() => {
              dialogFormVisible.value = false
            })
          }
        }
      }

      return <div class="bs-dialog">
        <dynamicDialog
          v-model={dialogFormVisible.value}
          width={dialogConfig.value.width}
          title={dialogConfig.value.title}
          {...dialogConfig.value.nativeProps}
          onClose={async() => {
            dialogConfig.value.nativeProps?.onClose ?? dialogConfig.value.nativeProps?.onClose()
            // loading.value = true
            // if (dialogConfig.cancel) {
            //   dialogConfig.cancel && await dialogConfig.cancel() !== false && (dialogFormVisible.value = false)
            // } else {
            dialogFormVisible.value = false
            // }
            // loading.value = false
          }}
          v-slots={{
            default: () => {
              return <>
                {
                  dialogConfig.value.render && dialogConfig.value.render()
                }
              </>
            },
            header: () => {
              if (dialogConfig.value.headerRender) {
                return dialogConfig.value.headerRender()
              } else {
                return dialogConfig.value.title
              }
            },
            footer,
          }}
        >
        </dynamicDialog>
      </div >
    }
  },
})

export { dialogFace }

/** dialog组件展示方法方法 */
export type show = (config: dialogFace) => void