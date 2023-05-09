/*
 * @Author: 陈宇环
 * @Date: 2022-12-20 14:37:53
 * @LastEditTime: 2023-05-08 11:50:25
 * @LastEditors: tanpeng
 * @Description:
 */
import { defineComponent, PropType } from 'vue'
import styles from '@/components/BaseForm/style.module.scss'
import { inputProps } from '../interface/index'

export default defineComponent({
  name: 'CInput',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    config: {
      type: Object as PropType<inputProps>,
      default() {
        return {}
      },
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props: any, { emit }) {
    function updateValue(value: number | string) {
      emit('update:modelValue', value)
      emit('change', {
        props: props.config.prop,
        value,
      })
    }
    return () => {
      return <div class={['baseInput', styles.width100]}>
        <el-input
          class="input"
          model-value={props.modelValue}
          placeholder={props.config.placeholder || `请输入${props.config.label}`}
          show-password={props.config.showPassword}
          disabled={!!props.config.disabled}
          type={props.config.type || 'text'}
          rows={props.config.rows || 3}
          clearable={props.config.clearable !== false}
          {...props.config.nativeProps}
          onInput={updateValue}
        />
      </div>
    }
  },
})