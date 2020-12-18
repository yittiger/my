# 综合应用

## 浅色
:::demo
```html
<template>
  <Diagram height="700px"
           :nodes="nodes"
           :links="links"
           :options="init"
           :on-model-change="handleModelChange">
    <Toolbar :search-prop="searchProp"></Toolbar>
    <StatusBar></StatusBar>
    <Palette :nodes="palettes" :options="init"></Palette>
    <Overview></Overview>
    <Sidebar :collapsed.sync="collapsed"></Sidebar>
  </Diagram>
</template>
<script>
  import {Diagram, Palette, Overview, StatusBar, Sidebar, Toolbar, templateMap, circle, link, theme} from '$ui/gojs'
  import {mockGraph} from '$ui/gojs/utils/mock'

  export default {
    components: {
      Diagram,
      Toolbar,
      StatusBar,
      Palette,
      Overview,
      Sidebar
    },
    data() {
      const {nodes, links} = mockGraph(100, 100, 3, 10)
      return {
        collapsed: true,
        nodes: nodes,
        links: links,
        searchProp: {
          nodeKeys: ['text', 'key'],
          linkKeys: ['text', 'key'],
          ignoreCase: true,
          mode: 'node,link',
          focusAnimation: true,
          focusScale: 1.2
        },
        palettes: [
          {text: 'default'},
          {category: 'color1', text: 'color1'},
          {category: 'color2', text: 'color2'},
          {category: 'color3', text: 'color3'},
          {category: 'color4', text: 'color4'},
          {category: 'color5', text: 'color5'},
          {category: 'color6', text: 'color6'}
        ]
      }
    },
    methods: {
      init(diagram) {
        diagram.nodeTemplateMap = this.createNodeMap()
        diagram.linkTemplate = link({toArrow: true})
        return diagram
      },
      createNodeMap() {
        const colors = [null, 'color1', 'color2', 'color3', 'color4', 'color5', 'color6']
        const map = {}
        colors.forEach(n => {
          map[n || ''] = circle({
            shape: {
              portId: '',
              fromLinkable: true,
              toLinkable: true,
              cursor: 'pointer',
              $bindings: ['fill']
            },
            label: {
              stroke: '#fff',
              $bindings: ['text']
            }
          }, theme[n])
        })
        return templateMap(map)
      },
      handleModelChange(e) {
        console.log('model change:', e)
      }
    }

  }
</script>
```
:::

## 深色
:::demo
```html
<template>
  <Diagram dark
           height="700px"
           :nodes="nodes"
           :links="links"
           :options="init"
           :on-model-change="handleModelChange">
    <Toolbar :search-prop="searchProp"></Toolbar>
    <StatusBar></StatusBar>
    <Palette :nodes="palettes" :options="init"></Palette>
    <Overview></Overview>
    <Sidebar :collapsed.sync="collapsed"></Sidebar>
  </Diagram>
</template>
<script>
  import {Diagram, Palette, Overview, StatusBar, Sidebar, Toolbar, templateMap, circle, link, theme} from '$ui/gojs'
  import {mockGraph} from '$ui/gojs/utils/mock'

  export default {
    components: {
      Diagram,
      Toolbar,
      StatusBar,
      Palette,
      Overview,
      Sidebar
    },
    data() {
      const {nodes, links} = mockGraph(100, 100, 3, 10)
      return {
        collapsed: true,
        nodes: nodes,
        links: links,
        searchProp: {
          nodeKeys: ['text', 'key'],
          linkKeys: ['text', 'key'],
          ignoreCase: true,
          mode: 'node,link',
          focusAnimation: true,
          focusScale: 1.5
        },
        palettes: [
          {text: 'default'},
          {category: 'color1', text: 'color1'},
          {category: 'color2', text: 'color2'},
          {category: 'color3', text: 'color3'},
          {category: 'color4', text: 'color4'},
          {category: 'color5', text: 'color5'},
          {category: 'color6', text: 'color6'}
        ]
      }
    },
    methods: {
      init(diagram) {
        diagram.nodeTemplateMap = this.createNodeMap()
        diagram.linkTemplate = link({toArrow: true})
        return diagram
      },
      createNodeMap() {
        const colors = [null, 'color1', 'color2', 'color3', 'color4', 'color5', 'color6']
        const map = {}
        colors.forEach(n => {
          map[n || ''] = circle({
            shape: {
              portId: '',
              fromLinkable: true,
              toLinkable: true,
              cursor: 'pointer',
              $bindings: ['fill']
            },
            label: {
              stroke: '#fff',
              $bindings: ['text']
            }
          }, theme[n])
        })
        return templateMap(map)
      },
      handleModelChange(e) {
        console.log('model change:', e)
      }
    }

  }
</script>
```
:::


