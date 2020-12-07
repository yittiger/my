import network from '$ui/icons/go-network'
import circle from '$ui/icons/go-circle'
import excel from '$ui/icons/go-excel'
import grid from '$ui/icons/go-grid'
import hide from '$ui/icons/go-hide'
import image from '$ui/icons/go-image'
import invert from '$ui/icons/go-invert'
import json from '$ui/icons/go-json'
import org from '$ui/icons/go-org'
import redo from '$ui/icons/go-redo'
import select from '$ui/icons/go-select'
import undo from '$ui/icons/go-undo'
import view from '$ui/icons/go-view'
import visible from '$ui/icons/go-visible'
import zoomIn from '$ui/icons/go-zoom-in'
import zoomOut from '$ui/icons/go-zoom-out'
import shortestPath from '$ui/icons/orbit'
import search from '$ui/icons/search'
import inspector from '$ui/icons/edit'

// import connect from '$ui/icons/go-connect'
// import unlock from '$ui/icons/go-unlock'
// import showAll from '$ui/icons/go-show-all'
// import search from '$ui/icons/go-search'
// import lock from '$ui/icons/go-lock'
// import near from '$ui/icons/go-near'
// import far from '$ui/icons/go-far'

export default {
  '|': '|',
  circle: {
    name: 'circular',
    type: 'layout',
    ref: 'circular',
    tooltip: '环形布局',
    icon: {name: 'icon-go-circle', svg: true},
    svg: circle,
    options: {}
  },
  grid: {
    name: 'grid',
    type: 'layout',
    ref: 'grid',
    tooltip: '网格布局',
    icon: {name: 'icon-go-grid', svg: true},
    svg: grid,
    options: {}
  },
  network: {
    name: 'force',
    type: 'layout',
    ref: 'force',
    tooltip: '网络布局',
    icon: {name: 'icon-go-network', svg: true},
    svg: network,
    options: {}
  },
  tree: {
    name: 'tree',
    type: 'layout',
    ref: 'tree',
    tooltip: '组织结构布局',
    icon: {name: 'icon-go-org', svg: true},
    svg: org,
    options: {}
  },
  undo: {
    name: 'undo',
    type: 'undo',
    ref: 'undo',
    tooltip: '撤销',
    icon: {name: 'icon-go-undo', svg: true},
    svg: undo,
    options: {}
  },
  redo: {
    name: 'redo',
    type: 'redo',
    ref: 'redo',
    tooltip: '重做',
    icon: {name: 'icon-go-redo', svg: true},
    svg: redo,
    options: {}
  },
  uniform: {
    name: 'uniform',
    type: 'uniform',
    ref: 'uniform',
    tooltip: '最佳视图',
    icon: {name: 'icon-go-view', svg: true},
    svg: view,
    options: {}
  },
  json: {
    name: 'json',
    type: 'export',
    ref: 'json',
    tooltip: '导出JSON',
    icon: {name: 'icon-go-json', svg: true},
    svg: json,
    options: {}
  },
  image: {
    name: 'image',
    type: 'export',
    ref: 'image',
    tooltip: '导出图片',
    icon: {name: 'icon-go-image', svg: true},
    svg: image,
    options: {}
  },
  excel: {
    name: 'excel',
    type: 'export',
    ref: 'excel',
    tooltip: '导出Excel',
    icon: {name: 'icon-go-excel', svg: true},
    svg: excel,
    options: {}
  },
  select: {
    name: 'select',
    type: 'select',
    ref: 'select',
    tooltip: '全选',
    icon: {name: 'icon-go-select', svg: true},
    svg: select,
    options: {}
  },
  invert: {
    name: 'invert',
    type: 'select',
    ref: 'invert',
    tooltip: '反选',
    icon: {name: 'icon-go-invert', svg: true},
    svg: invert,
    options: {}
  },
  zoomIn: {
    name: 'in',
    type: 'zoom',
    ref: 'zoomin',
    tooltip: '放大',
    icon: {name: 'icon-go-zoom-in', svg: true},
    svg: zoomIn,
    options: {}
  },
  zoomOut: {
    name: 'out',
    type: 'zoom',
    ref: 'zoomout',
    tooltip: '缩小',
    icon: {name: 'icon-go-zoom-out', svg: true},
    svg: zoomOut,
    options: {}
  },
  hide: {
    name: 'hide',
    type: 'hide',
    ref: 'hide',
    tooltip: '隐藏选中',
    icon: {name: 'icon-go-hide', svg: true},
    svg: hide,
    options: {}
  },
  show: {
    name: 'show',
    type: 'show',
    ref: 'show',
    tooltip: '显示全部',
    icon: {name: 'icon-go-visible', svg: true},
    svg: visible,
    options: {}
  },
  shortestPath: {
    name: 'shortestPath',
    type: 'shortestPath',
    ref: 'shortestPath',
    tooltip: '最短路径',
    icon: {name: 'icon-orbit', svg: true},
    svg: shortestPath,
    options: {
      resultMode: 'select' // highlight or select
    }
  },
  search: {
    name: 'search',
    type: 'search',
    search: 'search',
    tooltip: '查找节点',
    icon: {name: 'icon-search', svg: true},
    svg: search,
    options: {
    }
  },
  inspector: {
    name: 'inspector',
    type: 'inspector',
    ref: 'inspector',
    tooltip: '数据编辑',
    icon: {name: 'icon-edit', svg: true},
    svg: inspector,
    options: {}
  }
}
