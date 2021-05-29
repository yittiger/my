(window.webpackJsonp=window.webpackJsonp||[]).push([[888],{1129:function(t,e,n){},1130:function(t,e,n){},1136:function(t,e,n){"use strict";var i=n(53),r=(n(124),n(200),n(57)),s=n(676),o=n(613),a={xxl:3,xl:3,lg:3,md:3,sm:2,xs:2},c={name:"MyFlex",provide:function(){return{flex:this}},props:{inline:Boolean,direction:{type:String,default:"row",validator:function(t){return["row","row-reverse","column","column-reverse"].includes(t)}},wrap:{type:String,default:"nowrap",validator:function(t){return["nowrap","wrap","wrap-reverse"].includes(t)}},justify:{type:String,default:"flex-start",validator:function(t){return["flex-start","flex-end","center","space-between","space-around"].includes(t)}},alignItems:{type:String,default:"stretch",validator:function(t){return["flex-start","flex-end","center","baseline","stretch"].includes(t)}},alignContent:{type:String,default:"stretch",validator:function(t){return["flex-start","flex-end","center","space-between","space-around","stretch"].includes(t)}},border:{type:Boolean},fit:Boolean,column:[Number,Object]},data:function(){return{screens:{}}},computed:{classes:function(){return["my-flex","is-direction-".concat(this.direction),"is-wrap-".concat(this.wrap),"is-justify-".concat(this.justify),"is-align-items-".concat(this.alignItems),"is-align-content-".concat(this.alignContent),{"is-inline":this.inline,"is-border":this.border,"is-fit":this.fit}]}},methods:{getColumn:function(){if("object"===Object(r.a)(this.column))for(var t=0;t<o.b.length;t++){var e=o.b[t];if(this.screens[e])return this.column[e]||a[e]}return"number"==typeof this.column?this.column:null}},mounted:function(){var t=this;this.token=o.a.on((function(e){"object"===Object(r.a)(t.column)&&(t.screens=e)}))},created:function(){s.b||console.warn("浏览器不支持Flex布局")},beforeDestroy:function(){o.a.off(this.token)}},u=n(18),l=Object(u.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.classes},[this._t("default")],2)}),[],!1,null,null,null).exports;e.a=Object(i.a)(l)},1137:function(t,e,n){"use strict";var i=n(53),r=(n(124),n(200),n(202),{name:"MyFlexItem",inject:{flex:{default:null}},props:{order:{type:Number},grow:Number,shrink:Number,basis:String,align:{type:String,default:"auto",validator:function(t){return["auto","flex-start","flex-end","center","baseline","stretch"].includes(t)}},center:Boolean,middle:Boolean,shadow:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"hover"].includes(t)}}},data:function(){return{hover:!1}},computed:{classes:function(){return["my-flex-item","is-align-".concat(this.align),{"is-shadow":!0===this.shadow||this.hover&&"hover"===this.shadow}]},styles:function(){return{order:this.order,flexGrow:this.grow,flexShrink:this.shrink,flexBasis:this.basis,width:this.getWidth()}},helperClasses:function(){return{"my-flex-item__helper":!0,"is-middle":this.middle}},innerClasses:function(){return{"my-flex-item__inner":!0,"is-center":this.center}}},methods:{getWidth:function(){if(this.flex){var t=this.flex.getColumn();if(t)return this.flex.direction.includes("row")?"".concat(100/t,"%"):null}},handleMouseEnter:function(){"hover"===this.shadow&&(this.hover=!0)},handleMouseLeave:function(){this.hover=!1}}}),s=n(18),o=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classes,style:t.styles,on:{mouseenter:t.handleMouseEnter,mouseleave:t.handleMouseLeave}},[n("div",{class:t.innerClasses},[t.middle?n("div",{class:t.helperClasses},[t._t("default")],2):t._t("default")],2)])}),[],!1,null,null,null).exports;e.a=Object(i.a)(o)},2441:function(t,e,n){},2769:function(t,e,n){"use strict";n(2441)},3594:function(t,e,n){"use strict";n.r(e);n(1129),n(125);var i=n(1137),r=(n(1130),n(1136)),s=n(0),o={components:{MyFlex:r.a,MyFlexItem:i.a},data:function(){return{items:[{order:4},{order:1},{order:-1},{order:3}]}}};s.default.use(r.a),s.default.use(i.a);var a=o,c=(n(2769),n(18)),u=Object(c.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("my-flex",t._l(t.items,(function(e,i){return n("my-flex-item",{key:i,attrs:{order:e.order}},[t._v("\n      "+t._s(i+1)+" \n      "),n("span",[t._v("order: "+t._s(e.order))])])})),1)],1)}),[],!1,null,"808e6a1a",null);e.default=u.exports},525:function(t,e){t.exports={isFunction:function(t){return"function"==typeof t},isArray:function(t){return"[object Array]"===Object.prototype.toString.apply(t)},each:function(t,e){for(var n=0,i=t.length;n<i&&!1!==e(t[n],n);n++);}}},613:function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));n(21),n(55),n(84),n(88),n(7),n(87),n(56);var i,r=n(31),s=n(52);if("undefined"!=typeof window){window.matchMedia=window.matchMedia||function(t){return{media:t,matches:!1,addListener:function(){},removeListener:function(){}}},i=n(621)}var o=["xxl","xl","lg","md","sm","xs"],a={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},c=[],u=-1,l={},f={fire:function(t){return l=t,!(c.length<1)&&(c.forEach((function(t){t.func(l)})),!0)},on:function(t){0===c.length&&this.register();var e=(++u).toString();return c.push({token:e,func:t}),t(l),e},off:function(t){0===(c=c.filter((function(e){return e.token!==t}))).length&&this.unregister()},register:function(){var t=this;Object.keys(a).forEach((function(e){i.register(a[e],{match:function(){var n=Object(s.a)(Object(s.a)({},l),{},Object(r.a)({},e,!0));t.fire(n)},unmatch:function(){var n=Object(s.a)(Object(s.a)({},l),{},Object(r.a)({},e,!1));t.fire(n)},destroy:function(){}})}))},unregister:function(){Object.keys(a).map((function(t){return i.unregister(a[t])}))}};e.a=f},621:function(t,e,n){var i=n(622);t.exports=new i},622:function(t,e,n){var i=n(623),r=n(525),s=r.each,o=r.isFunction,a=r.isArray;function c(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}c.prototype={constructor:c,register:function(t,e,n){var r=this.queries,c=n&&this.browserIsIncapable;return r[t]||(r[t]=new i(t,c)),o(e)&&(e={match:e}),a(e)||(e=[e]),s(e,(function(e){o(e)&&(e={match:e}),r[t].addHandler(e)})),this},unregister:function(t,e){var n=this.queries[t];return n&&(e?n.removeHandler(e):(n.clear(),delete this.queries[t])),this}},t.exports=c},623:function(t,e,n){var i=n(624),r=n(525).each;function s(t,e){this.query=t,this.isUnconditional=e,this.handlers=[],this.mql=window.matchMedia(t);var n=this;this.listener=function(t){n.mql=t.currentTarget||t,n.assess()},this.mql.addListener(this.listener)}s.prototype={constuctor:s,addHandler:function(t){var e=new i(t);this.handlers.push(e),this.matches()&&e.on()},removeHandler:function(t){var e=this.handlers;r(e,(function(n,i){if(n.equals(t))return n.destroy(),!e.splice(i,1)}))},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){r(this.handlers,(function(t){t.destroy()})),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";r(this.handlers,(function(e){e[t]()}))}},t.exports=s},624:function(t,e){function n(t){this.options=t,!t.deferSetup&&this.setup()}n.prototype={constructor:n,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},t.exports=n},676:function(t,e,n){"use strict";n.d(e,"b",(function(){return r}));n(216);var i=function(t){if("undefined"!=typeof window&&window.document&&window.document.documentElement){var e=Array.isArray(t)?t:[t],n=window.document.documentElement;return e.some((function(t){return t in n.style}))}return!1},r=i(["flex","webkitFlex","Flex","msFlex"]);e.a=i}}]);