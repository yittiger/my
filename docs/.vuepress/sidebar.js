function sort(array) {
  array.sort(function (a, b) {
    return a > b ? 1 : -1
  })
  return array
}

function createMenus(title, children, isSort = true) {
  return {
    title: title,
    collapsable: true,
    children: isSort ? sort(children) : children
  }
}

module.exports = {
  '/element/': [
    createMenus('Basic', [
      'layout',
      'container',
      'color',
      'typography',
      'border',
      'icon',
      'button',
      'link'
    ]),
    createMenus('Form', [
      'radio',
      'checkbox',
      'input',
      'input-number',
      'select',
      'cascader',
      'switch',
      'slider',
      'time-picker',
      'date-picker',
      'datetime-picker',
      'upload',
      'rate',
      'color-picker',
      'transfer',
      'form'
    ]),
    createMenus('Data', [
      'table',
      'tag',
      'progress',
      'tree',
      'pagination',
      'badge'
    ]),
    createMenus('Notice', [
      'alert',
      'loading',
      'message',
      'message-box',
      'notification'
    ]),
    createMenus('Navigation', [
      'menu',
      'tabs',
      'breadcrumb',
      'page-header',
      'dropdown',
      'steps'
    ]),
    createMenus('Others', [
      'dialog',
      'tooltip',
      'popover',
      'popconfirm',
      'card',
      'carousel',
      'collapse',
      'timeline',
      'divider',
      'calendar',
      'image',
      'backtop',
      'infiniteScroll',
      'drawer'
    ])
  ],
  '/ui/components/': [
    createMenus('功能辅助', [
      'animate',
      'drag',
      'drop',
      'resize',
      'promise',
      'affix',
      'clipboard',
      'lazy',
      'watermark',
      'capture',
      'print',
      'sortable',
      'tree-connect',
      'responsive-col'
    ]),
    createMenus('基础元件', [
      'header',
      'spin',
      'empty',
      'icon',
      'typography',
      'skeleton',
      'result',
      'number',
      'date',
      'timer',
      'corner-mark'
    ]),
    createMenus('排版布局', [
      'float',
      'fixed',
      'flex',
      'layout',
      'pro',
      'slide-layout'
    ]),
    createMenus('容器修饰', [
      'panel',
      'wrapper',
      'dialog',
      'container',
      'tabs'
    ]),
    createMenus('导航菜单', [
      'menu',
      'navbar',
      'sidebar',
      'back-top',
      'contextmenu',
      'anchor',
      'radial-menu',
      'breadcrumb',
      'three-menu'
    ]),
    createMenus('数据录入', [
      'form',
      'filter',
      'form-item',
      'range',
      'editor',
      'tag-input',
      'tag-select',
      'tree-select',
      'edit-tags',
      'at-input',
      'cron',
      'login',
      'search-box',
      'location-picker'
    ]),
    createMenus('数据展示', [
      'detail',
      'avatar',
      'avatars',
      'list',
      'marquee',
      'table',
      'crud',
      'water-fall',
      'tag-canvas',
      'highlight',
      'card-list',
      'stat-card',
      'description',
      'key-val-list'
    ]),
    createMenus('动画效果', [
      'flip',
      'tag-canvas',
      'revolve',
      'wave',
      'particle',
      'svg-line',
      'popper'
    ])
  ],
  '/ui/charts/': [
    '',
    'chart',
    'line',
    'bar',
    'pie',
    'map',
    'radar',
    'cloud',
    'fill',
    'gl',
    'geojson'
  ],
  '/ui/map/': [
    '',
    'map',
    'geo',
    'palette',
    'china-map',
    createMenus('覆盖物组件', [
      'text',
      'image',
      'circle',
      'line',
      'link',
      'rectangle',
      'polygon',
      'html',
      'icon',
      'popup',
      'heat',
      'marker'

    ]),
    createMenus('控件组件', [
      'pointer',
      'placement',
      'layer',
      'overview',
      'zoom',
      'draw',
      'cluster',
      'panel',
      'scale',
      'drawer',
      'measure'
    ]),
    createMenus('动效组件', [
      'scatter',
      'flight',
      'track'
    ]),
    createMenus('工具函数', [
      'area-select',
      'drag',
      'svg-to-img',
      'parse-style'
    ])
  ],
  '/ui/go/': [
    '',
    'diagram',
    'nodes',
    'links',
    'group',
    'layout',
    'overview',
    'palette',
    'app',
    'api'
  ],
  '/ui/dv/': [
    '',
    createMenus('基础组件', [
      'page',
      'screen',
      'box',
      'loading',
      'header',
      'border',
      'adorn',
      'icon',
      'menu'
    ], false),
    createMenus('图表组件', [
      'line',
      'bar',
      'pictorial',
      'pie',
      'ring',
      'rings',
      'rank',
      'progress',
      'fill',
      'radar',
      'geo',
      'tags',
      'geo3d'
    ], false),
    createMenus('数据展示', [
      'title',
      'text',
      'number',
      'date',
      'timer',
      'list'
    ], false),
    createMenus('动效组件', [
      'starry'
    ], false)
  ],
  '/ui/pages/': [
    'layout',
    'login',
    'dashboard',
    'form',
    'search-list',
    'list',
    'profile',
    'dv'
  ],
  '/ui/widgets/': [
    'dict',
    'member-picker',
    'org-member-picker',
    'list-picker',
    'go-panel-node',
    'charts1'
  ],
  '/guide/': [
    createMenus('开发指南', [
      '/changelog',
      'browser',
      'config',
      'constant',
      'cmd',
      'access',
      'extension',
      'coder',
      'route',
      'app',
      'questions',
      'development'
    ], false),
    createMenus('内置资源', [
      'color',
      'theme',
      'vars'
    ], false),
    createMenus('进阶教程', [
      'messager'
    ], false),
    createMenus('第三方类库', [
      'axios'
    ], false)
  ]
}
