import { _ as _asyncToGenerator, a as _regeneratorRuntime } from './asyncToGenerator-abb93505.js';
import { _ as _objectSpread2 } from './objectSpread2-76e04c95.js';
import { defineComponent, ref, watch, createVNode, mergeProps } from 'vue';
import { f as functionUncurryThis, a as fails$3, r as requireObjectCoercible$1, d as descriptors, b as functionCall, c as createPropertyDescriptor$1, e as toPropertyKey$1, h as hasOwnProperty_1, i as ie8DomDefine, j as isCallable$2, o as objectDefineProperty, m as makeBuiltInExports, k as defineGlobalProperty$2, l as hiddenKeys$2, n as getBuiltIn$1, p as anObject$1, q as global$1, s as createNonEnumerableProperty$1, u as toObject$1, g as getDicByKey } from './common-4873e4eb.js';
import { s as styles } from './style.module-bc378eba.js';
import { C as CustomDynamicComponent } from './CustomDynamicComponent-410630ef.js';

var objectGetOwnPropertyDescriptor = {};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$2(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var uncurryThis$3 = functionUncurryThis;

var toString = uncurryThis$3({}.toString);
var stringSlice = uncurryThis$3(''.slice);

var classofRaw = function (it) {
  return stringSlice(toString(it), 8, -1);
};

var uncurryThis$2 = functionUncurryThis;
var fails$2 = fails$3;
var classof$1 = classofRaw;

var $Object = Object;
var split = uncurryThis$2(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$2(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$1(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = indexedObject;
var requireObjectCoercible = requireObjectCoercible$1;

var toIndexedObject$3 = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};

var DESCRIPTORS$1 = descriptors;
var call = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor = createPropertyDescriptor$1;
var toIndexedObject$2 = toIndexedObject$3;
var toPropertyKey = toPropertyKey$1;
var hasOwn$2 = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$1 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$2(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$2(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

var isCallable$1 = isCallable$2;
var definePropertyModule$1 = objectDefineProperty;
var makeBuiltIn = makeBuiltInExports;
var defineGlobalProperty$1 = defineGlobalProperty$2;

var defineBuiltIn$1 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$1(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$1.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$2 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;

var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$1(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

var toIntegerOrInfinity = toIntegerOrInfinity$2;

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$1 = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength = toLength$1;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$2 = function (obj) {
  return toLength(obj.length);
};

var toIndexedObject$1 = toIndexedObject$3;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$2;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$1($this);
    var length = lengthOfArrayLike$1(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var uncurryThis$1 = functionUncurryThis;
var hasOwn$1 = hasOwnProperty_1;
var toIndexedObject = toIndexedObject$3;
var indexOf = arrayIncludes.indexOf;
var hiddenKeys$1 = hiddenKeys$2;

var push = uncurryThis$1([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$1(hiddenKeys$1, key) && hasOwn$1(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$1(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$1 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$1;

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn = getBuiltIn$1;
var uncurryThis = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject = anObject$1;

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$1 = fails$3;
var isCallable = isCallable$2;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails$1(detection)
    : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';

var isForced_1 = isForced$1;

var global = global$1;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty = createNonEnumerableProperty$1;
var defineBuiltIn = defineBuiltIn$1;
var defineGlobalProperty = defineGlobalProperty$2;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};

var classof = classofRaw;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$1 = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};

var DESCRIPTORS = descriptors;
var isArray = isArray$1;

var $TypeError$1 = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw $TypeError$1('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

var doesNotExceedSafeInteger$1 = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};

var $ = _export;
var toObject = toObject$1;
var lengthOfArrayLike = lengthOfArrayLike$2;
var setArrayLength = arraySetLength;
var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
var fails = fails$3;

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 and Safari <= 15.4, FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});

var select = defineComponent({
  name: 'BsSelect',
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
  emits: ['update:modelValue', 'change', 'setProp2'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var _CustomDynamicCompone = new CustomDynamicComponent(),
      dynamicSelect = _CustomDynamicCompone.dynamicSelect,
      dynamicSelectOption = _CustomDynamicCompone.dynamicSelectOption;
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
    // watch(() => props.modelValue, () => {
    //   updateValue(props.modelValue)
    // })
    function updateValue(value) {
      var _props$config$prop, _props$config, _props$config2;
      if (value === '') {
        emit('update:modelValue', null);
      } else {
        emit('update:modelValue', value);
      }
      emit('change', {
        prop: (_props$config$prop = (_props$config = props.config) === null || _props$config === void 0 ? void 0 : _props$config.prop) !== null && _props$config$prop !== void 0 ? _props$config$prop : '',
        value: value === '' ? null : value,
        curItem: getOption(value),
        options: options.value
      });
      // 将options中得prop2字段也设置到form中
      if (props !== null && props !== void 0 && (_props$config2 = props.config) !== null && _props$config2 !== void 0 && _props$config2.prop2) {
        if (value && Array.isArray(value)) {
          var _props$config3;
          // 多选
          if (props !== null && props !== void 0 && (_props$config3 = props.config) !== null && _props$config3 !== void 0 && _props$config3.remote) {
            // 多选 && 远程搜索
            throw new Error('BsSelect组件远程搜索且多选情况下不支持绑定prop2,请检查配置');
          } else {
            // 多选 && !远程搜索
            var prop2List = [];
            value.forEach(function (item) {
              var _props$config4;
              prop2List.push(getOption(item)[props === null || props === void 0 || (_props$config4 = props.config) === null || _props$config4 === void 0 ? void 0 : _props$config4.prop2]);
            });
            emit('setProp2', prop2List);
          }
        } else {
          var _props$config5;
          // 单选
          emit('setProp2', getOption(value)[props === null || props === void 0 || (_props$config5 = props.config) === null || _props$config5 === void 0 ? void 0 : _props$config5.prop2]);
        }
      }
    }
    /**
     * @description: 获取选中得item
     * @param {*} value 当前选择中得value
     * @return any 选中得item
     */
    var getOption = function getOption(value) {
      var option = options.value.find(function (option) {
        return option.value === value;
      });
      return option;
    };
    // 远程搜索方法，必须将filterable、remote设置成true
    var remoteMethod = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(query) {
        var _props$config6, _props$config7;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (props !== null && props !== void 0 && (_props$config6 = props.config) !== null && _props$config6 !== void 0 && _props$config6.remoteMethod) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              optionsLoading.value = true;
              _context2.next = 5;
              return props === null || props === void 0 || (_props$config7 = props.config) === null || _props$config7 === void 0 ? void 0 : _props$config7.remoteMethod(query);
            case 5:
              options.value = _context2.sent;
              optionsLoading.value = false;
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function remoteMethod(_x) {
        return _ref3.apply(this, arguments);
      };
    }();
    var defaultFilterOption = function defaultFilterOption(inputValue, option) {
      var _option$label;
      return (option === null || option === void 0 || (_option$label = option.label) === null || _option$label === void 0 ? void 0 : _option$label.indexOf(inputValue)) >= 0;
    };
    return function () {
      var _props$config$label, _props$config8, _props$config$allowCl, _props$config$showSea, _props$config9, _props$config$filterO;
      return createVNode("div", {
        "class": ['BsSelect', styles.width100]
      }, [createVNode(dynamicSelect, mergeProps({
        "loading": optionsLoading.value,
        "class": ['select', styles.width100],
        "model-value": props.modelValue,
        "placeholder": props.config.placeholder || "\u8BF7\u9009\u62E9".concat((_props$config$label = (_props$config8 = props.config) === null || _props$config8 === void 0 ? void 0 : _props$config8.label) !== null && _props$config$label !== void 0 ? _props$config$label : ''),
        "disabled": !!props.config.disabled,
        "clearable": props.config.clearable !== false,
        "allowClear": (_props$config$allowCl = props.config.allowClear) !== null && _props$config$allowCl !== void 0 ? _props$config$allowCl : props.config.clearable !== false,
        "filterable": props.config.filterable !== false,
        "showSearch": (_props$config$showSea = props.config.showSearch) !== null && _props$config$showSea !== void 0 ? _props$config$showSea : props.config.filterable !== false,
        "multiple": props.config.multiple === true,
        "mode": props.config.mode ? props.config.mode : props.config.multiple === true ? 'multiple' : undefined,
        "filterOption": props !== null && props !== void 0 && (_props$config9 = props.config) !== null && _props$config9 !== void 0 && _props$config9.remoteMethod ? false : (_props$config$filterO = props.config.filterOption) !== null && _props$config$filterO !== void 0 ? _props$config$filterO : defaultFilterOption,
        "onSearch": remoteMethod,
        "remote": props.config.remote === true,
        "remote-method": props.config.remote === true ? remoteMethod : undefined,
        "collapse-tags": props.config.collapseTags !== false,
        "collapse-tags-tooltip": props.config.collapseTagsTooltip !== false,
        "multiple-limit": props.config.multipleLimit ? props.config.multipleLimit : 0,
        "reserveKeyword": props.config.reserveKeyword === true
      }, props.config.nativeProps, {
        "onChange": updateValue
      }), {
        default: function _default() {
          return [options.value && Array.isArray(options.value) && options.value.map(function (item) {
            return createVNode(dynamicSelectOption, mergeProps({
              "key": item.value,
              "label": item.label,
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

export { select as s };
//# sourceMappingURL=BsSelect-1c9d9522.js.map
