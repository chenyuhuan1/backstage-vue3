/*
 * @Author: 陈宇环
 * @Date: 2022-05-30 14:29:12
 * @LastEditTime: 2023-08-28 15:11:27
 * @LastEditors: 陈宇环
 * @Description: form表单相关接口定义
 */
import { rulesIn } from '@/utils/validator'
import { editTableColumnsConfigFace, editTableConfigFace } from '@/components/BsEditTable/interface/index'
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
  /** 文本模式 */
  textMode?: boolean
  /** 是否加载中 */
  loading?: boolean
  /** 不需要（搜索，重置，导出）操作按钮 */
  notOpBtn?: boolean
  /** 操作按钮col宽度（24等分） */
  opBtnCol?: number
  /** 是否需要搜索按钮 */
  isSearch?: boolean
  /** 搜索按钮点击触发函数 */
  searchFn?: (form: any) => any
  /** 是否需要导出按钮 */
  isExport?: boolean
  /** 搜索按钮点击触发函数 */
  exportFn?: (form: any) => any
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
  /** 输入框控件 */
  | Overwrite<inputProps, RequiredPick<inputProps, 'type' | 'prop'>>
  /** 密码输入控件 */
  | Overwrite<passwordProps, RequiredPick<passwordProps, 'type' | 'prop'>>
  /** 多行文本输入控件 */
  | Overwrite<textareaProps, RequiredPick<textareaProps, 'type' | 'prop'>>
  /** 下拉选择控件 */
  | Overwrite<selectProps, RequiredPick<selectProps, 'type' | 'prop'>>
  /** 单选控件 */
  | Overwrite<radioProps, RequiredPick<radioProps, 'type' | 'prop'>>
  /** 多选控件 */
  | Overwrite<checkboxProps, RequiredPick<checkboxProps, 'type' | 'prop'>>
  /** 数字输入控件 */
  | Overwrite<numberProps, RequiredPick<numberProps, 'type' | 'prop'>>
  /** 数字范围输入控件 */
  | Overwrite<numberRangeProps, RequiredPick<numberRangeProps, 'type' | 'prop'>>
  /** 年月日-日期输入控件 */
  | Overwrite<dateProps, RequiredPick<dateProps, 'type' | 'prop'>>
  /** 年月日-日期范围输入控件 */
  | Overwrite<dateRangeProps, RequiredPick<dateRangeProps, 'type' | 'prop'>>
  /** 级联选项控件 */
  | Overwrite<cascaderProps, RequiredPick<cascaderProps, 'type' | 'prop'>>
  /** 开关控件 */
  | Overwrite<switchProps, RequiredPick<switchProps, 'type' | 'prop'>>
  /** 出文本控件 */
  | Overwrite<textProps, RequiredPick<textProps, 'type' | 'prop'>>
  /** 自定义render函数 */
  | Overwrite<renderProps, RequiredPick<renderProps, 'type' | 'prop'>>
  /** 折叠面板 */
  | Overwrite<collapseProps, RequiredPick<collapseProps, 'type' | 'prop'>>
  /** 行内编辑table */
  | Overwrite<editTableProps, RequiredPick<editTableProps, 'type' | 'prop'>>


/** 基础属性接口 */
interface defaultProps {
  /** key值 */
  prop?: string
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
  /** 文本模式 */
  textMode?: boolean,
  /** 文本模式自定义render */
  textModeRender?: (e: textModeRenderParamsFace) => any,
  /** 是否必填 */
  required?: boolean
  /** 描述字符 */
  placeholder?: string | string[]
  /** 是否需要清除按钮 */
  clearable?: boolean
  /** 该字段展开收起默认值 */
  expandDefault?: boolean
  /** 附加字段（部分selelct等需要绑定两个key） */
  prop2?: string
  /** 附加检验规则 */
  rules?: any[]
  /** 内置校验规则 - @/utils/validator.ts */
  inlayRules?: inlayRuleType[],
  /** 控件下方描述文案render */
  bottomNoteRender?: () => any,
  /** change事件触发函数 */
  change?: (e: any) => void
  /** 第2个表单 key值 */
  propSecond?: string,
  /** 第3个表单 key值 */
  propThird?: string,
  /** ui框架原生属性 */
  nativeProps?: {
    [key: string]: any
  },
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
  type?: 'input'
  /** 最大输出长度 */
  minlength?: number
  /** 最小输出长度 */
  maxlength?: number
}

export interface passwordProps extends defaultProps {
  type?: 'password'
  /** 是否需要密码*号 显示隐藏开关 */
  showPassword?: boolean
  /** 最大输出长度 */
  minlength?: number
  /** 最小输出长度 */
  maxlength?: number
}

export interface textareaProps extends defaultProps {
  type?: 'textarea'
  /** 最大输出长度 */
  minlength?: number
  /** 最小输出长度 */
  maxlength?: number
  /** element-ui 行数 */
  rows?: number,
  /** ant-design-vue 行数 */
  autoSize?: number,
}

/** 数字输入控件props **/
export interface numberProps extends defaultProps {
  type?: 'number'
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 变化值步骤 */
  step?: number
  /** 精确度 */
  precision?: number
  /** 是否需要调整大小控件 */
  controls?: boolean
}

