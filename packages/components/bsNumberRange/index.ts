import numberRange from '../../../src/components/BsForm/components/BsNumberRange'

numberRange.install = function(Vue: any) {
  Vue.component(numberRange.name, numberRange)
}

export default numberRange

export const BsNumberRange = numberRange

export * from '../../../src/components/BsForm/interface/index'