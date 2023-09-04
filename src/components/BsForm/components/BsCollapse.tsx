/*
 * @Author: chenql
 * @Date: 2023-04-26 10:19:48
 * @LastEditors: 陈宇环
 * @LastEditTime: 2023-08-15 10:54:01
 * @Descripttion: 表单手风琴
 */
import { defineComponent, PropType, ref } from 'vue'
import { collapseProps } from '../interface'
import styles from '@/components/BsForm/style.module.scss'
import { CustomDynamicComponent } from '@/components/CustomDynamicComponent'

export default defineComponent({
  name: 'BsCollapse',
  props: {
    modelValue: {
      type: [Number, String, Array, Object, Boolean],
      default: undefined,
    },
    config: {
      type: Object as PropType<collapseProps>,
      default() {
        return {}
      },
    },
  },
  setup(props: any) {
    const { dynamicCollapse, dynamicCollapseItem } = new CustomDynamicComponent()
    const activeKey = ref(props.modelValue ?? 0)
    return () => {
      return (
        <div class={['bs-collapse', styles.BaseCollapse]} style={{ width: '100%' }}>
          <dynamicCollapse
            accordion
            v-models={[
              [activeKey.value], // ele 使用
              [activeKey.value, 'activeKey'], // antd 使用
            ]}
          >
            {props.config.dataConfig?.map((item: any, index: number) =>
              <dynamicCollapseItem
                title={item.title} // ele 特有属性
                name={index} // ele 特有属性
                key={index}
                header={item.title}// antd 特有属性
              >
                {
                  Array.isArray(item.desc) ?
                    (item.desc?.map((str: any, index1: number) =>
                      <p key={index1} style={{ color: '#999', margin: 0 }}>
                        {str}
                      </p>)) :
                    <p style={{ color: '#999', margin: 0 }}>
                      {item.desc}
                    </p>
                }
              </dynamicCollapseItem>,
            )}
          </dynamicCollapse>
        </div>
      )
    }
  },
})
export * from '../interface/index'
