(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-menu-edit"],{2108:function(t,a,n){var e=n("800b");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=n("4f06").default;i("7f2f185d",e,!0,{sourceMap:!1,shadowMode:!1})},"48f4":function(t,a,n){"use strict";n.d(a,"b",(function(){return i})),n.d(a,"c",(function(){return o})),n.d(a,"a",(function(){return e}));var e={uniForms:n("30d6").default,uniFormsItem:n("49a6").default,uniEasyinput:n("78cf").default,uniLink:n("71b0").default,uniDataCheckbox:n("9a4f").default,uniPopup:n("5d43").default},i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",{staticClass:"uni-container"},[n("uni-forms",{ref:"form",attrs:{labelWidth:"80",rules:t.rules,validateTrigger:"bind"},on:{submit:function(a){arguments[0]=a=t.$handleEvent(a),t.submit.apply(void 0,arguments)}},model:{value:t.formData,callback:function(a){t.formData=a},expression:"formData"}},[n("uni-forms-item",{attrs:{name:"menu_id",label:"标识",required:!0}},[n("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入菜单项的ID，不可重复"},model:{value:t.formData.menu_id,callback:function(a){t.$set(t.formData,"menu_id",a)},expression:"formData.menu_id"}})],1),n("uni-forms-item",{attrs:{name:"name",label:"显示名称",required:!0}},[n("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入菜单名称"},model:{value:t.formData.name,callback:function(a){t.$set(t.formData,"name",a)},expression:"formData.name"}})],1),n("uni-forms-item",{staticStyle:{"margin-bottom":"40px"},attrs:{name:"icon",label:"图标 class"}},[n("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入菜单图标css样式类名"},model:{value:t.formData.icon,callback:function(a){t.$set(t.formData,"icon",a)},expression:"formData.icon"}},[n("span",{staticStyle:{color:"#007aff",cursor:"pointer","padding-right":"10px"},attrs:{slot:"right"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.showIconPopup.apply(void 0,arguments)}},slot:"right"},[t._v("内置图标")])]),n("uni-link",{staticClass:"uni-form-item-tips",attrs:{"font-size":"12",href:"https://uniapp.dcloud.net.cn/uniCloud/admin?id=icon-%e5%9b%be%e6%a0%87",text:"如何使用自定义图标？"}})],1),n("uni-forms-item",{attrs:{name:"url",label:"页面URL"}},[n("uni-easyinput",{attrs:{clearable:!1,placeholder:"URL为空代表是目录而不是叶子节点"},model:{value:t.formData.url,callback:function(a){t.$set(t.formData,"url",a)},expression:"formData.url"}})],1),n("uni-forms-item",{attrs:{name:"sort",label:"序号"}},[n("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入菜单序号（越大越靠后）"},model:{value:t.formData.sort,callback:function(a){t.$set(t.formData,"sort",a)},expression:"formData.sort"}})],1),n("uni-forms-item",{attrs:{name:"parent_id",label:"父菜单标识"}},[n("uni-easyinput",{attrs:{clearable:!1,placeholder:"请输入父级菜单标识, 一级菜单不需要填写"},model:{value:t.formData.parent_id,callback:function(a){t.$set(t.formData,"parent_id",a)},expression:"formData.parent_id"}})],1),n("uni-forms-item",{staticClass:"flex-center-x",staticStyle:{"margin-bottom":"60px"},attrs:{name:"permission",label:"权限列表"}},[n("uni-data-checkbox",{attrs:{multiple:!0,collection:"uni-id-permissions",field:"permission_name as text, permission_id as value"},model:{value:t.formData.permission,callback:function(a){t.$set(t.formData,"permission",a)},expression:"formData.permission"}}),n("v-uni-view",{staticClass:"uni-form-item-tips"},[t._v("当用户拥有以上被选中的权限时，可以访问此菜单。建议仅对子菜单配置权限，父菜单会自动包含。如不选择权限，意味着仅超级管理员可访问本菜单")])],1),n("uni-forms-item",{attrs:{name:"enable",label:"是否启用"}},[n("v-uni-switch",{attrs:{checked:t.formData.enable},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.binddata("enable",a.detail.value)}}})],1),n("v-uni-view",{staticClass:"uni-button-group"},[n("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.submitForm.apply(void 0,arguments)}}},[t._v(t._s(t.$t("common.button.submit")))]),n("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[n("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v(t._s(t.$t("common.button.back")))])],1)],1),n("uni-popup",{ref:"iconPopup",staticClass:"icon-modal-box",attrs:{type:"center"}},[n("v-uni-view",{staticClass:"icon-modal icon-modal-pc"},[n("Icons",{attrs:{tag:!1,"fix-window":!1}})],1)],1)],1)],1)},o=[]},"4bee":function(t,a,n){"use strict";var e=n("2108"),i=n.n(e);i.a},"61c4":function(t,a,n){"use strict";n.r(a);var e=n("68b3"),i=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(a,t,(function(){return e[t]}))}(o);a["default"]=i.a},"68b3":function(t,a,n){"use strict";(function(t){var e=n("4ea4");n("caad"),n("d3b7"),n("2532"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e(n("5530")),o=e(n("5358")),r=e(n("7967")),s=n("26cb"),u=t.database(),l=(u.command,"opendb-admin-menus");function c(t){var a={};for(var n in o.default)t.includes(n)&&(a[n]=o.default[n]);return a}var d={components:{Icons:r.default},data:function(){return{formData:{menu_id:"",name:"",icon:"",url:"",sort:"",parent_id:"",permission:[],enable:null},rules:(0,i.default)({},c(["menu_id","name","icon","url","sort","parent_id","permission","enable"]))}},onLoad:function(t){var a=t.id;this.formDataId=a,this.getDetail(a)},methods:(0,i.default)((0,i.default)({},(0,s.mapActions)({init:"app/init"})),{},{submitForm:function(t){this.$refs.form.submit()},submit:function(t){var a=this,n=t.detail,e=n.value,i=n.errors;i||(uni.showLoading({title:"修改中...",mask:!0}),u.collection(l).doc(this.formDataId).update(e).then((function(t){uni.showToast({title:"修改成功"}),a.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()})))},getDetail:function(t){var a=this;uni.showLoading({mask:!0}),u.collection(l).where({_id:t}).get().then((function(t){var n=t.result.data[0];n&&(a.formData=n)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))},showIconPopup:function(){this.$refs.iconPopup.open()}})};a.default=d}).call(this,n("a9ff")["default"])},"800b":function(t,a,n){var e=n("24fb");a=e(!1),a.push([t.i,".icon-modal-box[data-v-6b9593d6]{padding-top:var(--top-window-height)}.icon-modal[data-v-6b9593d6]{width:350px;background-color:#fff;height:500px;overflow-y:scroll}@media screen and (min-width:768px){.icon-modal-pc[data-v-6b9593d6]{width:600px}}",""]),t.exports=a},ae60:function(t,a,n){"use strict";n.r(a);var e=n("48f4"),i=n("61c4");for(var o in i)"default"!==o&&function(t){n.d(a,t,(function(){return i[t]}))}(o);n("4bee");var r,s=n("f0c5"),u=Object(s["a"])(i["default"],e["b"],e["c"],!1,null,"6b9593d6",null,!1,e["a"],r);a["default"]=u.exports}}]);