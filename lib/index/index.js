'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bsForm = require('../bs-form/index.js');
var bsCascader = require('../bs-cascader/index.js');
var bsCheckbox = require('../bs-checkbox/index.js');
var bsDate = require('../bs-date/index.js');
var bsDateRange = require('../bs-date-range/index.js');
var bsInput = require('../bs-input/index.js');
var bsNumber = require('../bs-number/index.js');
var bsNumberRange = require('../bs-number-range/index.js');
var bsRadio = require('../bs-radio/index.js');
var bsSelect = require('../bs-select/index.js');
var bsSwitch = require('../bs-switch/index.js');
var bsText = require('../bs-text/index.js');
var bsTable = require('../bs-table/index.js');
var bsButtons = require('../bs-buttons/index.js');
var BsCascader = require('../chunkFile/BsCascader-6d4fb65c.js');
var BsCheckbox = require('../chunkFile/BsCheckbox-4700112c.js');
var BsDate = require('../chunkFile/BsDate-cb6b1122.js');
var BsDateRange = require('../chunkFile/BsDateRange-012f2031.js');
var BsInput = require('../chunkFile/BsInput-372dc0a7.js');
var BsNumber = require('../chunkFile/BsNumber-4c748996.js');
var BsNumberRange = require('../chunkFile/BsNumberRange-713cb302.js');
var BsRadio = require('../chunkFile/BsRadio-a6122609.js');
var BsSelect = require('../chunkFile/BsSelect-390069ec.js');
var BsSwitch = require('../chunkFile/BsSwitch-08520d4e.js');
var BsText = require('../chunkFile/BsText-2ea14b97.js');
require('../chunkFile/toConsumableArray-732121ab.js');
require('../chunkFile/asyncToGenerator-a8c58a95.js');
require('../chunkFile/CustomDynamicComponent-09411289.js');
require('vue');
require('../chunkFile/objectSpread2-4924fbca.js');
require('../chunkFile/style.module-01a7c605.js');
require('../chunkFile/common-e4ea3cc2.js');
require('../chunkFile/dayjs.min-cc7c1144.js');

var components = [bsForm.default, BsCascader.cascader, BsCheckbox.checkbox, BsDate.date, BsDateRange.dateRange, BsInput.input, BsNumber.number, BsNumberRange.numberRange, BsRadio.radio, BsSelect.select, BsSwitch.switchC, BsText.text, bsTable.default, bsButtons.default]; // 组件集合
var install = function install(Vue) {
  // 注册所有的组件
  components.forEach(function (item) {
    Vue.component(item.name, item);
  });
};
// 如果是直接引入文件,就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

exports.BsForm = bsForm.BsForm;
exports.BsCascader = bsCascader.BsCascader;
exports.BsCheckbox = bsCheckbox.BsCheckbox;
exports.BsDate = bsDate.BsDate;
exports.BsDateRange = bsDateRange.BsDateRange;
exports.BsInput = bsInput.BsInput;
exports.BsNumber = bsNumber.BsNumber;
exports.BsNumberRange = bsNumberRange.BsNumberRange;
exports.BsRadio = bsRadio.BsRadio;
exports.BsSelect = bsSelect.BsSelect;
exports.BsSwitch = bsSwitch.BsSwitch;
exports.BsText = bsText.BsText;
exports.BsTable = bsTable.BsTable;
exports.BsButtons = bsButtons.BsButtons;
exports.default = install;
//# sourceMappingURL=index.js.map
