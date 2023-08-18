import listDialog from '../../../src/components/BsDialog/BsListDialog/index'

listDialog.install = function(Vue: any) {
  Vue.component(listDialog.name, listDialog)
}

export default listDialog
export const BsListDialog = listDialog

export * from '../../../src/components/BsDialog/interface/index'