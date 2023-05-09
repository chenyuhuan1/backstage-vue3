/*
 * @Author: 陈宇环
 * @Date: 2022-04-28 15:34:56
 * @LastEditTime: 2023-05-08 11:50:15
 * @LastEditors: tanpeng
 * @Description: 'yearRange' | 'monthRange' | 'dateRange' | 'datetimeRange'组件
 */
import { defineComponent, watch, ref, PropType } from 'vue'
import { dateRangeProps } from '../interface/index'
import dayjs from 'dayjs'
import styles from '@/components/BaseForm/style.module.scss'


export default defineComponent({
  name: 'CDateRange',
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    propEnd: {
      type: [String, Number],
      default: '',
    },
    config: {
      type: Object as PropType<dateRangeProps>,
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

    const clonePropEnd = ref<any>('')
    watch(() => props.propEnd, () => {
      clonePropEnd.value = props.propEnd
    }, { immediate: true })
    // 解决datetime类型，不点击确认按钮无法触发change事件bug
    watch(() => clonePropEnd.value, () => {
      updateEndValue(clonePropEnd.value)
    })
    function updateEndValue(value: number | string) {
      emit('update:propEnd', value)
      emit('change', {
        props: props.config.propEnd,
        value,
      })
    }

    function disabledDate(date: any): boolean {
      if (clonePropEnd.value) {
        // 这里format为了解决element默认08:00:00
        return +new Date(dayjs(date).format('yyyy-MM-DD HH:mm:ss')) > +new Date(dayjs(clonePropEnd.value).format('yyyy-MM-DD HH:mm:ss'))
      }
      return false
    }
    function disabledDateEnd(date: any): boolean {
      if (cloneModelValue.value) {
        return +new Date(dayjs(date).format('yyyy-MM-DD HH:mm:ss')) < +new Date(dayjs(cloneModelValue.value).format('yyyy-MM-DD HH:mm:ss'))
      }
      return false
    }


    function removerRange(type: string): any {
      return type.replace('Range', '')
    }

    function getFormat(type: string, formatType: 'format' | 'valueFormat'): string | null {
      if (removerRange(type) === 'date') {
        return 'YYYY-MM-DD'
      }
      if (removerRange(type) === 'month') {
        return 'YYYY-MM'
      }
      if (removerRange(type) === 'year') {
        return 'YYYY'
      }
      if (removerRange(type) === 'week') {
        if (formatType === 'format') {
          return '第 ww 周'
        } else {
          return null
        }
      }
      if (removerRange(type) === 'datetime') {
        return 'YYYY-MM-DD HH:mm:ss'
      }
      return 'YYYY-MM-DD'
    }

    return () => {
      return <div class={['BaseDateRange', styles.width100]} style={{ display: 'flex' }}>
        <el-date-picker
          style={{ flex: 1 }}
          v-model={cloneModelValue.value}
          class="date"
          placeholder={props.config.placeholderStart || props.config.placeholder || `请选择${props.config.label}`}
          disabled={!!props.config.disabled}
          type={removerRange(props.config.type) || 'date'}
          format={props.config.format || getFormat(props.config.type, 'format')}
          value-format={props.config.valueFormat || getFormat(props.config.type, 'valueFormat')}
          clearable={props.config.clearable !== false}
          disabled-date={props.config.disabledDate || disabledDate}
          {...props.config.nativeProps}
          onChange={updateValue}
        />
        <span style="padding: 0 5px;">~</span>
        <el-date-picker
          style={{ flex: 1 }}
          v-model={clonePropEnd.value}
          class="date"
          placeholder={props.config.placeholderEnd || props.config.placeholder || `请选择${props.config.label}`}
          disabled={!!props.config.disabled}
          type={removerRange(props.config.type) || 'date'}
          format={props.config.format || getFormat(props.config.type, 'format')}
          value-format={props.config.valueFormat || getFormat(props.config.type, 'valueFormat')}
          clearable={props.config.clearable !== false}
          disabled-date={props.config.disabledDate || disabledDateEnd}
          {...props.config.nativeProps}
          onChange={updateEndValue}
        />
      </div>
    }
  },
})
