/*
 * @Author: 陈宇环
 * @Date: 2023-06-05 15:12:47
 * @LastEditTime: 2023-08-15 19:14:34
 * @LastEditors: 陈宇环
 * @Description:
 */
window.uiLanguage = 'ant'
// 自定义动态组件
export class CustomDynamicComponent {
  // 定义this属性的类型
  [x: string]: JSX.Element | ((type: string) => JSX.Element)
  // 默认element-plus样式，在window下面进行注册
  static language = window.uiLanguage || 'ele'
  // element-plus对比基准
  static eleLanguage = 'ele'
  // ant-design-vue对比基准
  static antLanguage = 'ant'
  // 多种ui定义字典值
  static dicts: {
    [x in 'ele' | 'ant']: () => {
      [x in string]: JSX.Element
    }
  } = {
    ant: () => {
      return {
        row: <a-row/>,
        col: <a-col/>,
        form: <a-form/>,
        formItem: <a-form-item/>,
        button: <a-button/>,
        table: <a-table/>,
        tableColumn: <a-table-column/>,
        radio: <a-radio/>,
        pagination: <a-pagination/>,
        input: <a-input/>,
        password: <a-input-password/>,
        textarea: <a-textarea/>,
        number: <a-input-number/>,
        radioGroup: <a-radio-group/>,
        radioButton: <a-radio-button/>,
        select: <a-select/>,
        selectOption: <a-select-option/>,
        switch: <a-switch/>,
        cascader: <a-cascader/>,
        checkBox: <a-checkbox/>,
        checkBoxGroup: <a-checkbox-group/>,
        datePicker: <a-date-picker/>,
        rangePicker: <a-range-picker/>,
        checkBoxButton: <div/>,
        popconfirm: <a-popconfirm/>,
        collapse: <a-collapse/>,
        collapseItem: <a-collapse-panel/>,
      }
    },
    ele: () => {
      return {
        row: <el-row />,
        col: <el-col />,
        form: <el-form />,
        formItem: <el-form-item />,
        button: <el-button />,
        table: <el-table />,
        tableColumn: <el-table-column />,
        radio: <el-radio />,
        pagination: <el-pagination />,
        input: <el-input />,
        password: <el-input />,
        textarea: <el-input />,
        number: <el-input-number />,
        radioGroup: <el-radio-group />,
        radioButton: <el-radio-button />,
        select: <el-select />,
        selectOption: <el-option />,
        switch: <el-switch />,
        cascader: <el-cascader />,
        checkBox: <el-checkbox />,
        checkBoxGroup: <el-checkbox-group />,
        datePicker: <el-date-picker />,
        rangePicker: <el-date-picker />,
        checkBoxButton: <el-checkbox-button />,
        popconfirm: <el-popconfirm/>,
        collapse: <el-collapse/>,
        collapseItem: <el-collapse-item/>,
      }
    },
  }
  constructor() {
    // 首字母大写函数
    function ucFirst(str:string):string {
      const str1 = str[0].toUpperCase() + str.slice(1)
      return str1
    }
    const map = CustomDynamicComponent.dicts[window?.uiLanguage ?? 'ele']()
    for (const key in map) {
      this['dynamic' + ucFirst(key)] = map[key]
    }
  }
  // 获取动态组件函数
  getComponent(type: string): JSX.Element {
    const methodMap = CustomDynamicComponent.dicts[window?.uiLanguage ?? 'ele']
    // 判断是否有ui主题组件库
    if (methodMap) {
      // 判断是否有定义的组件类型，没有返回div
      return methodMap()[type] || <div />
    }
    return <div />
  }
}
