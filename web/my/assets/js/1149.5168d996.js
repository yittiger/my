(window.webpackJsonp=window.webpackJsonp||[]).push([[1149],{2996:function(e,t,n){"use strict";n.r(t);var i=n(441);n(0).default.use(i.a);var r={},c=n(18),s=Object(c.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{height:"600px"}},[t("my-dv-page",{attrs:{target:"parent"}},[this._v("\n      这是一个大屏页面\n  ")])],1)}),[],!1,null,null,null);t.default=s.exports},364:function(e,t,n){"use strict";t.__esModule=!0,t.isInContainer=t.getScrollContainer=t.isScroll=t.getStyle=t.once=t.off=t.on=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.hasClass=h,t.addClass=function(e,t){if(!e)return;for(var n=e.className,i=(t||"").split(" "),r=0,c=i.length;r<c;r++){var s=i[r];s&&(e.classList?e.classList.add(s):h(e,s)||(n+=" "+s))}e.classList||(e.className=n)},t.removeClass=function(e,t){if(!e||!t)return;for(var n=t.split(" "),i=" "+e.className+" ",r=0,c=n.length;r<c;r++){var s=n[r];s&&(e.classList?e.classList.remove(s):h(e,s)&&(i=i.replace(" "+s+" "," ")))}e.classList||(e.className=(i||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},t.setStyle=function e(t,n,r){if(!t||!n)return;if("object"===(void 0===n?"undefined":i(n)))for(var c in n)n.hasOwnProperty(c)&&e(t,c,n[c]);else"opacity"===(n=u(n))&&a<9?t.style.filter=isNaN(r)?"":"alpha(opacity="+100*r+")":t.style[n]=r};var r,c=n(0);var s=((r=c)&&r.__esModule?r:{default:r}).default.prototype.$isServer,l=/([\:\-\_]+(.))/g,o=/^moz([A-Z])/,a=s?0:Number(document.documentMode),u=function(e){return e.replace(l,(function(e,t,n,i){return i?n.toUpperCase():n})).replace(o,"Moz$1")},f=t.on=!s&&document.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)},d=t.off=!s&&document.removeEventListener?function(e,t,n){e&&t&&e.removeEventListener(t,n,!1)}:function(e,t,n){e&&t&&e.detachEvent("on"+t,n)};t.once=function(e,t,n){f(e,t,(function i(){n&&n.apply(this,arguments),d(e,t,i)}))};function h(e,t){if(!e||!t)return!1;if(-1!==t.indexOf(" "))throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}var p=t.getStyle=a<9?function(e,t){if(!s){if(!e||!t)return null;"float"===(t=u(t))&&(t="styleFloat");try{switch(t){case"opacity":try{return e.filters.item("alpha").opacity/100}catch(e){return 1}default:return e.style[t]||e.currentStyle?e.currentStyle[t]:null}}catch(n){return e.style[t]}}}:function(e,t){if(!s){if(!e||!t)return null;"float"===(t=u(t))&&(t="cssFloat");try{var n=document.defaultView.getComputedStyle(e,"");return e.style[t]||n?n[t]:null}catch(n){return e.style[t]}}};var m=t.isScroll=function(e,t){if(!s)return p(e,null!==t||void 0!==t?t?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};t.getScrollContainer=function(e,t){if(!s){for(var n=e;n;){if([window,document,document.documentElement].includes(n))return window;if(m(n,t))return n;n=n.parentNode}return n}},t.isInContainer=function(e,t){if(s||!e||!t)return!1;var n=e.getBoundingClientRect(),i=void 0;return i=[window,document,document.documentElement,null,void 0].includes(t)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:t.getBoundingClientRect(),n.top<i.bottom&&n.bottom>i.top&&n.right>i.left&&n.left<i.right}},431:function(e,t,n){},441:function(e,t,n){"use strict";var i=n(53),r=(n(201),n(200),n(57)),c=n(367),s=n(364),l=n(126),o=n(52),a={color:"#1de2ff",fill:"transparent",textColor:"#b4e4ff",colors:["#1165b2","#0d8888","#398912","#70980c","#b17706","#af620f","#af3b14","#ab181f","#a4226a","#502092","#2a39c3","#2a71c4","#128943","#49b312","#b28f13","#b25010","#bd352c","#a4224a","#6a1a97","#321a97","#1890ff","#13c2c2","#52c41a","#a0d911","#fdaa09","#fa8c16","#fa541c","#f5222d","#eb3197","#722ed1","#2f54eb"]},u={props:{config:Object},computed:{settings:function(){return Object(o.a)(Object(o.a)({},a),this.config)}}},f=n(478),d={name:"MyDvPage",mixins:[u],provide:function(){return{page:this}},props:{lock:{type:Boolean},scale:{type:Boolean,default:!0},width:{type:Number,default:1920,validator:function(e){return e>0}},height:{type:Number,default:1080,validator:function(e){return e>0}},activeIndex:{type:Number,default:0},target:{type:[String,HTMLElement,Function],default:function(){return document.body}},fit:Boolean,fullscreen:Boolean},data:function(){return{screens:[],screenActiveIndex:this.activeIndex,widthScale:1,heightScale:1,isFullScreen:!1}},watch:{$props:{deep:!0,immediate:!0,handler:function(){this.resize()}},activeIndex:{immediate:!0,handler:function(e){this.screenActiveIndex=e}}},computed:{styles:function(){return this.fit?{width:"100%",height:"100%",transform:"translateX(-50%) translateY(-50%)"}:{width:"".concat(this.width,"px"),height:"".concat(this.height,"px"),transform:"scaleX(".concat(this.widthScale,") scaleY(").concat(this.heightScale,") translateX(-50%) translateY(-50%)")}}},methods:{getTarget:function(){var e;switch(Object(r.a)(this.target)){case"string":e="parent"===this.target?this.$el.parentNode:document.querySelector(this.target);break;case"function":e=this.target();break;default:e=this.target}return e||document.body},resize:function(){if(!this.scale||this.fit)return this.widthScale=1,void(this.heightScale=1);var e=this.warpper||{},t=e.clientWidth,n=e.clientHeight;t&&n&&(this.lock?this.heightScale=this.widthScale=t/this.width:(this.widthScale=t/this.width,this.heightScale=n/this.height))},fullScreen:function(){var e=this.getTarget();Object(f.b)(e),this.isFullScreen=!0},exitFullScreen:function(){Object(f.a)(),this.isFullScreen=!1}},mounted:function(){this.warpper=this.getTarget(),Object(s.addClass)(this.warpper,"my-dv-page__wrapper"+this._uid),this.proxyResize=Object(l.c)(this.resize,100),Object(c.addResizeListener)(this.warpper,this.proxyResize),this.resize(),this.isFullScreen=!!this.fullscreen&&Object(f.c)()},beforeDestroy:function(){this.proxyResize&&Object(c.removeResizeListener)(this.warpper,this.proxyResize),Object(s.removeClass)(this.warpper,"my-dv-page__wrapper"+this._uid)}},h=(n(491),n(18)),p=Object(h.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my-dv-page",style:e.styles},[e._t("default"),e._v(" "),e.fullscreen?n("div",{staticClass:"my-dv-page__fullscreen"},[e.isFullScreen?n("i",{staticClass:"el-icon-switch-button",attrs:{title:"取消全屏"},on:{click:e.exitFullScreen}}):n("i",{staticClass:"el-icon-full-screen",attrs:{title:"全屏"},on:{click:e.fullScreen}})]):e._e()],2)}),[],!1,null,null,null).exports;t.a=Object(i.a)(p)},478:function(e,t,n){"use strict";function i(e){var t=(e=e||document.documentElement).requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullscreen;void 0!==t&&t&&t.call(e)}function r(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function c(){return document.isFullScreen||document.mozIsFullScreen||document.webkitIsFullScreen}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return c}))},491:function(e,t,n){"use strict";n(431)}}]);