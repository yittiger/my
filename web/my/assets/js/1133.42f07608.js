(window.webpackJsonp=window.webpackJsonp||[]).push([[1133],{3377:function(t,e,n){"use strict";n.r(e);var o=n(896),r=n(438),i=n(0);i.default.use(r.a),i.default.use(o.a);var l={},s=n(20),a=Object(s.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"300px"}},[n("my-dv-page",{attrs:{target:"parent",fit:""}},[n("my-dv-title",{attrs:{level:1,position:!1}},[t._v("标题文本")]),t._v(" "),n("my-dv-title",{attrs:{level:2,position:!1}},[t._v("标题文本")]),t._v(" "),n("my-dv-title",{attrs:{level:3,position:!1}},[t._v("标题文本")]),t._v(" "),n("my-dv-title",{attrs:{level:4,position:!1}},[t._v("标题文本")]),t._v(" "),n("my-dv-title",{attrs:{level:5,position:!1}},[t._v("标题文本")]),t._v(" "),n("my-dv-title",{attrs:{level:6,position:!1}},[t._v("标题文本")])],1)],1)}),[],!1,null,null,null);e.default=a.exports},369:function(t,e,n){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=v,e.addClass=function(t,e){if(!t)return;for(var n=t.className,o=(e||"").split(" "),r=0,i=o.length;r<i;r++){var l=o[r];l&&(t.classList?t.classList.add(l):v(t,l)||(n+=" "+l))}t.classList||(t.className=n)},e.removeClass=function(t,e){if(!t||!e)return;for(var n=e.split(" "),o=" "+t.className+" ",r=0,i=n.length;r<i;r++){var l=n[r];l&&(t.classList?t.classList.remove(l):v(t,l)&&(o=o.replace(" "+l+" "," ")))}t.classList||(t.className=(o||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,n,r){if(!e||!n)return;if("object"===(void 0===n?"undefined":o(n)))for(var i in n)n.hasOwnProperty(i)&&t(e,i,n[i]);else"opacity"===(n=c(n))&&u<9?e.style.filter=isNaN(r)?"":"alpha(opacity="+100*r+")":e.style[n]=r};var r,i=n(0);var l=((r=i)&&r.__esModule?r:{default:r}).default.prototype.$isServer,s=/([\:\-\_]+(.))/g,a=/^moz([A-Z])/,u=l?0:Number(document.documentMode),c=function(t){return t.replace(s,(function(t,e,n,o){return o?n.toUpperCase():n})).replace(a,"Moz$1")},f=e.on=!l&&document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)},d=e.off=!l&&document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)};e.once=function(t,e,n){f(t,e,(function o(){n&&n.apply(this,arguments),d(t,e,o)}))};function v(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var p=e.getStyle=u<9?function(t,e){if(!l){if(!t||!e)return null;"float"===(e=c(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(n){return t.style[e]}}}:function(t,e){if(!l){if(!t||!e)return null;"float"===(e=c(e))&&(e="cssFloat");try{var n=document.defaultView.getComputedStyle(t,"");return t.style[e]||n?n[e]:null}catch(n){return t.style[e]}}};var y=e.isScroll=function(t,e){if(!l)return p(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!l){for(var n=t;n;){if([window,document,document.documentElement].includes(n))return window;if(y(n,e))return n;n=n.parentNode}return n}},e.isInContainer=function(t,e){if(l||!t||!e)return!1;var n=t.getBoundingClientRect(),o=void 0;return o=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),n.top<o.bottom&&n.bottom>o.top&&n.right>o.left&&n.left<o.right}},377:function(t,e,n){var o=n(11),r=n(82),i=n(16),l=n(124).f,s=function(t){return function(e){for(var n,s=i(e),a=r(s),u=a.length,c=0,f=[];u>c;)n=a[c++],o&&!l.call(s,n)||f.push(t?[n,s[n]]:s[n]);return f}};t.exports={entries:s(!0),values:s(!1)}},384:function(t,e,n){"use strict";var o=n(1),r=n(49).findIndex,i=n(122),l=!0;"findIndex"in[]&&Array(1).findIndex((function(){l=!1})),o({target:"Array",proto:!0,forced:l},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i("findIndex")},385:function(t,e,n){var o=n(1),r=n(377).values;o({target:"Object",stat:!0},{values:function(t){return r(t)}})}}]);