import { _ as _asyncToGenerator, a as _regeneratorRuntime } from '../chunkFile/asyncToGenerator-f5c1778f.js';
import { _ as _objectSpread2 } from '../chunkFile/objectSpread2-7fc5c147.js';
import { _ as _toConsumableArray } from '../chunkFile/toConsumableArray-7dac271c.js';
import { defineComponent, toRefs, createVNode, mergeProps, Fragment, reactive, watch, ref, onMounted, withDirectives, resolveDirective } from 'vue';
import { C as CustomDynamicComponent } from '../chunkFile/CustomDynamicComponent-a59fbdbf.js';

var BsTableItem = defineComponent({
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
    var _toRefs = toRefs(props),
      itemData = _toRefs.itemData;
    var dynamicComponent = new CustomDynamicComponent();
    var dynamicTableColumn = dynamicComponent.dynamicTableColumn;
    // 多级头递归
    var childrenDom = itemData.value.children && itemData.value.children.length > 0 ? itemData.value.children.map(function (item, index) {
      return createVNode(BsTableItem, {
        "key": item.prop ? item.prop : '' + index,
        "item-data": item
      }, null);
    }) : null;
    return function () {
      // 序号
      if (itemData.value.type && itemData.value.type === 'index') {
        return createVNode(dynamicTableColumn, mergeProps({
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
      return createVNode(dynamicTableColumn, mergeProps({
        "prop": itemData.value.prop,
        "label": itemData.value.label,
        "width": itemData.value.width,
        "min-width": itemData.value.minWidth,
        "align": itemData.value.align ? itemData.value.align : 'center',
        "fixed": itemData.value.fixed ? itemData.value.fixed : false
      }, itemData.value.nativeProps), {
        default: function _default(scope) {
          return createVNode(Fragment, null, [itemData.value.render ? typeof itemData.value.render === 'function' ? itemData.value.render(scope) : itemData.value.render : scope.row[itemData.value.prop], childrenDom]);
        }
      });
    };
  }
});

var styles = {"table":"style-module_table__GWlq8","rowRadio":"style-module_rowRadio__r34-P","BsTable":"style-module_BsTable__qrv-k"};

var table = defineComponent({
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
    var _toRefs = toRefs(props),
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
    var cloneTableConfig = reactive(_objectSpread2(_objectSpread2({}, defaultTableConfig), props.tableConfig));
    watch(function () {
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
    var clonePagingConfig = reactive(_objectSpread2(_objectSpread2({}, defaultPagingConfig), props.pagingConfig));
    watch(function () {
      return props.pagingConfig;
    }, function () {
      Object.assign(clonePagingConfig, defaultPagingConfig, props.pagingConfig);
    }, {
      immediate: true,
      deep: true
    });
    var tableDom = ref(null);
    var radio = ref(undefined);
    var loading = ref(false);
    var pageInfo = reactive({
      pageIndex: clonePagingConfig.pageIndex,
      pageSize: clonePagingConfig.pageSize,
      total: clonePagingConfig.total
    });
    var list = ref([]);
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
    onMounted(function () {
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
      return createVNode("div", {
        "class": [styles.BsTable]
      }, [withDirectives(createVNode(dynamicTable, mergeProps({
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
          return [CustomDynamicComponent.language === CustomDynamicComponent.eleLanguage ? createVNode(Fragment, null, [cloneTableConfig.rowSelection && cloneTableConfig.rowSelection.type === 'checkout' ? createVNode(dynamicTableColumn, {
            "type": "selection",
            "align": "center",
            "selectable": function selectable(row, index) {
              var _cloneTableConfig$row, _cloneTableConfig$row2;
              return (_cloneTableConfig$row = cloneTableConfig.rowSelection) !== null && _cloneTableConfig$row !== void 0 && _cloneTableConfig$row.selectable ? (_cloneTableConfig$row2 = cloneTableConfig.rowSelection) === null || _cloneTableConfig$row2 === void 0 ? void 0 : _cloneTableConfig$row2.selectable(row, index) : true;
            }
          }, null) : null, cloneTableConfig.rowSelection && cloneTableConfig.rowSelection.type === 'radio' ? createVNode(dynamicTableColumn, {
            "label": "",
            "align": "center",
            "width": "60",
            "fixed": true
          }, {
            default: function _default(scope, column, index) {
              var _cloneTableConfig$row3, _cloneTableConfig$row4;
              return createVNode("div", {
                "style": {
                  textAlign: 'center'
                }
              }, [createVNode(dynamicRadio, {
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
              createVNode(BsTableItem, {
                "key": item.prop ? item.prop : '' + index,
                "item-data": item
              }, null)
            );
          })]) : null];
        }
      }), [[resolveDirective("loading"), loading.value]]), clonePagingConfig.open && createVNode("div", {
        "style": {
          display: 'flex',
          justifyContent: 'center',
          padding: '15px 0'
        }
      }, [createVNode(dynamicPagination, mergeProps({
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

export { BsTable, table as default };
//# sourceMappingURL=index.js.map
