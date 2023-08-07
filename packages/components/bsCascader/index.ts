/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 11:48:21
 * @LastEditTime: 2023-07-03 15:16:48
 * @LastEditors: 陈宇环
 * @Description:
 */
import cascader from '../../../src/components/BsForm/components/BsCascader'

cascader.install = function(Vue: any) {
  Vue.component(cascader.name, cascader)
}

export default cascader


export const BsCascader = cascader

export * from '../../../src/components/BsForm/interface/index'