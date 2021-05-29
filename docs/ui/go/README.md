# 快速上手

GoJS是一个JavaScript库，可以让您轻松地在现代Web浏览器中创建交互式图表。
 `$ui/gojs` 是为了简化使用方式进行的封装的vue组件库。
 
 一个简单的例子。
 
:::demo
```html
<template>
  <Diagram height="400px" :nodes="nodes" :links="links"></Diagram>
</template>
<script>
  import {Diagram} from '$ui/gojs'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1, text: 'node1'},
          {key: 2, text: 'node2'},
          {key: 3, text: 'node3'},
          {key: 4, text: 'node4'},
          {key: 5, text: 'node5'},
          {key: 6, text: 'node6'},
          {key: 7, text: 'node7'},
          {key: 8, text: 'node8'},
          {key: 9, text: 'node9'},
          {key: 10, text: 'node10'}
        ],
        links: [
          {from: 1, to: 2},
          {from: 1, to: 3},
          {from: 1, to: 4},
          {from: 1, to: 5},
          {from: 1, to: 6},
          {from: 2, to: 7},
          {from: 2, to: 8},
          {from: 2, to: 9},
          {from: 2, to: 10}
        ]
      }
    }
  }
</script>

```
:::

## 绑定数据


:::demo
```html
<template>
  <Diagram  height="400px" :nodes="nodes" :highlight-mode="'adjoin'" :links="links" :options="options"></Diagram>
</template>
<script>
  import {go, Diagram, circle, link} from '$ui/gojs'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1, text: 'node1'},
          {key: 2, text: 'node2'},
          {key: 3, text: 'node3'},
          {key: 4, text: 'node4'},
          {key: 5, text: 'node5'},
          {key: 6, text: 'node6'},
          {key: 7, text: 'node7'},
          {key: 8, text: 'node8'},
          {key: 9, text: 'node9'},
          {key: 10, text: 'node10'}
        ],
        links: [
          {from: 1, to: 2},
          {from: 1, to: 3},
          {from: 1, to: 4},
          {from: 1, to: 5},
          {from: 1, to: 6},
          {from: 2, to: 7},
          {from: 2, to: 8},
          {from: 2, to: 9},
          {from: 2, to: 10}
        ],
        options: {
          nodeTemplate: circle({
            label: {
              $bindings: {
                text: 'text'
              }
            }
          }),
          linkTemplate: link({
            toArrow: {},
            label: {
              $bindings: [
                new go.Binding('text', 'to', (v, o) => {
                  const {from, to} = o.part.data
                  return `link:${from}-${to}`
                })
              ]
            }
          })
        }
      }
    }
  }
</script>

```
:::

## 设置布局


:::demo
```html
<template>
  <Diagram height="400px" :nodes="nodes" :links="links" :options="options"></Diagram>
</template>
<script>
  import {Diagram, circular} from '$ui/gojs'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1, text: 'node1'},
          {key: 2, text: 'node2'},
          {key: 3, text: 'node3'},
          {key: 4, text: 'node4'},
          {key: 5, text: 'node5'},
          {key: 6, text: 'node6'},
          {key: 7, text: 'node7'},
          {key: 8, text: 'node8'},
          {key: 9, text: 'node9'},
          {key: 10, text: 'node10'}
        ],
        links: [
          {from: 1, to: 2},
          {from: 1, to: 3},
          {from: 1, to: 4},
          {from: 1, to: 5},
          {from: 1, to: 6},
          {from: 2, to: 7},
          {from: 2, to: 8},
          {from: 2, to: 9},
          {from: 2, to: 10}
        ],
        options: {
          layout: circular()
        }
      }
    }
  }
</script>

```
:::

## 设置模板

:::demo
```html
<template>
  <Diagram :nodes="nodes" :links="links" :options="options"></Diagram>
</template>
<script>

  import {Diagram, circle, diamond, icon, image, rectangle, corner, templateMap} from '$ui/gojs'
  import avatar from '$ui/gojs/sources/人员1.png'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1, text: 'node1', category: 'circle'},
          {key: 2, text: 'node2', category: 'diamond'},
          {key: 3, text: 'node3', category: 'icon'},
          {key: 4, text: 'node4', category: 'image'},
          {key: 5, text: 'node5', category: 'rectangle'}
        ],
        links: [
          {from: 1, to: 2},
          {from: 1, to: 3},
          {from: 1, to: 4},
          {from: 1, to: 5}
        ],
        options: {
          nodeTemplateMap: templateMap({
            circle: circle({
              label: {
                $bindings: {text: 'text'}
              }
            }),
            diamond: diamond({
              label: {
                $bindings: {text: 'text'}
              }
            }),
            icon: icon({
              shape: {},
              label: {
                $bindings: {text: 'text'}
              }
            }),
            image: image({
              shape: {},
              image: {
                source: avatar
              },
              label: {
                $bindings: {text: 'text'}
              }
            }),
            rectangle: rectangle({
              shape: {
                width: 100,
                height: 40
              },
              label: {
                $bindings: {text: 'text'}
              }
            })
          }),
          linkTemplate: corner({
            toArrow: true
          })
        }
      }
    }
  }
</script>

```
:::

