/*
 * @Author: 陈宇环
 * @Date: 2023-01-16 11:01:19
 * @LastEditTime: 2023-09-01 11:46:39
 * @LastEditors: 陈宇环
 * @Description: 弹窗相关接口定义
 */
import { formConfig } from '@/components/BsForm/interface/index'
import { tableConfigFace, pagingConfigFace, columnsConfigFace, resultInt } from '@/components/BsTable/interface/index'

/** 弹窗配置 */
export interface dialogFace {
  /** dialog标题 */
  title?: string
  /** dialog宽度 */
  width?: string
  /** 确认按钮文案 */
  confirmText?: string
  /** 取消按钮文案 */
  cancelText?: string
  /** 确认按钮回调函数，不传则不显示确认按钮 */
  confirm?: (form?: any) => Promise<boolean | undefined>
  /** 取消按钮回调函数 */
  cancel?: (form?: any) => any
  /** dialog内容render函数 */
  render?: () => any
  /** 是否需要底部按钮 */
  showFooter?: boolean
  /** dialog底部render函数 */
  footerRender?: (close:()=>void) => any
  /** dialog头部render函数 */
  headerRender?: () => any
  /** ui框架原生属性 */
  nativeProps?: {
    [key: string]: any
  }
}

/** 表单类弹窗配置 */
export interface dialogFormFace extends dialogFace {
  /** 弹窗里表单配置 */
  formConfig: formConfig
}

/** 表单弹窗 show方法参数 */
export interface dialogFormShowConfigFace {
  /** 表单弹窗配置 */
  config: dialogFormFace,
  /** 表单初始值 */
  formInitValue?: {[key: string]: any}
}

/** 列表类弹窗 */
export interface dialogListFace extends dialogFace {
  /** 搜索条件配置 */
  searchConfig?: formConfig
  /** table上方操作按钮区域render函数 */
  actionsRender?: () => any
  /** 列表区域配置 */
  listConfig: {
    /** 列配置 */
    columns: columnsConfigFace
    /** 列表加载函数配置 */
    loadData: listConfigLoadDataFace
    /** 弹窗里table配置 */
    tableConfig?: tableConfigFace
    /** 分页配置 */
    pagingConfig?: pagingConfigFace
  }
}

/** 列表弹窗 show方法参数 */
export interface dialogListShowConfigFace {
  /** 列表弹窗配置 */
  config: dialogListFace,
  /** 表单初始值 */
  formInitValue?: {[key: string]: any}
}

/** 列表加载函数类型 */
export type listConfigLoadDataFace = ({ pageIndex, pageSize, searchForm }: { pageIndex: number, pageSize: number, searchForm: any }) => Promise<resultInt>

