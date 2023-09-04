import dialog from '../../../src/components/BsDialog/index'

dialog.install = function(Vue: any) {
  Vue.component(dialog.name, dialog)
}

export default dialog
export const BsDialog = dialog

export * from '../../../src/components/BsDialog/interface/index'