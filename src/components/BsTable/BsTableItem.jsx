/*
 * @Author: 陈宇环
 * @Date: 2022-04-08 13:49:50
 * @LastEditTime: 2023-07-03 15:44:38
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, toRefs } from 'vue';
import BsTableItem from './BsTableItem';
import { CustomDynamicComponent } from '../CustomDynamicComponent';
export default defineComponent({
    name: 'BsTableItem',
    components: {},
    props: {
        itemData: {
            type: Object,
            default() {
                return {
                    prop: 'prop',
                    label: 'label',
                };
            },
        },
    },
    setup(props) {
        const { itemData } = toRefs(props);
        const dynamicComponent = new CustomDynamicComponent();
        const { dynamicTableColumn } = dynamicComponent;
        // 多级头递归
        const childrenDom = itemData.value.children && itemData.value.children.length > 0
            ? itemData.value.children.map((item, index) => (<BsTableItem key={item.prop ? item.prop : '' + index} item-data={item}></BsTableItem>))
            : null;
        return () => {
            // 序号
            if (itemData.value.type && itemData.value.type === 'index') {
                return <dynamicTableColumn type="index" width={itemData.value.width} min-width={itemData.value.minWidth} align={itemData.value.align ? itemData.value.align : 'center'} fixed={itemData.value.fixed ? itemData.value.fixed : false} {...itemData.value.nativeProps}/>;
            }
            // const itemDataProps: columnsItemConfig = _.cloneDeep(itemData.value)
            // 解决element-ui报错问题
            itemData.value.children = undefined;
            return (<dynamicTableColumn prop={itemData.value.prop} label={itemData.value.label} width={itemData.value.width} min-width={itemData.value.minWidth} align={itemData.value.align ? itemData.value.align : 'center'} fixed={itemData.value.fixed ? itemData.value.fixed : false} {...itemData.value.nativeProps} v-slots={{
                    default: (scope) => {
                        return <>
                {itemData.value.render ?
                                (typeof itemData.value.render === 'function' ? itemData.value.render(scope) : itemData.value.render) :
                                scope.row[itemData.value.prop]}
                {/* 多级头部 */}
                {childrenDom}
              </>;
                    },
                }}></dynamicTableColumn>);
        };
    },
});
//# sourceMappingURL=BsTableItem.jsx.map