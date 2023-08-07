'use strict';

var vue = require('vue');
var style_module = require('./style.module-b12fb025.js');
var CustomDynamicComponent = require('./CustomDynamicComponent-2e7e5e9c.js');
var dayjs_min = require('./dayjs.min-74574aa8.js');

var date = vue.defineComponent({
  name: 'BsDate',
  props: {
    modelValue: {
      type: String,
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
    function getFormat(type, formatType) {
      if (type === 'date') {
        return 'YYYY-MM-DD';
      }
      if (type === 'month') {
        return 'YYYY-MM';
      }
      if (type === 'year') {
        return 'YYYY';
      }
      if (type === 'week') {
        if (formatType === 'format') {
          return '第 ww 周';
        } else {
          return '';
        }
      }
      if (type === 'datetime') {
        return 'YYYY-MM-DD HH:mm:ss';
      }
      return 'YYYY-MM-DD';
    }
    var cloneModelValue = vue.ref(dayjs_min.dayjs());
    vue.watch(function () {
      return props.modelValue;
    }, function () {
      cloneModelValue.value = props.modelValue;
    }, {
      immediate: true
    });
    // 解决datetime类型，不点击确认按钮无法触发change事件bug
    vue.watch(function () {
      return cloneModelValue.value;
    }, function () {
      updateValue(cloneModelValue.value);
    });
    function updateValue(value) {
      var _props$config$prop, _props$config;
      console.log(value, 'value');
      emit('update:modelValue', value);
      emit('change', {
        prop: (_props$config$prop = (_props$config = props.config) === null || _props$config === void 0 ? void 0 : _props$config.prop) !== null && _props$config$prop !== void 0 ? _props$config$prop : '',
        value: value
      });
    }
    return function () {
      var _props$config$label, _props$config2, _props$config$allowCl;
      var dynamicComponent = new CustomDynamicComponent.CustomDynamicComponent();
      var dynamicDatePicker = dynamicComponent.dynamicDatePicker;
      return vue.createVNode("div", {
        "class": ['BsDate', style_module.styles.width100]
      }, [vue.createVNode(dynamicDatePicker, vue.mergeProps({
        "class": ['date', style_module.styles.width100],
        "modelValue": cloneModelValue.value,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return cloneModelValue.value = $event;
        },
        "placeholder": props.config.placeholder || "\u8BF7\u9009\u62E9".concat((_props$config$label = (_props$config2 = props.config) === null || _props$config2 === void 0 ? void 0 : _props$config2.label) !== null && _props$config$label !== void 0 ? _props$config$label : ''),
        "disabled": !!props.config.disabled,
        "format": props.config.format || getFormat(props.config.type, 'format'),
        "value-format": props.config.valueFormat || getFormat(props.config.type, 'valueFormat'),
        "type": props.config.type || 'date',
        "picker": props.config.type || 'date',
        "clearable": props.config.clearable !== false,
        "allowClear": (_props$config$allowCl = props.config.allowClear) !== null && _props$config$allowCl !== void 0 ? _props$config$allowCl : props.config.clearable !== false
      }, props.config.nativeProps, {
        "onChange": updateValue
      }), null)]);
    };
  }
});

exports.date = date;
//# sourceMappingURL=BsDate-337b67ab.js.map
