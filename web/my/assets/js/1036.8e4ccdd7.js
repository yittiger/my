(window.webpackJsonp=window.webpackJsonp||[]).push([[1036],{3561:function(t,e,a){"use strict";a.r(e);a(608),a(126);var n=a(610),s=a(0),i={components:{MyHeader:n.a}};s.default.use(n.a);var l=i,r=a(21),c=Object(r.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("my-header",{attrs:{title:"我是标题文字",icon:"el-icon-menu"}})}),[],!1,null,null,null);e.default=c.exports},451:function(t,e,a){"use strict";a(125);var n={name:"MyFloatItem",inject:{wrapper:{default:null}},props:{float:{type:String,default:"left",validator:function(t){return["none","left","right"].includes(t)}}},computed:{classes:function(){if(this.wrapper){var t=this.float;return this.wrapper.reverse&&(t="right"===this.float?"left":"left"===this.float?"right":"none"),["is-".concat(t),{"is-fit":this.wrapper.fit}]}}}},s=a(21),i=Object(s.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-float-item",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null);e.a=i.exports},511:function(t,e,a){},512:function(t,e,a){},513:function(t,e,a){"use strict";var n=a(57),s=a(451);e.a=Object(n.a)(s.a)},514:function(t,e,a){"use strict";var n=a(57),s={name:"MyFloat",provide:function(){return{wrapper:this}},props:{reverse:{type:Boolean,default:!1},fit:{type:Boolean,default:!1}},computed:{classes:function(){return{"my-float--fit":this.fit}}}},i=a(21),l=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-float",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null).exports,r=a(451);e.a=Object(n.a)(l),Object(n.a)(r.a)},608:function(t,e,a){},610:function(t,e,a){"use strict";var n=a(57),s=a(40),i=(a(511),a(126),a(513)),l=(a(512),a(514)),r=(a(125),a(0)),c={name:"MyHeader",components:{MyFloat:l.a,MyFloatItem:i.a},props:{title:String,icon:String,background:Boolean,size:{type:String,default:"",validator:function(t){return["","large","medium","small"].includes(t)}},theme:{type:String,default:"default",validator:function(t){return["default","border-left","border-top","border-bottom","bg-icon","bg-down","bg-right"].includes(t)}}},computed:{classes:function(){return[Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)({},"my-header--".concat(this.theme),!!this.theme),"is-background",this.background),"my-header--border-top","bg-icon"===this.theme),"is-".concat(this.size),!!this.size)]}}};r.default.use(l.a),r.default.use(i.a);var o=c,u=a(21),f=Object(u.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("my-float",{staticClass:"my-header",class:t.classes},[a("div",{staticClass:"my-header__content"},[t.icon?a("i",{staticClass:"my-header__icon",class:t.icon}):t._e(),t._v(" "),t._t("title",(function(){return[t._v(t._s(t.title))]}))],2),t._v(" "),t.$slots.handle?a("my-float-item",{staticClass:"my-header__handle",attrs:{float:"right"}},[t._t("handle")],2):t._e()],1)}),[],!1,null,null,null).exports;e.a=Object(n.a)(f)}}]);