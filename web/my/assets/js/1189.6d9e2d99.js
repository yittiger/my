(window.webpackJsonp=window.webpackJsonp||[]).push([[1189],{3143:function(e,t,n){"use strict";n.r(t);var o=n(395),r=n.n(o);n(0).default.use(r.a);var i={data:function(){return{tags:[{name:"标签一",type:""},{name:"标签二",type:"success"},{name:"标签三",type:"info"},{name:"标签四",type:"warning"},{name:"标签五",type:"danger"}]}}},a=n(18),s=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.tags,(function(t){return n("el-tag",{key:t.name,attrs:{closable:"",type:t.type}},[e._v("\n    "+e._s(t.name)+"\n  ")])})),1)}),[],!1,null,null,null);t.default=s.exports},395:function(e,t,n){e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=124)}({0:function(e,t,n){"use strict";function o(e,t,n,o,r,i,a,s){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,l):[l]}return{exports:e,options:c}}n.d(t,"a",(function(){return o}))},124:function(e,t,n){"use strict";n.r(t);var o={name:"ElTag",props:{text:String,closable:Boolean,type:String,hit:Boolean,disableTransitions:Boolean,color:String,size:String,effect:{type:String,default:"light",validator:function(e){return-1!==["dark","light","plain"].indexOf(e)}}},methods:{handleClose:function(e){e.stopPropagation(),this.$emit("close",e)},handleClick:function(e){this.$emit("click",e)}},computed:{tagSize:function(){return this.size||(this.$ELEMENT||{}).size}},render:function(e){var t=this.type,n=this.tagSize,o=this.hit,r=this.effect,i=e("span",{class:["el-tag",t?"el-tag--"+t:"",n?"el-tag--"+n:"",r?"el-tag--"+r:"",o&&"is-hit"],style:{backgroundColor:this.color},on:{click:this.handleClick}},[this.$slots.default,this.closable&&e("i",{class:"el-tag__close el-icon-close",on:{click:this.handleClose}})]);return this.disableTransitions?i:e("transition",{attrs:{name:"el-zoom-in-center"}},[i])}},r=n(0),i=Object(r.a)(o,void 0,void 0,!1,null,null,null);i.options.__file="packages/tag/src/tag.vue";var a=i.exports;a.install=function(e){e.component(a.name,a)};t.default=a}})}}]);