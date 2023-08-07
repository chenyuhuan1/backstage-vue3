import { ButtonType } from 'element-plus'

/** 按钮配置对象定义 */
export interface buttonFace {
  /** 是否展示 */
  show?: boolean,
  /** 按钮文案 */
  text?: string,
  /** 是否禁用 */
  disabled?: boolean,
  /** 按钮type */
  type?: ButtonType,
  /** 按钮大小 */
  size?: import('element-plus/es/utils').EpPropMergeType<StringConstructor, '' | 'default' | 'small' | 'large', never>,
  /** 点击事件 */
  click?: () => void,
  /** 二次确认弹窗配置 */
  confirmConfig?: {
    /** 二次确认标题 */
    title: string,
    /** 二次确认-确认事件 */
    confirm?: () => void,
    /** 二次确认-取消事件 */
    cancel?: () => void,
    /** el-popconfirm二次确认弹窗原生属性兼容 */
    nativeProps?: {
      [key: string]: any
    }
  }
  /** ui框架原生属性 */
  nativeProps?: {
    [key: string]: any
  }
}