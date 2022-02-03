# API

## creator
creator 函数 可以用于 生成各种 gojs 实例。

### creator 参数：
```
creator({
  name: goType, // gojs 实例类型 (如 go.Part / go.TextBlock 等)
  props: {}, // gojs 实例的配置项
  children: [] // gojs 实例的子实例
})
```

### 使用creator函数 与 gojs原版的对比
```javascript
// gojs 官方写法：
$(go.Node, go.Panel.Position,
  { background: 'lightgray' },
  $(go.TextBlock, 'node1', { background: 'lightgreen' })
)

// 使用creator
creator({
  name: go.Node,
  props: {
    type: go.Panel.Position, 
    background: 'lightgray'
  },
  children: [
    creator({
      name: go.TextBlock,
      props: {
        text: 'node2',
        background: 'lightgreen'
      }
    })
  ]
})  

```
虽然 使用creator 函数 生成节点时 代码比官方写法复杂，但是 creator 结构更清晰，在构建比较复杂结构的节点模板时，creator 函数更有优势。


:::demo
```html
<template>
  <Diagram height="400px" :links="[]" :nodes="nodes"  :options="options"></Diagram>
</template> 
<script>
  import { 
    $,  
    go,  
    Diagram,
    templateMap,
    layered 
  } from '$ui/gojs'
  import creator from '$ui/gojs/utils/creator'
  export default {
    mixins: [],
    components: {Diagram},
    props: {
    },
    data() {
      return {
        options: {
          layout: layered(),
          nodeTemplateMap: templateMap({
            origin: $(go.Node, go.Panel.Position,
              { background: 'lightgray' },
              $(go.TextBlock, '常规写法', { background: 'lightgreen' })
            ),

            creator: creator({
              name: go.Node,
              props: {
                type: go.Panel.Position, 
                background: 'lightgray'
              },
              children: [
                creator({
                  name: go.TextBlock,
                  props: {
                    text: 'creator写法',
                    background: 'lightgreen'
                  }
                })
              ]
            }),
            complexNode: $(go.Node, go.Panel.Auto,
              {},
              $(go.Shape, {strokeWidth: 2, stroke: 'red', fill: '#BCDEFF'}),
              $(go.Panel, 'Table', { row: 1, column: 0, stretch: go.GraphObject.Fill },
                new go.Binding('itemArray', 'data'),
                {
                  itemTemplate: $(go.Panel, 'Horizontal', {
                      margin: 4
                    },
                    new go.Binding('row', 'itemIndex', function(i) { return Math.floor((i / 2)) }).ofObject(),
                    new go.Binding('column', 'itemIndex', function(i) { return i % 2 }).ofObject(),
                    $(go.TextBlock,
                      { margin: 4, width: 20, height: 16, textAlign: 'center', alignment: go.Spot.Center, background: '#F75A2E', stroke: 'white', font: 'bold 12px sans-serif' },
                      new go.Binding('text', 'itemIndex', function(i) { return i + 1 }).ofObject()
                    ),
                    $(go.TextBlock,
                      { isMultiline: false, editable: false, font: '14px sans-serif' },
                      new go.Binding('text', 'name')
                    )
                  )    
                }
              )
            ),
            conplexNodeCreator: creator({
              name: go.Node,
              props: {
                type: go.Panel.Auto
              },
              children: [
                // 创建图形背景  
                creator({
                  name: go.Shape, 
                  props: {
                    strokeWidth: 2, stroke: 'red', fill: '#BCDEFF'
                  }
                }),
                // 创建表格Panel
                creator({
                  name: go.Panel,
                  props: {
                    type: go.Panel.Table,
                    row: 1, 
                    column: 0, 
                    stretch: go.GraphObject.Fill,
                    // 列表数据绑定
                    $bindings: [
                      new go.Binding('itemArray', 'data')
                    ],
                    // 列表单元格模板
                    itemTemplate: creator({
                      name: go.Panel,
                      props: {
                        type: go.Panel.Horizontal,
                        margin: 4,
                        $bindings: [
                          new go.Binding('row', 'itemIndex', function(i) { return Math.floor((i / 2)) }).ofObject(),
                          new go.Binding('column', 'itemIndex', function(i) { return i % 2 }).ofObject()
                        ]
                      },
                      children: [
                        // 单元格内数字标签
                        creator({
                          name: go.TextBlock,
                          props: {
                            margin: 4, 
                            width: 20, 
                            height: 16, 
                            textAlign: 'center', 
                            alignment: go.Spot.Center, 
                            background: '#F75A2E', 
                            stroke: 'white', 
                            font: 'bold 12px sans-serif',
                            $bindings: [
                              new go.Binding('text', 'itemIndex', function(i) { return i + 1 }).ofObject()
                            ]
                          }
                        }),
                        // 单元格内文字内容
                        creator({
                          name: go.TextBlock,
                          props: {
                            isMultiline: false, 
                            editable: false, 
                            font: '14px sans-serif',
                            $bindings: [
                              new go.Binding('text', 'name')
                            ]
                          }
                        })
                      ]
                    })
                  }
                })
              ]
            }) 
          })
        },
        nodes: [
          {key: 1, category: 'origin'},
          {key: 2, category: 'creator'},
          {
            key: 3, 
            category: 'complexNode', 
            data: [
              {name: '常规写法'}, 
              {name: '警员b'}, 
              {name: '警员c'}, 
              {name: '警员d'}, 
              {name: '警员e'}, 
              {name: '警员f'}, 
              {name: '警员g'}
            ]
          },
          {
            key: 4, 
            category: 'conplexNodeCreator', 
            data: [
              {name: 'creator写法'}, 
              {name: '警员2'}, 
              {name: '警员3'}, 
              {name: '警员4'}, 
              {name: '警员5'}, 
              {name: '警员6'}, 
              {name: '警员7'}
            ]
          }
           
        ]
      }
    }
  }
</script> 
```
:::

