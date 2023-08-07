/*
 * @Author: 陈宇环
 * @Date: 2022-12-18 12:02:28
 * @LastEditTime: 2023-01-16 16:36:27
 * @LastEditors: 陈宇环
 * @Description: form相关工具函数
 */

import { columnsBase } from './interface/index'

/**
 * @description:
 * @return {*}
 */
export const getColumnIndex = (columm: columnsBase[], key: string): number => {
  return columm.findIndex((item) => {
    return item.prop === key
  })
}