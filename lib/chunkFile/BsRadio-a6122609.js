'use strict';

var asyncToGenerator = require('./asyncToGenerator-a8c58a95.js');
var objectSpread2 = require('./objectSpread2-4924fbca.js');
var vue = require('vue');
var common = require('./common-e4ea3cc2.js');
var style_module = require('./style.module-01a7c605.js');
var CustomDynamicComponent = require('./CustomDynamicComponent-09411289.js');

var radio = vue.defineComponent({
  name: 'BsRadio',
  props: {
    modelValue: {
      type: [Number, String, Boolean],
      default: undefined
    },
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  emits: ['update:modelValue', 'change', 'setProp2'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var _CustomDynamicCompone = new CustomDynamicComponent.CustomDynamicComponent(),
      dynamicRadio = _CustomDynamicCompone.dynamicRadio,
      dynamicRadioGroup = _CustomDynamicCompone.dynamicRadioGroup,
      dynamicRadioButton = _CustomDynamicCompone.dynamicRadioButton;
    var options = vue.ref([]);
    var optionsLoading = vue.ref(false);
    vue.watch(function () {
      return props.config.options;
    }, /*#__PURE__*/asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee() {
      var _options$value$map, _options$value;
      return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!Array.isArray(props.config.options)) {
              _context.next = 4;
              break;
            }
            // 传入对象数组
            options.value = props.config.options;
            _context.next = 14;
            break;
          case 4:
            if (!(Object.prototype.toString.call(props.config.options) === '[object Object]')) {
              _context.next = 14;
              break;
            }
            if (!(props.config.options.type === 'api')) {
              _context.next = 13;
              break;
            }
            optionsLoading.value = true;
            _context.next = 9;
            return props.config.options.getData();
          case 9:
            options.value = _context.sent;
            optionsLoading.value = false;
            _context.next = 14;
            break;
          case 13:
            if (props.config.options.type === 'dic') {
              options.value = common.getDicByKey(props.config.options.key);
            }
          case 14:
            options.value = (_options$value$map = options === null || options === void 0 || (_options$value = options.value) === null || _options$value === void 0 ? void 0 : _options$value.map(function (v) {
              return objectSpread2._objectSpread2(objectSpread2._objectSpread2({}, v), {}, {
                label: v[props.config.labelKey || 'label'],
                value: v[props.config.valueKey || 'value']
              });
            })) !== null && _options$value$map !== void 0 ? _options$value$map : [];
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })), {
      immediate: true,
      deep: true
    });
    function updateValue(value) {
      var _props$config$prop, _props$config;
      var cloneValue = value;
      // ant-Design-vue change返回的是 e:Event 对象
      if (CustomDynamicComponent.CustomDynamicComponent.language === CustomDynamicComponent.CustomDynamicComponent.antLanguage) {
        cloneValue = value.target.value;
      }
      emit('update:modelValue', cloneValue);
      emit('change', {
        prop: (_props$config$prop = (_props$config = props.config) === null || _props$config === void 0 ? void 0 : _props$config.prop) !== null && _props$config$prop !== void 0 ? _props$config$prop : '',
        value: cloneValue,
        options: options
      });
    }
    return function () {
      var componentInstance = props.config.showType === 'button' && CustomDynamicComponent.CustomDynamicComponent.language === CustomDynamicComponent.CustomDynamicComponent.eleLanguage ? dynamicRadioButton : dynamicRadio;
      return vue.createVNode("div", {
        "class": ['BsRadio', style_module.styles.width100]
      }, [vue.createVNode(dynamicRadioGroup, vue.mergeProps({
        "loading": optionsLoading.value,
        "class": "radio",
        "model-value": props.modelValue,
        "value": props.modelValue,
        "disabled": !!props.config.disabled
      }, props.config.nativeProps, {
        "onChange": updateValue
      }), {
        default: function _default() {
          return [options.value && Array.isArray(options.value) && options.value.map(function (item, index) {
            return vue.createVNode(componentInstance, vue.mergeProps({
              "key": item.value + '_' + index,
              "label": item.value,
              "value": item.value
            }, props.config.nativeProps), objectSpread2._objectSpread2({
              default: function _default() {
                return [item.label];
              }
            }, props.config.format ? {
              default: function _default() {
                return props.config.format(item);
              }
            } : {}));
          })];
        }
      })]);
    };
  }
});

exports.radio = radio;
//# sourceMappingURL=BsRadio-a6122609.js.map
