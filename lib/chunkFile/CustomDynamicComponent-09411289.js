'use strict';

var vue = require('vue');

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/*
 * @Author: 陈宇环
 * @Date: 2023-06-05 15:12:47
 * @LastEditTime: 2023-06-21 10:51:09
 * @LastEditors: 陈宇环
 * @Description:
 */
// window.uiLanguage = 'ant'
// 自定义动态组件
var CustomDynamicComponent = /*#__PURE__*/function () {
  function CustomDynamicComponent() {
    var _this = this;
    _classCallCheck(this, CustomDynamicComponent);
    // 首字母大写函数
    function ucFirst(str) {
      var str1 = str[0].toUpperCase() + str.slice(1);
      return str1;
    }
    var components = ['row', 'col', 'form', 'formItem', 'button', 'table', 'tableColumn', 'radio', 'pagination', 'input', 'password', 'textarea', 'number', 'radioGroup', 'radioButton', 'select', 'selectOption', 'switch', 'cascader', 'checkBox', 'checkBoxGroup', 'datePicker', 'checkBoxButton', 'popconfirm'];
    components.forEach(function (item) {
      // 根据组件名称自动注册组件
      _this['dynamic' + ucFirst(item)] = _this.getComponent(item);
    });
  }
  // 获取动态组件函数
  _createClass(CustomDynamicComponent, [{
    key: "getComponent",
    value: function getComponent(type) {
      var _window$uiLanguage, _window;
      var methodMap = CustomDynamicComponent.dicts[(_window$uiLanguage = (_window = window) === null || _window === void 0 ? void 0 : _window.uiLanguage) !== null && _window$uiLanguage !== void 0 ? _window$uiLanguage : 'ele'];
      // 判断是否有ui主题组件库
      if (methodMap) {
        // 判断是否有定义的组件类型，没有返回div
        return methodMap()[type] || vue.createVNode("div", null, null);
      }
      return vue.createVNode("div", null, null);
    }
  }]);
  return CustomDynamicComponent;
}();
// 默认element-plus样式，在window下面进行注册
_defineProperty(CustomDynamicComponent, "language", window.uiLanguage || 'ele');
// element-plus对比基准
_defineProperty(CustomDynamicComponent, "eleLanguage", 'ele');
// ant-design-vue对比基准
_defineProperty(CustomDynamicComponent, "antLanguage", 'ant');
// 多种ui定义字典值
_defineProperty(CustomDynamicComponent, "dicts", {
  ant: function ant() {
    return {
      row: vue.createVNode(vue.resolveComponent("a-row"), null, null),
      col: vue.createVNode(vue.resolveComponent("a-col"), null, null),
      form: vue.createVNode(vue.resolveComponent("a-form"), null, null),
      formItem: vue.createVNode(vue.resolveComponent("a-form-item"), null, null),
      button: vue.createVNode(vue.resolveComponent("a-button"), null, null),
      table: vue.createVNode(vue.resolveComponent("a-table"), null, null),
      tableColumn: vue.createVNode(vue.resolveComponent("a-table-column"), null, null),
      radio: vue.createVNode(vue.resolveComponent("a-radio"), null, null),
      pagination: vue.createVNode(vue.resolveComponent("a-pagination"), null, null),
      input: vue.createVNode(vue.resolveComponent("a-input"), null, null),
      password: vue.createVNode(vue.resolveComponent("a-input-password"), null, null),
      textarea: vue.createVNode(vue.resolveComponent("a-textarea"), null, null),
      number: vue.createVNode(vue.resolveComponent("a-input-number"), null, null),
      radioGroup: vue.createVNode(vue.resolveComponent("a-radio-group"), null, null),
      radioButton: vue.createVNode(vue.resolveComponent("a-radio-button"), null, null),
      select: vue.createVNode(vue.resolveComponent("a-select"), null, null),
      selectOption: vue.createVNode(vue.resolveComponent("a-select-option"), null, null),
      switch: vue.createVNode(vue.resolveComponent("a-switch"), null, null),
      cascader: vue.createVNode(vue.resolveComponent("a-cascader"), null, null),
      checkBox: vue.createVNode(vue.resolveComponent("a-checkbox"), null, null),
      checkBoxGroup: vue.createVNode(vue.resolveComponent("a-checkbox-group"), null, null),
      datePicker: vue.createVNode(vue.resolveComponent("a-date-picker"), null, null),
      checkBoxButton: vue.createVNode("div", null, null),
      popconfirm: vue.createVNode(vue.resolveComponent("a-popconfirm"), null, null)
    };
  },
  ele: function ele() {
    return {
      row: vue.createVNode(vue.resolveComponent("el-row"), null, null),
      col: vue.createVNode(vue.resolveComponent("el-col"), null, null),
      form: vue.createVNode(vue.resolveComponent("el-form"), null, null),
      formItem: vue.createVNode(vue.resolveComponent("el-form-item"), null, null),
      button: vue.createVNode(vue.resolveComponent("el-button"), null, null),
      table: vue.createVNode(vue.resolveComponent("el-table"), null, null),
      tableColumn: vue.createVNode(vue.resolveComponent("el-table-column"), null, null),
      radio: vue.createVNode(vue.resolveComponent("el-radio"), null, null),
      pagination: vue.createVNode(vue.resolveComponent("el-pagination"), null, null),
      input: vue.createVNode(vue.resolveComponent("el-input"), null, null),
      password: vue.createVNode(vue.resolveComponent("el-input"), null, null),
      textarea: vue.createVNode(vue.resolveComponent("el-input"), null, null),
      number: vue.createVNode(vue.resolveComponent("el-input-number"), null, null),
      radioGroup: vue.createVNode(vue.resolveComponent("el-radio-group"), null, null),
      radioButton: vue.createVNode(vue.resolveComponent("el-radio-button"), null, null),
      select: vue.createVNode(vue.resolveComponent("el-select"), null, null),
      selectOption: vue.createVNode(vue.resolveComponent("el-option"), null, null),
      switch: vue.createVNode(vue.resolveComponent("el-switch"), null, null),
      cascader: vue.createVNode(vue.resolveComponent("el-cascader"), null, null),
      checkBox: vue.createVNode(vue.resolveComponent("el-checkbox"), null, null),
      checkBoxGroup: vue.createVNode(vue.resolveComponent("el-checkbox-group"), null, null),
      datePicker: vue.createVNode(vue.resolveComponent("el-date-picker"), null, null),
      checkBoxButton: vue.createVNode(vue.resolveComponent("el-checkbox-button"), null, null),
      popconfirm: vue.createVNode(vue.resolveComponent("el-popconfirm"), null, null)
    };
  }
});

exports.CustomDynamicComponent = CustomDynamicComponent;
exports._defineProperty = _defineProperty;
exports._typeof = _typeof;
//# sourceMappingURL=CustomDynamicComponent-09411289.js.map
