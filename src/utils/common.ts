// sessionStorage
export const session = function(key: string, value?: any): any {
  // debugger
  if (value === void 0) {
    const lsVal:string = sessionStorage.getItem(key) as string
    return JSON.parse(lsVal)
  }
  return sessionStorage.setItem(key, JSON.stringify(value))
}

// 获取字典
export function getDicByKey(key: string):any {
  const dicList = session('sysCodeList')
  if (dicList && Array.isArray(dicList)) {
    const dic = dicList?.find((item: any) => {
      return item?.bizTypeCode === key
    })
    return dic?.codeValues ?? null
  }
  return dicList?.[key] ?? null
}

// 树遍历
export function treeForeach(tree: any[], func: (node: any)=> any | void, childrenKey = 'children') {
  tree.forEach((data) => {
    func(data)
    data[childrenKey] && treeForeach(data[childrenKey], func) // 遍历子树
  })
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

