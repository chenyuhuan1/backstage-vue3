/*
 * @Author: 陈宇环
 * @Date: 2023-01-16 10:34:55
 * @LastEditTime: 2023-08-18 15:44:16
 * @LastEditors: 陈宇环
 * @Description: 基础dialog组件
 */

import { defineComponent, ref, reactive, nextTick } from 'vue'
import { dialogFace } from './interface/index'
import { CustomDynamicComponent } from '../CustomDynamicComponent'

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

    const dialogConfig = reactive<dialogFace>({
      title: '',
    })

    const show:(config: dialogFace) => void = async(config) => {
      Object.assign(dialogConfig, dialogDefultConfig, config)
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
      if (dialogConfig.showFooter) {
        footer = () => {
          return (
            <>
              <el-button disabled={loading.value} loading={loading.value} onClick={async() => {
                loading.value = true
                if (dialogConfig.cancel) {
                  dialogConfig.cancel && await dialogConfig.cancel() !== false && (dialogFormVisible.value = false)
                } else {
                  dialogFormVisible.value = false
                }
                loading.value = false
              }}>{dialogConfig.cancelText}</el-button>
              {
                dialogConfig.confirm && <el-button type="primary" disabled={loading.value} loading={loading.value} onClick={async() => {
                  loading.value = true
                  try {
                    dialogConfig.confirm && await dialogConfig.confirm() !== false && (dialogFormVisible.value = false)
                  } catch (error) {
                    loading.value = false
                  }
                  loading.value = false
                }}>{dialogConfig.confirmText}</el-button >
              }
            </>
          )
        }
        if (dialogConfig.footerRender) {
          footer = () => {
            return dialogConfig.footerRender && dialogConfig.footerRender(() => {
              dialogFormVisible.value = false
            })
          }
        }
      }

      return <div class="bs-dialog">
        <dynamicDialog
          v-model={dialogFormVisible.value}
          width={dialogConfig.width}
          title={dialogConfig.title}
          {...dialogConfig.nativeProps}
          onClose={async() => {
            dialogConfig.nativeProps?.onClose ?? dialogConfig.nativeProps?.onClose()
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
                  dialogConfig.render && dialogConfig.render()
                }
              </>
            },
            header: () => {
              if (dialogConfig.headerRender) {
                return dialogConfig.headerRender()
              } else {
                return dialogConfig.title
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

export * from './interface/index'