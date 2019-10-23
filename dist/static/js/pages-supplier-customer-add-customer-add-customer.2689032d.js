(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-supplier-customer-add-customer-add-customer"],{"0661":function(e,t,i){"use strict";i.r(t);var r=i("e283"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,function(){return r[e]})}(a);t["default"]=n.a},"0bca":function(e,t,i){"use strict";var r=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.GET_PRODUCTADDORDER_LIST=t.GET_TRADINGAREA_LIST=t.UPDATE_PRODUCT_SKU=t.CREATE_PRODUCT=t.GET_QUOTATION_LIST=t.GET_PRODUCT_CODE=t.GET_MEASUREMETHOD_LIST=t.CHECK_PRODUCT_NAME=t.UPDATE_PRODUCT=t.GET_PRODUCT_LIST=void 0;var n=r(i("8742")),a=function(e){return n.default.request("product/queryDtoList",e||{})};t.GET_PRODUCT_LIST=a;var s=function(e){return n.default.request("productsku/update",e||{})};t.UPDATE_PRODUCT=s;var o=function(e){return n.default.request("product/checkProductNameExist",{name:e})};t.CHECK_PRODUCT_NAME=o;var l=function(){return n.default.request("measuremethod/list",{orderField:"f_method_type"})};t.GET_MEASUREMETHOD_LIST=l;var c=function(e){return n.default.request("product/getProductCode",{customerId:e})};t.GET_PRODUCT_CODE=c;var u=function(e){return n.default.request("quotation/list",e||{})};t.GET_QUOTATION_LIST=u;var d=function(e){return n.default.request("product/create",e||{},"POST","提交中...")};t.CREATE_PRODUCT=d;var m=function(e){return n.default.request("productsku/updateRelate",e||{},"POST","提交中...")};t.UPDATE_PRODUCT_SKU=m;var f=function(e){return n.default.request("tradingarea/tradingAreaList",e||{})};t.GET_TRADINGAREA_LIST=f;var v=function(e){return n.default.request("product/list",e||{})};t.GET_PRODUCTADDORDER_LIST=v},9669:function(e,t,i){"use strict";var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"add-customer-page"},[i("v-uni-view",{staticClass:"xy-form"},[i("v-uni-view",{staticClass:"xy-form-title"},[i("v-uni-view",[e._v("登录账户")]),i("v-uni-view",[e._v("(帮助客户开通账户，客户即可根据账号登录系统采购)")])],1),i("uni-list",[i("uni-list-item",{attrs:{"show-arrow":!1,title:"账号/登录名"}},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入账号/登录名(必填)"},model:{value:e.form.loginName,callback:function(t){e.$set(e.form,"loginName",t)},expression:"form.loginName"}})],1),i("uni-list-item",{attrs:{"show-arrow":!1,title:"昵称"}},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入客户昵称(必填)"},model:{value:e.form.nickName,callback:function(t){e.$set(e.form,"nickName",t)},expression:"form.nickName"}})],1),i("uni-list-item",{attrs:{"show-arrow":!1,title:"手机号"}},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入客户手机号(必填)"},model:{value:e.form.mobile,callback:function(t){e.$set(e.form,"mobile",t)},expression:"form.mobile"}})],1),i("uni-list-item",{attrs:{title:"报价单",showArrow:!0},nativeOn:{click:function(t){return e.openSelector("quotation")}}},[e.quotationSelected?i("v-uni-view",{attrs:{slot:"right"},slot:"right"},[e._v(e._s(e.quotationSelected.label))]):i("v-uni-view",{staticClass:"xy-form-selcet-text",attrs:{slot:"right"},slot:"right"},[e._v("请选择报价单(必填)")])],1)],1),i("v-uni-view",{staticClass:"xy-form-title"},[e._v("客户基础信息")]),i("uni-list",[i("uni-list-item",{attrs:{"show-arrow":!1,title:"名称"}},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入客户名称(必填)"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),i("uni-list-item",{attrs:{"show-arrow":!1,title:"联系人"}},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入联系人(必填)"},model:{value:e.form.contacts,callback:function(t){e.$set(e.form,"contacts",t)},expression:"form.contacts"}})],1),i("uni-list-item",{attrs:{"show-arrow":!1,title:"联系电话"}},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入账户绑定的手机号(必填)"},model:{value:e.form.telephone,callback:function(t){e.$set(e.form,"telephone",t)},expression:"form.telephone"}})],1),i("uni-list-item",{attrs:{title:"商圈",showArrow:!0},nativeOn:{click:function(t){return e.openSelector("tradingArea")}}},[e.tradingAreaSelected?i("v-uni-view",{attrs:{slot:"right"},slot:"right"},[e._v(e._s(e.tradingAreaSelected.label))]):i("v-uni-view",{staticClass:"xy-form-selcet-text",attrs:{slot:"right"},slot:"right"},[e._v("请选择商圈(必填)")])],1),i("uni-list-item",{attrs:{"show-arrow":!0,title:"经营地址"}},[i("v-uni-view",{attrs:{slot:"right"},slot:"right"})],1),i("uni-list-item",{attrs:{"show-arrow":!1,title:"详细地址"}},[i("v-uni-input",{attrs:{type:"text",placeholder:"街道、门牌号等"},model:{value:e.form.detailedAddress,callback:function(t){e.$set(e.form,"detailedAddress",t)},expression:"form.detailedAddress"}})],1),i("uni-list-item",{attrs:{"show-arrow":!1,title:"备注"}},[i("v-uni-input",{attrs:{type:"text",placeholder:"请填写备注"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1)],1),i("v-uni-view",{staticClass:"xy-form-title"},[e._v("账期信息(开启账期后客户可采用赊销方式支付)")]),i("uni-list",[i("uni-list-item",{attrs:{switchId:"zqType","show-arrow":!1,showSwitch:!0,switchChecked:!1,title:"开启账期"},on:{switchChange:function(t){t=e.$handleEvent(t),e.switchChange(t)}}}),1==e.form.zqType?[i("uni-list-item",{attrs:{"show-arrow":!1,title:"账期方式"}},[i("v-uni-view",{staticClass:"cycleTypebtn flex flex-y-center flex-x-end"},e._l(e.zqTypeTtems,function(t){return i("v-uni-view",{key:t.value,class:t.value==e.form.cycleType?"xy-btn active":"xy-btn",on:{click:function(i){i=e.$handleEvent(i),e.itemClick(t.value)}}},[e._v(e._s(t.name))])}),1)],1),i("uni-list-item",{attrs:{title:"账单起始日",showArrow:!0},nativeOn:{click:function(t){return e.openSelector("termDays")}}},[i("v-uni-view",{staticClass:"flex flex-y-center",attrs:{slot:"right"},slot:"right"},[i("v-uni-text",{staticClass:"tips flex-item-1"},[e._v("账单周期：开始日【该月5日】 循环【周期】次数后 结算日【该月4日】")]),i("v-uni-view",{},[e.termDaysSelected?i("v-uni-view",[e._v(e._s(e.termDaysSelected.label))]):i("v-uni-view",{staticClass:"xy-form-selcet-text"},[e._v("请选择账单起始日(必填)")])],1)],1)],1),i("uni-list-item",{attrs:{title:"结算日",showArrow:!0},nativeOn:{click:function(t){return e.openSelector("remindDays")}}},[i("v-uni-view",{staticClass:"flex flex-y-center",attrs:{slot:"right"},slot:"right"},[i("v-uni-text",{staticClass:"tips flex-item-1"},[e._v("账单结算日说明：账期结束后7之内支付，否则记为逾期账单")]),i("v-uni-view",{},[e.remindDaysSelected?i("v-uni-view",[e._v(e._s(e.remindDaysSelected.label))]):i("v-uni-view",{staticClass:"xy-form-selcet-text"},[e._v("请选择账单起始日(必填)")])],1)],1)],1),i("uni-list-item",{attrs:{"show-arrow":!1,title:"周期"}},[i("v-uni-input",{attrs:{type:"text",placeholder:"请输入周期"},model:{value:e.form.cycle,callback:function(t){e.$set(e.form,"cycle",t)},expression:"form.cycle"}})],1),i("uni-list-item",{attrs:{switchId:"overdueType","show-arrow":!1,showSwitch:!0,switchChecked:!1,title:"预期下单"},on:{switchChange:function(t){t=e.$handleEvent(t),e.switchChange(t)}}})]:e._e()],2)],1),i("xyButton",{attrs:{width:"690rpx",height:"75rpx"},nativeOn:{click:function(t){return e.save(t)}}},[e._v("提交")]),0!=e.quotationList.length?i("w-picker",{ref:"quotation",attrs:{mode:"selector",defaultVal:[0],themeColor:"#23A389",selectList:e.quotationList},on:{confirm:function(t){t=e.$handleEvent(t),e.onConfirm(t)}}}):e._e(),0!=e.tradingAreaList.length?i("w-picker",{ref:"tradingArea",attrs:{mode:"selector",defaultVal:[0],themeColor:"#23A389",selectList:e.tradingAreaList},on:{confirm:function(t){t=e.$handleEvent(t),e.onConfirm(t)}}}):e._e(),0!=e.termDaysList.length?i("w-picker",{ref:"termDays",attrs:{mode:"selector",defaultVal:[0],themeColor:"#23A389",selectList:e.termDaysList},on:{confirm:function(t){t=e.$handleEvent(t),e.onConfirm(t)}}}):e._e(),0!=e.remindDaysList.length?i("w-picker",{ref:"remindDays",attrs:{mode:"selector",defaultVal:[0],themeColor:"#23A389",selectList:e.remindDaysList},on:{confirm:function(t){t=e.$handleEvent(t),e.onConfirm(t)}}}):e._e()],1)},n=[];i.d(t,"a",function(){return r}),i.d(t,"b",function(){return n})},"9c2b":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.add-customer-page .cycleTypebtn .xy-btn[data-v-7e5ac61f]{margin-left:%?20?%}.add-customer-page .tips[data-v-7e5ac61f]{background:#f7dece;border-radius:1px;display:inline-block;color:#ff6000;padding:2px 12px;font-size:%?20?%;margin-right:%?20?%}',""])},"9f50":function(e,t,i){var r=i("9c2b");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("9d2d8056",r,!0,{sourceMap:!1,shadowMode:!1})},aa2d:function(e,t,i){"use strict";i.r(t);var r=i("9669"),n=i("0661");for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);i("bb86");var s=i("2877"),o=Object(s["a"])(n["default"],r["a"],r["b"],!1,null,"7e5ac61f",null);t["default"]=o.exports},bb86:function(e,t,i){"use strict";var r=i("9f50"),n=i.n(r);n.a},e283:function(e,t,i){"use strict";var r=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("28a5"),i("7f7f"),i("96cf");var n=r(i("3b8d")),a=r(i("ad21")),s=r(i("4369")),o=r(i("fbbb")),l=r(i("91b5")),c=i("0bca"),u={components:{uniList:a.default,uniListItem:s.default,xyButton:o.default,wPicker:l.default},mounted:function(){this.$common.methods.doIosInputBlur()},data:function(){return{quotationList:[],quotationSelected:"",tradingAreaList:[],tradingAreaSelected:"",termDaysList:[],termDaysSelected:"",remindDaysList:[{label:"一天",value:"一天"},{label:"二天",value:"二天"},{label:"三天",value:"三天"},{label:"四天",value:"四天"},{label:"五天",value:"五天"},{label:"六天",value:"六天"},{label:"七天",value:"七天"}],remindDaysSelected:{label:"七天",value:"七天"},selectorName:"",form:{id:"",loginName:"18011375689",nickName:"yangyh",mobile:"18011375689",name:"yangyuhao1",telephone:"18011375689",invitationCode:"",traCode:"",contacts:"杨宇浩",detailedAddress:"a2",remark:"test",provinceCode:"510000",cityCode:"510100",districCode:"510107",termType:"001",zqId:"",zqType:0,cycle:1,cycleType:1,termDays:1,remindDays:7,overdueType:0,password:"123456",key:"buyer"},rules:[{name:"loginName",checkType:"string",checkRule:"1,",errorMsg:"请输入登录名"},{name:"nickName",checkType:"string",checkRule:"1,",errorMsg:"请输入昵称"},{name:"mobile",checkType:"string",checkRule:"1,",errorMsg:"请输入手机号"},{name:"invitationCode",checkType:"string",checkRule:"1,",errorMsg:"请选择报价单"},{name:"name",checkType:"string",checkRule:"1,",errorMsg:"请输入客户名称"},{name:"contacts",checkType:"string",checkRule:"1,",errorMsg:"请输入联系人"},{name:"telephone",checkType:"string",checkRule:"1,",errorMsg:"请输入联系电话"}],zqTypeTtems:[{value:"0",name:"周结"},{value:"1",name:"月结"}]}},onLoad:function(){this.initPage()},created:function(){},methods:{initPage:function(){this.queryQuotationList(),this.queryTradingAreaList(),this.initTermDaysList(1)},queryQuotationList:function(){var e=(0,n.default)(regeneratorRuntime.mark(function e(){var t,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,c.GET_QUOTATION_LIST)();case 2:t=e.sent,t&&(i=[],t.list.map(function(e){var t={label:e.quotationTitle,value:e.id+";"+e.inviteCode};i.push(t)}),this.quotationList=i);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),queryTradingAreaList:function(){var e=(0,n.default)(regeneratorRuntime.mark(function e(){var t,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,c.GET_TRADINGAREA_LIST)({customerId:this.$store.state.loginUserTypeCode});case 2:t=e.sent,t&&(i=[],t.map(function(e){var t={label:e.name,value:e.code};i.push(t)}),this.tradingAreaList=i);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),save:function(){this.quotationSelected&&(this.form.invitationCode=this.quotationSelected.value.split(";")[1]),this.quotationSelected&&(this.form.traCode=this.tradingAreaSelected.value),this.termDaysSelected&&(this.form.termDays=this.termDaysSelected.value),this.remindDaysSelected&&(this.form.remindDays=this.remindDaysSelected.value);var e=this.$common.methods.formCheck(this.form,this.rules);e&&this.$api.request("customer/customerRegist",this.form,"POST","提交中...").then(function(e){e&&0==e.state&&uni.showToast({title:"保存成功",duration:2e3,success:function(){setTimeout(function(){uni.navigateBack()},2e3)}})})},openSelector:function(e){this.selectorName=e,this.$refs[e].show()},onConfirm:function(e){this[this.selectorName+"Selected"]=e.checkArr,console.log(e.checkArr)},switchChange:function(e){e.value?this.form[e.switchId]=1:this.form[e.switchId]=0},itemClick:function(e){this.form.cycleType=e,this.initTermDaysList(e)},initTermDaysList:function(e){if(0==e)this.termDaysList=[{label:"周一",value:1},{label:"周二",value:2},{label:"周三",value:3},{label:"周四",value:4},{label:"周五",value:5},{label:"周六",value:6},{label:"周日",value:7}];else{for(var t=[],i=1;i<=31;i++){var r={};r.value=i,r.label="每月第"+i+"日",t.push(r)}this.termDaysList=t}this.termDaysSelected=this.termDaysList[0]}}};t.default=u}}]);