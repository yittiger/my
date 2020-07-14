const config = require('../../core/config')()
const utils = require('../../core/utils')
const core = require('../../core/index')
// const constant = require('../../core/constant')
const webpackExtend = require('../../core/config/webpack.docs.extend')
const nav = require('./nav')
const sidebar = require('./sidebar')

module.exports = {
  title: 'MyUI 4.x',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  description: 'MyUI是美亚柏科旗下新德汇出品的Web前端一站式项目工程框架，专注于公检法行业中台系统快速搭建，框架已在多个项目实战检验。',
  port: config.docsDevPort,
  dest: utils.join(core.MyRootPath, config.docsOutputDir, config.docsBaseUrl),
  base: config.docsBaseUrl,
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }],
    ['script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?c4e5f73318b5cb0c389e3d9a05f831cc";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    `],
    ['meta', {
      'http-equiv': 'Cache-Control',
      content: 'no-cache, no-store, must-revalidate'
    }],
    ['meta', {
      'http-equiv': 'Pragma',
      content: 'no-cache'
    }],
    ['meta', {
      'http-equiv': 'Expires',
      content: '0'
    }]
  ],
  shouldPrefetch: () => false,
  themeConfig: {
    logo: '/img/logo.png',
    sidebarDepth: 3,
    nav: nav,
    sidebar: sidebar
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: require('../../core/loaders/docs-extend-md-loader')
  },
  chainWebpack: webpackExtend,
  extraWatchFiles: [
    'nav.js',
    'sidebar.js'
  ]
}

