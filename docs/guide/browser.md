# 浏览器兼容性

`MyUI`的目标浏览器只适配了`Chrome`内核的浏览器，样式兼容到Chrome 49+

:::warning
在非目标浏览器中，部分组件可能会有样式兼容问题。
:::

如需要支持非目标浏览器，需要polyfill。 步骤如下：

- 安装 whatwg-fetch 依赖
```sh
npm i whatwg-fetch --save
```

- 在程序入口文件`/src/main.js`添加引用
```js 
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'whatwg-fetch'
```

