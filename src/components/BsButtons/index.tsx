/*
 * @Author: 陈宇环
 * @Date: 2023-05-10 16:10:11
 * @LastEditTime: 2023-06-14 11:02:45
 * @LastEditors: 陈宇环
 * @Description: 按钮组件
 */

import { defineComponent, PropType, ref } from 'vue'
import { buttonFace } from './interface/index'
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent'
export default defineComponent({
  name: 'BsButtons',
  props: {
    buttons: {
      type: Array as PropType<buttonFace[]>,
      default() {
        return []
      },
    },
  },
  setup(props: any) {
    const loading = ref(false)
    const dynamicComponent = new CustomDynamicComponent()
    const { dynamicButton, dynamicPopconfirm } = dynamicComponent
    return () => {
      const buttonDom = (button: buttonFace) => {
        return <dynamicButton
          type={button.type ?? 'primary'}
          size={button.size ?? 'small'}
          disabled={button.disabled}
          loading={loading.value}
          {...button.nativeProps}
          onClick={async() => {
            loading.value = true
            !button.confirmConfig && button.click && await button.click()
            loading.value = false
          }}
        >
          {button.text ?? '文案'}
        </dynamicButton>
      }
      return (
        <div style="display: flex">
          {
            props.buttons.map((button: buttonFace) => {
              if (button.show === false) {
                return null
              }
              if (button.confirmConfig && !button.disabled) {
                return <dynamicPopconfirm
                  title={button?.confirmConfig?.title ?? '标题'}

                  /** ant-design-vue && ele 统一封装 - start */
                  confirm-button-text="确认" // ele 特有属性
                  okText="确认" // ant-design-vue特有属性
                  cancel-button-text="取消" // ele 特有属性
                  cancelText="取消" // ant-design-vue特有属性
                  /** ant-design-vue && ele 统一封装 - end */
                  
                  {...button?.confirmConfig?.nativeProps}
                  onConfirm={() => {
                    if (button?.confirmConfig?.confirm) {
                      button?.confirmConfig?.confirm()
                    } else if (button.click) {
                      button?.click()
                    }
                  }}
                  onCancel={() => {
                    button?.confirmConfig?.cancel && button?.confirmConfig?.cancel()
                  }}
                  v-slots={{
                    reference: () => {  // ele 特有属性
                      return buttonDom(button)
                    },
                    default: () => {  // ant-design-vue特有属性
                      return buttonDom(button)
                    },
                  }}
                >
                </dynamicPopconfirm>
              }
              return buttonDom(button)
            })
          }
        </div>
      )
    }
  },
})

export * from './interface/index'