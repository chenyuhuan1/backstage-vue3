import { _ as _asyncToGenerator, a as _regeneratorRuntime } from '../chunkFile/asyncToGenerator-abb93505.js';
import { defineComponent, ref, createVNode, mergeProps } from 'vue';
import { C as CustomDynamicComponent } from '../chunkFile/CustomDynamicComponent-410630ef.js';

var button = defineComponent({
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
    var loading = ref(false);
    var dynamicComponent = new CustomDynamicComponent();
    var dynamicButton = dynamicComponent.dynamicButton,
      dynamicPopconfirm = dynamicComponent.dynamicPopconfirm;
    return function () {
      var buttonDom = function buttonDom(button) {
        var _button$type, _button$size, _button$text;
        return createVNode(dynamicButton, mergeProps({
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
      return createVNode("div", {
        "style": "display: flex"
      }, [props.buttons.map(function (button) {
        if (button.show === false) {
          return null;
        }
        if (button.confirmConfig && !button.disabled) {
          var _button$confirmConfig, _button$confirmConfig2, _button$confirmConfig3;
          return createVNode(dynamicPopconfirm, mergeProps({
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

export { BsButtons, button as default };
//# sourceMappingURL=index.js.map
