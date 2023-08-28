"use strict";(self["webpackChunkbackstage_vue3"]=self["webpackChunkbackstage_vue3"]||[]).push([[653],{4064:function(e,t,n){var a=n(2160),r=n(6866),i=n(6623),o={},l=r.defineComponent({name:"BsButtons",props:{buttons:{type:Array,default:function(){return[]}}},setup:function(e){var t=r.ref(!1),n=new i.CustomDynamicComponent,l=n.dynamicButton,u=n.dynamicPopconfirm;return function(){var n=function(e){var n,i,o;return r.createVNode(l,r.mergeProps({type:null!==(n=e.type)&&void 0!==n?n:"primary",size:null!==(i=e.size)&&void 0!==i?i:"small",disabled:e.disabled,loading:t.value},e.nativeProps,{onClick:a._asyncToGenerator(a._regeneratorRuntime().mark((function n(){return a._regeneratorRuntime().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.value=!0,n.t0=!e.confirmConfig&&e.click,!n.t0){n.next=5;break}return n.next=5,e.click();case 5:t.value=!1;case 6:case"end":return n.stop()}}),n)})))}),{default:function(){return[null!==(o=e.text)&&void 0!==o?o:"文案"]}})};return r.createVNode("div",{class:[o.BsTable,"bs-buttons"],style:"display: flex"},[e.buttons.map((function(e){return!1===e.show?null:e.confirmConfig&&!e.disabled?r.createVNode(u,r.mergeProps({title:null!==(t=null===e||void 0===e||null===(a=e.confirmConfig)||void 0===a?void 0:a.title)&&void 0!==t?t:"标题","confirm-button-text":"确认",okText:"确认","cancel-button-text":"取消",cancelText:"取消"},null===e||void 0===e||null===(i=e.confirmConfig)||void 0===i?void 0:i.nativeProps,{onConfirm:function(){var t,n;null!==e&&void 0!==e&&null!==(t=e.confirmConfig)&&void 0!==t&&t.confirm?null===e||void 0===e||null===(n=e.confirmConfig)||void 0===n||n.confirm():e.click&&(null===e||void 0===e||e.click())},onCancel:function(){var t,n;(null===e||void 0===e||null===(t=e.confirmConfig)||void 0===t?void 0:t.cancel)&&(null===e||void 0===e||null===(n=e.confirmConfig)||void 0===n||n.cancel())}}),{reference:function(){return n(e)},default:function(){return n(e)}}):n(e);var t,a,i}))])}}});l.install=function(e){e.component(l.name,l)};var u=l;t.ZP=l},6362:function(e,t,n){var a=n(3602);n(1146),n(6866),n(186),n(6623),n(6278),n(3773),n(7300),n(2160),n(229),n(9640),n(6999),n(1661),n(6289),n(7576),n(5936),n(1245),n(1944),n(8395),n(8010),n(2059),n(7088),n(3331),n(5918),n(3978),a.editTable.install=function(e){e.component(a.editTable.name,a.editTable)};var r=a.editTable;t.ZP=a.editTable},6906:function(e,t,n){var a=n(4126);n(5918),n(2160),n(6623),n(6866),n(229),n(3602),n(1146),n(186),n(6278),n(3773),n(7300),n(9640),n(6999),n(1661),n(6289),n(7576),n(5936),n(1245),n(1944),n(8395),n(8010),n(2059),n(7088),n(3331),n(3978),a.BsForm.install=function(e){e.component(a.BsForm.name,a.BsForm)};var r=a.BsForm;t.ZP=a.BsForm},8653:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(6906),r=n(6362),i=n(4064),o=n(124),l=n(8534),u=n(3396),s=n(4870),c=n(7178),d=(0,u._)("a",{href:"https://github.com/chenyuhuan1/backstage-vue3/blob/master/src/examples/editTable/index.vue"},"https://github.com/chenyuhuan1/backstage-vue3/blob/master/src/examples/editTable/index.vue",-1),p=(0,u._)("span",null,"整表编辑",-1),f=(0,u._)("span",null,"行编辑",-1),m=(0,u._)("span",null,"列编辑",-1),g=(0,u._)("span",null,"表单中使用",-1),v=(0,u._)("span",null,"表单中使用-render方式",-1),y=(0,u.aZ)({__name:"index",setup:function(e){var t=(0,s.iH)(),n=(0,s.iH)([{id:1,createTime:"2021-01",loanCount:5,effectiveDays:5,statusDesc:"success",ohter:1,amount:12,category:"aaa"},{id:2,createTime:"2021-02",loanCount:5,effectiveDays:5,statusDesc:"success",ohter:1,amount:12,category:"aaa"},{id:3,createTime:"2021-03",loanCount:5,effectiveDays:5,statusDesc:"fail",ohter:1,amount:12,category:"aaa"}]),y=(0,s.iH)({editing:!0}),h=function(e){console.log(e,"BsEditTable change事件触发")},b=(0,s.iH)([{type:"index",fixed:"left"},{prop:"id",label:"id",width:100,align:"left",fixed:"left"},{prop:"createTime",label:"创建时间",width:150,widgetConfig:{type:"month"}},{prop:"loanCount",label:"笔数",width:120,widgetConfig:{type:"input",required:!0,rules:[{min:3,max:5,message:"Length should be 3 to 5",trigger:"change"}],widgetConfigDynamicFn:function(e){return"success"===e.row.statusDesc?{disabled:!0}:{}}}},{prop:"effectiveDays",label:"下载有效期(天)"},{prop:"statusDesc",label:"状态",width:200,widgetConfig:{type:"select",required:!0,options:[{label:"成功",value:"success"},{label:"失败",value:"fail"}],change:function(e){console.log(e,"状态列控件事件触发")}},render:function(e){return"success"===e.row.statusDesc?"成功":"失败"}},{prop:"ohter",label:"其他",width:160,nativeProps:{"show-overflow-tooltip":!0}},{label:"统计",children:[{prop:"amount",label:"数目"},{prop:"category",label:"种类",render:function(e){return(0,u.Wm)("div",null,[e.row.category,(0,u.Uk)(" render测试")])}}]}]),w=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(){var n;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.value.validate();case 2:n=e.sent,n?((0,c.z8)({type:"success",message:"校验成功，数据请查看控制台打印！"}),y.value.editing=!1):(0,c.z8)({type:"error",message:"校验失败"});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=(0,s.iH)(),C=(0,s.iH)([{editing:!0,id:1,createTime:"2021-01",loanCount:5,effectiveDays:5,statusDesc:"success",ohter:1,amount:12,category:"aaa"},{id:2,createTime:"2021-02",loanCount:5,effectiveDays:5,statusDesc:"success",ohter:1,amount:12,category:"aaa"},{id:3,createTime:"2021-03",loanCount:5,effectiveDays:5,statusDesc:"fail",ohter:1,amount:12,category:"aaa"}]),D=(0,s.iH)({}),k=(0,s.iH)([{type:"index",fixed:"left"},{prop:"id",label:"id",width:100,align:"left",fixed:"left"},{prop:"createTime",label:"创建时间",width:150,widgetConfig:{type:"month",required:!0}},{prop:"loanCount",label:"笔数",width:120,widgetConfig:{type:"input",required:!0,rules:[{min:3,max:5,message:"Length should be 3 to 5",trigger:"change"}]}},{prop:"effectiveDays",label:"下载有效期(天)"},{prop:"statusDesc",label:"状态",width:200,widgetConfig:{type:"select",required:!0,options:[{label:"成功",value:"success"},{label:"失败",value:"fail"}]},render:function(e){return"success"===e.row.statusDesc?"成功":"失败"}},{prop:"ohter",label:"其他",width:160,nativeProps:{"show-overflow-tooltip":!0}},{label:"统计",children:[{prop:"amount",label:"数目",width:150,widgetConfig:{type:"input",required:!0}},{prop:"category",label:"种类",render:function(e){return(0,u.Wm)("div",null,[e.row.category,(0,u.Uk)(" render测试")])}}]},{label:"操作",width:190,fixed:"right",render:function(e){return(0,u.Wm)("div",null,[(0,u.Wm)(i.ZP,{buttons:[{text:"编辑",type:"primary",click:function(){e.row.editing=!0}},{text:"校验此行并提交",type:"primary",click:function(){var t=(0,l.Z)((0,o.Z)().mark((function t(){var n,a;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,null===(n=x.value)||void 0===n?void 0:n.validateRow(e.$index);case 2:a=t.sent,a?((0,c.z8)({type:"success",message:"行校验成功，数据请查看控制台打印！"}),e.row.editing=!1):(0,c.z8)({type:"error",message:"行校验失败"});case 4:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}()}]},null)])}}]),T=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(){var t;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x.value.validate();case 2:t=e.sent,t?(0,c.z8)({type:"success",message:"校验成功，数据请查看控制台打印！"}):(0,c.z8)({type:"error",message:"校验失败"});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=(0,s.iH)(),_=(0,s.iH)([{id:1,createTime:"2021-01",loanCount:5,effectiveDays:5,statusDesc:"success",ohter:1,amount:12,category:"aaa"},{id:2,createTime:"2021-02",loanCount:5,effectiveDays:5,statusDesc:"success",ohter:1,amount:12,category:"aaa"},{id:3,createTime:"2021-03",loanCount:5,effectiveDays:5,statusDesc:"fail",ohter:1,amount:12,category:"aaa"}]),W=(0,s.iH)({}),H=(0,s.iH)([{type:"index",fixed:"left"},{prop:"id",label:"id",width:100,align:"left",fixed:"left"},{prop:"createTime",label:"创建时间",width:150,editing:!0,widgetConfig:{type:"month"}},{prop:"loanCount",label:"笔数",width:120,editing:!0,widgetConfig:{type:"input",required:!0,rules:[{min:3,max:5,message:"Length should be 3 to 5",trigger:"change"}]}},{prop:"effectiveDays",label:"下载有效期(天)"},{prop:"statusDesc",label:"状态",width:200,widgetConfig:{type:"select",required:!0,options:[{label:"成功",value:"success"},{label:"失败",value:"fail"}]},render:function(e){return"success"===e.row.statusDesc?"成功":"失败"}},{prop:"ohter",label:"其他",width:160,nativeProps:{"show-overflow-tooltip":!0}},{label:"统计",children:[{prop:"amount",label:"数目"},{prop:"category",label:"种类",render:function(e){return(0,u.Wm)("div",null,[e.row.category,(0,u.Uk)(" render测试")])}}]}]),U=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(){var t;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Z.value.validate();case 2:t=e.sent,t?((0,c.z8)({type:"success",message:"校验成功，数据请查看控制台打印！"}),W.value.editing=!1):(0,c.z8)({type:"error",message:"校验失败"});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=(0,s.iH)(),V=(0,s.iH)({});setTimeout((function(){V.value.tableList=[{id:1,createTime:"2021-01",loanCount:5,effectiveDays:5,statusDesc:"success",ohter:1,amount:12,category:"aaa"},{id:2,createTime:"2021-02",loanCount:5,effectiveDays:5,statusDesc:"success",ohter:1,amount:12,category:"aaa"},{id:3,createTime:"2021-03",loanCount:5,effectiveDays:5,statusDesc:"fail",ohter:1,amount:12,category:"aaa"}]}),1e3);var z=(0,s.iH)([{type:"index",fixed:"left"},{prop:"id",label:"id",width:100,align:"left",fixed:"left"},{prop:"createTime",label:"创建时间",width:150,widgetConfig:{type:"month"}},{prop:"loanCount",label:"笔数",width:120,widgetConfig:{type:"input",required:!0,rules:[{min:3,max:5,message:"Length should be 3 to 5",trigger:"change"}]}},{prop:"effectiveDays",label:"下载有效期(天)"},{prop:"statusDesc",label:"状态",width:200,widgetConfig:{type:"select",required:!0,options:[{label:"成功",value:"success"},{label:"失败",value:"fail"}]},render:function(e){return"success"===e.row.statusDesc?"成功":"失败"}},{prop:"ohter",label:"其他",width:160,nativeProps:{"show-overflow-tooltip":!0}},{label:"统计",children:[{prop:"amount",label:"数目"},{prop:"category",label:"种类",render:function(e){return(0,u.Wm)("div",null,[e.row.category,(0,u.Uk)(" render测试")])}}]}]),B=(0,s.iH)({editing:!0}),q=(0,s.qj)({labelWidth:"120px",disabled:!1,loading:!1,notOpBtn:!0,columns:[{label:"姓名1",prop:"name1",type:"input",placeholder:"请输入姓名1",required:!0},{label:"列表",prop:"tableList",type:"editTable",colNum:24,columns:z.value,editTableConfig:B.value}]}),L=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(){var t;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,P.value.validate();case 2:t=e.sent,t?((0,c.z8)({type:"success",message:"校验成功，数据请查看控制台打印！"}),B.value.editing=!1):(0,c.z8)({type:"error",message:"校验失败"});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=(0,s.iH)(),N=(0,s.iH)(),S=(0,s.iH)({});setTimeout((function(){S.value.tableList=[{id:1,createTime:"2021-01",loanCount:5,effectiveDays:5,statusDesc:"success",ohter:1,amount:12,category:"aaa"},{id:2,createTime:"2021-02",loanCount:5,effectiveDays:5,statusDesc:"success",ohter:1,amount:12,category:"aaa"},{id:3,createTime:"2021-03",loanCount:5,effectiveDays:5,statusDesc:"fail",ohter:1,amount:12,category:"aaa"}]}),1e3);var E=(0,s.iH)([{type:"index",fixed:"left"},{prop:"id",label:"id",width:100,align:"left",fixed:"left"},{prop:"createTime",label:"创建时间",width:150,widgetConfig:{type:"month"}},{prop:"loanCount",label:"笔数",width:120,widgetConfig:{type:"input",required:!0,rules:[{min:3,max:5,message:"Length should be 3 to 5",trigger:"change"}]}},{prop:"effectiveDays",label:"下载有效期(天)"},{prop:"statusDesc",label:"状态",width:200,widgetConfig:{type:"select",required:!0,options:[{label:"成功",value:"success"},{label:"失败",value:"fail"}]},render:function(e){return"success"===e.row.statusDesc?"成功":"失败"}},{prop:"ohter",label:"其他",width:160,nativeProps:{"show-overflow-tooltip":!0}},{label:"统计",children:[{prop:"amount",label:"数目"},{prop:"category",label:"种类",render:function(e){return(0,u.Wm)("div",null,[e.row.category,(0,u.Uk)(" render测试")])}}]}]),R=(0,s.iH)({editing:!0}),j=(0,s.qj)({labelWidth:"120px",disabled:!1,loading:!1,notOpBtn:!0,columns:[{label:"姓名1",prop:"name1",type:"input",placeholder:"请输入姓名1",required:!0},{label:"列表",prop:"tableList",type:"render",colNum:24,render:function(){return(0,u.Wm)(r.ZP,{ref:N,modelValue:S.value.tableList,"onUpdate:modelValue":function(e){return S.value.tableList=e},columns:E.value,"table-config":R.value},null)}}]}),O=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(){var t,n;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,F.value.validate();case 2:return t=e.sent,e.next=5,N.value.validate();case 5:n=e.sent,t&&n?((0,c.z8)({type:"success",message:"校验成功，数据请查看控制台打印！"}),R.value.editing=!1):(0,c.z8)({type:"error",message:"校验失败"});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return function(e,i){var o=(0,u.up)("el-alert"),l=(0,u.up)("el-button"),c=(0,u.up)("el-card");return(0,u.wg)(),(0,u.iD)(u.HY,null,[(0,u.Wm)(o,{title:"",type:"success",style:{"margin-bottom":"15px"}},{default:(0,u.w5)((function(){return[(0,u.Uk)(" 示例代码地址:"),d]})),_:1}),(0,u.Wm)(c,{shadow:"always","body-style":{padding:"15px"}},{header:(0,u.w5)((function(){return[p]})),default:(0,u.w5)((function(){return[(0,u.Wm)((0,s.SU)(r.ZP),{ref_key:"BsEditTableDom",ref:t,modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=function(e){return n.value=e}),columns:b.value,"edit-table-config":y.value,onChange:i[1]||(i[1]=function(e){h(e)})},null,8,["modelValue","columns","edit-table-config"]),(0,u.Wm)(l,{type:"primary",size:"default",onClick:w},{default:(0,u.w5)((function(){return[(0,u.Uk)(" 整体校验 ")]})),_:1})]})),_:1}),(0,u.Wm)(c,{shadow:"always",style:{"margin-top":"15px"},"body-style":{padding:"15px"}},{header:(0,u.w5)((function(){return[f]})),default:(0,u.w5)((function(){return[(0,u.Wm)((0,s.SU)(r.ZP),{ref_key:"BsEditTableDom2",ref:x,modelValue:C.value,"onUpdate:modelValue":i[2]||(i[2]=function(e){return C.value=e}),columns:k.value,"table-config":D.value},null,8,["modelValue","columns","table-config"]),(0,u.Wm)(l,{type:"primary",size:"default",onClick:T},{default:(0,u.w5)((function(){return[(0,u.Uk)(" 整体校验 ")]})),_:1})]})),_:1}),(0,u.Wm)(c,{shadow:"always",style:{"margin-top":"15px"},"body-style":{padding:"15px"}},{header:(0,u.w5)((function(){return[m]})),default:(0,u.w5)((function(){return[(0,u.Wm)((0,s.SU)(r.ZP),{ref_key:"BsEditTableDom3",ref:Z,modelValue:_.value,"onUpdate:modelValue":i[3]||(i[3]=function(e){return _.value=e}),columns:H.value,"table-config":W.value},null,8,["modelValue","columns","table-config"]),(0,u.Wm)(l,{type:"primary",size:"default",onClick:U},{default:(0,u.w5)((function(){return[(0,u.Uk)(" 整体校验 ")]})),_:1})]})),_:1}),(0,u.Wm)(c,{shadow:"always",style:{"margin-top":"15px"},"body-style":{padding:"15px"}},{header:(0,u.w5)((function(){return[g]})),default:(0,u.w5)((function(){return[(0,u.Wm)((0,s.SU)(a.ZP),{ref_key:"BsFormDom",ref:P,modelValue:V.value,"onUpdate:modelValue":i[4]||(i[4]=function(e){return V.value=e}),class:"BsForm",config:q},null,8,["modelValue","config"]),(0,u.Wm)(l,{type:"primary",size:"default",onClick:L},{default:(0,u.w5)((function(){return[(0,u.Uk)(" 校验&提交 ")]})),_:1})]})),_:1}),(0,u.Wm)(c,{shadow:"always",style:{"margin-top":"15px"},"body-style":{padding:"15px"}},{header:(0,u.w5)((function(){return[v]})),default:(0,u.w5)((function(){return[(0,u.Wm)((0,s.SU)(a.ZP),{ref_key:"BsFormDom2",ref:F,modelValue:S.value,"onUpdate:modelValue":i[5]||(i[5]=function(e){return S.value=e}),class:"BsForm",config:j},null,8,["modelValue","config"]),(0,u.Wm)(l,{type:"primary",size:"default",onClick:O},{default:(0,u.w5)((function(){return[(0,u.Uk)(" 校验&提交 ")]})),_:1})]})),_:1})],64)}}});const h=y;var b=h}}]);