(window.webpackJsonp=window.webpackJsonp||[]).push([[1039],{1575:function(t,e,n){},1702:function(t,e,n){"use strict";n(1575)},1734:function(t,e,n){"use strict";var i=n(47),s=n(46),r={name:"MyDvBorder9",mixins:[n(836).a],data:function(){return{border:["left-top","right-top","left-bottom","right-bottom"]}},computed:{svgStyle:function(){return Object(s.a)(Object(s.a)({},this.styles),{},{"box-shadow":"inset 0 0 30px 3px ".concat(this.dark),"border-radius":"15px"})}}},a=(n(1702),n(19)),l=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Box",t._b({staticClass:"my-dv-border-9",class:t.classes,attrs:{"default-width":"400px","default-height":"300px",padding:"0"}},"Box",t.$attrs,!1),[n("svg",{staticClass:"my-dv-border__svg",style:t.svgStyle,attrs:{width:t.width,height:t.height}},[n("polygon",{attrs:{fill:t.fill,points:"\n      4, 0 "+(t.width-4)+", 0 "+t.width+", 4 "+t.width+", "+(t.height-4)+" "+(t.width-4)+", "+t.height+"\n      4, "+t.height+" 0, "+(t.height-4)+" 0, 4\n    "}})]),t._v(" "),t._l(t.border,(function(e){return n("svg",{key:e,class:"my-dv-border-9__"+e+" my-dv-border-9__item",attrs:{width:"150px",height:"150px"}},[n("polygon",{attrs:{fill:t.light,points:"40, 0 5, 0 0, 5 0, 16 3, 19 3, 7 7, 3 35, 3"}})])})),t._v(" "),n("BoxContent",{attrs:{padding:t.$attrs.padding}},[t._t("default")],2)],2)}),[],!1,null,null,null).exports;e.a=Object(i.a)(l)},3144:function(t,e,n){"use strict";n.r(e);var i=n(464),s=n(1734),r=n(0);r.default.use(s.a),r.default.use(i.a);var a={},l=n(19),o=Object(l.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"600px"}},[e("my-dv-page",{attrs:{target:"parent",fit:""}},[e("my-dv-border9",{attrs:{"x-align":"center","y-align":"middle",width:"80%",height:"80%"}})],1)],1)}),[],!1,null,null,null);e.default=o.exports},721:function(t,e,n){},833:function(t,e,n){},834:function(t,e,n){"use strict";n(721)},836:function(t,e,n){"use strict";n(379),n(201);var i=n(418),s=n(502),r=n(47),a={name:"MyDvContent",props:{padding:String},computed:{styles:function(){return{padding:this.padding}}}},l=(n(834),n(19)),o=Object(l.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-dv-content",style:this.styles},[this._t("default")],2)}),[],!1,null,null,null).exports,d=Object(r.a)(o),u=n(725);n(833),e.a={mixins:[s.a,u.a],inheritAttrs:!1,components:{Box:i.a,BoxContent:d},props:{fill:{type:String,default:function(){var t,e;return(null==this||null===(t=this.page)||void 0===t||null===(e=t.settings)||void 0===e?void 0:e.fill)||"transparent"}},reverse:Boolean,opacity:{type:Number,default:1}},computed:{classes:function(){return{"my-dv-border":!0,"is-reverse":this.reverse}},styles:function(){return{opacity:this.opacity}}}}}}]);