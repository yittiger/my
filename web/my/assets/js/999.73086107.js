(window.webpackJsonp=window.webpackJsonp||[]).push([[999],{1030:function(t,e,o){"use strict";var n=o(823),i=o(822),r=o(482),s=function(){function t(t){var e=t||{};this.font_=e.font,this.rotation_=e.rotation,this.rotateWithView_=e.rotateWithView,this.scale_=e.scale,this.scaleArray_=Object(r.c)(void 0!==e.scale?e.scale:1),this.text_=e.text,this.textAlign_=e.textAlign,this.textBaseline_=e.textBaseline,this.fill_=void 0!==e.fill?e.fill:new n.a({color:"#333"}),this.maxAngle_=void 0!==e.maxAngle?e.maxAngle:Math.PI/4,this.placement_=void 0!==e.placement?e.placement:i.a.POINT,this.overflow_=!!e.overflow,this.stroke_=void 0!==e.stroke?e.stroke:null,this.offsetX_=void 0!==e.offsetX?e.offsetX:0,this.offsetY_=void 0!==e.offsetY?e.offsetY:0,this.backgroundFill_=e.backgroundFill?e.backgroundFill:null,this.backgroundStroke_=e.backgroundStroke?e.backgroundStroke:null,this.padding_=void 0===e.padding?null:e.padding}return t.prototype.clone=function(){var e=this.getScale();return new t({font:this.getFont(),placement:this.getPlacement(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(e)?e.slice():e,text:this.getText(),textAlign:this.getTextAlign(),textBaseline:this.getTextBaseline(),fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()})},t.prototype.getOverflow=function(){return this.overflow_},t.prototype.getFont=function(){return this.font_},t.prototype.getMaxAngle=function(){return this.maxAngle_},t.prototype.getPlacement=function(){return this.placement_},t.prototype.getOffsetX=function(){return this.offsetX_},t.prototype.getOffsetY=function(){return this.offsetY_},t.prototype.getFill=function(){return this.fill_},t.prototype.getRotateWithView=function(){return this.rotateWithView_},t.prototype.getRotation=function(){return this.rotation_},t.prototype.getScale=function(){return this.scale_},t.prototype.getScaleArray=function(){return this.scaleArray_},t.prototype.getStroke=function(){return this.stroke_},t.prototype.getText=function(){return this.text_},t.prototype.getTextAlign=function(){return this.textAlign_},t.prototype.getTextBaseline=function(){return this.textBaseline_},t.prototype.getBackgroundFill=function(){return this.backgroundFill_},t.prototype.getBackgroundStroke=function(){return this.backgroundStroke_},t.prototype.getPadding=function(){return this.padding_},t.prototype.setOverflow=function(t){this.overflow_=t},t.prototype.setFont=function(t){this.font_=t},t.prototype.setMaxAngle=function(t){this.maxAngle_=t},t.prototype.setOffsetX=function(t){this.offsetX_=t},t.prototype.setOffsetY=function(t){this.offsetY_=t},t.prototype.setPlacement=function(t){this.placement_=t},t.prototype.setRotateWithView=function(t){this.rotateWithView_=t},t.prototype.setFill=function(t){this.fill_=t},t.prototype.setRotation=function(t){this.rotation_=t},t.prototype.setScale=function(t){this.scale_=t,this.scaleArray_=Object(r.c)(void 0!==t?t:1)},t.prototype.setStroke=function(t){this.stroke_=t},t.prototype.setText=function(t){this.text_=t},t.prototype.setTextAlign=function(t){this.textAlign_=t},t.prototype.setTextBaseline=function(t){this.textBaseline_=t},t.prototype.setBackgroundFill=function(t){this.backgroundFill_=t},t.prototype.setBackgroundStroke=function(t){this.backgroundStroke_=t},t.prototype.setPadding=function(t){this.padding_=t},t}();e.a=s},2245:function(t,e,o){"use strict";var n=o(53),i=(o(124),o(200),o(52)),r=o(531),s=o(432),a={name:"MyMapText",mixins:[o(591).a],props:{font:{type:String,default:"12px"},maxAngle:Number,offsetX:Number,offsetY:Number,overflow:Boolean,placement:{type:String,default:"point",validator:function(t){return["point","line"].includes(t)}},scale:Number,rotateWithView:Boolean,rotation:Number,text:String,textAlign:String,textBaseline:String,backgroundFill:String,backgroundStroke:Object,padding:Array,coordinate:{type:Array,required:!0},stroke:Object,fill:String},methods:{drawHandler:function(){return new r.a(this.coordinate)},setStyle:function(){if(this.feature){var t=Object(s.a)({text:Object(i.a)({},this.$props)});this.feature.setStyle(t)}},modifyHandler:function(t){t.setCoordinates(this.coordinate)}}};e.a=Object(n.a)(a)},3256:function(t,e,o){"use strict";o.r(e);var n=o(2245),i=o(454),r=o(0);r.default.use(i.a),r.default.use(n.a);var s={data:function(){return{text:{text:"文本样例",font:"30px",fill:"#fff",stroke:{width:3,color:"#409eff"},rotation:-.5,backgroundFill:"rgba(0,0,0,0.3)",padding:[10,10,5,10],backgroundStroke:{width:5,color:"#409eff"}}}}},a=o(18),u=Object(a.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("my-map",[e("my-map-text",this._b({attrs:{coordinate:[113.261999,23.130592]}},"my-map-text",this.text,!1))],1)}),[],!1,null,null,null);e.default=u.exports},378:function(t,e,o){var n=o(1),i=o(414),r=o(127);n({target:"Array",proto:!0},{fill:i}),r("fill")},414:function(t,e,o){"use strict";var n=o(16),i=o(129),r=o(19);t.exports=function(t){for(var e=n(this),o=r(e.length),s=arguments.length,a=i(s>1?arguments[1]:void 0,o),u=s>2?arguments[2]:void 0,c=void 0===u?o:i(u,o);c>a;)e[a++]=t;return e}},432:function(t,e,o){"use strict";o(55),o(124),o(371),o(202),o(56);var n=o(85),i=o(57),r=o(823),s=o(1030),a=o(1175),u=o(1176),c=o(1549),l=o(1177),f=o(967),h={fill:r.a,text:s.a,stroke:a.a,circle:u.a,icon:c.a,regularShape:l.a,backgroundFill:r.a,backgroundStroke:a.a},p=[u.a,c.a,l.a];function g(t){return"object"===Object(i.a)(t)}function d(t,e,o){var n,i;if(null!=o)return t?["fill","backgroundFill"].includes(e)?(i=g(n=o)?n:{color:n},new r.a(i)):"text"===e?g(o)?y(o,t):o:y(o,t):o}function y(t,e){var o={};return Object.entries(t).forEach((function(t){var e=Object(n.a)(t,2),i=e[0],r=e[1],s=h[i];"font"===i&&(r="".concat(r," sans-serif")),o[p.includes(s)?"image":i]=d(s,i,r)})),new(e||f.c)(o)}e.a=y},527:function(t,e,o){"use strict";var n,i=o(444),r=o(393),s=o(418),a=o(441),u=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=function(t){function e(e){var o=t.call(this)||this;if(o.id_=void 0,o.geometryName_="geometry",o.style_=null,o.styleFunction_=void 0,o.geometryChangeKey_=null,o.addEventListener(Object(i.b)(o.geometryName_),o.handleGeometryChanged_),e)if("function"==typeof e.getSimplifiedGeometry){var n=e;o.setGeometry(n)}else{var r=e;o.setProperties(r)}return o}return u(e,t),e.prototype.clone=function(){var t=new e(this.hasProperties()?this.getProperties():null);t.setGeometryName(this.getGeometryName());var o=this.getGeometry();o&&t.setGeometry(o.clone());var n=this.getStyle();return n&&t.setStyle(n),t},e.prototype.getGeometry=function(){return this.get(this.geometryName_)},e.prototype.getId=function(){return this.id_},e.prototype.getGeometryName=function(){return this.geometryName_},e.prototype.getStyle=function(){return this.style_},e.prototype.getStyleFunction=function(){return this.styleFunction_},e.prototype.handleGeometryChange_=function(){this.changed()},e.prototype.handleGeometryChanged_=function(){this.geometryChangeKey_&&(Object(a.c)(this.geometryChangeKey_),this.geometryChangeKey_=null);var t=this.getGeometry();t&&(this.geometryChangeKey_=Object(a.a)(t,r.a.CHANGE,this.handleGeometryChange_,this)),this.changed()},e.prototype.setGeometry=function(t){this.set(this.geometryName_,t)},e.prototype.setStyle=function(t){this.style_=t,this.styleFunction_=t?function(t){if("function"==typeof t)return t;var e;Array.isArray(t)?e=t:(Object(s.a)("function"==typeof t.getZIndex,41),e=[t]);return function(){return e}}(t):void 0,this.changed()},e.prototype.setId=function(t){this.id_=t,this.changed()},e.prototype.setGeometryName=function(t){this.removeEventListener(Object(i.b)(this.geometryName_),this.handleGeometryChanged_),this.geometryName_=t,this.addEventListener(Object(i.b)(this.geometryName_),this.handleGeometryChanged_),this.handleGeometryChanged_()},e}(i.a);e.a=c},558:function(t,e,o){"use strict";o(200);e.a={props:{zIndex:Number,fill:{type:String,default:"rgba(255, 255,255, 0.5)"},stroke:{type:Object,default:function(){return{width:3,color:"#409eff"}}},text:[Object,String],styleFunction:Function},computed:{styleText:function(){return"string"==typeof this.text?{text:this.text,font:"12px"}:this.text||{}}}}},591:function(t,e,o){"use strict";o(378);var n=o(52),i=o(527),r=o(558),s=o(432);e.a={mixins:[r.a],inject:["myMap"],props:{props:{type:Object,default:function(){return{}}}},render:function(){return null},watch:{$props:{deep:!0,handler:function(){this.modify()}}},methods:{drawHandler:function(){},modifyHandler:function(t){},draw:function(){var t=this.drawHandler();t&&(this.feature=new i.a({geometry:t}),this.feature.__vm__=this,this.props&&this.feature.setProperties(Object(n.a)({},this.props)),this.myMap.addFeature(this.feature),this.setStyle(),this.$emit("feature-draw"))},setStyle:function(){if(this.feature){var t=this.styleFunction?this.styleFunction(this):Object(s.a)({fill:this.fill,stroke:this.stroke,zIndex:this.zIndex,text:this.styleText});this.feature.setStyle(t)}},modify:function(){if(this.feature){var t=this.feature.getGeometry();this.modifyHandler(t),this.setStyle(),this.props&&this.feature.setProperties(Object(n.a)({},this.props))}else this.draw()}},created:function(){this.myMap.mapReady(this.draw)},beforeDestroy:function(){this.feature&&(this.feature.__vm__=null,this.feature.disposeInternal(),this.myMap.removeFeature(this.feature))}}}}]);