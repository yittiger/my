(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1010:function(t,e,i){},1095:function(t,e,i){"use strict";var n=i(9);e.a={props:{icon:[String,Object]},computed:{iconProps:function(){return this.icon?"object"===Object(n.a)(this.icon)?this.icon:{name:this.icon}:null}}}},1174:function(t,e,i){"use strict";i(1010)},388:function(t,e,i){},389:function(t,e,i){"use strict";var n=i(57),s=i(410);e.a=Object(n.a)(s.a)},410:function(t,e,i){"use strict";var n=i(40),s=(i(125),i(30),i(384),i(200),{DEFAULT:"",SUCCESS:"success",WARNING:"warning",DANGER:"danger",INFO:"info",PRIMARY:"primary"}),c={Theme:s,name:"MyIcon",props:{name:String,svg:Boolean,svgProps:Object,theme:{type:String,validator:function(t){return!t||Object.values(s).includes(t)}}},computed:{classes:function(){return[Object(n.a)(Object(n.a)(Object(n.a)({},"my-icon--".concat(this.theme),!!this.theme),"is-pointer",!!this.$listeners.click),"is-svg",this.svg),this.$slots.default?"":this.name?this.name:""]}},methods:{handleClick:function(t){this.$emit("click",t)}}},a=i(21),r=Object(a.a)(c,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("i",{staticClass:"my-icon",class:t.classes,on:{click:t.handleClick}},[t.svg?i(t.name,t._b({tag:"component"},"component",t.svgProps,!1)):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},421:function(t,e,i){"use strict";var n=i(57),s=i(40),c=i(56),a=(i(199),i(23),i(392),i(125),i(203),i(127),i(4),{name:"MyDvBox",inheritAttrs:!1,provide:function(){return{layoutVm:this.layout?this:null}},inject:{layoutVm:{default:null}},props:{width:String,height:String,defaultWidth:{type:String,default:"auto"},defaultHeight:{type:String,default:"auto"},left:{type:[String,Number]},top:{type:[String,Number]},right:[String,Number],bottom:[String,Number],zIndex:[Number,String],xAlign:{type:String,validator:function(t){return["left","right","center"].includes(t)}},yAlign:{type:String,validator:function(t){return["top","bottom","middle"].includes(t)}},contentAlign:{type:String,default:"left",validator:function(t){return["left","right","center"].includes(t)}},zoom:Number,scale:Number,fit:Boolean,visible:{type:Boolean,default:!0},position:{type:Boolean,default:!0},margin:String,padding:String,inline:Boolean,opacity:{type:Number,default:1},shadow:Boolean,layout:Boolean,weight:{type:Number,default:1},gap:{type:Number,default:0},direction:{type:String,default:"row",validator:function(t){return["row","column"].includes(t)}},free:Boolean},data:function(){return{boxes:[]}},computed:{layoutSize:function(){var t=this,e=this.weight,i=this.layoutVm,n=this.free;if(i&&!n){var s=i.gap,c=i.direction,a=i.total,r=i.boxCount,o=i.boxes,l=o.findIndex((function(e){return e===t})),u=r-1,h="(100% - ".concat(s*u,"px) * ").concat(e," / ").concat(a),d=o.filter((function(t,e){return e<l})).reduce((function(t,e){return t+e.weight}),0),f="(100% - ".concat(s*u,"px) * ").concat(d," / ").concat(a," +  ").concat(l*s,"px");return"row"===c?{height:"calc(".concat(h,")"),top:"calc(".concat(f,")")}:{width:"calc(".concat(h,")"),left:"calc(".concat(f,")")}}return null},styles:function(){var t=this.inline,e=this.margin,i=this.padding,n=this.position,s=this.fit,a=this.width,r=this.height,o=this.left,l=this.top,u=this.right,h=this.bottom,d=this.zIndex,f=this.zoom,p=this.scale,m=this.xAlign,g=this.yAlign,b=this.defaultWidth,y=this.defaultHeight;return Object(c.a)({position:n?"absolute":"relative",width:s?"100%":a||b,height:s?"100%":r||y,zoom:f,left:m?null:o,top:g?null:l,right:m?null:u,bottom:g?null:h,transform:p?"scale(".concat(p,")"):null,display:t?"inline-block":"block",opacity:this.opacity,margin:e,padding:i,zIndex:d},this.layoutSize)},classes:function(){return Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)(Object(s.a)({},"is-".concat(this.xAlign),!!this.xAlign),"is-".concat(this.yAlign),!!this.yAlign),"is-shadow",this.shadow),"is-center-middle","center"===this.xAlign&&"middle"===this.yAlign),"is-content-align-".concat(this.contentAlign),!!this.contentAlign)},total:function(){return this.boxes.reduce((function(t,e){return t+e.weight}),0)},boxCount:function(){return this.boxes.length}},methods:{registerBox:function(t){this.boxes.push(t)},unregisterBox:function(t){this.boxes=this.boxes.filter((function(e){return e!==t}))}},created:function(){this.layoutVm&&!this.free&&this.layoutVm.registerBox(this)},beforeDestroy:function(){this.layoutVm&&!this.free&&this.layoutVm.unregisterBox(this)}}),r=(i(542),i(21)),o=Object(r.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return this.visible?e("div",this._g({staticClass:"my-dv-box",class:this.classes,style:this.styles},this.$listeners),[this._t("default")],2):this._e()}),[],!1,null,null,null).exports;e.a=Object(n.a)(o)},453:function(t,e,i){},459:function(t,e,i){},464:function(t,e,i){"use strict";var n=i(57),s=i(9),c=(i(199),i(127),i(369)),a=i(370),r=i(128),o=i(56),l={color:"#1de2ff",fill:"transparent",textColor:"#b4e4ff",colors:["#1165b2","#0d8888","#398912","#70980c","#b17706","#af620f","#af3b14","#ab181f","#a4226a","#502092","#2a39c3","#2a71c4","#128943","#49b312","#b28f13","#b25010","#bd352c","#a4224a","#6a1a97","#321a97","#1890ff","#13c2c2","#52c41a","#a0d911","#fdaa09","#fa8c16","#fa541c","#f5222d","#eb3197","#722ed1","#2f54eb"]},u={props:{config:Object},computed:{settings:function(){return Object(o.a)(Object(o.a)({},l),this.config)}}},h=i(510),d={name:"MyDvPage",mixins:[u],provide:function(){return{page:this}},props:{lock:{type:Boolean},scale:{type:Boolean,default:!0},width:{type:Number,default:1920,validator:function(t){return t>0}},height:{type:Number,default:1080,validator:function(t){return t>0}},activeIndex:{type:Number,default:0},target:{type:[String,HTMLElement,Function],default:function(){return document.body}},fit:Boolean,fullscreen:Boolean},data:function(){return{screens:[],screenActiveIndex:this.activeIndex,widthScale:1,heightScale:1,isFullScreen:!1}},watch:{$props:{deep:!0,immediate:!0,handler:function(){this.resize()}},activeIndex:{immediate:!0,handler:function(t){this.screenActiveIndex=t}}},computed:{styles:function(){return this.fit?{width:"100%",height:"100%",transform:"translateX(-50%) translateY(-50%)"}:{width:"".concat(this.width,"px"),height:"".concat(this.height,"px"),transform:"scaleX(".concat(this.widthScale,") scaleY(").concat(this.heightScale,") translateX(-50%) translateY(-50%)")}}},methods:{getTarget:function(){var t;switch(Object(s.a)(this.target)){case"string":t="parent"===this.target?this.$el.parentNode:document.querySelector(this.target);break;case"function":t=this.target();break;default:t=this.target}return t||document.body},resize:function(){if(!this.scale||this.fit)return this.widthScale=1,void(this.heightScale=1);var t=this.warpper||{},e=t.clientWidth,i=t.clientHeight;e&&i&&(this.lock?this.heightScale=this.widthScale=e/this.width:(this.widthScale=e/this.width,this.heightScale=i/this.height))},fullScreen:function(){var t=this.getTarget();Object(h.b)(t),this.isFullScreen=!0},exitFullScreen:function(){Object(h.a)(),this.isFullScreen=!1}},mounted:function(){this.warpper=this.getTarget(),Object(a.addClass)(this.warpper,"my-dv-page__wrapper"+this._uid),this.proxyResize=Object(r.c)(this.resize,100),Object(c.addResizeListener)(this.warpper,this.proxyResize),this.resize(),this.isFullScreen=!!this.fullscreen&&Object(h.c)()},beforeDestroy:function(){this.proxyResize&&Object(c.removeResizeListener)(this.warpper,this.proxyResize),Object(a.removeClass)(this.warpper,"my-dv-page__wrapper"+this._uid)}},f=(i(526),i(21)),p=Object(f.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-dv-page",style:t.styles},[t._t("default"),t._v(" "),t.fullscreen?i("div",{staticClass:"my-dv-page__fullscreen"},[t.isFullScreen?i("i",{staticClass:"el-icon-switch-button",attrs:{title:"取消全屏"},on:{click:t.exitFullScreen}}):i("i",{staticClass:"el-icon-full-screen",attrs:{title:"全屏"},on:{click:t.fullScreen}})]):t._e()],2)}),[],!1,null,null,null).exports;e.a=Object(n.a)(p)},510:function(t,e,i){"use strict";function n(t){var e=(t=t||document.documentElement).requestFullScreen||t.webkitRequestFullScreen||t.mozRequestFullScreen||t.msRequestFullscreen;void 0!==e&&e&&e.call(t)}function s(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function c(){return document.isFullScreen||document.mozIsFullScreen||document.webkitIsFullScreen}i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return s})),i.d(e,"c",(function(){return c}))},526:function(t,e,i){"use strict";i(453)},542:function(t,e,i){"use strict";i(459)},918:function(t,e,i){"use strict";var n=i(57),s=i(40),c=i(56),a=(i(388),i(126),i(389)),r=(i(127),i(421)),o=i(1095),l=i(957),u={name:"MyDvTitle",mixins:[o.a,l.a],components:{Box:r.a,MyIcon:a.a},props:{level:{type:Number,default:1,validator:function(t){return t>0&&t<7}},shadow:Boolean,strong:Boolean},computed:{classes:function(){return Object(c.a)(Object(s.a)({"is-text-shadow":this.shadow,"is-strong":this.strong},"is-level-".concat(this.level),!!this.level),this.textTypeClass)}}},h=(i(1174),i(21)),d=Object(h.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Box",t._g(t._b({staticClass:"my-dv-title",class:t.classes,attrs:{"default-width":"auto","default-height":"auto"}},"Box",t.$attrs,!1),t.$listeners),[t.iconProps?i("MyIcon",t._b({staticClass:"my-dv-title__icon"},"MyIcon",t.iconProps,!1)):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null).exports;e.a=Object(n.a)(d)},957:function(t,e,i){"use strict";var n=i(40);i(125);e.a={inheritAttrs:!1,props:{type:{type:String,default:"default",validator:function(t){return["default","primary","normal","secondary","success","placeholder","warning","danger"].includes(t)}}},computed:{textTypeClass:function(){return Object(n.a)(Object(n.a)({},"is-".concat(this.type),!!this.type),"is-pointer",!!this.$listeners.click)}}}}}]);