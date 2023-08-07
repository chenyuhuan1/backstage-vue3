import { _ as _asyncToGenerator, a as _regeneratorRuntime } from './asyncToGenerator-abb93505.js';
import { _ as _objectSpread2 } from './objectSpread2-76e04c95.js';
import { defineComponent, ref, watch, createVNode, mergeProps } from 'vue';
import { g as getDicByKey } from './common-4873e4eb.js';
import { s as styles } from './style.module-bc378eba.js';
import { C as CustomDynamicComponent } from './CustomDynamicComponent-410630ef.js';

var checkbox = defineComponent({
  name: 'BsCheckbox',
  props: {
    modelValue: {
      type: Array,
      default: function _default() {
        return [];
      }
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
            // 兼容改变
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
      emit('update:modelValue', value);
      emit('change', {
        prop: (_props$config$prop = (_props$config = props.config) === null || _props$config === void 0 ? void 0 : _props$config.prop) !== null && _props$config$prop !== void 0 ? _props$config$prop : '',
        value: value,
        options: options
      });
    }
    return function () {
      var _props$config$label, _props$config2;
      var dynamicComponent = new CustomDynamicComponent();
      var dynamicCheckBoxGroup = dynamicComponent.dynamicCheckBoxGroup,
        dynamicCheckBox = dynamicComponent.dynamicCheckBox,
        dynamicCheckBoxButton = dynamicComponent.dynamicCheckBoxButton;
      // dynamicCheckBoxButton 只有element-plus有这个组件
      var componentInstance = props.config.showType === 'button' && CustomDynamicComponent.language === CustomDynamicComponent.eleLanguage ? dynamicCheckBoxButton : dynamicCheckBox;
      return createVNode("div", {
        "class": ['BsCheckbox', styles.width100]
      }, [createVNode(dynamicCheckBoxGroup, mergeProps({
        "loading": optionsLoading.value,
        "class": "checkbox",
        "model-value": props.modelValue,
        "placeholder": props.config.placeholder || "\u8BF7\u9009\u62E9".concat((_props$config$label = (_props$config2 = props.config) === null || _props$config2 === void 0 ? void 0 : _props$config2.label) !== null && _props$config$label !== void 0 ? _props$config$label : ''),
        "disabled": !!props.config.disabled,
        "clearable": props.config.clearable !== false,
        "options": options.value /** 只有ant-design-vue使用该属性 */
      }, props.config.nativeProps, {
        "onChange": updateValue
      }), {
        default: function _default() {
          return [/** 只有element-plus使用以下逻辑 */
          CustomDynamicComponent.language === CustomDynamicComponent.eleLanguage && options.value && Array.isArray(options.value) && options.value.map(function (item, index) {
            return createVNode(componentInstance, mergeProps({
              "key": item.value + '_' + index,
              "label": item.value
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

export { checkbox as c };
//# sourceMappingURL=BsCheckbox-93bfa243.js.map
