/*
 * @Author: 陈宇环
 * @Date: 2022-04-08 13:49:50
 * @LastEditTime: 2023-08-24 15:35:57
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, toRefs, reactive, ref, onMounted, PropType, watch } from 'vue'
import BsTableItem from './BsTableItem'
import { columnsConfigFace, columnsItemConfig, loadDataFace, pagingConfigFace, tableConfigFace } from './interface/index'
import styles from '@/components/BsTable/style.module.scss'
import { CustomDynamicComponent } from '../CustomDynamicComponent'
import merge from 'lodash/merge'

export default defineComponent({
  name: 'BsTable',
  components: {},
  props: {
    tableConfig: {
      type: Object as PropType<tableConfigFace>,
      default() {
        return {}  // 默认值请看defaultTableConfig
      },
    },
    pagingConfig: {
      type: Object as PropType<pagingConfigFace>,
      default() {
        return {}  // 默认值请看defaultPagingConfig
      },
    },
    columns: {
      type: Array as PropType<columnsConfigFace>,
      required: true,
      default() {
        return []
      },
    },
    loadData: {
      type: Function as PropType<loadDataFace>,
      required: true,
      default() {
        return () => {
          return new Promise((resolve) => {
            resolve({
              list: [],
              total: 0,
            })
          })
        }
      },
    },
  },
  setup(props: any, { expose }) {
    const {
      loadData,
      columns,
    } = toRefs(props)

    const defaultTableConfig: tableConfigFace = {
      ifInitLoadData: true,
      rowKey: 'id',
      nativeProps: {
        border: true,
        stripe: true,
      },
    }
    /**
     * 当ui切换为ant-Design-vue时，转为columns为ant-Design-vue的columns格式 start
     * @param data columns数据
     */
    const changeTableColumns = (data: any) => {
      const arr = [...data]
      arr.forEach((v: any) => {
        v.title = v.label
        if (v.children && v.children.length) {
          changeTableColumns(v.children)
        } else {
          v.dataIndex = v.prop
        }
      })
    }
    if (CustomDynamicComponent.language === CustomDynamicComponent.antLanguage) {
      changeTableColumns(columns.value)
    }
    /**
     * 当ui切换为ant时，转为columns为ant-Design-vue的columns格式 end
     * @param data columns数据
     */

    const cloneTableConfig: tableConfigFace = reactive<tableConfigFace>(merge(defaultTableConfig, props.tableConfig))

    watch(
      () => props.tableConfig,
      () => {
        merge(cloneTableConfig, defaultTableConfig, props.tableConfig)
      },
      { immediate: true, deep: true },
    )

    const defaultPagingConfig: pagingConfigFace = {
      open: true,
      pageIndex: 1,
      pageSize: 10,
      total: 0,
      nativeProps: {
        layout: 'total, sizes, prev, pager, next',

        // ant-ui相关
        showTotal: (total: number) => `共 ${total} 条`,
        showSizeChanger: true,
      },
    }
    const clonePagingConfig: pagingConfigFace = reactive<pagingConfigFace>(merge(defaultPagingConfig, props.pagingConfig))

    watch(
      () => props.pagingConfig,
      () => {
        merge(clonePagingConfig, defaultPagingConfig, props.pagingConfig)
      },
      { immediate: true, deep: true },
    )

    const tableDom = ref()

    const radio = ref(undefined)

    const loading = ref(false)
    const pageInfo = reactive({
      pageIndex: clonePagingConfig.pageIndex,
      pageSize: clonePagingConfig.pageSize,
      total: clonePagingConfig?.total,
    })
    const list = ref<{[key: string]: any}[]>([])
    const getList = async({ pageIndex = pageInfo.pageIndex, pageSize = pageInfo.pageSize } : { pageIndex?: number, pageSize?: number } = {}) => {
      try {
        loading.value = true
        const result = await loadData.value({
          pageIndex,
          pageSize,
        })
        if (result.success) {
          list.value = result?.list ?? []
          pageInfo.total = result?.total ?? 0
        }
        pageInfo.pageIndex = pageIndex
        pageInfo.pageSize = pageSize
      } catch (error) {
        console.log(error)
      } finally {
        loading.value = false
      }
    }
    onMounted(function() {
      if (cloneTableConfig.ifInitLoadData) {
        getList()
      }
    })

    // 分页size变化
    const handleSizeChange = (val: number) => {
      console.log(`${val} items per page`)
      pageInfo.pageIndex = 1
      pageInfo.pageSize = val
      clonePagingConfig.pageSizeChange && clonePagingConfig.pageSizeChange(val)
      getList()
    }
    // 当前页变化
    const handleCurrentChange = (val: number) => {
      console.log(`current page: ${val}`)
      pageInfo.pageIndex = val
      clonePagingConfig.pageIndexChange && clonePagingConfig.pageIndexChange(val)
      getList()
    }

    // 勾选事件
    const selectedRow = ref<any>([])
    const handleSelectionChange = (selection: any) => {
      console.log('table-handleSelectionChange', selection)
      selectedRow.value = selection
      if (cloneTableConfig.rowSelection && cloneTableConfig.rowSelection.onChange) {
        cloneTableConfig.rowSelection.onChange(selection)
      }
    }
    const clearSelection = () => {
      selectedRow.value = []
      tableDom.value.clearSelection()
      if (cloneTableConfig.rowSelection && cloneTableConfig.rowSelection.onChange) {
        cloneTableConfig.rowSelection.onChange([])
      }
    }
    // 动态改变表格数据
    const setList = (data: {[key: string]: any}[]) => {
      list.value = data
    }
    expose({
      tableDom, list, selectedRow, getList, setList, clearSelection,
    })

    return () => {
      const dynamicComponent = new CustomDynamicComponent()
      const { dynamicTable, dynamicTableColumn, dynamicRadio, dynamicPagination } = dynamicComponent
      return (
        <div class={['bs-table', styles.BsTable]}>
          <dynamicTable
            v-loading={loading.value}
            height="100%"
            ref={tableDom}
            class={[styles.table]}
            data={list.value}
            columns={columns.value}
            data-source={list.value}
            style={{ maxWidth: '100%' }}
            row-key={cloneTableConfig.rowKey}

            pagination={false} // ant 特有属性，关闭table自带分页

            {...cloneTableConfig.nativeProps}
            onSelectionChange={(val: any) => handleSelectionChange(val)}
          >
            {/* 只有el-ui走这段渲染逻辑，ant-Design-vue是通过columns直接生成的 */}
            {CustomDynamicComponent.language === CustomDynamicComponent.eleLanguage ? <>
              {/* 需要多选行选择按钮 */}
              {cloneTableConfig.rowSelection && cloneTableConfig.rowSelection.type === 'checkout' ? (
                <dynamicTableColumn type="selection" align="center" selectable={(row: any, index: number) => {
                  return cloneTableConfig.rowSelection?.selectable ? cloneTableConfig.rowSelection?.selectable(row, index) : true
                }} />
              ) : null}
              {/* 需要单选行选择按钮 */}
              {cloneTableConfig.rowSelection && cloneTableConfig.rowSelection.type === 'radio' ? (
                <dynamicTableColumn
                  label=""
                  align="center"
                  width="60"
                  fixed
                  v-slots={{
                    default: (scope: any, column: any, index: number) => {
                      return (
                        <div style={{ textAlign: 'center' }}>
                          <dynamicRadio
                            disabled={cloneTableConfig.rowSelection?.selectable ? !cloneTableConfig.rowSelection?.selectable(scope.row, index) : false}
                            class={[styles.rowRadio]}
                            v-model={radio.value}
                            label={scope.row[cloneTableConfig.rowKey ? cloneTableConfig.rowKey : 'id']}
                            onChange={(val: any) => handleSelectionChange(val)}
                          ></dynamicRadio>
                        </div>
                      )
                    },
                  }}
                ></dynamicTableColumn>
              ) : null}
              {columns.value.map((item: columnsItemConfig, index: any) => {
                return (
                  // 递归组件
                  <BsTableItem
                    key={item.prop ? item.prop : '' + index}
                    item-data={item}
                  ></BsTableItem>
                )
              })}</> : null}
          </dynamicTable>
          {
            clonePagingConfig.open && <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '15px 0',
              }}
            >
              <dynamicPagination
                current-page={pageInfo.pageIndex}
                page-size={pageInfo.pageSize}
                layout={defaultPagingConfig.layout}
                total={pageInfo?.total ?? 0}
                background
                {...clonePagingConfig.nativeProps}
                onSizeChange={(val: any) => handleSizeChange(val)}
                onCurrentChange={(val: any) => handleCurrentChange(val)}

                // ant-ui相关属性
                current={pageInfo.pageIndex}
                onShowSizeChange={(current: number, size: number) => handleSizeChange(size)}
                {
                  ...(CustomDynamicComponent.language === CustomDynamicComponent.antLanguage ? {  // onChange 在ele中会与onCurrentChange重复触发
                    onChange: (page:number) => handleCurrentChange(page),
                  } : {})
                }
              />
            </div>
          }
        </div>
      )
    }
  },
})

export * from './interface/index'
