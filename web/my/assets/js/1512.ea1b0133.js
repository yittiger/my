(window.webpackJsonp=window.webpackJsonp||[]).push([[1512],{3442:function(e,r,t){"use strict";t.r(r);var s=t(379),o=t.n(s),l=t(402),a=t.n(l),u=t(446),n=t.n(u),i=t(373),c=t.n(i),m=(t(2168),t(0)),f={data:function(){var e=this;return{ruleForm:{pass:"",checkPass:"",age:""},rules:{pass:[{validator:function(r,t,s){""===t?s(new Error("请输入密码")):(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),s())},trigger:"blur"}],checkPass:[{validator:function(r,t,s){""===t?s(new Error("请再次输入密码")):t!==e.ruleForm.pass?s(new Error("两次输入密码不一致!")):s()},trigger:"blur"}],age:[{validator:function(e,r,t){if(!r)return t(new Error("年龄不能为空"));setTimeout((function(){Number.isInteger(r)?r<18?t(new Error("必须年满18岁")):t():t(new Error("请输入数字值"))}),1e3)},trigger:"blur"}]}}},methods:{submitForm:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))},resetForm:function(e){this.$refs[e].resetFields()}}};m.default.use(c.a),m.default.use(n.a),m.default.use(a.a),m.default.use(o.a);var p=f,d=t(21),F=Object(d.a)(p,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"密码",prop:"pass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.pass,callback:function(r){e.$set(e.ruleForm,"pass",r)},expression:"ruleForm.pass"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"确认密码",prop:"checkPass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.checkPass,callback:function(r){e.$set(e.ruleForm,"checkPass",r)},expression:"ruleForm.checkPass"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"年龄",prop:"age"}},[t("el-input",{model:{value:e.ruleForm.age,callback:function(r){e.$set(e.ruleForm,"age",e._n(r))},expression:"ruleForm.age"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("提交")]),e._v(" "),t("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)}),[],!1,null,null,null);r.default=F.exports}}]);