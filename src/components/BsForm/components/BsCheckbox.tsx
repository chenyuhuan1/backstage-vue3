/*
 * @Author: 陈宇环
 * @Date: 2022-12-20 09:56:21
 * @LastEditTime: 2023-08-15 17:19:11
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, watch, ref, PropType } from 'vue'
import * as utils from '@/utils/common'
import { checkboxProps } from '../interface/index'
import styles from '@/components/BsForm/style.module.scss'
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent'
import { textModeFilter, getOptionsLabel } from '../toolFn'

export default defineComponent({
  name: 'BsCheckbox',
  props: {
    modelValue: {
      type: Array,
      default() {
        return []
      },
    },
    config: {
      type: Object as PropType<Partial<checkboxProps>>,
      default() {
        return {}
      },
    },
    textMode: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'update:value', 'change'],
  setup(props: any, { emit }) {
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
      // 兼容改变
      options.value = options?.value?.map((v: any) => {
        return {
          ...v,
          label: v[props.config.labelKey || 'label'],
          value: v[props.config.valueKey || 'value'],
        }
      }) ?? []

    }, { immediate: true, deep: true })

    /**
     * @description: 获取选中得item
     * @param {*} value 当前选择中得value
     * @return any 选中得item
     */
    const getOption = (value: any) => {
      try {
        const optionArr = options.value.filter((option: any) => value?.includes(option.value)) ?? []
        return optionArr
      } catch (error) {
        console.log(error)
        return []
      }
    }

    function updateValue(value: any): void {
      emit('update:modelValue', value)
      emit('update:value', value)
      emit('change', {
        prop: props.config?.prop ?? '',
        value,
        options,
        curItem: getOption(value),
      })
    }

    return () => {
      const dynamicComponent = new CustomDynamicComponent()
      const { dynamicCheckBoxGroup, dynamicCheckBox, dynamicCheckBoxButton } = dynamicComponent
      // dynamicCheckBoxButton 只有element-plus有这个组件
      const componentInstance = props.config.showType === 'button' && CustomDynamicComponent.language === CustomDynamicComponent.eleLanguage ? dynamicCheckBoxButton : dynamicCheckBox
      return <div class={['bs-checkbox', styles.width100]}>
        {textModeFilter(props.textMode, getOptionsLabel(getOption(props.modelValue)) ?? '', props.config.textModeRender && props.config.textModeRender({
          value: props.modelValue,
          options: options.value,
          curItem: getOption(props.modelValue),
        }),
        <dynamicCheckBoxGroup
          loading={optionsLoading.value}
          /** ele 特有属性-start */
          model-value={props.modelValue}
          /** ele 特有属性-end */
          /** ant 特有属性 - start */
          value={props.modelValue}
          /** ant 特有属性 - end */
          placeholder={props.config.placeholder || `请选择${props.config?.label ?? ''}`}
          disabled={!!props.config.disabled}
          clearable={props.config.clearable !== false}
          options={options.value/** 只有ant-design-vue使用该属性 */}
          {...props.config.nativeProps}
          onChange={updateValue}
        >
          {
            /** 只有element-plus使用以下逻辑 */
            CustomDynamicComponent.language === CustomDynamicComponent.eleLanguage && options.value && Array.isArray(options.value) && options.value.map((item: any, index: number) => {
              return  <componentInstance
                key={item.value + '_' + index}
                label={item.value}
                {...props.config.nativeProps}
                v-slots={props.config.format ? {
                  default: () => {
                    return props.config.format(item)
                  },
                } : {}}
              >
                { item.label }
              </componentInstance>
            })
          }
        </dynamicCheckBoxGroup>,
        )}
      </div>
    }
  },
})

export * from '../interface/index'