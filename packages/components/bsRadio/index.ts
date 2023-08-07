import radio from '../../../src/components/BsForm/components/BsRadio'

radio.install = function(Vue: any) {
  Vue.component(radio.name, radio)
}

export default radio

export const BsRadio = radio

export * from '../../../src/components/BsForm/interface/index'