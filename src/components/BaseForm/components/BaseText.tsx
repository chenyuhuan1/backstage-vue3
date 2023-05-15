/*
 * @Author: 陈宇环
 * @Date: 2022-12-18 10:35:57
 * @LastEditTime: 2023-05-08 11:51:25
 * @LastEditors: tanpeng
 * @Description: 普通文本节点
 *               文本内容取值为  绑定formData的值
 */
import { defineComponent, PropType } from 'vue'
import { textProps } from '../interface/index'
export default defineComponent({
  name: 'EaseText',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [Number, String, Array, Object, Boolean],
      default: undefined,
    },
    config: {
      type: Object as PropType<textProps>,
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
