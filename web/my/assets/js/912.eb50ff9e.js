(window.webpackJsonp=window.webpackJsonp||[]).push([[912],{1129:function(e,t,n){},1130:function(e,t,n){},1136:function(e,t,n){"use strict";var i=n(53),r=(n(124),n(200),n(57)),s=n(676),o=n(613),u={xxl:3,xl:3,lg:3,md:3,sm:2,xs:2},a={name:"MyFlex",provide:function(){return{flex:this}},props:{inline:Boolean,direction:{type:String,default:"row",validator:function(e){return["row","row-reverse","column","column-reverse"].includes(e)}},wrap:{type:String,default:"nowrap",validator:function(e){return["nowrap","wrap","wrap-reverse"].includes(e)}},justify:{type:String,default:"flex-start",validator:function(e){return["flex-start","flex-end","center","space-between","space-around"].includes(e)}},alignItems:{type:String,default:"stretch",validator:function(e){return["flex-start","flex-end","center","baseline","stretch"].includes(e)}},alignContent:{type:String,default:"stretch",validator:function(e){return["flex-start","flex-end","center","space-between","space-around","stretch"].includes(e)}},border:{type:Boolean},fit:Boolean,column:[Number,Object]},data:function(){return{screens:{}}},computed:{classes:function(){return["my-flex","is-direction-".concat(this.direction),"is-wrap-".concat(this.wrap),"is-justify-".concat(this.justify),"is-align-items-".concat(this.alignItems),"is-align-content-".concat(this.alignContent),{"is-inline":this.inline,"is-border":this.border,"is-fit":this.fit}]}},methods:{getColumn:function(){if("object"===Object(r.a)(this.column))for(var e=0;e<o.b.length;e++){var t=o.b[e];if(this.screens[t])return this.column[t]||u[t]}return"number"==typeof this.column?this.column:null}},mounted:function(){var e=this;this.token=o.a.on((function(t){"object"===Object(r.a)(e.column)&&(e.screens=t)}))},created:function(){s.b||console.warn("浏览器不支持Flex布局")},beforeDestroy:function(){o.a.off(this.token)}},c=n(18),l=Object(c.a)(a,(function(){var e=this.$createElement;return(this._self._c||e)("div",{class:this.classes},[this._t("default")],2)}),[],!1,null,null,null).exports;t.a=Object(i.a)(l)},1137:function(e,t,n){"use strict";var i=n(53),r=(n(124),n(200),n(202),{name:"MyFlexItem",inject:{flex:{default:null}},props:{order:{type:Number},grow:Number,shrink:Number,basis:String,align:{type:String,default:"auto",validator:function(e){return["auto","flex-start","flex-end","center","baseline","stretch"].includes(e)}},center:Boolean,middle:Boolean,shadow:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"hover"].includes(e)}}},data:function(){return{hover:!1}},computed:{classes:function(){return["my-flex-item","is-align-".concat(this.align),{"is-shadow":!0===this.shadow||this.hover&&"hover"===this.shadow}]},styles:function(){return{order:this.order,flexGrow:this.grow,flexShrink:this.shrink,flexBasis:this.basis,width:this.getWidth()}},helperClasses:function(){return{"my-flex-item__helper":!0,"is-middle":this.middle}},innerClasses:function(){return{"my-flex-item__inner":!0,"is-center":this.center}}},methods:{getWidth:function(){if(this.flex){var e=this.flex.getColumn();if(e)return this.flex.direction.includes("row")?"".concat(100/e,"%"):null}},handleMouseEnter:function(){"hover"===this.shadow&&(this.hover=!0)},handleMouseLeave:function(){this.hover=!1}}}),s=n(18),o=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.classes,style:e.styles,on:{mouseenter:e.handleMouseEnter,mouseleave:e.handleMouseLeave}},[n("div",{class:e.innerClasses},[e.middle?n("div",{class:e.helperClasses},[e._t("default")],2):e._t("default")],2)])}),[],!1,null,null,null).exports;t.a=Object(i.a)(o)},2376:function(e,t,n){},2697:function(e,t,n){"use strict";n(2376)},3271:function(e,t,n){"use strict";n.r(t);n(701),n(362);var i=n(635),r=n.n(i),s=(n(815),n(628)),o=n.n(s),u=(n(1129),n(125),n(1137)),a=(n(1130),n(1136)),c=n(0),l={components:{MyFlex:a.a,MyFlexItem:u.a},data:function(){return{justify:"flex-start",justifyArray:["flex-start","flex-end","center","space-between","space-around"]}}};c.default.use(o.a),c.default.use(r.a),c.default.use(a.a),c.default.use(u.a);var f=l,d=(n(2697),n(18)),h=Object(d.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-radio-group",{model:{value:e.justify,callback:function(t){e.justify=t},expression:"justify"}},e._l(e.justifyArray,(function(t){return n("el-radio",{attrs:{label:t}},[e._v(e._s(t))])})),1),e._v(" "),n("my-flex",{attrs:{justify:e.justify}},e._l(4,(function(t){return n("my-flex-item",{key:t},[e._v(e._s(t))])})),1)],1)}),[],!1,null,"e438b438",null);t.default=h.exports},362:function(e,t,n){},613:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));n(21),n(55),n(84),n(88),n(7),n(87),n(56);var i,r=n(31),s=n(52);if("undefined"!=typeof window){window.matchMedia=window.matchMedia||function(e){return{media:e,matches:!1,addListener:function(){},removeListener:function(){}}},i=n(621)}var o=["xxl","xl","lg","md","sm","xs"],u={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},a=[],c=-1,l={},f={fire:function(e){return l=e,!(a.length<1)&&(a.forEach((function(e){e.func(l)})),!0)},on:function(e){0===a.length&&this.register();var t=(++c).toString();return a.push({token:t,func:e}),e(l),t},off:function(e){0===(a=a.filter((function(t){return t.token!==e}))).length&&this.unregister()},register:function(){var e=this;Object.keys(u).forEach((function(t){i.register(u[t],{match:function(){var n=Object(s.a)(Object(s.a)({},l),{},Object(r.a)({},t,!0));e.fire(n)},unmatch:function(){var n=Object(s.a)(Object(s.a)({},l),{},Object(r.a)({},t,!1));e.fire(n)},destroy:function(){}})}))},unregister:function(){Object.keys(u).map((function(e){return i.unregister(u[e])}))}};t.a=f},676:function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));n(216);var i=function(e){if("undefined"!=typeof window&&window.document&&window.document.documentElement){var t=Array.isArray(e)?e:[e],n=window.document.documentElement;return t.some((function(e){return e in n.style}))}return!1},r=i(["flex","webkitFlex","Flex","msFlex"]);t.a=i},701:function(e,t,n){},815:function(e,t,n){}}]);