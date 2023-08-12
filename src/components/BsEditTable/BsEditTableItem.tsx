/*
 * @Author: 陈宇环
 * @Date: 2022-04-08 13:49:50
 * @LastEditTime: 2023-07-03 15:44:38
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
    // 内容渲染
    // const contentRender = (scope: any) => {
    //   // element-plus 默认$index === -1 这里需要排除一下
    //   if (scope.$index === -1) {
    //     return
    //   }
    //   // 列编辑 整表编辑!==关闭状态 && 列编辑开启 && 列存在formconfig
    //   const colEditing = cloneTableConfig.value.editing !== false && itemData.value.editing
    //   // 行编辑 整表编辑!==关闭状态 && 行编辑开启 && 列存在formconfig
    //   const rowEditing = cloneTableConfig.value.editing !== false && scope.row[cloneTableConfig.value?.rowEditingKey ?? 'editing']
    //   // 整表编辑 整表编辑 && 当前列编辑!==关闭状态 && 行编辑!==关闭状态 && 存在配置
    //   const overallEditing = cloneTableConfig.value.editing && itemData.value.editing !== false && scope.row[cloneTableConfig.value?.rowEditingKey ?? 'editing'] !== false
    //   if ((colEditing || overallEditing || rowEditing) && itemData.value.widgetConfig) { // 渲染编辑组件
    //     const componentInstance = widget.getComponentByType(itemData.value.widgetConfig.type)
    //     return <dynamicFormItem
    //       class={[styles.BsEditTableFormItem]}
    //       label-width='0px'
    //       label=''
    //       prop={CustomDynamicComponent.language === CustomDynamicComponent.antLanguage ? undefined : `[${scope.$index}].${itemData.value.prop}`}
    //       name={`[${scope.$index}].${itemData.value.prop}`}
    //       rules={getItemRules(itemData.value?.widgetConfig)}
    //       styles={{ marginBottom: 0 }}
    //       v-slots={{
    //         error: ({ error }: {error: string}) => {
    //           return <div title={error} style={{ display: 'flex', justifyContent: 'center' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" style={{ color: 'red', width: '16px' }} data-v-ea893728="">
    //             <path d="M928.99 755.83 574.6 203.25c-12.89-20.16-36.76-32.58-62.6-32.58s-49.71 12.43-62.6 32.58L95.01 755.83c-12.91 20.12-12.9 44.91.01 65.03 12.92 20.12 36.78 32.51 62.59 32.49h708.78c25.82.01 49.68-12.37 62.59-32.49 12.91-20.12 12.92-44.91.01-65.03zM554.67 768h-85.33v-85.33h85.33V768zm0-426.67v298.66h-85.33V341.32l85.33.01z" fill="currentColor"></path>
    //           </svg></div>
    //         },
    //       }}
    //     >
    //       <componentInstance
    //         v-models={[
    //           [scope.row[(itemData.value as {prop: string}).prop]],
    //           [scope.row[(itemData.value as {propEnd?: any}).propEnd], 'propEnd'],
    //         ]}
    //         config={itemData.value.widgetConfig}
    //         onChange={() => {
    //           emit('change')
    //         }}
    //       />
    //     </dynamicFormItem>
    //   }
    //   if (itemData.value.render) {
    //     return typeof itemData.value.render === 'function' ? itemData.value.render(scope) : itemData.value.render
    //   }
    //   if (itemData.value.propEnd) {
    //     return scope.row[(itemData.value as {prop: string}).prop] + ' - ' + scope.row[(itemData.value as {propEnd: string}).propEnd]
    //   }
    //   return scope.row[(itemData.value as {prop: string}).prop]
    // }
    const emitChange = () => {
      emit('change')
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
                {contentRender(cloneTableConfig.value, itemData.value, scope, emitChange)}
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
