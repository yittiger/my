(window.webpackJsonp=window.webpackJsonp||[]).push([[1042],{3112:function(t,e,a){"use strict";a.r(e);a(552),a(359);var n=a(633),o=a.n(n),s=(a(553),a(634)),r=a.n(s),i=a(0);i.default.use(r.a),i.default.use(o.a);var l={data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}},methods:{formatter:function(t,e){return t.address}}},d=a(18),c=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("el-table",{staticStyle:{width:"100%"},attrs:{data:this.tableData,"default-sort":{prop:"date",order:"descending"}}},[e("el-table-column",{attrs:{prop:"date",label:"日期",sortable:"",width:"180"}}),this._v(" "),e("el-table-column",{attrs:{prop:"name",label:"姓名",sortable:"",width:"180"}}),this._v(" "),e("el-table-column",{attrs:{prop:"address",label:"地址",formatter:this.formatter}})],1)}),[],!1,null,null,null);e.default=c.exports},359:function(t,e,a){},364:function(t,e,a){"use strict";function n(t,e,a){this.$children.forEach((function(o){o.$options.componentName===t?o.$emit.apply(o,[e].concat(a)):n.apply(o,[t,e].concat([a]))}))}e.__esModule=!0,e.default={methods:{dispatch:function(t,e,a){for(var n=this.$parent||this.$root,o=n.$options.componentName;n&&(!o||o!==t);)(n=n.$parent)&&(o=n.$options.componentName);n&&n.$emit.apply(n,[e].concat(a))},broadcast:function(t,e,a){n.call(this,t,e,a)}}}},447:function(t,e,a){"use strict";e.__esModule=!0;a(360);e.default={mounted:function(){},methods:{getMigratingConfig:function(){return{props:{},events:{}}}}}},552:function(t,e,a){},553:function(t,e,a){}}]);