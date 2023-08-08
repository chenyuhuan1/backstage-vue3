'use strict';

var vue = require('vue');
var style_module = require('./style.module-01a7c605.js');
var CustomDynamicComponent = require('./CustomDynamicComponent-09411289.js');

var number = vue.defineComponent({
  name: 'BsNumber',
  props: {
    modelValue: {
      type: [String, Number],
      default: undefined
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
      dynamicNumber = _CustomDynamicCompone.dynamicNumber;
    function updateValue(value) {
      var _props$config$prop, _props$config;
      emit('update:modelValue', value);
      emit('change', {
        prop: (_props$config$prop = (_props$config = props.config) === null || _props$config === void 0 ? void 0 : _props$config.prop) !== null && _props$config$prop !== void 0 ? _props$config$prop : '',
        value: value
      });
    }
    return function () {
      var _props$config$label, _props$config2;
      return vue.createVNode("div", {
        "class": ['BsNumber', style_module.styles.width100, style_module.styles.BsNumber]
      }, [vue.createVNode(dynamicNumber, vue.mergeProps({
        "style": {
          width: '100%'
        },
        "class": {
          number: true,
          textLeft: props.config.controls !== true
        },
        "model-value": props.modelValue,
        "placeholder": props.config.placeholder || "\u8BF7\u8F93\u5165".concat((_props$config$label = (_props$config2 = props.config) === null || _props$config2 === void 0 ? void 0 : _props$config2.label) !== null && _props$config$label !== void 0 ? _props$config$label : ''),
        "disabled": !!props.config.disabled,
        "controls": props.config.controls === true
      }, props.config.nativeProps, {
        "onInput": updateValue
      }), null)]);
    };
  }
});

exports.number = number;
//# sourceMappingURL=BsNumber-4c748996.js.map
