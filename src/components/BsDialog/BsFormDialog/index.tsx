/*
 * @Author: 陈宇环
 * @Date: 2023-02-06 14:35:55
 * @LastEditTime: 2023-08-23 14:13:21
 * @LastEditors: 陈宇环
 * @Description: 表单类-弹窗
 */

import { defineComponent, ref, reactive } from 'vue'
import { dialogFormFace, dialogFormShowFace } from '../interface/index'
import BsDialog from '../index'
import BsForm, { columnsBase, formConfig } from '@/components/BsForm'
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
    const formConfig = ref<formConfig>({
      columns: [],
    })
    const form = ref()
    const show: dialogFormShowFace = ({ config, formInitValue }) => {
      form.value = formInitValue ? formInitValue : {}
      
      formConfig.value = merge(formDiologDefultConfig.formConfig, config.formConfig)

      const formDiologConfig:dialogFormFace = merge({}, formDiologDefultConfig, {
        ...config,
        confirm: config?.confirm ? async() => {
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
                config={formConfig.value}
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

    const setFormFieldsValue = (name:string, val:any)  => {
      setTimeout(() => {
        form.value[name] = val
      })
    }

    const getFormFieldsValue = (name?:string)  => {
      if (!name) {
        return form.value
      }
      return form.value[name]
    }

    // 修改columns-将columns中prop为propKey的对象的feildKey字段值设置成value  eg(name, required, false) 将名称项设置成非必填
    const setFormColumnsByProp = (propKey: string, feildKey: keyof columnsBase, value: any):void => {
      const index = formConfig.value.columns.findIndex((item:columnsBase) => item.prop === propKey)
      if (index >= 0) {
        (formConfig.value.columns[index] as any)[feildKey] = value
      }
    }

    expose({ BsFormRef, show, setFormFieldsValue, getFormFieldsValue, setFormColumnsByProp })

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