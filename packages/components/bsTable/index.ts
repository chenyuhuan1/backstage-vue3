import table from '../../../src/components/BsTable/index'

table.install = function(Vue: any) {
  Vue.component(table.name, BsTable)
}

export default table
export const BsTable = table

export * from '../../../src/components/BsTable/interface/index'