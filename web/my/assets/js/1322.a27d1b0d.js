(window.webpackJsonp=window.webpackJsonp||[]).push([[1322],{3511:function(t,e,n){"use strict";n.r(e);n(910),n(125);var a=n(911);n(0).default.use(a.a);var s={},r=n(18),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("my-container",{attrs:{shadow:""}},[t._v("Container")]),t._v(" "),n("my-container",{attrs:{shadow:"",theme:"primary"}},[t._v("Container")]),t._v(" "),n("my-container",{attrs:{shadow:"",theme:"success"}},[t._v("Container")]),t._v(" "),n("my-container",{attrs:{shadow:"",theme:"warning"}},[t._v("Container")]),t._v(" "),n("my-container",{attrs:{shadow:"",theme:"danger"}},[t._v("Container")]),t._v(" "),n("my-container",{attrs:{shadow:"",theme:"info"}},[t._v("Container")])],1)}),[],!1,null,null,null);e.default=i.exports},908:function(t,e,n){"use strict";n(124);var a=n(31),s={name:"MyContainer",props:{fit:Boolean,theme:{type:String,default:"",validator:function(t){return["","primary","info","warning","danger","success"].includes(t)}},border:Boolean,shadow:Boolean,bodyStyle:Object},computed:{classes:function(){var t;return t={"is-fit":this.fit,"is-border":this.border},Object(a.a)(t,"my-container--".concat(this.theme),!!this.theme),Object(a.a)(t,"is-shadow",this.shadow),t}}},r=n(18),i=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"my-container",class:this.classes},[e("div",{staticClass:"my-container__inner",style:this.bodyStyle},[this._t("default")],2)])}),[],!1,null,null,null);e.a=i.exports},910:function(t,e,n){},911:function(t,e,n){"use strict";var a=n(53),s=n(908);e.a=Object(a.a)(s.a)}}]);