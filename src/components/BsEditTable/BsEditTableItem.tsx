/*
 * @Author: 陈宇环
 * @Date: 2022-04-08 13:49:50
 * @LastEditTime: 2023-08-16 17:21:13
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, toRefs, PropType } from 'vue'
import BsEditTableItem from './BsEditTableItem'
import { editTableColumnsItemConfig, editTableConfigFace } from './interface/index'
import { CustomDynamicComponent } from '../CustomDynamicComponent'
import { contentRender } from './toolFn'
export default defineComponent({
  name: 'BsEditTableItem',
  components: { },
  props: {
    itemData: {
      type: Object as PropType<editTableColumnsItemConfig>,
      default() {
        return {
          prop: 'prop',
          label: 'label',
        }
      },
    },
    cloneTableConfig: {
      type: Object as PropType<editTableConfigFace>,
      default() {
        return {}
      },
    },
  },
  emits: ['change'],
  setup(props:any, { emit }) {
    const { itemData, cloneTableConfig } = toRefs<{itemData: editTableColumnsItemConfig, cloneTableConfig: editTableConfigFace}>(props)
    const dynamicComponent = new CustomDynamicComponent()
    const { dynamicTableColumn } = dynamicComponent
    // 多级头递归
    const childrenDom = () => {
      return itemData.value.children && itemData.value.children.length > 0
        ? itemData.value.children.map((item:any, index:any) => (
          <BsEditTableItem
            key={item.prop ? item.prop : '' + index}
            item-data={item}
          ></BsEditTableItem>
        ))
        : null
    }
    const emitChange = (scope: any) => {
      emit('change', scope)
    }
    return () => {
      // 序号
      if (itemData.value.type && itemData.value.type === 'index') {
        return <dynamicTableColumn
          type="index"
          width={itemData.value.width}
          min-width={itemData.value.minWidth}
          align={itemData.value.align ? itemData.value.align : 'center'}
          fixed={itemData.value.fixed ? itemData.value.fixed : false}
          {...itemData.value.nativeProps}
        />
      }
      // const itemDataProps: columnsItemConfig = _.cloneDeep(itemData.value)
      // 解决element-ui报错问题
      // itemData.value.children = undefined
      return (
        <dynamicTableColumn
          prop={itemData.value.prop}
          label={itemData.value.label}
          width={itemData.value.width}
          min-width={itemData.value.minWidth}
          align={itemData.value.align ? itemData.value.align : 'center'}
          fixed={itemData.value.fixed ? itemData.value.fixed : false}
          {...itemData.value.nativeProps}
          v-slots={{
            default: (scope: any) => {
              return <>
                {contentRender(cloneTableConfig.value, itemData.value, scope, () => {
                  emitChange(scope)
                })}
                {/* 多级头部 */}
                {childrenDom()}
              </>
            },
          }}
        ></dynamicTableColumn>
      )
    }
  },
})