/** 下拉菜单控件props */
export interface selectProps extends defaultProps {
  type?: 'select'
  prop2?: string
  /** 是否根据输入字符过滤 */
  filterable?: boolean
  /** 是否远程搜索 */
  remote?: boolean
  /** 远程搜索函数 */
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
  /** 下拉选项 */
  options?: optionsType
}

/** 单选控件props */
export interface radioProps extends defaultProps {
  type?: 'radio'
  /** 选项中label字段对应的key */
  labelKey?: string
  /** 选项中value字段对应的key */
  valueKey?: string
  /** 是否是带边框的radio */
  border?: boolean
  /** 用按钮的形式展示 button */
  showType?: 'button' | undefined
  /** label格式化函数 */
  format?: format
  /** 选项options对象 */
  options?: optionsType
}

/** 多选控件props */
export interface checkboxProps extends defaultProps {
  type?: 'checkbox'
  /** 选项中label字段对应的key */
  labelKey?: string
  /** 选项中value字段对应的key */
  valueKey?: string
  /** 是否是带边框的radio */
  border?: boolean
  /** 用按钮的形式展示 button */
  showType?: 'button' | undefined
  /** 格式化函数 */
  format?: format
  /** 选项options对象 */
  options?: optionsType
}

/** 日期控件props */
export interface dateProps extends defaultProps {
  /** 控件类型选择 */
  type?: 'year' | 'month' | 'week' | 'date' | 'datetime' | 'dates' | 'datetimerange' | 'daterange' | 'monthrange',
  disabledDate?: (date: any)=>boolean,
  valueFormat?: string,
  startPlaceholder?: string, // 范围选择时开始日期的占位内容
  endPlaceholder?: string // 范围选择时结束日期的占位内容
}

/** 日期控件范围props */
export interface dateRangeProps extends defaultProps {
  /** 控件类型 */
  type?: 'yearRange' | 'monthRange' | 'dateRange' | 'weekRange' | 'datetimeRange'
  /** 范围选择控件(dateRange、numberRange)结束key */
  propEnd?: string
  /** 开始日期-禁止选择的日期 */
  disabledDate?: (date: any) => boolean
  /** 结束日期-禁止选择的日期 */
  disabledEndDate?: (date: any) => boolean
}

/** 数字范围控件props */
export interface numberRangeProps extends defaultProps {
  type?: 'numberRange'
  /** 范围选择控件(dateRange、numberRange)结束key */
  propEnd?: string
  /** 最小 */
  min?: number
  /** 最大 */
  max?: number
  /** 每次加减对应的跨度 */
  step?: number
  /** 精度 */
  precision?: number
  /** 是否需要调整大小控件 */
  controls?: boolean
}

/** 级联控件props */
export interface cascaderProps extends defaultProps {
  type?: 'cascader'
  /** 是否多选 */
  multiple?: boolean
  /** 选项中label字段对应的key */
  labelKey?: string
  /** 选项中value字段对应的key */
  valueKey?: string
  /** 子节点children取数参数 */
  childrenKey?: string,
  /** 是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值 */
  emitPath?: boolean,
  /** element-ui props属性 */
  props?: any,
  /** label格式化函数 */
  format?: (node: any, data: any) => any
  /** 选项获取 */
  options?: optionsType
}

/** 开关控件props */
export interface switchProps extends defaultProps {
  type?: 'switch'
  /** switch 状态为 on 时的值 */
  activeValue?: boolean | string | number,
  /** switch 状态为 off 时的值 */
  inactiveValue?: boolean | string | number,
}

/** 文本控件props */
export interface textProps extends defaultProps {
  type?: 'text',
  /** 默认展示文本 */
  defaultText?: string | number,
}

/** 自定义render函数（只替换form-item-conent部分，label不会被render）*/
export interface renderProps extends defaultProps {
  type?: 'render'
  /** 自定义组件render函数 */
  render: () => any
}
/** Collapse 折叠面板props */
export interface collapseProps extends defaultProps {
  type?: 'collapse'
  dataConfig?: {
    title: string,
    desc: string[] | string,
  }[]
}

/** 行内编辑table */
export interface editTableProps extends defaultProps {
  type?: 'editTable'
  /** 表格列配置 */
  columns: editTableColumnsConfigFace,
  /** 表格配置 */
  editTableConfig?: editTableConfigFace
}

export type inlayRuleType = { validatorName: keyof rulesIn, message?: string, trigger?: string }

export type textModeRenderParamsFace = {value?: any, endValue?: any, curItem?: any, options?: optionsType}

// 从T中排除存在于U中的key和类型。
type Diff<T extends object, U extends object> = Pick<
T,
Exclude<keyof T, keyof U>
>;

// 从T中提取存在于U中的key和对应的类型。（注意，最终是从T中提取key和类型）
type Intersection<T extends object, U extends object> = Pick<T,
Extract<keyof T, keyof U> & Extract<keyof U, keyof T>
>

/**
 * Overwrite实现
 * 获取前者独有的key和类型，再取两者共有的key和该key在后者中的类型，最后合并。
 */
type Overwrite<
  T extends object,
  U extends object,
  I = Diff<T, U> & Intersection<U, T>
> = Pick<I, keyof I>;

// 提取T中的K组成新类型，并改为必填必填
type RequiredPick<T, K extends keyof T> = {
  [P in K]-?: T[P];
};
