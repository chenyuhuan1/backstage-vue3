import { _ as _asyncToGenerator, a as _regeneratorRuntime } from './asyncToGenerator-abb93505.js';
import { _ as _objectSpread2 } from './objectSpread2-76e04c95.js';
import { defineComponent, ref, watch, createVNode, mergeProps } from 'vue';
import { g as getDicByKey } from './common-4873e4eb.js';
import { s as styles } from './style.module-bc378eba.js';
import { C as CustomDynamicComponent } from './CustomDynamicComponent-410630ef.js';

var radio = defineComponent({
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
    var _CustomDynamicCompone = new CustomDynamicComponent(),
      dynamicRadio = _CustomDynamicCompone.dynamicRadio,
      dynamicRadioGroup = _CustomDynamicCompone.dynamicRadioGroup,
      dynamicRadioButton = _CustomDynamicCompone.dynamicRadioButton;
    var options = ref([]);
    var optionsLoading = ref(false);
    watch(function () {
      return props.config.options;
    }, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _options$value$map, _options$value;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
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
              options.value = getDicByKey(props.config.options.key);
            }
          case 14:
            options.value = (_options$value$map = options === null || options === void 0 || (_options$value = options.value) === null || _options$value === void 0 ? void 0 : _options$value.map(function (v) {
              return _objectSpread2(_objectSpread2({}, v), {}, {
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
      if (CustomDynamicComponent.language === CustomDynamicComponent.antLanguage) {
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
      var componentInstance = props.config.showType === 'button' && CustomDynamicComponent.language === CustomDynamicComponent.eleLanguage ? dynamicRadioButton : dynamicRadio;
      return createVNode("div", {
        "class": ['BsRadio', styles.width100]
      }, [createVNode(dynamicRadioGroup, mergeProps({
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
            return createVNode(componentInstance, mergeProps({
              "key": item.value + '_' + index,
              "label": item.value,
              "value": item.value
            }, props.config.nativeProps), _objectSpread2({
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

export { radio as r };
//# sourceMappingURL=BsRadio-dc8c00d9.js.map
