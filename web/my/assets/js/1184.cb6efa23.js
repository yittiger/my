(window.webpackJsonp=window.webpackJsonp||[]).push([[1184],{3367:function(e,a,t){"use strict";t.r(a);t(220),t(461),t(479),t(362);var i=t(379),n=t.n(i),l=(t(453),t(492)),r=t.n(l),o=(t(529),t(537)),m=t.n(o),u=(t(377),t(375)),s=t.n(u),d=t(0),c={data:function(){return{dynamicValidateForm:{domains:[{value:""}],email:""}}},methods:{submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm:function(e){this.$refs[e].resetFields()},removeDomain:function(e){var a=this.dynamicValidateForm.domains.indexOf(e);-1!==a&&this.dynamicValidateForm.domains.splice(a,1)},addDomain:function(){this.dynamicValidateForm.domains.push({value:"",key:Date.now()})}}};d.default.use(s.a),d.default.use(m.a),d.default.use(r.a),d.default.use(n.a);var f=c,v=t(18),p=Object(v.a)(f,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-form",{ref:"dynamicValidateForm",staticClass:"demo-dynamic",attrs:{model:e.dynamicValidateForm,"label-width":"100px"}},[t("el-form-item",{attrs:{prop:"email",label:"邮箱",rules:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}]}},[t("el-input",{model:{value:e.dynamicValidateForm.email,callback:function(a){e.$set(e.dynamicValidateForm,"email",a)},expression:"dynamicValidateForm.email"}})],1),e._v(" "),e._l(e.dynamicValidateForm.domains,(function(a,i){return t("el-form-item",{key:a.key,attrs:{label:"域名"+i,prop:"domains."+i+".value",rules:{required:!0,message:"域名不能为空",trigger:"blur"}}},[t("el-input",{model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"domain.value"}}),t("el-button",{on:{click:function(t){return t.preventDefault(),e.removeDomain(a)}}},[e._v("删除")])],1)})),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(a){return e.submitForm("dynamicValidateForm")}}},[e._v("提交")]),e._v(" "),t("el-button",{on:{click:e.addDomain}},[e._v("新增域名")]),e._v(" "),t("el-button",{on:{click:function(a){return e.resetForm("dynamicValidateForm")}}},[e._v("重置")])],1)],2)}),[],!1,null,null,null);a.default=p.exports},362:function(e,a,t){},377:function(e,a,t){},453:function(e,a,t){},479:function(e,a,t){},529:function(e,a,t){}}]);