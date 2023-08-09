/*
 * @Author: 陈宇环
 * @Date: 2022-04-08 13:49:50
 * @LastEditTime: 2023-07-28 15:11:16
 * @LastEditors: 陈宇环
 * @Description:
 */
import {
  defineComponent,
  toRefs,
  reactive,
  ref,
  onMounted,
  PropType,
  watch,
  nextTick,
} from 'vue'
import BsEditTableItem from './BsEditTableItem'
import {
  editTableColumnsConfigFace,
  editTableColumnsItemConfig,
  loadDataFace,
  pagingConfigFace,
  editTableConfigFace,
} from './interface/index'
import styles from './style.module.scss'
import { CustomDynamicComponent } from '../CustomDynamicComponent'
import merge from 'lodash/merge'

export default defineComponent({
  name: 'BsEditTable',
  components: {},
  props: {
    tableConfig: {
      type: Object as PropType<editTableConfigFace>,
      default() {
        return {} // 默认值请看defaultTableConfig
      },
    },
    pagingConfig: {
      type: Object as PropType<pagingConfigFace>,
      default() {
        return {} // 默认值请看defaultPagingConfig
      },
    },
    columns: {
      type: Array as PropType<editTableColumnsConfigFace>,
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
    const { loadData, columns } = toRefs(props)

    const defaultTableConfig: editTableConfigFace = {
      ifInitLoadData: true,
      rowKey: 'id',
      rowEditingKey: 'editing',
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
    if (
      CustomDynamicComponent.language === CustomDynamicComponent.antLanguage
    ) {
      changeTableColumns(columns.value)
    }
    /**
     * 当ui切换为ant时，转为columns为ant-Design-vue的columns格式 end
     * @param data columns数据
     */

    const cloneTableConfig: editTableConfigFace = reactive<editTableConfigFace>(
      merge(defaultTableConfig, props.tableConfig),
    )

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
    const clonePagingConfig: pagingConfigFace = reactive<pagingConfigFace>(
      merge(defaultPagingConfig, props.pagingConfig),
    )

    watch(
      () => props.pagingConfig,
      () => {
        merge(clonePagingConfig, defaultPagingConfig, props.pagingConfig)
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

    // table数据
    const list = ref([])
    const reloadList = async({
      pageIndex = pageInfo.pageIndex,
      pageSize = pageInfo.pageSize,
    }: { pageIndex?: number; pageSize?: number } = {}) => {
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


    const ruleFormRef = ref()
    // 表单整体校验方法-已暴露
    const validate = async() => {
      return new Promise(async(resolve) => {
        await nextTick()
        ruleFormRef.value.validate().then(() => {
          resolve(true)
        })
          .catch((err:any) => {
            console.log(err)
            resolve(false)
          })
      })
    }
    // 验证表单具体的某个字段方法-已暴露
    const validateField = async(prop?: string | string[]) => {
      return new Promise(async(resolve) => {
        await nextTick()
        ruleFormRef.value.validateFields(prop).then(() => {
          resolve(true)
        })
          .catch((err:any) => {
            console.log(err)
            resolve(false)
          })
      })
    }
    // 表单重置方法-已暴露
    const resetFields = async(prop?: string | string[]) => {
      await nextTick()
      ruleFormRef.value?.resetFields(prop)
      // updateModelValue() // todo
    }

    // 清理表单验证信息-已暴露
    const clearValidate = async(prop?: string | string[]) => {
      await nextTick()
      ruleFormRef.value?.clearValidate(prop)
    }

    const scrollToField = async(field: string) => {
      await nextTick()
      ruleFormRef.value?.scrollToField(field)
    }
    
    onMounted(function() {
      if (cloneTableConfig.ifInitLoadData) {
        reloadList()
      }
    })

    // 分页size变化
    const handleSizeChange = (val: number) => {
      console.log(`${val} items per page`)
      pageInfo.pageIndex = 1
      pageInfo.pageSize = val
      clonePagingConfig.pageSizeChange && clonePagingConfig.pageSizeChange(val)
      reloadList()
    }
    // 当前页变化
    const handleCurrentChange = (val: number) => {
      console.log(`current page: ${val}`)
      pageInfo.pageIndex = val
      clonePagingConfig.pageIndexChange &&
        clonePagingConfig.pageIndexChange(val)
      reloadList()
    }

    // 勾选事件
    const selectedRow = ref<any>([])
    const handleSelectionChange = (selection: any) => {
      console.log('table-handleSelectionChange', selection)
      selectedRow.value = selection
      if (
        cloneTableConfig.rowSelection &&
        cloneTableConfig.rowSelection.onChange
      ) {
        cloneTableConfig.rowSelection.onChange(selection)
      }
    }
    // 动态改变表格数据
    const setList = (data: []) => {
      list.value = data
    }
    // 获取当前表格数据
    const getList = () => {
      return list.value
    }
    expose({
      selectedRow,
      reloadList,
      setList,
      getList,
      tableDom,
      list,
      validate,
      validateField,
      resetFields,
      clearValidate,
      scrollToField,
    })

    return () => {
      const dynamicComponent = new CustomDynamicComponent()
      const {
        dynamicForm,
        dynamicTable,
        dynamicTableColumn,
        dynamicRadio,
        dynamicPagination,
      } = dynamicComponent
      return (
        <div class={[styles.BsEditTable]}>
          <dynamicForm
            height="100%"
            style={{ height: '100%' }}
            ref={ruleFormRef}
            label-width={'0px'}
            model={list.value}
          >
            <dynamicTable
              v-loading={loading.value}
              height="100%"
              ref={tableDom}
              class={[styles.BsEditTable]}
              data={list.value}
              columns={columns.value}
              data-source={list.value}
              style={{ maxWidth: '100%', height: '100%' }}
              row-key={cloneTableConfig.rowKey}
              pagination={false} // ant 特有属性，关闭table自带分页
              {...cloneTableConfig.nativeProps}
              onSelectionChange={(val: any) => handleSelectionChange(val)}
            >
              {/* 只有el-ui走这段渲染逻辑，ant-Design-vue是通过columns直接生成的 */}
              {CustomDynamicComponent.language ===
            CustomDynamicComponent.eleLanguage ? (
                  <>
                    {/* 需要多选行选择按钮 */}
                    {cloneTableConfig.rowSelection &&
                cloneTableConfig.rowSelection.type === 'checkout' ? (
                        <dynamicTableColumn
                          type="selection"
                          align="center"
                          selectable={(row: any, index: number) => {
                            return cloneTableConfig.rowSelection?.selectable
                              ? cloneTableConfig.rowSelection?.selectable(row, index)
                              : true
                          }}
                        />
                      ) : null}
                    {/* 需要单选行选择按钮 */}
                    {cloneTableConfig.rowSelection &&
                cloneTableConfig.rowSelection.type === 'radio' ? (
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
                                    disabled={
                                      cloneTableConfig.rowSelection?.selectable
                                        ? !cloneTableConfig.rowSelection?.selectable(
                                          scope.row,
                                          index,
                                        )
                                        : false
                                    }
                                    class={[styles.rowRadio]}
                                    v-model={radio.value}
                                    label={
                                      scope.row[
                                        cloneTableConfig.rowKey
                                          ? cloneTableConfig.rowKey
                                          : 'id'
                                      ]
                                    }
                                    onChange={(val: any) =>
                                      handleSelectionChange(val)
                                    }
                                  ></dynamicRadio>
                                </div>
                              )
                            },
                          }}
                        ></dynamicTableColumn>
                      ) : null}
                  
                    {columns.value.map((item: editTableColumnsItemConfig, index: any) => {
                      return (
                      // 递归组件
                        <BsEditTableItem
                          key={item.prop ? item.prop : '' + index}
                          item-data={item}
                          clone-table-config={cloneTableConfig}
                        ></BsEditTableItem>
                      )
                    })}
                  
                  </>
                ) : null}
            </dynamicTable>
          </dynamicForm>
          {clonePagingConfig.open && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '15px 0',
              }}
            >
              <dynamicPagination  // todo
                current-page={pageInfo.pageIndex}
                page-size={pageInfo.pageSize}
                layout={defaultPagingConfig.layout}
                total={pageInfo.total}
                background
                {...clonePagingConfig.nativeProps}
                onSizeChange={(val: any) => handleSizeChange(val)}
                onCurrentChange={(val: any) => handleCurrentChange(val)}
                // ant-ui相关属性
                current={pageInfo.pageIndex}
                onShowSizeChange={(current: number, size: number) =>
                  handleSizeChange(size)
                }
                onChange={(page: number) => handleCurrentChange(page)}
              />
            </div>
          )}
        </div>
      )
    }
  },
})

export * from './interface/index'
