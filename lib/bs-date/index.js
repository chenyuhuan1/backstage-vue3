'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var BsDate$1 = require('../chunkFile/BsDate-cb6b1122.js');
require('vue');
require('../chunkFile/style.module-01a7c605.js');
require('../chunkFile/CustomDynamicComponent-09411289.js');
require('../chunkFile/dayjs.min-cc7c1144.js');

/*
 * @Author: 陈宇环
 * @Date: 2023-05-26 11:48:21
 * @LastEditTime: 2023-07-03 15:20:37
 * @LastEditors: 陈宇环
 * @Description:
 */
BsDate$1.date.install = function (Vue) {
  Vue.component(BsDate$1.date.name, BsDate$1.date);
};
var BsDate = BsDate$1.date;

exports.default = BsDate$1.date;
exports.BsDate = BsDate;
//# sourceMappingURL=index.js.map
