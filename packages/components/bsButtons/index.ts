import button from '../../../src/components/BsButtons/index'

button.install = function(Vue: any) {
  Vue.component(button.name, button)
}

export default button
export const BsButtons = button

export * from '../../../src/components/BsButtons/interface/index'