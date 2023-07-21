(window.webpackJsonp=window.webpackJsonp||[]).push([[1131],{1115:function(t,e,i){"use strict";var n,o=i(748),r=i(404),a=i(963),s=i(665),l=i(417),h=i(598),c=i(465),u=i(580),d=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),m=0,p=1,g=function(t){function e(e){var i=this,n=e||{};(i=t.call(this,{element:document.createElement("div"),render:n.render})||this).dragListenerKeys_=[],i.currentResolution_=void 0,i.direction_=m,i.dragging_,i.heightLimit_=0,i.widthLimit_=0,i.startX_,i.startY_,i.thumbSize_=null,i.sliderInitialized_=!1,i.duration_=void 0!==n.duration?n.duration:200;var o=void 0!==n.className?n.className:"ol-zoomslider",l=document.createElement("button");l.setAttribute("type","button"),l.className=o+"-thumb "+s.e;var h=i.element;return h.className=o+" "+s.e+" "+s.b,h.appendChild(l),h.addEventListener(a.a.POINTERDOWN,i.handleDraggerStart_.bind(i),!1),h.addEventListener(a.a.POINTERMOVE,i.handleDraggerDrag_.bind(i),!1),h.addEventListener(a.a.POINTERUP,i.handleDraggerEnd_.bind(i),!1),h.addEventListener(r.a.CLICK,i.handleContainerClick_.bind(i),!1),l.addEventListener(r.a.CLICK,u.b,!1),i}return d(e,t),e.prototype.setMap=function(e){t.prototype.setMap.call(this,e),e&&e.render()},e.prototype.initSlider_=function(){var t=this.element,e=t.offsetWidth,i=t.offsetHeight;if(0===e&&0===i)return this.sliderInitialized_=!1;var n=t.firstElementChild,o=getComputedStyle(n),r=n.offsetWidth+parseFloat(o.marginRight)+parseFloat(o.marginLeft),a=n.offsetHeight+parseFloat(o.marginTop)+parseFloat(o.marginBottom);return this.thumbSize_=[r,a],e>i?(this.direction_=p,this.widthLimit_=e-r):(this.direction_=m,this.heightLimit_=i-a),this.sliderInitialized_=!0},e.prototype.handleContainerClick_=function(t){var e=this.getMap().getView(),i=this.getRelativePosition_(t.offsetX-this.thumbSize_[0]/2,t.offsetY-this.thumbSize_[1]/2),n=this.getResolutionForPosition_(i),o=e.getConstrainedZoom(e.getZoomForResolution(n));e.animateInternal({zoom:o,duration:this.duration_,easing:h.b})},e.prototype.handleDraggerStart_=function(t){if(!this.dragging_&&t.target===this.element.firstElementChild){var e=this.element.firstElementChild;if(this.getMap().getView().beginInteraction(),this.startX_=t.clientX-parseFloat(e.style.left),this.startY_=t.clientY-parseFloat(e.style.top),this.dragging_=!0,0===this.dragListenerKeys_.length){var i=this.handleDraggerDrag_,n=this.handleDraggerEnd_,o=this.getMap().getOwnerDocument();this.dragListenerKeys_.push(Object(c.a)(o,a.a.POINTERMOVE,i,this),Object(c.a)(o,a.a.POINTERUP,n,this))}}},e.prototype.handleDraggerDrag_=function(t){if(this.dragging_){var e=t.clientX-this.startX_,i=t.clientY-this.startY_,n=this.getRelativePosition_(e,i);this.currentResolution_=this.getResolutionForPosition_(n),this.getMap().getView().setResolution(this.currentResolution_)}},e.prototype.handleDraggerEnd_=function(t){this.dragging_&&(this.getMap().getView().endInteraction(),this.dragging_=!1,this.startX_=void 0,this.startY_=void 0,this.dragListenerKeys_.forEach(c.c),this.dragListenerKeys_.length=0)},e.prototype.setThumbPosition_=function(t){var e=this.getPositionForResolution_(t),i=this.element.firstElementChild;this.direction_==p?i.style.left=this.widthLimit_*e+"px":i.style.top=this.heightLimit_*e+"px"},e.prototype.getRelativePosition_=function(t,e){var i;return i=this.direction_===p?t/this.widthLimit_:e/this.heightLimit_,Object(l.a)(i,0,1)},e.prototype.getResolutionForPosition_=function(t){return this.getMap().getView().getResolutionForValueFunction()(1-t)},e.prototype.getPositionForResolution_=function(t){var e=this.getMap().getView().getValueForResolutionFunction();return Object(l.a)(1-e(t),0,1)},e.prototype.render=function(t){if(t.frameState&&(this.sliderInitialized_||this.initSlider_())){var e=t.frameState.viewState.resolution;this.currentResolution_=e,this.setThumbPosition_(e)}},e}(o.a);e.a=g},1694:function(t,e,i){},1742:function(t,e,i){"use strict";var n=i(47),o=i(75),r=(i(116),i(79),i(121),i(77),i(911)),a=i(1115),s={name:"MyMapZoom",inject:["myMap"],components:{Placement:i(778).a},render:function(){return null},props:{placement:{type:String,default:"left-top",validator:function(t){return["left-top","right-top","left-bottom","right-bottom"].includes(t)}},slider:Boolean,theme:{type:String,default:"light",validator:function(t){return["light","dark"].includes(t)}}},computed:{classes:function(){var t;return Object.keys((t={"my-map-zoom":!0},Object(o.a)(t,"is-".concat(this.theme),!!this.theme),Object(o.a)(t,"is-".concat(this.placement),!!this.placement),t)).join(" ")}},methods:{init:function(t){this.zoom=new r.a({className:this.classes+" ol-zoom"}),t.addControl(this.zoom),this.slider&&(this.zoomSlider=new a.a({className:this.classes+" ol-zoomslider"}),t.addControl(this.zoomSlider))}},created:function(){this.myMap.mapReady(this.init)},beforeDestroy:function(){var t,e=null===(t=this.myMap)||void 0===t?void 0:t.map;e&&(this.zoom&&e.removeControl(this.zoom),this.zoomSlider&&e.removeControl(this.zoomSlider))}};i(1694),e.a=Object(n.a)(s)},2980:function(t,e,i){"use strict";i.r(e);var n=i(1742),o=i(496),r=i(0);r.default.use(o.a),r.default.use(n.a);var a={},s=i(19),l=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("my-map",{attrs:{height:"600px"}},[e("my-map-zoom",{attrs:{theme:"light",placement:"right-bottom"}}),this._v(" "),e("my-map-zoom",{attrs:{theme:"light",placement:"right-top"}}),this._v(" "),e("my-map-zoom",{attrs:{theme:"light",placement:"left-top"}}),this._v(" "),e("my-map-zoom",{attrs:{theme:"light",placement:"left-bottom"}})],1)}),[],!1,null,null,null);e.default=l.exports},778:function(t,e,i){"use strict";var n=i(47),o=(i(116),i(201),i(79),i(77),i(202),{name:"MyMapPlacement",props:{placement:{type:String,default:"left-bottom",validator:function(t){return["left-top","center-top","right-top","left-center","center-center","right-center","left-bottom","center-bottom","right-bottom"].includes(t)}},zIndex:{type:Number,default:1},margin:{type:[Array,Number],default:10},theme:{type:String,default:"light",validator:function(){return["light","dark"]}}},computed:{styles:function(){return{zIndex:this.zIndex,margin:[].concat(this.margin).map((function(t){return"".concat(t,"px")})).join(" ")}},classes:function(){return["is-".concat(this.theme),this.placement]}}}),r=i(19),a=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-map-placement",class:this.classes,style:this.styles},[this._t("default")],2)}),[],!1,null,null,null).exports;i(781),e.a=Object(n.a)(a)},781:function(t,e,i){}}]);