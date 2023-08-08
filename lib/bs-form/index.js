'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var toConsumableArray = require('../chunkFile/toConsumableArray-732121ab.js');
var asyncToGenerator = require('../chunkFile/asyncToGenerator-a8c58a95.js');
var objectSpread2 = require('../chunkFile/objectSpread2-4924fbca.js');
var vue = require('vue');
var CustomDynamicComponent = require('../chunkFile/CustomDynamicComponent-09411289.js');
var BsInput = require('../chunkFile/BsInput-372dc0a7.js');
var style_module = require('../chunkFile/style.module-01a7c605.js');
var BsNumber = require('../chunkFile/BsNumber-4c748996.js');
var BsSelect = require('../chunkFile/BsSelect-390069ec.js');
var BsRadio = require('../chunkFile/BsRadio-a6122609.js');
var BsCheckbox = require('../chunkFile/BsCheckbox-4700112c.js');
var BsDate = require('../chunkFile/BsDate-cb6b1122.js');
var BsDateRange = require('../chunkFile/BsDateRange-012f2031.js');
var BsNumberRange = require('../chunkFile/BsNumberRange-713cb302.js');
var BsCascader = require('../chunkFile/BsCascader-6d4fb65c.js');
var BsSwitch = require('../chunkFile/BsSwitch-08520d4e.js');
var BsText = require('../chunkFile/BsText-2ea14b97.js');
require('../chunkFile/common-e4ea3cc2.js');
require('../chunkFile/dayjs.min-cc7c1144.js');

var commonRules = {
  amt: [/(^[1-9]([0-9]+)?(\.[0-9]{1,6})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/, '请填写有效金额'],
  digits: [/^\d+$/, '请填写数字'],
  trim: [/^\S{0,100000000000000}\S$/, '请清除空格'],
  positivedigits: [/^[+]{0,1}(\d+)$/, '请填写正整数'],
  letters: [/^[a-z]+$/i, '请填写字母'],
  date: [/^\d{4}-\d{2}-\d{2}$/, '请填写有效的日期，格式:yyyy-mm-dd'],
  time: [/^([01]\d|2[0-3])(:[0-5]\d){1,2}$/, '请填写有效的时间，00:00到23:59之间'],
  email: [/^[\w+-]+(\.[\w+-]+)*@[a-z\d-]+(\.[a-z\d-]+)*\.([a-z]{2,4})$/i, '请填写有效的邮箱'],
  url: [/^(https?|s?ftp):\/\/\S+$/i, '请填写有效的网址'],
  qq: [/^[1-9]\d{4,}$/, '请填写有效的QQ号'],
  IDcard: [/^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/, '请填写正确的身份证号码'],
  IDcardNew: [/^[1-9]{1}[0-9]{9}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)[0-9]{3}([0-9]|[xX])$/, '请填写正确的身份证号码'],
  tel: [/^(?:(?:0\d{2,3}[- ]?[1-9]\d{6,7})|(?:[48]00[- ]?[1-9]\d{6}))$/, '请填写有效的电话号码'],
  mobile: [/^1[3-9]\d{9}$/, '请填写有效的手机号'],
  zipcode: [/^\d{6}$/, '请检查邮政编码格式'],
  chinese: [/^[\u0391-\uFFE5]+$/, '请填写中文字符'],
  username: [/^\w{3,12}$/, '请填写3-12位数字、字母、下划线'],
  password: [/^[\d]{6}$/, '请填写6位数字，不能包含空格'],
  msgCode: [/^[\d]{6}$/, '请输入6位有效验证码'],
  cvv2: [/^[0-9]{3,4}$/, '请填写有效的CVV2'],
  creditcardexp: [/^[\d]{4}$/, '请填写正确的有效期'],
  bankcard: [/^([1-9]{1})(\d{14,20})$/, '请填写有效的银行卡号'],
  chkmoney: [/^(([1-9][0-9]{0,12})|(([1]\.\d{1,2}|[1-9][0-9]{0,12}\.\d{1,2})))$/, '请输入正确的金额'],
  realname: [/^.{1,20}$/, '请填写1-20位的真实姓名'],
  percent: [/^(\d|[1-9]\d|100)(\.\d{1,2})?$/, '利率值应在0-100之间'],
  chinese20: [/^[\u4e00-\u9fa5]{1,20}$/, '请输入1~20个中文字符'],
  chinese18: [/^[\u4e00-\u9fa5]{1,20}$/, '请输入1~18个中文字符'],
  chinese10: [/^[\u4e00-\u9fa5]{1,10}$/, '请输入1~10个中文字符'],
  chinese64: [/^[\u4e00-\u9fa5]{1,20}$/, '请输入1~64个中文字符'],
  chinese50: [/^[\u4e00-\u9fa5]{1,50}$/, '请输入1~50个中文字符'],
  chinese1000: [/^[\u4e00-\u9fa5]{1,1000}$/, '请输入1~1000个中文字符'],
  arbitrarily30to1000: [/^(\s*[\S]\s*){30,1000}$/, '请输入30~1000个字符'],
  // accept: function(element, params) {
  //   if (!params) return true
  //   let ext = params[0],
  //     value = $(element).val()
  //   return (ext === '*') ||
  //              (new RegExp('.(?:' + ext + ')$','i')).test(value) ||
  //              this.renderMsg('只接受{1}后缀的文件',ext.replace(/\|/g, ','))
  // },
  // 使用正则表达式定义规则
  // industRegist : [/^\d{15}$/, '请填写15位工商注册号','请填写18位社会信用代码'],
  // 使用函数定义规则
  bizcode: [/^[a-zA-Z0-9]{15}$|^[a-zA-Z0-9]{18}$/, '请填写正确的统一社会信用代码']
};

