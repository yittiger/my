(window.webpackJsonp=window.webpackJsonp||[]).push([[815],{3174:function(t,e,n){"use strict";n.r(e);n(764),n(125);var r=n(766),i=n(441),o=n(400),a=n(0);a.default.use(o.a),a.default.use(i.a),a.default.use(r.a);var c={},s=n(18),u=Object(s.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"600px"}},[e("my-dv-page",{attrs:{target:"parent",fit:""}},[e("my-dv-box",{attrs:{width:"400px",height:"200px",left:"100px",top:"100px"}},[e("my-panel",{attrs:{title:"标题",fit:""}},[this._v("内容")])],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports},364:function(t,e,n){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=h,e.addClass=function(t,e){if(!t)return;for(var n=t.className,r=(e||"").split(" "),i=0,o=r.length;i<o;i++){var a=r[i];a&&(t.classList?t.classList.add(a):h(t,a)||(n+=" "+a))}t.classList||(t.className=n)},e.removeClass=function(t,e){if(!t||!e)return;for(var n=e.split(" "),r=" "+t.className+" ",i=0,o=n.length;i<o;i++){var a=n[i];a&&(t.classList?t.classList.remove(a):h(t,a)&&(r=r.replace(" "+a+" "," ")))}t.classList||(t.className=(r||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,n,i){if(!e||!n)return;if("object"===(void 0===n?"undefined":r(n)))for(var o in n)n.hasOwnProperty(o)&&t(e,o,n[o]);else"opacity"===(n=l(n))&&u<9?e.style.filter=isNaN(i)?"":"alpha(opacity="+100*i+")":e.style[n]=i};var i,o=n(0);var a=((i=o)&&i.__esModule?i:{default:i}).default.prototype.$isServer,c=/([\:\-\_]+(.))/g,s=/^moz([A-Z])/,u=a?0:Number(document.documentMode),l=function(t){return t.replace(c,(function(t,e,n,r){return r?n.toUpperCase():n})).replace(s,"Moz$1")},f=e.on=!a&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},d=e.off=!a&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};e.once=function(t,e,n){f(t,e,(function r(){n&&n.apply(this,arguments),d(t,e,r)}))};function h(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var p=e.getStyle=u<9?function(t,e){if(!a){if(!t||!e)return null;"float"===(e=l(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!a){if(!t||!e)return null;"float"===(e=l(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}};var y=e.isScroll=function(t,e){if(!a)return p(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!a){for(var n=t;n;){if([window,document,document.documentElement].includes(n))return window;if(y(n,e))return n;n=n.parentNode}return n}},e.isInContainer=function(t,e){if(a||!t||!e)return!1;var n=t.getBoundingClientRect(),r=void 0;return r=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),n.top<r.bottom&&n.bottom>r.top&&n.right>r.left&&n.left<r.right}},366:function(t,e,n){"use strict";e.__esModule=!0,e.isEmpty=e.isEqual=e.arrayEquals=e.looseEqual=e.capitalize=e.kebabCase=e.autoprefixer=e.isFirefox=e.isEdge=e.isIE=e.coerceTruthyValueToArray=e.arrayFind=e.arrayFindIndex=e.escapeRegexpString=e.valueEquals=e.generateId=e.getValueByPath=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.noop=function(){},e.hasOwn=function(t,e){return s.call(t,e)},e.toObject=function(t){for(var e={},n=0;n<t.length;n++)t[n]&&u(e,t[n]);return e},e.getPropByPath=function(t,e,n){for(var r=t,i=(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),o=0,a=i.length;o<a-1&&(r||n);++o){var c=i[o];if(!(c in r)){if(n)throw new Error("please transfer a valid prop path to form item!");break}r=r[c]}return{o:r,k:i[o],v:r?r[i[o]]:null}},e.rafThrottle=function(t){var e=!1;return function(){for(var n=this,r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];e||(e=!0,window.requestAnimationFrame((function(r){t.apply(n,i),e=!1})))}},e.objToArray=function(t){if(Array.isArray(t))return t;return h(t)?[]:[t]};var i,o=n(0),a=(i=o)&&i.__esModule?i:{default:i},c=n(408);var s=Object.prototype.hasOwnProperty;function u(t,e){for(var n in e)t[n]=e[n];return t}e.getValueByPath=function(t,e){for(var n=(e=e||"").split("."),r=t,i=null,o=0,a=n.length;o<a;o++){var c=n[o];if(!r)break;if(o===a-1){i=r[c];break}r=r[c]}return i};e.generateId=function(){return Math.floor(1e4*Math.random())},e.valueEquals=function(t,e){if(t===e)return!0;if(!(t instanceof Array))return!1;if(!(e instanceof Array))return!1;if(t.length!==e.length)return!1;for(var n=0;n!==t.length;++n)if(t[n]!==e[n])return!1;return!0},e.escapeRegexpString=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return String(t).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")};var l=e.arrayFindIndex=function(t,e){for(var n=0;n!==t.length;++n)if(e(t[n]))return n;return-1},f=(e.arrayFind=function(t,e){var n=l(t,e);return-1!==n?t[n]:void 0},e.coerceTruthyValueToArray=function(t){return Array.isArray(t)?t:t?[t]:[]},e.isIE=function(){return!a.default.prototype.$isServer&&!isNaN(Number(document.documentMode))},e.isEdge=function(){return!a.default.prototype.$isServer&&navigator.userAgent.indexOf("Edge")>-1},e.isFirefox=function(){return!a.default.prototype.$isServer&&!!window.navigator.userAgent.match(/firefox/i)},e.autoprefixer=function(t){if("object"!==(void 0===t?"undefined":r(t)))return t;var e=["ms-","webkit-"];return["transform","transition","animation"].forEach((function(n){var r=t[n];n&&r&&e.forEach((function(e){t[e+n]=r}))})),t},e.kebabCase=function(t){var e=/([^-])([A-Z])/g;return t.replace(e,"$1-$2").replace(e,"$1-$2").toLowerCase()},e.capitalize=function(t){return(0,c.isString)(t)?t.charAt(0).toUpperCase()+t.slice(1):t},e.looseEqual=function(t,e){var n=(0,c.isObject)(t),r=(0,c.isObject)(e);return n&&r?JSON.stringify(t)===JSON.stringify(e):!n&&!r&&String(t)===String(e)}),d=e.arrayEquals=function(t,e){if(e=e||[],(t=t||[]).length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!f(t[n],e[n]))return!1;return!0},h=(e.isEqual=function(t,e){return Array.isArray(t)&&Array.isArray(e)?d(t,e):f(t,e)},e.isEmpty=function(t){if(null==t)return!0;if("boolean"==typeof t)return!1;if("number"==typeof t)return!t;if(t instanceof Error)return""===t.message;switch(Object.prototype.toString.call(t)){case"[object String]":case"[object Array]":return!t.length;case"[object File]":case"[object Map]":case"[object Set]":return!t.size;case"[object Object]":return!Object.keys(t).length}return!1})},372:function(t,e,n){var r=n(9),i=n(89),o=n(13),a=n(128).f,c=function(t){return function(e){for(var n,c=o(e),s=i(c),u=s.length,l=0,f=[];u>l;)n=s[l++],r&&!a.call(c,n)||f.push(t?[n,c[n]]:c[n]);return f}};t.exports={entries:c(!0),values:c(!1)}},382:function(t,e,n){"use strict";var r=n(1),i=n(35).findIndex,o=n(127),a=n(20),c=!0,s=a("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){c=!1})),r({target:"Array",proto:!0,forced:c||!s},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},384:function(t,e,n){var r=n(1),i=n(372).values;r({target:"Object",stat:!0},{values:function(t){return i(t)}})},400:function(t,e,n){"use strict";var r=n(53),i=(n(201),n(21),n(382),n(124),n(209),n(200),n(31)),o=n(52),a={name:"MyDvBox",inheritAttrs:!1,provide:function(){return{layoutVm:this.layout?this:null}},inject:{layoutVm:{default:null}},props:{width:String,height:String,defaultWidth:{type:String,default:"auto"},defaultHeight:{type:String,default:"auto"},left:{type:[String,Number]},top:{type:[String,Number]},right:[String,Number],bottom:[String,Number],zIndex:[Number,String],xAlign:{type:String,validator:function(t){return["left","right","center"].includes(t)}},yAlign:{type:String,validator:function(t){return["top","bottom","middle"].includes(t)}},contentAlign:{type:String,default:"left",validator:function(t){return["left","right","center"].includes(t)}},zoom:Number,scale:Number,fit:Boolean,visible:{type:Boolean,default:!0},position:{type:Boolean,default:!0},margin:String,padding:String,inline:Boolean,opacity:{type:Number,default:1},shadow:Boolean,layout:Boolean,weight:{type:Number,default:1},gap:{type:Number,default:0},direction:{type:String,default:"row",validator:function(t){return["row","column"].includes(t)}},free:Boolean},data:function(){return{boxes:[]}},computed:{layoutSize:function(){var t=this,e=this.weight,n=this.layoutVm,r=this.free;if(n&&!r){var i=n.gap,o=n.direction,a=n.total,c=n.boxCount,s=n.boxes,u=s.findIndex((function(e){return e===t})),l=c-1,f="(100% - ".concat(i*l,"px) * ").concat(e," / ").concat(a),d=s.filter((function(t,e){return e<u})).reduce((function(t,e){return t+e.weight}),0),h="(100% - ".concat(i*l,"px) * ").concat(d," / ").concat(a," +  ").concat(u*i,"px");return"row"===o?{height:"calc(".concat(f,")"),top:"calc(".concat(h,")")}:{width:"calc(".concat(f,")"),left:"calc(".concat(h,")")}}return null},styles:function(){var t=this.inline,e=this.margin,n=this.padding,r=this.position,i=this.fit,a=this.width,c=this.height,s=this.left,u=this.top,l=this.right,f=this.bottom,d=this.zIndex,h=this.zoom,p=this.scale,y=this.xAlign,g=this.yAlign,m=this.defaultWidth,b=this.defaultHeight;return Object(o.a)({position:r?"absolute":"relative",width:i?"100%":a||m,height:i?"100%":c||b,zoom:h,left:y?null:s,top:g?null:u,right:y?null:l,bottom:g?null:f,transform:p?"scale(".concat(p,")"):null,display:t?"inline-block":"block",opacity:this.opacity,margin:e,padding:n,zIndex:d},this.layoutSize)},classes:function(){var t;return t={},Object(i.a)(t,"is-".concat(this.xAlign),!!this.xAlign),Object(i.a)(t,"is-".concat(this.yAlign),!!this.yAlign),Object(i.a)(t,"is-shadow",this.shadow),Object(i.a)(t,"is-center-middle","center"===this.xAlign&&"middle"===this.yAlign),Object(i.a)(t,"is-content-align-".concat(this.contentAlign),!!this.contentAlign),t},total:function(){return this.boxes.reduce((function(t,e){return t+e.weight}),0)},boxCount:function(){return this.boxes.length}},methods:{registerBox:function(t){this.boxes.push(t)},unregisterBox:function(t){this.boxes=this.boxes.filter((function(e){return e!==t}))}},created:function(){this.layoutVm&&!this.free&&this.layoutVm.registerBox(this)},beforeDestroy:function(){this.layoutVm&&!this.free&&this.layoutVm.unregisterBox(this)}},c=(n(499),n(18)),s=Object(c.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return this.visible?e("div",this._g({staticClass:"my-dv-box",class:this.classes,style:this.styles},this.$listeners),[this._t("default")],2):this._e()}),[],!1,null,null,null).exports;e.a=Object(r.a)(s)},408:function(t,e,n){"use strict";e.__esModule=!0,e.isString=function(t){return"[object String]"===Object.prototype.toString.call(t)},e.isObject=function(t){return"[object Object]"===Object.prototype.toString.call(t)},e.isHtmlElement=function(t){return t&&t.nodeType===Node.ELEMENT_NODE};e.isFunction=function(t){return t&&"[object Function]"==={}.toString.call(t)},e.isUndefined=function(t){return void 0===t},e.isDefined=function(t){return null!=t}},431:function(t,e,n){},434:function(t,e,n){},441:function(t,e,n){"use strict";var r=n(53),i=(n(201),n(200),n(57)),o=n(367),a=n(364),c=n(126),s=n(52),u={color:"#1de2ff",fill:"transparent",textColor:"#b4e4ff",colors:["#1165b2","#0d8888","#398912","#70980c","#b17706","#af620f","#af3b14","#ab181f","#a4226a","#502092","#2a39c3","#2a71c4","#128943","#49b312","#b28f13","#b25010","#bd352c","#a4224a","#6a1a97","#321a97","#1890ff","#13c2c2","#52c41a","#a0d911","#fdaa09","#fa8c16","#fa541c","#f5222d","#eb3197","#722ed1","#2f54eb"]},l={props:{config:Object},computed:{settings:function(){return Object(s.a)(Object(s.a)({},u),this.config)}}},f=n(478),d={name:"MyDvPage",mixins:[l],provide:function(){return{page:this}},props:{lock:{type:Boolean},scale:{type:Boolean,default:!0},width:{type:Number,default:1920,validator:function(t){return t>0}},height:{type:Number,default:1080,validator:function(t){return t>0}},activeIndex:{type:Number,default:0},target:{type:[String,HTMLElement,Function],default:function(){return document.body}},fit:Boolean,fullscreen:Boolean},data:function(){return{screens:[],screenActiveIndex:this.activeIndex,widthScale:1,heightScale:1,isFullScreen:!1}},watch:{$props:{deep:!0,immediate:!0,handler:function(){this.resize()}},activeIndex:{immediate:!0,handler:function(t){this.screenActiveIndex=t}}},computed:{styles:function(){return this.fit?{width:"100%",height:"100%",transform:"translateX(-50%) translateY(-50%)"}:{width:"".concat(this.width,"px"),height:"".concat(this.height,"px"),transform:"scaleX(".concat(this.widthScale,") scaleY(").concat(this.heightScale,") translateX(-50%) translateY(-50%)")}}},methods:{getTarget:function(){var t;switch(Object(i.a)(this.target)){case"string":t="parent"===this.target?this.$el.parentNode:document.querySelector(this.target);break;case"function":t=this.target();break;default:t=this.target}return t||document.body},resize:function(){if(!this.scale||this.fit)return this.widthScale=1,void(this.heightScale=1);var t=this.warpper||{},e=t.clientWidth,n=t.clientHeight;e&&n&&(this.lock?this.heightScale=this.widthScale=e/this.width:(this.widthScale=e/this.width,this.heightScale=n/this.height))},fullScreen:function(){var t=this.getTarget();Object(f.b)(t),this.isFullScreen=!0},exitFullScreen:function(){Object(f.a)(),this.isFullScreen=!1}},mounted:function(){this.warpper=this.getTarget(),Object(a.addClass)(this.warpper,"my-dv-page__wrapper"+this._uid),this.proxyResize=Object(c.c)(this.resize,100),Object(o.addResizeListener)(this.warpper,this.proxyResize),this.resize(),this.isFullScreen=!!this.fullscreen&&Object(f.c)()},beforeDestroy:function(){this.proxyResize&&Object(o.removeResizeListener)(this.warpper,this.proxyResize),Object(a.removeClass)(this.warpper,"my-dv-page__wrapper"+this._uid)}},h=(n(491),n(18)),p=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"my-dv-page",style:t.styles},[t._t("default"),t._v(" "),t.fullscreen?n("div",{staticClass:"my-dv-page__fullscreen"},[t.isFullScreen?n("i",{staticClass:"el-icon-switch-button",attrs:{title:"取消全屏"},on:{click:t.exitFullScreen}}):n("i",{staticClass:"el-icon-full-screen",attrs:{title:"全屏"},on:{click:t.fullScreen}})]):t._e()],2)}),[],!1,null,null,null).exports;e.a=Object(r.a)(p)},478:function(t,e,n){"use strict";function r(t){var e=(t=t||document.documentElement).requestFullScreen||t.webkitRequestFullScreen||t.mozRequestFullScreen||t.msRequestFullscreen;void 0!==e&&e&&e.call(t)}function i(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function o(){return document.isFullScreen||document.mozIsFullScreen||document.webkitIsFullScreen}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return o}))},491:function(t,e,n){"use strict";n(431)},499:function(t,e,n){"use strict";n(434)},571:function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=103)}({0:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,c){var s,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=s):i&&(s=c?function(){i.call(this,this.$root.$options.shadowRoot)}:i),s)if(u.functional){u._injectStyles=s;var l=u.render;u.render=function(t,e){return s.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,s):[s]}return{exports:t,options:u}}n.d(e,"a",(function(){return r}))},103:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"el-card",class:t.shadow?"is-"+t.shadow+"-shadow":"is-always-shadow"},[t.$slots.header||t.header?n("div",{staticClass:"el-card__header"},[t._t("header",[t._v(t._s(t.header))])],2):t._e(),n("div",{staticClass:"el-card__body",style:t.bodyStyle},[t._t("default")],2)])};r._withStripped=!0;var i={name:"ElCard",props:{header:{},bodyStyle:{},shadow:{type:String}}},o=n(0),a=Object(o.a)(i,r,[],!1,null,null,null);a.options.__file="packages/card/src/main.vue";var c=a.exports;c.install=function(t){t.component(c.name,c)};e.default=c}})}}]);