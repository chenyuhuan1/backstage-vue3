'use strict';

var vue = require('vue');
var dayjs_min = require('./dayjs.min-cc7c1144.js');
var style_module = require('./style.module-01a7c605.js');
var CustomDynamicComponent = require('./CustomDynamicComponent-09411289.js');

var dateRange = vue.defineComponent({
  name: 'BsDateRange',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    propEnd: {
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
  emits: ['update:modelValue', 'update:propEnd', 'change'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var cloneModelValue = vue.ref('');
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
    // 解决datetime类型，不点击确认按钮无法触发change事件bug
    vue.watch(function () {
      return clonePropEnd.value;
    }, function () {
      updateEndValue(clonePropEnd.value);
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
    function disabledDate(date) {
      if (clonePropEnd.value) {
        // 这里format为了解决element默认08:00:00
        return +new Date(dayjs_min.dayjs(date).format('yyyy-MM-DD HH:mm:ss')) > +new Date(dayjs_min.dayjs(clonePropEnd.value).format('yyyy-MM-DD HH:mm:ss'));
      }
      return false;
    }
    function disabledDateEnd(date) {
      if (cloneModelValue.value) {
        return +new Date(dayjs_min.dayjs(date).format('yyyy-MM-DD HH:mm:ss')) < +new Date(dayjs_min.dayjs(cloneModelValue.value).format('yyyy-MM-DD HH:mm:ss'));
      }
      return false;
    }
    function removerRange(type) {
      return type === null || type === void 0 ? void 0 : type.replace('Range', '');
    }
    function getFormat(type, formatType) {
      if (removerRange(type) === 'date') {
        return 'YYYY-MM-DD';
      }
      if (removerRange(type) === 'month') {
        return 'YYYY-MM';
      }
      if (removerRange(type) === 'year') {
        return 'YYYY';
      }
      if (removerRange(type) === 'week') {
        if (formatType === 'format') {
          return '第 ww 周';
        } else {
          return null;
        }
      }
      if (removerRange(type) === 'datetime') {
        return 'YYYY-MM-DD HH:mm:ss';
      }
      return 'YYYY-MM-DD';
    }
    return function () {
      var _props$config$label, _props$config3, _props$config$allowCl, _props$config$label2, _props$config4, _props$config$allowCl2;
      var dynamicComponent = new CustomDynamicComponent.CustomDynamicComponent();
      var dynamicDatePicker = dynamicComponent.dynamicDatePicker;
      // ant-design-vue formitem只允许一个form控件
      var formItem = CustomDynamicComponent.CustomDynamicComponent.language === CustomDynamicComponent.CustomDynamicComponent.antLanguage ? vue.createVNode(vue.resolveComponent("a-form-item"), null, null) : vue.createVNode("template", null, null);
      return vue.createVNode("div", {
        "class": ['BsDateRange', style_module.styles.width100],
        "style": {
          display: 'flex'
        }
      }, [vue.createVNode(dynamicDatePicker, vue.mergeProps({
        "style": {
          flex: 1
        },
        "modelValue": cloneModelValue.value,
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return cloneModelValue.value = $event;
        },
        "class": "date",
        "placeholder": props.config.placeholderStart || props.config.placeholder || "\u8BF7\u9009\u62E9".concat((_props$config$label = (_props$config3 = props.config) === null || _props$config3 === void 0 ? void 0 : _props$config3.label) !== null && _props$config$label !== void 0 ? _props$config$label : ''),
        "disabled": !!props.config.disabled,
        "format": props.config.format || getFormat(props.config.type, 'format'),
        "value-format": props.config.valueFormat || getFormat(props.config.type, 'valueFormat'),
        "disabled-date": props.config.disabledDate || disabledDate,
        "type": removerRange(props.config.type) || 'date',
        "picker": removerRange(props.config.type) || 'date',
        "clearable": props.config.clearable !== false,
        "allowClear": (_props$config$allowCl = props.config.allowClear) !== null && _props$config$allowCl !== void 0 ? _props$config$allowCl : props.config.clearable !== false,
        "onChange": updateValue
      }, props.config.nativeProps), null), vue.createVNode("span", {
        "style": "padding: 0 5px;"
      }, [vue.createTextVNode("~")]), vue.createVNode(formItem, {
        "style": "margin: 0;flex: 1;display: flex;"
      }, {
        default: function _default() {
          return [vue.createVNode(dynamicDatePicker, vue.mergeProps({
            "style": {
              flex: 1
            },
            "modelValue": clonePropEnd.value,
            "onUpdate:modelValue": function onUpdateModelValue($event) {
              return clonePropEnd.value = $event;
            },
            "class": "date",
            "placeholder": props.config.placeholderEnd || props.config.placeholder || "\u8BF7\u9009\u62E9".concat((_props$config$label2 = (_props$config4 = props.config) === null || _props$config4 === void 0 ? void 0 : _props$config4.label) !== null && _props$config$label2 !== void 0 ? _props$config$label2 : ''),
            "disabled": !!props.config.disabled,
            "format": props.config.format || getFormat(props.config.type, 'format'),
            "value-format": props.config.valueFormat || getFormat(props.config.type, 'valueFormat'),
            "disabled-date": props.config.disabledDate || disabledDateEnd,
            "type": removerRange(props.config.type) || 'date',
            "picker": removerRange(props.config.type) || 'date',
            "clearable": props.config.clearable !== false,
            "allowClear": (_props$config$allowCl2 = props.config.allowClear) !== null && _props$config$allowCl2 !== void 0 ? _props$config$allowCl2 : props.config.clearable !== false
          }, props.config.nativeProps, {
            "onChange": updateEndValue
          }), null)];
        }
      })]);
    };
  }
});

exports.dateRange = dateRange;
//# sourceMappingURL=BsDateRange-012f2031.js.map
