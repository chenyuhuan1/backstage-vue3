import form from '../../../src/components/BsForm/index';
form.install = function (Vue) {
    Vue.component(form.name, form);
};
export default form;
export const BsForm = form;
export * from '../../../src/components/BsForm/interface/index';
//# sourceMappingURL=index.js.map