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
import { c as cascader } from '../chunkFile/BsCascader-b88b52e5.js';
import { c as checkbox } from '../chunkFile/BsCheckbox-93bfa243.js';
import { d as date } from '../chunkFile/BsDate-81fa3588.js';
import { d as dateRange } from '../chunkFile/BsDateRange-96efffc0.js';
import { i as input } from '../chunkFile/BsInput-14f8f718.js';
import { n as number } from '../chunkFile/BsNumber-edeabb48.js';
import { n as numberRange } from '../chunkFile/BsNumberRange-dc8448b6.js';
import { r as radio } from '../chunkFile/BsRadio-dc8c00d9.js';
import { s as select } from '../chunkFile/BsSelect-1c9d9522.js';
import { s as switchC } from '../chunkFile/BsSwitch-1d57aec2.js';
import { t as text } from '../chunkFile/BsText-605d2b81.js';
import '../chunkFile/toConsumableArray-95b61748.js';
import '../chunkFile/asyncToGenerator-abb93505.js';
import '../chunkFile/CustomDynamicComponent-410630ef.js';
import 'vue';
import '../chunkFile/objectSpread2-76e04c95.js';
import '../chunkFile/style.module-bc378eba.js';
import '../chunkFile/common-4873e4eb.js';
import '../chunkFile/dayjs.min-6f78bd45.js';

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
