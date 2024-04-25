(window.webpackJsonp=window.webpackJsonp||[]).push([[807],{1175:function(t,e,i){},1179:function(t,e,i){"use strict";var n=i(57),s=i(40),a=i(56),l=(i(388),i(126),i(389)),r=(i(701),i(702)),o=(i(548),i(549)),h=(i(125),{name:"MyMapPanel",mixins:[i(783).a],inject:["myMap"],components:{MyDrag:o.a,MyResize:r.a,MyIcon:l.a},props:{width:String,height:String,draggable:[Boolean,Object],resizable:[Boolean,Object],title:String,icon:[String,Object],closable:Boolean,visible:{type:Boolean,default:!0},footerAlign:{type:String,validator:function(t){return["left","right","center"].includes(t)}}},data:function(){return{footerHeight:0,mapWarp:null}},computed:{dragOptions:function(){var t=this;return Object(a.a)({disabled:!this.draggable,handle:function(){return t.$refs.header||t.$el},target:this.mapWarp},this.draggable)},resizeOptions:function(){return Object(a.a)({disabled:!this.resizable,minWidth:parseInt(this.width||0),minHeight:parseInt(this.height||0)},this.resizable)},iconOptions:function(){return"string"==typeof this.icon?{name:this.icon}:this.icon},panelSize:function(){return this.resizable?{minWidth:this.width,minHeight:this.height,paddingBottom:"".concat(this.footerHeight,"px")}:{width:this.width,height:this.height,paddingBottom:"".concat(this.footerHeight,"px")}},toolbarClass:function(){return{"my-map-panel__toolbar":!0,"is-closable":this.closable}},wrapperStyle:function(){return Object(a.a)(Object(a.a)({},this.styles),{},{width:"100%"===this.width?this.width:null,height:"100%"===this.height?this.height:null})},footerClass:function(){return Object(s.a)({"my-map-panel__footer":!0},"is-".concat(this.footerAlign),!!this.footerAlign)}},methods:{setFooterHeight:function(){this.$refs.footer&&(this.footerHeight=this.$refs.footer.getBoundingClientRect().height)},handleClose:function(){this.$emit("update:visible",!1),this.$emit("close")}},mounted:function(){var t;this.setFooterHeight(),this.mapWarp=(null===(t=this.myMap)||void 0===t?void 0:t.$el)||this.$parent.$el}}),c=i(21),u=Object(c.a)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.visible?i("MyDrag",t._b({staticClass:"my-map-placement my-map-panel",class:t.classes,style:t.wrapperStyle},"MyDrag",t.dragOptions,!1),[i("MyResize",t._b({style:t.panelSize},"MyResize",t.resizeOptions,!1),[t.title||t.$slots.title||t.$slots.toolbar?i("div",{ref:"header",staticClass:"my-map-panel__header"},[i("div",{staticClass:"my-map-panel__title"},[t.icon?i("MyIcon",t._b({},"MyIcon",t.iconOptions,!1)):t._e(),t._v(" "),t._t("title",(function(){return[t._v(t._s(t.title))]}))],2),t._v(" "),t.$slots.toolbar?i("div",{class:t.toolbarClass},[t._t("toolbar")],2):t._e(),t._v(" "),t.closable?i("i",{staticClass:"my-map-panel__close el-icon-close",on:{click:t.handleClose}}):t._e()]):t._e(),t._v(" "),i("div",{staticClass:"my-map-panel__body"},[t._t("default")],2),t._v(" "),t.$slots.footer?i("div",{ref:"footer",class:t.footerClass},[t._t("footer")],2):t._e(),t._v(" "),t._t("append")],2)],1):t._e()}),[],!1,null,null,null).exports;i(1175),e.a=Object(n.a)(u)},3177:function(t,e,i){"use strict";i.r(e);var n=i(1179),s=i(495),a=i(0);a.default.use(s.a),a.default.use(n.a);var l={data:function(){return{visible:!0}}},r=i(21),o=Object(r.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("my-map",[i("my-map-panel",{attrs:{title:"标题文本",icon:"el-icon-setting",placement:"center-center",width:"300px",height:"200px",closable:"",visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[t._v("\n    面板占位内容\n  ")])],1)}),[],!1,null,null,null);e.default=o.exports},370:function(t,e,i){"use strict";e.__esModule=!0,e.isInContainer=e.getScrollContainer=e.isScroll=e.getStyle=e.once=e.off=e.on=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.hasClass=f,e.addClass=function(t,e){if(!t)return;for(var i=t.className,n=(e||"").split(" "),s=0,a=n.length;s<a;s++){var l=n[s];l&&(t.classList?t.classList.add(l):f(t,l)||(i+=" "+l))}t.classList||(t.className=i)},e.removeClass=function(t,e){if(!t||!e)return;for(var i=e.split(" "),n=" "+t.className+" ",s=0,a=i.length;s<a;s++){var l=i[s];l&&(t.classList?t.classList.remove(l):f(t,l)&&(n=n.replace(" "+l+" "," ")))}t.classList||(t.className=(n||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))},e.setStyle=function t(e,i,s){if(!e||!i)return;if("object"===(void 0===i?"undefined":n(i)))for(var a in i)i.hasOwnProperty(a)&&t(e,a,i[a]);else"opacity"===(i=c(i))&&h<9?e.style.filter=isNaN(s)?"":"alpha(opacity="+100*s+")":e.style[i]=s};var s,a=i(0);var l=((s=a)&&s.__esModule?s:{default:s}).default.prototype.$isServer,r=/([\:\-\_]+(.))/g,o=/^moz([A-Z])/,h=l?0:Number(document.documentMode),c=function(t){return t.replace(r,(function(t,e,i,n){return n?i.toUpperCase():i})).replace(o,"Moz$1")},u=e.on=!l&&document.addEventListener?function(t,e,i){t&&e&&i&&t.addEventListener(e,i,!1)}:function(t,e,i){t&&e&&i&&t.attachEvent("on"+e,i)},d=e.off=!l&&document.removeEventListener?function(t,e,i){t&&e&&t.removeEventListener(e,i,!1)}:function(t,e,i){t&&e&&t.detachEvent("on"+e,i)};e.once=function(t,e,i){u(t,e,(function n(){i&&i.apply(this,arguments),d(t,e,n)}))};function f(t,e){if(!t||!e)return!1;if(-1!==e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1}var g=e.getStyle=h<9?function(t,e){if(!l){if(!t||!e)return null;"float"===(e=c(e))&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(t){return 1}default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(i){return t.style[e]}}}:function(t,e){if(!l){if(!t||!e)return null;"float"===(e=c(e))&&(e="cssFloat");try{var i=document.defaultView.getComputedStyle(t,"");return t.style[e]||i?i[e]:null}catch(i){return t.style[e]}}};var p=e.isScroll=function(t,e){if(!l)return g(t,null!==e||void 0!==e?e?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)};e.getScrollContainer=function(t,e){if(!l){for(var i=t;i;){if([window,document,document.documentElement].includes(i))return window;if(p(i,e))return i;i=i.parentNode}return i}},e.isInContainer=function(t,e){if(l||!t||!e)return!1;var i=t.getBoundingClientRect(),n=void 0;return n=[window,document,document.documentElement,null,void 0].includes(e)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:e.getBoundingClientRect(),i.top<n.bottom&&i.bottom>n.top&&i.right>n.left&&i.left<n.right}},384:function(t,e,i){var n=i(1),s=i(380).values;n({target:"Object",stat:!0},{values:function(t){return s(t)}})},388:function(t,e,i){},389:function(t,e,i){"use strict";var n=i(57),s=i(410);e.a=Object(n.a)(s.a)},410:function(t,e,i){"use strict";var n=i(40),s=(i(125),i(30),i(384),i(200),{DEFAULT:"",SUCCESS:"success",WARNING:"warning",DANGER:"danger",INFO:"info",PRIMARY:"primary"}),a={Theme:s,name:"MyIcon",props:{name:String,svg:Boolean,svgProps:Object,theme:{type:String,validator:function(t){return!t||Object.values(s).includes(t)}}},computed:{classes:function(){return[Object(n.a)(Object(n.a)(Object(n.a)({},"my-icon--".concat(this.theme),!!this.theme),"is-pointer",!!this.$listeners.click),"is-svg",this.svg),this.$slots.default?"":this.name?this.name:""]}},methods:{handleClick:function(t){this.$emit("click",t)}}},l=i(21),r=Object(l.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("i",{staticClass:"my-icon",class:t.classes,on:{click:t.handleClick}},[t.svg?i(t.name,t._b({tag:"component"},"component",t.svgProps,!1)):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},548:function(t,e,i){},549:function(t,e,i){"use strict";var n=i(57),s=i(9),a=(i(383),i(125),i(30),i(127),i(4),i(370)),l=i(128),r=i(574);function o(t,e){var i=Object(s.a)(e);return"function"===i?e():"string"===i?t.querySelector(e):e instanceof HTMLElement?e:null}var h={left:-1e4,top:-1e4,width:2e4,height:2e4},c={name:"MyDrag",props:{handle:[String,HTMLElement,Function],axis:{type:String,default:"",validator:function(t){return["","v","h"].includes(t)}},delay:{type:Number,default:100},range:[Object,Function],target:[String,HTMLElement,Function],clone:[Boolean,Function],revert:Boolean,group:String,disabled:Boolean,data:[String,Number,Object,Array],cloneClass:String,origin:{type:[String,HTMLElement,Function],default:function(){return null}},appendBody:Boolean},data:function(){return this.handleEl=null,this.dragEl=null,this.cacheRange=null,this.cacheOrigin=null,{dragging:!1,dragged:!1,x:null,y:null,offsetX:0,offsetY:0,startX:0,startY:0,clientX:0,clientY:0,dropped:!1}},computed:{classes:function(){return{"is-clone":this.clone,"is-dragging":this.dragging,"is-disabled":this.disabled,"is-dragged":this.dragged,"my-drag__handle":this.$el===this.handleEl}}},methods:{getOrigin:function(){if(this.cacheOrigin)return this.cacheOrigin;var t=this.origin?o(this.document,this.origin):function(t){for(var e=t.parentNode;e!==document.documentElement&&"static"===Object(a.getStyle)(e,"position");)e=e.parentNode;return e}(this.$el);return this.cacheOrigin=t.getBoundingClientRect(),this.cacheOrigin},getHandle:function(){return this.handle&&o(this.$el,this.handle)||this.$el},getTarget:function(){return this.target?o(this.document,this.target):null},getRange:function(){if(this.cacheRange)return this.cacheRange;var t=this.getTarget();if(t){var e=t.getBoundingClientRect(),i=this.$el.getBoundingClientRect(),n=this.getOrigin();this.cacheRange={left:e.left-n.left,top:e.top-n.top,width:e.width-i.width,height:e.height-i.height}}else this.cacheRange="function"==typeof this.range?this.range():this.range||h;return this.cacheRange},createDragEl:function(t){if(this.clone){if("function"==typeof this.clone){if(this.dragEl=this.clone(this),!this.dragEl)throw new Error("参数clone函数并没有返回正确的HTMLElement")}else this.dragEl=this.$el.cloneNode(!0);Object(a.addClass)(this.dragEl,"my-drag__clone"),this.cloneClass&&Object(a.addClass)(this.dragEl,this.cloneClass),this.appendBody?this.document.body.appendChild(this.dragEl):this.$el.parentNode.appendChild(this.dragEl)}else this.dragEl=this.$el},setDragElStyle:function(){if(this.clone){var t={left:"".concat(this.startX,"px"),top:"".concat(this.startY,"px"),display:"inline-block"};"function"==typeof this.clone&&(t.display="inline-block"),Object(a.setStyle)(this.dragEl,t)}},revertDragEl:function(){this.dragEl&&this.clone&&(this.revert?(Object(a.addClass)(this.dragEl,"is-revert"),Object(a.setStyle)(this.dragEl,{left:"".concat(this.startX,"px"),top:"".concat(this.startY,"px")}),Object(a.once)(this.dragEl,"webkitTransitionEnd",this.clearDragEl),Object(a.once)(this.dragEl,"transitionend",this.clearDragEl),setTimeout(this.clearDragEl.bind(this),300)):this.clearDragEl())},clearDragEl:function(){this.dragEl&&this.clone&&(Object(a.removeClass)(this.dragEl,"is-revert"),this.dragEl.parentNode.removeChild(this.dragEl)),this.dragEl=null},updateOffset:function(t){var e=t.clientX,i=t.clientY;if(this.clone&&"function"==typeof this.clone){var n=function(t){var e=t.cloneNode(!0);Object(a.setStyle)(e,{visibility:"hidden",display:"inline-block"}),document.body.appendChild(e);var i=e.getBoundingClientRect();return e.parentNode.removeChild(e),{width:i.width,height:i.height}}(this.dragEl);this.offsetX=n.width/2,this.offsetY=n.height/2}else{var s=this.$el.getBoundingClientRect();this.offsetX=e-s.left,this.offsetY=i-s.top}},fixPosition:function(t){var e=this.getOrigin();return this.appendBody?{x:t.pageX-this.offsetX,y:t.pageY-this.offsetY}:{x:t.clientX-this.offsetX-e.left,y:t.clientY-this.offsetY-e.top}},isResizing:function(){return!!this.$children.find((function(t){return!(!t.$options||"MyResize"!==t.$options.name)&&t.resizing}))},userSelect:function(t){t?Object(a.addClass)(this.document.body,"user-select-none"):Object(a.removeClass)(this.document.body,"user-select-none")},start:function(t){this.cacheRange=null,this.dragging=!0,this.dropped=!1,this.createDragEl(t),this.updateOffset(t);var e=this.fixPosition(t);this.startX=e.x,this.startY=e.y,this.setDragElStyle(),this.userSelect(!0),this.$emit("start",this),r.a.$emit("my-drag:start",this)},lockAxis:function(t,e){switch(this.axis){case"h":this.x=t;break;case"v":this.y=e;break;default:this.x=t,this.y=e}},lockRange:function(t,e){var i=this.getRange();this.x=t,this.y=e,t<i.left&&(this.x=i.left),e<i.top&&(this.y=i.top),t>i.left+i.width&&(this.x=i.left+i.width),e>i.top+i.height&&(this.y=i.top+i.height)},move:function(t){var e=t.x,i=t.y;this.lockAxis(e,i),this.lockRange(this.x,this.y),Object(a.setStyle)(this.dragEl,{left:"".concat(this.x,"px"),top:"".concat(this.y,"px")}),this.dragged=!0,this.$emit("drag",this),r.a.$emit("my-drag:dragging",this)},stop:function(){this.$emit("stop",this),r.a.$emit("my-drag:stop",this),this.dropped?this.clearDragEl():this.revertDragEl(),this.cacheRange=null,this.cacheOrigin=null,this.dragging=!1,this.userSelect(!1)},handleMouseDown:function(t){var e=this;this.disabled||(this.timer=setTimeout((function(){e.isResizing()||(e.start(t),Object(a.on)(e.document,"mousemove",e.proxyMove))}),this.delay),Object(a.once)(this.document,"mouseup",this.handleMouseUp))},handleMouseMove:function(t){this.clientX=t.clientX,this.clientY=t.clientY;var e=this.fixPosition(t);this.move(e)},handleMouseUp:function(){clearTimeout(this.timer),Object(a.off)(this.document,"mousemove",this.proxyMove),this.dragging&&this.stop()},bindHandle:function(){var t=this.getHandle();Object(a.addClass)(t,"my-drag__handle"),Object(a.on)(t,"mousedown",this.handleMouseDown),this.handleEl=t},unbindHandle:function(){this.handleEl&&(Object(a.removeClass)(this.handleEl,"my-drag__handle"),Object(a.off)(this.handleEl,"mousedown",this.handleMouseDown),this.handleEl=null)}},created:function(){this.proxyMove=Object(l.g)(this.handleMouseMove,this)},mounted:function(){this.document=window.document,this.bindHandle()},beforeDestroy:function(){clearTimeout(this.timer),this.unbindHandle(),this.clearDragEl(),this.document=null}},u=i(21),d=Object(u.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-drag",class:this.classes},[this._t("default")],2)}),[],!1,null,null,null).exports;e.a=Object(n.a)(d)},574:function(t,e,i){"use strict";var n=i(0);e.a=new n.default({})},701:function(t,e,i){},702:function(t,e,i){"use strict";var n=i(57),s=i(40),a=(i(548),i(126),i(549)),l=(i(125),i(127),i(0)),r=i(370),o={name:"MyResize",components:{MyDrag:a.a},props:{axis:{type:String,default:"",validator:function(t){return["","v","h"].includes(t)}},disabled:Boolean,animate:Boolean,helper:Boolean,minWidth:{type:Number,default:0},minHeight:{type:Number,default:0},maxWidth:{type:Number,default:1/0},maxHeight:{type:Number,default:1/0}},data:function(){return{width:null,height:null,helperWidth:null,helperHeight:null,resizing:!1}},computed:{classes:function(){return Object(s.a)(Object(s.a)({"is-disabled":this.disabled,"is-resizing":this.resizing,"is-animate":this.animate},"is-axis-".concat(this.axis),!!this.axis),"is-axis-both",!this.axis)},helperStyle:function(){return{width:"".concat(this.helperWidth,"px"),height:"".concat(this.helperHeight,"px")}},styles:function(){return{width:this.width?"".concat(this.width,"px"):null,height:this.height?"".concat(this.height,"px"):null}}},methods:{getOrigin:function(){return this.$el},lockSize:function(t,e){null!==t&&(t<this.minWidth&&(this.helperWidth=this.minWidth),t>this.maxWidth&&(this.helperWidth=this.maxWidth)),null!==e&&(e<this.minHeight&&(this.helperHeight=this.minHeight),e>this.maxHeight&&(this.helperHeight=this.maxHeight)),this.helper||this.applySize()},applySize:function(){this.width=this.helperWidth,this.height=this.helperHeight},clearCtrlStyle:function(){this.$refs.ctrlH&&Object(r.setStyle)(this.$refs.ctrlH.$el,"left",""),this.$refs.ctrlV&&Object(r.setStyle)(this.$refs.ctrlV.$el,"top",""),this.$refs.ctrl&&Object(r.setStyle)(this.$refs.ctrl.$el,{left:"",top:""})},handleStart:function(t){this.resizing=!0,this.$emit("start",this)},handleDrag:function(t){this.helperWidth=t.x+20,this.helperHeight=t.y+20,this.lockSize(this.helperWidth,this.helperHeight),this.$emit("resize",this,t)},handleDragH:function(t){this.helperWidth=t.x+10,this.lockSize(this.helperWidth,this.helperHeight),this.$emit("resize",this,t)},handleDragV:function(t){this.helperHeight=t.y+10,this.lockSize(this.helperWidth,this.helperHeight),this.$emit("resize",this,t)},handleStop:function(t){this.resizing=!1,this.applySize(),this.clearCtrlStyle(),this.$emit("stop",this)}}};l.default.use(a.a);var h=o,c=i(21),u=Object(c.a)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-resize",class:t.classes,style:t.styles},[t._t("default"),t._v(" "),t.helper&&t.resizing?i("div",{staticClass:"my-resize__helper",style:t.helperStyle}):t._e(),t._v(" "),t.disabled||t.axis&&"h"!==t.axis?t._e():i("my-drag",{ref:"ctrlH",staticClass:"my-resize__ctrl-h",attrs:{axis:"h",origin:t.getOrigin},on:{start:t.handleStart,drag:t.handleDragH,stop:t.handleStop}}),t._v(" "),t.disabled||t.axis&&"v"!==t.axis?t._e():i("my-drag",{ref:"ctrlV",staticClass:"my-resize__ctrl-v",attrs:{axis:"v",origin:t.getOrigin},on:{start:t.handleStart,drag:t.handleDragV,stop:t.handleStop}}),t._v(" "),t.disabled||t.axis?t._e():i("my-drag",{ref:"ctrl",staticClass:"my-resize__ctrl",attrs:{origin:t.getOrigin},on:{start:t.handleStart,drag:t.handleDrag,stop:t.handleStop}},[t._t("icon")],2)],2)}),[],!1,null,null,null).exports;e.a=Object(n.a)(u)},783:function(t,e,i){"use strict";var n=i(57),s=(i(199),i(125),i(88),i(86),i(127),{name:"MyMapPlacement",props:{placement:{type:String,default:"left-bottom",validator:function(t){return["left-top","center-top","right-top","left-center","center-center","right-center","left-bottom","center-bottom","right-bottom"].includes(t)}},zIndex:{type:Number,default:1},margin:{type:[Array,Number],default:10},theme:{type:String,default:"light",validator:function(){return["light","dark"]}}},computed:{styles:function(){return{zIndex:this.zIndex,margin:[].concat(this.margin).map((function(t){return"".concat(t,"px")})).join(" ")}},classes:function(){return["is-".concat(this.theme),this.placement]}}}),a=i(21),l=Object(a.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-map-placement",class:this.classes,style:this.styles},[this._t("default")],2)}),[],!1,null,null,null).exports;i(786),e.a=Object(n.a)(l)},786:function(t,e,i){}}]);