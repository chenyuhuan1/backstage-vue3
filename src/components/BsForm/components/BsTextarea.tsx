/*
 * @Author: 陈宇环
 * @Date: 2022-12-20 14:37:53
 * @LastEditTime: 2023-09-07 10:27:03
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, PropType } from 'vue'
import styles from '@/components/BsForm/style.module.scss'
import type { textareaProps } from '../interface/index'
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent'
import { textModeFilter } from '../toolFn'

export default defineComponent({
  name: 'BsTextarea',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    config: {
      type: Object as PropType<textareaProps>,
      default() {
        return {}
      },
    },
    textMode: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'update:value', 'change'],
  setup(props: any, { emit }) {
    const { dynamicTextarea } = new CustomDynamicComponent()
    function updateValue(value: number | string | InputEvent) {
      let cloneValue = value
      
      // ant-Design-vue 无input事件，value获取到的是原生input事件的e
      if (CustomDynamicComponent.language === CustomDynamicComponent.antLanguage) {
        cloneValue = ((value as InputEvent).target as HTMLInputElement).value
      }

      emit('update:modelValue', cloneValue)
      emit('update:value', cloneValue)
      emit('change', {
        prop: props.config?.prop ?? '',
        value: cloneValue,
      })
    }
    return () => {
      return <div class={['bs-textarea', styles.width100]}>
        {textModeFilter(props.textMode, props.modelValue, props.config.textModeRender && props.config.textModeRender({
          value: props.modelValue,
        }),
        <dynamicTextarea
          type='textarea'
          /** ele 特有属性-start */
          model-value={props.modelValue}
          /** ele 特有属性-end */
          /** ant 特有属性 - start */
          value={props.modelValue}
          /** ant 特有属性 - end */
          placeholder={props.config.placeholder || `请输入${props.config?.label ?? ''}`}
          disabled={!!props.config.disabled}
          

          /** ant-design-vue && ele 统一封装 - start */
          clearable={props.config.clearable !== false}  // ele 特有属性 - 清除按钮
          allowClear={props.config.allowClear ?? props.config.clearable !== false} // ant-design-vue特有属性
          rows={props.config.rows || 3}  // ele 特有属性 - 默认area行数
          autoSize={props.config.autoSize || { minRows: 3, maxRows: 3 }}  // ant-design-vue特有属性 - 默认area行数
          /** ant-design-vue && ele 统一封装 - end */

          {...props.config.nativeProps}
          onInput={updateValue}
        />,
        )}
      </div>
    }
  },
})
export { textareaProps }