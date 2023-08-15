/*
 * @Author: 陈宇环
 * @Date: 2022-12-15 17:30:23
 * @LastEditTime: 2023-08-15 18:50:37
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, watch, ref, PropType } from 'vue'
import * as utils from '@/utils/common'
import { selectProps } from '../interface/index'
import styles from '@/components/BsForm/style.module.scss'
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent'
import { textModeFilter, getOptionsLabel } from '../toolFn'

export default defineComponent({
  name: 'BsSelect',
  props: {
    modelValue: {
      type: [Number, String, Array, Object, Boolean],
      default: '',
    },
    config: {
      type: Object as PropType<Partial<selectProps>>,
      default() {
        return {}
      },
    },
    textMode: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'update:value', 'change', 'setProp2'],
  setup(props: any, { emit }) {
    const { dynamicSelect, dynamicSelectOption } = new CustomDynamicComponent()
    const options = ref<any>([])
    const optionsLoading = ref<boolean>(false)
    watch(() => props.config.options, async() => {
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

    // watch(() => props.modelValue, () => {
    //   updateValue(props.modelValue)
    // })

    function updateValue(value: number | string | number|string[]) {
      if (value === '') {
        emit('update:modelValue', null)
        emit('update:value', null)
      } else {
        emit('update:modelValue', value)
        emit('update:value', value)
      }
      emit('change', {
        prop: props.config?.prop ?? '',
        value: value === '' ? null : value,
        curItem: getOption(value),
        options: options.value,
      })
      // 将options中得prop2字段也设置到form中
      if (props?.config?.prop2) {
        if (value && Array.isArray(value)) { // 多选
          if (props?.config?.remote) { // 多选 && 远程搜索
            throw new Error('BsSelect组件远程搜索且多选情况下不支持绑定prop2,请检查配置')
          } else { // 多选 && !远程搜索
            const prop2List:any = []
            value.forEach((item) => {
              prop2List.push(getOption(item)[props?.config?.prop2])
            })
            emit('setProp2', prop2List)
          }
        } else { // 单选
          emit('setProp2', getOption(value)[props?.config?.prop2])
        }
      }
    }

    /**
     * @description: 获取选中得item
     * @param {*} value 当前选择中得value
     * @return any 选中得item
     */
    const getOption = (value: any) => {
      if (props.config.multiple) {
        const optionArr = options.value.filter((option: any) => value?.includes(option.value)) ?? []
        return optionArr
      } else {
        const option = options.value.find((option: any) => option.value === value)
        return option
      }
    }

    // 远程搜索方法，必须将filterable、remote设置成true
    const remoteMethod = async(query: string) => {
      if (!props?.config?.remoteMethod) {
        return
      }
      optionsLoading.value = true
      options.value = await props?.config?.remoteMethod(query)
      optionsLoading.value = false
    }

    const defaultFilterOption = (inputValue:string, option:any) => {
      return option?.label?.indexOf(inputValue) >= 0
    }

    return () => {
      return <div class={['bs-select', styles.width100]}>
        {textModeFilter(props.textMode, getOptionsLabel(getOption(props.modelValue)) ?? '', props.config.textModeRender && props.config.textModeRender({
          value: props.modelValue,
          options,
          curItem: getOption(props.modelValue),
        }),
        <dynamicSelect
          loading={optionsLoading.value}
          class={[styles.width100]}
          /** ele 特有属性-start */
          model-value={props.modelValue}
          /** ele 特有属性-end */
          /** ant 特有属性 - start */
          value={props.modelValue}
          /** ant 特有属性 - end */
          placeholder={props.config.placeholder || `请选择${props.config?.label ?? ''}`}
          disabled={!!props.config.disabled}

          /** ant-design-vue && ele 统一封装 - start */
          clearable={props.config.clearable !== false} // ele 特有属性
          allowClear={props.config.allowClear ?? props.config.clearable !== false} // ant-design-vue特有属性
          filterable={props.config.filterable !== false}  // ele 特有属性
          showSearch={props.config.showSearch ?? props.config.filterable !== false}  // ant-design-vue特有属性
          multiple={props.config.multiple === true}  // ele 特有属性
          mode={props.config.mode ? props.config.mode : props.config.multiple === true ? 'multiple' : undefined}  // ant-design-vue特有属性
          /** ant-design-vue && ele 统一封装 - end */

          /** ant-design-vue 特有属性-start */
          filterOption={props?.config?.remoteMethod ? false : props.config.filterOption ?? defaultFilterOption} // ant-design-vue特有属性  默认添加按label模糊查找
          onSearch={remoteMethod}  // 必须将filterOption设置成false
          /** ant-design-vue 特有属性-start */

          /** ele 特有属性-start */
          remote={props.config.remote === true}
          remote-method={props.config.remote === true ? remoteMethod : undefined}
          collapse-tags={props.config.collapseTags !== false}
          collapse-tags-tooltip={props.config.collapseTagsTooltip !== false}
          multiple-limit={props.config.multipleLimit ? props.config.multipleLimit : 0}
          reserveKeyword={props.config.reserveKeyword === true}
          /** ele 特有属性-end */
          
          {...props.config.nativeProps}
          onChange={updateValue}
        >
          {
            options.value && Array.isArray(options.value) && options.value.map((item: any) => {
              return <dynamicSelectOption
                key={item.value}
                label={item.label}
                value={item.value}
                {...props.config.nativeProps}
                v-slots={props.config.format ? {
                  default: () => {
                    return props.config.format(item)
                  },
                } : {}}
              >
                {item.label}
              </dynamicSelectOption>
            })
          }
        </dynamicSelect>,
        )}
      </div>
    }
  },
})

export * from '../interface/index'