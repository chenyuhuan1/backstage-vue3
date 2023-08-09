/*
 * @Author: 陈宇环
 * @Date: 2023-01-03 10:56:12
 * @LastEditTime: 2023-06-30 16:35:28
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

/** 编辑table列配置 */
export interface editTableColumnsItemConfig extends columnsItemConfig {
  /** 当前列是否正在编辑状态 */
  editing?: boolean,
  /** 编辑状态下表单项配置 */
  formConfig?: Omit<columnsBase, 'prop'>
}

/** 编辑table列配置项item */
export type editTableColumnsConfigFace = editTableColumnsItemConfig[]