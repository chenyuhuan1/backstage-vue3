import collapse from '../../../src/components/BsForm/components/BsCollapse'

collapse.install = function(Vue: any) {
  Vue.component(collapse.name, collapse)
}

export default collapse

export const BsCollapse = collapse

export * from '../../../src/components/BsForm/interface/index'
