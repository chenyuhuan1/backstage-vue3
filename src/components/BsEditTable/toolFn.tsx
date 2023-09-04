import { commonRules, rulesIn } from '@/utils/validator'
import { widgetConfigFace, editTableConfigFace, editTableColumnsItemConfig } from './interface/index'
import { inlayRuleType } from '@/components/BsForm/interface/index'
// 导入所有自定义form控件组件
import * as widget from '@/components/BsForm/components/index'
import styles from './style.module.scss'
import { CustomDynamicComponent } from '../CustomDynamicComponent'
// 正则验证
const asyncValidator = (val: string | number | any[], type: keyof rulesIn) => val ? commonRules[type][0].test(val) : true
// 错误消息打印
const asyncMessage = (type: keyof rulesIn) => commonRules[type][1]

// 根据table编辑项配置来获取单个项目的校验规则
export const getItemRules = (widgetConfig: widgetConfigFace) => {
  return [
    {
      required: widgetConfig?.required,
      message: `${
        widgetConfig?.type && ['input', 'textarea', 'number', 'numberRange'].includes(widgetConfig?.type) ? '请输入' : '请选择'
      }`,
      trigger: 'change',
    },
    ...(widgetConfig?.inlayRules ? widgetConfig?.inlayRules?.map((item: inlayRuleType) => {
      return {
        validator: (rule: any, value: any) => {
          if (!asyncValidator(value, item.validatorName)) {
            return Promise.reject(item.message ?? asyncMessage(item.validatorName))
          }
          return Promise.resolve()
        },
        trigger: item.trigger ?? 'change',
      }
    }) : []),
    ...(widgetConfig?.rules ? widgetConfig?.rules : []),
  ]
}

/**
 * @description: 单元格渲染函数
 * @param {editTableConfigFace} cloneTableConfig  表格配置
 * @param {editTableColumnsItemConfig} columnConfig  当前列配置
 * @param {any} scope  当前行数组  ps: ele为原生插槽scope数据，ant是通过手动拼凑的
 * @param {function} emitChange  // 编辑控件变化时会调用这个方法
 * @return {*}
 */
export const contentRender = (cloneTableConfig: editTableConfigFace, columnConfig: editTableColumnsItemConfig, scope: any, emitChange:()=>void) => {
  const dynamicComponent = new CustomDynamicComponent()
  const { dynamicFormItem } = dynamicComponent
  // element-plus 默认$index === -1 这里需要排除一下
  if (scope.$index === -1) {
    return
  }
  // 列编辑 整表编辑!==关闭状态 && 列编辑开启 && 列存在formconfig
  const colEditing = cloneTableConfig.editing !== false && columnConfig.editing
  // 行编辑 整表编辑!==关闭状态 && 行编辑开启 && 列存在formconfig
  const rowEditing = cloneTableConfig.editing !== false && scope.row[cloneTableConfig?.rowEditingKey ?? 'editing']
  // 整表编辑 整表编辑 && 当前列编辑!==关闭状态 && 行编辑!==关闭状态 && 存在配置
  const overallEditing = cloneTableConfig.editing && columnConfig.editing !== false && scope.row[cloneTableConfig?.rowEditingKey ?? 'editing'] !== false
  if ((colEditing || overallEditing || rowEditing) && columnConfig.widgetConfig) { // 渲染编辑组件
    const componentInstance = widget.getComponentByType(columnConfig.widgetConfig.type)
    return <dynamicFormItem
      class={[styles.BsEditTableFormItem]}
      label-width='0px'
      label=''
      prop={CustomDynamicComponent.language === CustomDynamicComponent.antLanguage ? undefined : `[${scope.$index}].${columnConfig.prop}`}
      // name={`[${scope.$index}].${columnConfig.prop}`}
      name={[`${scope.$index}`, `${columnConfig.prop}`]}
      rules={getItemRules(columnConfig?.widgetConfig)}
      styles={{ marginBottom: 0 }}
      v-slots={{
        error: ({ error }: {error: string}) => {
          return <div title={error} style={{ display: 'flex', justifyContent: 'center' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" style={{ color: 'red', width: '16px' }} data-v-ea893728="">
            <path d="M928.99 755.83 574.6 203.25c-12.89-20.16-36.76-32.58-62.6-32.58s-49.71 12.43-62.6 32.58L95.01 755.83c-12.91 20.12-12.9 44.91.01 65.03 12.92 20.12 36.78 32.51 62.59 32.49h708.78c25.82.01 49.68-12.37 62.59-32.49 12.91-20.12 12.92-44.91.01-65.03zM554.67 768h-85.33v-85.33h85.33V768zm0-426.67v298.66h-85.33V341.32l85.33.01z" fill="currentColor"></path>
          </svg></div>
        },
      }}
    >
      <componentInstance
        v-models={[
          [scope.row[(columnConfig as {prop: string}).prop]],
          [scope.row[(columnConfig as {propEnd?: any}).propEnd], 'propEnd'],
        ]}
        config={{ ...columnConfig.widgetConfig, ...(columnConfig?.widgetConfig?.widgetConfigDynamicFn ? columnConfig?.widgetConfig?.widgetConfigDynamicFn(scope) : {}) }}
        onChange={() => {
          columnConfig.widgetConfig?.change && columnConfig.widgetConfig.change(scope)
          emitChange()
        }}
      />
    </dynamicFormItem>
  }
  if (columnConfig.render) {
    return typeof columnConfig.render === 'function' ? columnConfig.render(scope) : columnConfig.render
  }
  if (columnConfig.propEnd) {
    return scope.row[(columnConfig as {prop: string}).prop] + ' - ' + scope.row[(columnConfig as {propEnd: string}).propEnd]
  }
  return scope.row[(columnConfig as {prop: string}).prop]
}

// 获取树所有叶子节点
export function getAllLeaf(data: any) {
  const result:any[] = []
  function getLeaf(data: any) {
    data.forEach((item: any) => {
      if (!item.children) {
        result.push(item)
      } else {
        getLeaf(item.children)
      }
    })
  }
  getLeaf(data)
  return result
}