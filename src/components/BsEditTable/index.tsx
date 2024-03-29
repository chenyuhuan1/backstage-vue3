/*
 * @Author: 陈宇环
 * @Date: 2022-04-08 13:49:50
 * @LastEditTime: 2023-08-17 09:51:42
 * @LastEditors: 陈宇环
 * @Description:
 */
import {
  defineComponent,
  toRefs,
  reactive,
  ref,
  PropType,
  watch,
  nextTick,
} from 'vue'
import BsEditTableItem from './BsEditTableItem'
import {
  editTableColumnsConfigFace,
  editTableColumnsItemConfig,
  editTableConfigFace,
} from './interface/index'
import styles from './style.module.scss'
import { CustomDynamicComponent } from '../CustomDynamicComponent'
import merge from 'lodash/merge'
import { contentRender } from './toolFn'

export default defineComponent({
  name: 'BsEditTable',
  components: {},
  props: {
    modelValue: {
      type: Array as PropType<{[lebel: string]: any}[]>,
      default() {
        return []
      },
    },
    editTableConfig: {
      type: Object as PropType<editTableConfigFace>,
      default() {
        return {} // 默认值请看defaultTableConfig
      },
    },
    columns: {
      type: Array as PropType<editTableColumnsConfigFace>,
      required: true,
      default() {
        return []
      },
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props: any, { expose, emit }) {
    const { columns } = toRefs(props)
    // table数据
    const list = ref([])

    watch(
      () => props.modelValue,
      () => {
        list.value = props.modelValue
      },
      { immediate: true, deep: true },
    )

    const editItemChange = (scope: any) => {
      emit('update:modelValue', list.value)
      emit('change', scope)
    }

    const defaultTableConfig: editTableConfigFace = {
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
      merge(defaultTableConfig, props.editTableConfig),
    )

    watch(
      () => props.editTableConfig,
      () => {
        merge(cloneTableConfig, defaultTableConfig, props.editTableConfig)
      },
      { immediate: true, deep: true },
    )

    const tableDom = ref(null)
    const radio = ref(undefined)
    const loading = ref(false)

    const ruleFormRef = ref()
    // 整体校验方法-已暴露
    const validate = async() => {
      return new Promise(async(resolve) => {
        await nextTick()
        ruleFormRef.value && ruleFormRef.value.validate().then(() => {
          resolve(true)
        })
          .catch((err:any) => {
            console.log(err)
            resolve(false)
          })
      })
    }

    // 检验单行 - rowIndex 行索引(从0开始)
    const validateRow = async(rowIndex: number) => {
      if (typeof rowIndex !== 'number') {
        throw new Error('请传入行号，类型要求为：number')
      }
      if (rowIndex >= props.modelValue?.length) {
        console.error('校验行索引不存在')
        return false
      }
      const needValidteKey = columns.value?.filter((column: editTableColumnsItemConfig) => {
        return column.widgetConfig
      })?.map((column: editTableColumnsItemConfig) => CustomDynamicComponent.language === CustomDynamicComponent.antLanguage ? [`${rowIndex}`, `${column.prop}`] : `[${rowIndex}].${column.prop}`) ?? []
      return await validateField(needValidteKey)
    }

    // 验证表单具体的某个字段方法-已暴露
    const validateField = async(prop?: string | string[]) => {
      return new Promise(async(resolve) => {
        await nextTick()
        const fn:any = CustomDynamicComponent.language === CustomDynamicComponent.antLanguage ? ruleFormRef.value?.validateFields(prop) : ruleFormRef.value?.validateField(prop)
        fn?.then(() => {
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
    expose({
      tableDom,
      list,
      selectedRow,
      validate,
      validateRow,
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
      } = dynamicComponent
      return (
        <div class={['bs-edit-table', styles.BsEditTable]}>
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
              class={['bs-edit-table-table', styles.table]}
              data={list.value}
              columns={columns.value}
              data-source={list.value}
              style={{ maxWidth: '100%', height: '100%' }}
              row-key={cloneTableConfig.rowKey}
              pagination={false} // ant 特有属性，关闭table自带分页
              v-slots={CustomDynamicComponent.language ===
                CustomDynamicComponent.antLanguage ? {
                  bodyCell: (scope: any) => {
                    return contentRender(cloneTableConfig, scope.column, { $index: scope.index, row: scope.record  }, () => {
                      editItemChange(scope)
                    })
                  },
                } : undefined}
              {...cloneTableConfig.nativeProps}
              onSelectionChange={(val: any) => handleSelectionChange(val)}
            >
              {/* 只有el-ui走这段渲染逻辑 */}
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
                          onChange={(scope: any) => {
                            editItemChange(scope)
                          }}
                        ></BsEditTableItem>
                      )
                    })}
                  
                  </>
                ) : null}
            </dynamicTable>
          </dynamicForm>
        </div>
      )
    }
  },
})

export * from './interface/index'
