(window.webpackJsonp=window.webpackJsonp||[]).push([[633],{1332:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n(416);var i=n(52),a=n(366),r=n(202),o=n.n(r),c=n(381),l=n(461),s=n(473);function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.props,n=e.children,r=e.$events,o=e.$bindings;return Object(s.a)({name:a.c.Group,props:Object(i.a)({name:"group",zOrder:1,type:a.c.Panel.Auto,toSpot:a.c.Spot.AllSides,toEndSegmentLength:30,fromEndSegmentLength:30,selectionAdorned:!1,$events:r,$bindings:o},t||{}),children:n||[]})}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=o()({},l.normal,t),r=e.props,s=e.shape,u=e.title,f=e.button,h=e.layout,p=e.$events,m=e.$bindings,g=f?Object(c.a)({name:a.c.Panel,props:{name:"GroupExpand",type:a.c.Panel.Auto,cursor:"pointer",width:14,height:14,margin:new a.c.Margin(0,0,0,5),$events:{click:function(e,t){var n,i=null===(n=t.diagram)||void 0===n?void 0:n.model,a=t.part;i&&a&&i.commit((function(){a.isSubGraphExpanded=!a.isSubGraphExpanded}),"toggle group expanded")}}},children:[Object(c.a)({name:a.c.Shape,props:Object(i.a)({name:"button",figure:"Rectangle",fill:n.stroke,strokeWidth:0},f)}),Object(c.a)({name:a.c.Shape,props:{figure:"MinusLine",stroke:n.textColor,strokeWidth:2,desiredSize:new a.c.Size(8,8),$bindings:[new a.c.Binding("figure","isSubGraphExpanded",(function(e){return e?"MinusLine":"PlusLine"})).ofObject()]}})]}):null,v=Object(c.a)({name:a.c.Shape,props:Object(i.a)({name:"shape",figure:"RoundedRectangle",fill:n.fill,stroke:n.stroke,strokeWidth:n.strokeWidth,strokeDashArray:[2]},s)}),b=f||u?Object(c.a)({name:a.c.Panel,props:{type:a.c.Panel.Horizontal,defaultAlignment:a.c.Spot.Left},children:[]}):null,O=Object(c.a)({name:a.c.Placeholder,props:{padding:new a.c.Margin(b?5:10,10,10,10)}}),y=Object(c.a)({name:a.c.Panel,props:{type:a.c.Panel.Vertical,defaultAlignment:a.c.Spot.Left}});return b&&f&&b.add(g),b&&u&&b.add(Object(c.a)({name:a.c.TextBlock,props:Object(i.a)({name:"title",text:"Title",alignment:a.c.Spot.TopLeft,alignmentFocus:new a.c.Spot(0,0,-4,-4),font:"14px Sans-Serif",stroke:n.color,margin:new a.c.Margin(3,5,3,5)},u)})),b&&y.add(b),y.add(O),d({props:Object(i.a)({layout:h,$events:p,$bindings:m},r||{}),children:[v,y]})}},2752:function(e,t,n){"use strict";n.r(t);var i=n(673),a=n(1332),r={components:{Diagram:i.a},data:function(){return{nodes:[{key:1,isGroup:!0},{key:2,group:1},{key:3,group:1},{key:4,group:1},{key:5},{key:6}],links:[{from:1,to:5},{from:2,to:6},{from:2,to:3},{from:2,to:4},{from:3,to:4}],options:{groupTemplate:Object(a.a)()}}}},o=n(18),c=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("Diagram",{attrs:{height:"200px",nodes:this.nodes,links:this.links,options:this.options}})}),[],!1,null,null,null);t.default=c.exports},366:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));n(202);var i=n(689),a=i.GraphObject.make;function r(e){for(var t=[],n=e.iterator;n.next();)t.push(n.value);return t}i.Shape.defineFigureGenerator("Terminator",(function(e,t,n){console.log(t,n);var a=new i.Geometry,r=new i.PathFigure(.25*t,0,!0);return a.add(r),r.add(new i.PathSegment(i.PathSegment.Arc,270,180,.75*t,.5*n,.25*t,.5*n)),r.add(new i.PathSegment(i.PathSegment.Arc,90,180,.25*t,.5*n,.25*t,.5*n)),a.spot1=new i.Spot(.23,0),a.spot2=new i.Spot(.77,1),a})),t.b=i},381:function(e,t,n){"use strict";n(199),n(21),n(54),n(84),n(32),n(368),n(55);var i=n(35),a=n(52),r=n(85),o=n(366);function c(e){var t=Object.create(null);return e?(Object.entries(e).filter((function(e){var t=Object(r.a)(e,2);t[0];return void 0!==t[1]})).forEach((function(e){var n=Object(r.a)(e,2),i=n[0],a=n[1];t[i]=a})),t):t}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.filter((function(e){return!!e}))}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.a)({},e),n=t.$hover,i=t.$selected,r=t.$bindings,o=t.$events,l=t.$disabled;return delete t.$hover,delete t.$selected,delete t.$bindings,delete t.$events,delete t.$disabled,{$normal:Object(a.a)(Object(a.a)({},c(t)),o),$hover:c(n),$selected:c(i),$bindings:r,$disabled:c(l)}}function d(e){var t=e.$normal,n=e.$hover,i=e.$selected,a=e.$disabled;return n?Object.entries(n).map((function(e){var n=Object(r.a)(e,2),c=n[0],l=n[1];return new o.c.Binding(c,"isHighlighted",(function(e,n){var r,o,s=null===(r=n.part)||void 0===r?void 0:r.isEnabled,d=a?a[c]:void 0;if(!s&&void 0!==d)return d;var u=null===(o=n.part)||void 0===o?void 0:o.isSelected,f=i[c];return u&&void 0!==f?f:e?l:t[c]})).ofObject()})):[]}function u(e){var t=e.$normal,n=e.$selected,i=e.$disabled;return n?Object.entries(n).map((function(e){var n=Object(r.a)(e,2),a=n[0],c=n[1];return new o.c.Binding(a,"isSelected",(function(e,n){var r,o=null===(r=n.part)||void 0===r?void 0:r.isEnabled,l=i?i[a]:void 0;return o||void 0===l?e?c:t[a]:l})).ofObject()})):[]}function f(e){var t=e.$normal,n=e.$selected,i=e.$hover,a=e.$disabled;return a?Object.entries(a).map((function(e){var a=Object(r.a)(e,2),c=a[0],l=a[1];return new o.c.Binding(c,"isEnabled",(function(e,a){var r,o;if(!e)return l;var s=null===(r=a.part)||void 0===r?void 0:r.isSelected,d=n[c];if(s&&void 0!==d)return d;var u=null===(o=a.part)||void 0===o?void 0:o.isHighlighted,f=i[c];return u&&void 0!==f?f:t[c]})).ofObject()})):[]}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray(e)?e.map((function(e){return"string"==typeof e?new o.c.Binding(e,e):e})):Object.entries(e).map((function(e){var t=Object(r.a)(e,2),n=t[0],i=t[1];return new o.c.Binding(n,i)}))}t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,n=e.props,a=e.children,r=s(n||{}),c=[].concat(a||[]);return o.a.apply(void 0,[t,r.$normal].concat(Object(i.a)(l(c)),Object(i.a)(h(r.$bindings)),Object(i.a)(d(r)),Object(i.a)(u(r)),Object(i.a)(f(r))))}},424:function(e,t,n){},425:function(e,t,n){"use strict";var i=n(53),a=(n(125),n(198),n(31)),r={name:"MySpin",props:{size:{type:String,default:"default",validator:function(e){return["default","large","small"].includes(e)}},delay:{type:Number,default:100},tip:String,loading:Boolean,fit:Boolean},data:function(){return this.timerId=null,{isDelayOver:!1}},watch:{loading:{immediate:!0,handler:function(e){e&&this.setupLoading()}}},computed:{spinClasses:function(){return Object(a.a)({},"is-".concat(this.size),!!this.size)},wrapperClasses:function(){return{"my-spin--nested":!!this.$slots.default,"is-fit":this.fit}},containerClasses:function(){return{"is-blur":this.loading&&this.isDelayOver}}},methods:{setupLoading:function(){var e=this;clearTimeout(this.timerId),this.isDelayOver=!1,this.delay>0?this.timerId=setTimeout((function(){e.isDelayOver=!0}),this.delay):this.isDelayOver=!0}},beforeDestroy:function(){clearTimeout(this.timerId)}},o=n(18),c=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"my-spin",class:e.wrapperClasses},[e.loading&&e.isDelayOver?n("div",{staticClass:"my-spin__loading",class:e.spinClasses},[e._t("dot",[e._m(0)]),e._v(" "),n("div",{staticClass:"my-spin__text"},[e._t("text",[e._v(e._s(e.tip))])],2)],2):e._e(),e._v(" "),e.$slots.default?n("div",{staticClass:"my-spin__container",class:e.containerClasses},[e._t("default")],2):e._e()])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"my-spin__dot"},[t("i",{staticClass:"my-spin__dot-item"}),this._v(" "),t("i",{staticClass:"my-spin__dot-item"}),this._v(" "),t("i",{staticClass:"my-spin__dot-item"}),this._v(" "),t("i",{staticClass:"my-spin__dot-item"})])}],!1,null,null,null).exports;t.a=Object(i.a)(c)},461:function(e,t,n){"use strict";n.r(t),n.d(t,"normal",(function(){return a})),n.d(t,"color1",(function(){return r})),n.d(t,"color2",(function(){return o})),n.d(t,"color3",(function(){return c})),n.d(t,"color4",(function(){return l})),n.d(t,"color5",(function(){return s})),n.d(t,"color6",(function(){return d}));var i=n(574),a={fill:"rgba(124,129,143,0.3)",stroke:"#7c818f",color:"#7c818f",textColor:"#ffffff",strokeWidth:2,opacity:1,hoverOpacity:.6,disabledOpacity:.1,geometryString:"F M927.51552691 838.62786695c0 47.2488403-13.46404948 87.64098874-40.51681552 121.42577956S827.28315862 1010.66849916 789.25968555 1010.66849916H234.74031445c-38.14814019 0-70.68625975-16.95472896-97.73902584-50.61485265-27.05276608-33.78479083-40.51681555-74.3016064-40.51681552-121.42577956 0-36.77680182 1.74533977-71.55892963 5.48535346-104.22171634 3.74001377-32.66278669 10.47203848-65.57490761 20.44540848-98.73636283 9.97336998-33.03678807 22.68941672-61.46089255 38.02347305-85.02297911s35.77946482-42.88549093 61.08689117-57.72087878c25.30742634-14.83538786 54.47953352-22.44008246 87.39165447-22.44008245 56.72354179 55.47687053 124.41779055 83.15297224 203.20741339 83.15297225s146.48387165-27.67610172 203.20741345-83.15297225c32.91212094 0 61.95956103 7.48002749 87.39165445 22.44008245 25.30742634 14.83538786 45.62816768 34.15879219 61.08689115 57.72087878 15.33405633 23.68675371 28.05010309 51.86152393 38.02347306 85.02297911 9.97336998 33.03678807 16.83006183 65.948909 20.44540846 98.73636283 3.4906795 32.66278669 5.23601926 67.44491451 5.23601923 104.22171634zM688.27931447 86.38643594C737.02416025 135.13128176 761.33424957 193.84949755 761.33424957 262.66575043s-24.31008934 127.53446866-73.0549351 176.27931446S580.8162529 512 512 512s-127.53446866-24.31008934-176.27931447-73.05493511S262.66575043 331.48200331 262.66575043 262.66575043s24.31008934-127.53446866 73.0549351-176.27931449S443.1837471 13.33150084 512 13.33150084s127.53446866 24.31008934 176.27931447 73.0549351z",imageSource:n.n(i).a,tags:["#0099cc","#ffb609","#ef5350","#00d156","#f431ba"],selectedFill:"rgba(64,158,255,0.1)",selectedStrokeWidth:2,selectedStroke:"#409eff"},r={fill:"rgba(91,155,213,0.3)",stroke:"#5b9bd5",color:"#5b9bd5"},o={fill:"rgba(237,125,49,0.3)",stroke:"#ed7d31",color:"#ed7d31"},c={fill:"rgba(255,192,0,0.3)",stroke:"#ffc000",color:"#ffc000"},l={fill:"rgba(68,114,196,0.3)",stroke:"#4472c4",color:"#4472c4"},s={fill:"rgba(112,173,71,0.3)",stroke:"#70ad47",color:"#70ad47"},d={fill:"rgba(21,28,50,0.3)",stroke:"#151c32",color:"#151c32"}},469:function(e,t,n){"use strict";n.r(t),n.d(t,"grid",(function(){return s})),n.d(t,"tree",(function(){return d})),n.d(t,"circular",(function(){return u})),n.d(t,"force",(function(){return f})),n.d(t,"layered",(function(){return h}));n(54),n(368),n(55);var i=n(85),a=n(52),r=n(381),o=n(366);function c(){o.b.ForceDirectedLayout.call(this)}o.b.Diagram.inherit(c,o.b.ForceDirectedLayout),c.prototype.makeNetwork=function(e){var t=o.b.ForceDirectedLayout.prototype.makeNetwork.call(this,e);return t.vertexes.each((function(e){var t=e.node;null!==t&&(e.isFixed=t.isSelected)})),t};var l=c;function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.a)({name:o.b.GridLayout,props:Object(a.a)({cellSize:new o.b.Size(60,60),spacing:new o.b.Size(20,20)},e)})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.a)({name:o.b.TreeLayout,props:Object(a.a)({angle:90,nodeSpacing:30},e)})}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.a)({name:o.b.CircularLayout,props:Object(a.a)({},e)})}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.a)({maxIterations:100,epsilonDistance:1,infinityDistance:1e3,arrangementSpacing:new o.b.Size(100,100),defaultElectricalCharge:150,defaultGravitationalMass:0,defaultSpringStiffness:.05,defaultSpringLength:100},e),n=new l;return Object.entries(t).forEach((function(e){var t=Object(i.a)(e,2),a=t[0],r=t[1];n[a]=r})),n}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.a)({name:o.b.LayeredDigraphLayout,props:Object(a.a)({},e)})}},473:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return s}));n(54),n(32),n(368),n(55);var i=n(85),a=n(52),r=n(381),o=n(366);function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,n=e.props,i=e.children,c=n.$events||{},l=c.mouseEnter,s=c.mouseLeave;return n.$events=Object(a.a)(Object(a.a)({},c),{},{mouseEnter:function(e,t){(t.part.isHighlighted=!0,t instanceof o.c.Group)?t.findSubGraphParts().each((function(e){++e.zOrder})):++t.part.zOrder;l&&l(e,t)},mouseLeave:function(e,t){(t.part.isHighlighted=!1,t instanceof o.c.Group)?t.findSubGraphParts().each((function(e){--e.zOrder})):--t.part.zOrder;s&&s(e,t)}}),Object(r.a)({name:t,props:n,children:i})}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.a)({name:o.c.Adornment,props:{name:"tooltip",type:o.c.Panel.Spot,zOrder:1},children:[Object(r.a)({name:o.c.Placeholder,props:{padding:5}}),Object(r.a)({name:o.c.Panel,props:{type:o.c.Panel.Auto,alignment:o.c.Spot.Top,alignmentFocus:o.c.Spot.Bottom},children:[Object(r.a)({name:o.c.Shape,props:{figure:"RoundedRectangle",fill:"rgba(0,0,0,0.5)",strokeWidth:0}}),Object(r.a)({name:o.c.TextBlock,props:Object(a.a)({text:"tooltip text",stroke:"#fff",margin:new o.c.Margin(1,5,1,5),wrap:o.c.TextBlock.WrapBreakAll},e)})]})]})}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new o.c.Map;return Object.entries(e).forEach((function(e){var n=Object(i.a)(e,2),a=n[0],r=n[1];t.add(a,r)})),t}},555:function(e,t,n){"use strict";n(54),n(198),n(368),n(55);var i=n(85),a=n(52),r=n(381),o=n(366);t.a=function(e,t,n){return{props:{options:[Object,Function],nodes:{type:Array,default:function(){return[]}},links:{type:Array,default:function(){return[]}},data:Object,onModelChange:Function,onReady:Function,delay:{type:Number,default:100}},data:function(){return{loading:!0}},watch:{nodes:function(e){this.loadNode(e)},links:function(e){this.loadLinks(e)},data:function(e){this.loadData(e)}},methods:{init:function(){var i=this,o="function"==typeof this.options?this.options(Object(r.a)({name:e,props:t()})):Object(r.a)({name:e,props:Object(a.a)(Object(a.a)({},t()),this.options)});o&&(o.div=n?this.$refs[n]:this.$el,o.delayInitialization((function(){i.commit(i.load,"init"),i.onReady&&i.onReady(o),i.$emit("_ready",o),i.loading=!1})),this.bind(o),this.diagram=o)},delayInit:function(){clearTimeout(this._delayId),this._delayId=setTimeout(this.init,this.delay)},merge:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.diagram&&Object.entries(t).forEach((function(t){var n=Object(i.a)(t,2),a=n[0],r=n[1];e.diagram[a]=r}))},bind:function(e){var t=this;this.handleModelChange=function(e){if(e.isTransactionFinished){var n=e.model.toIncrementalData(e);null!==n&&t.onModelChange&&t.onModelChange(n,e)}},e.addModelChangedListener(this.handleModelChange),Object.entries(this.$listeners).forEach((function(t){var n=Object(i.a)(t,2),a=n[0],r=n[1];e.addDiagramListener(a,r)}))},unbind:function(e){this.handleModelChange&&e.removeModelChangedListener(this.handleModelChange),Object.entries(this.$listeners).forEach((function(t){var n=Object(i.a)(t,2),a=n[0],r=n[1];e.removeDiagramListener(a,r)}))},loadNodes:function(e){var t,n=null===(t=this.diagram)||void 0===t?void 0:t.model;n&&(n.nodeDataArray=n.cloneDeep(e))},loadLinks:function(e){var t,n=null===(t=this.diagram)||void 0===t?void 0:t.model;n&&this.links&&n instanceof o.b.GraphLinksModel&&(n.linkDataArray=n.cloneDeep(e))},loadData:function(e){var t,n=null===(t=this.diagram)||void 0===t?void 0:t.model;n&&e&&n.assignAllDataProperties(n.modelData,this.data)},load:function(){this.loadNodes(this.nodes),this.loadLinks(this.links),this.loadData(this.data)},commit:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=null===(t=this.diagram)||void 0===t?void 0:t.model;if(a)return i>0?setTimeout((function(){a.commit(e,n)}),i):void a.commit(e,n)},resize:function(e){this.diagram&&this.diagram.requestUpdate(e)}},mounted:function(){this.delay?this.delayInit():this.init()},beforeDestroy:function(){clearTimeout(this._delayId),this.diagram&&(this.unbind(this.diagram),this.diagram.div=null,this.diagram=null)}}}},561:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));n(54),n(32),n(88),n(7),n(27),n(55),n(37),n(717);var i={jpg:"data:image/jpg;base64,",png:"data:image/png;base64,",csv:"data:text/csv;charset=utf-8,"};function a(e,t,n){var a=document.createElement("a");a.download=t,a.href=null===e?n:(i[e]||"")+n,a.click()}function r(e,t){var n=document.createElement("a");n.download=t,n.href=e,n.click()}function o(e,t){var n=new FileReader;n.onload=function(e){r(e.target.result,t)},n.readAsDataURL(e)}},573:function(e,t,n){},574:function(e,t){e.exports="data:image/png;base64,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"},673:function(e,t,n){"use strict";n(424),n(124);var i=n(425),a=n(365),r=n(366),o=n(126),c=n(381),l=n(469),s=n(744),d=n(745),u=n(555),f={props:{onLayoutChange:Function},methods:{layout:function(e,t){var n=this,i=l[e];if(i){this.loading=!0;clearTimeout(this._layoutId),this._layoutId=setTimeout((function(){var a=n.diagram;n.commit((function(){a.layout=i(t),n.load(),n.onLayoutChange&&n.onLayoutChange(e,t)})),n.loading=!1,n.uniform()}),100)}},uniform:function(){var e=this.diagram;e.alignDocument(r.b.Spot.Center,r.b.Spot.Center),e.zoomToFit()}}},h=(n(199),n(21),n(384),n(54),n(84),n(7),n(87),n(55),n(561)),p={methods:{addNode:function(e){var t=this.diagram.model;this.commit((function(){Array.isArray(e)?t.addNodeDataCollection(e):t.addNodeData(e)}),"addNode")},addLink:function(e){var t=this.diagram.model;this.commit((function(){Array.isArray(e)?t.addLinkDataCollection(e):t.addLinkData(e)}),"addLink")},removeNode:function(e){var t=this,n="function"==typeof e?this.findNodes(e):this.findNode(e);this.commit((function(){t.diagram.model.removeNodeDataCollection([].concat(n))}))},removeLink:function(e){var t=this,n="function"==typeof e?this.findLinks(e):this.findLink(e);this.commit((function(){t.diagram.model.removeLinkDataCollection([].concat(n))}))},findNode:function(e,t){var n=this.diagram.model,i=n.nodeDataArray||[],a="function"==typeof e?i.find(e):n.findNodeDataForKey(e);return t?this.diagram.findNodeForData(a):a},findLink:function(e,t){var n=this.diagram.model,i=n.linkDataArray||[],a="function"==typeof e?i.find(e):n.findLinkDataForKey(e);return t?this.diagram.findLinkForData(a):a},findNodes:function(e,t){var n=this,i=(this.diagram.model.nodeDataArray||[]).filter(e);return t?i.map((function(e){return n.diagram.findNodeForData(e)})):i},findLinks:function(e,t){var n=this,i=(this.diagram.model.linkDataArray||[]).filter(e);return t?i.map((function(e){return n.diagram.findLinkForData(e)})):i},allNodes:function(){return Object(r.d)(this.diagram.nodes)},allLinks:function(){return Object(r.d)(this.diagram.links)},findChild:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"parent",a=this.diagram.model;if(a instanceof r.c.GraphLinksModel){var o=this.findLinks((function(t){return t.from===e})),c=o.map((function(e){return t.findNode(e.to)}));return n?{nodes:c.map((function(e){return t.diagram.findNodeForData(e)})),links:o.map((function(e){return t.diagram.findLinkForData(e)}))}:{nodes:c,links:o}}if(a instanceof r.c.TreeModel){var l=a.nodeDataArray||[],s=l.filter((function(t){return t[i]===e}));return{nodes:n?s.map((function(e){return t.diagram.findNodeForData(e)})):s,links:n?this.allLinks().filter((function(t){var n;return(null===(n=t.fromNode)||void 0===n?void 0:n.key)===e})):[]}}},findRelated:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"parent",a=this.diagram.model;if(a instanceof r.c.GraphLinksModel){var o=this.findLinks((function(t){return t.from===e||t.to===e})),c=[];return o.forEach((function(e){var n=t.findNode(e.to);n&&c.push(n),(n=t.findNode(e.from))&&c.push(n)})),n?{nodes:c.map((function(e){return t.diagram.findNodeForData(e)})),links:o.map((function(e){return t.diagram.findLinkForData(e)}))}:{nodes:c,links:o}}if(a instanceof r.c.TreeModel){var l=a.nodeDataArray||[],s=this.findNode(e),d=s?this.findNode(s[i]):null,u=l.filter((function(t){return t[i]===e}));return d&&u.push(d),{nodes:n?u.map((function(e){return t.diagram.findNodeForData(e)})):u,links:n?this.allLinks().filter((function(t){var n,i;return(null===(n=t.fromNode)||void 0===n?void 0:n.key)===e||(null===(i=t.toNode)||void 0===i?void 0:i.key)===e})):[]}}},clear:function(){this.diagram.clear()},undo:function(){var e,t=null===(e=this.diagram)||void 0===e?void 0:e.undoManager;return!(!t||!t.canUndo())&&(t.undo(),!0)},redo:function(){var e,t=null===(e=this.diagram)||void 0===e?void 0:e.undoManager;return!(!t||!t.canRedo())&&(t.redo(),!0)},select:function(e){var t=this.diagram;if(t)if(e)t.selectCollection(e);else{var n=Object(r.d)(t.nodes),i=Object(r.d)(t.links),a=n.concat(i);t.selectCollection(a)}},unselect:function(){var e=this.diagram;e&&e.clearSelection()},selectInvert:function(){var e=this.diagram;if(e){var t=[],n=e.nodes,i=e.links,a=e.selection;n.each((function(e){a.has(e)||t.push(e)})),i.each((function(e){a.has(e)||t.push(e)})),this.select(t)}},hide:function(e){if(e){var t=e.iterator?Object(r.d)(e):e;this.commit((function(){t.forEach((function(e){e.visible=!1}))}))}},show:function(e){var t=this.diagram;if(t)if(e){var n=e.iterator?Object(r.d)(e):e;this.commit((function(){n.forEach((function(e){e.visible=!0}))}))}else{var i=t.nodes,a=t.links;this.commit((function(){i.each((function(e){e.visible=!0})),a.each((function(e){e.visible=!0}))}))}},toImage:function(e){if(this.diagram){var t=this.diagram.makeImageData(e);Object(h.a)(t,Date.now().toString())}},toJson:function(){var e,t=null===(e=this.diagram)||void 0===e?void 0:e.model;if(t){var n=t.toJson(),i=new Blob([n],{type:"application/octet-stream"});Object(h.b)(i,Date.now().toString()+".json")}}}},m=(n(573),{name:"Diagram",mixins:[Object(u.a)(r.b.Diagram,(function(){return{initialAutoScale:r.b.Diagram.Uniform,initialContentAlignment:r.b.Spot.Center,initialDocumentSpot:r.b.Spot.Center,autoScale:r.b.Diagram.None,hasHorizontalScrollbar:!1,hasVerticalScrollbar:!1,allowSelect:!0,"animationManager.isEnabled":!0,"undoManager.isEnabled":!0,"toolManager.mouseWheelBehavior":r.b.ToolManager.WheelZoom,"toolManager.hoverDelay":200,model:Object(c.a)({name:r.b.GraphLinksModel,props:{linkKeyProperty:"key"}}),nodeTemplate:Object(s.a)(),linkTemplate:Object(d.c)(),layout:Object(l.force)()}}),"content"),f,p],components:{MySpin:i.a},provide:function(){return{myDiagram:this}},props:{dark:Boolean,fit:Boolean,width:String,height:{type:String,default:"600px"}},data:function(){return{rect:{left:0,top:0,bottom:0,right:0}}},computed:{classes:function(){return{"is-dark":this.dark}},styles:function(){return{width:this.fit?"100%":this.width,height:this.fit?"100%":this.height}},contentStyle:function(){var e=this.rect,t=e.left,n=e.top,i=e.bottom,a=e.right;return{left:"".concat(t,"px"),top:"".concat(n,"px"),bottom:"".concat(i,"px"),right:"".concat(a,"px")}}},mounted:function(){this.proxyResize=Object(o.c)(this.resize,200,!1),Object(a.addResizeListener)(this.$refs.content,this.proxyResize)},beforeDestroy:function(){this.proxyResize&&Object(a.removeResizeListener)(this.$refs.content,this.proxyResize)}}),g=n(18),v=Object(g.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"my-go-diagram",class:this.classes,style:this.styles},[t("div",{ref:"content",staticClass:"my-go-diagram__content",style:this.contentStyle}),this._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:this.loading,expression:"loading"}],staticClass:"my-go-diagram__loading"},[t("div",{staticClass:"my-go-diagram__loading-inner"},[t("MySpin",{attrs:{loading:""}})],1)]),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);t.a=v.exports},744:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"e",(function(){return b})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return j}));n(416),n(21);var i=n(52),a=n(366),r=n(202),o=n.n(r),c=n(461),l=n(381),s=n(473),d="F M860.069521 429.487623h-73.242947v-170.422692C786.826574 116.337371 670.888872 0.272064 528.240764 0.272064c-142.650515 0-258.720638 116.065307-258.720638 258.792867v170.422692H196.339779c-35.281619 0-63.879618 28.612445-63.879618 63.91814v466.606275c0 35.368294 28.597999 63.983146 63.879618 63.983147h663.79234c35.29125 0 63.821834-28.614852 63.821835-63.983147V493.405763c-0.004815-35.310511-28.590776-63.91814-63.884433-63.91814zM564.114664 738.867504v101.889098c0 4.552855-3.765556 8.388233-8.385825 8.388233h-54.91355c-4.678053 0-8.446016-3.837785-8.446017-8.388233v-101.889098c-25.800316-13.201114-43.672259-39.665939-43.672259-70.68362 0-43.888947 35.613874-79.584681 79.481153-79.584682 43.932285 0 79.548567 35.695734 79.548566 79.584682 0.062599 31.020089-17.811752 57.482507-43.612068 70.68362z m123.476036-309.379881H368.883605v-166.202091c0-87.912723 71.55278-159.501618 159.417351-159.501618s159.287337 71.588895 159.287337 159.501618l0.002407 166.202091z";function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(l.a)({name:a.c.Shape,props:Object(i.a)({name:"lock",width:12,height:12,geometryString:d,alignment:a.c.Spot.BottomCenter,fill:"yellow",strokeWidth:1,$bindings:[new a.c.Binding("visible","movable",(function(e,t){return!t.part.movable})).ofObject()]},e)})}function f(e,t){return e?Object(l.a)({name:a.c.Panel,props:{type:a.c.Panel.Auto,name:"label",alignment:a.c.Spot.Center,margin:new a.c.Margin(3,0,0,0)},children:[Object(l.a)({name:a.c.Shape,props:{figure:"RoundedRectangle",strokeWidth:0,fill:t.stroke||"rgba(0,0,0,0.3)"}}),Object(l.a)({name:a.c.TextBlock,props:Object(i.a)({text:"",stroke:t.textColor,margin:new a.c.Margin(2,8,2,8),maxLines:1,overflow:a.c.TextBlock.OverflowEllipsis},e)})]}):null}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(l.a)({name:a.c.Panel,props:Object(i.a)({name:"tags",type:a.c.Panel.Horizontal,alignment:a.c.Spot.BottomCenter,itemArray:[],itemTemplate:Object(l.a)({name:a.c.Panel,props:{type:a.c.Panel.Auto,margin:new a.c.Margin(35,2,0,2)},children:[Object(l.a)({name:a.c.Shape,props:{figure:"RoundedRectangle",fill:"#ecebeb",strokeWidth:0,$bindings:[new a.c.Binding("fill","itemIndex",(function(e,n){var i=e%t.length;return t[i]||"#ecebeb"})).ofObject()]}}),Object(l.a)({name:a.c.TextBlock,props:{text:"黄",stroke:"#ffffff",margin:new a.c.Margin(0,2,0,2),$bindings:{text:"label",stroke:"color"}}})]})},e)})}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.props,n=e.shape,r=e.label;return Object(l.a)({name:a.c.Panel,props:Object(i.a)({type:a.c.Panel.Auto,name:"badge",alignment:a.c.Spot.TopCenter},t),children:[Object(l.a)({name:a.c.Shape,props:Object(i.a)({figure:"Circle",fill:"red",strokeWidth:0},n)}),Object(l.a)({name:a.c.TextBlock,props:Object(i.a)({stroke:"#fff",text:"0"},r)})]})}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=e.props,r=e.wrapper,o=e.tooltip,c=e.lock,d=e.tags,f=e.badge,m=e.children,g=void 0===m?[]:m,v=e.$events,b=e.$bindings;return Object(s.a)({name:a.c.Node,props:Object(i.a)({name:"node",zOrder:2,type:a.c.Panel.Spot,minSize:new a.c.Size(20,20),toolTip:o?Object(s.b)(o):null,selectionAdorned:!0,opacity:t.opacity,$hover:{opacity:t.hoverOpacity},$disabled:{opacity:t.disabledOpacity},$events:v,$bindings:b},n||{}),children:[g.length>1?Object(l.a)({name:a.c.Panel,props:Object(i.a)({type:a.c.Panel.Auto},r||{}),children:g||[]}):g[0],c?u(c):null,d?h(d,t.tags):null,f?p(f):null]})}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=o()({},c.normal,t),r=e.shape,s=e.label;return m(Object(i.a)(Object(i.a)({},e),{},{children:[r?Object(l.a)({name:a.c.Shape,props:Object(i.a)({name:"shape",fill:n.fill,stroke:n.stroke,strokeWidth:n.strokeWidth},r)}):null,s?Object(l.a)({name:a.c.TextBlock,props:Object(i.a)({name:"label",text:"text",stroke:n.color,margin:new a.c.Margin(2,5,2,5),maxLines:1,alignment:a.c.Spot.Center,verticalAlignment:a.c.Spot.Center,overflow:a.c.TextBlock.OverflowEllipsis},s)}):null].filter((function(e){return!!e}))}),n)}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=o()({},e,{shape:{figure:"Circle"}});return g(n,t)}function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=o()({},e,{props:{toSpot:a.c.Spot.AllSides,fromSpot:a.c.Spot.AllSides},shape:{figure:"RoundedRectangle"}});return g(n,t)}function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=o()({},e,{props:{toSpot:a.c.Spot.AllSides,fromSpot:a.c.Spot.AllSides},shape:{figure:"Diamond"}});return g(n,t)}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=o()({},c.normal,t),r=e.shape,s=e.label,d=e.icon;return m(Object(i.a)(Object(i.a)({},e),{},{wrapper:{type:a.c.Panel.Vertical},children:[Object(l.a)({name:a.c.Panel,props:{type:a.c.Panel.Auto},children:[r?Object(l.a)({name:a.c.Shape,props:Object(i.a)({name:"shape",figure:"Circle",fill:n.fill,stroke:n.stroke,strokeWidth:n.strokeWidth},r)}):null,Object(l.a)({name:a.c.Shape,props:Object(i.a)({name:"icon",strokeWidth:0,scale:.6,fill:n.color,desiredSize:new a.c.Size(n.width||50,n.height||50),margin:new a.c.Margin(5,5,5,5),geometryString:n.geometryString},d)})]}),f(s,n)]}),n)}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=o()({},c.normal,t),r=e.shape,s=e.label,d=e.image,u=r||{},h=u.width,p=void 0===h?64:h,g=u.height,v=void 0===g?64:g,b=u.figure,O=void 0===b?"Circle":b,y=Object(l.a)({name:a.c.Panel,props:{type:a.c.Panel.Spot,isClipping:!0},children:[Object(l.a)({name:a.c.Shape,props:{figure:O,width:p,height:v}}),Object(l.a)({name:a.c.Picture,props:Object(i.a)({name:"image",source:n.imageSource,width:p,height:v},d)})]});return m(Object(i.a)(Object(i.a)({},e),{},{wrapper:{type:a.c.Panel.Vertical},children:[Object(l.a)({name:a.c.Panel,props:{type:a.c.Panel.Spot,width:p+2*n.strokeWidth,height:v+2*n.strokeWidth},children:[r?Object(l.a)({name:a.c.Shape,props:Object(i.a)({figure:O,fill:n.fill,stroke:n.stroke,strokeWidth:2*n.strokeWidth},r)}):null,d?y:null]}),f(s,n)]}),n)}},745:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return h}));var i=n(52),a=n(366),r=n(202),o=n.n(r),c=n(461),l=n(381),s=n(473);function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=e.props,r=e.tooltip,o=e.children,c=e.$events,l=e.$bindings;return Object(s.a)({name:a.c.Link,props:Object(i.a)({name:"link",zOrder:1,selectionAdorned:!0,toolTip:r?Object(s.b)(r):null,opacity:t.opacity,$hover:{opacity:t.hoverOpacity},$disabled:{opacity:t.disabledOpacity},$events:c,$bindings:l},n||{}),children:o||[]})}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=o()({},c.normal,t),r=e.line,s=e.toArrow,u=e.fromArrow,f=e.label;return d(Object(i.a)(Object(i.a)({},e),{},{children:[Object(l.a)({name:a.c.Shape,props:Object(i.a)({name:"line",stroke:n.color,strokeWidth:n.strokeWidth},r)}),s?Object(l.a)({name:a.c.Shape,props:Object(i.a)({name:"toArrow",toArrow:"Standard",fill:n.color,stroke:n.color,strokeWidth:n.strokeWidth},s)}):null,u?Object(l.a)({name:a.c.Shape,props:Object(i.a)({name:"fromArrow",fromArrow:"Backward",fill:n.color,stroke:n.color,strokeWidth:n.strokeWidth},u)}):null,f?Object(l.a)({name:a.c.TextBlock,props:Object(i.a)({name:"label",text:"",segmentOffset:new a.c.Point(0,-12),segmentOrientation:a.c.Link.OrientUpright,segmentFraction:.5,segmentIndex:0,stroke:n.color,font:"14px sans-serif"},f)}):null]}),n)}function f(e,t){return u(o()({props:{curve:a.c.Link.Bezier},label:{segmentIndex:1}},e),t)}function h(e,t){return u(o()({props:{routing:a.c.Link.Orthogonal,curve:a.c.Link.JumpOver,corner:3},label:{segmentIndex:2}},e),t)}}}]);