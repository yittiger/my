(window.webpackJsonp=window.webpackJsonp||[]).push([[1189],{3420:function(e,r,t){"use strict";t.r(r);t(200),t(2188),t(479),t(362);var o=t(379),s=t.n(o),l=(t(453),t(492)),u=t.n(l),a=(t(529),t(537)),n=t.n(a),i=(t(377),t(375)),c=t.n(i),m=t(0),f={data:function(){var e=this;return{ruleForm:{pass:"",checkPass:"",age:""},rules:{pass:[{validator:function(r,t,o){""===t?o(new Error("请输入密码")):(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),o())},trigger:"blur"}],checkPass:[{validator:function(r,t,o){""===t?o(new Error("请再次输入密码")):t!==e.ruleForm.pass?o(new Error("两次输入密码不一致!")):o()},trigger:"blur"}],age:[{validator:function(e,r,t){if(!r)return t(new Error("年龄不能为空"));setTimeout((function(){Number.isInteger(r)?r<18?t(new Error("必须年满18岁")):t():t(new Error("请输入数字值"))}),1e3)},trigger:"blur"}]}}},methods:{submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm:function(e){this.$refs[e].resetFields()}}};m.default.use(c.a),m.default.use(n.a),m.default.use(u.a),m.default.use(s.a);var p=f,d=t(18),F=Object(d.a)(p,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"密码",prop:"pass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.pass,callback:function(r){e.$set(e.ruleForm,"pass",r)},expression:"ruleForm.pass"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.checkPass,callback:function(r){e.$set(e.ruleForm,"checkPass",r)},expression:"ruleForm.checkPass"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"年龄",prop:"age"}},[t("el-input",{model:{value:e.ruleForm.age,callback:function(r){e.$set(e.ruleForm,"age",e._n(r))},expression:"ruleForm.age"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),t("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)}),[],!1,null,null,null);r.default=F.exports},362:function(e,r,t){},377:function(e,r,t){},453:function(e,r,t){},479:function(e,r,t){},529:function(e,r,t){}}]);