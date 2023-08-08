import { defineComponent, createVNode, mergeProps } from 'vue';
import { s as styles } from './style.module-bc378eba.js';
import { C as CustomDynamicComponent } from './CustomDynamicComponent-410630ef.js';

var input = defineComponent({
  name: 'BsInput',
  props: {
    modelValue: {
      type: [String, Number],
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
      dynamicInput = _CustomDynamicCompone.dynamicInput;
    function updateValue(value) {
      var _props$config$prop, _props$config;
      var cloneValue = value;
      // ant-Design-vue 无input事件，value获取到的是原生input事件的e
      if (CustomDynamicComponent.language === CustomDynamicComponent.antLanguage) {
        cloneValue = value.target.value;
      }
      emit('update:modelValue', cloneValue);
      emit('change', {
        prop: (_props$config$prop = (_props$config = props.config) === null || _props$config === void 0 ? void 0 : _props$config.prop) !== null && _props$config$prop !== void 0 ? _props$config$prop : '',
        value: cloneValue
      });
    }
    return function () {
      var _props$config$label, _props$config2, _props$config$allowCl;
      return createVNode("div", {
        "class": ['BsInput', styles.width100]
      }, [createVNode(dynamicInput, mergeProps({
        "class": "input",
        "type": "text",
        "model-value": props.modelValue,
        "placeholder": props.config.placeholder || "\u8BF7\u8F93\u5165".concat((_props$config$label = (_props$config2 = props.config) === null || _props$config2 === void 0 ? void 0 : _props$config2.label) !== null && _props$config$label !== void 0 ? _props$config$label : ''),
        "disabled": !!props.config.disabled,
        "clearable": props.config.clearable !== false,
        "allowClear": (_props$config$allowCl = props.config.allowClear) !== null && _props$config$allowCl !== void 0 ? _props$config$allowCl : props.config.clearable !== false
      }, props.config.nativeProps, {
        "onInput": updateValue
      }), null)]);
    };
  }
});

export { input as i };
//# sourceMappingURL=BsInput-14f8f718.js.map
