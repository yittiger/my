(window.webpackJsonp=window.webpackJsonp||[]).push([[849],{2454:function(t,e,n){},2785:function(t,e,n){"use strict";n(2454)},362:function(t,e,n){},3650:function(t,e,n){"use strict";n.r(e);n(806),n(125);var i=n(811),r=n(0),s={components:{MyLayout:i.a}};r.default.use(i.a);var o=s,a=(n(2785),n(18)),u=Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("my-layout",{scopedSlots:t._u([{key:"west",fn:function(){return[t._v("West")]},proxy:!0}])},[t._v(" "),n("div",[t._v("Main")])])}),[],!1,null,"209b67b4",null);e.default=u.exports},392:function(t,e,n){"use strict";var i=n(205),r=n(208),s=n(8),o=n(22),a=n(409),u=n(207),l=n(19),c=n(206),h=n(90),d=n(2),f=[].push,p=Math.min,g=!d((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(o(this)),s=void 0===n?4294967295:n>>>0;if(0===s)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,s);for(var a,u,l,c=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,g=new RegExp(t.source,d+"g");(a=h.call(g,i))&&!((u=g.lastIndex)>p&&(c.push(i.slice(p,a.index)),a.length>1&&a.index<i.length&&f.apply(c,a.slice(1)),l=a[0].length,p=u,c.length>=s));)g.lastIndex===a.index&&g.lastIndex++;return p===i.length?!l&&g.test("")||c.push(""):c.push(i.slice(p)),c.length>s?c.slice(0,s):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=o(this),s=null==e?void 0:e[t];return void 0!==s?s.call(e,r,n):i.call(String(r),e,n)},function(t,r){var o=n(i,t,this,r,i!==e);if(o.done)return o.value;var h=s(t),d=String(this),f=a(h,RegExp),v=h.unicode,b=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(g?"y":"g"),y=new f(g?h:"^(?:"+h.source+")",b),m=void 0===r?4294967295:r>>>0;if(0===m)return[];if(0===d.length)return null===c(y,d)?[d]:[];for(var w=0,x=0,R=[];x<d.length;){y.lastIndex=g?x:0;var _,O=c(y,g?d:d.slice(x));if(null===O||(_=p(l(y.lastIndex+(g?0:x)),d.length))===w)x=u(d,x,v);else{if(R.push(d.slice(w,x)),R.length===m)return R;for(var j=1;j<=O.length-1;j++)if(R.push(O[j]),R.length===m)return R;x=w=_}}return R.push(d.slice(w)),R}]}),!g)},409:function(t,e,n){var i=n(8),r=n(60),s=n(3)("species");t.exports=function(t,e){var n,o=i(t).constructor;return void 0===o||null==(n=i(o)[s])?e:r(n)}},442:function(t,e,n){var i=n(1),r=n(539);i({target:"Number",stat:!0,forced:Number.parseInt!=r},{parseInt:r})},539:function(t,e,n){var i=n(4),r=n(210).trim,s=n(211),o=i.parseInt,a=/^[+-]?0[Xx]/,u=8!==o(s+"08")||22!==o(s+"0x16");t.exports=u?function(t,e){var n=r(String(t));return o(n,e>>>0||(a.test(n)?16:10))}:o},793:function(t,e,n){},794:function(t,e,n){},795:function(t,e,n){},796:function(t,e,n){},806:function(t,e,n){},807:function(t,e,n){},811:function(t,e,n){"use strict";var i=n(53),r=(n(124),n(200),n(442),n(33),n(392),n(52)),s=n(31),o=(n(793),n(362),n(905)),a=n.n(o),u=(n(794),n(906)),l=n.n(u),c=(n(807),n(913)),h=n.n(c),d=(n(795),n(907)),f=n.n(d),p=(n(796),n(908)),g=n.n(p),v={north:g.a,default:f.a,south:h.a,east:l.a,west:l.a},b={name:"MyLayout",components:{Container:a.a,Header:g.a,Main:f.a,Footer:h.a,Aside:l.a},props:{fit:Boolean,border:Boolean,split:Boolean,direction:{type:String,validator:function(t){return["vertical","horizontal"].includes(t)}},north:Object,south:Object,east:Object,west:Object},data:function(){return{}},computed:{classes:function(){return Object(s.a)({"my-layout":!0,"is-fit":this.fit,"is-border":this.border,"is-split":this.split},"is-".concat(this.direction),!!this.direction)}},methods:{getDirection:function(){if(this.direction)return this.direction;var t=this.$slots,e=t.north,n=t.south,i=t.west,r=t.east,s=!i&&!r;return s||!s&&!(!e&&!n)?"vertical":"horizontal"},getRegionOptions:function(t){return Object(r.a)({},this[t]||{})},regionRender:function(t){var e=this.$createElement;if(this.$slots[t]){var n=this.getRegionOptions(t),i={north:"height",south:"height",west:"width",east:"width"}[t],r=Number.parseInt(void 0===n[i]?{north:60,south:60,west:256,east:256}[t]:n[i]);return this.$createElement(v[t],{class:["my-layout__region","my-layout__".concat(t),{"is-split":this.split,"is-border":this.border}],style:Object(s.a)({},i,"number"==typeof r?"".concat(r,"px"):r)},this.fit&&r?[e("div",{class:"my-layout__fit"},[this.$slots[t]])]:this.$slots[t])}}},render:function(){var t=this,e=arguments[0],n=this.$slots,i=n.north,r=n.south,s=n.west,o=n.east,a=this.getDirection(),u=function(){return s||o?e("Container",{class:"my-layout__wrapper",attrs:{direction:"horizontal"}},[[t.regionRender("west"),t.regionRender("default"),t.regionRender("east")]]):t.regionRender("default")},l=function(){return i||r?e("Container",{class:"my-layout__wrapper",attrs:{direction:"vertical"}},[[t.regionRender("north"),t.regionRender("default"),t.regionRender("south")]]):t.regionRender("default")};return e("Container",{attrs:{direction:a},class:this.classes},["vertical"===a?[this.regionRender("north"),u(),this.regionRender("south")]:[this.regionRender("west"),l(),this.regionRender("east")]])}},y=n(18),m=Object(y.a)(b,void 0,void 0,!1,null,null,null).exports;e.a=Object(i.a)(m)}}]);