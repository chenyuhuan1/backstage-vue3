/*
 * @Author: 陈宇环
 * @Date: 2023-08-03 10:56:12
 * @LastEditTime: 2023-08-28 16:05:48
 * @LastEditors: 陈宇环
 * @Description: table+paging 接口定义
 */

import type { columnsBase } from '../../BsForm/interface/index'
import type { tableConfigFace, columnsItemConfig  } from '../../BsTable/interface/index'

/** 编辑table配置参数 */
export interface editTableConfigFace extends tableConfigFace {
  /** 是否编辑状态 */
  editing?: boolean,
  /** 行编辑状态对应的key */
  rowEditingKey?: string,
}

// 将columnsBase联合类型中的prop属性去掉
type formConfigType<T, U> = T extends U ? string : Omit<T, 'prop'>

export type widgetConfigFace = formConfigType<columnsBase, string> & {
  widgetConfigDynamicFn?: (scope?: any) => Partial<widgetConfigFace>
}

/** 编辑table列配置 */
export interface editTableColumnsItemConfig extends columnsItemConfig {
  /** 范围选择器结束值的key */
  propEnd?: string
  /** 当前列是否正在编辑状态 */
  editing?: boolean,
  /** 编辑状态下表单项配置 */
  widgetConfig?: widgetConfigFace,
}

/** 编辑table列配置项item */
export type editTableColumnsConfigFace = editTableColumnsItemConfig[]