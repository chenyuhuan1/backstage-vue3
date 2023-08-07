import { defineComponent, createVNode, mergeProps } from 'vue';
import { s as styles } from './style.module-bc378eba.js';
import { C as CustomDynamicComponent } from './CustomDynamicComponent-410630ef.js';

var switchC = defineComponent({
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
    var _CustomDynamicCompone = new CustomDynamicComponent(),
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
      return createVNode("div", {
        "class": ['BsSwitch', styles.width100]
      }, [createVNode(dynamicSwitch, mergeProps({
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

export { switchC as s };
//# sourceMappingURL=BsSwitch-1d57aec2.js.map
