(window.webpackJsonp=window.webpackJsonp||[]).push([[918,7],{1513:function(e,t,i){"use strict";var r=i(57),n=(i(127),i(1304)),a={name:"MyMapCircle",mixins:[i(625).a],props:{center:{type:Array,required:!0},radius:{type:Number,default:0}},methods:{getRadius:function(){var e=this.myMap.getMetersPerUnit();return e?this.radius/e:0},drawHandler:function(){return new n.a(this.center,this.getRadius())},modifyHandler:function(e){e.setCenter(this.center),e.setRadius(this.getRadius())}}};t.a=Object(r.a)(a)},3281:function(e,t,i){"use strict";i.r(t);var r=i(1513),n=i(495),a=i(0);a.default.use(n.a),a.default.use(r.a);var s={},o=i(21),c=Object(o.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("my-map",[t("my-map-circle",{attrs:{center:[113.261999,23.130592],radius:2e4,fill:"#ff0000",stroke:{width:5,color:"#000"}}})],1)}),[],!1,null,null,null);t.default=c.exports},387:function(e,t,i){var r=i(1),n=i(466),a=i(130);r({target:"Array",proto:!0},{fill:n}),a("fill")},458:function(e,t,i){"use strict";var r=i(87),n=i(9),a=(i(125),i(376),i(4),i(200),i(41),i(845)),s=i(1031),o=i(1162),c=i(1163),u=i(1537),l=i(1164),h=i(977),f={fill:a.a,text:s.a,stroke:o.a,circle:c.a,icon:u.a,regularShape:l.a,backgroundFill:a.a,backgroundStroke:o.a},p=[c.a,u.a,l.a];function d(e){return"object"===Object(n.a)(e)}function m(e,t,i){var r,n;if(null!=i)return e?["fill","backgroundFill"].includes(t)?(n=d(r=i)?r:{color:r},new a.a(n)):"text"===t?d(i)?v(i,e):i:v(i,e):i}function v(e,t){var i={};return Object.entries(e).forEach((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1],s=f[n];"font"===n&&(a="".concat(a," sans-serif")),i[p.includes(s)?"image":n]=m(s,n,a)})),new(t||h.c)(i)}t.a=v},466:function(e,t,i){"use strict";var r=i(19),n=i(132),a=i(22);e.exports=function(e){for(var t=r(this),i=a(t.length),s=arguments.length,o=n(s>1?arguments[1]:void 0,i),c=s>2?arguments[2]:void 0,u=void 0===c?i:n(c,i);u>o;)t[o++]=e;return t}},495:function(e,t,i){"use strict";var r=i(57),n=i(56),a=i(87),s=(i(199),i(23),i(383),i(88),i(86),i(127),i(447),i(376),i(4),i(41),i(722)),o=i(689),c=i(603),u=i(605),l=i(500),h=i(614),f=i(634),p=i(547),d=i(369),m={name:"MyMap",provide:function(){return{myMap:this}},inject:{page:{default:null}},props:{zoom:{type:Number,default:10},minZoom:{type:Number,default:1},maxZoom:{type:Number,default:20},center:{type:Array,default:function(){return[113.261999,23.130592]}},adapter:{type:[String,Object,Function],default:"Baidu"},projection:{type:String,default:"EPSG:4326"},width:{type:String,default:"100%"},height:{type:String,default:"400px"},dragPan:{type:Boolean,default:!0},mouseWheelZoom:{type:Boolean,default:!0},mapOptions:Object,viewOptions:Object,invert:Boolean,filter:Object},render:function(){var e=arguments[0];return e("div",{class:this.classes,style:this.styles},[this.$slots.default])},data:function(){return{cursor:null,viewWidth:0,viewHeight:0}},computed:{classes:function(){return{"my-map":!0,"my-map--invert":this.invert}},styles:function(){return{width:this.width,height:this.height,cursor:this.cursor?"pointer":""}},filterStyle:function(){return this.filter?Object.entries(this.filter).map((function(e){var t=Object(a.a)(e,2),i=t[0],r=t[1];return"hue-rotate"===i?"".concat(i,"(").concat(r,"deg)"):"".concat(i,"(").concat(r,")")})).join(" "):null}},watch:{dragPan:function(e){this.setActive(c.a,e)},mouseWheelZoom:function(e){this.setActive(u.a,e)},filterStyle:function(){this.setCanvasFilter()}},methods:{setActive:function(e,t){if(this.map){var i=this.map.getInteractions().getArray().find((function(t){return t instanceof e}));i&&i.setActive(t)}},init:function(){var e=this.$props,t=e.center,i=e.projection,r=e.zoom,a=e.minZoom,h=e.maxZoom,f=Object(p.a)(this.adapter);f.__MY_LAYER__=!0;var m=new o.a(Object(n.a)(Object(n.a)({},this.viewOptions||{}),{},{projection:i,center:t,zoom:r,minZoom:a,maxZoom:h}));this.map=new s.a(Object(n.a)(Object(n.a)({},this.mapOptions||{}),{},{layers:[].concat(f),view:m,target:this.$el,controls:[],interactions:[new c.a,new u.a,new l.b({handleEvent:this.handleEvent})]})),this.setActive(c.a,this.dragPan),this.setActive(u.a,this.mouseWheelZoom),this.bindMapEvents(),this.$emit("ready",this.map,this),Object(d.addResizeListener)(this.$el,this.setViewSize),this.setCanvasFilter()},dispose:function(){this.map&&(this.map.disposeInternal(),this.unbindMapEvents(),Object(d.removeResizeListener)(this.$el,this.setViewSize))},getFeatureAtPixel:function(e){return this.map?this.map.forEachFeatureAtPixel(e,(function(e){return e})):null},setCursor:function(e){var t=this.getFeatureVM(e);this.cursor=t&&(t.cursor||t.$listeners.click)},clickTrigger:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"click";if(e){var r=this.getFeatureVM(e);r&&r.$emit(i,t,e)}},getLayer:function(){return this.map?this.map.getLayers().getArray().find((function(e){return e.__MY_LAYER__})):null},getFeatureVM:function(e){if(e){var t=(e.get("features")||[])[0]||e;return t.__vm__||t.get("__vm__")}},enterAndLeaveTrigger:function(e,t){if(!this.featureAtPixel&&e){this.$emit("mouseenter",t,e);var i=this.getFeatureVM(e);i&&i.$emit("mouseenter",t,e)}if(this.featureAtPixel&&!e){this.$emit("mouseleave",t,this.featureAtPixel);var r=this.getFeatureVM(this.featureAtPixel);r&&r.$emit("mouseleave",t,this.featureAtPixel)}if(this.featureAtPixel&&e&&this.featureAtPixel!==e){this.$emit("mouseleave",t,this.featureAtPixel),this.$emit("mouseenter",t,e);var n=this.getFeatureVM(this.featureAtPixel);n&&n.$emit("mouseleave",t,this.featureAtPixel);var a=this.getFeatureVM(e);a&&a.$emit("mouseenter",t,e)}this.featureAtPixel=e},handleEvent:function(e){var t=e.type,i=this.page||{},r=i.widthScale,n=void 0===r?1:r,s=i.heightScale,o=void 0===s?1:s,c=Object(a.a)(e.pixel,2),u=[c[0]/n,c[1]/o],l=this.getFeatureAtPixel(u);switch(t){case"pointermove":this.setCursor(l),this.enterAndLeaveTrigger(l,e);break;case"click":this.clickTrigger(l,e);break;default:this.clickTrigger(l,e,t)}return!0},bindMapEvents:function(){var e=this;this.map&&Object.entries(this.$listeners).forEach((function(t){var i=Object(a.a)(t,2),r=i[0],n=i[1];return e.map.on(r,n)}))},unbindMapEvents:function(){var e=this;this.map&&Object.entries(this.$listeners).forEach((function(t){var i=Object(a.a)(t,2),r=i[0],n=i[1];return e.map.un(r,n)}))},resize:function(){this.map.updateSize()},moveTo:function(e){this.map&&this.map.getView().animate({center:e,duration:200})},zoomTo:function(e){this.map&&this.map.getView().animate({zoom:Number.parseInt(e),duration:200})},zoomIn:function(){if(this.map){var e=this.map.getView();this.zoomTo(e.getZoom()+1)}},zoomOut:function(){if(this.map){var e=this.map.getView();this.zoomTo(e.getZoom()-1)}},mapReady:function(e){this.map?e&&e(this.map,this):this.$once("ready",e)},createVectorLayer:function(){if(this.map&&!this.vectorLayer){var e=new f.a;return this.vectorLayer=new h.a({source:e,zIndex:1}),this.map.addLayer(this.vectorLayer),this.vectorLayer}},addFeature:function(e){if(this.map){this.vectorLayer||this.createVectorLayer();var t=this.vectorLayer.getSource(),i=[].concat(e);t.addFeatures(i)}},removeFeature:function(e){if(this.vectorLayer){var t=this.vectorLayer.getSource();[].concat(e).forEach((function(e){return t.removeFeature(e)}))}},getMetersPerUnit:function(){return this.map?this.map.getView().getProjection().getMetersPerUnit():0},setViewSize:function(){var e=this.$el.getBoundingClientRect();this.viewWidth=e.width||0,this.viewHeight=e.height||0,this.map&&this.map.updateSize(),this.$emit("view-size-change",e)},setCanvasFilter:function(){if(this.map){var e=this.map.getViewport();e&&(e.style.filter=this.filterStyle)}},clear:function(){this.map&&(this.map.getLayers().getArray().filter((function(e){return!e.__MY_LAYER__})).forEach((function(e){e.getSource().clear()})),(this.$children||[]).forEach((function(e){e.clear&&e.clear()})))}},mounted:function(){this.init()},beforeDestroy:function(){this.dispose()}};i(715),i(558),t.a=Object(r.a)(m)},518:function(e,t,i){"use strict";i.d(t,"c",(function(){return s})),i.d(t,"d",(function(){return o})),i.d(t,"a",(function(){return c})),i.d(t,"b",(function(){return u}));i(88),i(30),i(4),i(576),i(24),i(577),i(129),i(497),i(61),i(615);var r=i(578),n=i.n(r),a=/^(http|https):\/\/[\w.:]*\//;function s(e,t,i){var r,n={};e=(e||location.search).replace(/^[^]*\?/,""),t=t||"&",i=i||"=";for(var a=new RegExp("(?:^|\\"+t+")([^\\"+i+"\\"+t+"]+)(?:\\"+i+"([^\\"+t+"]*))?","g");null!==(r=a.exec(e));)r[1]!==e&&(n[decodeURIComponent(r[1])]=decodeURIComponent(r[2]||""));return n}function o(e){var t=[];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.push([i,encodeURIComponent(e[i])].join("="));return t.join("&")}function c(e){var t=e.match(a);return t?t[0]:""}function u(e,t){var i=[],r=c(e),a=n()(e.replace(r,""),i).exec(t.split("?")[0].replace(r,"")),s={};return a&&a.length>0&&i.forEach((function(e,t){s[e.name]=a[t+1]})),s}},547:function(e,t,i){"use strict";i.d(t,"a",(function(){return K}));var r=i(56),n=i(9),a=(i(199),i(86),i(543)),s=i(692),o=i(720),c=i(521),u=i(725),l=i(633),h=i(449),f=i(691),p=i(34),d=i(35),m=i(139),v=i(138),g=i(137),y=(i(88),i(443),i(30),i(206),i(4),i(129),i(517)),b=i(606),w="METER",x="KILOMETER",j="DEGREE",O="INCH",S="FOOT",E="ISERVER";function _(e,t,i){var r=e*t*(1/.0254)*function(e){var t;if(e===w)t=1;else if(e===j)t=2*Math.PI*6378137/360;else if(e===x)t=.001;else if(e===O)t=1/.025399999918;else{if(e!==S)return t;t=.3048}return t}(i);return r=1/r}function I(e,t,i){var r=e*t*(1/.0254)*this.getMeterPerMapUnit(i);return r=1/r}var M=function(e){function t(e){var i;if(Object(p.a)(this,t),void 0===(e=e||{}).url)return Object(m.a)(i);e.format=e.format?e.format:"png";var r=e.url+"/tileImage."+e.format+"?";e.serverType=e.serverType||E,i=Object(v.a)(this,t,[{attributions:e.attributions,cacheSize:e.cacheSize,crossOrigin:e.crossOrigin,logo:e.logo,opaque:e.opaque,projection:e.projection,reprojectionErrorThreshold:e.reprojectionErrorThreshold,state:e.state,tileClass:e.tileClass,tileGrid:e.tileGrid,tileLoadFunction:e.tileLoadFunction,tilePixelRatio:e.tilePixelRatio,tileUrlFunction:function(i,r,a){n.tileGrid||(n.extent?(n.tileGrid=t.createTileGrid(e.extent),n.resolutions&&(n.tileGrid.resolutions=n.resolutions)):("EPSG:3857"===a.getCode()&&(n.tileGrid=t.createTileGrid([-20037508.3427892,-20037508.3427892,20037508.3427892,20037508.3427892]),n.extent=[-20037508.3427892,-20037508.3427892,20037508.3427892,20037508.3427892]),"EPSG:4326"===a.getCode()&&(n.tileGrid=t.createTileGrid([-180,-90,180,90]),n.extent=[-180,-90,180,90])));n.origin=n.tileGrid.getOrigin(0);var o=i[0],c=i[1],u=-i[2]-1,l=n.tileGrid.getResolution(o),h=a.getUnits();"degrees"===h&&(h=j);"m"===h&&(h=w);var f=_(l,96,h),p=Object(y.c)(n.tileGrid.getTileSize(o,n.tmpSize)),d=s.call(n)+encodeURI("&x="+c+"&y="+u+"&width="+p[0]+"&height="+p[1]+"&scale="+f);n.tileProxy&&(d=n.tileProxy+encodeURIComponent(d));n.cacheEnabled||(d+="&_t="+(new Date).getTime());return d},url:e.url,urls:e.urls,wrapX:void 0!==e.wrapX&&e.wrapX,cacheEnabled:e.cacheEnabled,layersID:e.layersID}]),e.tileProxy&&(i.tileProxy=e.tileProxy),i.options=e,i._url=e.url,i.tileSetsIndex=-1,i.tempIndex=-1;var n=i;function a(){var t={};return t.redirect=void 0!==e.redirect&&e.redirect,t.transparent=void 0===e.transparent||e.transparent,t.cacheEnabled=!(!1===e.cacheEnabled),this.cacheEnabled=t.cacheEnabled,t._cache=t.cacheEnabled,this.origin&&(t.origin=JSON.stringify({x:this.origin[0],y:this.origin[1]})),e.prjCoordSys&&(t.prjCoordSys=JSON.stringify(e.prjCoordSys)),e.layersID&&(t.layersID=e.layersID.toString()),e.overlapDisplayed?t.overlapDisplayed=!0:(t.overlapDisplayed=!1,e.overlapDisplayedOptions&&(t.overlapDisplayedOptions=this.overlapDisplayedOptions.toString())),e.cacheEnabled&&e.tileversion&&(t.tileversion=e.tileversion.toString()),t}function s(){return this._paramsChanged&&(this._layerUrl=o.call(this),this._paramsChanged=!1),this._layerUrl||o.call(this)}function o(){return this._layerUrl=r+encodeURI(c.call(this)),this._layerUrl}function c(){this.requestParams=this.requestParams||a.call(this);var e=[];for(var t in this.requestParams)e.push(t+"="+this.requestParams[t]);return e.join("&")}return i}return Object(g.a)(t,e),Object(d.a)(t,[{key:"setTileSetsInfo",value:function(e){this.tileSets=e,Array.isArray(this.tileSets)&&(this.tileSets=e[0]),this.tileSets&&(this.dispatchEvent({type:"tilesetsinfoloaded",value:{tileVersions:this.tileSets.tileVersions}}),this.changeTilesVersion())}},{key:"lastTilesVersion",value:function(){this.tempIndex=this.tileSetsIndex-1,this.changeTilesVersion()}},{key:"nextTilesVersion",value:function(){this.tempIndex=this.tileSetsIndex+1,this.changeTilesVersion()}},{key:"changeTilesVersion",value:function(){var e=this;if(null!=e.tileSets&&!(e.tempIndex===e.tileSetsIndex||this.tempIndex<0)){var t=e.tileSets.tileVersions;if(t&&e.tempIndex<t.length&&e.tempIndex>=0){var i=t[e.tempIndex].name;e.mergeTileVersionParam(i)&&(e.tileSetsIndex=e.tempIndex,e.dispatchEvent({type:"tileversionschanged",value:{tileVersion:t[e.tempIndex]}}))}}}},{key:"updateCurrentTileSetsIndex",value:function(e){this.tempIndex=e}},{key:"mergeTileVersionParam",value:function(e){return!!e&&(this.requestParams.tileversion=e,this._paramsChanged=!0,this.refresh(),!0)}}],[{key:"optionsFromMapJSON",value:function(e,t){var i={};i.url=e,i.crossOrigin="anonymous";var r=[t.bounds.left,t.bounds.bottom,t.bounds.right,t.bounds.top],n=function(){var e,i=r[2]-r[0],n=r[3]-r[1],a=i>=n?i:n;e=a===i?a/t.viewer.width:a/t.viewer.height;var s=[],o=w;t.coordUnit===j&&(o=j);if(t.visibleScalesEnabled&&t.visibleScales&&t.visibleScales.length>0)for(var c=0;c<t.visibleScales.length;c++)s.push(I(t.visibleScales[c],96,o));else for(var u=0;u<17;u++)s.push(e/Math.pow(2,u));return s.sort((function(e,t){return t-e}))}();return i.tileGrid=new h.a({extent:r,resolutions:n}),i}},{key:"createTileGrid",value:function(e,t,i,r,n){var a=Object(b.a)({extent:e,maxZoom:t,minZoom:i,tileSize:r});return new h.a({extent:e,minZoom:i,origin:n,resolutions:a.getResolutions(),tileSize:a.getTileSize()})}}])}(l.a),P=i(378),T=i(398),z=i(518),A=(i(24),i(61),i(721)),G=i.n(A),F=new T.b({code:"baidu",extent:[-20037726.37,-12474104.17,20037726.37,12474104.17],units:"m"});Object(T.d)(F),Object(T.c)("EPSG:4326",F,G.a.ll2bmerc,G.a.bmerc2ll),Object(T.c)("EPSG:3857",F,G.a.smerc2bmerc,G.a.bmerc2smerc);for(var k=new Array(19),R=0;R<19;++R)k[R]=Math.pow(2,18-R);var V=function(e){return new a.a({source:new c.a({projection:"baidu",maxZoom:18,tileUrlFunction:function(t){var i=t[1],r=-t[2]-1,n=t[0];i<0&&(i="M"+-i),r<0&&(r="M"+-r);var a=Math.ceil(5*Math.random());return e.url.replace(/{x}/g,i).replace(/{y}/g,r).replace(/{z}/g,n).replace(/{n}/g,a)},tileGrid:new h.a({resolutions:k,origin:[0,0]})})})},L="http://webrd03.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}&lang=zh_cn",C="http://online{n}.map.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&scaler=1&udt=20190718",$="http://10.8.6.103/PGIS_S_TileMapServer/Maps/BJSL/EzMap?Service=getImage&Type=RGB&ZoomOffset=0",Z="http://53.1.238.17/iserver/services/map-pgisvec/rest/maps/pgisvecv1",D="http://68.26.21.71/images/GetImage.do?method=showImageRedisBytable&jinyi_admin:MA_PGISSLDT&version=v1";function U(){for(var e=[],t=0;t<20;t++){var i=t<7?[64,64]:[107.5,28];e.push(i)}return e}function N(){for(var e=[],t=0;t<20;t++){var i=2.0000081722216954/Math.pow(2,t);e.push(i)}return e}function q(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"EPSG:4326",t=256,i=Object(T.j)(e),r=i.getExtent(),n=Object(P.E)(r)/t,a=[],s=[],o=0;o<=20;o++)a[o]=o,s[o]=n/Math.pow(2,o);return new f.b({origin:Object(P.C)(r),resolutions:s,matrixIds:a})}function B(e){var t=e.layers.map((function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"vec_c",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"464554f64aa4f4e90e0321c17a57a331";return new a.a({source:new c.a({url:"http://t{0-7}.tianditu.com/DataServer?T="+e+"&x={x}&y={y}&l={z}&tk="+t})})}(t,e.tk)}));return new s.a({layers:t})}function H(e){var t=q(),i=e.url;return new a.a({source:new u.a({url:i,tileGrid:t}),wrapX:!1})}function W(e){var t=e.url,i=q();return new a.a({source:new u.a({url:"",crossOrigin:"Anonymous",tileGrid:i,tileLoadFunction:function(e,i){var r=Object(z.c)(i),n={Row:r.TileRow,Col:r.TileCol,Zoom:r.TileMatrix,V:"1.0.0"};e.getImage().src="".concat(t,"&").concat(Object(z.d)(n))}}),wrapX:!1})}function X(e){if("function"==typeof e.url){var t=e.url,i=q();return new a.a({source:new u.a({url:"",crossOrigin:"Anonymous",tileGrid:i,tileLoadFunction:function(e,i){var r=Object(z.c)(i);e.getImage().src=t(r)}}),wrapX:!1})}return W(e)}function Y(e){return new a.a({source:new M({url:e.url}),projection:e.projection||"EPSG:4326"})}function J(e){var t=e.url;return new a.a({projection:e.projection||"EPSG:4326",url:"".concat(t,"&l={z}&x={y}&y={x}"),tileGrid:new h.a({origin:e.origins||U(),resolutions:e.resolutions||N()})})}function K(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("function"==typeof e)return e({TileLayer:a.a,LayerGroup:s.a,OSM:o.a,XYZ:c.a,WMTS:u.a,TileImage:l.a,TileGrid:h.a,WMTSGrid:f.b,getWidth:P.E,getTopLeft:P.C,getProj:T.j});var i="object"===Object(n.a)(e)?Object(r.a)({},e):{type:e},p=i.type,d=i.tk;switch(delete i.tk,delete i.type,p){case"OSM":return new a.a(Object(r.a)(Object(r.a)({},t),{},{source:new o.a(i)}));case"XYZ":return new a.a(Object(r.a)(Object(r.a)({},t),{},{source:new c.a(i)}));case"Amap":return new a.a(Object(r.a)(Object(r.a)({},t),{},{source:new c.a(Object(r.a)({url:L},i))}));case"Baidu":return V(Object(r.a)({url:C},i));case"TDT":return B(Object(r.a)({tk:d,layers:["vec_c","vec_w","cva_w","ibo_w"]},i));case"Founder":return H(Object(r.a)({url:"http://127.0.0.1:3000/proxy"},i));case"Ez":return W(Object(r.a)({url:$},i));case"Super":return Y(Object(r.a)({url:Z},i));case"Fc":return J(Object(r.a)({url:D},i));case"WMTS":return X(i)}}},558:function(e,t,i){},601:function(e,t,i){"use strict";i(127);t.a={props:{zIndex:Number,fill:{type:String,default:"rgba(255, 255,255, 0.5)"},stroke:{type:Object,default:function(){return{width:3,color:"#409eff"}}},text:[Object,String],styleFunction:Function},computed:{styleText:function(){return"string"==typeof this.text?{text:this.text,font:"12px"}:this.text||{}}}}},625:function(e,t,i){"use strict";var r=i(56),n=(i(387),i(559)),a=i(601),s=i(458);t.a={mixins:[a.a],inject:["myMap"],props:{props:{type:Object,default:function(){return{}}}},render:function(){return null},watch:{$props:{deep:!0,handler:function(){this.modify()}}},methods:{drawHandler:function(){},modifyHandler:function(e){},draw:function(){var e=this.drawHandler();e&&(this.feature=new n.a({geometry:e}),this.feature.__vm__=this,this.props&&this.feature.setProperties(Object(r.a)({},this.props)),this.myMap.addFeature(this.feature),this.setStyle(),this.$emit("feature-draw"))},setStyle:function(){if(this.feature){var e=this.styleFunction?this.styleFunction(this):Object(s.a)({fill:this.fill,stroke:this.stroke,zIndex:this.zIndex,text:this.styleText});this.feature.setStyle(e)}},modify:function(){if(this.feature){var e=this.feature.getGeometry();this.modifyHandler(e),this.setStyle(),this.props&&this.feature.setProperties(Object(r.a)({},this.props))}else this.draw()}},created:function(){this.myMap.mapReady(this.draw)},beforeDestroy:function(){this.feature&&(this.feature.__vm__=null,this.feature.disposeInternal(),this.myMap.removeFeature(this.feature))}}}}]);