(window.webpackJsonp=window.webpackJsonp||[]).push([[1441],{2547:function(e,n,t){var o={"./dashboard-analysis.vue":[3744,0,1,2,3,454],"./dashboard-monitor.vue":[3745,0,1,2,8,553],"./dashboard-workplace.vue":[3746,0,1,2,3,448],"./dv-01.vue":[2236,0,1,5,6,472],"./dv-02.vue":[2239,0,1,2,3,450],"./dv-03.vue":[2237,0,1,2,3,443],"./dv-04.vue":[2240,0,1,2,3,445],"./dv-05.vue":[2238,0,1,4,5,492],"./form-advance.vue":[3747,0,1,2,3,478],"./form-basic.vue":[2874,0,1,2,3,481],"./form-step.vue":[3748,0,1,3,10,562],"./layout.vue":[3749,0,1,2,8,487],"./list-basic.vue":[3750,0,1,2,3,460],"./list-card.vue":[3751,0,1,2,3,488],"./list-crud.vue":[3752,0,1,2,3,458],"./list-query.vue":[3753,0,1,2,3,461],"./list-tree.vue":[3754,0,1,2,3,482],"./login.vue":[3755,0,1,3,10,631],"./profile-advanced.vue":[3756,0,1,2,3,480],"./profile-basic.vue":[3757,0,1,2,3,485],"./search-list-app.vue":[3758,0,1,2,3,462],"./search-list-article.vue":[3759,0,1,2,3,464],"./search-list-project.vue":[3760,0,1,2,3,463]};function a(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],a=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(a)}))}a.keys=function(){return Object.keys(o)},a.id=2547,e.exports=a},4057:function(e,n,t){"use strict";t.r(n);t(7);var o={name:"PageLoader",props:{page:String,local:String,options:Object},data:function(){return{component:null}},mounted:function(){var e=this;t(2547)("./".concat(this.page,".vue")).then((function(n){e.component=n.default}))}},a=t(18),r=Object(a.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("Demo",{attrs:{toggleText:"安装命令"},scopedSlots:e._u([{key:"desc",fn:function(){return[e._v("\n    npm run page "+e._s(e.page)+" "+e._s(e.local)+"\n  ")]},proxy:!0}])},[t("div",{staticClass:"page-loader"},[t("ClientOnly",[e.component?t(e.component,e._b({tag:"component"},"component",e.options,!1)):e._e(),e._v(" "),e.component?e._e():t("div",{staticClass:"page-loader__loading"},[e._v("正在努力加载中...")])],1)],1)])}),[],!1,null,"47aaa830",null);n.default=r.exports}}]);