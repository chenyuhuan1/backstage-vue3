var backstageVue3 = (function (exports, vue) {
  'use strict';

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _regeneratorRuntime() {
    _regeneratorRuntime = function _regeneratorRuntime() {
      return exports;
    };
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function value(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
              return next.value = undefined, next.done = !0, next;
            };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) keys.push(key);
      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      },
      stop: function stop() {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
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

  function ownKeys$2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
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

  var styles$1 = {"width100":"style-module_width100__IAGRa","BsNumber":"style-module_BsNumber__MhnQc","BsDateRange":"style-module_BsDateRange__9N8iS","BsNumberRange":"style-module_BsNumberRange__7K0Iy","inputNumber":"style-module_inputNumber__-2tg7","noControls":"style-module_noControls__dJr3D","BsUpload":"style-module_BsUpload__rPwMQ","imgwrap":"style-module_imgwrap__36lTJ","btn":"style-module_btn__NkgWE","fileItem":"style-module_fileItem__Vpm3K","elIconUploadDis":"style-module_elIconUploadDis__jrpIw"};

  var input = vue.defineComponent({
    name: 'BsInput',
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
      var _CustomDynamicCompone = new CustomDynamicComponent(),
        dynamicInput = _CustomDynamicCompone.dynamicInput;
      function updateValue(value) {
        var _props$config$prop, _props$config;
        var cloneValue = value;
        // ant-Design-vue 无input事件，value获取到的是原生input事件的e
        if (CustomDynamicComponent.language === CustomDynamicComponent.antLanguage) {
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
          "class": ['BsInput', styles$1.width100]
        }, [vue.createVNode(dynamicInput, vue.mergeProps({
          "class": "input",
          "type": "text",
          "model-value": props.modelValue,
          "placeholder": props.config.placeholder || "\u8BF7\u8F93\u5165".concat((_props$config$label = (_props$config2 = props.config) === null || _props$config2 === void 0 ? void 0 : _props$config2.label) !== null && _props$config$label !== void 0 ? _props$config$label : ''),
          "disabled": !!props.config.disabled,
          "clearable": props.config.clearable !== false,
          "allowClear": (_props$config$allowCl = props.config.allowClear) !== null && _props$config$allowCl !== void 0 ? _props$config$allowCl : props.config.clearable !== false
        }, props.config.nativeProps, {
          "onInput": updateValue
        }), null)]);
      };
    }
  });

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
      var _CustomDynamicCompone = new CustomDynamicComponent(),
        dynamicPassword = _CustomDynamicCompone.dynamicPassword;
      function updateValue(value) {
        var _props$config$prop, _props$config;
        var cloneValue = value;
        // ant-Design-vue 无input事件，value获取到的是原生input事件的e
        if (CustomDynamicComponent.language === CustomDynamicComponent.antLanguage) {
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
          "class": ['BsPassword', styles$1.width100]
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
      var _CustomDynamicCompone = new CustomDynamicComponent(),
        dynamicTextarea = _CustomDynamicCompone.dynamicTextarea;
      function updateValue(value) {
        var _props$config$prop, _props$config;
        var cloneValue = value;
        // ant-Design-vue 无input事件，value获取到的是原生input事件的e
        if (CustomDynamicComponent.language === CustomDynamicComponent.antLanguage) {
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
          "class": ['BsTextarea', styles$1.width100]
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

  var number = vue.defineComponent({
    name: 'BsNumber',
    props: {
      modelValue: {
        type: [String, Number],
        default: undefined
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
      var _CustomDynamicCompone = new CustomDynamicComponent(),
        dynamicNumber = _CustomDynamicCompone.dynamicNumber;
      function updateValue(value) {
        var _props$config$prop, _props$config;
        emit('update:modelValue', value);
        emit('change', {
          prop: (_props$config$prop = (_props$config = props.config) === null || _props$config === void 0 ? void 0 : _props$config.prop) !== null && _props$config$prop !== void 0 ? _props$config$prop : '',
          value: value
        });
      }
      return function () {
        var _props$config$label, _props$config2;
        return vue.createVNode("div", {
          "class": ['BsNumber', styles$1.width100, styles$1.BsNumber]
        }, [vue.createVNode(dynamicNumber, vue.mergeProps({
          "style": {
            width: '100%'
          },
          "class": {
            number: true,
            textLeft: props.config.controls !== true
          },
          "model-value": props.modelValue,
          "placeholder": props.config.placeholder || "\u8BF7\u8F93\u5165".concat((_props$config$label = (_props$config2 = props.config) === null || _props$config2 === void 0 ? void 0 : _props$config2.label) !== null && _props$config$label !== void 0 ? _props$config$label : ''),
          "disabled": !!props.config.disabled,
          "controls": props.config.controls === true
        }, props.config.nativeProps, {
          "onInput": updateValue
        }), null)]);
      };
    }
  });

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$b =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || commonjsGlobal || Function('return this')();

  var objectGetOwnPropertyDescriptor = {};

  var fails$9 = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var fails$8 = fails$9;

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$8(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var fails$7 = fails$9;

  var functionBindNative = !fails$7(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var NATIVE_BIND$1 = functionBindNative;

  var call$4 = Function.prototype.call;

  var functionCall = NATIVE_BIND$1 ? call$4.bind(call$4) : function () {
    return call$4.apply(call$4, arguments);
  };

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

  var createPropertyDescriptor$2 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var NATIVE_BIND = functionBindNative;

  var FunctionPrototype$1 = Function.prototype;
  var call$3 = FunctionPrototype$1.call;
  var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype$1.bind.bind(call$3, call$3);

  var functionUncurryThis = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
    return function () {
      return call$3.apply(fn, arguments);
    };
  };

  var uncurryThis$9 = functionUncurryThis;

  var toString$1 = uncurryThis$9({}.toString);
  var stringSlice$1 = uncurryThis$9(''.slice);

  var classofRaw = function (it) {
    return stringSlice$1(toString$1(it), 8, -1);
  };

  var uncurryThis$8 = functionUncurryThis;
  var fails$6 = fails$9;
  var classof$1 = classofRaw;

  var $Object$2 = Object;
  var split = uncurryThis$8(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$6(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$2('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$1(it) == 'String' ? split(it, '') : $Object$2(it);
  } : $Object$2;

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined$2 = function (it) {
    return it === null || it === undefined;
  };

  var isNullOrUndefined$1 = isNullOrUndefined$2;

  var $TypeError$7 = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$2 = function (it) {
    if (isNullOrUndefined$1(it)) throw $TypeError$7("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject = indexedObject;
  var requireObjectCoercible$1 = requireObjectCoercible$2;

  var toIndexedObject$3 = function (it) {
    return IndexedObject(requireObjectCoercible$1(it));
  };

  var documentAll$2 = typeof document == 'object' && document.all;

  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

  var documentAll_1 = {
    all: documentAll$2,
    IS_HTMLDDA: IS_HTMLDDA
  };

  var $documentAll$1 = documentAll_1;

  var documentAll$1 = $documentAll$1.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  var isCallable$a = $documentAll$1.IS_HTMLDDA ? function (argument) {
    return typeof argument == 'function' || argument === documentAll$1;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var isCallable$9 = isCallable$a;
  var $documentAll = documentAll_1;

  var documentAll = $documentAll.all;

  var isObject$5 = $documentAll.IS_HTMLDDA ? function (it) {
    return typeof it == 'object' ? it !== null : isCallable$9(it) || it === documentAll;
  } : function (it) {
    return typeof it == 'object' ? it !== null : isCallable$9(it);
  };

  var global$a = global$b;
  var isCallable$8 = isCallable$a;

  var aFunction = function (argument) {
    return isCallable$8(argument) ? argument : undefined;
  };

  var getBuiltIn$2 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global$a[namespace]) : global$a[namespace] && global$a[namespace][method];
  };

  var uncurryThis$7 = functionUncurryThis;

  var objectIsPrototypeOf = uncurryThis$7({}.isPrototypeOf);

  var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

  var global$9 = global$b;
  var userAgent = engineUserAgent;

  var process = global$9.process;
  var Deno = global$9.Deno;
  var versions = process && process.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */

  var V8_VERSION = engineV8Version;
  var fails$5 = fails$9;
  var global$8 = global$b;

  var $String$3 = global$8.String;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$5(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String$3(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */

  var NATIVE_SYMBOL$1 = symbolConstructorDetection;

  var useSymbolAsUid = NATIVE_SYMBOL$1
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var getBuiltIn$1 = getBuiltIn$2;
  var isCallable$7 = isCallable$a;
  var isPrototypeOf = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

  var $Object$1 = Object;

  var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$1('Symbol');
    return isCallable$7($Symbol) && isPrototypeOf($Symbol.prototype, $Object$1(it));
  };

  var $String$2 = String;

  var tryToString$1 = function (argument) {
    try {
      return $String$2(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var isCallable$6 = isCallable$a;
  var tryToString = tryToString$1;

  var $TypeError$6 = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable$1 = function (argument) {
    if (isCallable$6(argument)) return argument;
    throw $TypeError$6(tryToString(argument) + ' is not a function');
  };

  var aCallable = aCallable$1;
  var isNullOrUndefined = isNullOrUndefined$2;

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$1 = function (V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
  };

  var call$2 = functionCall;
  var isCallable$5 = isCallable$a;
  var isObject$4 = isObject$5;

  var $TypeError$5 = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$5(fn = input.toString) && !isObject$4(val = call$2(fn, input))) return val;
    if (isCallable$5(fn = input.valueOf) && !isObject$4(val = call$2(fn, input))) return val;
    if (pref !== 'string' && isCallable$5(fn = input.toString) && !isObject$4(val = call$2(fn, input))) return val;
    throw $TypeError$5("Can't convert object to primitive value");
  };

  var shared$3 = {exports: {}};

  var global$7 = global$b;

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$2 = Object.defineProperty;

  var defineGlobalProperty$3 = function (key, value) {
    try {
      defineProperty$2(global$7, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global$7[key] = value;
    } return value;
  };

  var global$6 = global$b;
  var defineGlobalProperty$2 = defineGlobalProperty$3;

  var SHARED = '__core-js_shared__';
  var store$3 = global$6[SHARED] || defineGlobalProperty$2(SHARED, {});

  var sharedStore = store$3;

  var store$2 = sharedStore;

  (shared$3.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.30.2',
    mode: 'global',
    copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });

  var sharedExports = shared$3.exports;

  var requireObjectCoercible = requireObjectCoercible$2;

  var $Object = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$2 = function (argument) {
    return $Object(requireObjectCoercible(argument));
  };

  var uncurryThis$6 = functionUncurryThis;
  var toObject$1 = toObject$2;

  var hasOwnProperty = uncurryThis$6({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$1(it), key);
  };

  var uncurryThis$5 = functionUncurryThis;

  var id = 0;
  var postfix = Math.random();
  var toString = uncurryThis$5(1.0.toString);

  var uid$2 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
  };

  var global$5 = global$b;
  var shared$2 = sharedExports;
  var hasOwn$6 = hasOwnProperty_1;
  var uid$1 = uid$2;
  var NATIVE_SYMBOL = symbolConstructorDetection;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;

  var Symbol$1 = global$5.Symbol;
  var WellKnownSymbolsStore = shared$2('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

  var wellKnownSymbol$1 = function (name) {
    if (!hasOwn$6(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$6(Symbol$1, name)
        ? Symbol$1[name]
        : createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore[name];
  };

  var call$1 = functionCall;
  var isObject$3 = isObject$5;
  var isSymbol$1 = isSymbol$2;
  var getMethod = getMethod$1;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol = wellKnownSymbol$1;

  var $TypeError$4 = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$1 = function (input, pref) {
    if (!isObject$3(input) || isSymbol$1(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$1(exoticToPrim, input, pref);
      if (!isObject$3(result) || isSymbol$1(result)) return result;
      throw $TypeError$4("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  var toPrimitive = toPrimitive$1;
  var isSymbol = isSymbol$2;

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey$2 = function (argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
  };

  var global$4 = global$b;
  var isObject$2 = isObject$5;

  var document$1 = global$4.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$2(document$1) && isObject$2(document$1.createElement);

  var documentCreateElement = function (it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
  };

  var DESCRIPTORS$8 = descriptors;
  var fails$4 = fails$9;
  var createElement = documentCreateElement;

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$8 && !fails$4(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var DESCRIPTORS$7 = descriptors;
  var call = functionCall;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var createPropertyDescriptor$1 = createPropertyDescriptor$2;
  var toIndexedObject$2 = toIndexedObject$3;
  var toPropertyKey$1 = toPropertyKey$2;
  var hasOwn$5 = hasOwnProperty_1;
  var IE8_DOM_DEFINE$1 = ie8DomDefine;

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$2(O);
    P = toPropertyKey$1(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor$1(O, P);
    } catch (error) { /* empty */ }
    if (hasOwn$5(O, P)) return createPropertyDescriptor$1(!call(propertyIsEnumerableModule.f, O, P), O[P]);
  };

  var objectDefineProperty = {};

  var DESCRIPTORS$6 = descriptors;
  var fails$3 = fails$9;

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = DESCRIPTORS$6 && fails$3(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype != 42;
  });

  var isObject$1 = isObject$5;

  var $String$1 = String;
  var $TypeError$3 = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject$2 = function (argument) {
    if (isObject$1(argument)) return argument;
    throw $TypeError$3($String$1(argument) + ' is not an object');
  };

  var DESCRIPTORS$5 = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
  var anObject$1 = anObject$2;
  var toPropertyKey = toPropertyKey$2;

  var $TypeError$2 = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$5 ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject$1(O);
    P = toPropertyKey(P);
    anObject$1(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    } return $defineProperty(O, P, Attributes);
  } : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject$1(O);
    P = toPropertyKey(P);
    anObject$1(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw $TypeError$2('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var DESCRIPTORS$4 = descriptors;
  var definePropertyModule$2 = objectDefineProperty;
  var createPropertyDescriptor = createPropertyDescriptor$2;

  var createNonEnumerableProperty$2 = DESCRIPTORS$4 ? function (object, key, value) {
    return definePropertyModule$2.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var makeBuiltIn$3 = {exports: {}};

  var DESCRIPTORS$3 = descriptors;
  var hasOwn$4 = hasOwnProperty_1;

  var FunctionPrototype = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$3 && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwn$4(FunctionPrototype, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$3 || (DESCRIPTORS$3 && getDescriptor(FunctionPrototype, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var uncurryThis$4 = functionUncurryThis;
  var isCallable$4 = isCallable$a;
  var store$1 = sharedStore;

  var functionToString = uncurryThis$4(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$4(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource$1 = store$1.inspectSource;

  var global$3 = global$b;
  var isCallable$3 = isCallable$a;

  var WeakMap$1 = global$3.WeakMap;

  var weakMapBasicDetection = isCallable$3(WeakMap$1) && /native code/.test(String(WeakMap$1));

  var shared$1 = sharedExports;
  var uid = uid$2;

  var keys = shared$1('keys');

  var sharedKey$1 = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys$3 = {};

  var NATIVE_WEAK_MAP = weakMapBasicDetection;
  var global$2 = global$b;
  var isObject = isObject$5;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$2;
  var hasOwn$3 = hasOwnProperty_1;
  var shared = sharedStore;
  var sharedKey = sharedKey$1;
  var hiddenKeys$2 = hiddenKeys$3;

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$1 = global$2.TypeError;
  var WeakMap = global$2.WeakMap;
  var set, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set = function (it, metadata) {
      if (store.has(it)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store.set(it, metadata);
      return metadata;
    };
    get = function (it) {
      return store.get(it) || {};
    };
    has = function (it) {
      return store.has(it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys$2[STATE] = true;
    set = function (it, metadata) {
      if (hasOwn$3(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$1(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwn$3(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwn$3(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var uncurryThis$3 = functionUncurryThis;
  var fails$2 = fails$9;
  var isCallable$2 = isCallable$a;
  var hasOwn$2 = hasOwnProperty_1;
  var DESCRIPTORS$2 = descriptors;
  var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
  var inspectSource = inspectSource$1;
  var InternalStateModule = internalState;

  var enforceInternalState = InternalStateModule.enforce;
  var getInternalState = InternalStateModule.get;
  var $String = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$1 = Object.defineProperty;
  var stringSlice = uncurryThis$3(''.slice);
  var replace = uncurryThis$3(''.replace);
  var join = uncurryThis$3([].join);

  var CONFIGURABLE_LENGTH = DESCRIPTORS$2 && !fails$2(function () {
    return defineProperty$1(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  });

  var TEMPLATE = String(String).split('String');

  var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
    if (stringSlice($String(name), 0, 7) === 'Symbol(') {
      name = '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn$2(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      if (DESCRIPTORS$2) defineProperty$1(value, 'name', { value: name, configurable: true });
      else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn$2(options, 'arity') && value.length !== options.arity) {
      defineProperty$1(value, 'length', { value: options.arity });
    }
    try {
      if (options && hasOwn$2(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS$2) defineProperty$1(value, 'prototype', { writable: false });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) { /* empty */ }
    var state = enforceInternalState(value);
    if (!hasOwn$2(state, 'source')) {
      state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    } return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn$2(function toString() {
    return isCallable$2(this) && getInternalState(this).source || inspectSource(this);
  }, 'toString');

  var makeBuiltInExports = makeBuiltIn$3.exports;

  var isCallable$1 = isCallable$a;
  var definePropertyModule$1 = objectDefineProperty;
  var makeBuiltIn$1 = makeBuiltInExports;
  var defineGlobalProperty$1 = defineGlobalProperty$3;

  var defineBuiltIn$1 = function (O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable$1(value)) makeBuiltIn$1(value, name, options);
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

  var uncurryThis$2 = functionUncurryThis;
  var hasOwn$1 = hasOwnProperty_1;
  var toIndexedObject = toIndexedObject$3;
  var indexOf = arrayIncludes.indexOf;
  var hiddenKeys$1 = hiddenKeys$3;

  var push = uncurryThis$2([].push);

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

  var getBuiltIn = getBuiltIn$2;
  var uncurryThis$1 = functionUncurryThis;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var anObject = anObject$2;

  var concat = uncurryThis$1([].concat);

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

  var fails$1 = fails$9;
  var isCallable = isCallable$a;

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

  var global$1 = global$b;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty = createNonEnumerableProperty$2;
  var defineBuiltIn = defineBuiltIn$1;
  var defineGlobalProperty = defineGlobalProperty$3;
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
      target = global$1;
    } else if (STATIC) {
      target = global$1[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = (global$1[TARGET] || {}).prototype;
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

  var DESCRIPTORS$1 = descriptors;
  var isArray = isArray$1;

  var $TypeError$1 = TypeError;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Safari < 13 does not throw an error in this case
  var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS$1 && !function () {
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
  var toObject = toObject$2;
  var lengthOfArrayLike = lengthOfArrayLike$2;
  var setArrayLength = arraySetLength;
  var doesNotExceedSafeInteger = doesNotExceedSafeInteger$1;
  var fails = fails$9;

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

  var makeBuiltIn = makeBuiltInExports;
  var defineProperty = objectDefineProperty;

  var defineBuiltInAccessor$1 = function (target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
    return defineProperty.f(target, name, descriptor);
  };

  var DESCRIPTORS = descriptors;
  var uncurryThis = functionUncurryThis;
  var defineBuiltInAccessor = defineBuiltInAccessor$1;

  var URLSearchParamsPrototype = URLSearchParams.prototype;
  var forEach = uncurryThis(URLSearchParamsPrototype.forEach);

  // `URLSearchParams.prototype.size` getter
  // https://github.com/whatwg/url/pull/734
  if (DESCRIPTORS && !('size' in URLSearchParamsPrototype)) {
    defineBuiltInAccessor(URLSearchParamsPrototype, 'size', {
      get: function size() {
        var count = 0;
        forEach(this, function () { count++; });
        return count;
      },
      configurable: true,
      enumerable: true
    });
  }

  var dayjs_min = {exports: {}};

  (function (module, exports) {
  	!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return "["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else {var a=e.name;D[a]=e,i=a;}return !r&&i&&(g=i),i||!r&&g},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=v;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t);}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return O},m.isValid=function(){return !(this.$d.toString()===l)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),l=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case c:return r?l(1,0):l(31,11);case f:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),l=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,l=this;r=Number(r);var $=O.p(h),y=function(t){var e=w(l);return O.w(e.date(e.date()+Math.round(t*r)),l)};if($===f)return this.set(f,this.$M+r);if($===c)return this.set(c,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:O.s(this.$y,4,"0"),M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||$[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,v=this-M,g=O.m(this,M);return g=($={},$[c]=g/12,$[f]=g,$[h]=g/3,$[o]=(v-m)/6048e5,$[a]=(v-m)/864e5,$[u]=v/n,$[s]=v/e,$[i]=v/t,$)[y]||v,l?g:O.a(g)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[g],w.Ls=D,w.p={},w})); 
  } (dayjs_min));

  var dayjs_minExports = dayjs_min.exports;
  var dayjs = /*@__PURE__*/getDefaultExportFromCjs(dayjs_minExports);

  // sessionStorage
  var session = function session(key, value) {
    // debugger
    if (value === void 0) {
      var lsVal = sessionStorage.getItem(key);
      return JSON.parse(lsVal);
    }
    return sessionStorage.setItem(key, JSON.stringify(value));
  };
  // 获取字典
  function getDicByKey(key) {
    var _session;
    var dic = (_session = session('sysCodeList')) === null || _session === void 0 ? void 0 : _session[key];
    return dic !== null && dic !== void 0 ? dic : null;
  }
  // 树遍历
  function treeForeach(tree, func) {
    var childrenKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';
    tree.forEach(function (data) {
      func(data);
      data[childrenKey] && treeForeach(data[childrenKey], func); // 遍历子树
    });
  }

  var select = vue.defineComponent({
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
      var options = vue.ref([]);
      var optionsLoading = vue.ref(false);
      vue.watch(function () {
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
        return vue.createVNode("div", {
          "class": ['BsSelect', styles$1.width100]
        }, [vue.createVNode(dynamicSelect, vue.mergeProps({
          "loading": optionsLoading.value,
          "class": ['select', styles$1.width100],
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
              return vue.createVNode(dynamicSelectOption, vue.mergeProps({
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
      var _CustomDynamicCompone = new CustomDynamicComponent(),
        dynamicRadio = _CustomDynamicCompone.dynamicRadio,
        dynamicRadioGroup = _CustomDynamicCompone.dynamicRadioGroup,
        dynamicRadioButton = _CustomDynamicCompone.dynamicRadioButton;
      var options = vue.ref([]);
      var optionsLoading = vue.ref(false);
      vue.watch(function () {
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
        return vue.createVNode("div", {
          "class": ['BsRadio', styles$1.width100]
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

  var checkbox = vue.defineComponent({
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
      var options = vue.ref([]);
      var optionsLoading = vue.ref(false);
      vue.watch(function () {
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
        return vue.createVNode("div", {
          "class": ['BsCheckbox', styles$1.width100]
        }, [vue.createVNode(dynamicCheckBoxGroup, vue.mergeProps({
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
              return vue.createVNode(componentInstance, vue.mergeProps({
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
      var cloneModelValue = vue.ref(dayjs());
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
        var dynamicComponent = new CustomDynamicComponent();
        var dynamicDatePicker = dynamicComponent.dynamicDatePicker;
        return vue.createVNode("div", {
          "class": ['BsDate', styles$1.width100]
        }, [vue.createVNode(dynamicDatePicker, vue.mergeProps({
          "class": ['date', styles$1.width100],
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
          return +new Date(dayjs(date).format('yyyy-MM-DD HH:mm:ss')) > +new Date(dayjs(clonePropEnd.value).format('yyyy-MM-DD HH:mm:ss'));
        }
        return false;
      }
      function disabledDateEnd(date) {
        if (cloneModelValue.value) {
          return +new Date(dayjs(date).format('yyyy-MM-DD HH:mm:ss')) < +new Date(dayjs(cloneModelValue.value).format('yyyy-MM-DD HH:mm:ss'));
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
        var dynamicComponent = new CustomDynamicComponent();
        var dynamicDatePicker = dynamicComponent.dynamicDatePicker;
        // ant-design-vue formitem只允许一个form控件
        var formItem = CustomDynamicComponent.language === CustomDynamicComponent.antLanguage ? vue.createVNode(vue.resolveComponent("a-form-item"), null, null) : vue.createVNode("template", null, null);
        return vue.createVNode("div", {
          "class": ['BsDateRange', styles$1.width100],
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

  var numberRange = vue.defineComponent({
    name: 'BsNumberRange',
    props: {
      modelValue: {
        type: [String, Number],
        default: undefined
      },
      propEnd: {
        type: [String, Number],
        default: undefined
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
      var _CustomDynamicCompone = new CustomDynamicComponent(),
        dynamicNumber = _CustomDynamicCompone.dynamicNumber;
      var cloneModelValue = vue.ref('');
      vue.watch(function () {
        return props.modelValue;
      }, function () {
        cloneModelValue.value = props.modelValue;
      }, {
        immediate: true
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
      function updateEndValue(value) {
        var _props$config$propEnd, _props$config2;
        emit('update:propEnd', value);
        emit('change', {
          type: 'end',
          prop: (_props$config$propEnd = (_props$config2 = props.config) === null || _props$config2 === void 0 ? void 0 : _props$config2.propEnd) !== null && _props$config$propEnd !== void 0 ? _props$config$propEnd : '',
          value: value
        });
      }
      return function () {
        var _props$config$label, _props$config3, _props$config$label2, _props$config4;
        // ant-design-vue formitem只允许一个form控件
        var formItem = CustomDynamicComponent.language === CustomDynamicComponent.antLanguage ? vue.createVNode(vue.resolveComponent("a-form-item"), null, null) : vue.createVNode("template", null, null);
        return vue.createVNode("div", {
          "class": ['BsNumberRange', styles$1.width100, styles$1.BsNumberRange]
        }, [vue.createVNode(dynamicNumber, vue.mergeProps({
          "style": {
            flex: 1
          },
          "modelValue": cloneModelValue.value,
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return cloneModelValue.value = $event;
          },
          "class": ['inputNumber', props.config.controls !== true ? styles$1.noControls : null],
          "placeholder": props.config.placeholderStart || props.config.placeholder || "\u8BF7\u9009\u62E9".concat((_props$config$label = (_props$config3 = props.config) === null || _props$config3 === void 0 ? void 0 : _props$config3.label) !== null && _props$config$label !== void 0 ? _props$config$label : ''),
          "disabled": !!props.config.disabled,
          "controls": props.config.controls === true
        }, props.config.nativeProps, {
          "onInput": updateValue
        }), null), vue.createVNode("span", {
          "style": "padding: 0 5px;"
        }, [vue.createTextVNode("~")]), vue.createVNode(formItem, {
          "style": "margin: 0;flex: 1;display: flex;"
        }, {
          default: function _default() {
            return [vue.createVNode(dynamicNumber, vue.mergeProps({
              "style": {
                flex: 1
              },
              "modelValue": clonePropEnd.value,
              "onUpdate:modelValue": function onUpdateModelValue($event) {
                return clonePropEnd.value = $event;
              },
              "class": ['inputNumber', props.config.controls !== true ? styles$1.noControls : null],
              "placeholder": props.config.placeholderEnd || props.config.placeholder || "\u8BF7\u9009\u62E9".concat((_props$config$label2 = (_props$config4 = props.config) === null || _props$config4 === void 0 ? void 0 : _props$config4.label) !== null && _props$config$label2 !== void 0 ? _props$config$label2 : ''),
              "disabled": !!props.config.disabled,
              "controls": props.config.controls === true
            }, props.config.nativeProps, {
              "onInput": updateEndValue
            }), null)];
          }
        })]);
      };
    }
  });

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
      }, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
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
        treeForeach(options.value, function (node) {
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
        var dynamicComponent = new CustomDynamicComponent();
        var dynamicCascader = dynamicComponent.dynamicCascader;
        return vue.createVNode("div", {
          "class": ['BsCascader', styles$1.width100]
        }, [vue.createVNode(dynamicCascader, vue.mergeProps({
          "class": [styles$1.width100],
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

  var switchC = vue.defineComponent({
    name: 'BsSwitch',
    props: {
      modelValue: {
        type: [String, Number, Boolean],
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
      var _CustomDynamicCompone = new CustomDynamicComponent(),
        dynamicSwitch = _CustomDynamicCompone.dynamicSwitch;
      function updateValue(value) {
        var _props$config$prop, _props$config;
        emit('update:modelValue', value);
        emit('change', {
          prop: (_props$config$prop = (_props$config = props.config) === null || _props$config === void 0 ? void 0 : _props$config.prop) !== null && _props$config$prop !== void 0 ? _props$config$prop : '',
          value: value
        });
      }
      return function () {
        return vue.createVNode("div", {
          "class": ['BsSwitch', styles$1.width100]
        }, [vue.createVNode(dynamicSwitch, vue.mergeProps({
          "class": "switch",
          "model-value": props.modelValue,
          "checked": props.modelValue,
          "disabled": !!props.config.disabled,
          "clearable": props.config.clearable !== false
        }, props.config.nativeProps, {
          "onChange": updateValue
        }), null)]);
      };
    }
  });

  /*
   * @Author: 陈宇环
   * @Date: 2022-12-18 10:35:57
   * @LastEditTime: 2023-06-14 10:36:42
   * @LastEditors: 陈宇环
   * @Description: 普通文本节点
   *               文本内容取值为  绑定formData的值
   */
  var text = vue.defineComponent({
    name: 'BsText',
    inheritAttrs: false,
    props: {
      modelValue: {
        type: [Number, String, Array, Object, Boolean],
        default: undefined
      },
      config: {
        type: Object,
        default: function _default() {
          return {};
        }
      }
    },
    setup: function setup(props) {
      return function () {
        var _props$modelValue;
        return (_props$modelValue = props.modelValue) !== null && _props$modelValue !== void 0 ? _props$modelValue : props.config.defaultText;
      };
    }
  });

  // 组件注册
  var getComponentByType = function getComponentByType(item) {
    switch (item.type) {
      case 'input':
        return input;
      case 'textarea':
        return BsTextarea;
      case 'password':
        return BsPasswod;
      case 'number':
        return number;
      case 'select':
        return select;
      case 'radio':
        return radio;
      case 'checkbox':
        return checkbox;
      case 'year':
      case 'month':
      case 'week':
      case 'date':
      case 'datetime':
      case 'dates':
        return date;
      case 'yearRange':
      case 'monthRange':
      case 'dateRange':
      case 'weekRange':
      case 'datetimeRange':
        return dateRange;
      case 'numberRange':
        return numberRange;
      case 'cascader':
        return cascader;
      case 'switch':
        return switchC;
      case 'text':
        return text;
      default:
        return input;
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

      var cloneConfig = vue.reactive(_objectSpread2(_objectSpread2({}, defaultConfig), props.config));
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
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var cloneInitForm;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
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
                initForm.value = _objectSpread2(_objectSpread2({}, props.modelValue), cloneInitForm);
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
            }].concat(_toConsumableArray(item.inlayRules ? item.inlayRules.map(function (item) {
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
            }) : []), _toConsumableArray(item.rules ? item.rules : []));
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
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve) {
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
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
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(prop) {
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(resolve) {
                    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
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
        var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(prop) {
          var _ruleFormRef$value;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
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
        var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(prop) {
          var _ruleFormRef$value2;
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
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
        var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(field) {
          var _ruleFormRef$value3;
          return _regeneratorRuntime().wrap(function _callee8$(_context8) {
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
        var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
          var verify;
          return _regeneratorRuntime().wrap(function _callee9$(_context9) {
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
        var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
          var verify;
          return _regeneratorRuntime().wrap(function _callee10$(_context10) {
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
        var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
          return _regeneratorRuntime().wrap(function _callee11$(_context11) {
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
        var dynamicComponent = new CustomDynamicComponent();
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
                        "prop": CustomDynamicComponent.language === CustomDynamicComponent.antLanguage ? undefined : item.prop,
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

  /*
   * @Author: 陈宇环
   * @Date: 2023-05-26 11:48:21
   * @LastEditTime: 2023-07-03 15:16:48
   * @LastEditors: 陈宇环
   * @Description:
   */
  cascader.install = function (Vue) {
    Vue.component(cascader.name, cascader);
  };
  var BsCascader = cascader;

  /*
   * @Author: 陈宇环
   * @Date: 2023-05-26 11:48:21
   * @LastEditTime: 2023-07-03 15:18:10
   * @LastEditors: 陈宇环
   * @Description:
   */
  checkbox.install = function (Vue) {
    Vue.component(checkbox.name, checkbox);
  };
  var BsCheckbox = checkbox;

  /*
   * @Author: 陈宇环
   * @Date: 2023-05-26 11:48:21
   * @LastEditTime: 2023-07-03 15:20:37
   * @LastEditors: 陈宇环
   * @Description:
   */
  date.install = function (Vue) {
    Vue.component(date.name, date);
  };
  var BsDate = date;

  /*
   * @Author: 陈宇环
   * @Date: 2023-05-26 11:48:21
   * @LastEditTime: 2023-07-03 15:21:28
   * @LastEditors: 陈宇环
   * @Description:
   */
  dateRange.install = function (Vue) {
    Vue.component(dateRange.name, dateRange);
  };
  var BsDateRange = dateRange;

  input.install = function (Vue) {
    Vue.component(input.name, input);
  };
  var BsInput = input;

  number.install = function (Vue) {
    Vue.component(number.name, number);
  };
  var BsNumber = number;

  numberRange.install = function (Vue) {
    Vue.component(numberRange.name, numberRange);
  };
  var BsNumberRange = numberRange;

  radio.install = function (Vue) {
    Vue.component(radio.name, radio);
  };
  var BsRadio = radio;

  select.install = function (Vue) {
    Vue.component(select.name, select);
  };
  var BsSelect = select;

  switchC.install = function (Vue) {
    Vue.component(switchC.name, switchC);
  };
  var BsSwitch = switchC;

  text.install = function (Vue) {
    Vue.component(text.name, text);
  };
  var BsText = text;

  var BsTableItem = vue.defineComponent({
    name: 'BsTableItem',
    components: {},
    props: {
      itemData: {
        type: Object,
        default: function _default() {
          return {
            prop: 'prop',
            label: 'label'
          };
        }
      }
    },
    setup: function setup(props) {
      var _toRefs = vue.toRefs(props),
        itemData = _toRefs.itemData;
      var dynamicComponent = new CustomDynamicComponent();
      var dynamicTableColumn = dynamicComponent.dynamicTableColumn;
      // 多级头递归
      var childrenDom = itemData.value.children && itemData.value.children.length > 0 ? itemData.value.children.map(function (item, index) {
        return vue.createVNode(BsTableItem, {
          "key": item.prop ? item.prop : '' + index,
          "item-data": item
        }, null);
      }) : null;
      return function () {
        // 序号
        if (itemData.value.type && itemData.value.type === 'index') {
          return vue.createVNode(dynamicTableColumn, vue.mergeProps({
            "type": "index",
            "width": itemData.value.width,
            "min-width": itemData.value.minWidth,
            "align": itemData.value.align ? itemData.value.align : 'center',
            "fixed": itemData.value.fixed ? itemData.value.fixed : false
          }, itemData.value.nativeProps), null);
        }
        // const itemDataProps: columnsItemConfig = _.cloneDeep(itemData.value)
        // 解决element-ui报错问题
        itemData.value.children = undefined;
        return vue.createVNode(dynamicTableColumn, vue.mergeProps({
          "prop": itemData.value.prop,
          "label": itemData.value.label,
          "width": itemData.value.width,
          "min-width": itemData.value.minWidth,
          "align": itemData.value.align ? itemData.value.align : 'center',
          "fixed": itemData.value.fixed ? itemData.value.fixed : false
        }, itemData.value.nativeProps), {
          default: function _default(scope) {
            return vue.createVNode(vue.Fragment, null, [itemData.value.render ? typeof itemData.value.render === 'function' ? itemData.value.render(scope) : itemData.value.render : scope.row[itemData.value.prop], childrenDom]);
          }
        });
      };
    }
  });

  var styles = {"table":"style-module_table__GWlq8","rowRadio":"style-module_rowRadio__r34-P","BsTable":"style-module_BsTable__qrv-k"};

  var table = vue.defineComponent({
    name: 'BsTable',
    components: {},
    props: {
      tableConfig: {
        type: Object,
        default: function _default() {
          return {}; // 默认值请看defaultTableConfig
        }
      },

      pagingConfig: {
        type: Object,
        default: function _default() {
          return {}; // 默认值请看defaultPagingConfig
        }
      },

      columns: {
        type: Array,
        required: true,
        default: function _default() {
          return [];
        }
      },
      loadData: {
        type: Function,
        required: true,
        default: function _default() {
          return function () {
            return new Promise(function (resolve) {
              resolve({
                list: [],
                total: 0
              });
            });
          };
        }
      }
    },
    setup: function setup(props, _ref) {
      var expose = _ref.expose;
      var _toRefs = vue.toRefs(props),
        loadData = _toRefs.loadData,
        columns = _toRefs.columns;
      var defaultTableConfig = {
        ifInitLoadData: true,
        rowKey: 'id',
        border: true,
        stripe: true
      };
      /**
       * 当ui切换为ant-Design-vue时，转为columns为ant-Design-vue的columns格式 start
       * @param data columns数据
       */
      var changeTableColumns = function changeTableColumns(data) {
        var arr = _toConsumableArray(data);
        arr.forEach(function (v) {
          v.title = v.label;
          if (v.children && v.children.length) {
            changeTableColumns(v.children);
          } else {
            v.dataIndex = v.prop;
          }
        });
      };
      if (CustomDynamicComponent.language === CustomDynamicComponent.antLanguage) {
        changeTableColumns(columns.value);
      }
      /**
       * 当ui切换为ant时，转为columns为ant-Design-vue的columns格式 end
       * @param data columns数据
       */
      var cloneTableConfig = vue.reactive(_objectSpread2(_objectSpread2({}, defaultTableConfig), props.tableConfig));
      vue.watch(function () {
        return props.tableConfig;
      }, function () {
        Object.assign(cloneTableConfig, defaultTableConfig, props.tableConfig);
      }, {
        immediate: true,
        deep: true
      });
      var defaultPagingConfig = {
        open: true,
        pageIndex: 1,
        pageSize: 10,
        total: 0,
        layout: 'total, sizes, prev, pager, next',
        // ant-ui相关
        showTotal: function showTotal(total) {
          return "\u5171 ".concat(total, " \u6761");
        },
        showSizeChanger: true
      };
      var clonePagingConfig = vue.reactive(_objectSpread2(_objectSpread2({}, defaultPagingConfig), props.pagingConfig));
      vue.watch(function () {
        return props.pagingConfig;
      }, function () {
        Object.assign(clonePagingConfig, defaultPagingConfig, props.pagingConfig);
      }, {
        immediate: true,
        deep: true
      });
      var tableDom = vue.ref(null);
      var radio = vue.ref(undefined);
      var loading = vue.ref(false);
      var pageInfo = vue.reactive({
        pageIndex: clonePagingConfig.pageIndex,
        pageSize: clonePagingConfig.pageSize,
        total: clonePagingConfig.total
      });
      var list = vue.ref([]);
      var getList = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var _ref3,
            _ref3$pageIndex,
            pageIndex,
            _ref3$pageSize,
            pageSize,
            result,
            _args = arguments;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _ref3 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, _ref3$pageIndex = _ref3.pageIndex, pageIndex = _ref3$pageIndex === void 0 ? pageInfo.pageIndex : _ref3$pageIndex, _ref3$pageSize = _ref3.pageSize, pageSize = _ref3$pageSize === void 0 ? pageInfo.pageSize : _ref3$pageSize;
                _context.prev = 1;
                loading.value = true;
                _context.next = 5;
                return loadData.value({
                  pageIndex: pageIndex,
                  pageSize: pageSize
                });
              case 5:
                result = _context.sent;
                loading.value = false;
                if (result.success) {
                  list.value = result.list;
                  pageInfo.total = result.total;
                }
                pageInfo.pageIndex = pageIndex;
                pageInfo.pageSize = pageSize;
                _context.next = 15;
                break;
              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);
              case 15:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[1, 12]]);
        }));
        return function getList() {
          return _ref2.apply(this, arguments);
        };
      }();
      expose({
        getList: getList
      });
      vue.onMounted(function () {
        if (cloneTableConfig.ifInitLoadData) {
          getList();
        }
      });
      // 分页size变化
      var handleSizeChange = function handleSizeChange(val) {
        console.log("".concat(val, " items per page"));
        pageInfo.pageIndex = 1;
        pageInfo.pageSize = val;
        clonePagingConfig.pageSizeChange && clonePagingConfig.pageSizeChange(val);
        getList();
      };
      // 当前页变化
      var handleCurrentChange = function handleCurrentChange(val) {
        console.log("current page: ".concat(val));
        pageInfo.pageIndex = val;
        clonePagingConfig.pageIndexChange && clonePagingConfig.pageIndexChange(val);
        getList();
      };
      // 勾选事件
      var handleSelectionChange = function handleSelectionChange(selection) {
        console.log('table-handleSelectionChange', selection);
        if (cloneTableConfig.rowSelection && cloneTableConfig.rowSelection.onChange) {
          cloneTableConfig.rowSelection.onChange(selection);
        }
      };
      return function () {
        var dynamicComponent = new CustomDynamicComponent();
        var dynamicTable = dynamicComponent.dynamicTable,
          dynamicTableColumn = dynamicComponent.dynamicTableColumn,
          dynamicRadio = dynamicComponent.dynamicRadio,
          dynamicPagination = dynamicComponent.dynamicPagination;
        return vue.createVNode("div", {
          "class": [styles.BsTable]
        }, [vue.withDirectives(vue.createVNode(dynamicTable, vue.mergeProps({
          "height": "100%",
          "ref": tableDom,
          "class": [styles.table],
          "data": list.value,
          "columns": columns.value,
          "data-source": list.value,
          "style": {
            maxWidth: '100%'
          },
          "row-key": cloneTableConfig.rowKey,
          "pagination": false
        }, cloneTableConfig.nativeProps, {
          "onSelectionChange": function onSelectionChange(val) {
            return handleSelectionChange(val);
          }
        }), {
          default: function _default() {
            return [CustomDynamicComponent.language === CustomDynamicComponent.eleLanguage ? vue.createVNode(vue.Fragment, null, [cloneTableConfig.rowSelection && cloneTableConfig.rowSelection.type === 'checkout' ? vue.createVNode(dynamicTableColumn, {
              "type": "selection",
              "align": "center",
              "selectable": function selectable(row, index) {
                var _cloneTableConfig$row, _cloneTableConfig$row2;
                return (_cloneTableConfig$row = cloneTableConfig.rowSelection) !== null && _cloneTableConfig$row !== void 0 && _cloneTableConfig$row.selectable ? (_cloneTableConfig$row2 = cloneTableConfig.rowSelection) === null || _cloneTableConfig$row2 === void 0 ? void 0 : _cloneTableConfig$row2.selectable(row, index) : true;
              }
            }, null) : null, cloneTableConfig.rowSelection && cloneTableConfig.rowSelection.type === 'radio' ? vue.createVNode(dynamicTableColumn, {
              "label": "",
              "align": "center",
              "width": "60",
              "fixed": true
            }, {
              default: function _default(scope, column, index) {
                var _cloneTableConfig$row3, _cloneTableConfig$row4;
                return vue.createVNode("div", {
                  "style": {
                    textAlign: 'center'
                  }
                }, [vue.createVNode(dynamicRadio, {
                  "disabled": (_cloneTableConfig$row3 = cloneTableConfig.rowSelection) !== null && _cloneTableConfig$row3 !== void 0 && _cloneTableConfig$row3.selectable ? !((_cloneTableConfig$row4 = cloneTableConfig.rowSelection) !== null && _cloneTableConfig$row4 !== void 0 && _cloneTableConfig$row4.selectable(scope.row, index)) : false,
                  "class": [styles.rowRadio],
                  "modelValue": radio.value,
                  "onUpdate:modelValue": function onUpdateModelValue($event) {
                    return radio.value = $event;
                  },
                  "label": scope.row[cloneTableConfig.rowKey ? cloneTableConfig.rowKey : 'id'],
                  "onChange": function onChange(val) {
                    return handleSelectionChange(val);
                  }
                }, null)]);
              }
            }) : null, columns.value.map(function (item, index) {
              return (// 递归组件
                vue.createVNode(BsTableItem, {
                  "key": item.prop ? item.prop : '' + index,
                  "item-data": item
                }, null)
              );
            })]) : null];
          }
        }), [[vue.resolveDirective("loading"), loading.value]]), clonePagingConfig.open && vue.createVNode("div", {
          "style": {
            display: 'flex',
            justifyContent: 'center',
            padding: '15px 0'
          }
        }, [vue.createVNode(dynamicPagination, vue.mergeProps({
          "current-page": pageInfo.pageIndex,
          "page-size": pageInfo.pageSize,
          "layout": defaultPagingConfig.layout,
          "total": pageInfo.total,
          "background": true
        }, clonePagingConfig.nativeProps, {
          "onSizeChange": function onSizeChange(val) {
            return handleSizeChange(val);
          },
          "onCurrentChange": function onCurrentChange(val) {
            return handleCurrentChange(val);
          },
          "current": pageInfo.pageIndex,
          "onShowSizeChange": function onShowSizeChange(current, size) {
            return handleSizeChange(size);
          },
          "onChange": function onChange(page) {
            return handleCurrentChange(page);
          }
        }), null)])]);
      };
    }
  });

  table.install = function (Vue) {
    Vue.component(table.name, BsTable);
  };
  var BsTable = table;

  var button = vue.defineComponent({
    name: 'BsButtons',
    props: {
      buttons: {
        type: Array,
        default: function _default() {
          return [];
        }
      }
    },
    setup: function setup(props) {
      var loading = vue.ref(false);
      var dynamicComponent = new CustomDynamicComponent();
      var dynamicButton = dynamicComponent.dynamicButton,
        dynamicPopconfirm = dynamicComponent.dynamicPopconfirm;
      return function () {
        var buttonDom = function buttonDom(button) {
          var _button$type, _button$size, _button$text;
          return vue.createVNode(dynamicButton, vue.mergeProps({
            "type": (_button$type = button.type) !== null && _button$type !== void 0 ? _button$type : 'primary',
            "size": (_button$size = button.size) !== null && _button$size !== void 0 ? _button$size : 'small',
            "disabled": button.disabled,
            "loading": loading.value
          }, button.nativeProps, {
            "onClick": /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    loading.value = true;
                    _context.t0 = !button.confirmConfig && button.click;
                    if (!_context.t0) {
                      _context.next = 5;
                      break;
                    }
                    _context.next = 5;
                    return button.click();
                  case 5:
                    loading.value = false;
                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }))
          }), {
            default: function _default() {
              return [(_button$text = button.text) !== null && _button$text !== void 0 ? _button$text : '文案'];
            }
          });
        };
        return vue.createVNode("div", {
          "style": "display: flex"
        }, [props.buttons.map(function (button) {
          if (button.show === false) {
            return null;
          }
          if (button.confirmConfig && !button.disabled) {
            var _button$confirmConfig, _button$confirmConfig2, _button$confirmConfig3;
            return vue.createVNode(dynamicPopconfirm, vue.mergeProps({
              "title": (_button$confirmConfig = button === null || button === void 0 || (_button$confirmConfig2 = button.confirmConfig) === null || _button$confirmConfig2 === void 0 ? void 0 : _button$confirmConfig2.title) !== null && _button$confirmConfig !== void 0 ? _button$confirmConfig : '标题',
              "confirm-button-text": "\u786E\u8BA4",
              "okText": "\u786E\u8BA4",
              "cancel-button-text": "\u53D6\u6D88",
              "cancelText": "\u53D6\u6D88"
            }, button === null || button === void 0 || (_button$confirmConfig3 = button.confirmConfig) === null || _button$confirmConfig3 === void 0 ? void 0 : _button$confirmConfig3.nativeProps, {
              "onConfirm": function onConfirm() {
                var _button$confirmConfig4;
                if (button !== null && button !== void 0 && (_button$confirmConfig4 = button.confirmConfig) !== null && _button$confirmConfig4 !== void 0 && _button$confirmConfig4.confirm) {
                  var _button$confirmConfig5;
                  button === null || button === void 0 || (_button$confirmConfig5 = button.confirmConfig) === null || _button$confirmConfig5 === void 0 ? void 0 : _button$confirmConfig5.confirm();
                } else if (button.click) {
                  button === null || button === void 0 ? void 0 : button.click();
                }
              },
              "onCancel": function onCancel() {
                var _button$confirmConfig6, _button$confirmConfig7;
                (button === null || button === void 0 || (_button$confirmConfig6 = button.confirmConfig) === null || _button$confirmConfig6 === void 0 ? void 0 : _button$confirmConfig6.cancel) && (button === null || button === void 0 || (_button$confirmConfig7 = button.confirmConfig) === null || _button$confirmConfig7 === void 0 ? void 0 : _button$confirmConfig7.cancel());
              }
            }), {
              reference: function reference() {
                return buttonDom(button);
              },
              default: function _default() {
                return buttonDom(button);
              }
            });
          }
          return buttonDom(button);
        })]);
      };
    }
  });

  button.install = function (Vue) {
    Vue.component(button.name, button);
  };
  var BsButtons = button;

  var components = [form, cascader, checkbox, date, dateRange, input, number, numberRange, radio, select, switchC, text, table, button]; // 组件集合
  var install = function install(Vue) {
    // 注册所有的组件
    components.forEach(function (item) {
      Vue.component(item.name, item);
    });
  };
  // 如果是直接引入文件,就不用调用Vue.use()
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  exports.BsButtons = BsButtons;
  exports.BsCascader = BsCascader;
  exports.BsCheckbox = BsCheckbox;
  exports.BsDate = BsDate;
  exports.BsDateRange = BsDateRange;
  exports.BsForm = BsForm;
  exports.BsInput = BsInput;
  exports.BsNumber = BsNumber;
  exports.BsNumberRange = BsNumberRange;
  exports.BsRadio = BsRadio;
  exports.BsSelect = BsSelect;
  exports.BsSwitch = BsSwitch;
  exports.BsTable = BsTable;
  exports.BsText = BsText;
  exports.default = install;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({}, vue);
//# sourceMappingURL=index.js.map
