(window.webpackJsonp=window.webpackJsonp||[]).push([[1346],{1721:function(t,e,n){t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=108)}({0:function(t,e,n){"use strict";function o(t,e,n,o,r,i,l,s){var u,a="function"==typeof t?t.options:t;if(e&&(a.render=e,a.staticRenderFns=n,a._compiled=!0),o&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),l?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},a._ssrRegister=u):r&&(u=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(a.functional){a._injectStyles=u;var c=a.render;a.render=function(t,e){return u.call(e),c(t,e)}}else{var f=a.beforeCreate;a.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:a}}n.d(e,"a",(function(){return o}))},108:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"el-fade-in"}},[t.visible?n("div",{staticClass:"el-backtop",style:{right:t.styleRight,bottom:t.styleBottom},on:{click:function(e){return e.stopPropagation(),t.handleClick(e)}}},[t._t("default",[n("el-icon",{attrs:{name:"caret-top"}})])],2):t._e()])};o._withStripped=!0;var r=n(25),i=n.n(r),l=function(t){return Math.pow(t,3)},s={name:"ElBacktop",props:{visibilityHeight:{type:Number,default:200},target:[String],right:{type:Number,default:40},bottom:{type:Number,default:40}},data:function(){return{el:null,container:null,visible:!1}},computed:{styleBottom:function(){return this.bottom+"px"},styleRight:function(){return this.right+"px"}},mounted:function(){this.init(),this.throttledScrollHandler=i()(300,this.onScroll),this.container.addEventListener("scroll",this.throttledScrollHandler)},methods:{init:function(){if(this.container=document,this.el=document.documentElement,this.target){if(this.el=document.querySelector(this.target),!this.el)throw new Error("target is not existed: "+this.target);this.container=this.el}},onScroll:function(){var t=this.el.scrollTop;this.visible=t>=this.visibilityHeight},handleClick:function(t){this.scrollToTop(),this.$emit("click",t)},scrollToTop:function(){var t=this.el,e=Date.now(),n=t.scrollTop,o=window.requestAnimationFrame||function(t){return setTimeout(t,16)};o((function r(){var i,s=(Date.now()-e)/500;s<1?(t.scrollTop=n*(1-((i=s)<.5?l(2*i)/2:1-l(2*(1-i))/2)),o(r)):t.scrollTop=0}))}},beforeDestroy:function(){this.container.removeEventListener("scroll",this.throttledScrollHandler)}},u=n(0),a=Object(u.a)(s,o,[],!1,null,null,null);a.options.__file="packages/backtop/src/main.vue";var c=a.exports;c.install=function(t){t.component(c.name,c)};e.default=c},25:function(t,e){t.exports=n(400)}})},3642:function(t,e,n){"use strict";n.r(e);var o=n(1721),r=n.n(o);n(0).default.use(r.a);var i={},l=n(21),s=Object(l.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n   Scroll down to see the bottom-right button.\n   "),e("el-backtop",{attrs:{target:".page"}})],1)}),[],!1,null,null,null);e.default=s.exports},400:function(t,e){t.exports=function(t,e,n,o){var r,i=0;return"boolean"!=typeof e&&(o=n,n=e,e=void 0),function(){var l=this,s=Number(new Date)-i,u=arguments;function a(){i=Number(new Date),n.apply(l,u)}function c(){r=void 0}o&&!r&&a(),r&&clearTimeout(r),void 0===o&&s>t?a():!0!==e&&(r=setTimeout(o?c:a,void 0===o?t-s:t))}}}}]);