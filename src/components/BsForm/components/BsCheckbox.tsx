/*
 * @Author: 陈宇环
 * @Date: 2022-12-20 09:56:21
 * @LastEditTime: 2023-07-03 16:09:56
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, watch, ref, PropType } from 'vue'
import * as utils from '@/utils/common'
import { checkboxProps } from '../interface/index'
import styles from '@/components/BsForm/style.module.scss'
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent'


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
  },
  emits: ['update:modelValue', 'change'],
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


    function updateValue(value: any): void {
      emit('update:modelValue', value)
      emit('change', {
        prop: props.config?.prop ?? '',
        value,
        options,
      })
    }

    return () => {
      const dynamicComponent = new CustomDynamicComponent()
      const { dynamicCheckBoxGroup, dynamicCheckBox, dynamicCheckBoxButton } = dynamicComponent
      // dynamicCheckBoxButton 只有element-plus有这个组件
      const componentInstance = props.config.showType === 'button' && CustomDynamicComponent.language === CustomDynamicComponent.eleLanguage ? dynamicCheckBoxButton : dynamicCheckBox
      return <div class={['BsCheckbox', styles.width100]}>
        <dynamicCheckBoxGroup
          loading={optionsLoading.value}
          class="checkbox"
          model-value={props.modelValue}
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
        </dynamicCheckBoxGroup>
      </div>
    }
  },
})

export * from '../interface/index'