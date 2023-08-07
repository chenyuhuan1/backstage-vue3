'use strict';

var vue = require('vue');
var style_module = require('./style.module-b12fb025.js');
var CustomDynamicComponent = require('./CustomDynamicComponent-2e7e5e9c.js');

var switchC = vue.defineComponent({
  name: 'BsSwitch',
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: ''
    },
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  emits: ['update:modelValue', 'change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var _CustomDynamicCompone = new CustomDynamicComponent.CustomDynamicComponent(),
      dynamicSwitch = _CustomDynamicCompone.dynamicSwitch;
    function updateValue(value) {
      var _props$config$prop, _props$config;
      emit('update:modelValue', value);
      emit('change', {
        prop: (_props$config$prop = (_props$config = props.config) === null || _props$config === void 0 ? void 0 : _props$config.prop) !== null && _props$config$prop !== void 0 ? _props$config$prop : '',
        value: value
      });
    }
    return function () {
      return vue.createVNode("div", {
        "class": ['BsSwitch', style_module.styles.width100]
      }, [vue.createVNode(dynamicSwitch, vue.mergeProps({
        "class": "switch",
        "model-value": props.modelValue,
        "checked": props.modelValue,
        "disabled": !!props.config.disabled,
        "clearable": props.config.clearable !== false
      }, props.config.nativeProps, {
        "onChange": updateValue
      }), null)]);
    };
  }
});

exports.switchC = switchC;
//# sourceMappingURL=BsSwitch-95eb4729.js.map
