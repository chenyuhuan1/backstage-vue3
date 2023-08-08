// import { defineAsyncComponent } from 'vue'
import { columnsBase } from '../interface/index'

import BsInput from './BsInput'
import BsPasswod from './BsPasswod'
import BsTextarea from './BsTextarea'
import BsNumber  from './BsNumber'
import BsSelect from './BsSelect'
import BsRadio from './BsRadio'
import BsCheckbox from './BsCheckbox'
import BsDate from './BsDate'
import BsDateRange from './BsDateRange'
import BsNumberRange from './BsNumberRange'
import BsCascader from './BsCascader'
import BsSwitch from './BsSwitch'
import BsText from './BsText'
import BsCollapse from './BsCollapse'

// 组件注册
export const getComponentByType = (item: columnsBase): any => {
  switch (item.type) {
    case 'input':
      return BsInput
    case 'textarea':
      return BsTextarea
    case 'password':
      return BsPasswod
    case 'number':
      return BsNumber
    case 'select':
      return BsSelect
    case 'radio':
      return BsRadio
    case 'checkbox':
      return BsCheckbox
    case 'year':
    case 'month':
    case 'week':
    case 'date':
    case 'datetime':
    case 'dates':
    case 'datetimerange':
    case 'daterange':
    case 'monthrange':
      return BsDate
    case 'yearRange':
    case 'monthRange':
    case 'dateRange':
    case 'weekRange':
    case 'datetimeRange':
      return BsDateRange
    case 'numberRange':
      return BsNumberRange
    case 'cascader':
      return BsCascader
    case 'switch':
      return BsSwitch
    case 'text':
      return BsText
    case 'collapse':
      return BsCollapse
    default:
      return BsInput
      // throw new Error('配置项控件${col.type}不存在')
  }
}
