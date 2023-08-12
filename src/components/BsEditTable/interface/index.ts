/*
 * @Author: 陈宇环
 * @Date: 2023-08-03 10:56:12
 * @LastEditTime: 2023-08-10 16:35:28
 * @LastEditors: 陈宇环
 * @Description: table+paging 接口定义
 */

import { columnsBase } from '@/components/BsForm/interface/index'


import { tableConfigFace, columnsItemConfig  } from '@/components/BsTable/interface/index'

// eslint-disable-next-line no-duplicate-imports
export type { inlayRuleType } from '@/components/BsForm/interface/index'

// eslint-disable-next-line no-duplicate-imports
export type {
  /** table多选配置项 */
  rowSelectionFace,
  /** 分页配置参数 */
  pagingConfigFace,
  /** table数据获取函数接口 */
  loadDataFace,
  /** table数据获取函数返回值校验 */
  resultInt,
} from '@/components/BsTable/interface/index'

/** 编辑table配置参数 */
export interface editTableConfigFace extends tableConfigFace {
  /** 是否编辑状态 */
  editing?: boolean,
  /** 行编辑状态对应的key */
  rowEditingKey?: string,
}

// 将columnsBase联合类型中的prop属性去掉
type formConfigType<T, U> = T extends U ? string : Omit<T, 'prop'>

export type widgetConfigFace = formConfigType<columnsBase, string>
/** 编辑table列配置 */
export interface editTableColumnsItemConfig extends columnsItemConfig {
  /** 当前列是否正在编辑状态 */
  editing?: boolean,
  /** 编辑状态下表单项配置 */
  widgetConfig?: widgetConfigFace,
}


/** 编辑table列配置项item */
export type editTableColumnsConfigFace = editTableColumnsItemConfig[]