## 图片资源
:::demo
```html
<template>
  <Diagram dark
           height="700px"
           :nodes="nodes"
           :links="links"
           :options="init"
           :on-model-change="handleModelChange">
    <Toolbar :search-prop="searchProp"></Toolbar>
    <StatusBar></StatusBar>
    <Overview></Overview>
    <Sidebar :collapsed.sync="collapsed" :width="400">
     <div style="overflow:auto;height:100%;">
         <div v-for="(item, idx) in palettes" :key="idx">
           <div style="padding: 0 15px;">{{item.name}}</div>
            <div :style="`position:relative;height:${item.height}px;`">
                <Palette :nodes="item.source" :options="initPalettes" :width="390"></Palette>
            </div>
         </div>
       </div>
    </Sidebar>
  </Diagram>
</template>
<script>
  import {Diagram, Palette, Overview, StatusBar, Sidebar, grid, Toolbar, templateMap, circle, link, theme, image} from '$ui/gojs'
  import { getSources } from '$ui/gojs/sources'
  export default {
    components: {
      Diagram,
      Toolbar,
      StatusBar,
      Palette,
      Overview,
      Sidebar
    },
    data() {
       const palettes = getSources({ column: 3,  rowHeight: 120, params: {category: 'image'}})
       console.log(palettes)
       palettes.forEach(item => {
        item.source.forEach(node => {
          node.source = require('$ui/gojs/sources/' + node.pic)
        })
      })
      return {
        collapsed: false,
        nodes: [],
        links: [],
        searchProp: {
          nodeKeys: ['text', 'key'],
          linkKeys: ['text', 'key'],
          ignoreCase: true,
          mode: 'node,link',
          focusAnimation: true,
          focusScale: 1.5
        },
        palettes: palettes
      }
    },
    methods: {
      init(diagram) {
        diagram.nodeTemplateMap = this.createNodeMap()
        diagram.linkTemplate = link({toArrow: true})
        return diagram
      },
      initPalettes(diagram) {
        diagram.nodeTemplateMap = this.createNodeMap()
        diagram.linkTemplate = link({toArrow: true, label: { $bindings: ['text']}}, theme.color1)
        diagram.layout = grid({
          cellSize: new go.Size(100, 100),
          spacing: new go.Size(0, 20),
          wrappingColumn: 3
        })
        return diagram
      },
      createNodeMap() {
        const map = {}
        map.image = image({
              props: {
                fromLinkable: true,
                toLinkable: true
              },
              image: {
                width: 80,
                height: 80,
                $bindings: ['source']
              },
              label: {
                fromLinkable: false,
                toLinkable: false,
                editable: true,
                $bindings: ['text']
              }
            })
        return templateMap(map)
      },
      handleModelChange(e) {
        console.log('model change:', e)
      }
    }

  }
</script>
```
:::

