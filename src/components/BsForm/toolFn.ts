/*
 * @Author: 陈宇环
 * @Date: 2022-12-18 12:02:28
 * @LastEditTime: 2023-08-15 17:15:15
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

// 如果是文本模式则展示文本，否则展示defaultDom
export const textModeFilter = (textMode: boolean, text: string, textModeRender: any, defaultDom: any) => {
  if (textMode) {
    if (textModeRender) {
      return textModeRender
    }
    return text
  }
  return defaultDom
}

export const getOptionsLabel = (options: {label: string, [key: string]: any} | {label: string, [key: string]: any}[]): string => {
  if (Array.isArray(options)) {
    return options?.map((item:any) => item.label).join('、')
  } else {
    return options?.label
  }
}