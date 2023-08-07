import input from '../../../src/components/BsForm/components/BsInput'

input.install = function(Vue: any) {
  Vue.component(input.name, input)
}

export default input

export const BsInput = input

export * from '../../../src/components/BsForm/interface/index'