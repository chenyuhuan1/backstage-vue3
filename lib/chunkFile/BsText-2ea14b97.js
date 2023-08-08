'use strict';

var vue = require('vue');

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

exports.text = text;
//# sourceMappingURL=BsText-2ea14b97.js.map
