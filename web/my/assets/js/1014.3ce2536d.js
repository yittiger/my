(window.webpackJsonp=window.webpackJsonp||[]).push([[1014],{2816:function(t,a,n){"use strict";n.r(a);n(552),n(359);var o=n(633),e=n.n(o),l=(n(553),n(634)),u=n.n(l),r=n(0);r.default.use(u.a),r.default.use(e.a);var c={data:function(){return{tableData:[{id:"12987122",name:"王小虎",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"王小虎",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15}]}},methods:{arraySpanMethod:function(t){t.row,t.column;var a=t.rowIndex,n=t.columnIndex;if(a%2==0){if(0===n)return[1,2];if(1===n)return[0,0]}},objectSpanMethod:function(t){t.row,t.column;var a=t.rowIndex;if(0===t.columnIndex)return a%2==0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}}}},m=n(18),i=Object(m.a)(c,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"span-method":t.arraySpanMethod,border:""}},[n("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t._v(" "),n("el-table-column",{attrs:{prop:"amount1",sortable:"",label:"数值 1"}}),t._v(" "),n("el-table-column",{attrs:{prop:"amount2",sortable:"",label:"数值 2"}}),t._v(" "),n("el-table-column",{attrs:{prop:"amount3",sortable:"",label:"数值 3"}})],1),t._v(" "),n("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData,"span-method":t.objectSpanMethod,border:""}},[n("el-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t._v(" "),n("el-table-column",{attrs:{prop:"amount1",label:"数值 1（元）"}}),t._v(" "),n("el-table-column",{attrs:{prop:"amount2",label:"数值 2（元）"}}),t._v(" "),n("el-table-column",{attrs:{prop:"amount3",label:"数值 3（元）"}})],1)],1)}),[],!1,null,null,null);a.default=i.exports},359:function(t,a,n){},364:function(t,a,n){"use strict";function o(t,a,n){this.$children.forEach((function(e){e.$options.componentName===t?e.$emit.apply(e,[a].concat(n)):o.apply(e,[t,a].concat([n]))}))}a.__esModule=!0,a.default={methods:{dispatch:function(t,a,n){for(var o=this.$parent||this.$root,e=o.$options.componentName;o&&(!e||e!==t);)(o=o.$parent)&&(e=o.$options.componentName);o&&o.$emit.apply(o,[a].concat(n))},broadcast:function(t,a,n){o.call(this,t,a,n)}}}},447:function(t,a,n){"use strict";a.__esModule=!0;n(360);a.default={mounted:function(){},methods:{getMigratingConfig:function(){return{props:{},events:{}}}}}},552:function(t,a,n){},553:function(t,a,n){}}]);