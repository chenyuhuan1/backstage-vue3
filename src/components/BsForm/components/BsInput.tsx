/*
 * @Author: 陈宇环
 * @Date: 2022-12-20 14:37:53
 * @LastEditTime: 2023-07-03 15:42:18
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, PropType } from 'vue'
import styles from '@/components/BsForm/style.module.scss'
import { inputProps } from '../interface/index'
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent'


export default defineComponent({
  name: 'BsInput',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    config: {
      type: Object as PropType<Partial<inputProps>>,
      default() {
        return {}
      },
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props: any, { emit }) {
    const { dynamicInput } = new CustomDynamicComponent()
    function updateValue(value: number | string | InputEvent) {
      let cloneValue = value
      
      // ant-Design-vue 无input事件，value获取到的是原生input事件的e
      if (CustomDynamicComponent.language === CustomDynamicComponent.antLanguage) {
        cloneValue = ((value as InputEvent).target as HTMLInputElement).value
      }

      emit('update:modelValue', cloneValue)
      emit('change', {
        prop: props.config?.prop ?? '',
        value: cloneValue,
      })
    }
    return () => {
      return <div class={['BsInput', styles.width100]}>
        <dynamicInput
          class="input"
          type='text'
          model-value={props.modelValue}
          placeholder={props.config.placeholder || `请输入${props.config?.label ?? ''}`}
          disabled={!!props.config.disabled}

          /** ant-design-vue && ele 统一封装 - start */
          clearable={props.config.clearable !== false}  // ele 特有属性
          allowClear={props.config.allowClear ?? props.config.clearable !== false} // ant-design-vue特有属性
          /** ant-design-vue && ele 统一封装 - end */

          {...props.config.nativeProps}
          onInput={updateValue}
        />
      </div>
    }
  },
})
export * from '../interface/index'