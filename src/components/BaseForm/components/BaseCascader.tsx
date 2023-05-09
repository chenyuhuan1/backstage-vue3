/*
 * @Author: 陈宇环
 * @Date: 2022-09-07 16:37:21
 * @LastEditTime: 2023-05-08 16:46:36
 * @LastEditors: tanpeng
 * @Description:
 */
import { defineComponent, watch, ref, PropType } from 'vue'
import * as utils from '@/utils/common'
import { cascaderProps } from '../interface/index'
import styles from '@/components/BaseForm/style.module.scss'

export default defineComponent({
  name: 'CCascader',
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
  },
  emits: ['update:modelValue', 'change'],
  setup(props: any, { emit }) {
    const options = ref<{[label: string]: any}[]>([])
    const optionsLoading = ref<boolean>(false)
    watch(() => props.config.options, async() => {
      // 获取options下拉选项
      if (Array.isArray(props.config.options)) { // 传入对象数组
        options.value = props.config.options
      } else if (Object.prototype.toString.call(props.config.options) === '[object Object]') { // 字典/接口获取
        if (props.config.options.type === 'api') {
          optionsLoading.value = true
          options.value = await props.config.options.getData()
          optionsLoading.value = false
        } else if (props.config.options.type === 'dic') {
          options.value = utils.getDicByKey(props.config.options.key)
        }
      }
    }, { immediate: true, deep: true })

    /**
     * @description: 获取选中得item
     * @param {*} value 当前选择中得value
     * @return any 选中得item
     */
    const getOption = (value: any) => {
      let curItem: any
      utils.treeForeach(options.value, (node) => {
        if (node[props?.config?.valueKey ?? 'value'] === value) {
          curItem = node
        }
      })
      return curItem
    }

    const handleChange = (value: any) => {
      emit('update:modelValue', value)
      emit('change', {
        props: props.config.prop,
        value,
        options: options.value,
        curItem: getOption(value),
      })
    }

    return () => {
      return <div class={['BaseCascader', styles.width100]}>
        <el-cascader
          // loading={optionsLoading}
          class={[styles.width100]}
          model-value={props.modelValue}
          options={options.value}
          show-all-levels={props.config.showAllLevels !== false} // ===false时才会返回false
          collapse-tags={props.config.collapseTags !== false} // ===false时才会返回false
          collapse-tags-tooltip={typeof props.config.collapseTagsTooltip !== 'undefined' ? props.config.collapseTagsTooltip : props.config.collapseTags} // ===false时才会返回false
          clearable={props.config.clearable !== false} // ===false时才会返回false
          filterable={props.config.filterable !== false} // ===false时才会返回false
          props={Object.assign({
            emitPath: (props.config.emitPath === true), // ===true时才会返回true
            label: props.config.labelKey ?? 'label',
            value: props.config.valueKey ?? 'value',
            children: props.config.childrenKey ?? 'children',
            multiple: props.config.multiple === true,
          }, props.config?.nativeProps?.props)}
          {...props.config.nativeProps}
          onChange={handleChange}
          v-slots={props.config.format
            ? {
              default: ({ node, data }: {node: any, data: any}) => {
                return props.config.format(node, data)
              },
            }
            : {}}
        >
        </el-cascader>
      </div>
    }
  },
})
