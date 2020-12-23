(window.webpackJsonp=window.webpackJsonp||[]).push([[906],{1576:function(t,e,a){},1617:function(t,e,a){"use strict";a(1576)},2077:function(t,e,a){"use strict";a.r(e);a(201),a(55),a(140),a(32),a(27),a(56),a(538),a(125);var r=a(540),s=(a(539),a(543)),l=a(0),n=a(699),i=a.n(n),o={name:"Palette",components:{MyFloat:s.a,MyFloatItem:r.a},props:{name:String,title:String,summary:String,primary:String,colors:{type:Array,default:function(){return[]}},reverse:Boolean},data:function(){return{clipboards:[]}},methods:{getVarName:function(t){return"$".concat(this.name,"-").concat(t+1)},getStyle:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{background:t,color:e>4?this.reverse?"#fff":"#000":this.reverse?"#000":"#fff"}}},mounted:function(){var t=this,e=this.$el.querySelectorAll(".clipboard");Array.from(e).forEach((function(e){var a=new i.a(e);a.on("success",(function(e){t.$message.success("复制成功！")})),t.clipboards.push(a)}))},beforeDestroy:function(){this.clipboards.forEach((function(t){t.destroy()}))}};l.default.use(s.a),l.default.use(r.a);var u=o,c=(a(1617),a(18)),f=Object(c.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"palette"},[a("h3",[t._v(t._s(t.title))]),t._v(" "),a("p",[t._v(t._s(t.summary))]),t._v(" "),t.primary?a("div",{staticClass:"primary"},[a("my-float",{staticClass:"clipboard",style:t.getStyle(t.primary),attrs:{title:"点击可复制颜色码","data-clipboard-text":t.primary}},[a("my-float-item",[t._v("$"+t._s(t.name)+"-primary")]),t._v(" "),a("my-float-item",{attrs:{float:"right"}},[t._v(t._s(t.primary))])],1)],1):t._e(),t._v(" "),a("div",{staticClass:"levels"},t._l(t.colors,(function(e,r){return a("my-float",{key:r,staticClass:"clipboard",style:t.getStyle(e,r),attrs:{"data-clipboard-text":e,title:"点击可复制颜色码"}},[a("my-float-item",[t._v(t._s(t.getVarName(r)))]),t._v(" "),a("my-float-item",{attrs:{float:"right"}},[t._v(t._s(e))])],1)})),1)])}),[],!1,null,"2825c2d0",null);e.default=f.exports},362:function(t,e,a){},3995:function(t,e,a){"use strict";a.r(e);a(55),a(88),a(56),a(564),a(362);var r=a(562),s=a.n(r),l=(a(588),a(570)),n=a.n(l),i=a(52),o=a(36),u=a(0),c=a(2077),f=a(2427),m={red:{title:"Dust Red / 薄暮",summary:"斗志、奔放"},volcano:{title:"Volcano / 火山",summary:"醒目、澎湃"},orange:{title:"Sunset Orange / 日暮",summary:"温暖、欢快"},gold:{title:"Calendula Gold / 金盏花",summary:"活力、积极"},yellow:{title:"Sunrise Yellow / 日出",summary:"出生、阳光"},lime:{title:"Lime / 青柠",summary:"自然、生机"},green:{title:"Polar Green / 极光绿",summary:"健康、创新"},cyan:{title:"Cyan / 明青",summary:"希望、坚强"},blue:{title:"Daybreak Blue / 拂晓蓝",summary:"包容、科技、普惠"},geekblue:{title:"Geek Blue / 极客蓝",summary:"探索、钻研"},purple:{title:"Golden Purple / 酱紫",summary:"优雅、浪漫"},magenta:{title:"Magenta / 法式洋红",summary:"明快、感性"},grey:{title:"Grey / 灰度",summary:"中性"}},p={name:"Colors",components:{Palette:c.default},data:function(){return{palettes:[]}},methods:{reverseColors:function(t){return Object(o.a)(t).reverse()}},created:function(){var t=this;Object.keys(f.presetPalettes).forEach((function(e){var a=f.presetPalettes[e];t.palettes.push(Object(i.a)(Object(i.a)({},m[e]||{}),{},{name:e,colors:a,primary:a.primary}))}))}};u.default.use(n.a),u.default.use(s.a);var y=p,d=a(18),v=Object(d.a)(y,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"colors"},[a("el-row",{attrs:{gutter:20}},t._l(t.palettes,(function(e){return a("el-col",{key:e.name,attrs:{span:8}},[a("palette",{attrs:{name:e.name,title:e.title,summary:e.summary,colors:t.reverseColors(e.colors),primary:e.primary}})],1)})),1)],1)}),[],!1,null,"0947128f",null);e.default=v.exports},482:function(t,e,a){"use strict";a(124);var r={name:"MyFloatItem",inject:{wrapper:{default:null}},props:{float:{type:String,default:"left",validator:function(t){return["none","left","right"].includes(t)}}},computed:{classes:function(){if(this.wrapper){var t=this.float;return this.wrapper.reverse&&(t="right"===this.float?"left":"left"===this.float?"right":"none"),["is-".concat(t),{"is-fit":this.wrapper.fit}]}}}},s=a(18),l=Object(s.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-float-item",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null);e.a=l.exports},538:function(t,e,a){},539:function(t,e,a){},540:function(t,e,a){"use strict";var r=a(53),s=a(482);e.a=Object(r.a)(s.a)},543:function(t,e,a){"use strict";var r=a(53),s={name:"MyFloat",provide:function(){return{wrapper:this}},props:{reverse:{type:Boolean,default:!1},fit:{type:Boolean,default:!1}},computed:{classes:function(){return{"my-float--fit":this.fit}}}},l=a(18),n=Object(l.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-float",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null).exports,i=a(482);e.a=Object(r.a)(n),Object(r.a)(i.a)},564:function(t,e,a){},588:function(t,e,a){}}]);