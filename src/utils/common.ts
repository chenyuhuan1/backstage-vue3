import dayjs from 'dayjs'

// sessionStorage
export const session = function(key: string, value?: any): any {
  // debugger
  // eslint-disable-next-line no-void
  if (value === void 0) {
    const lsVal = sessionStorage.getItem(key)
    if (lsVal && lsVal.indexOf('autostringify-') === 0) {
      return JSON.parse(lsVal.split('autostringify-')[1])
    } else {
      return lsVal
    }
  }
  if (typeof value === 'object' || Array.isArray(value)) {
    return sessionStorage.setItem(key, 'autostringify-' + JSON.stringify(value))
  }
  return sessionStorage.setItem(key, value)
}

export function isObject(obj: unknown): boolean {
  return obj !== null && typeof obj === 'object'
}

export function replaceParenthesis(url: string, sourceData: any):string {
  let interfaceUrl = url
  for (const key in sourceData) {
    // 将接口上的/${id}等替换成/2
    interfaceUrl = interfaceUrl.replace(new RegExp('\\{' + key + '}', 'g'), sourceData[key])
  }
  return interfaceUrl
}

/**
 * @description [fnDownload 下载文件]
 * @author   zoumiao
 * @param {Object} data [blob数据]
 * @param {String} title [文件名称]
 * @returns   {null}    [没有返回]
 */
export function exportFile(data:any, title:string): boolean {
  const url = window.URL.createObjectURL(new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }))
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  link.setAttribute('download', title)
  document.body.appendChild(link)
  link.click()
  return true
}

// 下载流文件
export function $download(params: {filetype?: string, title: string, data: any, callback: () => void}):void {
  params.filetype = params.filetype || 'xlsx'
  const date = dayjs().format('YYYYMMDDHHmmss')
  const title = `${params.title}-${date}.${params.filetype}`
  const ret = exportFile(params.data, title)
  ret && params.callback()
}

// 获取字典
export function getDicByKey(key: string):any {
  // const dic = session('sysCodeList')?.find((item: any) => item.bizTypeCode === key)
  // if (dic) {
  //   return dic.codeValues
  // }
  return []
}

// 树遍历
export function treeForeach(tree: any[], func: (node: any)=> any | void, childrenKey = 'children') {
  tree.forEach((data) => {
    func(data)
    data[childrenKey] && treeForeach(data[childrenKey], func) // 遍历子树
  })
}

// 数字转成3个逗号分割
export const dotNumber = (value: number | string, num?: number, ignoreStr?: boolean) => {
  if (value === '-') {
    return '-'
  }
  if (value === null) {
    return ''
  }
  if (isNaN(Number(value)) || (ignoreStr && typeof value === 'string')) { // 如果不是数字或者可以转化成数字的话，直接返回
    return value
  }
  const fixed = num || 2
  if (value) {
    const fm = parseFloat(String(value)).toFixed(fixed).replace(/\B(?=(\d{3})+\b)/g, ',')
    return fm
  } else {
    return '0.00'
  }
}

/**
 * 根据code判断是否要显示按钮（按钮权限控制）
 * @param code
 * @returns {*}
 */
export const isHavePermission = function(code: string) {
  const { permissionInfo } = session('permissionInfo')
  const userInfo = session('userInfo')?.data
  if (userInfo !== null) {
    if (userInfo?.userType === 1) { // 超级管理员
      return true
    } else {
      const permission = permissionInfo?.find((value: string) => value === code)
      if (permission) {
        return true
      }
      return false
    }
  } else {
    return false
  }
}
