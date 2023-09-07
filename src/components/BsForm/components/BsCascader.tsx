/*
 * @Author: 陈宇环
 * @Date: 2022-09-07 16:37:21
 * @LastEditTime: 2023-09-01 11:16:43
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, watch, ref, PropType } from 'vue'
import * as utils from '@/utils/common'
import type { cascaderProps } from '../interface/index'
import styles from '@/components/BsForm/style.module.scss'
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent'
import { textModeFilter } from '../toolFn'

export default defineComponent({
  name: 'BsCascader',
  props: {
    modelValue: {
      type: [Number, String, Array, Object, Boolean],
      default: '',
    },
    config: {
      type: Object as PropType<cascaderProps>,
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
    const options = ref<{[label: string]: any}[]>([])
    const optionsLoading = ref<boolean>(false)
    watch(() => props.config.options, async() => {
      // 获取options下拉选项
      if (Array.isArray(props.config.options)) {  // 传入对象数组
        options.value = props.config.options
      } else if (Object.prototype.toString.call(props.config.options) === '[object Object]') {  // 字典/接口获取
        if (props.config?.options?.type === 'api') {
          optionsLoading.value = true
          options.value = await props.config.options.getData()
          optionsLoading.value = false
        } else if (props.config?.options?.type === 'dic') {
          options.value = utils.getDicByKey(props.config.options.key)
        }
      }
    }, { immediate: true, deep: true })

    /**
     * @description: 获取选中得item
     * @param {*} value 当前选择中得value ps:
     *                  单选：'changsha' || ['hunan','changsha'](开启emitPath时)
     *                  多选：['changsha','yiyang'] || [['hunan','changsha'], ['hunan', 'yiyang']](开启emitPath时)
     * @return any 选中得item
     */
    const getOption = (value: any) => {
      let curItem: any
      let valueString: any
      const valueIsArray = Array.isArray(value)
      utils.treeForeach(options.value, (node) => {
        if (props.config.multiple) {
          try {
            valueString = value && Array.isArray(value) ? value.map((item: any) => Array.isArray(item) ? item[item.length - 1] : item) : []
            if (valueString.includes(node[props?.config?.valueKey ?? 'value'])) {
              if (!Array.isArray(curItem)) {
                curItem = []
              }
              curItem.push(node)
            }
          } catch (error) {
            curItem = []
            console.log(error)
          }
        } else {
          try {
            if (valueIsArray) {  // emitPath 模式
              valueString = value[value.length - 1]
            }
            if (node[props?.config?.valueKey ?? 'value'] === valueString) {
              curItem = node
            }
          } catch (error) {
            curItem = {}
            console.log(error)
          }
          
        }
      }, props.config.childrenKey ?? 'children')
      return curItem
    }

    const handleChange = (value: any) => {
      emit('update:modelValue', value)
      emit('update:value', value)
      emit('change', {
        prop: props.config?.prop ?? '',
        value,
        options: options.value,
        curItem: getOption(value),
      })
    }

    const getText = () => {
      if (Array.isArray(getOption(props.modelValue))) {
        return getOption(props.modelValue)?.map((item: any) => item[props.config.labelKey ?? 'label']).join('、')
      }
      return getOption(props.modelValue)?.[props.config.labelKey ?? 'label']
    }

    return () => {
      const dynamicComponent = new CustomDynamicComponent()
      const { dynamicCascader } = dynamicComponent
      return <div class={['bs-cascader', styles.width100]}>
        {textModeFilter(props.textMode, getText() ?? '', props.config.textModeRender && props.config.textModeRender({
          value: props.modelValue,
          options: options.value,
          curItem: getOption(props.modelValue),
        }), <dynamicCascader
          // loading={optionsLoading}
          class={[styles.width100]}
          options={options.value}

          /** ant&& ele 统一封装 - start */
          clearable={props.config.clearable !== false} // ele 特有属性
          allowClear={props.config?.allowClear ?? props.config.clearable !== false} // ant 特有属性
          filterable={props.config?.filterable !== false}  // ele 特有属性
          showSearch={props.config?.showSearch ?? props.config?.filterable !== false}  // ant 特有属性
          multiple={props.config.multiple === true}  // ant 特有属性
          /** ant && ele 统一封装 - end */

          /** ant 特有属性-start */
          value={props.modelValue}
          fieldNames={
            props.config?.fieldNames ?? {
              label: props.config.labelKey ?? 'label',
              value: props.config.valueKey ?? 'value',
              children: props.config.childrenKey ?? 'children',
            }
          }
          /** ant 特有属性-start */

          /** ele 特有属性-start */
          model-value={props.modelValue}
          props={Object.assign({
            emitPath: (props.config.emitPath === true), // ===true时才会返回true
            label: props.config.labelKey ?? 'label',
            value: props.config.valueKey ?? 'value',
            children: props.config.childrenKey ?? 'children',
            multiple: props.config.multiple === true,
          }, props.config?.nativeProps?.props)}
          show-all-levels={props.config?.showAllLevels !== false}  // ===false时才会返回false
          collapse-tags={props.config?.collapseTags !== false} // ===false时才会返回false
          collapse-tags-tooltip={typeof props.config?.collapseTagsTooltip !== 'undefined' ? props.config?.collapseTagsTooltip : props.config?.collapseTags} // ===false时才会返回false
          v-slots={props.config.format ? {
            default: ({ node, data }: {node: any, data: any}) => {
              return props.config.format && props.config.format(node, data)
            },
          } : {}}
          /** ele 特有属性-end */
          
          {...props.config.nativeProps}
          onChange={handleChange}
        >
        </dynamicCascader>,
        )}
      </div>
    }
  },
})

export { cascaderProps }