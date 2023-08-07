import { d as date } from '../chunkFile/BsDate-81fa3588.js';
import 'vue';
import '../chunkFile/style.module-bc378eba.js';
import '../chunkFile/CustomDynamicComponent-410630ef.js';
import '../chunkFile/dayjs.min-6f78bd45.js';

/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 11:48:21
 * @LastEditTime: 2023-07-03 15:20:37
 * @LastEditors: 陈宇环
 * @Description:
 */
date.install = function (Vue) {
  Vue.component(date.name, date);
};
var BsDate = date;

export { BsDate, date as default };
//# sourceMappingURL=index.js.map
