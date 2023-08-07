/*
 * @Author: 陈宇环
 * @Date: 2022-12-18 13:40:22
 * @LastEditTime: 2023-07-03 16:10:53
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, watch, ref, PropType } from 'vue'
import * as utils from '@/utils/common'
import { radioProps } from '../interface/index'
import styles from '@/components/BsForm/style.module.scss'
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent'

export default defineComponent({
  name: 'BsRadio',
  props: {
    modelValue: {
      type: [Number, String, Boolean],
      default: undefined,
    },
    config: {
      type: Object as PropType<Partial<radioProps>>,
      default() {
        return {}
      },
    },
  },
  emits: ['update:modelValue', 'change', 'setProp2'],
  setup(props: any, { emit }) {
    const { dynamicRadio, dynamicRadioGroup, dynamicRadioButton } = new CustomDynamicComponent()
    const options = ref<any>([])
    const optionsLoading = ref<boolean>(false)
    watch(() => props.config.options, async() => {
      // 获取options下拉选项
      if (Array.isArray(props.config.options)) {  // 传入对象数组
        options.value = props.config.options
      } else if (Object.prototype.toString.call(props.config.options) === '[object Object]') {  // 字典/接口获取
        if (props.config.options.type === 'api') {
          optionsLoading.value = true
          options.value = await props.config.options.getData()
          optionsLoading.value = false
        } else if (props.config.options.type === 'dic') {
          options.value = utils.getDicByKey(props.config.options.key)
        }
      }

      options.value = options?.value?.map((v: any) => {
        return {
          ...v,
          label: v[props.config.labelKey || 'label'],
          value: v[props.config.valueKey || 'value'],
        }
      }) ?? []
      
    }, { immediate: true, deep: true })

    function updateValue(value: number | string | boolean | Event): any {
      let cloneValue = value

      // ant-Design-vue change返回的是 e:Event 对象
      if (CustomDynamicComponent.language === CustomDynamicComponent.antLanguage) {
        cloneValue = ((value as Event).target as HTMLInputElement).value
      }

      emit('update:modelValue', cloneValue)
      emit('change', {
        prop: props.config?.prop ?? '',
        value: cloneValue,
        options,
      })

    }

    return () => {
      const componentInstance = props.config.showType === 'button'  && CustomDynamicComponent.language === CustomDynamicComponent.eleLanguage  ? dynamicRadioButton : dynamicRadio
      return <div class={['BsRadio', styles.width100]}>
        <dynamicRadioGroup
          loading={optionsLoading.value}
          class="radio"
          model-value={props.modelValue}
          value={props.modelValue}  /** ant-design-vue特有属性 */
          disabled={!!props.config.disabled}
          {...props.config.nativeProps}
          onChange={updateValue}
        >
          {
            options.value && Array.isArray(options.value) && options.value.map((item: any, index: number) => {
              return  <componentInstance
                key={item.value + '_' + index}
                label={item.value}
                value={item.value}
                {...props.config.nativeProps}
                v-slots={props.config.format ? {  /** ele 特有属性 */
                  default: () => {
                    return props.config.format(item)
                  },
                } : {}}
              >
                { item.label }
              </componentInstance>
            })
          }
        </dynamicRadioGroup>
      </div>
    }
  },
})
export * from '../interface/index'