import switchC from '../../../src/components/BsForm/components/BsSwitch'

switchC.install = function(Vue: any) {
  Vue.component(switchC.name, switchC)
}

export default switchC

export const BsSwitch = switchC

export * from '../../../src/components/BsForm/interface/index'