(window.webpackJsonp=window.webpackJsonp||[]).push([[1496],{3074:function(e,t,c){"use strict";c.r(t);var n=c(1058),r=c.n(n),a=c(947),o=c.n(a),s=c(369),i=c.n(s),l=c(0);l.default.use(i.a),l.default.use(o.a),l.default.use(r.a);var u={data:function(){return{percentage:10,colors:[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}]}},methods:{increase:function(){this.percentage+=10,this.percentage>100&&(this.percentage=100)},decrease:function(){this.percentage-=10,this.percentage<0&&(this.percentage=0)}}},p=c(19),h=Object(p.a)(u,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("el-progress",{attrs:{type:"dashboard",percentage:this.percentage,color:this.colors}}),this._v(" "),t("div",[t("el-button-group",[t("el-button",{attrs:{icon:"el-icon-minus"},on:{click:this.decrease}}),this._v(" "),t("el-button",{attrs:{icon:"el-icon-plus"},on:{click:this.increase}})],1)],1)],1)}),[],!1,null,null,null);t.default=h.exports}}]);