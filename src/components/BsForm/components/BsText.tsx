/*
 * @Author: 陈宇环
 * @Date: 2022-12-18 10:35:57
 * @LastEditTime: 2023-06-14 10:36:42
 * @LastEditors: 陈宇环
 * @Description: 普通文本节点
 *               文本内容取值为  绑定formData的值
 */
import { defineComponent, PropType } from 'vue'
import { textProps } from '../interface/index'
export default defineComponent({
  name: 'BsText',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [Number, String, Array, Object, Boolean],
      default: undefined,
    },
    config: {
      type: Object as PropType<Partial<textProps>>,
      default() {
        return {}
      },
    },
  },
  setup(props: any) {
    return () => {
      return props.modelValue ?? props.config.defaultText
    }
  },
})

export * from '../interface/index'