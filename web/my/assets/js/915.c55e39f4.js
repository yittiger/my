(window.webpackJsonp=window.webpackJsonp||[]).push([[915],{1585:function(t,e,n){},1712:function(t,e,n){"use strict";n(1585)},1744:function(t,e,n){"use strict";var r=n(57),i=n(56),s={name:"MyDvBorder9",mixins:[n(842).a],data:function(){return{border:["left-top","right-top","left-bottom","right-bottom"]}},computed:{svgStyle:function(){return Object(i.a)(Object(i.a)({},this.styles),{},{"box-shadow":"inset 0 0 30px 3px ".concat(this.dark),"border-radius":"15px"})}}},o=(n(1712),n(21)),a=Object(o.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Box",t._b({staticClass:"my-dv-border-9",class:t.classes,attrs:{"default-width":"400px","default-height":"300px",padding:"0"}},"Box",t.$attrs,!1),[n("svg",{staticClass:"my-dv-border__svg",style:t.svgStyle,attrs:{width:t.width,height:t.height}},[n("polygon",{attrs:{fill:t.fill,points:"\n      4, 0 "+(t.width-4)+", 0 "+t.width+", 4 "+t.width+", "+(t.height-4)+" "+(t.width-4)+", "+t.height+"\n      4, "+t.height+" 0, "+(t.height-4)+" 0, 4\n    "}})]),t._v(" "),t._l(t.border,(function(e){return n("svg",{key:e,class:"my-dv-border-9__"+e+" my-dv-border-9__item",attrs:{width:"150px",height:"150px"}},[n("polygon",{attrs:{fill:t.light,points:"40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"}})])})),t._v(" "),n("BoxContent",{attrs:{padding:t.$attrs.padding}},[t._t("default")],2)],2)}),[],!1,null,null,null).exports;e.a=Object(r.a)(a)},3154:function(t,e,n){"use strict";n.r(e);var r=n(464),i=n(1744),s=n(0);s.default.use(i.a),s.default.use(r.a);var o={},a=n(21),l=Object(a.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"600px"}},[e("my-dv-page",{attrs:{target:"parent",fit:""}},[e("my-dv-border9",{attrs:{"x-align":"center","y-align":"middle",width:"80%",height:"80%"}})],1)],1)}),[],!1,null,null,null);e.default=l.exports},369:function(t,e,n){"use strict";e.__esModule=!0,e.removeResizeListener=e.addResizeListener=void 0;var r,i=n(397),s=(r=i)&&r.__esModule?r:{default:r};var o="undefined"==typeof window,a=function(t){var e=t,n=Array.isArray(e),r=0;for(e=n?e:e[Symbol.iterator]();;){var i;if(n){if(r>=e.length)break;i=e[r++]}else{if((r=e.next()).done)break;i=r.value}var s=i.target.__resizeListeners__||[];s.length&&s.forEach((function(t){t()}))}};e.addResizeListener=function(t,e){o||(t.__resizeListeners__||(t.__resizeListeners__=[],t.__ro__=new s.default(a),t.__ro__.observe(t)),t.__resizeListeners__.push(e))},e.removeResizeListener=function(t,e){t&&t.__resizeListeners__&&(t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(e),1),t.__resizeListeners__.length||t.__ro__.disconnect())}},370:function(t,e,n){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=p,e.addClass=function(t,e){if(!t)return;for(var n=t.className,r=(e||"").split(" "),i=0,s=r.length;i<s;i++){var o=r[i];o&&(t.classList?t.classList.add(o):p(t,o)||(n+=" "+o))}t.classList||(t.className=n)},e.removeClass=function(t,e){if(!t||!e)return;for(var n=e.split(" "),r=" "+t.className+" ",i=0,s=n.length;i<s;i++){var o=n[i];o&&(t.classList?t.classList.remove(o):p(t,o)&&(r=r.replace(" "+o+" "," ")))}t.classList||(t.className=(r||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,n,i){if(!e||!n)return;if("object"===(void 0===n?"undefined":r(n)))for(var s in n)n.hasOwnProperty(s)&&t(e,s,n[s]);else"opacity"===(n=c(n))&&u<9?e.style.filter=isNaN(i)?"":"alpha(opacity="+100*i+")":e.style[n]=i};var i,s=n(0);var o=((i=s)&&i.__esModule?i:{default:i}).default.prototype.$isServer,a=/([\:\-\_]+(.))/g,l=/^moz([A-Z])/,u=o?0:Number(document.documentMode),c=function(t){return t.replace(a,(function(t,e,n,r){return r?n.toUpperCase():n})).replace(l,"Moz$1")},d=e.on=!o&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},f=e.off=!o&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};e.once=function(t,e,n){d(t,e,(function r(){n&&n.apply(this,arguments),f(t,e,r)}))};function p(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var v=e.getStyle=u<9?function(t,e){if(!o){if(!t||!e)return null;"float"===(e=c(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!o){if(!t||!e)return null;"float"===(e=c(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}};var h=e.isScroll=function(t,e){if(!o)return v(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!o){for(var n=t;n;){if([window,document,document.documentElement].includes(n))return window;if(h(n,e))return n;n=n.parentNode}return n}},e.isInContainer=function(t,e){if(o||!t||!e)return!1;var n=t.getBoundingClientRect(),r=void 0;return r=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),n.top<r.bottom&&n.bottom>r.top&&n.right>r.left&&n.left<r.right}},523:function(t,e,n){"use strict";var r=n(33),i=n(11),s=n(3),o=n(10),a=s("species");t.exports=function(t){var e=r(t),n=i.f;o&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},724:function(t,e,n){},839:function(t,e,n){},840:function(t,e,n){"use strict";n(724)},842:function(t,e,n){"use strict";n(387),n(127);var r=n(421),i=n(502),s=n(57),o={name:"MyDvContent",props:{padding:String},computed:{styles:function(){return{padding:this.padding}}}},a=(n(840),n(21)),l=Object(a.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-dv-content",style:this.styles},[this._t("default")],2)}),[],!1,null,null,null).exports,u=Object(s.a)(l),c=n(726);n(839),e.a={mixins:[i.a,c.a],inheritAttrs:!1,components:{Box:r.a,BoxContent:u},props:{fill:{type:String,default:function(){var t;return(null==this||null===(t=this.page)||void 0===t||null===(t=t.settings)||void 0===t?void 0:t.fill)||"transparent"}},reverse:Boolean,opacity:{type:Number,default:1}},computed:{classes:function(){return{"my-dv-border":!0,"is-reverse":this.reverse}},styles:function(){return{opacity:this.opacity}}}}}}]);