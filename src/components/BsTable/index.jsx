/*
 * @Author: 陈宇环
 * @Date: 2022-04-08 13:49:50
 * @LastEditTime: 2023-07-05 14:44:49
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, toRefs, reactive, ref, onMounted, watch } from 'vue';
import BsTableItem from './BsTableItem';
import styles from '@/components/BsTable/style.module.scss';
import { CustomDynamicComponent } from '../CustomDynamicComponent';
export default defineComponent({
    name: 'BsTable',
    components: {},
    props: {
        tableConfig: {
            type: Object,
            default() {
                return {}; // 默认值请看defaultTableConfig
            },
        },
        pagingConfig: {
            type: Object,
            default() {
                return {}; // 默认值请看defaultPagingConfig
            },
        },
        columns: {
            type: Array,
            required: true,
            default() {
                return [];
            },
        },
        loadData: {
            type: Function,
            required: true,
            default() {
                return () => {
                    return new Promise((resolve) => {
                        resolve({
                            list: [],
                            total: 0,
                        });
                    });
                };
            },
        },
    },
    setup(props, { expose }) {
        const { loadData, columns, } = toRefs(props);
        const defaultTableConfig = {
            ifInitLoadData: true,
            rowKey: 'id',
            border: true,
            stripe: true,
        };
        /**
         * 当ui切换为ant-Design-vue时，转为columns为ant-Design-vue的columns格式 start
         * @param data columns数据
         */
        const changeTableColumns = (data) => {
            const arr = [...data];
            arr.forEach((v) => {
                v.title = v.label;
                if (v.children && v.children.length) {
                    changeTableColumns(v.children);
                }
                else {
                    v.dataIndex = v.prop;
                }
            });
        };
        if (CustomDynamicComponent.language === CustomDynamicComponent.antLanguage) {
            changeTableColumns(columns.value);
        }
        /**
         * 当ui切换为ant时，转为columns为ant-Design-vue的columns格式 end
         * @param data columns数据
         */
        const cloneTableConfig = reactive({
            ...defaultTableConfig,
            ...props.tableConfig,
        });
        watch(() => props.tableConfig, () => {
            Object.assign(cloneTableConfig, defaultTableConfig, props.tableConfig);
        }, { immediate: true, deep: true });
        const defaultPagingConfig = {
            open: true,
            pageIndex: 1,
            pageSize: 10,
            total: 0,
            layout: 'total, sizes, prev, pager, next',
            // ant-ui相关
            showTotal: (total) => `共 ${total} 条`,
            showSizeChanger: true,
        };
        const clonePagingConfig = reactive({
            ...defaultPagingConfig,
            ...props.pagingConfig,
        });
        watch(() => props.pagingConfig, () => {
            Object.assign(clonePagingConfig, defaultPagingConfig, props.pagingConfig);
        }, { immediate: true, deep: true });
        const tableDom = ref(null);
        const radio = ref(undefined);
        const loading = ref(false);
        const pageInfo = reactive({
            pageIndex: clonePagingConfig.pageIndex,
            pageSize: clonePagingConfig.pageSize,
            total: clonePagingConfig.total,
        });
        const list = ref([]);
        const getList = async ({ pageIndex = pageInfo.pageIndex, pageSize = pageInfo.pageSize } = {}) => {
            try {
                loading.value = true;
                const result = await loadData.value({
                    pageIndex,
                    pageSize,
                });
                loading.value = false;
                if (result.success) {
                    list.value = result.list;
                    pageInfo.total = result.total;
                }
                pageInfo.pageIndex = pageIndex;
                pageInfo.pageSize = pageSize;
            }
            catch (error) {
                console.log(error);
            }
        };
        expose({
            getList,
        });
        onMounted(function () {
            if (cloneTableConfig.ifInitLoadData) {
                getList();
            }
        });
        // 分页size变化
        const handleSizeChange = (val) => {
            console.log(`${val} items per page`);
            pageInfo.pageIndex = 1;
            pageInfo.pageSize = val;
            clonePagingConfig.pageSizeChange && clonePagingConfig.pageSizeChange(val);
            getList();
        };
        // 当前页变化
        const handleCurrentChange = (val) => {
            console.log(`current page: ${val}`);
            pageInfo.pageIndex = val;
            clonePagingConfig.pageIndexChange && clonePagingConfig.pageIndexChange(val);
            getList();
        };
        // 勾选事件
        const handleSelectionChange = (selection) => {
            console.log('table-handleSelectionChange', selection);
            if (cloneTableConfig.rowSelection && cloneTableConfig.rowSelection.onChange) {
                cloneTableConfig.rowSelection.onChange(selection);
            }
        };
        return () => {
            const dynamicComponent = new CustomDynamicComponent();
            const { dynamicTable, dynamicTableColumn, dynamicRadio, dynamicPagination } = dynamicComponent;
            return (<div class={[styles.BsTable]}>
          <dynamicTable v-loading={loading.value} height="100%" ref={tableDom} class={[styles.table]} data={list.value} columns={columns.value} data-source={list.value} style={{ maxWidth: '100%' }} row-key={cloneTableConfig.rowKey} pagination={false} // ant 特有属性，关闭table自带分页
             {...cloneTableConfig.nativeProps} onSelectionChange={(val) => handleSelectionChange(val)}>
            {/* 只有el-ui走这段渲染逻辑，ant-Design-vue是通过columns直接生成的 */}
            {CustomDynamicComponent.language === CustomDynamicComponent.eleLanguage ? <>
              {/* 需要多选行选择按钮 */}
              {cloneTableConfig.rowSelection && cloneTableConfig.rowSelection.type === 'checkout' ? (<dynamicTableColumn type="selection" align="center" selectable={(row, index) => {
                            return cloneTableConfig.rowSelection?.selectable ? cloneTableConfig.rowSelection?.selectable(row, index) : true;
                        }}/>) : null}
              {/* 需要单选行选择按钮 */}
              {cloneTableConfig.rowSelection && cloneTableConfig.rowSelection.type === 'radio' ? (<dynamicTableColumn label="" align="center" width="60" fixed v-slots={{
                            default: (scope, column, index) => {
                                return (<div style={{ textAlign: 'center' }}>
                          <dynamicRadio disabled={cloneTableConfig.rowSelection?.selectable ? !cloneTableConfig.rowSelection?.selectable(scope.row, index) : false} class={[styles.rowRadio]} v-model={radio.value} label={scope.row[cloneTableConfig.rowKey ? cloneTableConfig.rowKey : 'id']} onChange={(val) => handleSelectionChange(val)}></dynamicRadio>
                        </div>);
                            },
                        }}></dynamicTableColumn>) : null}
              {columns.value.map((item, index) => {
                        return (
                        // 递归组件
                        <BsTableItem key={item.prop ? item.prop : '' + index} item-data={item}></BsTableItem>);
                    })}</> : null}
          </dynamicTable>
          {clonePagingConfig.open && <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '15px 0',
                    }}>
              <dynamicPagination current-page={pageInfo.pageIndex} page-size={pageInfo.pageSize} layout={defaultPagingConfig.layout} total={pageInfo.total} background {...clonePagingConfig.nativeProps} onSizeChange={(val) => handleSizeChange(val)} onCurrentChange={(val) => handleCurrentChange(val)} 
                // ant-ui相关属性
                current={pageInfo.pageIndex} onShowSizeChange={(current, size) => handleSizeChange(size)} onChange={(page) => handleCurrentChange(page)}/>
            </div>}
        </div>);
        };
    },
});
export * from './interface/index';
//# sourceMappingURL=index.jsx.map