/*
 * @Author: 陈宇环
 * @Date: 2023-01-03 10:56:12
 * @LastEditTime: 2023-05-15 10:13:42
 * @LastEditors: 陈宇环
 * @Description: table+paging 接口定义
 */

/** table配置参数 */
export interface tableConfigFace {
  /** 是否需要边框 */
  border?: boolean,
  /** 是否斑马纹 */
  stripe?: boolean,
  /** 是否初始调用getList方法 */
  ifInitLoadData?: boolean,
  /** 选择行配置 */
  rowSelection?: rowSelectionFace
  /** 行对应key值，选择行功能开启时必传 */
  rowKey?: string,
  /** ui框架原生属性 */
  nativeProps?: {
    [key: string]: any
  }
}

/** table多选配置项 */
export type rowSelectionFace = {
  /** 多选或者单选 */
  type: 'checkout' | 'radio',
  /** 选择变化勾选变化事件 */
  onChange:(selection?: any[]) => any,
  /** 当前行勾选是否禁用 */
  selectable?: (row:any, index:number) => boolean
}


/** 分页配置参数 */
export interface pagingConfigFace {
  /** 是否需要分页 */
  open?: boolean,
  /** 默认pageIndex */
  pageIndex?: number,
  /** 默认pageSize */
  pageSize?: number,
  /** 默认total */
  total?: number,
  /** 分页组件需要控件 */
  layout?: string,
  /** 分页index change函数 */
  pageIndexChange?: (val: number) => any
  /** 分页size change函数 */
  pageSizeChange?: (val: number) => any
  /** ui框架原生属性 */
  nativeProps?: {
    [key: string]: any
  }
}

/** table列配置 */
export type theadConfigFace = theadItemConfig[]

/** table列配置项item */
export interface theadItemConfig {
  /** key */
  prop?: string,
  /** 中文名称 */
  label?: string,
  /** 类型 */
  type?: 'selection' | 'index' | 'expand'
  /** 宽度 */
  width?: string | number,
  /** 最小宽度 */
  minWidth?: string | number,
  /** 列align布局 */
  align?: 'left' | 'center' | 'right',
  /** 列是否固定在左侧或者右侧，true 表示固定在左侧 */
  fixed?: 'left' | 'right' | true,
  /** 自定义渲染函数 */
  render?: (scope: any) => any,
  /** 多级头定义 */
  children?: theadItemConfig[],
  /** ui框架原生属性 */
  nativeProps?: {
    [key: string]: any
  }
}


/** table数据获取函数接口 */
export type loadDataFace = ({ pageIndex, pageSize }: { pageIndex: number, pageSize: number }) => Promise<resultInt>

/** table数据获取函数返回值校验 */
export interface resultInt {
  /** 接口返回状态 */
  success: boolean,
  /** table数据列表 */
  list: any[],
  /** table数据总数 */
  total: number
}
