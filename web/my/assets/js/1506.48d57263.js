(window.webpackJsonp=window.webpackJsonp||[]).push([[1506],{3137:function(e,i,l){"use strict";l.r(i);var t=l(1290),a=l.n(t),o=l(1286),n=l.n(o),s=l(0),r={data:function(){return{dialogImageUrl:"",dialogVisible:!1}},methods:{handleRemove:function(e,i){console.log(e,i)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0}}};s.default.use(n.a),s.default.use(a.a);var d=r,u=l(19),c=Object(u.a)(d,(function(){var e=this,i=e.$createElement,l=e._self._c||i;return l("div",[l("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove}},[l("i",{staticClass:"el-icon-plus"})]),e._v(" "),l("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(i){e.dialogVisible=i}}},[l("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)}),[],!1,null,null,null);i.default=c.exports}}]);