var BsPasswod = vue.defineComponent({
  name: 'BsPasswod',
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
    var _CustomDynamicCompone = new CustomDynamicComponent.CustomDynamicComponent(),
      dynamicPassword = _CustomDynamicCompone.dynamicPassword;
    function updateValue(value) {
      var _props$config$prop, _props$config;
      var cloneValue = value;
      // ant-Design-vue 无input事件，value获取到的是原生input事件的e
      if (CustomDynamicComponent.CustomDynamicComponent.language === CustomDynamicComponent.CustomDynamicComponent.antLanguage) {
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
      return vue.createVNode("div", {
        "class": ['BsPassword', style_module.styles.width100]
      }, [vue.createVNode(dynamicPassword, vue.mergeProps({
        "class": "password",
        "type": "password",
        "model-value": props.modelValue,
        "placeholder": props.config.placeholder || "\u8BF7\u8F93\u5165".concat((_props$config$label = (_props$config2 = props.config) === null || _props$config2 === void 0 ? void 0 : _props$config2.label) !== null && _props$config$label !== void 0 ? _props$config$label : ''),
        "disabled": !!props.config.disabled,
        "autocomplete": "on",
        "clearable": props.config.clearable !== false,
        "allowClear": (_props$config$allowCl = props.config.allowClear) !== null && _props$config$allowCl !== void 0 ? _props$config$allowCl : props.config.clearable !== false,
        "show-password": props.config.showPassword,
        "visibilityToggle": props.config.showPassword
      }, props.config.nativeProps, {
        "onInput": updateValue
      }), null)]);
    };
  }
});

var BsTextarea = vue.defineComponent({
  name: 'BsTextarea',
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
    var _CustomDynamicCompone = new CustomDynamicComponent.CustomDynamicComponent(),
      dynamicTextarea = _CustomDynamicCompone.dynamicTextarea;
    function updateValue(value) {
      var _props$config$prop, _props$config;
      var cloneValue = value;
      // ant-Design-vue 无input事件，value获取到的是原生input事件的e
      if (CustomDynamicComponent.CustomDynamicComponent.language === CustomDynamicComponent.CustomDynamicComponent.antLanguage) {
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
      return vue.createVNode("div", {
        "class": ['BsTextarea', style_module.styles.width100]
      }, [vue.createVNode(dynamicTextarea, vue.mergeProps({
        "class": "textarea",
        "type": "textarea",
        "model-value": props.modelValue,
        "placeholder": props.config.placeholder || "\u8BF7\u8F93\u5165".concat((_props$config$label = (_props$config2 = props.config) === null || _props$config2 === void 0 ? void 0 : _props$config2.label) !== null && _props$config$label !== void 0 ? _props$config$label : ''),
        "disabled": !!props.config.disabled,
        "clearable": props.config.clearable !== false,
        "allowClear": (_props$config$allowCl = props.config.allowClear) !== null && _props$config$allowCl !== void 0 ? _props$config$allowCl : props.config.clearable !== false,
        "rows": props.config.rows || 3,
        "autoSize": props.config.autoSize || {
          minRows: 3,
          maxRows: 3
        }
      }, props.config.nativeProps, {
        "onInput": updateValue
      }), null)]);
    };
  }
});

