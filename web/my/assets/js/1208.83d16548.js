(window.webpackJsonp=window.webpackJsonp||[]).push([[1208],{2287:function(t,e,r){},2600:function(t,e,r){"use strict";r(2287)},2992:function(t,e,r){"use strict";r.r(e);var n=r(483),s=r.n(n),o=r(491),l=r.n(o),i=r(0);i.default.use(l.a),i.default.use(s.a);var a={},u=(r(2600),r(19)),c=Object(u.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-row",{staticClass:"row-bg",attrs:{type:"flex"}},[r("el-col",{attrs:{span:6}},[r("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"grid-content bg-purple-light"})]),t._v(" "),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"grid-content bg-purple"})])],1),t._v(" "),r("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[r("el-col",{attrs:{span:6}},[r("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"grid-content bg-purple-light"})]),t._v(" "),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"grid-content bg-purple"})])],1),t._v(" "),r("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"end"}},[r("el-col",{attrs:{span:6}},[r("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"grid-content bg-purple-light"})]),t._v(" "),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"grid-content bg-purple"})])],1),t._v(" "),r("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[r("el-col",{attrs:{span:6}},[r("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"grid-content bg-purple-light"})]),t._v(" "),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"grid-content bg-purple"})])],1),t._v(" "),r("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[r("el-col",{attrs:{span:6}},[r("div",{staticClass:"grid-content bg-purple"})]),t._v(" "),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"grid-content bg-purple-light"})]),t._v(" "),r("el-col",{attrs:{span:6}},[r("div",{staticClass:"grid-content bg-purple"})])],1)],1)}),[],!1,null,"513ee75c",null);e.default=c.exports},483:function(t,e){t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=132)}({132:function(t,e,r){"use strict";r.r(e);var n={name:"ElRow",componentName:"ElRow",props:{tag:{type:String,default:"div"},gutter:Number,type:String,justify:{type:String,default:"start"},align:{type:String,default:"top"}},computed:{style:function(){var t={};return this.gutter&&(t.marginLeft="-"+this.gutter/2+"px",t.marginRight=t.marginLeft),t}},render:function(t){return t(this.tag,{class:["el-row","start"!==this.justify?"is-justify-"+this.justify:"","top"!==this.align?"is-align-"+this.align:"",{"el-row--flex":"flex"===this.type}],style:this.style},this.$slots.default)},install:function(t){t.component(n.name,n)}};e.default=n}})},491:function(t,e){t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/dist/",r(r.s=134)}({134:function(t,e,r){"use strict";r.r(e);var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s={name:"ElCol",props:{span:{type:Number,default:24},tag:{type:String,default:"div"},offset:Number,pull:Number,push:Number,xs:[Number,Object],sm:[Number,Object],md:[Number,Object],lg:[Number,Object],xl:[Number,Object]},computed:{gutter:function(){for(var t=this.$parent;t&&"ElRow"!==t.$options.componentName;)t=t.$parent;return t?t.gutter:0}},render:function(t){var e=this,r=[],s={};return this.gutter&&(s.paddingLeft=this.gutter/2+"px",s.paddingRight=s.paddingLeft),["span","offset","pull","push"].forEach((function(t){(e[t]||0===e[t])&&r.push("span"!==t?"el-col-"+t+"-"+e[t]:"el-col-"+e[t])})),["xs","sm","md","lg","xl"].forEach((function(t){if("number"==typeof e[t])r.push("el-col-"+t+"-"+e[t]);else if("object"===n(e[t])){var s=e[t];Object.keys(s).forEach((function(e){r.push("span"!==e?"el-col-"+t+"-"+e+"-"+s[e]:"el-col-"+t+"-"+s[e])}))}})),t(this.tag,{class:["el-col",r],style:s},this.$slots.default)},install:function(t){t.component(s.name,s)}};e.default=s}})}}]);