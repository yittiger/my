(window.webpackJsonp=window.webpackJsonp||[]).push([[1163],{3414:function(e,t,n){"use strict";n.r(t);var r=n(912),i=n(464),o=n(0);o.default.use(i.a),o.default.use(r.a);var s={},a=n(19),l=Object(a.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{height:"200px"}},[t("my-dv-page",{attrs:{target:"parent",fit:""}},[t("my-dv-title",[this._v("标题文本")])],1)],1)}),[],!1,null,null,null);t.default=l.exports},365:function(e,t,n){"use strict";t.__esModule=!0,t.removeResizeListener=t.addResizeListener=void 0;var r,i=n(393),o=(r=i)&&r.__esModule?r:{default:r};var s="undefined"==typeof window,a=function(e){var t=e,n=Array.isArray(t),r=0;for(t=n?t:t[Symbol.iterator]();;){var i;if(n){if(r>=t.length)break;i=t[r++]}else{if((r=t.next()).done)break;i=r.value}var o=i.target.__resizeListeners__||[];o.length&&o.forEach((function(e){e()}))}};t.addResizeListener=function(e,t){s||(e.__resizeListeners__||(e.__resizeListeners__=[],e.__ro__=new o.default(a),e.__ro__.observe(e)),e.__resizeListeners__.push(t))},t.removeResizeListener=function(e,t){e&&e.__resizeListeners__&&(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||e.__ro__.disconnect())}},366:function(e,t,n){"use strict";t.__esModule=!0,t.isInContainer=t.getScrollContainer=t.isScroll=t.getStyle=t.once=t.off=t.on=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.hasClass=v,t.addClass=function(e,t){if(!e)return;for(var n=e.className,r=(t||"").split(" "),i=0,o=r.length;i<o;i++){var s=r[i];s&&(e.classList?e.classList.add(s):v(e,s)||(n+=" "+s))}e.classList||(e.className=n)},t.removeClass=function(e,t){if(!e||!t)return;for(var n=t.split(" "),r=" "+e.className+" ",i=0,o=n.length;i<o;i++){var s=n[i];s&&(e.classList?e.classList.remove(s):v(e,s)&&(r=r.replace(" "+s+" "," ")))}e.classList||(e.className=(r||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},t.setStyle=function e(t,n,i){if(!t||!n)return;if("object"===(void 0===n?"undefined":r(n)))for(var o in n)n.hasOwnProperty(o)&&e(t,o,n[o]);else"opacity"===(n=c(n))&&u<9?t.style.filter=isNaN(i)?"":"alpha(opacity="+100*i+")":t.style[n]=i};var i,o=n(0);var s=((i=o)&&i.__esModule?i:{default:i}).default.prototype.$isServer,a=/([\:\-\_]+(.))/g,l=/^moz([A-Z])/,u=s?0:Number(document.documentMode),c=function(e){return e.replace(a,(function(e,t,n,r){return r?n.toUpperCase():n})).replace(l,"Moz$1")},f=t.on=!s&&document.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)},d=t.off=!s&&document.removeEventListener?function(e,t,n){e&&t&&e.removeEventListener(t,n,!1)}:function(e,t,n){e&&t&&e.detachEvent("on"+t,n)};t.once=function(e,t,n){f(e,t,(function r(){n&&n.apply(this,arguments),d(e,t,r)}))};function v(e,t){if(!e||!t)return!1;if(-1!==t.indexOf(" "))throw new Error("className should not contain space.");return e.classList?e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}var _=t.getStyle=u<9?function(e,t){if(!s){if(!e||!t)return null;"float"===(t=c(t))&&(t="styleFloat");try{switch(t){case"opacity":try{return e.filters.item("alpha").opacity/100}catch(e){return 1}default:return e.style[t]||e.currentStyle?e.currentStyle[t]:null}}catch(n){return e.style[t]}}}:function(e,t){if(!s){if(!e||!t)return null;"float"===(t=c(t))&&(t="cssFloat");try{var n=document.defaultView.getComputedStyle(e,"");return e.style[t]||n?n[t]:null}catch(n){return e.style[t]}}};var p=t.isScroll=function(e,t){if(!s)return _(e,null!==t||void 0!==t?t?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};t.getScrollContainer=function(e,t){if(!s){for(var n=e;n;){if([window,document,document.documentElement].includes(n))return window;if(p(n,t))return n;n=n.parentNode}return n}},t.isInContainer=function(e,t){if(s||!e||!t)return!1;var n=e.getBoundingClientRect(),r=void 0;return r=[window,document,document.documentElement,null,void 0].includes(t)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:t.getBoundingClientRect(),n.top<r.bottom&&n.bottom>r.top&&n.right>r.left&&n.left<r.right}},376:function(e,t,n){var r=n(11),i=n(80),o=n(16),s=n(122).f,a=function(e){return function(t){for(var n,a=o(t),l=i(a),u=l.length,c=0,f=[];u>c;)n=l[c++],r&&!s.call(a,n)||f.push(e?[n,a[n]]:a[n]);return f}};e.exports={entries:a(!0),values:a(!1)}},381:function(e,t,n){var r=n(2),i=n(376).values;r({target:"Object",stat:!0},{values:function(e){return i(e)}})},387:function(e,t,n){"use strict";var r=n(2),i=n(49).findIndex,o=n(120),s=!0;"findIndex"in[]&&Array(1).findIndex((function(){s=!1})),r({target:"Array",proto:!0,forced:s},{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")}}]);