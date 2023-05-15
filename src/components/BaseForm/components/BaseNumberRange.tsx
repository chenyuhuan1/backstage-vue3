/*
 * @Author: 陈宇环
 * @Date: 2023-01-03 15:27:55
 * @LastEditTime: 2023-05-08 11:50:42
 * @LastEditors: tanpeng
 * @Description:
 */
import { defineComponent, PropType, ref, watch } from 'vue'
import styles from '@/components/BaseForm/style.module.scss'
import { numberRangeProps } from '../interface/index'


export default defineComponent({
  name: 'EaseNumberRange',
  props: {
    modelValue: {
      type: [String, Number],
      default: undefined,
    },
    propEnd: {
      type: [String, Number],
      default: undefined,
    },
    config: {
      type: Object as PropType<numberRangeProps>,
      default() {
        return {}
      },
    },
  },
  emits: ['update:modelValue', 'update:propEnd', 'change'],
  setup(props: any, { emit }) {
    const cloneModelValue = ref<any>('')
    watch(() => props.modelValue, () => {
      cloneModelValue.value = props.modelValue
    }, { immediate: true })
    function updateValue(value: any) {
      emit('update:modelValue', value)
      emit('change', {
        props: props.config.prop,
        value,
      })
    }

    const clonePropEnd = ref<any>('')
    watch(() => props.propEnd, () => {
      clonePropEnd.value = props.propEnd
    }, { immediate: true })
    function updateEndValue(value: any) {
      emit('update:propEnd', value)
      emit('change', {
        props: props.config.propEnd,
        value,
      })
    }
    return () => {
      return <div class={['BaseNumberRange', styles.width100, styles.BaseNumberRange]}>
        <el-input-number
          v-model={cloneModelValue.value}
          class={['inputNumber', props.config.controls !== true ? styles.noControls : null]}
          placeholder={props.config.placeholderStart || props.config.placeholder || `请选择${props.config.label}`}
          disabled={!!props.config.disabled}
          clearable={props.config.clearable !== false}
          controls={props.config.controls === true}
          type={props.config.type || 'text'}
          value-on-clear={null}
          {...props.config.nativeProps}
          onChange={updateValue}
        />
        <span style="padding: 0 5px;">~</span>
        <el-input-number
          v-model={clonePropEnd.value}
          class={['inputNumber', props.config.controls !== true ? styles.noControls : null]}
          placeholder={props.config.placeholderEnd || props.config.placeholder || `请选择${props.config.label}`}
          disabled={!!props.config.disabled}
          clearable={props.config.clearable !== false}
          controls={props.config.controls === true}
          type={props.config.type || 'text'}
          value-on-clear={null}
          {...props.config.nativeProps}
          onChange={updateEndValue}
        />
      </div>
    }
  },
})