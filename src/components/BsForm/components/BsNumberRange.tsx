/*
 * @Author: 陈宇环
 * @Date: 2023-01-03 15:27:55
 * @LastEditTime: 2023-07-03 15:56:17
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, PropType, ref, watch } from 'vue'
import styles from '@/components/BsForm/style.module.scss'
import { numberRangeProps } from '../interface/index'
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent'

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
  },
  emits: ['update:modelValue', 'update:propEnd', 'change'],
  setup(props: any, { emit }) {
    const { dynamicNumber } = new CustomDynamicComponent()
    const cloneModelValue = ref<any>('')
    watch(() => props.modelValue, () => {
      cloneModelValue.value = props.modelValue
    }, { immediate: true })
    function updateValue(value: number | string) {
      emit('update:modelValue', value)
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
    return () => {
      // ant-design-vue formitem只允许一个form控件
      const formItem = CustomDynamicComponent.language === CustomDynamicComponent.antLanguage ? <a-form-item /> : <template />
      return <div class={['BsNumberRange', styles.width100, styles.BsNumberRange]}>
        <dynamicNumber
          style={{ flex: 1 }}
          v-model={cloneModelValue.value}
          class={['inputNumber', props.config.controls !== true ? styles.noControls : null]}
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
            v-model={clonePropEnd.value}
            class={['inputNumber', props.config.controls !== true ? styles.noControls : null]}
            placeholder={props.config.placeholderEnd || props.config.placeholder || `请选择${props.config?.label ?? ''}`}
            disabled={!!props.config.disabled}
            controls={props.config.controls === true}
            {...props.config.nativeProps}
            onInput={updateEndValue}
          />
        </formItem>
      </div>
    }
  },
})
export * from '../interface/index'