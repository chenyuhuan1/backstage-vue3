/*
 * @Author: 陈宇环
 * @Date: 2023-02-07 15:53:39
 * @LastEditTime: 2023-08-23 14:15:57
 * @LastEditors: 陈宇环
 * @Description: 列表类弹窗（可配置搜索条件）
 */

import { defineComponent, ref, reactive } from 'vue'
import { dialogListFace, dialogListShowFace } from '../interface/index'
import { loadDataFace } from '@/components/BsTable/interface/index'
import BsDialog from '../index'
import BsForm from '@/components/BsForm'
import BsTable from '@/components/BsTable'
import merge from 'lodash/merge'
export default defineComponent({
  setup(props: any, { expose }) {
    const BsDialogRef = ref()
    const BsFormRef = ref()
    const listDiologDefultConfig:dialogListFace = reactive<dialogListFace>({
      title: 'form Dialog标题',  // dialog标题
      width: '800px',  // dialog宽度
      cancelText: '关闭', // 取消按钮文案
      searchConfig: {
        columns: [],  // 表单项配置
        colNum: 6,
        labelWidth: '100px',  // label宽度
      },
      listConfig: {
        columns: [], // table列配置
        loadData: async() => {
          return new Promise(async(resolve) => {
            resolve({
              success: true,
              list: [],
              total: 0,
            })
          })
        }, // 加载函数配置
        tableConfig: {
          ifInitLoadData: true, // table默认初始化加载
        }, // 弹窗里table配置
        pagingConfig: {
          open: true,  // 是否需要分页
          pageIndex: 1,  // 默认pageIndex
          pageSize: 10,   // 默认pageSize
        }, // 分页配置
      },
    })
    const BsTableRef = ref()

    const searchFn = () => {
      BsTableRef.value?.getList({
        pageIndex: 1,
      })
    }

    const searchForm:{[key: string]: any} = ref({})
    const show: dialogListShowFace = async({ config, formInitValue }) => {
      searchForm.value = formInitValue ? formInitValue : {}
      // 深度merge  eg：{a:{b:1}},{a:{c:2}}=>{a:{b:1,c:2}}
      const mergeConfig:dialogListFace = merge({}, listDiologDefultConfig, config, {
        listConfig: {
          tableConfig: {
            ifInitLoadData: false, // dialog里的table默认都不初始化加载，需要在show方法中判断传入的config?.listConfig?.tableConfig?.ifInitLoadData来确认是否加载
          },
        },
      })

      // 特殊处理是否需要初始加载，解决第二次打开不会加载数据问题
      if (config?.listConfig?.tableConfig?.ifInitLoadData !== false) {
        setTimeout(async() => {
          const verify = await BsFormRef.value.validate()
          if (!verify) {
            return
          }
          searchFn()
        })
      }
      
      const listLoadData:loadDataFace = async({ pageIndex, pageSize }) => {
        mergeConfig.searchConfig && (mergeConfig.searchConfig.loading = true)
        const res = await mergeConfig.listConfig?.loadData({
          pageIndex,
          pageSize,
          searchForm: searchForm.value,
        })
        mergeConfig.searchConfig && (mergeConfig.searchConfig.loading = false)
        return res
      }
      
      const listDiologConfig:dialogListFace = merge({}, mergeConfig, {
        // 通过合并之后的conifg来构建render函数
        render: () => {
          return (
            <>
              {mergeConfig?.searchConfig?.columns && <BsForm
                ref={BsFormRef}
                v-model={searchForm.value}
                class="bs-form"
                config={mergeConfig.searchConfig}
                onSearch={() => {
                  searchFn()
                }}
              ></BsForm>}
              {
                mergeConfig.actionsRender && <div style={{ marginBottom: '10px' }}>
                  {mergeConfig.actionsRender()}
                </div>
              }
              <BsTable
                style={{ padding: 0 }}
                ref={BsTableRef}
                columns={mergeConfig.listConfig.columns}
                load-data={listLoadData}
                table-config={mergeConfig.listConfig.tableConfig}
                paging-config={mergeConfig.listConfig.pagingConfig}
              />
            </>
          )
        },
      })
      BsDialogRef.value.show(listDiologConfig)
    }

    const setForm = (key: string, value: any) => {
      setTimeout(() => {
        searchForm.value[key] = value
      })
    }

    const getForm = (key: string) => {
      if (!key) {
        return searchForm.value
      }
      return searchForm.value[key]
    }

    const getList = ({ pageIndex, pageSize }: { pageIndex?: number, pageSize?: number } = {}) => {
      BsTableRef.value.getList(pageIndex, pageSize)
    }

    expose({ BsFormRef, BsTableRef, show, setForm, getForm, getList })

    return () => {
      return (
        <div class="bs-list-dialog">
          <BsDialog
            ref={BsDialogRef}
          ></BsDialog>
        </div>
      )
    }
  },
})

export * from '../interface/index'