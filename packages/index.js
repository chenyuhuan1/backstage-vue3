import BsForm from './components/bsForm';
import BsCascader from './components/bsCascader';
import BsCheckbox from './components/bsCheckbox';
import BsDate from './components/bsDate';
import BsDateRange from './components/bsDateRange';
import BsInput from './components/bsInput';
import BsNumber from './components/bsNumber';
import BsNumberRange from './components/bsNumberRange';
import BsRadio from './components/bsRadio';
import BsSelect from './components/bsSelect';
import BsSwitch from './components/bsSwitch';
import BsText from './components/bsText';
import BsTable from './components/bsTable';
import BsButtons from './components/bsButtons';
const components = [
    BsForm,
    BsCascader,
    BsCheckbox,
    BsDate,
    BsDateRange,
    BsInput,
    BsNumber,
    BsNumberRange,
    BsRadio,
    BsSelect,
    BsSwitch,
    BsText,
    BsTable,
    BsButtons,
]; // 组件集合
const install = function (Vue) {
    // 注册所有的组件
    components.forEach((item) => {
        Vue.component(item.name, item);
    });
};
// 如果是直接引入文件,就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export * from './components/bsForm';
export * from './components/bsCascader';
export * from './components/bsCheckbox';
export * from './components/bsDate';
export * from './components/bsDateRange';
export * from './components/bsInput';
export * from './components/bsNumber';
export * from './components/bsNumberRange';
export * from './components/bsRadio';
export * from './components/bsSelect';
export * from './components/bsSwitch';
export * from './components/bsText';
export * from './components/bsTable';
export * from './components/bsButtons';
export default install;
//# sourceMappingURL=index.js.map