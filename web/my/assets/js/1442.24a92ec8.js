(window.webpackJsonp=window.webpackJsonp||[]).push([[1442],{2535:function(e,n,t){var o={"./dashboard-analysis.vue":[3785,0,1,2,3,456],"./dashboard-monitor.vue":[3786,0,1,2,10,576],"./dashboard-workplace.vue":[3787,0,1,2,3,451],"./dv-01.vue":[2217,0,1,5,6,473],"./dv-02.vue":[2220,0,1,2,3,453],"./dv-03.vue":[2218,0,1,2,3,443],"./dv-04.vue":[2221,0,1,2,3,445],"./dv-05.vue":[2219,0,1,4,5,502],"./form-advance.vue":[3788,0,1,2,3,489],"./form-basic.vue":[2859,0,1,2,3,494],"./form-step.vue":[3789,0,1,3,11,591],"./layout.vue":[3790,0,1,2,10,520],"./list-basic.vue":[3791,0,1,2,3,461],"./list-card.vue":[3792,0,1,2,3,505],"./list-crud.vue":[3793,0,1,2,3,459],"./list-query.vue":[3794,0,1,2,3,462],"./list-tree.vue":[3795,0,1,2,3,499],"./login.vue":[3796,0,1,3,11,688],"./profile-advanced.vue":[3797,0,1,2,3,491],"./profile-basic.vue":[3798,0,1,2,3,498],"./search-list-app.vue":[3799,0,1,2,3,463],"./search-list-article.vue":[3800,0,1,2,3,465],"./search-list-project.vue":[3801,0,1,2,3,464]};function a(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],a=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(a)}))}a.keys=function(){return Object.keys(o)},a.id=2535,e.exports=a},4111:function(e,n,t){"use strict";t.r(n);t(4),t(12),t(17);var o={name:"PageLoader",props:{page:String,local:String,options:Object},data:function(){return{component:null}},mounted:function(){var e=this;t(2535)("./".concat(this.page,".vue")).then((function(n){e.component=n.default}))}},a=t(21),r=Object(a.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Demo",{attrs:{toggleText:"安装命令"},scopedSlots:e._u([{key:"desc",fn:function(){return[e._v("\n    npm run page "+e._s(e.page)+" "+e._s(e.local)+"\n  ")]},proxy:!0}])},[t("div",{staticClass:"page-loader"},[t("ClientOnly",[e.component?t(e.component,e._b({tag:"component"},"component",e.options,!1)):e._e(),e._v(" "),e.component?e._e():t("div",{staticClass:"page-loader__loading"},[e._v("正在努力加载中...")])],1)],1)])}),[],!1,null,"47aaa830",null);n.default=r.exports}}]);