(window.webpackJsonp=window.webpackJsonp||[]).push([[688],{2809:function(t,e,n){"use strict";n.r(e);n(933),n(124);var i=n(937),r=(n(934),n(938)),o=n(0),s={components:{MyDetail:r.a,MyDetailItem:i.a}};o.default.use(r.a),o.default.use(i.a);var a=s,l=n(18),c=Object(l.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-origin"},[n("my-detail",{attrs:{title:"用户信息",border:"",layout:"vertical"}},[n("my-detail-item",{attrs:{label:"名称"}},[t._v("张三")]),t._v(" "),n("my-detail-item",{attrs:{label:"电话"}},[t._v("020-88888888")]),t._v(" "),n("my-detail-item",{attrs:{label:"籍贯"}},[t._v("广东 广州")]),t._v(" "),n("my-detail-item",{attrs:{label:"备注"}},[t._v("无")]),t._v(" "),n("my-detail-item",{attrs:{label:"地址"}},[t._v("广东省广州市越秀区东风东路")])],1)],1)}),[],!1,null,null,null);e.default=c.exports},440:function(t,e,n){"use strict";var i=n(1),r=n(128),o=n(59),s=n(19),a=n(16),l=n(134),c=n(63),u=n(62),d=n(20),f=u("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,m=Math.min;i({target:"Array",proto:!0,forced:!f||!h},{splice:function(t,e){var n,i,u,d,f,h,y=a(this),v=s(y.length),b=r(t,v),g=arguments.length;if(0===g?n=i=0:1===g?(n=0,i=v-b):(n=g-2,i=m(p(o(e),0),v-b)),v+n-i>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(u=l(y,i),d=0;d<i;d++)(f=b+d)in y&&c(u,d,y[f]);if(u.length=i,n<i){for(d=b;d<v-i;d++)h=d+n,(f=d+i)in y?y[h]=y[f]:delete y[h];for(d=v;d>v-i+n;d--)delete y[d-1]}else if(n>i)for(d=v-i;d>b;d--)h=d+n-1,(f=d+i-1)in y?y[h]=y[f]:delete y[h];for(d=0;d<n;d++)y[d+b]=arguments[d+2];return y.length=v-i+n,u}})},453:function(t,e,n){"use strict";function i(){return(i=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)}var r=["attrs","props","domProps"],o=["class","style","directives"],s=["on","nativeOn"],a=function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}};t.exports=function(t){return t.reduce((function(t,e){for(var n in e)if(t[n])if(-1!==r.indexOf(n))t[n]=i({},t[n],e[n]);else if(-1!==o.indexOf(n)){var l=t[n]instanceof Array?t[n]:[t[n]],c=e[n]instanceof Array?e[n]:[e[n]];t[n]=l.concat(c)}else if(-1!==s.indexOf(n))for(var u in e[n])if(t[n][u]){var d=t[n][u]instanceof Array?t[n][u]:[t[n][u]],f=e[n][u]instanceof Array?e[n][u]:[e[n][u]];t[n][u]=d.concat(f)}else t[n][u]=e[n][u];else if("hook"==n)for(var h in e[n])t[n][h]=t[n][h]?a(t[n][h],e[n][h]):e[n][h];else t[n]=e[n];else t[n]=e[n];return t}),{})}},455:function(t,e){t.exports={isFunction:function(t){return"function"==typeof t},isArray:function(t){return"[object Array]"===Object.prototype.toString.apply(t)},each:function(t,e){for(var n=0,i=t.length;n<i&&!1!==e(t[n],n);n++);}}},463:function(t,e,n){"use strict";var i=n(1),r=n(36).findIndex,o=n(127),s=n(20),a=!0,l=s("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){a=!1})),i({target:"Array",proto:!0,forced:a||!l},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},521:function(t,e,n){"use strict";n.d(e,"b",(function(){return s}));n(21),n(54),n(84),n(88),n(7),n(87),n(55);var i,r=n(31),o=n(52);if("undefined"!=typeof window){window.matchMedia=window.matchMedia||function(t){return{media:t,matches:!1,addListener:function(){},removeListener:function(){}}},i=n(525)}var s=["xxl","xl","lg","md","sm","xs"],a={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},l=[],c=-1,u={},d={fire:function(t){return u=t,!(l.length<1)&&(l.forEach((function(t){t.func(u)})),!0)},on:function(t){0===l.length&&this.register();var e=(++c).toString();return l.push({token:e,func:t}),t(u),e},off:function(t){0===(l=l.filter((function(e){return e.token!==t}))).length&&this.unregister()},register:function(){var t=this;Object.keys(a).map((function(e){i.register(a[e],{match:function(){var n=Object(o.a)(Object(o.a)({},u),{},Object(r.a)({},e,!0));t.fire(n)},unmatch:function(){var n=Object(o.a)(Object(o.a)({},u),{},Object(r.a)({},e,!1));t.fire(n)},destroy:function(){}})}))},unregister:function(){Object.keys(a).map((function(t){return i.unregister(a[t])}))}};e.a=d},525:function(t,e,n){var i=n(526);t.exports=new i},526:function(t,e,n){var i=n(527),r=n(455),o=r.each,s=r.isFunction,a=r.isArray;function l(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}l.prototype={constructor:l,register:function(t,e,n){var r=this.queries,l=n&&this.browserIsIncapable;return r[t]||(r[t]=new i(t,l)),s(e)&&(e={match:e}),a(e)||(e=[e]),o(e,(function(e){s(e)&&(e={match:e}),r[t].addHandler(e)})),this},unregister:function(t,e){var n=this.queries[t];return n&&(e?n.removeHandler(e):(n.clear(),delete this.queries[t])),this}},t.exports=l},527:function(t,e,n){var i=n(528),r=n(455).each;function o(t,e){this.query=t,this.isUnconditional=e,this.handlers=[],this.mql=window.matchMedia(t);var n=this;this.listener=function(t){n.mql=t.currentTarget||t,n.assess()},this.mql.addListener(this.listener)}o.prototype={constuctor:o,addHandler:function(t){var e=new i(t);this.handlers.push(e),this.matches()&&e.on()},removeHandler:function(t){var e=this.handlers;r(e,(function(n,i){if(n.equals(t))return n.destroy(),!e.splice(i,1)}))},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){r(this.handlers,(function(t){t.destroy()})),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";r(this.handlers,(function(e){e[t]()}))}},t.exports=o},528:function(t,e){function n(t){this.options=t,!t.deferSetup&&this.setup()}n.prototype={constructor:n,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},t.exports=n},933:function(t,e,n){},934:function(t,e,n){},937:function(t,e,n){"use strict";var i=n(53),r=(n(463),n(125),n(440),n(198),{name:"MyDetailItem",inject:["detail"],props:{label:String,span:{type:Number,default:1},labelAlign:{type:String,default:function(){return this.detail.labelAlign},validator:function(t){return["left","center","right"].includes(t)}},contentAlign:{type:String,default:function(){return this.detail.contentAlign},validator:function(t){return["left","center","right"].includes(t)}}},data:function(){return{currentSpan:this.span}},watch:{span:function(t){this.currentSpan=t}},created:function(){this.detail&&this.detail.items.push(this)},mounted:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)},updated:function(){var t=this,e=this.detail.items.findIndex((function(e){return e===t}));this.detail.items.splice(e,1,this)},beforeDestroy:function(){var t=this,e=this.detail.items.findIndex((function(e){return e===t}));this.detail.items.splice(e,1),this.$el=null}}),o=n(18),s=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{display:"none"}},[this._t("label"),this._v(" "),this._t("default")],2)}),[],!1,null,null,null).exports;e.a=Object(i.a)(s)},938:function(t,e,n){"use strict";var i=n(53),r=(n(54),n(125),n(84),n(198),n(55),n(57)),o=n(453),s=n.n(o),a=n(31),l={functional:!0,props:{child:Object,border:Boolean,colon:Boolean,type:{type:String,validator:function(t){return["label","content"].includes(t)}},layout:{type:String,validator:function(t){return["horizontal","vertical"].includes(t)}}},render:function(t,e){var n,i=e.props,r=i.child,o=i.border,l=i.colon,c=i.type,u=i.layout,d=r.label,f=r.currentSpan,h=void 0===f?1:f,p=r.key,m=r.labelAlign,y=r.contentAlign,v={class:(n={"my-detail-item__label":!0,"my-detail-item--colon":l},Object(a.a)(n,"is-".concat(m),!!m),Object(a.a)(n,"my-detail-item--no-label",!(r.$slots.label||d)),n),key:p};return"vertical"===u&&(v.colspan=2*h-1),o?"label"===c?t("th",s()([{},v,{attrs:{colspan:v.colspan}}]),[r.$slots.label||d]):t("td",{class:["my-detail-item__content","is-".concat(y)],key:p,attrs:{colspan:2*h-1}},[r.$slots.default]):"vertical"===u?t("td",{attrs:{colspan:h},class:["my-detail-item__wrap","is-".concat(y)],key:p},"content"===c?[t("span",{class:"my-detail-item__content"},[r.$slots.default])]:[t("span",{class:{"my-detail-item__label":!0,"my-detail-item--colon":l}},[r.$slots.label||d])]):t("td",{attrs:{colspan:h},class:"my-detail-item__wrap",key:p},[t("span",s()([{},v]),[r.$slots.label||d]),t("span",{class:"my-detail-item__content"},[r.$slots.default])])}},c=n(521),u={xxl:3,xl:3,lg:3,md:3,sm:2,xs:2},d={name:"MyDetail",components:{Col:l},provide:function(){return{detail:this}},props:{title:String,border:Boolean,column:{type:[Number,Object],default:3},size:{type:String,default:"default",validator:function(t){return["default","middle","small"].includes(t)}},layout:{type:String,default:"horizontal",validator:function(t){return["horizontal","vertical"].includes(t)}},colon:{type:Boolean,default:!0},labelAlign:{type:String,default:"left",validator:function(t){return["left","center","right"].includes(t)}},contentAlign:{type:String,default:"left",validator:function(t){return["left","center","right"].includes(t)}}},data:function(){return{items:[],screens:{}}},computed:{classes:function(){return["my-detail","is-".concat(this.size||"default"),"is-".concat(this.layout),{"is-border":this.border}]}},methods:{getColumn:function(){if("object"===Object(r.a)(this.column))for(var t=0;t<c.b.length;t++){var e=c.b[t];if(this.screens[e])return this.column[e]||u[e]}return"number"==typeof this.column?this.column:3},generateChildrenRows:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,n=[],i=null,r=0;return t.forEach((function(o,s){i||(r=e,i=[],n.push(i)),s===t.length-1&&(o.currentSpan=r);var a=o.currentSpan,l=void 0===a?1:a;i.push(o),(r-=l)<=0&&(i=null)})),n},renderRow:function(t,e){var n=this,i=this.$createElement,r=[],o=[];return t.forEach((function(t,e){r.push(n.renderCol(t,"label",e)),"vertical"===n.layout?o.push(n.renderCol(t,"content",e)):n.border&&r.push(n.renderCol(t,"content",e))})),"vertical"===this.layout?[i("tr",{class:"my-detail__row",key:"label-".concat(e)},[r]),i("tr",{class:"my-detail__row",key:"content-".concat(e)},[o])]:i("tr",{class:"my-detail__row",key:e},[r])},renderCol:function(t,e,n){return(0,this.$createElement)(l,{attrs:{child:t,border:this.border,colon:this.colon,type:e,layout:this.layout},key:t.key||n})}},render:function(){var t=this,e=arguments[0],n=this.generateChildrenRows(this.items,this.getColumn()),i=this.$slots.title||this.title,r=i?e("div",{class:"my-detail__title"},[i]):null;return e("div",{class:this.classes},[r,e("div",{class:"my-detail__view"},[e("table",[e("tbody",[n.map((function(e,n){return t.renderRow(e,n)}))])])]),this.$slots.default])},mounted:function(){var t=this;this.token=c.a.on((function(e){"object"===Object(r.a)(t.column)&&(t.screens=e)}))},beforeDestroy:function(){c.a.off(this.token)}},f=n(18),h=Object(f.a)(d,void 0,void 0,!1,null,null,null).exports;e.a=Object(i.a)(h)}}]);