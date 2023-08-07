/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 11:48:21
 * @LastEditTime: 2023-07-03 15:21:28
 * @LastEditors: 陈宇环
 * @Description:
 */
import dateRange from '../../../src/components/BsForm/components/BsDateRange';
dateRange.install = function (Vue) {
    Vue.component(dateRange.name, dateRange);
};
export default dateRange;
export const BsDateRange = dateRange;
export * from '../../../src/components/BsForm/interface/index';
//# sourceMappingURL=index.js.map