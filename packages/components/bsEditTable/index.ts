import editTable from '../../../src/components/BsEditTable/index'

editTable.install = function(Vue: any) {
  Vue.component(editTable.name, editTable)
}

export default editTable
export const BsEditTable = editTable

export * from '../../../src/components/BsEditTable/interface/index'