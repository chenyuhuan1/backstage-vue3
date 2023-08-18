import formDialog from '../../../src/components/BsDialog/BsFormDialog/index'

formDialog.install = function(Vue: any) {
  Vue.component(formDialog.name, formDialog)
}

export default formDialog
export const BsFormDialog = formDialog

export * from '../../../src/components/BsDialog/interface/index'