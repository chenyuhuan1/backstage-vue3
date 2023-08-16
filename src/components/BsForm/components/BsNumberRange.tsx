/*
 * @Author: 陈宇环
 * @Date: 2023-01-03 15:27:55
 * @LastEditTime: 2023-08-15 18:43:48
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, PropType, ref, watch } from 'vue'
import styles from '@/components/BsForm/style.module.scss'
import { numberRangeProps } from '../interface/index'
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent'
import { textModeFilter } from '../toolFn'

export default defineComponent({
  name: 'BsNumberRange',
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
      type: Object as PropType<Partial<numberRangeProps>>,
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
    const { dynamicNumber } = new CustomDynamicComponent()
    const cloneModelValue = ref<any>('')
    watch(() => props.modelValue, () => {
      cloneModelValue.value = props.modelValue
    }, { immediate: true })
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
    function updateEndValue(value: number | string) {
      emit('update:propEnd', value)
      emit('change', {
        type: 'end',
        prop: props.config?.propEnd ?? '',
        value,
      })
    }

    const getText = () => {
      if ((!cloneModelValue.value && cloneModelValue.value !== 0) && (!clonePropEnd.value && clonePropEnd.value !== 0)) {
        return ''
      }
      const startText = cloneModelValue.value === '' || cloneModelValue.value === undefined  ? cloneModelValue.value : '-'
      const endText = clonePropEnd.value === '' || clonePropEnd.value === undefined ? clonePropEnd.value : '-'
      return `${startText}~${endText}`
    }


    return () => {
      // ant-design-vue formitem只允许一个form控件
      const formItem = CustomDynamicComponent.language === CustomDynamicComponent.antLanguage ? <a-form-item /> : <template />
      return <div class={['bs-number-range', styles.width100, styles.BsNumberRange]}>
        {textModeFilter(props.textMode, getText() ?? '', props.config.textModeRender && props.config.textModeRender({
          value: cloneModelValue.value,
          endValue: clonePropEnd.value,
        }),
        <div style={{ display: 'flex' }}>
          <dynamicNumber
            style={{ flex: 1 }}
            v-models={[
              /** ant 特有属性 - start */
              [cloneModelValue.value],
              /** ant 特有属性 - end */
              /** ele 特有属性 - start */
              [cloneModelValue.value, 'value'],
              /** ele 特有属性 - end */
            ]}
            class={[props.config.controls !== true ? styles.noControls : null]}
            placeholder={props.config.placeholderStart || props.config.placeholder || `请选择${props.config?.label ?? ''}`}
            disabled={!!props.config.disabled}
            controls={props.config.controls === true}
            {...props.config.nativeProps}
            onInput={updateValue}
          />
          <span style="padding: 0 5px;">~</span>
          <formItem style="margin: 0;flex: 1;display: flex;">
            <dynamicNumber
              style={{ flex: 1 }}
              v-models={[
                /** ant 特有属性 - start */
                [clonePropEnd.value],
                /** ant 特有属性 - end */
                /** ele 特有属性 - start */
                [clonePropEnd.value, 'value'],
                /** ele 特有属性 - end */
              ]}
              class={[props.config.controls !== true ? styles.noControls : null]}
              placeholder={props.config.placeholderEnd || props.config.placeholder || `请选择${props.config?.label ?? ''}`}
              disabled={!!props.config.disabled}
              controls={props.config.controls === true}
              {...props.config.nativeProps}
              onInput={updateEndValue}
            />
          </formItem>
        </div>,
        )}
      </div>
    }
  },
})
export * from '../interface/index'