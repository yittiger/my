(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1009:function(t,e,i){var o=i(367),n=i(467),r=i(931),a=i(799),s=n.extend({type:"cartesian2dAxis",axis:null,init:function(){s.superApply(this,"init",arguments),this.resetRange()},mergeOption:function(){s.superApply(this,"mergeOption",arguments),this.resetRange()},restoreData:function(){s.superApply(this,"restoreData",arguments),this.resetRange()},getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid",index:this.option.gridIndex,id:this.option.gridId})[0]}});function l(t,e){return e.type||(e.data?"category":"value")}o.merge(s.prototype,a);var c={offset:0};r("x",s,l,c),r("y",s,l,c);var d=s;t.exports=d},1036:function(t,e,i){var o=i(367),n=i(371);e.rectCoordAxisBuildSplitArea=function(t,e,i,r){var a=i.axis;if(!a.scale.isBlank()){var s=i.getModel("splitArea"),l=s.getModel("areaStyle"),c=l.get("color"),d=r.coordinateSystem.getRect(),u=a.getTicksCoords({tickModel:s,clamp:!0});if(u.length){var x=c.length,h=t.__splitAreaColors,g=o.createHashMap(),p=0;if(h)for(var f=0;f<u.length;f++){var y=h.get(u[f].tickValue);if(null!=y){p=(y+(x-1)*f)%x;break}}var m=a.toGlobalCoord(u[0].coord),v=l.getAreaStyle();c=o.isArray(c)?c:[c];for(f=1;f<u.length;f++){var A,_,C,L,b=a.toGlobalCoord(u[f].coord);a.isHorizontal()?(A=m,_=d.y,C=b-A,L=d.height,m=A+C):(A=d.x,_=m,C=d.width,m=_+(L=b-_));var M=u[f-1].tickValue;null!=M&&g.set(M,p),e.add(new n.Rect({anid:null!=M?"area_"+M:null,shape:{x:A,y:_,width:C,height:L},style:o.defaults({fill:c[p]},v),silent:!0})),p=(p+1)%x}t.__splitAreaColors=g}}},e.rectCoordAxisHandleRemove=function(t){t.__splitAreaColors=null}},1166:function(t,e,i){var o=i(367),n=i(423),r=i(1167);function a(t){r.call(this,t)}a.prototype={constructor:a,type:"cartesian2d",dimensions:["x","y"],getBaseAxis:function(){return this.getAxesByScale("ordinal")[0]||this.getAxesByScale("time")[0]||this.getAxis("x")},containPoint:function(t){var e=this.getAxis("x"),i=this.getAxis("y");return e.contain(e.toLocalCoord(t[0]))&&i.contain(i.toLocalCoord(t[1]))},containData:function(t){return this.getAxis("x").containData(t[0])&&this.getAxis("y").containData(t[1])},dataToPoint:function(t,e,i){var o=this.getAxis("x"),n=this.getAxis("y");return(i=i||[])[0]=o.toGlobalCoord(o.dataToCoord(t[0])),i[1]=n.toGlobalCoord(n.dataToCoord(t[1])),i},clampData:function(t,e){var i=this.getAxis("x").scale,o=this.getAxis("y").scale,n=i.getExtent(),r=o.getExtent(),a=i.parse(t[0]),s=o.parse(t[1]);return(e=e||[])[0]=Math.min(Math.max(Math.min(n[0],n[1]),a),Math.max(n[0],n[1])),e[1]=Math.min(Math.max(Math.min(r[0],r[1]),s),Math.max(r[0],r[1])),e},pointToData:function(t,e){var i=this.getAxis("x"),o=this.getAxis("y");return(e=e||[])[0]=i.coordToData(i.toLocalCoord(t[0])),e[1]=o.coordToData(o.toLocalCoord(t[1])),e},getOtherAxis:function(t){return this.getAxis("x"===t.dim?"y":"x")},getArea:function(){var t=this.getAxis("x").getGlobalExtent(),e=this.getAxis("y").getGlobalExtent(),i=Math.min(t[0],t[1]),o=Math.min(e[0],e[1]),r=Math.max(t[0],t[1])-i,a=Math.max(e[0],e[1])-o;return new n(i,o,r,a)}},o.inherits(a,r);var s=a;t.exports=s},1167:function(t,e,i){var o=i(367);function n(t){return this._axes[t]}var r=function(t){this._axes={},this._dimList=[],this.name=t||""};r.prototype={constructor:r,type:"cartesian",getAxis:function(t){return this._axes[t]},getAxes:function(){return o.map(this._dimList,n,this)},getAxesByScale:function(t){return t=t.toLowerCase(),o.filter(this.getAxes(),(function(e){return e.scale.type===t}))},addAxis:function(t){var e=t.dim;this._axes[e]=t,this._dimList.push(e)},dataToCoord:function(t){return this._dataCoordConvert(t,"dataToCoord")},coordToData:function(t){return this._dataCoordConvert(t,"coordToData")},_dataCoordConvert:function(t,e){for(var i=this._dimList,o=t instanceof Array?[]:{},n=0;n<i.length;n++){var r=i[n],a=this._axes[r];o[r]=a[e](t[r])}return o}};var a=r;t.exports=a},1168:function(t,e,i){var o=i(367),n=i(752),r=function(t,e,i,o,r){n.call(this,t,e,i),this.type=o||"value",this.position=r||"bottom"};r.prototype={constructor:r,index:0,getAxesOnZeroOf:null,model:null,isHorizontal:function(){var t=this.position;return"top"===t||"bottom"===t},getGlobalExtent:function(t){var e=this.getExtent();return e[0]=this.toGlobalCoord(e[0]),e[1]=this.toGlobalCoord(e[1]),t&&e[0]>e[1]&&e.reverse(),e},getOtherAxis:function(){this.grid.getOtherAxis()},pointToData:function(t,e){return this.coordToData(this.toLocalCoord(t["x"===this.dim?0:1]),e)},toLocalCoord:null,toGlobalCoord:null},o.inherits(r,n);var a=r;t.exports=a},1169:function(t,e,i){i(1009);var o=i(467).extend({type:"grid",dependencies:["xAxis","yAxis"],layoutMode:"box",coordinateSystem:null,defaultOption:{show:!1,zlevel:0,z:0,left:"10%",top:60,right:"10%",bottom:60,containLabel:!1,backgroundColor:"rgba(0,0,0,0)",borderWidth:1,borderColor:"#ccc"}});t.exports=o},1170:function(t,e,i){i(1009),i(1171)},1171:function(t,e,i){var o=i(367),n=i(371),r=i(753),a=i(792),s=i(1027),l=i(1036),c=l.rectCoordAxisBuildSplitArea,d=l.rectCoordAxisHandleRemove,u=["axisLine","axisTickLabel","axisName"],x=["splitArea","splitLine","minorSplitLine"],h=a.extend({type:"cartesianAxis",axisPointerClass:"CartesianAxisPointer",render:function(t,e,i,a){this.group.removeAll();var l=this._axisGroup;if(this._axisGroup=new n.Group,this.group.add(this._axisGroup),t.get("show")){var c=t.getCoordSysModel(),d=s.layout(c,t),g=new r(t,d);o.each(u,g.add,g),this._axisGroup.add(g.getGroup()),o.each(x,(function(e){t.get(e+".show")&&this["_"+e](t,c)}),this),n.groupTransition(l,this._axisGroup,t),h.superCall(this,"render",t,e,i,a)}},remove:function(){d(this)},_splitLine:function(t,e){var i=t.axis;if(!i.scale.isBlank()){var r=t.getModel("splitLine"),a=r.getModel("lineStyle"),s=a.get("color");s=o.isArray(s)?s:[s];for(var l=e.coordinateSystem.getRect(),c=i.isHorizontal(),d=0,u=i.getTicksCoords({tickModel:r}),x=[],h=[],g=a.getLineStyle(),p=0;p<u.length;p++){var f=i.toGlobalCoord(u[p].coord);c?(x[0]=f,x[1]=l.y,h[0]=f,h[1]=l.y+l.height):(x[0]=l.x,x[1]=f,h[0]=l.x+l.width,h[1]=f);var y=d++%s.length,m=u[p].tickValue;this._axisGroup.add(new n.Line({anid:null!=m?"line_"+u[p].tickValue:null,subPixelOptimize:!0,shape:{x1:x[0],y1:x[1],x2:h[0],y2:h[1]},style:o.defaults({stroke:s[y]},g),silent:!0}))}}},_minorSplitLine:function(t,e){var i=t.axis,o=t.getModel("minorSplitLine").getModel("lineStyle"),r=e.coordinateSystem.getRect(),a=i.isHorizontal(),s=i.getMinorTicksCoords();if(s.length)for(var l=[],c=[],d=o.getLineStyle(),u=0;u<s.length;u++)for(var x=0;x<s[u].length;x++){var h=i.toGlobalCoord(s[u][x].coord);a?(l[0]=h,l[1]=r.y,c[0]=h,c[1]=r.y+r.height):(l[0]=r.x,l[1]=h,c[0]=r.x+r.width,c[1]=h),this._axisGroup.add(new n.Line({anid:"minor_line_"+s[u][x].tickValue,subPixelOptimize:!0,shape:{x1:l[0],y1:l[1],x2:c[0],y2:c[1]},style:d,silent:!0}))}},_splitArea:function(t,e){c(this,this._axisGroup,t,e)}});h.extend({type:"xAxis"}),h.extend({type:"yAxis"})},525:function(t,e,i){var o=i(368),n=i(367),r=i(371);i(705),i(1170),o.extendComponentView({type:"grid",render:function(t,e){this.group.removeAll(),t.get("show")&&this.group.add(new r.Rect({shape:t.coordinateSystem.getRect(),style:n.defaults({fill:t.get("backgroundColor")},t.getItemStyle()),silent:!0,z2:-1}))}}),o.registerPreprocessor((function(t){t.xAxis&&t.yAxis&&!t.grid&&(t.grid={})}))},705:function(t,e,i){i(381).__DEV__;var o=i(367),n=o.isObject,r=o.each,a=o.map,s=o.indexOf,l=(o.retrieve,i(412).getLayoutRect),c=i(621),d=c.createScaleByModel,u=c.ifAxisCrossZero,x=c.niceScaleExtent,h=c.estimateLabelUnionRect,g=i(1166),p=i(1168),f=i(597),y=i(522).getStackedDimension;function m(t,e,i){return t.getCoordSysModel()===e}function v(t,e,i){this._coordsMap={},this._coordsList=[],this._axesMap={},this._axesList=[],this._initCartesian(t,e,i),this.model=t}i(1169);var A=v.prototype;function _(t,e,i,o){i.getAxesOnZeroOf=function(){return n?[n]:[]};var n,r=t[e],a=i.model,s=a.get("axisLine.onZero"),l=a.get("axisLine.onZeroAxisIndex");if(s){if(null!=l)C(r[l])&&(n=r[l]);else for(var c in r)if(r.hasOwnProperty(c)&&C(r[c])&&!o[d(r[c])]){n=r[c];break}n&&(o[d(n)]=!0)}function d(t){return t.dim+"_"+t.index}}function C(t){return t&&"category"!==t.type&&"time"!==t.type&&u(t)}A.type="grid",A.axisPointerEnabled=!0,A.getRect=function(){return this._rect},A.update=function(t,e){var i=this._axesMap;this._updateScale(t,this.model),r(i.x,(function(t){x(t.scale,t.model)})),r(i.y,(function(t){x(t.scale,t.model)}));var o={};r(i.x,(function(t){_(i,"y",t,o)})),r(i.y,(function(t){_(i,"x",t,o)})),this.resize(this.model,e)},A.resize=function(t,e,i){var o=l(t.getBoxLayoutParams(),{width:e.getWidth(),height:e.getHeight()});this._rect=o;var n=this._axesList;function a(){r(n,(function(t){var e=t.isHorizontal(),i=e?[0,o.width]:[0,o.height],n=t.inverse?1:0;t.setExtent(i[n],i[1-n]),function(t,e){var i=t.getExtent(),o=i[0]+i[1];t.toGlobalCoord="x"===t.dim?function(t){return t+e}:function(t){return o-t+e},t.toLocalCoord="x"===t.dim?function(t){return t-e}:function(t){return o-t+e}}(t,e?o.x:o.y)}))}a(),!i&&t.get("containLabel")&&(r(n,(function(t){if(!t.model.get("axisLabel.inside")){var e=h(t);if(e){var i=t.isHorizontal()?"height":"width",n=t.model.get("axisLabel.margin");o[i]-=e[i]+n,"top"===t.position?o.y+=e.height+n:"left"===t.position&&(o.x+=e.width+n)}}})),a())},A.getAxis=function(t,e){var i=this._axesMap[t];if(null!=i){if(null==e)for(var o in i)if(i.hasOwnProperty(o))return i[o];return i[e]}},A.getAxes=function(){return this._axesList.slice()},A.getCartesian=function(t,e){if(null!=t&&null!=e){var i="x"+t+"y"+e;return this._coordsMap[i]}n(t)&&(e=t.yAxisIndex,t=t.xAxisIndex);for(var o=0,r=this._coordsList;o<r.length;o++)if(r[o].getAxis("x").index===t||r[o].getAxis("y").index===e)return r[o]},A.getCartesians=function(){return this._coordsList.slice()},A.convertToPixel=function(t,e,i){var o=this._findConvertTarget(t,e);return o.cartesian?o.cartesian.dataToPoint(i):o.axis?o.axis.toGlobalCoord(o.axis.dataToCoord(i)):null},A.convertFromPixel=function(t,e,i){var o=this._findConvertTarget(t,e);return o.cartesian?o.cartesian.pointToData(i):o.axis?o.axis.coordToData(o.axis.toLocalCoord(i)):null},A._findConvertTarget=function(t,e){var i,o,n=e.seriesModel,r=e.xAxisModel||n&&n.getReferringComponents("xAxis")[0],a=e.yAxisModel||n&&n.getReferringComponents("yAxis")[0],l=e.gridModel,c=this._coordsList;if(n)i=n.coordinateSystem,s(c,i)<0&&(i=null);else if(r&&a)i=this.getCartesian(r.componentIndex,a.componentIndex);else if(r)o=this.getAxis("x",r.componentIndex);else if(a)o=this.getAxis("y",a.componentIndex);else if(l){l.coordinateSystem===this&&(i=this._coordsList[0])}return{cartesian:i,axis:o}},A.containPoint=function(t){var e=this._coordsList[0];if(e)return e.containPoint(t)},A._initCartesian=function(t,e,i){var o={left:!1,right:!1,top:!1,bottom:!1},n={x:{},y:{}},a={x:0,y:0};if(e.eachComponent("xAxis",s("x"),this),e.eachComponent("yAxis",s("y"),this),!a.x||!a.y)return this._axesMap={},void(this._axesList=[]);function s(e){return function(i,r){if(m(i,t)){var s=i.get("position");"x"===e?"top"!==s&&"bottom"!==s&&(s=o.bottom?"top":"bottom"):"left"!==s&&"right"!==s&&(s=o.left?"right":"left"),o[s]=!0;var l=new p(e,d(i),[0,0],i.get("type"),s),c="category"===l.type;l.onBand=c&&i.get("boundaryGap"),l.inverse=i.get("inverse"),i.axis=l,l.model=i,l.grid=this,l.index=r,this._axesList.push(l),n[e][r]=l,a[e]++}}}this._axesMap=n,r(n.x,(function(e,i){r(n.y,(function(o,n){var r="x"+i+"y"+n,a=new g(r);a.grid=this,a.model=t,this._coordsMap[r]=a,this._coordsList.push(a),a.addAxis(e),a.addAxis(o)}),this)}),this)},A._updateScale=function(t,e){function i(t,e,i){r(t.mapDimension(e.dim,!0),(function(i){e.scale.unionExtentFromData(t,y(t,i))}))}r(this._axesList,(function(t){t.scale.setExtent(1/0,-1/0)})),t.eachSeries((function(o){if(M(o)){var n=b(o,t),r=n[0],a=n[1];if(!m(r,e)||!m(a,e))return;var s=this.getCartesian(r.componentIndex,a.componentIndex),l=o.getData(),c=s.getAxis("x"),d=s.getAxis("y");"list"===l.type&&(i(l,c,o),i(l,d,o))}}),this)},A.getTooltipAxes=function(t){var e=[],i=[];return r(this.getCartesians(),(function(o){var n=null!=t&&"auto"!==t?o.getAxis(t):o.getBaseAxis(),r=o.getOtherAxis(n);s(e,n)<0&&e.push(n),s(i,r)<0&&i.push(r)})),{baseAxes:e,otherAxes:i}};var L=["xAxis","yAxis"];function b(t,e){return a(L,(function(e){return t.getReferringComponents(e)[0]}))}function M(t){return"cartesian2d"===t.get("coordinateSystem")}v.create=function(t,e){var i=[];return t.eachComponent("grid",(function(o,n){var r=new v(o,t,e);r.name="grid_"+n,r.resize(o,e,!0),o.coordinateSystem=r,i.push(r)})),t.eachSeries((function(t){if(M(t)){var e=b(t),i=e[0],o=e[1],n=i.getCoordSysModel().coordinateSystem;t.coordinateSystem=n.getCartesian(i.componentIndex,o.componentIndex)}})),i},v.dimensions=v.prototype.dimensions=g.prototype.dimensions,f.register("cartesian2d",v);var w=v;t.exports=w},931:function(t,e,i){var o=i(367),n=i(987),r=i(467),a=i(412),s=a.getLayoutParams,l=a.mergeLayoutParam,c=i(1026),d=["value","category","time","log"];t.exports=function(t,e,i,a){o.each(d,(function(r){e.extend({type:t+"Axis."+r,mergeDefaultAndTheme:function(e,n){var a=this.layoutMode,c=a?s(e):{},d=n.getTheme();o.merge(e,d.get(r+"Axis")),o.merge(e,this.getDefaultOption()),e.type=i(t,e),a&&l(e,c,a)},optionUpdated:function(){"category"===this.option.type&&(this.__ordinalMeta=c.createByAxisModel(this))},getCategories:function(t){var e=this.option;if("category"===e.type)return t?e.data:this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:o.mergeAll([{},n[r+"Axis"],a],!0)})})),r.registerSubTypeDefaulter(t+"Axis",o.curry(i,t))}},987:function(t,e,i){var o=i(367),n={show:!0,zlevel:0,z:0,inverse:!1,name:"",nameLocation:"end",nameRotate:null,nameTruncate:{maxWidth:null,ellipsis:"...",placeholder:"."},nameTextStyle:{},nameGap:15,silent:!1,triggerEvent:!1,tooltip:{show:!1},axisPointer:{},axisLine:{show:!0,onZero:!0,onZeroAxisIndex:null,lineStyle:{color:"#333",width:1,type:"solid"},symbol:["none","none"],symbolSize:[10,15]},axisTick:{show:!0,inside:!1,length:5,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,showMinLabel:null,showMaxLabel:null,margin:8,fontSize:12},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}}},r={};r.categoryAxis=o.merge({boundaryGap:!0,deduplication:null,splitLine:{show:!1},axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"}},n),r.valueAxis=o.merge({boundaryGap:[0,0],splitNumber:5,minorTick:{show:!1,splitNumber:5,length:3,lineStyle:{}},minorSplitLine:{show:!1,lineStyle:{color:"#eee",width:1}}},n),r.timeAxis=o.defaults({scale:!0,min:"dataMin",max:"dataMax"},r.valueAxis),r.logAxis=o.defaults({scale:!0,logBase:10},r.valueAxis);var a=r;t.exports=a}}]);