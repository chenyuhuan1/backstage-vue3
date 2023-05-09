/*
 * @Author: 陈宇环
 * @Date: 2022-04-08 13:49:50
 * @LastEditTime: 2023-05-08 16:49:12
 * @LastEditors: tanpeng
 * @Description:
 */
import { defineComponent, toRefs, PropType } from 'vue'
import BaseTableItem from './BaseTableItem'
import { theadItemConfig } from './interface/index'
export default defineComponent({
  props: {
    itemData: {
      type: Object as PropType<theadItemConfig>,
      default() {
        return {
          prop: 'prop',
          label: 'label',
        }
      },
    },
  },
  setup(props:any) {
    const { itemData } = toRefs(props)
    // 多级头递归
    const childrenDom =
      itemData.value.children && itemData.value.children.length > 0
        ? itemData.value.children.map((item:any, index:any) => (
          <BaseTableItem
            key={item.prop ? item.prop : '' + index}
            item-data={item}
          ></BaseTableItem>
        ))
        : null
    return () => {
      // 序号
      if (itemData.value.type && itemData.value.type === 'index') {
        return <el-table-column
          type="index"
          width={itemData.value.width}
          min-width={itemData.value.minWidth}
          align={itemData.value.align ? itemData.value.align : 'center'}
          fixed={itemData.value.fixed ? itemData.value.fixed : false}
          {...itemData.value.nativeProps}
        />
      }
      return (
        <el-table-column
          prop={itemData.value.prop}
          label={itemData.value.label}
          width={itemData.value.width}
          min-width={itemData.value.minWidth}
          align={itemData.value.align ? itemData.value.align : 'center'}
          fixed={itemData.value.fixed ? itemData.value.fixed : false}
          {...itemData.value.nativeProps}
          v-slots={{
            default: (scope:any) => {
              return <>
                {
                  itemData.value.render ?
                    (typeof itemData.value.render === 'function' ? itemData.value.render(scope) : itemData.value.render) :
                    scope.row[itemData.value.prop]
                }
                {/* 多级头部 */}
                {childrenDom}
              </>
            },
          }}
        ></el-table-column>
      )
    }
  },
})
