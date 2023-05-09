/*
 * @Author: 陈宇环
 * @Date: 2022-12-15 17:30:23
 * @LastEditTime: 2023-05-08 16:46:41
 * @LastEditors: tanpeng
 * @Description:
 */
import { defineComponent, watch, ref, PropType } from 'vue'
import * as utils from '@/utils/common'
import { selectProps } from '../interface/index'
import styles from '@/components/BaseForm/style.module.scss'


export default defineComponent({
  name: 'CSelect',
  props: {
    modelValue: {
      type: [Number, String, Array, Object, Boolean],
      default: '',
    },
    config: {
      type: Object as PropType<selectProps>,
      default() {
        return {}
      },
    },
  },
  emits: ['update:modelValue', 'change', 'setProp2'],
  setup(props: any, { emit }) {
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

      // 兼容改变
      options.value = options.value.map((v: any) => {
        return {
          ...v,
          label: v[props.config.labelKey || 'label'],
          value: v[props.config.valueKey || 'value'],
        }
      })

    }, { immediate: true, deep: true })

    // watch(() => props.modelValue, () => {
    //   updateValue(props.modelValue)
    // })

    function updateValue(value: number | string | number|string[]) {
      if (value === '') {
        emit('update:modelValue', null)
      } else {
        emit('update:modelValue', value)
      }
      emit('change', {
        props: props.config.prop,
        value: value === '' ? null : value,
        curItem: getOption(value),
        options: options.value,
      })
      // 将options中得prop2字段也设置到form中
      if (props?.config?.prop2) {
        if (value && Array.isArray(value)) { // 多选
          if (props?.config?.remote) { // 多选 && 远程搜索
            throw new Error('BaseSelect组件远程搜索且多选情况下不支持绑定prop2,请检查配置')
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
      const option = options.value.find((option: any) => option.value === value)
      return option
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

    return () => {
      return <div class={['BaseSelect', styles.width100]}>
        <el-select
          loading={optionsLoading.value}
          class={['select', styles.width100]}
          model-value={props.modelValue}
          filterable={props.config.filterable !== false}
          remote={props.config.remote === true}
          remote-method={remoteMethod}
          placeholder={props.config.placeholder || `请选择${props.config.label}`}
          disabled={!!props.config.disabled}
          clearable={props.config.clearable !== false}
          multiple={props.config.multiple === true}
          collapse-tags={props.config.collapseTags !== false}
          collapse-tags-tooltip={props.config.collapseTagsTooltip !== false}
          multiple-limit={props.config.multipleLimit ? props.config.multipleLimit : 0}
          reserveKeyword={props.config.reserveKeyword === true}
          {...props.config.nativeProps}
          onChange={updateValue}
        >
          {
            options.value.map((item: any) => {
              return <el-option
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
              </el-option>
            })
          }
        </el-select>
      </div>
    }
  },
})
