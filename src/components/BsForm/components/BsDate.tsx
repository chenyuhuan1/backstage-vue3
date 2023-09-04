/*
 * @Author: 陈宇环
 * @Date: 2022-12-20 11:33:03
 * @LastEditTime: 2023-08-15 18:47:08
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, watch, ref, PropType } from 'vue'
import { dateProps } from '../interface/index'
import styles from '@/components/BsForm/style.module.scss'
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent'
import dayjs, { Dayjs } from 'dayjs'
import { textModeFilter } from '../toolFn'

export default defineComponent({
  name: 'BsDate',
  props: {
    modelValue: {
      type: [String, Array],
      default: '',
    },
    propSecond: {
      type: [String],
      default: '',
    },
    propThird: {
      type: [String],
      default: '',
    },
    config: {
      type: Object as PropType<dateProps>,
      default() {
        return {}
      },
    },
    textMode: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'update:value', 'change', 'update:propSecond', 'update:propThird'],
  setup(props: any, { emit }) {
    function getFormat(type: string, formatType: 'format' | 'valueFormat'): string {
      if (['date', 'daterange'].includes(type)) {
        return 'YYYY-MM-DD'
      }
      if (['month', 'monthrange'].includes(type)) {
        return 'YYYY-MM'
      }
      if (type === 'year') {
        return 'YYYY'
      }
      if (type === 'week') {
        if (formatType === 'format') {
          return '第 ww 周'
        } else {
          return ''
        }
      }
      if (['datetime', 'datetimerange'].includes(type)) {
        return 'YYYY-MM-DD HH:mm:ss'
      }
      return 'YYYY-MM-DD'
    }
    const cloneModelValue = ref<Dayjs>(dayjs())
    watch(() => props.modelValue, () => {
      cloneModelValue.value = props.modelValue
    }, { immediate: true })

    // 解决datetime类型，不点击确认按钮无法触发change事件bug
    watch(() => cloneModelValue.value, () => {
      updateValue(cloneModelValue.value)
    })

    function updateValue(value: Dayjs) {
      emit('update:modelValue', value)
      emit('update:value', value)
      // 当是范围时间选择器时，开始和结束时间处理
      if (Array.isArray(value) && value?.length === 2) {
        props.config.propSecond && emit('update:propSecond', value[0])
        props.config.propThird && emit('update:propThird', value[1])
      }
      // 时间选择器被清空时，重置propSecond和prop2
      if (!value) {
        props.config.propSecond && emit('update:propSecond', null)
        props.config.propThird && emit('update:propThird', null)
      }
      emit('change', {
        prop: props.config?.prop ?? '',
        value,
      })
    }

    const getText = () => {
      if (!cloneModelValue.value) {
        return ''
      }
      if (Array.isArray(cloneModelValue.value)) {
        return cloneModelValue.value.map((item: any) => {
          if (!item) {
            return '-'
          }
          return dayjs(item).format(getFormat(props.config.type, 'format'))
        }).join('~')
      }
      return dayjs(cloneModelValue.value).format(getFormat(props.config.type, 'format'))
    }

    return () => {
      const dynamicComponent = new CustomDynamicComponent()
      const { dynamicDatePicker, dynamicRangePicker } = dynamicComponent
      let dateComp =  dynamicDatePicker
      // antd 的时间范围组件特殊处理
      if (CustomDynamicComponent.language === CustomDynamicComponent.antLanguage && props.config.type?.indexOf('range') > -1) {
        dateComp = dynamicRangePicker
      }
      const getPicker = (type: string) => {
        if (CustomDynamicComponent.language === CustomDynamicComponent.antLanguage && props.config.type?.indexOf('range') > -1) {
          return props.config.type.replace('range', '')
        }
        return type
      }
      return <div class={['bs-date', styles.width100]}>
        {textModeFilter(props.textMode, getText() ?? '', props.config.textModeRender && props.config.textModeRender({
          value: cloneModelValue.value,
        }),
        <dateComp
          class={[styles.width100]}
          v-models={[
            /** ant 特有属性 - start */
            [cloneModelValue.value],
            /** ele 特有属性 - end */
            /** ant  特有属性- start */
            [cloneModelValue.value, 'value'],
            /** ant  特有属性- end */
          ]}
          placeholder={props.config.placeholder || `请选择${props.config?.label ?? ''}`}
          disabled={!!props.config.disabled}
          format={props.config.format || getFormat(props.config.type, 'format')}
          value-format={props.config.valueFormat || getFormat(props.config.type, 'valueFormat')}

          /** ant-design-vue && ele 统一封装 - start */
          type={props.config.type || 'date'}   /** ele 专有属性*/
          picker={ getPicker(props.config.type) || 'date'}   /** ant-design-vue专有属性*/
          clearable={props.config.clearable !== false} // ele 特有属性
          allowClear={props.config.allowClear ?? props.config.clearable !== false} // ant-design-vue特有属性
          /** ant-design-vue && ele 统一封装 - end */
          start-placeholder={props.config.startPlaceholder || '开始时间'} // ele
          end-placeholder={props.config.endPlaceholder || '结束时间'} // ele
          {...props.config.nativeProps}
          onChange={updateValue}
        />,
        )}
      </div>
    }
  },
})

export * from '../interface/index'
