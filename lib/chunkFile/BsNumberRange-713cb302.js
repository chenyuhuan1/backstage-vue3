'use strict';

var vue = require('vue');
var style_module = require('./style.module-01a7c605.js');
var CustomDynamicComponent = require('./CustomDynamicComponent-09411289.js');

var numberRange = vue.defineComponent({
  name: 'BsNumberRange',
  props: {
    modelValue: {
      type: [String, Number],
      default: undefined
    },
    propEnd: {
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
  emits: ['update:modelValue', 'update:propEnd', 'change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var _CustomDynamicCompone = new CustomDynamicComponent.CustomDynamicComponent(),
      dynamicNumber = _CustomDynamicCompone.dynamicNumber;
    var cloneModelValue = vue.ref('');
    vue.watch(function () {
      return props.modelValue;
    }, function () {
      cloneModelValue.value = props.modelValue;
    }, {
      immediate: true
    });
    function updateValue(value) {
      var _props$config$prop, _props$config;
      emit('update:modelValue', value);
      emit('change', {
        type: 'start',
        prop: (_props$config$prop = (_props$config = props.config) === null || _props$config === void 0 ? void 0 : _props$config.prop) !== null && _props$config$prop !== void 0 ? _props$config$prop : '',
        value: value
      });
    }
    var clonePropEnd = vue.ref('');
    vue.watch(function () {
      return props.propEnd;
    }, function () {
      clonePropEnd.value = props.propEnd;
    }, {
      immediate: true
    });
    function updateEndValue(value) {
      var _props$config$propEnd, _props$config2;
      emit('update:propEnd', value);
      emit('change', {
        type: 'end',
        prop: (_props$config$propEnd = (_props$config2 = props.config) === null || _props$config2 === void 0 ? void 0 : _props$config2.propEnd) !== null && _props$config$propEnd !== void 0 ? _props$config$propEnd : '',
        value: value
      });
    }
    return function () {
      var _props$config$label, _props$config3, _props$config$label2, _props$config4;
      // ant-design-vue formitem只允许一个form控件
      var formItem = CustomDynamicComponent.CustomDynamicComponent.language === CustomDynamicComponent.CustomDynamicComponent.antLanguage ? vue.createVNode(vue.resolveComponent("a-form-item"), null, null) : vue.createVNode("template", null, null);
      return vue.createVNode("div", {
        "class": ['BsNumberRange', style_module.styles.width100, style_module.styles.BsNumberRange]
      }, [vue.createVNode(dynamicNumber, vue.mergeProps({
        "style": {
          flex: 1
        },
        "modelValue": cloneModelValue.value,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return cloneModelValue.value = $event;
        },
        "class": ['inputNumber', props.config.controls !== true ? style_module.styles.noControls : null],
        "placeholder": props.config.placeholderStart || props.config.placeholder || "\u8BF7\u9009\u62E9".concat((_props$config$label = (_props$config3 = props.config) === null || _props$config3 === void 0 ? void 0 : _props$config3.label) !== null && _props$config$label !== void 0 ? _props$config$label : ''),
        "disabled": !!props.config.disabled,
        "controls": props.config.controls === true
      }, props.config.nativeProps, {
        "onInput": updateValue
      }), null), vue.createVNode("span", {
        "style": "padding: 0 5px;"
      }, [vue.createTextVNode("~")]), vue.createVNode(formItem, {
        "style": "margin: 0;flex: 1;display: flex;"
      }, {
        default: function _default() {
          return [vue.createVNode(dynamicNumber, vue.mergeProps({
            "style": {
              flex: 1
            },
            "modelValue": clonePropEnd.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return clonePropEnd.value = $event;
            },
            "class": ['inputNumber', props.config.controls !== true ? style_module.styles.noControls : null],
            "placeholder": props.config.placeholderEnd || props.config.placeholder || "\u8BF7\u9009\u62E9".concat((_props$config$label2 = (_props$config4 = props.config) === null || _props$config4 === void 0 ? void 0 : _props$config4.label) !== null && _props$config$label2 !== void 0 ? _props$config$label2 : ''),
            "disabled": !!props.config.disabled,
            "controls": props.config.controls === true
          }, props.config.nativeProps, {
            "onInput": updateEndValue
          }), null)];
        }
      })]);
    };
  }
});

exports.numberRange = numberRange;
//# sourceMappingURL=BsNumberRange-713cb302.js.map
