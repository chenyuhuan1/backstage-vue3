import text from '../../../src/components/BsForm/components/BsText'

text.install = function(Vue: any) {
  Vue.component(text.name, text)
}

export default text

export const BsText = text

export * from '../../../src/components/BsForm/interface/index'