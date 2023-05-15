/*
 * @Author: 陈宇环
 * @Date: 2022-04-08 13:49:50
 * @LastEditTime: 2023-05-12 17:07:56
 * @LastEditors: 陈宇环
 * @Description:
 */
import { defineComponent, toRefs, reactive, ref, onMounted, PropType, watch } from 'vue'

import BaseTableItem from './BaseTableItem'
import { theadItemConfig, loadDataFace, pagingConfigFace, tableConfigFace } from './interface/index'
import styles from  '@/components/BaseTable/style.module.scss'

export default defineComponent({
  name: 'EaseTable',
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
    thead: {
      type: Array as PropType<theadItemConfig[]>,
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
      thead,
    } = toRefs(props)

    const defaultTableConfig: tableConfigFace = {
      ifInitLoadData: true,
      rowKey: 'id',
      border: true,
      stripe: true,
    }
    const cloneTableConfig: tableConfigFace = reactive<tableConfigFace>({
      ...defaultTableConfig,
      ...props.tableConfig,
    })

    watch(
      () => props.tableConfig,
      () => {
        Object.assign(cloneTableConfig, defaultTableConfig, props.tableConfig)
      },
      { immediate: true, deep: true },
    )

    const defaultPagingConfig: pagingConfigFace = {
      open: true,
      pageIndex: 1,
      pageSize: 20,
      total: 0,
      layout: 'total, sizes, prev, pager, next',
    }
    const clonePagingConfig: pagingConfigFace = reactive<pagingConfigFace>({
      ...defaultPagingConfig,
      ...props.pagingConfig,
    })

    watch(
      () => props.pagingConfig,
      () => {
        Object.assign(clonePagingConfig, defaultPagingConfig, props.pagingConfig)
      },
      { immediate: true, deep: true },
    )

    const tableDom = ref(null)

    const radio = ref(undefined)

    const loading = ref(false)
    const pageInfo = reactive({
      pageIndex: clonePagingConfig.pageIndex,
      pageSize: clonePagingConfig.pageSize,
      total: clonePagingConfig.total,
    })
    const list = ref([])
    const getList = async({ pageIndex = pageInfo.pageIndex, pageSize = pageInfo.pageSize } : { pageIndex?: number, pageSize?: number } = {}) => {
      try {
        loading.value = true
        const result = await loadData.value({
          pageIndex,
          pageSize,
        })
        loading.value = false
        if (result.success) {
          list.value = result.list
          pageInfo.total = result.total
        }
        pageInfo.pageIndex = pageIndex
        pageInfo.pageSize = pageSize
      } catch (error) {
        console.log(error)
      }
    }
    expose({
      getList,
    })
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
    const handleSelectionChange = (selection: any) => {
      console.log('table-handleSelectionChange', selection)
      if (cloneTableConfig.rowSelection && cloneTableConfig.rowSelection.onChange) {
        cloneTableConfig.rowSelection.onChange(selection)
      }
    }

    return () => {
      return (
        <div class={[styles.BaseTable]}>
          <el-table
            v-loading={loading.value}
            height="100%"
            ref={tableDom}
            class={[styles.table]}
            data={list.value}
            style={{ maxWidth: '100%' }}
            row-key={cloneTableConfig.rowKey}
            {...cloneTableConfig.nativeProps}
            onSelectionChange={(val: any) => handleSelectionChange(val)}
          >
            {/* 需要多选行选择按钮 */}
            {cloneTableConfig.rowSelection && cloneTableConfig.rowSelection.type === 'checkout' ? (
              <el-table-column type="selection" align="center" selectable={(row:any, index: number) => {
                return cloneTableConfig.rowSelection?.selectable ? cloneTableConfig.rowSelection?.selectable(row, index) : true
              }} />
            ) : null}
            {/* 需要单选行选择按钮 */}
            {cloneTableConfig.rowSelection && cloneTableConfig.rowSelection.type === 'radio' ? (
              <el-table-column
                label=""
                align="center"
                width="60"
                fixed
                v-slots={{
                  default: (scope: any, column: any, index: number) => {
                    return (
                      <div style={{ textAlign: 'center' }}>
                        <el-radio
                          disabled={cloneTableConfig.rowSelection?.selectable ? !cloneTableConfig.rowSelection?.selectable(scope.row, index) : false}
                          class={[styles.rowRadio]}
                          v-model={radio.value}
                          label={scope.row[cloneTableConfig.rowKey ? cloneTableConfig.rowKey : 'id']}
                          onChange={(val: any) => handleSelectionChange(val)}
                        ></el-radio>
                      </div>
                    )
                  },
                }}
              ></el-table-column>
            ) : null}
            {thead.value.map((item: theadItemConfig, index: any) => {
              return (
                // 递归组件
                <BaseTableItem
                  key={item.prop ? item.prop : '' + index}
                  item-data={item}
                />
              )
            })}
          </el-table>
          {/* 分页 */}
          {
            clonePagingConfig.open && <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '15px 0',
              }}
            >
              <el-pagination
                current-page={pageInfo.pageIndex}
                page-size={pageInfo.pageSize}
                layout={defaultPagingConfig.layout}
                total={pageInfo.total}
                background
                {...clonePagingConfig.nativeProps}
                onSizeChange={(val: any) => handleSizeChange(val)}
                onCurrentChange={(val: any) => handleCurrentChange(val)}
              />
            </div>
          }
        </div>
      )
    }
  },
})
