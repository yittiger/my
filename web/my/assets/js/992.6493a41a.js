(window.webpackJsonp=window.webpackJsonp||[]).push([[992,991,993,994],{1079:function(t,e,o){"use strict";var n,i=o(412),r=o(455),s=o(402),a=o(477),c=o(507),u=o(577),h=o(460),l=o(363),f=o(435),p=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),g=function(t){function e(e){var o=t.call(this,{attributions:e.attributions,wrapX:e.wrapX})||this;return o.resolution=void 0,o.distance=void 0!==e.distance?e.distance:20,o.features=[],o.geometryFunction=e.geometryFunction||function(t){var e=t.getGeometry();return Object(h.a)(e.getType()==s.a.POINT,10),e},o.boundRefresh_=o.refresh.bind(o),o.setSource(e.source||null),o}return p(e,t),e.prototype.clear=function(e){this.features.length=0,t.prototype.clear.call(this,e)},e.prototype.getDistance=function(){return this.distance},e.prototype.getSource=function(){return this.source},e.prototype.loadFeatures=function(t,e,o){this.source.loadFeatures(t,e,o),e!==this.resolution&&(this.clear(),this.resolution=e,this.cluster(),this.addFeatures(this.features))},e.prototype.setDistance=function(t){this.distance=t,this.refresh()},e.prototype.setSource=function(t){this.source&&this.source.removeEventListener(i.a.CHANGE,this.boundRefresh_),this.source=t,t&&t.addEventListener(i.a.CHANGE,this.boundRefresh_),this.refresh()},e.prototype.refresh=function(){this.clear(),this.cluster(),this.addFeatures(this.features)},e.prototype.cluster=function(){if(void 0!==this.resolution&&this.source)for(var t=Object(l.j)(),e=this.distance*this.resolution,o=this.source.getFeatures(),n={},i=0,r=o.length;i<r;i++){var s=o[i];if(!(Object(f.c)(s)in n)){var a=this.geometryFunction(s);if(a){var c=a.getCoordinates();Object(l.m)(c,t),Object(l.c)(t,e,t);var u=this.source.getFeaturesInExtent(t);u=u.filter((function(t){var e=Object(f.c)(t);return!(e in n)&&(n[e]=!0,!0)})),this.features.push(this.createCluster(u))}}}},e.prototype.createCluster=function(t){for(var e=[0,0],o=t.length-1;o>=0;--o){var n=this.geometryFunction(t[o]);n?Object(u.a)(e,n.getCoordinates()):t.splice(o,1)}Object(u.h)(e,1/t.length);var i=new r.a(new a.a(e));return i.set("features",t),i},e}(c.a);e.a=g},409:function(t,e,o){var n=o(1),i=o(549),r=o(126);n({target:"Array",proto:!0},{fill:i}),r("fill")},455:function(t,e,o){"use strict";var n,i=o(488),r=o(412),s=o(460),a=o(476),c=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),u=function(t){function e(e){var o=t.call(this)||this;if(o.id_=void 0,o.geometryName_="geometry",o.style_=null,o.styleFunction_=void 0,o.geometryChangeKey_=null,o.addEventListener(Object(i.b)(o.geometryName_),o.handleGeometryChanged_),e)if("function"==typeof e.getSimplifiedGeometry){var n=e;o.setGeometry(n)}else{var r=e;o.setProperties(r)}return o}return c(e,t),e.prototype.clone=function(){var t=new e(this.hasProperties()?this.getProperties():null);t.setGeometryName(this.getGeometryName());var o=this.getGeometry();o&&t.setGeometry(o.clone());var n=this.getStyle();return n&&t.setStyle(n),t},e.prototype.getGeometry=function(){return this.get(this.geometryName_)},e.prototype.getId=function(){return this.id_},e.prototype.getGeometryName=function(){return this.geometryName_},e.prototype.getStyle=function(){return this.style_},e.prototype.getStyleFunction=function(){return this.styleFunction_},e.prototype.handleGeometryChange_=function(){this.changed()},e.prototype.handleGeometryChanged_=function(){this.geometryChangeKey_&&(Object(a.c)(this.geometryChangeKey_),this.geometryChangeKey_=null);var t=this.getGeometry();t&&(this.geometryChangeKey_=Object(a.a)(t,r.a.CHANGE,this.handleGeometryChange_,this)),this.changed()},e.prototype.setGeometry=function(t){this.set(this.geometryName_,t)},e.prototype.setStyle=function(t){this.style_=t,this.styleFunction_=t?function(t){if("function"==typeof t)return t;var e;Array.isArray(t)?e=t:(Object(s.a)("function"==typeof t.getZIndex,41),e=[t]);return function(){return e}}(t):void 0,this.changed()},e.prototype.setId=function(t){this.id_=t,this.changed()},e.prototype.setGeometryName=function(t){this.removeEventListener(Object(i.b)(this.geometryName_),this.handleGeometryChanged_),this.geometryName_=t,this.addEventListener(Object(i.b)(this.geometryName_),this.handleGeometryChanged_),this.handleGeometryChanged_()},e}(i.a);e.a=u},549:function(t,e,o){"use strict";var n=o(16),i=o(128),r=o(19);t.exports=function(t){for(var e=n(this),o=r(e.length),s=arguments.length,a=i(s>1?arguments[1]:void 0,o),c=s>2?arguments[2]:void 0,u=void 0===c?o:i(c,o);u>a;)e[a++]=t;return e}},826:function(t,e,o){"use strict";var n=o(755),i=o(754),r=o(484),s=function(){function t(t){var e=t||{};this.font_=e.font,this.rotation_=e.rotation,this.rotateWithView_=e.rotateWithView,this.scale_=e.scale,this.scaleArray_=Object(r.c)(void 0!==e.scale?e.scale:1),this.text_=e.text,this.textAlign_=e.textAlign,this.textBaseline_=e.textBaseline,this.fill_=void 0!==e.fill?e.fill:new n.a({color:"#333"}),this.maxAngle_=void 0!==e.maxAngle?e.maxAngle:Math.PI/4,this.placement_=void 0!==e.placement?e.placement:i.a.POINT,this.overflow_=!!e.overflow,this.stroke_=void 0!==e.stroke?e.stroke:null,this.offsetX_=void 0!==e.offsetX?e.offsetX:0,this.offsetY_=void 0!==e.offsetY?e.offsetY:0,this.backgroundFill_=e.backgroundFill?e.backgroundFill:null,this.backgroundStroke_=e.backgroundStroke?e.backgroundStroke:null,this.padding_=void 0===e.padding?null:e.padding}return t.prototype.clone=function(){var e=this.getScale();return new t({font:this.getFont(),placement:this.getPlacement(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(e)?e.slice():e,text:this.getText(),textAlign:this.getTextAlign(),textBaseline:this.getTextBaseline(),fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()})},t.prototype.getOverflow=function(){return this.overflow_},t.prototype.getFont=function(){return this.font_},t.prototype.getMaxAngle=function(){return this.maxAngle_},t.prototype.getPlacement=function(){return this.placement_},t.prototype.getOffsetX=function(){return this.offsetX_},t.prototype.getOffsetY=function(){return this.offsetY_},t.prototype.getFill=function(){return this.fill_},t.prototype.getRotateWithView=function(){return this.rotateWithView_},t.prototype.getRotation=function(){return this.rotation_},t.prototype.getScale=function(){return this.scale_},t.prototype.getScaleArray=function(){return this.scaleArray_},t.prototype.getStroke=function(){return this.stroke_},t.prototype.getText=function(){return this.text_},t.prototype.getTextAlign=function(){return this.textAlign_},t.prototype.getTextBaseline=function(){return this.textBaseline_},t.prototype.getBackgroundFill=function(){return this.backgroundFill_},t.prototype.getBackgroundStroke=function(){return this.backgroundStroke_},t.prototype.getPadding=function(){return this.padding_},t.prototype.setOverflow=function(t){this.overflow_=t},t.prototype.setFont=function(t){this.font_=t},t.prototype.setMaxAngle=function(t){this.maxAngle_=t},t.prototype.setOffsetX=function(t){this.offsetX_=t},t.prototype.setOffsetY=function(t){this.offsetY_=t},t.prototype.setPlacement=function(t){this.placement_=t},t.prototype.setRotateWithView=function(t){this.rotateWithView_=t},t.prototype.setFill=function(t){this.fill_=t},t.prototype.setRotation=function(t){this.rotation_=t},t.prototype.setScale=function(t){this.scale_=t,this.scaleArray_=Object(r.c)(void 0!==t?t:1)},t.prototype.setStroke=function(t){this.stroke_=t},t.prototype.setText=function(t){this.text_=t},t.prototype.setTextAlign=function(t){this.textAlign_=t},t.prototype.setTextBaseline=function(t){this.textBaseline_=t},t.prototype.setBackgroundFill=function(t){this.backgroundFill_=t},t.prototype.setBackgroundStroke=function(t){this.backgroundStroke_=t},t.prototype.setPadding=function(t){this.padding_=t},t}();e.a=s}}]);