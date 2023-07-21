(window.webpackJsonp=window.webpackJsonp||[]).push([[1800],{4328:function(s,a,t){"use strict";t.r(a);var n=t(19),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"新德汇地图应用类库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新德汇地图应用类库"}},[s._v("#")]),s._v(" 新德汇地图应用类库")]),s._v(" "),t("p",[s._v("基于Openlayers的地图应用Vue组件。内置了百度、高德、天地图瓦片，并支持与方正、超图、山海经纬、航天精一等PGIS厂商对接。\n包含文本、图形、html、热力图、轨迹回放等20个组件，支持与ECharts结合实现散点、飞行迁徙等基于地理位置的图表，满足项目常见需求。\n使用者不需要有地图相关专业知识，甚至不需要写任何JS代码就能实现通用功能")]),s._v(" "),t("p",[t("img",{attrs:{src:"/my/img/map/my-map.png",alt:"架构图"}})]),s._v(" "),t("h2",{attrs:{id:"开发指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发指南"}},[s._v("#")]),s._v(" 开发指南")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://newgateway.gitee.io/my/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://newgateway.gitee.io/my/guide/",target:"_blank",rel:"noopener noreferrer"}},[s._v("开发指南"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://newgateway.gitee.io/my/ui/components/",target:"_blank",rel:"noopener noreferrer"}},[s._v("基础组件库"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://newgateway.gitee.io/my/ui/map/",target:"_blank",rel:"noopener noreferrer"}},[s._v("地图应用类库"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"预览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#预览"}},[s._v("#")]),s._v(" 预览")]),s._v(" "),t("p",[t("img",{attrs:{src:"/my/img/map/2.jpg",alt:"info"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/my/img/map/3.jpg",alt:"info"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/my/img/map/4.jpg",alt:"info"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/my/img/map/5.jpg",alt:"info"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/my/img/map/6.jpg",alt:"info"}})]),s._v(" "),t("p",[t("img",{attrs:{src:"/my/img/map/7.jpg",alt:"info"}})]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("p",[s._v("推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i @xdh/my --save\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"快速上手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[s._v("#")]),s._v(" 快速上手")]),s._v(" "),t("p",[s._v("可通过以下两种使用 "),t("code",[s._v("My")])]),s._v(" "),t("h3",{attrs:{id:"一、采用项目工程模板创建项目【推荐】"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、采用项目工程模板创建项目【推荐】"}},[s._v("#")]),s._v(" 一、采用项目工程模板创建项目【推荐】")]),s._v(" "),t("p",[s._v("官网提供的基于Vue项目的一站式解决方案。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://gitee.com/newgateway/my-web.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("只需把工程模板项目获取下来就可以使用，包括全部功能，开箱即用。")]),s._v(" "),t("h3",{attrs:{id:"二、调用组件库功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、调用组件库功能"}},[s._v("#")]),s._v(" 二、调用组件库功能")]),s._v(" "),t("p",[s._v("如只需用到 "),t("code",[s._v("My")]),s._v(" 其中的某些组件，可以在已有的项目工程中安装，并完成配置。步骤：")]),s._v(" "),t("h4",{attrs:{id:"_1、安装组件库和相关插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装组件库和相关插件"}},[s._v("#")]),s._v(" 1、安装组件库和相关插件")]),s._v(" "),t("p",[s._v("安装组件")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i element-ui @xdh/my --save\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("安装项目依赖插件")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i babel-plugin-component node-sass sass-loader --save-dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_2、配置-babel-config-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、配置-babel-config-js"}},[s._v("#")]),s._v(" 2、配置 "),t("code",[s._v("babel.config.js")])]),s._v(" "),t("p",[s._v("组件采用了按需加载，需要 在"),t("code",[s._v("babel.config.js")]),s._v(" 加上插件，如：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  presets"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@vue/cli-plugin-babel/preset'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  plugins"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@xdh/my/core/babel.plugins'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h4",{attrs:{id:"_3、配置-vue-config-js"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、配置-vue-config-js"}},[s._v("#")]),s._v(" 3、配置 "),t("code",[s._v("vue.config.js")])]),s._v(" "),t("p",[s._v("需要在"),t("code",[s._v("vue.config.js")]),s._v("加上别名，如：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  transpileDependencies"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@xdh/my'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chainWebpack")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("chain")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    chain"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("resolve"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alias"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$ui'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@xdh/my/ui/lib'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h4",{attrs:{id:"_4、引用组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、引用组件"}},[s._v("#")]),s._v(" 4、引用组件")]),s._v(" "),t("p",[s._v("到此，你可以开始引入组件开始编码了，如：")]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("my-map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("my-map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token script"}},[t("span",{pre:!0,attrs:{class:"token language-javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("MyMap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$ui/map'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    components"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      MyMap\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);