/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 11:48:21
 * @LastEditTime: 2023-07-03 15:20:37
 * @LastEditors: 陈宇环
 * @Description:
 */
import date from '../../../src/components/BsForm/components/BsDate';
date.install = function (Vue) {
    Vue.component(date.name, date);
};
export default date;
export const BsDate = date;
export * from '../../../src/components/BsForm/interface/index';
//# sourceMappingURL=index.js.map