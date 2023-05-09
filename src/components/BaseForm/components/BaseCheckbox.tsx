/*
 * @Author: 陈宇环
 * @Date: 2022-12-20 09:56:21
 * @LastEditTime: 2023-05-08 16:45:44
 * @LastEditors: tanpeng
 * @Description:
 */
import { defineComponent, watch, ref, PropType } from 'vue'
import * as utils from '@/utils/common'
import { checkboxProps } from '../interface/index'
import styles from '@/components/BaseForm/style.module.scss'


export default defineComponent({
  name: 'CCheckbox',
  props: {
    modelValue: {
      type: Array,
      default() {
        return []
      },
    },
    config: {
      type: Object as PropType<checkboxProps>,
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
      options.value = options.value.map((v: any) => {
        return {
          ...v,
          label: v[props.config.labelKey || 'label'],
          value: v[props.config.valueKey || 'value'],
        }
      })

    }, { immediate: true, deep: true })


    function updateValue(value: any): any {
      emit('update:modelValue', value)
      emit('change', {
        props: props.config.prop,
        value,
        options,
      })
    }

    return () => {
      const componentInstance = props.config.showType === 'button' ? <el-checkbox-button/> : <el-checkbox/>
      return <div class={['BaseCheckbox', styles.width100]}>
        <el-checkbox-group
          loading={optionsLoading.value}
          class="checkbox"
          model-value={props.modelValue}
          placeholder={props.config.placeholder || `请选择${props.config.label}`}
          disabled={!!props.config.disabled}
          clearable={props.config.clearable !== false}
          {...props.config.nativeProps}
          onChange={updateValue}
        >
          {
            options.value.map((item: checkboxProps, index: number) => {
              return <componentInstance
                key={(item as {value?: boolean}).value + '_' + index}
                label={(item as {value?: boolean}).value }
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
        </el-checkbox-group>
      </div>
    }
  },
})
