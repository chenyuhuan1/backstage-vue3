import form from '../bs-form/index.js';
export { BsForm } from '../bs-form/index.js';
export { BsCascader } from '../bs-cascader/index.js';
export { BsCheckbox } from '../bs-checkbox/index.js';
export { BsDate } from '../bs-date/index.js';
export { BsDateRange } from '../bs-date-range/index.js';
export { BsInput } from '../bs-input/index.js';
export { BsNumber } from '../bs-number/index.js';
export { BsNumberRange } from '../bs-number-range/index.js';
export { BsRadio } from '../bs-radio/index.js';
export { BsSelect } from '../bs-select/index.js';
export { BsSwitch } from '../bs-switch/index.js';
export { BsText } from '../bs-text/index.js';
import table from '../bs-table/index.js';
export { BsTable } from '../bs-table/index.js';
import button from '../bs-buttons/index.js';
export { BsButtons } from '../bs-buttons/index.js';
import { c as cascader } from '../chunkFile/BsCascader-1e7d1ad5.js';
import { c as checkbox } from '../chunkFile/BsCheckbox-4d60dc42.js';
import { d as date } from '../chunkFile/BsDate-d57f44a8.js';
import { d as dateRange } from '../chunkFile/BsDateRange-986aa6cc.js';
import { i as input } from '../chunkFile/BsInput-58958c3d.js';
import { n as number } from '../chunkFile/BsNumber-bfc26fec.js';
import { n as numberRange } from '../chunkFile/BsNumberRange-acbb679a.js';
import { r as radio } from '../chunkFile/BsRadio-c1c5edd4.js';
import { s as select } from '../chunkFile/BsSelect-ecc534a2.js';
import { s as switchC } from '../chunkFile/BsSwitch-85eab238.js';
import { t as text } from '../chunkFile/BsText-1fecfb46.js';
import '../chunkFile/toConsumableArray-7dac271c.js';
import '../chunkFile/asyncToGenerator-f5c1778f.js';
import '../chunkFile/CustomDynamicComponent-a59fbdbf.js';
import 'vue';
import '../chunkFile/objectSpread2-7fc5c147.js';
import '../chunkFile/style.module-083148c8.js';
import '../chunkFile/common-4d9f9337.js';
import '../chunkFile/dayjs.min-d3ad2899.js';

var components = [form, cascader, checkbox, date, dateRange, input, number, numberRange, radio, select, switchC, text, table, button]; // 组件集合
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

export { install as default };
//# sourceMappingURL=index.js.map
