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
var BsCascader = require('../chunkFile/BsCascader-9e57b6a6.js');
var BsCheckbox = require('../chunkFile/BsCheckbox-7417c020.js');
var BsDate = require('../chunkFile/BsDate-337b67ab.js');
var BsDateRange = require('../chunkFile/BsDateRange-537db925.js');
var BsInput = require('../chunkFile/BsInput-1ce56cd4.js');
var BsNumber = require('../chunkFile/BsNumber-502c11be.js');
var BsNumberRange = require('../chunkFile/BsNumberRange-13661ab7.js');
var BsRadio = require('../chunkFile/BsRadio-7c72487b.js');
var BsSelect = require('../chunkFile/BsSelect-8ae0d5ec.js');
var BsSwitch = require('../chunkFile/BsSwitch-95eb4729.js');
var BsText = require('../chunkFile/BsText-1a4973cb.js');
require('../chunkFile/toConsumableArray-5cac386d.js');
require('../chunkFile/asyncToGenerator-12caf45d.js');
require('../chunkFile/CustomDynamicComponent-2e7e5e9c.js');
require('vue');
require('../chunkFile/objectSpread2-6fc8a74b.js');
require('../chunkFile/style.module-b12fb025.js');
require('../chunkFile/common-922ca092.js');
require('../chunkFile/dayjs.min-74574aa8.js');

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
