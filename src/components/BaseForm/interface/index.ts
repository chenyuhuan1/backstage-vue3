/*
 * @Author: 陈宇环
 * @Date: 2022-05-30 14:29:12
 * @LastEditTime: 2023-05-09 14:45:47
 * @LastEditors: tanpeng
 * @Description:
 */


/** 表单组件config配置接口 */
export interface formConfig {
  /** 表单项配置 */
  columns: columnsBase[]
  /** columns项默认宽度(1-24整数) */
  colNum?: number
  /** label宽度 */
  labelWidth?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否加载中 */
  loading?: boolean
  /** 不需要（搜索，重置，导出）操作按钮 */
  notOpBtn?: boolean
  /** 操作按钮col宽度（24等分） */
  opBtnCol?: number
  /** 是否需要搜索按钮 */
  isSearch?: boolean
  /** 搜索按钮点击触发函数 */
  searchFn?: () => any
  /** 是否需要导出按钮 */
  isExport?: boolean
  /** 搜索按钮点击触发函数 */
  exportFn?: () => any
  /** 是否需要重置按钮 */
  isReset?: boolean
  /** 搜索按钮点击触发函数 */
  resetFn?: () => any
  /** 是否需要展示/收起按钮 */
  isExpand?: boolean
  /** 附加操作按钮render */
  appendOpBtn?: () => any | void
  /** ui框架原生属性 */
  nativeProps?: {
    [key: string]: any
  }
}

/** 所有表单控件的联合类型 */
export type columnsBase =
  | inputProps
  | selectProps
  | radioProps
  | checkboxProps
  | numberProps
  | dateProps
  | dateRangeProps
  | numberRangeProps
  | cascaderProps
  | switchProps
  | textProps
  | renderProps


/** 基础属性接口 */
interface defaultProps {
  /** key值 */
  prop: string
  /** label值 */
  label?: string
  /** 列宽 24等分 */
  colNum?: number
  /** label宽度 */
  labelWidth?: number | string
  /** 是否隐藏（隐藏直接销毁dom） */
  hide?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否必填 */
  required?: boolean
  /** 描述字符 */
  placeholder?: string
  /** 是否需要清除按钮 */
  clearable?: boolean
  /** 该字段展开收起默认值 */
  expandDefault?: boolean
  /** 附加字段（部分selelct等需要绑定两个key） */
  prop2?: string
  /** 附加检验规则 */
  rules?: any[]
  /** change事件触发函数 */
  change?: (e: any) => void
  /** ui框架原生属性 */
  nativeProps?: {
    [key: string]: any
  }
}

/** options选项 select、radio、checkbox、cascader（可能包含children）选项接口 */
export type optionsType = {
  /** 直接传数组对象 */
  [label: string]: any, children?: any[]
}[]
/** 字典获取 */
| { type: 'dic'; key: string }
/** 接口获取 */
| {
  type: 'api'
  /** 必须返回对象数组，不一定是label，value格式 */
  getData: () => Promise<{ [label: string]: any, children?: any[] }[]>
}


/** select、radio、checkbox 选项格式化函数（对应element-plus组件插槽）*/
export type format = (item: any) => any

/** 输入框控件props */
export interface inputProps extends defaultProps {
  type: 'input' | 'textarea' | 'password'  // 这里还能添加很多类型 参考：https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types
  showPassword?: boolean  // 是否需要密码*号 显示隐藏开关
  minlength?: number
  maxlength?: number
  rows?: number // textarea 行数
}

/** 数字输入控件props **/
export interface numberProps extends defaultProps {
  type: 'number'
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 变化值步骤 */
  step?: number
  precision?: number
  /** 是否需要调整大小控件 */
  controls?: boolean
}

/** 下拉菜单控件props */
export interface selectProps extends defaultProps {
  type: 'select'
  prop2?: string
  filterable?: boolean
  remote?: boolean
  remoteMethod?: (query: string) => Promise<{ [label: string]: any }[]>
  /** 多选开关 */
  multiple?: boolean
  /** 多选时，是否需要折叠展示 */
  collapseTags?: boolean
  /** 多选并折叠展示时，鼠标放上去是否需要Tooltip展示 */
  collapseTagsTooltip?: boolean
  /** 多选限制个数 */
  multipleLimit?: number
  /** label取值参数 */
  labelKey?: string
  /** value取值参数 */
  valueKey?: string
  /** 搜索状态下，选择一个项之后，是否保留当前关键字 */
  reserveKeyword?: boolean
  /** 格式化函数 */
  format?: format
  options?: optionsType
}

/** 单选控件props */
export interface radioProps extends defaultProps {
  type: 'radio'
  labelKey?: string
  valueKey?: string
  border?: boolean
  /** 用按钮的形式展示 button */
  showType?: 'button' | undefined
  /** 格式化函数 */
  format?: format
  options?: optionsType
}

/** 多选控件props */
export interface checkboxProps extends defaultProps {
  type: 'checkbox'
  labelKey?: string
  valueKey?: string
  border?: boolean
  /** 用按钮的形式展示 button */
  showType?: 'button' | undefined
  /** 格式化函数 */
  format?: format
  options?: optionsType
}

/** 日期控件props */
export interface dateProps extends defaultProps {
  /** 控件类型选择 */
  type: 'year' | 'month' | 'week' | 'date' | 'datetime' | 'dates'
}

/** 日期控件范围props */
export interface dateRangeProps extends defaultProps {
  /** 控件类型 */
  type: 'yearRange' | 'monthRange' | 'dateRange' | 'weekRange' | 'datetimeRange'
  /** 范围选择控件(dateRange、numberRange)结束key */
  propEnd?: string
  /** 禁止选择的日期 */
  disabledDate?: (date: any) => boolean
  /** 禁止选择的日期 */
  disabledEndDate?: (date: any) => boolean
}

/** 数字范围控件props */
export interface numberRangeProps extends defaultProps {
  type: 'numberRange'
  /** 范围选择控件(dateRange、numberRange)结束key */
  propEnd?: string
  /** 最小 */
  min?: number
  /** 最大 */
  max?: number
  /** 步骤条 */
  step?: number
  precision?: number
  /** 是否需要调整大小控件 */
  controls?: boolean
}

/** 级联控件props */
export interface cascaderProps extends defaultProps {
  type: 'cascader'
  multiple?: boolean
  labelKey?: string,
  valueKey?: string,
  /** 子节点children取数参数 */
  childrenKey?: string,
  emitPath?: boolean,
  props?: any,
  /** 格式化函数 */
  format?: (node: any, data: any) => any
  options?: optionsType
}

/** 开关控件props */
export interface switchProps extends defaultProps {
  type: 'switch'
  /** switch 状态为 on 时的值 */
  activeValue?: boolean | string | number,
  /** switch 状态为 off 时的值 */
  inactiveValue?: boolean | string | number,
}

/** 文本控件props */
export interface textProps extends defaultProps {
  type: 'text',
  defaultText?: string | number,
}

/** 自定义render函数（只替换form-item-conent部分，label不会被render）*/
export interface renderProps extends defaultProps {
  type: 'render'
  /** 自定义组件render */
  render: () => any
}

// 实例是否是columnsOtherBase类型
// export const isColumnsOtherBase = (item: columnsBase): item is columnsOtherBase => {
//   return (item as columnsOtherBase).fullRender !== undefined
// }
