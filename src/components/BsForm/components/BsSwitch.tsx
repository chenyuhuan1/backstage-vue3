/*
 * @Author: 陈宇环
 * @Date: 2022-12-20 14:55:23
 * @LastEditTime: 2023-08-15 19:16:33
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, PropType } from 'vue'
import { switchProps } from '../interface/index'
import styles from '@/components/BsForm/style.module.scss'
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent'
import { textModeFilter } from '../toolFn'

export default defineComponent({
  name: 'BsSwitch',
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: '',
    },
    config: {
      type: Object as PropType<switchProps>,
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
    const { dynamicSwitch } = new CustomDynamicComponent()
    function updateValue(value: number | string | boolean): any {
      emit('update:modelValue', value)
      emit('update:value', value)
      emit('change', {
        prop: props.config?.prop ?? '',
        value,
      })
    }
    return () => {
      return <div class={['bs-switch', styles.width100]}>
        {textModeFilter(props.textMode, props.modelValue !== undefined ? String(props.modelValue) : '', props.config.textModeRender && props.config.textModeRender({
          value: props.modelValue,
        }),
        <dynamicSwitch
          /** ant-design-vue 特有属性-start */
          {
            ...(CustomDynamicComponent.language === CustomDynamicComponent.antLanguage ? {  // ele value会有警告信息
              checked: props.modelValue,
            } : {})
          }
          /** ant-design-vue 特有属性-end */

          /** ele 特有属性-start */
          checked={props.modelValue}
          model-value={props.modelValue}
          /** ele 特有属性-end */
          disabled={!!props.config.disabled}
          clearable={props.config.clearable !== false}
          {...props.config.nativeProps}
          onChange={updateValue}
        />,
        )}
      </div>
    }
  },
})
export { switchProps }