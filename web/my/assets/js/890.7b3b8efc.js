(window.webpackJsonp=window.webpackJsonp||[]).push([[890],{2605:function(t,e,a){"use strict";a.r(e);a(432),a(124);var s=a(434),l=(a(433),a(439)),i=a(0),n={components:{MyFloat:l.a,MyFloatItem:s.a}};i.default.use(l.a),i.default.use(s.a);var r=n,o=a(18),u=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("my-float",[e("my-float-item",[this._v("左边内容")]),this._v(" "),e("my-float-item",{attrs:{float:"right"}},[this._v("右边内容")])],1)}),[],!1,null,null,null);e.default=u.exports},402:function(t,e,a){"use strict";a(125);var s={name:"MyFloatItem",inject:{wrapper:{default:null}},props:{float:{type:String,default:"left",validator:function(t){return["none","left","right"].includes(t)}}},computed:{classes:function(){if(this.wrapper){var t=this.float;return this.wrapper.reverse&&(t="right"===this.float?"left":"left"===this.float?"right":"none"),["is-".concat(t),{"is-fit":this.wrapper.fit}]}}}},l=a(18),i=Object(l.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-float-item",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},432:function(t,e,a){},433:function(t,e,a){},434:function(t,e,a){"use strict";var s=a(53),l=a(402);e.a=Object(s.a)(l.a)},439:function(t,e,a){"use strict";var s=a(53),l={name:"MyFloat",provide:function(){return{wrapper:this}},props:{reverse:{type:Boolean,default:!1},fit:{type:Boolean,default:!1}},computed:{classes:function(){return{"my-float--fit":this.fit}}}},i=a(18),n=Object(i.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-float",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null).exports,r=a(402);e.a=Object(s.a)(n),Object(s.a)(r.a)}}]);