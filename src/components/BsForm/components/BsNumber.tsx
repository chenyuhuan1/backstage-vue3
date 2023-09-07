/*
 * @Author: 陈宇环
 * @Date: 2023-01-03 15:19:17
 * @LastEditTime: 2023-09-01 11:20:44
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, PropType } from 'vue'
import styles from '@/components/BsForm/style.module.scss'
import type { numberProps } from '../interface/index'
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent'
import { textModeFilter } from '../toolFn'

export default defineComponent({
  name: 'BsNumber',
  props: {
    modelValue: {
      type: [String, Number],
      default: undefined,
    },
    config: {
      type: Object as PropType<numberProps>,
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
    const { dynamicNumber } = new CustomDynamicComponent()
    function updateValue(value: number | string | InputEvent) {
      emit('update:modelValue', value)
      emit('update:value', value)
      emit('change', {
        prop: props.config?.prop ?? '',
        value,
      })
    }
    return () => {
      return <div class={['bs-number', styles.width100, styles.BsNumber]}>
        {textModeFilter(props.textMode, props.modelValue, props.config.textModeRender && props.config.textModeRender({
          value: props.modelValue,
        }), <dynamicNumber
          style={{ width: '100%' }}
          class={{ number: true, textLeft: props.config.controls !== true }}
          /** ele 特有属性-start */
          model-value={props.modelValue}
          /** ele 特有属性-end */
          /** ant 特有属性 - start */
          value={props.modelValue}
          /** ant 特有属性 - end */
          placeholder={props.config.placeholder || `请输入${props.config?.label ?? ''}`}
          disabled={!!props.config.disabled}
          controls={props.config.controls === true}
          {...props.config.nativeProps}
          onInput={updateValue}
        />,
        )}
      </div>
    }
  },
})
export { numberProps }