(window.webpackJsonp=window.webpackJsonp||[]).push([[1306],{3550:function(t,e,n){"use strict";n.r(e);var i=n(369),o=n.n(i),s=(n(789),n(117),n(790)),a=n(0),r={components:{MyClipboard:s.a},data:function(){return{text:"拷贝文字不应当是一件困难的事. 不需要过多繁杂的配置或者下载很多脚本文件"}}};a.default.use(o.a),a.default.use(s.a);var l=r,c=n(19),u=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("my-clipboard",{attrs:{text:this.text,tooltip:""}},[e("el-button",{attrs:{type:"primary"}},[this._v("复制到剪切板")])],1)}),[],!1,null,null,null);e.default=u.exports},369:function(t,e,n){t.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=97)}({0:function(t,e,n){"use strict";function i(t,e,n,i,o,s,a,r){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=l):o&&(l=r?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:c}}n.d(e,"a",(function(){return i}))},97:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"el-button",class:[t.type?"el-button--"+t.type:"",t.buttonSize?"el-button--"+t.buttonSize:"",{"is-disabled":t.buttonDisabled,"is-loading":t.loading,"is-plain":t.plain,"is-round":t.round,"is-circle":t.circle}],attrs:{disabled:t.buttonDisabled||t.loading,autofocus:t.autofocus,type:t.nativeType},on:{click:t.handleClick}},[t.loading?n("i",{staticClass:"el-icon-loading"}):t._e(),t.icon&&!t.loading?n("i",{class:t.icon}):t._e(),t.$slots.default?n("span",[t._t("default")],2):t._e()])};i._withStripped=!0;var o={name:"ElButton",inject:{elForm:{default:""},elFormItem:{default:""}},props:{type:{type:String,default:"default"},size:String,icon:{type:String,default:""},nativeType:{type:String,default:"button"},loading:Boolean,disabled:Boolean,plain:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean},computed:{_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},buttonSize:function(){return this.size||this._elFormItemSize||(this.$ELEMENT||{}).size},buttonDisabled:function(){return this.disabled||(this.elForm||{}).disabled}},methods:{handleClick:function(t){this.$emit("click",t)}}},s=n(0),a=Object(s.a)(o,i,[],!1,null,null,null);a.options.__file="packages/button/src/button.vue";var r=a.exports;r.install=function(t){t.component(r.name,r)};e.default=r}})},789:function(t,e,n){},790:function(t,e,n){"use strict";var i=n(47),o=n(46),s=n(392),a=n.n(s),r=n(761),l=n.n(r),c={name:"MyClipboard",components:{Tooltip:a.a},props:{tag:{type:String,default:"span"},text:{type:[String,Function]},target:{type:[String,Function]},action:{type:[String,Function]},message:[Boolean,Object],tooltip:[Object,Boolean],defaultTip:{type:String,default:"复制"},successTip:{type:String,default:"复制成功"},disabled:Boolean},data:function(){return{tip:this.defaultTip}},computed:{clipboardText:function(){return"string"==typeof this.text?this.text:null},clipboardTarget:function(){return"string"==typeof this.target?this.target:null},clipboardAction:function(){return"string"==typeof this.action?this.action:null},options:function(){var t={};return"function"==typeof this.text&&(t.text=this.text),"function"==typeof this.action&&(t.action=this.action),"function"==typeof this.target&&(t.action=this.target),t},tooltipOptions:function(){return Object(o.a)(Object(o.a)({content:this.tip,placement:"top"},this.tooltip||{}),{},{disabled:this.disabled||!this.tooltip})},messageOptions:function(){return Object(o.a)({message:this.successTip,type:"success"},this.message||{})}},watch:{options:function(){var t=this;this.dispose(),this.$nextTick((function(){t.instance()}))},disabled:function(t){var e=this;this.dispose(),t&&this.$nextTick((function(){e.instance()}))}},methods:{instance:function(){var t=this;this.clipboard=new l.a(this.$el,this.options),this.clipboard.on("success",(function(e){t.tooltipHandler(),t.messageHandler(),t.$emit("success",e),e.clearSelection()})),this.clipboard.on("error",(function(e){t.$emit("error",e)}))},dispose:function(){clearTimeout(this.timerId),this.clipboard&&this.clipboard.destroy(),this.clipboard=null},tooltipHandler:function(){var t=this;this.tip=this.successTip,clearTimeout(this.timerId),this.timerId=setTimeout((function(){t.tip=t.defaultTip}),3e3)},messageHandler:function(){this.message&&this.$message(Object(o.a)({},this.messageOptions))},copy:function(){this.$el.click()}},mounted:function(){!this.disabled&&this.instance()},beforeDestroy:function(){this.dispose()}},u=n(19),d=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Tooltip",t._b({},"Tooltip",t.tooltipOptions,!1),[n(t.tag,{tag:"component",staticClass:"my-clipboard",class:{"is-disabled":t.disabled},attrs:{"data-clipboard-text":t.clipboardText,"data-clipboard-target":t.clipboardTarget,"data-clipboard-action":t.clipboardAction}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports;e.a=Object(i.a)(d)}}]);