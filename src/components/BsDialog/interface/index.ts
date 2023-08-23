/*
 * @Author: 陈宇环
 * @Date: 2023-01-16 11:01:19
 * @LastEditTime: 2023-08-23 14:15:19
 * @LastEditors: 陈宇环
 * @Description: 弹窗相关接口定义
 */
import { formConfig } from '@/components/BsForm/interface/index'
import { tableConfigFace, pagingConfigFace, columnsConfigFace, resultInt } from '@/components/BsTable/interface/index'

export interface dialogFace {
  title?: string  // dialog标题
  width?: string  // dialog宽度
  confirmText?: string // 确认按钮文案
  cancelText?: string // 取消按钮文案
  confirm?: (form?: any) => Promise<boolean | undefined>  // 确认按钮回调函数，不传则不显示确认按钮
  cancel?: (form?: any) => any // 取消按钮回调函数
  render?: () => any  // dialog内容render函数
  showFooter?: boolean // 是否需要底部按钮
  footerRender?: (close:()=>void) => any // dialog底部render函数
  headerRender?: () => any // dialog头部render函数
  /** ui框架原生属性 */
  nativeProps?: {
    [key: string]: any
  }
}

// 表单类弹窗
export interface dialogFormFace extends dialogFace {
  formConfig: formConfig // 弹窗里表单配置
}

export type dialogFormShowFace = ({ config, formInitValue }:{config: dialogFormFace, formInitValue?: {[key: string]: any}}) => void

// 列表类弹窗
export interface dialogListFace extends dialogFace {
  searchConfig?: formConfig // 搜索条件
  actionsRender?: () => any // table上方操作按钮
  listConfig: {
    columns: columnsConfigFace  // table列配置
    loadData: listConfigLoadDataFace
    tableConfig?: tableConfigFace // 弹窗里table配置
    pagingConfig?: pagingConfigFace // 分页配置
  }
}

export type dialogListShowFace = ({ config, formInitValue }:{config: dialogListFace, formInitValue?: {[key: string]: any}}) => void

export type listConfigLoadDataFace = ({ pageIndex, pageSize, searchForm }: { pageIndex: number, pageSize: number, searchForm: any }) => Promise<resultInt>

