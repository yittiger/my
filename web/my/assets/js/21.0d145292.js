(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1030:function(t,e,o){"use strict";var n=o(823),i=o(822),r=o(482),s=function(){function t(t){var e=t||{};this.font_=e.font,this.rotation_=e.rotation,this.rotateWithView_=e.rotateWithView,this.scale_=e.scale,this.scaleArray_=Object(r.c)(void 0!==e.scale?e.scale:1),this.text_=e.text,this.textAlign_=e.textAlign,this.textBaseline_=e.textBaseline,this.fill_=void 0!==e.fill?e.fill:new n.a({color:"#333"}),this.maxAngle_=void 0!==e.maxAngle?e.maxAngle:Math.PI/4,this.placement_=void 0!==e.placement?e.placement:i.a.POINT,this.overflow_=!!e.overflow,this.stroke_=void 0!==e.stroke?e.stroke:null,this.offsetX_=void 0!==e.offsetX?e.offsetX:0,this.offsetY_=void 0!==e.offsetY?e.offsetY:0,this.backgroundFill_=e.backgroundFill?e.backgroundFill:null,this.backgroundStroke_=e.backgroundStroke?e.backgroundStroke:null,this.padding_=void 0===e.padding?null:e.padding}return t.prototype.clone=function(){var e=this.getScale();return new t({font:this.getFont(),placement:this.getPlacement(),maxAngle:this.getMaxAngle(),overflow:this.getOverflow(),rotation:this.getRotation(),rotateWithView:this.getRotateWithView(),scale:Array.isArray(e)?e.slice():e,text:this.getText(),textAlign:this.getTextAlign(),textBaseline:this.getTextBaseline(),fill:this.getFill()?this.getFill().clone():void 0,stroke:this.getStroke()?this.getStroke().clone():void 0,offsetX:this.getOffsetX(),offsetY:this.getOffsetY(),backgroundFill:this.getBackgroundFill()?this.getBackgroundFill().clone():void 0,backgroundStroke:this.getBackgroundStroke()?this.getBackgroundStroke().clone():void 0,padding:this.getPadding()})},t.prototype.getOverflow=function(){return this.overflow_},t.prototype.getFont=function(){return this.font_},t.prototype.getMaxAngle=function(){return this.maxAngle_},t.prototype.getPlacement=function(){return this.placement_},t.prototype.getOffsetX=function(){return this.offsetX_},t.prototype.getOffsetY=function(){return this.offsetY_},t.prototype.getFill=function(){return this.fill_},t.prototype.getRotateWithView=function(){return this.rotateWithView_},t.prototype.getRotation=function(){return this.rotation_},t.prototype.getScale=function(){return this.scale_},t.prototype.getScaleArray=function(){return this.scaleArray_},t.prototype.getStroke=function(){return this.stroke_},t.prototype.getText=function(){return this.text_},t.prototype.getTextAlign=function(){return this.textAlign_},t.prototype.getTextBaseline=function(){return this.textBaseline_},t.prototype.getBackgroundFill=function(){return this.backgroundFill_},t.prototype.getBackgroundStroke=function(){return this.backgroundStroke_},t.prototype.getPadding=function(){return this.padding_},t.prototype.setOverflow=function(t){this.overflow_=t},t.prototype.setFont=function(t){this.font_=t},t.prototype.setMaxAngle=function(t){this.maxAngle_=t},t.prototype.setOffsetX=function(t){this.offsetX_=t},t.prototype.setOffsetY=function(t){this.offsetY_=t},t.prototype.setPlacement=function(t){this.placement_=t},t.prototype.setRotateWithView=function(t){this.rotateWithView_=t},t.prototype.setFill=function(t){this.fill_=t},t.prototype.setRotation=function(t){this.rotation_=t},t.prototype.setScale=function(t){this.scale_=t,this.scaleArray_=Object(r.c)(void 0!==t?t:1)},t.prototype.setStroke=function(t){this.stroke_=t},t.prototype.setText=function(t){this.text_=t},t.prototype.setTextAlign=function(t){this.textAlign_=t},t.prototype.setTextBaseline=function(t){this.textBaseline_=t},t.prototype.setBackgroundFill=function(t){this.backgroundFill_=t},t.prototype.setBackgroundStroke=function(t){this.backgroundStroke_=t},t.prototype.setPadding=function(t){this.padding_=t},t}();e.a=s},1324:function(t,e,o){"use strict";var n,i=o(410),r=o(533),s=o(369),a=o(551),h=o(660),c=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),u=function(t){function e(e,o,n){var i=t.call(this)||this;if(void 0!==n&&void 0===o)i.setFlatCoordinates(n,e);else{var r=o||0;i.setCenterAndRadius(e,r,n)}return i}return c(e,t),e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),void 0,this.layout)},e.prototype.closestPointXY=function(t,e,o,n){var i=this.flatCoordinates,r=t-i[0],s=e-i[1],a=r*r+s*s;if(a<n){if(0===a)for(var h=0;h<this.stride;++h)o[h]=i[h];else{var c=this.getRadius()/Math.sqrt(a);o[0]=i[0]+c*r,o[1]=i[1]+c*s;for(h=2;h<this.stride;++h)o[h]=i[h]}return o.length=this.stride,a}return n},e.prototype.containsXY=function(t,e){var o=this.flatCoordinates,n=t-o[0],i=e-o[1];return n*n+i*i<=this.getRadiusSquared_()},e.prototype.getCenter=function(){return this.flatCoordinates.slice(0,this.stride)},e.prototype.computeExtent=function(t){var e=this.flatCoordinates,o=e[this.stride]-e[0];return Object(s.k)(e[0]-o,e[1]-o,e[0]+o,e[1]+o,t)},e.prototype.getRadius=function(){return Math.sqrt(this.getRadiusSquared_())},e.prototype.getRadiusSquared_=function(){var t=this.flatCoordinates[this.stride]-this.flatCoordinates[0],e=this.flatCoordinates[this.stride+1]-this.flatCoordinates[1];return t*t+e*e},e.prototype.getType=function(){return i.a.CIRCLE},e.prototype.intersectsExtent=function(t){var e=this.getExtent();if(Object(s.F)(t,e)){var o=this.getCenter();return t[0]<=o[0]&&t[2]>=o[0]||(t[1]<=o[1]&&t[3]>=o[1]||Object(s.t)(t,this.intersectsCoordinate.bind(this)))}return!1},e.prototype.setCenter=function(t){var e=this.stride,o=this.flatCoordinates[e]-this.flatCoordinates[0],n=t.slice();n[e]=n[0]+o;for(var i=1;i<e;++i)n[e+i]=t[i];this.setFlatCoordinates(this.layout,n),this.changed()},e.prototype.setCenterAndRadius=function(t,e,o){this.setLayout(o,t,0),this.flatCoordinates||(this.flatCoordinates=[]);var n=this.flatCoordinates,i=Object(a.a)(n,0,t,this.stride);n[i++]=n[0]+e;for(var r=1,s=this.stride;r<s;++r)n[i++]=n[r];n.length=i,this.changed()},e.prototype.getCoordinates=function(){return null},e.prototype.setCoordinates=function(t,e){},e.prototype.setRadius=function(t){this.flatCoordinates[this.stride]=this.flatCoordinates[0]+t,this.changed()},e.prototype.rotate=function(t,e){var o=this.getCenter(),n=this.getStride();this.setCenter(Object(h.a)(o,0,o.length,n,t,e,o)),this.changed()},e.prototype.translate=function(t,e){var o=this.getCenter(),n=this.getStride();this.setCenter(Object(h.d)(o,0,o.length,n,t,e,o)),this.changed()},e}(r.a);u.prototype.transform,e.a=u},527:function(t,e,o){"use strict";var n,i=o(444),r=o(393),s=o(418),a=o(441),h=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=function(t){function e(e){var o=t.call(this)||this;if(o.id_=void 0,o.geometryName_="geometry",o.style_=null,o.styleFunction_=void 0,o.geometryChangeKey_=null,o.addEventListener(Object(i.b)(o.geometryName_),o.handleGeometryChanged_),e)if("function"==typeof e.getSimplifiedGeometry){var n=e;o.setGeometry(n)}else{var r=e;o.setProperties(r)}return o}return h(e,t),e.prototype.clone=function(){var t=new e(this.hasProperties()?this.getProperties():null);t.setGeometryName(this.getGeometryName());var o=this.getGeometry();o&&t.setGeometry(o.clone());var n=this.getStyle();return n&&t.setStyle(n),t},e.prototype.getGeometry=function(){return this.get(this.geometryName_)},e.prototype.getId=function(){return this.id_},e.prototype.getGeometryName=function(){return this.geometryName_},e.prototype.getStyle=function(){return this.style_},e.prototype.getStyleFunction=function(){return this.styleFunction_},e.prototype.handleGeometryChange_=function(){this.changed()},e.prototype.handleGeometryChanged_=function(){this.geometryChangeKey_&&(Object(a.c)(this.geometryChangeKey_),this.geometryChangeKey_=null);var t=this.getGeometry();t&&(this.geometryChangeKey_=Object(a.a)(t,r.a.CHANGE,this.handleGeometryChange_,this)),this.changed()},e.prototype.setGeometry=function(t){this.set(this.geometryName_,t)},e.prototype.setStyle=function(t){this.style_=t,this.styleFunction_=t?function(t){if("function"==typeof t)return t;var e;Array.isArray(t)?e=t:(Object(s.a)("function"==typeof t.getZIndex,41),e=[t]);return function(){return e}}(t):void 0,this.changed()},e.prototype.setId=function(t){this.id_=t,this.changed()},e.prototype.setGeometryName=function(t){this.removeEventListener(Object(i.b)(this.geometryName_),this.handleGeometryChanged_),this.geometryName_=t,this.addEventListener(Object(i.b)(this.geometryName_),this.handleGeometryChanged_),this.handleGeometryChanged_()},e}(i.a);e.a=c}}]);