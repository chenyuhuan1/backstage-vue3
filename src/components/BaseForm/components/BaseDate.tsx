/*
 * @Author: 陈宇环
 * @Date: 2022-12-20 11:33:03
 * @LastEditTime: 2023-04-13 14:28:59
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, watch, ref, PropType } from 'vue'
import { dateProps } from '../interface/index'
import styles from '@/components/BaseForm/style.module.scss'


export default defineComponent({
  name: 'CDate',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    config: {
      type: Object as PropType<dateProps>,
      default() {
        return {}
      },
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props: any, { emit }) {
    
    const cloneModelValue = ref<any>('')
    watch(() => props.modelValue, () => {
      cloneModelValue.value = props.modelValue
    }, { immediate: true })

    // 解决datetime类型，不点击确认按钮无法触发change事件bug
    watch(() => cloneModelValue.value, () => {
      updateValue(cloneModelValue.value)
    })

    function updateValue(value: number | string) {
      emit('update:modelValue', value)
      emit('change', {
        props: props.config.prop,
        value,
      })
    }

    function getFormat(type: string, formatType: 'format' | 'valueFormat'): string | null {
      if (type === 'date') {
        return 'YYYY-MM-DD'
      }
      if (type === 'month') {
        return 'YYYY-MM'
      }
      if (type === 'year') {
        return 'YYYY'
      }
      if (type === 'week') {
        if (formatType === 'format') {
          return '第 ww 周'
        } else {
          return null
        }
      }
      if (type === 'datetime') {
        return 'YYYY-MM-DD HH:mm:ss'
      }
      return 'YYYY-MM-DD'
    }

    return () => {
      return <div class={['BaseDate', styles.width100]}>
        <el-date-picker
          class={['date', styles.width100]}
          v-model={cloneModelValue.value}
          placeholder={props.config.placeholder || `请选择${props.config.label}`}
          disabled={!!props.config.disabled}
          type={props.config.type || 'date'}
          format={props.config.format || getFormat(props.config.type, 'format')}
          value-format={props.config.valueFormat || getFormat(props.config.type, 'valueFormat')}
          clearable={props.config.clearable !== false}
          {...props.config.nativeProps}
          onChange={updateValue}
        />
      </div>
    }
  },
})
