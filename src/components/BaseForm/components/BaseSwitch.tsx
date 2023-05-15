/*
 * @Author: 陈宇环
 * @Date: 2022-12-20 14:55:23
 * @LastEditTime: 2023-05-08 11:51:11
 * @LastEditors: tanpeng
 * @Description:
 */
import { defineComponent, PropType } from 'vue'
import { switchProps } from '../interface/index'
import styles from '@/components/BaseForm/style.module.scss'

export default defineComponent({
  name: 'EaseSwitch',
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
  },
  emits: ['update:modelValue', 'change'],
  setup(props: any, { emit }) {
    function updateValue(value: number | string | boolean): any {
      emit('update:modelValue', value)
      emit('change', {
        props: props.config.prop,
        value,
      })
    }
    return () => {
      return <div class={['BaseSwitch', styles.width100]}>
        <el-switch
          class="switch"
          model-value={props.modelValue}
          placeholder={props.config.placeholder || `请输入${props.config.label}`}
          disabled={!!props.config.disabled}
          clearable={props.config.clearable !== false}
          {...props.config.nativeProps}
          onChange={updateValue}
        />
      </div>
    }
  },
})
