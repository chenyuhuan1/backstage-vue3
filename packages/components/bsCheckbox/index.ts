/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 11:48:21
 * @LastEditTime: 2023-07-03 15:18:10
 * @LastEditors: 陈宇环
 * @Description:
 */
import checkbox from '../../../src/components/BsForm/components/BsCheckbox'

checkbox.install = function(Vue: any) {
  Vue.component(checkbox.name, checkbox)
}

export default checkbox


export const BsCheckbox = checkbox

export * from '../../../src/components/BsForm/interface/index'