(window.webpackJsonp=window.webpackJsonp||[]).push([[773],{1593:function(t,e,o){"use strict";var i=o(53),n=(o(198),o(85)),r=o(513),s=o(552),a={name:"MyMapRectangle",mixins:[r.a],props:{coordinate:{type:Array,required:!0},width:{type:Number,default:0,required:!0},height:{type:Number,default:0,required:!0}},methods:{getCoordinates:function(){var t=this.myMap.getMetersPerUnit(),e=t?this.width/t:0,o=t?this.height/t:0,i=Object(n.a)(this.coordinate,2),r=i[0],s=i[1];return[this.coordinate,[r+e,s],[r+e,s-o],[r,s-o],this.coordinate]},drawHandler:function(){return new s.a([this.getCoordinates()])},modifyHandler:function(t){t.setCoordinates([this.getCoordinates()])}}};e.a=Object(i.a)(a)},2681:function(t,e,o){"use strict";o.r(e);var i=o(1593),n=o(414),r=o(0);r.default.use(n.a),r.default.use(i.a);var s={data:function(){return{center:[120,30],fill:"transparent",stroke:{width:3,color:"red"}}}},a=o(18),c=Object(a.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("my-map",{attrs:{center:this.center,zoom:7}},[e("my-map-rectangle",{attrs:{coordinate:this.center,width:1e5,height:5e4,fill:this.fill,stroke:this.stroke}})],1)}),[],!1,null,null,null);e.default=c.exports},400:function(t,e,o){"use strict";o(54),o(125),o(368),o(200),o(55);var i=o(85),n=o(57),r=o(680),s=o(822),a=o(907),c=o(908),u=o(1066),h=o(909),l=o(760),f={fill:r.a,text:s.a,stroke:a.a,circle:c.a,icon:u.a,regularShape:h.a,backgroundFill:r.a,backgroundStroke:a.a},p=[c.a,u.a,h.a];function g(t){return"object"===Object(n.a)(t)}function d(t,e,o){var i,n;if(null!=o)return t?["fill","backgroundFill"].includes(e)?(n=g(i=o)?i:{color:i},new r.a(n)):"text"===e?g(o)?y(o,t):o:y(o,t):o}function y(t,e){var o={};return Object.entries(t).forEach((function(t){var e=Object(i.a)(t,2),n=e[0],r=e[1],s=f[n];"font"===n&&(r="".concat(r," sans-serif")),o[p.includes(s)?"image":n]=d(s,n,r)})),new(e||l.c)(o)}e.a=y},416:function(t,e,o){var i=o(1),n=o(554),r=o(127);i({target:"Array",proto:!0},{fill:n}),r("fill")},458:function(t,e,o){"use strict";var i,n=o(408),r=o(374),s=o(396),a=o(407),c=(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),u=function(t){function e(e){var o=t.call(this)||this;if(o.id_=void 0,o.geometryName_="geometry",o.style_=null,o.styleFunction_=void 0,o.geometryChangeKey_=null,o.addEventListener(Object(n.b)(o.geometryName_),o.handleGeometryChanged_),e)if("function"==typeof e.getSimplifiedGeometry){var i=e;o.setGeometry(i)}else{var r=e;o.setProperties(r)}return o}return c(e,t),e.prototype.clone=function(){var t=new e(this.hasProperties()?this.getProperties():null);t.setGeometryName(this.getGeometryName());var o=this.getGeometry();o&&t.setGeometry(o.clone());var i=this.getStyle();return i&&t.setStyle(i),t},e.prototype.getGeometry=function(){return this.get(this.geometryName_)},e.prototype.getId=function(){return this.id_},e.prototype.getGeometryName=function(){return this.geometryName_},e.prototype.getStyle=function(){return this.style_},e.prototype.getStyleFunction=function(){return this.styleFunction_},e.prototype.handleGeometryChange_=function(){this.changed()},e.prototype.handleGeometryChanged_=function(){this.geometryChangeKey_&&(Object(a.c)(this.geometryChangeKey_),this.geometryChangeKey_=null);var t=this.getGeometry();t&&(this.geometryChangeKey_=Object(a.a)(t,r.a.CHANGE,this.handleGeometryChange_,this)),this.changed()},e.prototype.setGeometry=function(t){this.set(this.geometryName_,t)},e.prototype.setStyle=function(t){this.style_=t,this.styleFunction_=t?function(t){if("function"==typeof t)return t;var e;Array.isArray(t)?e=t:(Object(s.a)("function"==typeof t.getZIndex,41),e=[t]);return function(){return e}}(t):void 0,this.changed()},e.prototype.setId=function(t){this.id_=t,this.changed()},e.prototype.setGeometryName=function(t){this.removeEventListener(Object(n.b)(this.geometryName_),this.handleGeometryChanged_),this.geometryName_=t,this.addEventListener(Object(n.b)(this.geometryName_),this.handleGeometryChanged_),this.handleGeometryChanged_()},e}(n.a);e.a=u},493:function(t,e,o){"use strict";o(198);e.a={props:{zIndex:Number,fill:{type:String,default:"rgba(255, 255,255, 0.5)"},stroke:{type:Object,default:function(){return{width:3,color:"#409eff"}}},text:[Object,String],styleFunction:Function},computed:{styleText:function(){return"string"==typeof this.text?{text:this.text,font:"12px"}:this.text||{}}}}},513:function(t,e,o){"use strict";o(416);var i=o(52),n=o(458),r=o(493),s=o(400);e.a={mixins:[r.a],inject:["myMap"],props:{props:{type:Object,default:function(){return{}}}},render:function(){return null},watch:{$props:{deep:!0,handler:function(){this.modify()}}},methods:{drawHandler:function(){},modifyHandler:function(t){},draw:function(){var t=this.drawHandler();t&&(this.feature=new n.a({geometry:t}),this.feature.__vm__=this,this.props&&this.feature.setProperties(Object(i.a)({},this.props)),this.myMap.addFeature(this.feature),this.setStyle(),this.$emit("featureDraw"))},setStyle:function(){if(this.feature){var t=this.styleFunction?this.styleFunction(this):Object(s.a)({fill:this.fill,stroke:this.stroke,zIndex:this.zIndex,text:this.styleText});this.feature.setStyle(t)}},modify:function(){if(this.feature){var t=this.feature.getGeometry();this.modifyHandler(t),this.setStyle(),this.props&&this.feature.setProperties(Object(i.a)({},this.props))}else this.draw()}},created:function(){this.myMap.mapReady(this.draw)},beforeDestroy:function(){this.feature&&(this.feature.__vm__=null,this.feature.disposeInternal(),this.myMap.removeFeature(this.feature))}}},554:function(t,e,o){"use strict";var i=o(16),n=o(128),r=o(19);t.exports=function(t){for(var e=i(this),o=r(e.length),s=arguments.length,a=n(s>1?arguments[1]:void 0,o),c=s>2?arguments[2]:void 0,u=void 0===c?o:n(c,o);u>a;)e[a++]=t;return e}},822:function(t,e,o){"use strict";var i=o(680),n=o(679),r=o(430),s=function(){function t(t){var e=t||{};this.font_=e.font,this.rotation_=e.rotation,this.rotateWithView_=e.rotateWithView,this.scale_=e.scale,this.scaleArray_=Object(r.c)(void 0!==e.scale?e.scale:1),this.text_=e.text,this.textAlign_=e.textAlign,this.textBaseline_=e.textBaseline,this.fill_=void 0!==e.fill?e.fill:new i.a({color:"#333"}),this.maxAngle_=void 0!==e.maxAngle?e.maxAngle:Math.PI/4,this.placement_=void 0!==e.placement?e.placement:n.a.POINT,this.overflow_=!!e.overflow,this.stroke_=void 0!==e.stroke?e.stroke:null,this.offsetX_=void 0!==e.offsetX?e.offsetX:0,this.offsetY_=void 0!==e.offsetY?e.offsetY:0,this.backgroundFill_=e.backgroundFill?e.backgroundFill:null,this.backgroundStroke_=e.backgroundStroke?e.backgroundStroke:null,this.padding_=void 0===e.padding?null:e.padding}return t.prototype.clone=function(){var e=this.getScale();return new t({font:this.getFont(),placement:this.getPlacement(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(e)?e.slice():e,text:this.getText(),textAlign:this.getTextAlign(),textBaseline:this.getTextBaseline(),fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()})},t.prototype.getOverflow=function(){return this.overflow_},t.prototype.getFont=function(){return this.font_},t.prototype.getMaxAngle=function(){return this.maxAngle_},t.prototype.getPlacement=function(){return this.placement_},t.prototype.getOffsetX=function(){return this.offsetX_},t.prototype.getOffsetY=function(){return this.offsetY_},t.prototype.getFill=function(){return this.fill_},t.prototype.getRotateWithView=function(){return this.rotateWithView_},t.prototype.getRotation=function(){return this.rotation_},t.prototype.getScale=function(){return this.scale_},t.prototype.getScaleArray=function(){return this.scaleArray_},t.prototype.getStroke=function(){return this.stroke_},t.prototype.getText=function(){return this.text_},t.prototype.getTextAlign=function(){return this.textAlign_},t.prototype.getTextBaseline=function(){return this.textBaseline_},t.prototype.getBackgroundFill=function(){return this.backgroundFill_},t.prototype.getBackgroundStroke=function(){return this.backgroundStroke_},t.prototype.getPadding=function(){return this.padding_},t.prototype.setOverflow=function(t){this.overflow_=t},t.prototype.setFont=function(t){this.font_=t},t.prototype.setMaxAngle=function(t){this.maxAngle_=t},t.prototype.setOffsetX=function(t){this.offsetX_=t},t.prototype.setOffsetY=function(t){this.offsetY_=t},t.prototype.setPlacement=function(t){this.placement_=t},t.prototype.setRotateWithView=function(t){this.rotateWithView_=t},t.prototype.setFill=function(t){this.fill_=t},t.prototype.setRotation=function(t){this.rotation_=t},t.prototype.setScale=function(t){this.scale_=t,this.scaleArray_=Object(r.c)(void 0!==t?t:1)},t.prototype.setStroke=function(t){this.stroke_=t},t.prototype.setText=function(t){this.text_=t},t.prototype.setTextAlign=function(t){this.textAlign_=t},t.prototype.setTextBaseline=function(t){this.textBaseline_=t},t.prototype.setBackgroundFill=function(t){this.backgroundFill_=t},t.prototype.setBackgroundStroke=function(t){this.backgroundStroke_=t},t.prototype.setPadding=function(t){this.padding_=t},t}();e.a=s}}]);