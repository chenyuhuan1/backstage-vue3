"use strict";(self["webpackChunkbackstage_vue3"]=self["webpackChunkbackstage_vue3"]||[]).push([[429],{4064:function(e,a,n){var t=n(2160),o=n(6866),i=n(6623),l={},r=o.defineComponent({name:"BsButtons",props:{buttons:{type:Array,default:function(){return[]}}},setup:function(e){var a=o.ref(!1),n=new i.CustomDynamicComponent,r=n.dynamicButton,u=n.dynamicPopconfirm;return function(){var n=function(e){var n,i,l;return o.createVNode(r,o.mergeProps({type:null!==(n=e.type)&&void 0!==n?n:"primary",size:null!==(i=e.size)&&void 0!==i?i:"small",disabled:e.disabled,loading:a.value},e.nativeProps,{onClick:t._asyncToGenerator(t._regeneratorRuntime().mark((function n(){return t._regeneratorRuntime().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a.value=!0,n.t0=!e.confirmConfig&&e.click,!n.t0){n.next=5;break}return n.next=5,e.click();case 5:a.value=!1;case 6:case"end":return n.stop()}}),n)})))}),{default:function(){return[null!==(l=e.text)&&void 0!==l?l:"文案"]}})};return o.createVNode("div",{class:[l.BsTable,"bs-buttons"],style:"display: flex"},[e.buttons.map((function(e){return!1===e.show?null:e.confirmConfig&&!e.disabled?o.createVNode(u,o.mergeProps({title:null!==(a=null===e||void 0===e||null===(t=e.confirmConfig)||void 0===t?void 0:t.title)&&void 0!==a?a:"标题","confirm-button-text":"确认",okText:"确认","cancel-button-text":"取消",cancelText:"取消"},null===e||void 0===e||null===(i=e.confirmConfig)||void 0===i?void 0:i.nativeProps,{onConfirm:function(){var a,n;null!==e&&void 0!==e&&null!==(a=e.confirmConfig)&&void 0!==a&&a.confirm?null===e||void 0===e||null===(n=e.confirmConfig)||void 0===n||n.confirm():e.click&&(null===e||void 0===e||e.click())},onCancel:function(){var a,n;(null===e||void 0===e||null===(a=e.confirmConfig)||void 0===a?void 0:a.cancel)&&(null===e||void 0===e||null===(n=e.confirmConfig)||void 0===n||n.cancel())}}),{reference:function(){return n(e)},default:function(){return n(e)}}):n(e);var a,t,i}))])}}});r.install=function(e){e.component(r.name,r)};var u=r;a.ZP=r},6906:function(e,a,n){var t=n(4126);n(3978),n(1661),n(2160),n(6623),n(6866),n(229),n(3602),n(1146),n(186),n(5918),n(3773),n(7300),n(9640),n(6999),n(6289),n(7576),n(5936),n(1245),n(1944),n(8395),n(8010),n(2059),n(7088),n(3331),t.BsForm.install=function(e){e.component(t.BsForm.name,t.BsForm)};var o=t.BsForm;a.ZP=t.BsForm},3159:function(e,a,n){var t=n(7342);n(2160),n(6623),n(6866),n(3978),n(1661),t.BsTable.install=function(e){e.component(t.BsTable.name,o)};var o=t.BsTable;a.ZP=t.BsTable},7342:function(e,a,n){var t=n(2160),o=n(3978),i=n(6866),l=n(6623),r=i.defineComponent({name:"BsTableItem",components:{},props:{itemData:{type:Object,default:function(){return{prop:"prop",label:"label"}}}},setup:function(e){var a=i.toRefs(e),n=a.itemData,t=new l.CustomDynamicComponent,o=t.dynamicTableColumn,u=n.value.children&&n.value.children.length>0?n.value.children.map((function(e,a){return i.createVNode(r,{key:e.prop?e.prop:""+a,"item-data":e},null)})):null;return function(){return n.value.type&&"index"===n.value.type?i.createVNode(o,i.mergeProps({type:"index",width:n.value.width,"min-width":n.value.minWidth,align:n.value.align?n.value.align:"center",fixed:!!n.value.fixed&&n.value.fixed},n.value.nativeProps),null):(n.value.children=void 0,i.createVNode(o,i.mergeProps({prop:n.value.prop,label:n.value.label,width:n.value.width,"min-width":n.value.minWidth,align:n.value.align?n.value.align:"center",fixed:!!n.value.fixed&&n.value.fixed},n.value.nativeProps),{default:function(e){return i.createVNode(i.Fragment,null,[n.value.render?"function"===typeof n.value.render?n.value.render(e):n.value.render:e.row[n.value.prop],u])}}))}}}),u={BsTable:"style-module_BsTable__qrv-k",table:"style-module_table__GWlq8",rowRadio:"style-module_rowRadio__r34-P"},c=i.defineComponent({name:"BsTable",components:{},props:{tableConfig:{type:Object,default:function(){return{}}},pagingConfig:{type:Object,default:function(){return{}}},columns:{type:Array,required:!0,default:function(){return[]}},loadData:{type:Function,required:!0,default:function(){return function(){return new Promise((function(e){e({list:[],total:0})}))}}}},setup:function(e,a){var n=a.expose,c=i.toRefs(e),s=c.loadData,f=c.columns,d={ifInitLoadData:!0,rowKey:"id",nativeProps:{border:!0,stripe:!0}},p=function e(a){var n=o._toConsumableArray(a);n.forEach((function(a){a.title=a.label,a.children&&a.children.length?e(a.children):a.dataIndex=a.prop}))};l.CustomDynamicComponent.language===l.CustomDynamicComponent.antLanguage&&p(f.value);var m=i.reactive(o.merge(d,e.tableConfig));i.watch((function(){return e.tableConfig}),(function(){o.merge(m,d,e.tableConfig)}),{immediate:!0,deep:!0});var v={open:!0,pageIndex:1,pageSize:10,total:0,nativeProps:{layout:"total, sizes, prev, pager, next",showTotal:function(e){return"共 ".concat(e," 条")},showSizeChanger:!0}},g=i.reactive(o.merge(v,e.pagingConfig));i.watch((function(){return e.pagingConfig}),(function(){o.merge(g,v,e.pagingConfig)}),{immediate:!0,deep:!0});var D=i.ref(),h=i.ref(void 0),b=i.ref(!1),y=i.reactive({pageIndex:g.pageIndex,pageSize:g.pageSize,total:g.total}),C=i.ref([]),w=function(){var e=t._asyncToGenerator(t._regeneratorRuntime().mark((function e(){var a,n,o,i,l,r,u=arguments;return t._regeneratorRuntime().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=u.length>0&&void 0!==u[0]?u[0]:{},n=a.pageIndex,o=void 0===n?y.pageIndex:n,i=a.pageSize,l=void 0===i?y.pageSize:i,e.prev=1,b.value=!0,e.next=5,s.value({pageIndex:o,pageSize:l});case 5:r=e.sent,r.success&&(C.value=r.list,y.total=r.total),y.pageIndex=o,y.pageSize=l,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),console.log(e.t0);case 14:return e.prev=14,b.value=!1,e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}();i.onMounted((function(){m.ifInitLoadData&&w()}));var x=function(e){console.log("".concat(e," items per page")),y.pageIndex=1,y.pageSize=e,g.pageSizeChange&&g.pageSizeChange(e),w()},S=function(e){console.log("current page: ".concat(e)),y.pageIndex=e,g.pageIndexChange&&g.pageIndexChange(e),w()},T=i.ref([]),P=function(e){console.log("table-handleSelectionChange",e),T.value=e,m.rowSelection&&m.rowSelection.onChange&&m.rowSelection.onChange(e)},k=function(){T.value=[],D.value.clearSelection(),m.rowSelection&&m.rowSelection.onChange&&m.rowSelection.onChange([])},_=function(e){C.value=e};return n({tableDom:D,list:C,selectedRow:T,getList:w,setList:_,clearSelection:k}),function(){var e=new l.CustomDynamicComponent,a=e.dynamicTable,n=e.dynamicTableColumn,t=e.dynamicRadio,o=e.dynamicPagination;return i.createVNode("div",{class:["bs-table",u.BsTable]},[i.withDirectives(i.createVNode(a,i.mergeProps({height:"100%",ref:D,class:[u.table],data:C.value,columns:f.value,"data-source":C.value,style:{maxWidth:"100%"},"row-key":m.rowKey,pagination:!1},m.nativeProps,{onSelectionChange:function(e){return P(e)}}),{default:function(){return[l.CustomDynamicComponent.language===l.CustomDynamicComponent.eleLanguage?i.createVNode(i.Fragment,null,[m.rowSelection&&"checkout"===m.rowSelection.type?i.createVNode(n,{type:"selection",align:"center",selectable:function(e,a){var n,t;return null===(n=m.rowSelection)||void 0===n||!n.selectable||(null===(t=m.rowSelection)||void 0===t?void 0:t.selectable(e,a))}},null):null,m.rowSelection&&"radio"===m.rowSelection.type?i.createVNode(n,{label:"",align:"center",width:"60",fixed:!0},{default:function(e,a,n){var o,l;return i.createVNode("div",{style:{textAlign:"center"}},[i.createVNode(t,{disabled:!(null===(o=m.rowSelection)||void 0===o||!o.selectable)&&!(null!==(l=m.rowSelection)&&void 0!==l&&l.selectable(e.row,n)),class:[u.rowRadio],modelValue:h.value,"onUpdate:modelValue":function(e){return h.value=e},label:e.row[m.rowKey?m.rowKey:"id"],onChange:function(e){return P(e)}},null)])}}):null,f.value.map((function(e,a){return i.createVNode(r,{key:e.prop?e.prop:""+a,"item-data":e},null)}))]):null]}}),[[i.resolveDirective("loading"),b.value]]),g.open&&i.createVNode("div",{style:{display:"flex",justifyContent:"center",padding:"15px 0"}},[i.createVNode(o,i.mergeProps({"current-page":y.pageIndex,"page-size":y.pageSize,layout:v.layout,total:y.total,background:!0},g.nativeProps,{onSizeChange:function(e){return x(e)},onCurrentChange:function(e){return S(e)},current:y.pageIndex,onShowSizeChange:function(e,a){return x(a)}},l.CustomDynamicComponent.language===l.CustomDynamicComponent.antLanguage?{onChange:function(e){return S(e)}}:{}),null)])])}}});a.BsTable=c},3429:function(e,a,n){n.r(a),n.d(a,{default:function(){return S}});var t=n(3159),o=n(4064),i=n(6906),l=n(124),r=n(8534),u=n(3396),c=n(4870),s={class:"FullPageLayout"},f={class:"auto-strut"},d={class:"flex1"};function p(e,a){return(0,u.wg)(),(0,u.iD)("div",s,[(0,u._)("div",f,[(0,u.WI)(e.$slots,"autoStrut",{},void 0,!0)]),(0,u._)("div",d,[(0,u.WI)(e.$slots,"flex1",{},void 0,!0)])])}var m=n(89);const v={},g=(0,m.Z)(v,[["render",p],["__scopeId","data-v-42f9beaf"]]);var D=g,h=n(3417),b=function(e){return(0,u.dD)("data-v-34f7c30a"),e=e(),(0,u.Cn)(),e},y={class:"home"},C=b((function(){return(0,u._)("a",{href:"https://github.com/chenyuhuan1/backstage-vue3/blob/master/src/examples/home/index.vue"},"https://github.com/chenyuhuan1/backstage-vue3/blob/master/src/examples/home/index.vue",-1)})),w=(0,u.aZ)({__name:"index",setup:function(e){var a=function(){console.log(123123)},n=function(e,a,n){""===a?n(new Error("Please input the password again")):"123456"!==a?n(new Error("Two inputs don't match!")):n()},s=(0,c.iH)({name1:"12312",date1:"2023-08-10",pass:"11",age:3123,sex:1,sex2:[2],sex4:2,date11:["2025-07","2025-12"],date2:"2023-08-10",number2:4123,cascader1:"zhonghuamen1",test:"123123123123333",swi:!0,date22:"2025-07",date33:"2025-12",date3:"2023-08-25",number3:32513}),f=(0,c.qj)({labelWidth:"120px",disabled:!1,loading:!1,textMode:!1,columns:[{prop:"guide",type:"collapse",labelWidth:"0px",colNum:24,dataConfig:[{title:"操作指引",desc:"1. 直接转移（调动后社保帐户增员）的社保信息，全部来源于调动环节，无法修改"}]},{label:"姓名1",prop:"name1",type:"input",placeholder:"请输入姓名1",required:!0,inlayRules:[{validatorName:"letters"}]},{label:"密码",prop:"pass",type:"password",placeholder:"请输入密码",required:!0,rules:[{validator:n,trigger:"blur"}]},{label:"年龄",prop:"age",type:"number",placeholder:"请输入年龄1",required:!0},{label:"性别dic",prop:"sex",type:"select",options:{type:"api",getData:function(){return new Promise((function(e){setTimeout((function(){e([{name:"男12312ss",value:1},{name:"女55454333dd1",value:2}])}),2e3)}))}},labelKey:"name",valueKey:"value",collapseTags:!0,placeholder:"请选择性别111"},{label:"性别2",prop:"sex2",type:"checkbox",options:[{name:"男",value:1},{name:"女",value:2}],labelKey:"name",placeholder:"请选择性别111"},{label:"性别radio",prop:"sex4",type:"radio",options:[{name:"男",value:1},{name:"女",value:2}],labelKey:"name",placeholder:"请选择性别111"},{label:"日期",prop:"date1",type:"date",placeholder:"请输入日期1",required:!0},{label:"日期范围组件",prop:"date11",propSecond:"date22",propThird:"date33",type:"monthrange",required:!0},{label:"日期范围",prop:"date2",propEnd:"date3",type:"dateRange",placeholder:"请输入日期范围1",required:!0,change:function(e){console.log(e)}},{label:"数字范围",prop:"number2",propEnd:"number3",type:"numberRange",placeholder:"请输入数字返回1",required:!0},{colNum:6,label:"地址",prop:"cascader1",type:"cascader",placeholder:"请输入",clearable:!0,props:{multiple:!0,emitPath:!1},options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"},{value:"zhonghuamen1",label:"Zhong Hua Men1"}]}]}]},{label:"测试render",prop:"test",type:"render",render:function(){return(0,u.Wm)(h.EZ,{modelValue:s.value.test,"onUpdate:modelValue":function(e){return s.value.test=e}},null)},placeholder:"请输入"},{label:"开关",prop:"swi",type:"switch",placeholder:"请输入"}]}),d=(0,c.iH)({rowSelection:{type:"checkout",onChange:function(e){console.log("table勾选项：",e)}},nativeProps:{border:!0}}),p=(0,c.iH)([{type:"index",fixed:"left"},{prop:"id",label:"id",width:100,align:"left",fixed:"left"},{prop:"createTime",label:"创建时间",width:100},{prop:"loanCount",label:"笔数",width:80},{prop:"effectiveDays",label:"下载有效期(天)"},{prop:"statusDesc",label:"状态"},{prop:"infoData1",label:"数目1",width:160,nativeProps:{"show-overflow-tooltip":!0}},{prop:"infoData21",label:"统计数目21",children:[{prop:"infoData211",label:"统计数目211"},{prop:"infoData212",label:"统计数目212",render:function(e){return(0,u.Wm)("div",null,[e.row.infoData211,(0,u.Uk)(" render测试")])}}]}]),m=function(){var e=(0,r.Z)((0,l.Z)().mark((function e(a){var n,t;return(0,l.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=a.pageIndex,t=a.pageSize,console.log(n,t),e.abrupt("return",new Promise((function(e){setTimeout((function(){e({success:!0,list:1===n?[{id:1,createTime:"2021-01",loanCount:5,effectiveDays:5,statusDesc:"成功",infoData1:1,infoData21:21,infoData22:22,infoData211:211,infoData212:212,infoData221:221,infoData222:222},{id:2,createTime:"2021-02",loanCount:5,effectiveDays:5,statusDesc:"成功",infoData1:1,infoData21:21,infoData22:22,infoData211:211,infoData212:212,infoData221:221,infoData222:222},{id:3,createTime:"2021-03",loanCount:5,effectiveDays:5,statusDesc:"成功",infoData1:1,infoData21:21,infoData22:22,infoData211:211,infoData212:212,infoData221:221,infoData222:222},{id:4,createTime:"2021-04",loanCount:5,effectiveDays:5,statusDesc:"成功",infoData1:1,infoData21:21,infoData22:22,infoData211:211,infoData212:212,infoData221:221,infoData222:222},{id:5,createTime:"2021-05",loanCount:5,effectiveDays:5,statusDesc:"成功",infoData1:1,infoData21:21,infoData22:22,infoData211:211,infoData212:212,infoData221:221,infoData222:222},{id:6,createTime:"2021-06",loanCount:5,effectiveDays:5,statusDesc:"成功",infoData1:1,infoData21:21,infoData22:22,infoData211:211,infoData212:212,infoData221:221,infoData222:222},{id:7,createTime:"2021-07",loanCount:5,effectiveDays:5,statusDesc:"成功",infoData1:1,infoData21:21,infoData22:22,infoData211:211,infoData212:212,infoData221:221,infoData222:222},{id:8,createTime:"2021-08",loanCount:5,effectiveDays:5,statusDesc:"成功",infoData1:1,infoData21:21,infoData22:22,infoData211:211,infoData212:212,infoData221:221,infoData222:222},{id:9,createTime:"2021-09",loanCount:5,effectiveDays:5,statusDesc:"成功",infoData1:1,infoData21:21,infoData22:22,infoData211:211,infoData212:212,infoData221:221,infoData222:222},{id:10,createTime:"2021-10",loanCount:5,effectiveDays:5,statusDesc:"成功",infoData1:1,infoData21:21,infoData22:22,infoData211:211,infoData212:212,infoData221:221,infoData222:222}]:[{id:11,createTime:"2021-11",loanCount:5,effectiveDays:5,statusDesc:"成功",infoData1:1,infoData21:21,infoData22:22,infoData211:211,infoData212:212,infoData221:221,infoData222:222},{id:12,createTime:"2021-12",loanCount:5,effectiveDays:5,statusDesc:"成功",infoData1:1,infoData21:21,infoData22:22,infoData211:211,infoData212:212,infoData221:221,infoData222:222}],total:12})}),1500)})));case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return function(e,n){var l=(0,u.up)("el-alert");return(0,u.wg)(),(0,u.iD)("div",y,[(0,u.Wm)(l,{title:"",type:"success",style:{"margin-bottom":"15px"}},{default:(0,u.w5)((function(){return[(0,u.Uk)(" 示例代码地址:"),C]})),_:1}),(0,u.Wm)(D,{class:"FullPageLayout"},{autoStrut:(0,u.w5)((function(){return[(0,u.Wm)((0,c.SU)(i.ZP),{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=function(e){return s.value=e}),class:"BsForm",config:f},{slo:(0,u.w5)((function(){return[(0,u.Wm)((0,c.SU)(h.EZ),{modelValue:s.value.slo,"onUpdate:modelValue":n[0]||(n[0]=function(e){return s.value.slo=e}),placeholder:""},null,8,["modelValue"])]})),_:1},8,["modelValue","config"]),(0,u.Wm)((0,c.SU)(o.ZP),{buttons:[{text:"新增",confirmConfig:{title:"点击[审核]当前选择记录状态将变成:已审核，确定继续吗?",nativeProps:{placement:"top-start"}},click:function(){a()}}]},null,8,["buttons"])]})),flex1:(0,u.w5)((function(){return[(0,u.Wm)((0,c.SU)(t.ZP),{columns:p.value,"load-data":m,"table-config":d.value},null,8,["columns","table-config"])]})),_:1})])}}});const x=(0,m.Z)(w,[["__scopeId","data-v-34f7c30a"]]);var S=x}}]);