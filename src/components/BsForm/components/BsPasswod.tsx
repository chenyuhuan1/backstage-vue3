/*
 * @Author: 陈宇环
 * @Date: 2023-03-24 14:01:06
 * @LastEditTime: 2023-07-03 15:40:08
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, PropType } from 'vue'
import styles from '@/components/BsForm/style.module.scss'
import { passwordProps } from '../interface/index'
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent'

export default defineComponent({
  name: 'BsPasswod',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    config: {
      type: Object as PropType<Partial<passwordProps>>,
      default() {
        return {}
      },
    },
  },
  emits: ['update:modelValue', 'update:value', 'change'],
  setup(props: any, { emit }) {
    const { dynamicPassword } = new CustomDynamicComponent()
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
      return <div class={['BsPassword', styles.width100]}>
        <dynamicPassword
          class="password"
          type='password'
          /** ele 特有属性-start */
          model-value={props.modelValue}
          /** ele 特有属性-end */
          /** ant 特有属性 - start */
          value={props.modelValue}
          /** ant 特有属性 - end */
          placeholder={props.config.placeholder || `请输入${props.config?.label ?? ''}`}
          disabled={!!props.config.disabled}
          autocomplete="on"

          /** ant-design-vue && ele 统一封装 - start */
          clearable={props.config.clearable !== false}  // ele 特有属性 - 清除按钮
          allowClear={props.config.allowClear ?? props.config.clearable !== false} // ant-design-vue特有属性
          show-password={props.config.showPassword} // ele 特有属性 - 是否显隐密码切换按钮
          visibilityToggle={props.config.showPassword} // ant-design-vue特有属性 - 是否显隐密码切换按钮
          /** ant-design-vue && ele 统一封装 - end */

          {...props.config.nativeProps}
          onInput={updateValue}
        />
      </div>
    }
  },
})
export * from '../interface/index'