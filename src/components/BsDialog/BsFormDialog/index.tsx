/*
 * @Author: 陈宇环
 * @Date: 2023-02-06 14:35:55
 * @LastEditTime: 2023-08-18 15:47:26
 * @LastEditors: 陈宇环
 * @Description: 表单类-弹窗
 */

import { defineComponent, ref, reactive } from 'vue'
import { dialogFormFace } from '../interface/index'
import BsDialog from '../index'
import BsForm from '@/components/BsForm'
import merge from 'lodash/merge'
export default defineComponent({
  setup(props: any, { expose }) {
    const BsDialogRef = ref()
    const BsFormRef = ref()
    const formDiologDefultConfig:dialogFormFace = reactive<dialogFormFace>({
      title: '',  // dialog标题
      width: '800px',  // dialog宽度
      confirmText: '确认', // 确认按钮文案
      cancelText: '关闭', // 取消按钮文案
      formConfig: {
        columns: [],  // 表单项配置
        colNum: 24,
        labelWidth: '100px',  // label宽度
        notOpBtn: true, // 不需要（搜索，重置，导出）操作按钮
      },
    })
    const form = ref()
    const show = ({ config, formInitValue }:{config: dialogFormFace, formInitValue: any}) => {
      form.value = formInitValue ? formInitValue : {}
      
      const formDiologConfig:dialogFormFace = merge({}, formDiologDefultConfig, {
        ...config,
        confirm: config.confirm ? async() => {
          const verify = await BsFormRef.value.validate()
          if (!verify) {
            return false
          }
          return config.confirm && await config.confirm(form.value) !== false
        } : undefined,
        render: () => {
          return (
            <>
              <BsForm
                ref={BsFormRef}
                v-model={form.value}
                class="bs-form"
                config={{
                  ...formDiologDefultConfig.formConfig,
                  ...config.formConfig,
                }}
              ></BsForm>
            </>
          )
        },
      })
      BsDialogRef.value?.show(formDiologConfig)
      // 解决编辑之后在新增数据为空时，检验数据仍然爆红
      setTimeout(() => {
        BsFormRef.value?.clearValidate()
      })
    }

    const setFieldsValue = (name:string, val:any)  => {
      setTimeout(() => {
        form.value[name] = val
      })
    }

    const getFieldsValue = (name:string)  => {
      return form.value[name]
    }

    expose({ show, setFieldsValue, getFieldsValue })

    return () => {
      return (
        <div class="bs-form-dialog">
          <BsDialog
            ref={BsDialogRef}
          ></BsDialog>
        </div>
      )
    }
  },
})

export * from '../interface/index'