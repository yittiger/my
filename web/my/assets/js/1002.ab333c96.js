(window.webpackJsonp=window.webpackJsonp||[]).push([[1002],{1036:function(t,e,s){"use strict";var _=s(0);e.a=new _.default({})},1037:function(t,e,s){"use strict";s.d(e,"a",(function(){return _}));var _="ELEMENT_THEME_USER_CONFIG_UPDATE"},1623:function(t,e,s){},2238:function(t,e,s){"use strict";s(1623)},3534:function(t,e,s){"use strict";s.r(e);s(54),s(7),s(33),s(87),s(58);var _=s(1036),n=s(1037),i=["$--font-size-extra-large","$--font-size-large","$--font-size-medium","$--font-size-base","$--font-size-small","$--font-size-extra-small"],a={font_size_extra_large:"20px",font_size_large:"18px",font_size_medium:"16px",font_size_base:"14px",font_size_small:"13px",font_size_extra_small:"12px"},l={created:function(){_.a.$on(n.a,this.setGlobal)},mounted:function(){this.setGlobal()},methods:{tintColor:function(t){function e(e,s){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return tintColor(t,e)})),setGlobal:function(){window.userThemeConfig&&(this.global=window.userThemeConfig.global)}},data:function(){return{global:{},font_size_extra_large:"",font_size_large:"",font_size_medium:"",font_size_base:"",font_size_small:"",font_size_extra_small:""}},watch:{global:{immediate:!0,handler:function(t){var e=this;i.forEach((function(s){var _=s.replace("$--","").replace(/-/g,"_");t[s]?e[_]=t[s]:e[_]=a[_]}))}}}},o=(s(2238),s(18)),r=Object(o.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",{staticClass:"demo-typo-size"},[s("tbody",[t._m(0),t._v(" "),s("tr",{style:{fontSize:t.font_size_extra_small}},[s("td",[t._v("辅助文字")]),t._v(" "),s("td",{staticClass:"color-dark-light"},[t._v(t._s(t.font_size_extra_small)+" Extra Small")]),t._v(" "),s("td",[t._v("用 Element 快速搭建页面")])]),t._v(" "),s("tr",{style:{fontSize:t.font_size_small}},[s("td",[t._v("正文（小）")]),t._v(" "),s("td",{staticClass:"color-dark-light"},[t._v(t._s(t.font_size_small)+" Small")]),t._v(" "),s("td",[t._v("用 Element 快速搭建页面")])]),t._v(" "),s("tr",{style:{fontSize:t.font_size_base}},[s("td",[t._v("正文")]),t._v(" "),s("td",{staticClass:"color-dark-light"},[t._v(t._s(t.font_size_base)+" Base")]),t._v(" "),s("td",[t._v("用 Element 快速搭建页面")])]),t._v(" "),s("tr",{style:{fontSize:t.font_size_medium}},[s("td",[t._v("小标题")]),t._v(" "),s("td",{staticClass:"color-dark-light"},[t._v(t._s(t.font_size_medium)+" Medium")]),t._v(" "),s("td",[t._v("用 Element 快速搭建页面")])]),t._v(" "),s("tr",{style:{fontSize:t.font_size_large}},[s("td",[t._v("标题")]),t._v(" "),s("td",{staticClass:"color-dark-light"},[t._v(t._s(t.font_size_large)+" large")]),t._v(" "),s("td",[t._v("用 Element 快速搭建页面")])]),t._v(" "),s("tr",{style:{fontSize:t.font_size_extra_large}},[s("td",[t._v("主标题")]),t._v(" "),s("td",{staticClass:"color-dark-light"},[t._v(t._s(t.font_size_extra_large)+" Extra large")]),t._v(" "),s("td",[t._v("用 Element 快速搭建页面")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("层级")]),this._v(" "),e("td",[this._v("字体大小")]),this._v(" "),e("td",{staticClass:"color-dark-light"},[this._v("举例")])])}],!1,null,"2d06ba8a",null);e.default=r.exports}}]);