(window.webpackJsonp=window.webpackJsonp||[]).push([[1382],{2191:function(t,e,a){},2234:function(t,e,a){"use strict";var i=a(53),n=(a(124),a(34),a(200),a(52)),s=(a(1045),a(125),{name:"MyAvatars",components:{MyAvatar:a(1050).a},props:{data:{type:Array,default:function(){return[]}},tooltip:Object,max:{type:Number,default:1/0},size:{type:[String,Number],default:"default",validator:function(t){return["large","small","default"].includes(t)||t>0}},alt:String,theme:{type:String,default:"primary",validator:function(t){return["primary","success","warning","danger","info"].includes(t)}},shape:{type:String,default:"circle",validator:function(t){return["circle","square"].includes(t)}},addable:Boolean,addIcon:{type:String,default:"el-icon-plus"}},computed:{list:function(){return this.data.length>this.max?this.data.slice(0,this.max):this.data},count:function(){return this.max!==1/0?this.data.length-this.max:0},classes:function(){return{"my-avatars":!0,"is-pointer":!!this.$listeners.click}}},methods:{mergeOptions:function(t){var e=t.tooltip?Object(n.a)(Object(n.a)({},this.tooltip),{},{content:t.tooltip}):void 0;return Object(n.a)(Object(n.a)({size:this.size,theme:this.theme,alt:this.alt,shape:this.shape},t),{},{tooltip:e})},createEvents:function(t){var e=this;return this.$listeners["click-item"]?{click:function(a){return e.handleClickItem(t,a)}}:{}},createClickMoreEvents:function(){var t=this;return this.$listeners["click-more"]?{click:function(e){t.$emit("click-more",e)}}:{}},handleClickItem:function(t){this.$emit("click-item",t)},handleClickAdd:function(){this.$emit("click-add")}}}),r=a(18),c=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._g({class:t.classes},t.$listeners),[t._l(t.list,(function(e,i){return a("MyAvatar",t._g(t._b({key:i},"MyAvatar",t.mergeOptions(e),!1),t.createEvents(e)),[t._v(t._s(e.text)+"\n  ")])})),t._v(" "),t.count>0?a("MyAvatar",t._g({attrs:{theme:"warning",size:t.size,shape:t.shape}},t.createClickMoreEvents()),[t._v("+"+t._s(t.count)+"\n  ")]):t._e(),t._v(" "),t.addable?a("MyAvatar",{staticClass:"my-avatars__add",attrs:{theme:"info",size:t.size,icon:t.addIcon,shape:t.shape},on:{click:t.handleClickAdd}}):t._e()],2)}),[],!1,null,null,null).exports;e.a=Object(i.a)(c)},3410:function(t,e,a){"use strict";a.r(e);a(2191),a(125);var i=a(2234);a(0).default.use(i.a);var n={data:function(){return{data:[{text:"陈",tooltip:"陈某某"},{text:"李",theme:"success",tooltip:"李某某"},{text:"张",theme:"danger",tooltip:"张某某"},{text:"王",theme:"warning",tooltip:"王某某"}]}}},s=a(18),r=Object(s.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("my-avatars",{attrs:{data:this.data,size:"large"}})}),[],!1,null,null,null);e.default=r.exports}}]);