### creator 的 专属配置：
在 creator() 函数中 的 “props”配置中，预设了以下几个专属的配置项，
- $bindings：数据绑定
- $events： 绑定事件
- $gray： 绑定置灰状态（在预设节点模板中使用，绑定主题中的置灰效果）
- $selected：绑定选中状态（在预设节点模板中使用，绑定主题中的选中效果）
- $disabled：绑定禁用状态（在预设节点模板中使用，绑定主题中的禁用效果）
- $hover：绑定鼠标经过状态（在预设节点模板中使用，绑定主题中的鼠标经过效果）
> 上述所提到的主题 来自于 import {normal} from '$ui/go/template/theme'

```javascript
import {theme} from '$ui/go/template/theme'
creator({
  name: go.Node,
  props: {
    ......,
    $gray: { 
      opacity: theme.grayOpacity
    },
    $hover: {
      opacity: theme.hoverOpacity
    },
    $disabled: {
      opacity: theme.disabledOpacity
    },
    $selected: {
      opacity: theme.selectedOpacity
    },
    $events,
    $bindings
  }
})
```

## nodeTemplate 基础节点模板
mygo 关系图中的节点模板 基础构造函数, 继承于creator，参数为 “options”(配置) 和 “theme”(主题)

### options 的配置
| 配置名      | 说明    | 类型   | 
|---------- |-------- |------- |
| props | 节点（$(go.Node, {...})）的全局配置，可以覆盖其他配置 | object | 
| wrapper | Node节点下面第一个（展示为容器）子元素的配置， 用于配置背景边框等 | object | 
| tooltip | 配置是否显示提示语 | object | 
| lock | 配置是否 | object/boolean | 
| tags | 配置是否显示标签 | object/array | 
| badge | 配置是否显示数字提示 | object | 
| children | 给节点添加子元素 | array | 
| $events | 给节点绑定事件 | object |
| $bindings | 给节点绑定数据 | array/object |

### theme 主题
```javascript
const normal = {
  // 背景颜色
  fill: 'rgba(124,129,143,0.3)',
  // 边框样式
  stroke: '#7c818f',
  // 文本/icon颜色
  color: '#7c818f',
  // 形状外的文本颜色
  textColor: '#ffffff',
  strokeWidth: 2,
  opacity: 1,
  hoverOpacity: 1,
  grayOpacity: 0.25,
  selectedOpacity: 1,
  // 边框厚度
  disabledOpacity: 0.1,
  // 默认图标
  geometryString: defaultIcon,
  // 默认图片
  imageSource: defaultImage,
  // 标签颜色
  tags: ['#0099cc', '#ffb609', '#ef5350', '#00d156', '#f431ba'],

  selectedFill: 'rgba(64,158,255,0.1)',
  selectedStrokeWidth: 2,
  selectedStroke: '#409eff'
}
```