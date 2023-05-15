/*
 * @Author: 陈宇环
 * @Date: 2023-01-03 15:19:17
 * @LastEditTime: 2023-05-08 11:50:34
 * @LastEditors: tanpeng
 * @Description:
 */
import { defineComponent, PropType } from 'vue'
import styles from '@/components/BaseForm/style.module.scss'
import { numberProps } from '../interface/index'


export default defineComponent({
  name: 'EaseNumber',
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
      return <div class={['baseNumber', styles.width100, styles.BaseNumber]}>
        <el-input-number
          class={{ number: true, textLeft: props.config.controls !== true }}
          model-value={props.modelValue}
          placeholder={props.config.placeholder || `请输入${props.config.label}`}
          disabled={!!props.config.disabled}
          controls={props.config.controls === true}
          type={props.config.type || 'text'}
          value-on-clear={null}
          {...props.config.nativeProps}
          onInput={updateValue}
        />
      </div>
    }
  },
})