(window.webpackJsonp=window.webpackJsonp||[]).push([[1533],{3650:function(n,e,t){"use strict";t.r(e);t(2159),t(126);var r=t(2212),i=(t(23),t(88),t(86),t(4),{data:function(){return{arr1:["1","2","3","4"],errInfo:""}},methods:{validate:function(n,e){var t=this;return new Promise((function(e,r){var i=[],a=n.filter((function(n,e){if(!(n.length>3))return n;i.push({index:e,val:n})})),u=i.map((function(n){return n.index+1})).join(",");return t.errInfo=i.map((function(n){return n.val})).join(","),i.length&&t.$message({type:"warning",message:"第".concat(u,"个标签长度过长")}),a.length?e(a):r(i)}))},invalidCb:function(n,e){this.errInfo=n.map((function(n){return n.val})).join(","),e.inputVisible=!1,e.inputValue=""}}});t(0).default.use(r.a);var a=i,u=t(21),o=Object(u.a)(a,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("div",[n._v("\n    标签禁止超过三个字符"),t("br"),n._v(" "),t("my-edit-tags",{attrs:{"tags-list":n.arr1,validate:n.validate,"invalidate-handle":n.invalidCb,"input-width":"200px"}}),n._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:n.errInfo,expression:"errInfo"}]},[n._v("\n    错误信息："+n._s(n.errInfo)+"\n    ")])],1)])}),[],!1,null,null,null);e.default=o.exports}}]);