(window.webpackJsonp=window.webpackJsonp||[]).push([[1315],{2429:function(t,e,r){},2760:function(t,e,r){"use strict";r(2429)},3694:function(t,e,r){"use strict";r.r(e);var n=r(483),a=r.n(n),i=(r(961),r(117),r(965)),s=r(0),o={components:{MyAvatar:i.a}};s.default.use(a.a),s.default.use(i.a);var u=o,l=(r(2760),r(19)),c=Object(l.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-row",[e("my-avatar",{attrs:{icon:"el-icon-user",size:64}}),this._v(" "),e("my-avatar",{attrs:{icon:"el-icon-user",size:"large"}}),this._v(" "),e("my-avatar",{attrs:{icon:"el-icon-user"}}),this._v(" "),e("my-avatar",{attrs:{icon:"el-icon-user",size:"small"}})],1),this._v(" "),e("el-row",[e("my-avatar",{attrs:{icon:"el-icon-user",size:64,shape:"square"}}),this._v(" "),e("my-avatar",{attrs:{icon:"el-icon-user",size:"large",shape:"square"}}),this._v(" "),e("my-avatar",{attrs:{icon:"el-icon-user",shape:"square"}}),this._v(" "),e("my-avatar",{attrs:{icon:"el-icon-user",size:"small",shape:"square"}})],1)],1)}),[],!1,null,"50af6fe6",null);e.default=c.exports},483:function(t,e){t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=132)}({132:function(t,e,r){"use strict";r.r(e);var n={name:"ElRow",componentName:"ElRow",props:{tag:{type:String,default:"div"},gutter:Number,type:String,justify:{type:String,default:"start"},align:{type:String,default:"top"}},computed:{style:function(){var t={};return this.gutter&&(t.marginLeft="-"+this.gutter/2+"px",t.marginRight=t.marginLeft),t}},render:function(t){return t(this.tag,{class:["el-row","start"!==this.justify?"is-justify-"+this.justify:"","top"!==this.align?"is-align-"+this.align:"",{"el-row--flex":"flex"===this.type}],style:this.style},this.$slots.default)},install:function(t){t.component(n.name,n)}};e.default=n}})}}]);