/*
 * @Author: 陈宇环
 * @Date: 2022-04-28 15:34:56
 * @LastEditTime: 2023-08-28 15:33:30
 * @LastEditors: 陈宇环
 * @Description: 'yearRange' | 'monthRange' | 'dateRange' | 'datetimeRange'组件
 */
import { defineComponent, watch, ref, PropType } from 'vue'
import { dateRangeProps } from '../interface/index'
import dayjs from 'dayjs'
import styles from '@/components/BsForm/style.module.scss'
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent'
import { textModeFilter } from '../toolFn'

export default defineComponent({
  name: 'BsDateRange',
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
    textMode: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'update:value', 'update:propEnd', 'change'],
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
      emit('update:value', value)
      emit('change', {
        type: 'start',
        prop: props.config?.prop ?? '',
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
        type: 'end',
        prop: props.config?.propEnd ?? '',
        value,
      })
    }

    function disabledDate(date: any): boolean {
      if (clonePropEnd.value) {
        // 这里format为了解决element默认08:00:00
        return +new Date(dayjs(date).format('YYYY-MM-DD HH:mm:ss')) > +new Date(dayjs(clonePropEnd.value).format('YYYY-MM-DD HH:mm:ss'))
      }
      return false
    }
    function disabledDateEnd(date: any): boolean {
      if (cloneModelValue.value) {
        return +new Date(dayjs(date).format('YYYY-MM-DD HH:mm:ss')) < +new Date(dayjs(cloneModelValue.value).format('YYYY-MM-DD HH:mm:ss'))
      }
      return false
    }


    function removerRange(type: string): any {
      return type?.replace('Range', '')
    }

    function getFormat(type: string, formatType: 'format' | 'valueFormat'): string | undefined {
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
          return undefined
        }
      }
      if (removerRange(type) === 'datetime') {
        return 'YYYY-MM-DD HH:mm:ss'
      }
      return 'YYYY-MM-DD'
    }

    const getText = () => {
      if (!cloneModelValue.value && !clonePropEnd.value) {
        return ''
      }
      const startText = cloneModelValue.value ? dayjs(cloneModelValue.value).format(getFormat(props.config.type, 'format')) : '-'
      const endText = clonePropEnd.value ? dayjs(clonePropEnd.value).format(getFormat(props.config.type, 'format')) : '-'
      return `${startText}~${endText}`
    }

    return () => {
      const dynamicComponent = new CustomDynamicComponent()
      const { dynamicDatePicker } = dynamicComponent
      // ant-design-vue formitem只允许一个form控件
      const formItem = CustomDynamicComponent.language === CustomDynamicComponent.antLanguage ? <a-form-item /> : <template />
      return <div class={['bs-date-range', styles.width100]} >
        {textModeFilter(props.textMode, getText() ?? '', props.config.textModeRender && props.config.textModeRender({
          value: cloneModelValue.value,
          endValue: clonePropEnd.value,
        }),
        <div style={{ display: 'flex' }}>
          <dynamicDatePicker
            style={{ flex: 1 }}
            v-models={[
              /** ant 特有属性 - start */
              [cloneModelValue.value],
              /** ant 特有属性 - end */
              /** ele 特有属性 - start */
              [cloneModelValue.value, 'value'],
              /** ele 特有属性 - end */
            ]}
            placeholder={props.config.placeholderStart || props.config.placeholder || `请选择${props.config?.label ?? ''}`}
            disabled={!!props.config.disabled}
            format={props.config.format || getFormat(props.config.type, 'format')}
            value-format={props.config.valueFormat || getFormat(props.config.type, 'valueFormat')}
            disabled-date={props.config.disabledDate || disabledDate}

            /** ant-design-vue && ele 统一封装 - start */
            type={removerRange(props.config.type) || 'date'}   /** ele 专有属性*/
            picker={removerRange(props.config.type) || 'date'}   /** ant-design-vue专有属性*/
            clearable={props.config.clearable !== false} // ele 特有属性
            allowClear={props.config.allowClear ?? props.config.clearable !== false} // ant-design-vue特有属性
            /** ant-design-vue && ele 统一封装 - end */

            onChange={updateValue}
            {...props.config.nativeProps}
          />
          <span style="padding: 0 5px;">~</span>
          <formItem style="margin: 0;flex: 1;display: flex;">
            <dynamicDatePicker
              style={{ flex: 1, width: '100%' }}
              v-models={[
                /** ant 特有属性 - start */
                [clonePropEnd.value],
                /** ant 特有属性 - end */
                /** ele 特有属性 - start */
                [clonePropEnd.value, 'value'],
                /** ele 特有属性 - end */
              ]}
              placeholder={props.config.placeholderEnd || props.config.placeholder || `请选择${props.config?.label ?? ''}`}
              disabled={!!props.config.disabled}
              format={props.config.format || getFormat(props.config.type, 'format')}
              value-format={props.config.valueFormat || getFormat(props.config.type, 'valueFormat')}
              disabled-date={props.config.disabledDate || disabledDateEnd}

              /** ant-design-vue && ele 统一封装 - start */
              type={removerRange(props.config.type) || 'date'}   /** ele 专有属性*/
              picker={removerRange(props.config.type) || 'date'}   /** ant-design-vue专有属性*/
              clearable={props.config.clearable !== false} // ele 特有属性
              allowClear={props.config.allowClear ?? props.config.clearable !== false} // ant-design-vue特有属性
              /** ant-design-vue && ele 统一封装 - end */

              {...props.config.nativeProps}
              onChange={updateEndValue}
            />
          </formItem>
        </div>,
        )}
      </div>
    }
  },
})

export * from '../interface/index'