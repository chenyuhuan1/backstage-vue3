import select from '../../../src/components/BsForm/components/BsSelect'

select.install = function(Vue: any) {
  Vue.component(select.name, select)
}

export default select

export const BsSelect = select

export * from '../../../src/components/BsForm/interface/index'