// 组件注册
var getComponentByType = function getComponentByType(item) {
  switch (item.type) {
    case 'input':
      return BsInput.input;
    case 'textarea':
      return BsTextarea;
    case 'password':
      return BsPasswod;
    case 'number':
      return BsNumber.number;
    case 'select':
      return BsSelect.select;
    case 'radio':
      return BsRadio.radio;
    case 'checkbox':
      return BsCheckbox.checkbox;
    case 'year':
    case 'month':
    case 'week':
    case 'date':
    case 'datetime':
    case 'dates':
      return BsDate.date;
    case 'yearRange':
    case 'monthRange':
    case 'dateRange':
    case 'weekRange':
    case 'datetimeRange':
      return BsDateRange.dateRange;
    case 'numberRange':
      return BsNumberRange.numberRange;
    case 'cascader':
      return BsCascader.cascader;
    case 'switch':
      return BsSwitch.switchC;
    case 'text':
      return BsText.text;
    default:
      return BsInput.input;
    // throw new Error('配置项控件${col.type}不存在')
  }
};

var form = vue.defineComponent({
  name: 'BsForm',
  props: {
    modelValue: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    config: {
      type: Object,
      default: function _default() {
        return {}; // 默认值请看defaultConfig变量
      }
    }
  },

  emits: ['update:modelValue', 'search', 'export', 'reset'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit,
      expose = _ref.expose;
    // 获取表单组件实例
    var ruleFormRef = vue.ref();
    // config默认值- 没有通过props默认值是因为想实现config字段级别的默认值
    var defaultConfig = {
      colNum: 6,
      columns: [],
      labelWidth: '100px',
      notOpBtn: false,
      opBtnCol: 6,
      isSearch: true,
      isReset: true,
      isExport: false // 是否需要导出按钮
    };

    var cloneConfig = vue.reactive(objectSpread2._objectSpread2(objectSpread2._objectSpread2({}, defaultConfig), props.config));
    // 初始绑定表单
    var initForm = vue.reactive({
      value: {}
    });
    // 校验规则
    var rules = vue.reactive({});
    /**
     * 表单默认值、rules初始化
     * */
    var initFormFn = /*#__PURE__*/function () {
      var _ref2 = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee() {
        var cloneInitForm;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              cloneInitForm = {};
              cloneConfig.columns.forEach(function (item) {
                if (item.multiple) {
                  cloneInitForm[item.prop] = props.modelValue[item.prop] ? Array.isArray(props.modelValue[item.prop]) ? props.modelValue[item.prop] : [props.modelValue[item.prop]] : undefined;
                } else {
                  cloneInitForm[item.prop] = props.modelValue[item.prop];
                }
              });
              initForm.value = objectSpread2._objectSpread2(objectSpread2._objectSpread2({}, props.modelValue), cloneInitForm);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function initFormFn() {
        return _ref2.apply(this, arguments);
      };
    }();
    // 正则验证
    var asyncValidator = function asyncValidator(val, type) {
      return val ? commonRules[type][0].test(val) : true;
    };
    // 错误消息打印
    var asyncMessage = function asyncMessage(type) {
      return commonRules[type][1];
    };
    var initRulesFn = function initRulesFn() {
      var cloneRules = {};
      cloneConfig.columns.forEach(function (item) {
        if (!item.hide) {
          cloneRules[item.prop] = [{
            required: item.required,
            message: "".concat(['input', 'textarea'].includes(item.type) ? '请输入' : '请选择').concat(item.label),
            trigger: 'change'
          }].concat(toConsumableArray._toConsumableArray(item.inlayRules ? item.inlayRules.map(function (item) {
            var _item$trigger;
            return {
              validator: function validator(rule, value) {
                if (!asyncValidator(value, item.validatorName)) {
                  var _item$message;
                  return Promise.reject((_item$message = item.message) !== null && _item$message !== void 0 ? _item$message : asyncMessage(item.validatorName));
                }
                return Promise.resolve();
              },
              trigger: (_item$trigger = item.trigger) !== null && _item$trigger !== void 0 ? _item$trigger : 'change'
            };
          }) : []), toConsumableArray._toConsumableArray(item.rules ? item.rules : []));
        }
      });
      Object.assign(rules, cloneRules);
    };
    vue.watch(function () {
      return props.config;
    }, function () {
      Object.assign(cloneConfig, defaultConfig, props.config);
      initRulesFn();
      initFormFn();
    }, {
      immediate: true,
      deep: true
    });
    vue.watch(function () {
      return props.modelValue;
    }, function () {
      initFormFn();
    }, {
      immediate: true,
      deep: true
    });
    var updateModelValue = function updateModelValue() {
      emit('update:modelValue', initForm.value);
    };
    // 自适应列宽
    var getSpan = function getSpan(item) {
      var spanArray = [12, 8, 8, 6, 6]; // [xs,sm,md,lg,xl]
      // 对时间区间做特殊处理
      if (item.type.indexOf('Range') !== -1) {
        // 区间为分栏数量的两倍
        return spanArray.map(function (v) {
          return v * 2;
        });
      }
      return spanArray;
    };
    // 表单整体校验方法-已暴露
    var validate = /*#__PURE__*/function () {
      var _ref3 = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee3() {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref4 = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee2(resolve) {
                  return asyncToGenerator._regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return vue.nextTick();
                      case 2:
                        ruleFormRef.value.validate().then(function () {
                          resolve(true);
                        }).catch(function (err) {
                          console.log(err);
                          resolve(false);
                        });
                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function (_x) {
                  return _ref4.apply(this, arguments);
                };
              }()));
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function validate() {
        return _ref3.apply(this, arguments);
      };
    }();
    // 验证表单具体的某个字段方法-已暴露
    var validateField = /*#__PURE__*/function () {
      var _ref5 = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee5(prop) {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref6 = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee4(resolve) {
                  return asyncToGenerator._regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return vue.nextTick();
                      case 2:
                        ruleFormRef.value.validateFields(prop).then(function () {
                          resolve(true);
                        }).catch(function (err) {
                          console.log(err);
                          resolve(false);
                        });
                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function (_x3) {
                  return _ref6.apply(this, arguments);
                };
              }()));
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function validateField(_x2) {
        return _ref5.apply(this, arguments);
      };
    }();
    // 表单重置方法-已暴露
    var resetFields = /*#__PURE__*/function () {
      var _ref7 = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee6(prop) {
        var _ruleFormRef$value;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return vue.nextTick();
            case 2:
              (_ruleFormRef$value = ruleFormRef.value) === null || _ruleFormRef$value === void 0 ? void 0 : _ruleFormRef$value.resetFields(prop);
              updateModelValue();
            case 4:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      return function resetFields(_x4) {
        return _ref7.apply(this, arguments);
      };
    }();
    // 清理表单验证信息-已暴露
    var clearValidate = /*#__PURE__*/function () {
      var _ref8 = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee7(prop) {
        var _ruleFormRef$value2;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return vue.nextTick();
            case 2:
              (_ruleFormRef$value2 = ruleFormRef.value) === null || _ruleFormRef$value2 === void 0 ? void 0 : _ruleFormRef$value2.clearValidate(prop);
            case 3:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      return function clearValidate(_x5) {
        return _ref8.apply(this, arguments);
      };
    }();
    var scrollToField = /*#__PURE__*/function () {
      var _ref9 = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee8(field) {
        var _ruleFormRef$value3;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return vue.nextTick();
            case 2:
              (_ruleFormRef$value3 = ruleFormRef.value) === null || _ruleFormRef$value3 === void 0 ? void 0 : _ruleFormRef$value3.scrollToField(field);
            case 3:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      return function scrollToField(_x6) {
        return _ref9.apply(this, arguments);
      };
    }();
    var searchFn = /*#__PURE__*/function () {
      var _ref10 = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee9() {
        var verify;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return validate();
            case 2:
              verify = _context9.sent;
              if (!verify) {
                _context9.next = 11;
                break;
              }
              cloneConfig.loading = true;
              emit('search');
              _context9.next = 8;
              return cloneConfig.searchFn && cloneConfig.searchFn(initForm.value);
            case 8:
              cloneConfig.loading = false;
              _context9.next = 12;
              break;
            case 11:
              console.log('error searchFn!');
            case 12:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      return function searchFn() {
        return _ref10.apply(this, arguments);
      };
    }();
    var exportFn = /*#__PURE__*/function () {
      var _ref11 = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee10() {
        var verify;
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return validate();
            case 2:
              verify = _context10.sent;
              if (!verify) {
                _context10.next = 11;
                break;
              }
              cloneConfig.loading = true;
              emit('export');
              _context10.next = 8;
              return cloneConfig.exportFn && cloneConfig.exportFn(initForm.value);
            case 8:
              cloneConfig.loading = false;
              _context10.next = 12;
              break;
            case 11:
              console.log('error exportFn!');
            case 12:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      return function exportFn() {
        return _ref11.apply(this, arguments);
      };
    }();
    var currentExportState = vue.ref(false); // 当前收起展开状态 默认收起
    var expandFn = function expandFn() {
      currentExportState.value = !currentExportState.value;
      cloneConfig.columns && cloneConfig.columns.forEach(function (item) {
        if (!item.hide && (item === null || item === void 0 ? void 0 : item.expandDefault) !== undefined) {
          item.expandDefault = currentExportState.value;
        }
      });
    };
    // 部分select组件，后台需要设置两个值   比如：选择人员，后台同时需要 人员id和人员名称时
    var setProp2 = function setProp2(prop2, value) {
      initForm.value[prop2] = value;
      updateModelValue();
    };
    var resetFn = /*#__PURE__*/function () {
      var _ref12 = asyncToGenerator._asyncToGenerator( /*#__PURE__*/asyncToGenerator._regeneratorRuntime().mark(function _callee11() {
        return asyncToGenerator._regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              ruleFormRef.value.resetFields();
              updateModelValue();
              setTimeout(function () {
                emit('reset');
                cloneConfig.resetFn && cloneConfig.resetFn();
              });
            case 3:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      return function resetFn() {
        return _ref12.apply(this, arguments);
      };
    }();
    expose({
      validate: validate,
      resetFields: resetFields,
      clearValidate: clearValidate,
      scrollToField: scrollToField,
      validateField: validateField,
      resetFn: resetFn
    });
    // 根据item：columnsFormBase获取返回对应的src/components里的组件
    var componentRender = function componentRender(item) {
      var componentInstance = getComponentByType(item);
      return vue.createVNode(componentInstance, {
        "modelValue": initForm.value[item.prop],
        "onUpdate:modelValue": function onUpdateModelValue($event) {
          return initForm.value[item.prop] = $event;
        },
        'propEnd': initForm.value[item.propEnd],
        "onUpdate:propEnd": function onUpdatePropEnd($event) {
          return initForm.value[item.propEnd] = $event;
        },
        'fileList': initForm.value[item.files],
        "onUpdate:fileList": function onUpdateFileList($event) {
          return initForm.value[item.files] = $event;
        },
        "config": item,
        "onChange": function onChange(params) {
          (item === null || item === void 0 ? void 0 : item.change) && (item === null || item === void 0 ? void 0 : item.change(params));
          updateModelValue();
        },
        "onSetProp2": function onSetProp2(value) {
          item.prop2 && setProp2(item.prop2, value);
        }
      }, null);
    };
    return function () {
      var _cloneConfig$columns;
      var dynamicComponent = new CustomDynamicComponent.CustomDynamicComponent();
      var dynamicForm = dynamicComponent.dynamicForm,
        dynamicRow = dynamicComponent.dynamicRow,
        dynamicCol = dynamicComponent.dynamicCol,
        dynamicFormItem = dynamicComponent.dynamicFormItem,
        dynamicButton = dynamicComponent.dynamicButton;
      return vue.createVNode("div", {
        "class": "BsForm"
      }, [vue.withDirectives(vue.createVNode(dynamicForm, vue.mergeProps({
        "ref": ruleFormRef,
        "label-width": cloneConfig.labelWidth || '100px',
        "model": initForm.value,
        "rules": rules,
        "validate-on-rule-change": false,
        "class": "ruleForm",
        "disabled": cloneConfig.disabled
      }, cloneConfig.nativeProps), {
        default: function _default() {
          return [vue.createVNode(dynamicRow, {
            "gutter": 15
          }, {
            default: function _default() {
              return [cloneConfig.columns.map(function (item) {
                return vue.createVNode(vue.Fragment, null, [item.hide !== true && item.expandDefault !== false && vue.createVNode(dynamicCol, {
                  "xs": item.colNum || props.config.colNum || getSpan(item)[0],
                  "sm": item.colNum || props.config.colNum || getSpan(item)[1],
                  "md": item.colNum || props.config.colNum || getSpan(item)[2],
                  "lg": item.colNum || props.config.colNum || getSpan(item)[3],
                  "xl": item.colNum || props.config.colNum || getSpan(item)[4]
                }, {
                  default: function _default() {
                    return [vue.createVNode(dynamicFormItem, {
                      "label-width": item.labelWidth || props.config.labelWidth || '100px',
                      "label": item.label,
                      "prop": CustomDynamicComponent.CustomDynamicComponent.language === CustomDynamicComponent.CustomDynamicComponent.antLanguage ? undefined : item.prop,
                      "name": item.prop
                    }, {
                      default: function _default() {
                        return [item.type === 'render' // 自定义render函数（只替换form-item-conent部分，label不会被render）
                        ? item === null || item === void 0 ? void 0 : item.render() // ep-form-item__content 部分的render函数
                        : componentRender(item) // 根据item：columnsFormBs中的type属性获取对应的自定义组件
                        ];
                      }
                    })];
                  }
                })]);
              }), !cloneConfig.notOpBtn && ((_cloneConfig$columns = cloneConfig.columns) === null || _cloneConfig$columns === void 0 ? void 0 : _cloneConfig$columns.length) > 0 && vue.createVNode(dynamicCol, {
                "span": cloneConfig.opBtnCol,
                "class": "btn-wrap"
              }, {
                default: function _default() {
                  return [vue.createVNode("div", {
                    "style": "display: flex;align-items: center;height: 100%;padding-bottom: 18px;box-sizing: border-box;"
                  }, [cloneConfig.isSearch && vue.createVNode(dynamicButton, {
                    "type": "primary",
                    "size": "small",
                    "onClick": function onClick() {
                      searchFn();
                    }
                  }, {
                    default: function _default() {
                      return [vue.createTextVNode("\u641C\u7D22")];
                    }
                  }), cloneConfig.isReset && vue.createVNode(dynamicButton, {
                    "type": "warning",
                    "size": "small",
                    "onClick": function onClick() {
                      resetFn();
                    }
                  }, {
                    default: function _default() {
                      return [vue.createTextVNode("\u91CD\u7F6E")];
                    }
                  }), cloneConfig.isExport && vue.createVNode(dynamicButton, {
                    "type": "warning",
                    "size": "small",
                    "onClick": function onClick() {
                      exportFn();
                    }
                  }, {
                    default: function _default() {
                      return [vue.createTextVNode("\u5BFC\u51FA")];
                    }
                  }), cloneConfig.isExpand && vue.createVNode(dynamicButton, {
                    "type": "primary",
                    "size": "small",
                    "onClick": function onClick() {
                      expandFn();
                    }
                  }, {
                    default: function _default() {
                      return [currentExportState.value ? '收起' : '展开'];
                    }
                  }), cloneConfig.appendOpBtn && cloneConfig.appendOpBtn()])];
                }
              })];
            }
          })];
        }
      }), [[vue.resolveDirective("loading"), cloneConfig.loading]])]);
    };
  }
});

form.install = function (Vue) {
  Vue.component(form.name, form);
};
var BsForm = form;

exports.BsForm = BsForm;
exports.default = form;
//# sourceMappingURL=index.js.map