## 节点/链接/分组编辑
:::demo
```html
<template>
  <Diagram dark
           height="700px"
           :nodes="nodes"
           :links="links"
           :options="init"
           :on-model-change="handleModelChange">
    <Toolbar ref="toolbar" :inspector-prop="inspectorProp"></Toolbar>
    <StatusBar></StatusBar>
  </Diagram>
</template>
<script>
  import {Diagram, StatusBar, grid, Toolbar, templateMap, circle, image, icon, link, theme, group, force} from '$ui/gojs'
   const home = 'F M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z'
   const nodeCategorys = [
            {
              name: '默认',
              category: '',
              keyArray: [
                {
                  name: '文本',
                  key: 'text',
                  type: 'string'
                },
                {
                  name: '背景颜色',
                  key: 'fill',
                  type: 'color',
                  labelWidth: 100
                },
                {
                  name: '文字颜色',
                  key: 'color',
                  type: 'color',
                  labelWidth: 100
                }
              ]
            }, {
              name: '图标',
              category: 'icon',
              keyArray: [
                {
                  name: '文本',
                  key: 'text',
                  type: 'string'
                },
                {
                  name: '标签',
                  key: 'tags',
                  type: 'objectArray',
                  children: [
                      {
                          name: '文本',
                          key: 'label',
                          type: 'select',
                          options: [
                              {
                                  label: '男士',
                                  value: '男士'
                              }, {
                                  label: '女士',
                                  value: '女士'
                              }
                          ]
                      },
                      {
                        name: '背景色',
                        key: 'background',
                        type: 'color'
                      }
                  ]
                }
              ]
            },
            {
              name: '图片',
              category: 'image',
              keyArray: [
                {
                  name: '文本',
                  key: 'text',
                  type: 'string'
                },
                {
                  name: '统计',
                  key: 'count',
                  type: 'number'
                },
                {
                  name: '图片路径',
                  key: 'source',
                  type: 'string',
                  labelWidth: 100
                }
              ]
            }
          ]
const linkCategorys = [
   {
    name: '默认',
    category: '',
    keyArray: [
      {
        name: '链接颜色',
        key: 'stroke',
        type: 'color',
        labelWidth: 100
      }
    ]
  }
]
const groupCategorys = [
            {
              name: '默认',
              category: '',
              keyArray: [
                {
                  name: '标题',
                  key: 'title',
                  type: 'string'
                },
                {
                  name: '是否展开',
                  key: 'expand',
                  type: 'boolean',
                  labelWidth: 100
                }
              ]
            }
          ]
  export default {
    components: {
      Diagram,
      Toolbar,
      StatusBar
    },
    data() {
      return {
        nodes: [
          {key: 1, isGroup: true, title: '相同兴趣圈子', expand: true},
          {
            key: 2,
            category: '',
            fill: go.Brush.randomColor(),
            color: '#fff',
            text: '默认节点'
          },
          {
            key: 3,
            group: 1,
            category: 'icon',
            text: '图标节点',
            tags: [
              {
                label: '男士',
                color: '#fff',
                background: '#ff6600'
              }
            ]
          },
          {
            key: 4,
            group: 1,
            category: 'image',
            text: '图片节点',
            count: 10,
            source: require('$ui/gojs/sources/QQ1.png')
          }
        ],
        links: [
          {from: 2, to: 3, stroke: go.Brush.randomColor()},
          {from: 3, to: 4, stroke: go.Brush.randomColor()}
        ],
        inspectorProp: {
          nodeCategorys,
          linkCategorys,
          groupCategorys
        }
      }
    },
    methods: {
      init(diagram) {
        diagram.nodeTemplateMap = this.createNodeMap()
        diagram.groupTemplate = group({
            title: {
              $bindings: {
                text: 'title'
              }
            },
            button: true,
            layout: force(),
            $bindings: {
              isSubGraphExpanded: 'expand'
            }
          })
        diagram.linkTemplate = link({
          toArrow: { 
            $bindings: [
              'stroke',
               new go.Binding('fill', 'stroke')
               ] 
            }, 
          label: { 
            $bindings: ['text']
            },
           line: { $bindings: ['stroke'] }
           })
        setTimeout(() => {
         this.$refs.toolbar.$refs.inspector.handleClick()
      }, 1000)
        return diagram
      },
      createNodeMap() {
        const map = {}
        map[''] = circle({
              shape: {
                $bindings: ['fill']
              },
              label: {
                $bindings: ['text', new go.Binding('stroke', 'color')]
              }
            })
        map.image = image({
              image: {
                width: 80,
                height: 80,
                $bindings: ['source']
              },
              badge: {
                label: {
                  $bindings: {text: 'count'}
                }
              },
              label: {
                $bindings: ['text']
              }
            })
        map.icon = icon({
              icon: {
                width: 80,
                height: 80,
                geometryString: home
              },
              tags: {
                $bindings: [
                  new go.Binding('itemArray', 'tags')
                ]
              },
              label: {
                $bindings: ['text']
              }
            })
        return templateMap(map)
      },
      handleModelChange(e) {
        console.log('model change:', e)
      }
    }

  }
</script>
```
:::

