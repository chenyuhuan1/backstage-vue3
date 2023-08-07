import { defineComponent, ref, watch, createVNode, mergeProps } from 'vue';
import { s as styles } from './style.module-bc378eba.js';
import { C as CustomDynamicComponent } from './CustomDynamicComponent-410630ef.js';
import { d as dayjs } from './dayjs.min-6f78bd45.js';

var date = defineComponent({
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
    var cloneModelValue = ref(dayjs());
    watch(function () {
      return props.modelValue;
    }, function () {
      cloneModelValue.value = props.modelValue;
    }, {
      immediate: true
    });
    // 解决datetime类型，不点击确认按钮无法触发change事件bug
    watch(function () {
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
      var dynamicComponent = new CustomDynamicComponent();
      var dynamicDatePicker = dynamicComponent.dynamicDatePicker;
      return createVNode("div", {
        "class": ['BsDate', styles.width100]
      }, [createVNode(dynamicDatePicker, mergeProps({
        "class": ['date', styles.width100],
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

export { date as d };
//# sourceMappingURL=BsDate-81fa3588.js.map