## 设置主题

:::demo
```html
<template>
  <Diagram :nodes="nodes" :links="links" :options="options" dark></Diagram>
</template>
<script>

  import {Diagram, circle, diamond, icon, image, rectangle, corner, theme, templateMap} from '$ui/gojs'
  import avatar from '$ui/gojs/sources/人员1.png'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1, text: 'node1', category: 'circle'},
          {key: 2, text: 'node2', category: 'diamond'},
          {key: 3, text: 'node3', category: 'icon'},
          {key: 4, text: 'node4', category: 'image'},
          {key: 5, text: 'node5', category: 'rectangle'}
        ],
        links: [
          {from: 1, to: 2},
          {from: 1, to: 3},
          {from: 1, to: 4},
          {from: 1, to: 5}
        ],
        options: {
          nodeTemplateMap: templateMap({
            circle: circle({
              label: {
                $bindings: {text: 'text'}
              }
            }, theme.color1),
            diamond: diamond({
              label: {
                $bindings: {text: 'text'}
              }
            }, theme.color2),
            icon: icon({
              shape: {},
              label: {
                $bindings: {text: 'text'}
              }
            }, theme.color3),
            image: image({
              shape: {},
              image: {
                source: avatar
              },
              label: {
                $bindings: {text: 'text'}
              }
            }, theme.color4),
            rectangle: rectangle({
              shape: {
                width: 100,
                height: 40
              },
              label: {
                $bindings: {text: 'text'}
              }
            }, theme.color5)
          }),
          linkTemplate: corner({
            toArrow: true
          }, theme.color1)
        }
      }
    }
  }
</script>

```
:::


## 自定义关系图
> 参考案例： https://gojs.net/latest/samples/classHierarchy.html
:::demo
```html
<template>
  <Diagram height="600px" :nodes="nodes" :links="links" :options="options"></Diagram>
</template>
<script>
  import {$, go, Diagram} from '$ui/gojs' // , link 
  import tree from '$docs/data/tree.json'
  import 'gojs/extensions/HyperlinkText'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [],
        links: [],
        options: {
          nodeTemplate: this.cusNodeTemplate(), 
          linkTemplate: $(go.Link, {
              curve: go.Link.Bezier,
              toEndSegmentLength: 30, 
              fromEndSegmentLength: 30
            },
            $(go.Shape, { strokeWidth: 1.5 }) // the link shape, with the default black stroke
          ), 
          layout: $(go.TreeLayout, { nodeSpacing: 3 })
        }
      }
    },
    methods: {
      cusNodeTemplate() {
        return $(go.Node,
          $('HyperlinkText', 
            function(node) {
              return `http://newgateway.gitee.io/my/ui/components/${node.data.key}.html` 
            }, 
            $(go.Panel, 'Auto',
              $(go.Shape, { fill: '#1F4963', stroke: null }),
              $(go.TextBlock,
                {
                  font: 'bold 13px Helvetica, bold Arial, sans-serif',
                  stroke: 'white', 
                  margin: 3
                },
                new go.Binding('text', '', (o) => {
                  return o.label
                })
              )
            )
          )
        )
      },
      makeRelation() {
        this.nodes = tree.map((item) => {
          return {
            key: item.id,
            text: item.label,
            ...item
          }
        })
        const nodeMap = this.nodes.reduce((total, item) => {
          total[item.key] = []
          return total
        }, {})
        
        this.nodes.forEach((item) => {
          if (item.parentId) {
            nodeMap[item.parentId].push(item)
          }
        })
        const links = Object.entries(nodeMap).reduce((total, entry) => {
          if (entry[1].length) {
            const fromNode = this.nodes.find((item) => {
              return item.key === entry[0]
            })
            const links = entry[1].map((item) => {
              return {
                from: entry[0],
                to: item.key,
                props: {
                  fromNode: fromNode,
                  toNode: item
                }
              }
            })
            total = total.concat(links)
          }  
          return total
        }, []) 
        this.links = links
      }
    },
    mounted() { 
      this.makeRelation()
    }
  }
</script>
```
:::