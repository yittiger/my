(window.webpackJsonp=window.webpackJsonp||[]).push([[1521],{3251:function(t,i,e){"use strict";e.r(i);var n=e(1286),l=e.n(n),o=e(369),s=e.n(o),a=e(0);a.default.use(s.a),a.default.use(l.a);var r={data:function(){return{outerVisible:!1,innerVisible:!1}}},u=e(19),c=Object(u.a)(r,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("el-button",{attrs:{type:"text"},on:{click:function(i){t.outerVisible=!0}}},[t._v("点击打开外层 Dialog")]),t._v(" "),e("el-dialog",{attrs:{title:"外层 Dialog",visible:t.outerVisible},on:{"update:visible":function(i){t.outerVisible=i}}},[e("el-dialog",{attrs:{width:"30%",title:"内层 Dialog",visible:t.innerVisible,"append-to-body":""},on:{"update:visible":function(i){t.innerVisible=i}}}),t._v(" "),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(i){t.outerVisible=!1}}},[t._v("取 消")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(i){t.innerVisible=!0}}},[t._v("打开内层 Dialog")])],1)],1)],1)}),[],!1,null,null,null);i.default=c.exports}}]);