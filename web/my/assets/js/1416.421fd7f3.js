(window.webpackJsonp=window.webpackJsonp||[]).push([[1416],{3015:function(t,e,n){"use strict";n.r(e);var o=n(409),r=n.n(o);n(0).default.use(r.a);var i={},s=n(19),a=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-tag",[t._v("标签一")]),t._v(" "),n("el-tag",{attrs:{type:"success"}},[t._v("标签二")]),t._v(" "),n("el-tag",{attrs:{type:"info"}},[t._v("标签三")]),t._v(" "),n("el-tag",{attrs:{type:"warning"}},[t._v("标签四")]),t._v(" "),n("el-tag",{attrs:{type:"danger"}},[t._v("标签五")])],1)}),[],!1,null,null,null);e.default=a.exports},409:function(t,e,n){t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=124)}({0:function(t,e,n){"use strict";function o(t,e,n,o,r,i,s,a){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=l):r&&(l=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,l):[l]}return{exports:t,options:c}}n.d(e,"a",(function(){return o}))},124:function(t,e,n){"use strict";n.r(e);var o={name:"ElTag",props:{text:String,closable:Boolean,type:String,hit:Boolean,disableTransitions:Boolean,color:String,size:String,effect:{type:String,default:"light",validator:function(t){return-1!==["dark","light","plain"].indexOf(t)}}},methods:{handleClose:function(t){t.stopPropagation(),this.$emit("close",t)},handleClick:function(t){this.$emit("click",t)}},computed:{tagSize:function(){return this.size||(this.$ELEMENT||{}).size}},render:function(t){var e=this.type,n=this.tagSize,o=this.hit,r=this.effect,i=t("span",{class:["el-tag",e?"el-tag--"+e:"",n?"el-tag--"+n:"",r?"el-tag--"+r:"",o&&"is-hit"],style:{backgroundColor:this.color},on:{click:this.handleClick}},[this.$slots.default,this.closable&&t("i",{class:"el-tag__close el-icon-close",on:{click:this.handleClose}})]);return this.disableTransitions?i:t("transition",{attrs:{name:"el-zoom-in-center"}},[i])}},r=n(0),i=Object(r.a)(o,void 0,void 0,!1,null,null,null);i.options.__file="packages/tag/src/tag.vue";var s=i.exports;s.install=function(t){t.component(s.name,s)};e.default=s}})}}]);