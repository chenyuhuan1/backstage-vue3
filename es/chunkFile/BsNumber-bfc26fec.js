import { defineComponent, createVNode, mergeProps } from 'vue';
import { s as styles } from './style.module-083148c8.js';
import { C as CustomDynamicComponent } from './CustomDynamicComponent-a59fbdbf.js';

var number = defineComponent({
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
    var _CustomDynamicCompone = new CustomDynamicComponent(),
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
      return createVNode("div", {
        "class": ['BsNumber', styles.width100, styles.BsNumber]
      }, [createVNode(dynamicNumber, mergeProps({
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

export { number as n };
//# sourceMappingURL=BsNumber-bfc26fec.js.map
