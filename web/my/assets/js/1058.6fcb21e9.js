(window.webpackJsonp=window.webpackJsonp||[]).push([[1058],{1436:function(e,t,n){},2312:function(e,t,n){"use strict";var a=n(1436);n.n(a).a},2643:function(e,t,n){"use strict";n.r(t);var a=n(410),r=n.n(a),o=n(411),s=n.n(o),u=(n(1344),n(123),n(1346)),l=(n(553),n(555)),d=n(0),c={components:{MyDrag:l.a,MyDrop:u.a},data:function(){return{text:"请放置在这里"}},methods:{handleEnter:function(){this.text="已进入"},handleLeave:function(){this.text="已离开"},handleDrop:function(){this.text="已放置"}}};d.default.use(s.a),d.default.use(r.a),d.default.use(l.a),d.default.use(u.a);var i=c,f=(n(2312),n(18)),p=Object(f.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",[n("el-col",{attrs:{span:8}},[n("my-drag",[e._v("请把我拖到目标处")])],1),e._v(" "),n("el-col",{attrs:{span:16}},[n("my-drop",{on:{enter:e.handleEnter,leave:e.handleLeave,drop:e.handleDrop}},[e._v(e._s(e.text))])],1)],1)}),[],!1,null,"05152d43",null);t.default=p.exports}}]);