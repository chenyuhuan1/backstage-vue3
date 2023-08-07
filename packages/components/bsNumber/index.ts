import number from '../../../src/components/BsForm/components/BsNumber'

number.install = function(Vue: any) {
  Vue.component(number.name, number)
}

export default number

export const BsNumber = number

export * from '../../../src/components/BsForm/interface/index'