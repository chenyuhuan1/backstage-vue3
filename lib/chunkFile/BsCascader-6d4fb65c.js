'use strict';

var asyncToGenerator = require('./asyncToGenerator-a8c58a95.js');
var vue = require('vue');
var common = require('./common-e4ea3cc2.js');
var style_module = require('./style.module-01a7c605.js');
var CustomDynamicComponent = require('./CustomDynamicComponent-09411289.js');

var cascader = vue.defineComponent({
  name: 'BsCascader',
  props: {
    modelValue: {
      type: [Number, String, Array, Object, Boolean],
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
    var options = vue.ref([]);
    var optionsLoading = vue.ref(false);
    vue.watch(function () {
      return props.config.options;
    }, /*#__PURE__*/asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee() {
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
          case "end":
            return _context.stop();
        }
      }, _callee);
    })), {
      immediate: true,
      deep: true
    });
    /**
     * @description: 获取选中得item
     * @param {*} value 当前选择中得value
     * @return any 选中得item
     */
    var getOption = function getOption(value) {
      var curItem;
      common.treeForeach(options.value, function (node) {
        var _props$config$valueKe, _props$config;
        if (node[(_props$config$valueKe = props === null || props === void 0 || (_props$config = props.config) === null || _props$config === void 0 ? void 0 : _props$config.valueKey) !== null && _props$config$valueKe !== void 0 ? _props$config$valueKe : 'value'] === value) {
          curItem = node;
        }
      });
      return curItem;
    };
    var handleChange = function handleChange(value) {
      var _props$config$prop, _props$config2;
      emit('update:modelValue', value);
      emit('change', {
        prop: (_props$config$prop = (_props$config2 = props.config) === null || _props$config2 === void 0 ? void 0 : _props$config2.prop) !== null && _props$config$prop !== void 0 ? _props$config$prop : '',
        value: value,
        options: options.value,
        curItem: getOption(value)
      });
    };
    return function () {
      var _props$config$allowCl, _props$config$showSea, _props$config$fieldNa, _props$config$labelKe, _props$config$valueKe2, _props$config$childre, _props$config$labelKe2, _props$config$valueKe3, _props$config$childre2, _props$config3;
      var dynamicComponent = new CustomDynamicComponent.CustomDynamicComponent();
      var dynamicCascader = dynamicComponent.dynamicCascader;
      return vue.createVNode("div", {
        "class": ['BsCascader', style_module.styles.width100]
      }, [vue.createVNode(dynamicCascader, vue.mergeProps({
        "class": [style_module.styles.width100],
        "model-value": props.modelValue,
        "options": options.value,
        "clearable": props.config.clearable !== false,
        "allowClear": (_props$config$allowCl = props.config.allowClear) !== null && _props$config$allowCl !== void 0 ? _props$config$allowCl : props.config.clearable !== false,
        "filterable": props.config.filterable !== false,
        "showSearch": (_props$config$showSea = props.config.showSearch) !== null && _props$config$showSea !== void 0 ? _props$config$showSea : props.config.filterable !== false,
        "multiple": props.config.multiple === true,
        "fieldNames": (_props$config$fieldNa = props.config.fieldNames) !== null && _props$config$fieldNa !== void 0 ? _props$config$fieldNa : {
          label: (_props$config$labelKe = props.config.labelKey) !== null && _props$config$labelKe !== void 0 ? _props$config$labelKe : 'label',
          value: (_props$config$valueKe2 = props.config.valueKey) !== null && _props$config$valueKe2 !== void 0 ? _props$config$valueKe2 : 'value',
          children: (_props$config$childre = props.config.childrenKey) !== null && _props$config$childre !== void 0 ? _props$config$childre : 'children'
        },
        "props": Object.assign({
          emitPath: props.config.emitPath === true,
          label: (_props$config$labelKe2 = props.config.labelKey) !== null && _props$config$labelKe2 !== void 0 ? _props$config$labelKe2 : 'label',
          value: (_props$config$valueKe3 = props.config.valueKey) !== null && _props$config$valueKe3 !== void 0 ? _props$config$valueKe3 : 'value',
          children: (_props$config$childre2 = props.config.childrenKey) !== null && _props$config$childre2 !== void 0 ? _props$config$childre2 : 'children',
          multiple: props.config.multiple === true
        }, (_props$config3 = props.config) === null || _props$config3 === void 0 || (_props$config3 = _props$config3.nativeProps) === null || _props$config3 === void 0 ? void 0 : _props$config3.props),
        "show-all-levels": props.config.showAllLevels !== false,
        "collapse-tags": props.config.collapseTags !== false,
        "collapse-tags-tooltip": typeof props.config.collapseTagsTooltip !== 'undefined' ? props.config.collapseTagsTooltip : props.config.collapseTags
      }, props.config.nativeProps, {
        "onChange": handleChange
      }), props.config.format ? {
        default: function _default(_ref3) {
          var node = _ref3.node,
            data = _ref3.data;
          return props.config.format(node, data);
        }
      } : {})]);
    };
  }
});

exports.cascader = cascader;
//# sourceMappingURL=BsCascader-6d4fb65c.js.map
