import { d as date } from '../chunkFile/BsDate-d57f44a8.js';
import 'vue';
import '../chunkFile/style.module-083148c8.js';
import '../chunkFile/CustomDynamicComponent-a59fbdbf.js';
import '../chunkFile/dayjs.min-d3ad2899.js';

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
