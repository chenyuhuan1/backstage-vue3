import BaseForm from '../src/components/BaseForm/index'
import BaseInput from '../src/components/BaseForm/components/BaseInput'
import BaseNumber from '../src/components/BaseForm/components/BaseNumber'
import BaseSelect from '../src/components/BaseForm/components/BaseSelect'
import BaseRadio from '../src/components/BaseForm/components/BaseRadio'
import BaseCheckbox from '../src/components/BaseForm/components/BaseCheckbox'
import BaseDate from '../src/components/BaseForm/components/BaseDate'
import BaseDateRange from '../src/components/BaseForm/components/BaseDateRange'
import BaseNumberRange from '../src/components/BaseForm/components/BaseNumberRange'
import BaseCascader from '../src/components/BaseForm/components/BaseCascader'
import BaseSwitch from '../src/components/BaseForm/components/BaseSwitch'
import BaseText from '../src/components/BaseForm/components/BaseText'
import BaseTable from '../src/components/BaseTable/index'
const components = [BaseForm, BaseTable, BaseInput, BaseNumber, BaseSelect, BaseRadio, BaseCheckbox, BaseDate, BaseDateRange, BaseNumberRange, BaseCascader, BaseSwitch, BaseText] // 组件集合
// const components = [BaseForm, BaseInput] // 组件集合
const install = function(Vue) {
  // 注册所有的组件
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}
// 如果是直接引入文件,就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default { install } // 必须要有导出
export {
  BaseForm as CForm,
  BaseTable as CTable,
  BaseInput as CInput,
  BaseNumber as CNumber,
  BaseSelect as CSelect,
  BaseRadio as CRadio,
  BaseCheckbox as CCheckbox,
  BaseDate as CDate,
  BaseDateRange as CDateRange,
  BaseNumberRange as CNumberRange,
  BaseCascader as CCascader,
  BaseSwitch as CSwitch,
  BaseText as CText,
}
