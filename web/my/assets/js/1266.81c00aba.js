(window.webpackJsonp=window.webpackJsonp||[]).push([[1266],{2360:function(t,e,n){},2683:function(t,e,n){"use strict";n(2360)},3425:function(t,e,n){"use strict";n.r(e);var a=n(479),r=n.n(a),l=n(487),o=n.n(l),s=(n(1713),n(119),n(2092)),u=(n(621),n(622)),i=n(0),c={components:{MyDrag:u.a,MyDrop:s.a},data:function(){return{text:"请放置在这里"}},methods:{handleEnter:function(){this.text="已进入"},handleLeave:function(){this.text="已离开"},handleDrop:function(){this.text="已放置"}}};i.default.use(o.a),i.default.use(r.a),i.default.use(u.a),i.default.use(s.a);var d=c,h=(n(2683),n(20)),f=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("el-col",{attrs:{span:8}},[n("my-drag",[t._v("请把我拖到目标处")])],1),t._v(" "),n("el-col",{attrs:{span:16}},[n("my-drop",{attrs:{"active-highlight":"","enter-highlight":""},on:{enter:t.handleEnter,leave:t.handleLeave,drop:t.handleDrop}},[t._v(t._s(t.text))])],1)],1)}),[],!1,null,"425b1fe1",null);e.default=f.exports}}]);