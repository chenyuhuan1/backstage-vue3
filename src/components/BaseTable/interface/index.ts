/*
 * @Author: 陈宇环
 * @Date: 2023-01-03 10:56:12
 * @LastEditTime: 2023-04-13 14:49:26
 * @LastEditors: 陈宇环
 * @Description:
 */

// table配置参数
export interface tableConfigFace {
  border?: boolean,  // 是否需要边框
  stripe?: boolean, // 是否斑马纹
  ifInitLoadData?: boolean, // 是否初始调用getList方法
  rowSelection?: rowSelectionFace // 选择行配置
  rowKey?: string, // 行对应key值，选择行功能开启时必传
  nativeProps?: {   // ui框架原生属性
    [key: string]: any
  }
}

// 分页配置参数
export interface pagingConfigFace {
  open?: boolean,  // 是否需要分页
  pageIndex?: number,  // 默认pageIndex
  pageSize?: number,   // 默认pageSize
  total?: number, // 默认total
  layout?: string,
  pageIndexChange?: (val: number) => any
  pageSizeChange?: (val: number) => any
  nativeProps?: {   // ui框架原生属性
    [key: string]: any
  }
}

// table列配置
export type theadConfigFace = theadItemConfig[]

// table列配置项item
export interface theadItemConfig {
  prop?: string,  // key
  label?: string, // 中文名称
  type?: 'selection' | 'index' | 'expand'  // 类型
  width?: string | number, // 宽度
  minWidth?: string | number, // 最小宽度
  align?: 'left' | 'center' | 'right', // 列align布局
  fixed?: 'left' | 'right' | true, // 列是否固定在左侧或者右侧，true 表示固定在左侧
  render?: (scope: any) => any,  // 自定义渲染函数
  children?: theadItemConfig[],  // 多级头定义
  nativeProps?: {   // ui框架原生属性
    [key: string]: any
  }
}

// table多选配置项
export type rowSelectionFace = {
  type: 'checkout' | 'radio', // 多选或者单选
  onChange:(selection?: any[]) => any,  // 选择变化勾选变化事件
  selectable?: (row:any, index:number) => boolean // 当前行勾选是否禁用
}

// table数据获取函数返回值校验
export interface resultInt {
  success: boolean, // 接口返回状态
  list: any[], // table数据列表
  total: number // table数据总数
}

// table数据获取函数接口
export type loadDataFace = ({ pageIndex, pageSize }: { pageIndex: number, pageSize: number }) => Promise<resultInt>

