(window.webpackJsonp=window.webpackJsonp||[]).push([[960],{2438:function(t,e,n){},2768:function(t,e,n){"use strict";n(2438)},2852:function(t,e,n){"use strict";n.r(e);var i=n(464),s=n(57),r={name:"MyDvBorder3",mixins:[n(842).a]},o=(n(2768),n(21)),l=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Box",t._b({staticClass:"my-dv-border-3",class:t.classes,attrs:{"default-width":"400px","default-height":"300px",padding:"0"}},"Box",t.$attrs,!1),[n("svg",{class:"my-dv-border__svg "+(t.reverse&&"is-reverse"),style:t.styles,attrs:{width:t.width,height:t.height}},[n("polygon",{attrs:{fill:t.fill,points:"\n      "+(t.width-15)+", 22 170, 22 150, 7 40, 7 28, 21 32, 24\n      16, 42 16, "+(t.height-32)+" 41, "+(t.height-7)+" "+(t.width-15)+", "+(t.height-7)+"\n    "}}),t._v(" "),n("polyline",{staticClass:"dv-bb4-line-1",attrs:{stroke:t.light,fill:"transparent",points:"145, "+(t.height-5)+" 40, "+(t.height-5)+" 10, "+(t.height-35)+"\n        10, 40 40, 5 150, 5 170, 20 "+(t.width-15)+", 20"}}),t._v(" "),n("polyline",{staticClass:"dv-bb4-line-2",attrs:{stroke:t.dark,fill:"transparent",points:"245, "+(t.height-1)+" 36, "+(t.height-1)+" 14, "+(t.height-23)+"\n        14, "+(t.height-100)}}),t._v(" "),n("polyline",{staticClass:"dv-bb4-line-3",attrs:{fill:"transparent",stroke:t.light,"stroke-width":"3",points:"7, "+(t.height-40)+" 7, "+(t.height-75)}}),t._v(" "),n("polyline",{staticClass:"dv-bb4-line-4",attrs:{fill:"transparent",stroke:t.light,"stroke-width":"3",points:"28, 24 13, 41 13, 64"}}),t._v(" "),n("polyline",{staticClass:"dv-bb4-line-5",attrs:{fill:"transparent",stroke:t.light,points:"5, 45 5, 140"}}),t._v(" "),n("polyline",{staticClass:"dv-bb4-line-6",attrs:{fill:"transparent",stroke:t.light,points:"14, 75 14, 180"}}),t._v(" "),n("polyline",{staticClass:"dv-bb4-line-7",attrs:{fill:"transparent",stroke:t.light,points:"55, 11 147, 11 167, 26 250, 26"}}),t._v(" "),n("polyline",{staticClass:"dv-bb4-line-8",attrs:{fill:"transparent",stroke:t.light,"stroke-width":"3",points:"158, 5 173, 16"}}),t._v(" "),n("polyline",{staticClass:"dv-bb4-line-9",attrs:{fill:"transparent",stroke:t.light,"stroke-width":"3","stroke-dasharray":"100 250",points:"200, 17 "+(t.width-10)+", 17"}}),t._v(" "),n("polyline",{staticClass:"dv-bb4-line-10",attrs:{fill:"transparent",stroke:t.light,"stroke-dasharray":"80 270",points:"385, 17 "+(t.width-10)+", 17"}})]),t._v(" "),n("BoxContent",{attrs:{padding:t.$attrs.padding}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports,a=Object(s.a)(l),c=n(0);c.default.use(a),c.default.use(i.a);var u={},d=Object(o.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"600px"}},[e("my-dv-page",{attrs:{target:"parent",fit:""}},[e("my-dv-border3",{attrs:{"x-align":"center","y-align":"middle",width:"80%",height:"80%"}})],1)],1)}),[],!1,null,null,null);e.default=d.exports},369:function(t,e,n){"use strict";e.__esModule=!0,e.removeResizeListener=e.addResizeListener=void 0;var i,s=n(397),r=(i=s)&&i.__esModule?i:{default:i};var o="undefined"==typeof window,l=function(t){var e=t,n=Array.isArray(e),i=0;for(e=n?e:e[Symbol.iterator]();;){var s;if(n){if(i>=e.length)break;s=e[i++]}else{if((i=e.next()).done)break;s=i.value}var r=s.target.__resizeListeners__||[];r.length&&r.forEach((function(t){t()}))}};e.addResizeListener=function(t,e){o||(t.__resizeListeners__||(t.__resizeListeners__=[],t.__ro__=new r.default(l),t.__ro__.observe(t)),t.__resizeListeners__.push(e))},e.removeResizeListener=function(t,e){t&&t.__resizeListeners__&&(t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(e),1),t.__resizeListeners__.length||t.__ro__.disconnect())}},370:function(t,e,n){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=p,e.addClass=function(t,e){if(!t)return;for(var n=t.className,i=(e||"").split(" "),s=0,r=i.length;s<r;s++){var o=i[s];o&&(t.classList?t.classList.add(o):p(t,o)||(n+=" "+o))}t.classList||(t.className=n)},e.removeClass=function(t,e){if(!t||!e)return;for(var n=e.split(" "),i=" "+t.className+" ",s=0,r=n.length;s<r;s++){var o=n[s];o&&(t.classList?t.classList.remove(o):p(t,o)&&(i=i.replace(" "+o+" "," ")))}t.classList||(t.className=(i||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,n,s){if(!e||!n)return;if("object"===(void 0===n?"undefined":i(n)))for(var r in n)n.hasOwnProperty(r)&&t(e,r,n[r]);else"opacity"===(n=u(n))&&c<9?e.style.filter=isNaN(s)?"":"alpha(opacity="+100*s+")":e.style[n]=s};var s,r=n(0);var o=((s=r)&&s.__esModule?s:{default:s}).default.prototype.$isServer,l=/([\:\-\_]+(.))/g,a=/^moz([A-Z])/,c=o?0:Number(document.documentMode),u=function(t){return t.replace(l,(function(t,e,n,i){return i?n.toUpperCase():n})).replace(a,"Moz$1")},d=e.on=!o&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},f=e.off=!o&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};e.once=function(t,e,n){d(t,e,(function i(){n&&n.apply(this,arguments),f(t,e,i)}))};function p(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var h=e.getStyle=c<9?function(t,e){if(!o){if(!t||!e)return null;"float"===(e=u(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!o){if(!t||!e)return null;"float"===(e=u(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}};var v=e.isScroll=function(t,e){if(!o)return h(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!o){for(var n=t;n;){if([window,document,document.documentElement].includes(n))return window;if(v(n,e))return n;n=n.parentNode}return n}},e.isInContainer=function(t,e){if(o||!t||!e)return!1;var n=t.getBoundingClientRect(),i=void 0;return i=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),n.top<i.bottom&&n.bottom>i.top&&n.right>i.left&&n.left<i.right}},523:function(t,e,n){"use strict";var i=n(33),s=n(11),r=n(3),o=n(10),l=r("species");t.exports=function(t){var e=i(t),n=s.f;o&&e&&!e[l]&&n(e,l,{configurable:!0,get:function(){return this}})}},724:function(t,e,n){},839:function(t,e,n){},840:function(t,e,n){"use strict";n(724)},842:function(t,e,n){"use strict";n(387),n(127);var i=n(421),s=n(502),r=n(57),o={name:"MyDvContent",props:{padding:String},computed:{styles:function(){return{padding:this.padding}}}},l=(n(840),n(21)),a=Object(l.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-dv-content",style:this.styles},[this._t("default")],2)}),[],!1,null,null,null).exports,c=Object(r.a)(a),u=n(726);n(839),e.a={mixins:[s.a,u.a],inheritAttrs:!1,components:{Box:i.a,BoxContent:c},props:{fill:{type:String,default:function(){var t;return(null==this||null===(t=this.page)||void 0===t||null===(t=t.settings)||void 0===t?void 0:t.fill)||"transparent"}},reverse:Boolean,opacity:{type:Number,default:1}},computed:{classes:function(){return{"my-dv-border":!0,"is-reverse":this.reverse}},styles:function(){return{opacity:this.opacity}}}}}}]);