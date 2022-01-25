# 面板节点模板工具函数

## 使用场景
扩展gojs 的使用场景，使gojs 节点能够展示更多节点信息

## 安装命令
```sh
npm run widgets go-panel-node
```
执行命令后，工具生成在项目的 **`".my/widgets/go-panel-node"`** 路径下；
有个“panel-node.js”文件， 是面板节点生成的工具函数。

## 面板节点结构
![形状节点元素构成示意图](../../.vuepress/assets/images/panel-frame.png)

## 面板节点构造函数配置项
```
panelNode({
  panel: {
    // 面板节点全局配置
  },
  header: {
    // 面板头部区域配置
  },
  body: {
    // 主体配置
    image: {
      // 主体左侧图片配置
    },
    info: {
      title: {
        // 主体标题配置 
      },
      detail: {
        // 主体内容配置
      }
    },
    more: {
      // 更多区域内容配置
      detail: {
        // 更多展示内容配置
      }           
    }
  },
  footer: {
    // 面板底部区域配置  
  }
})
```

## 常规使用
:::demo

```html
  <template>
  <Diagram height="400px" :links="[]" :nodes="nodes"  :options="options"></Diagram>
  </template> 
  <script>
  import {   
    go,  
    Diagram,
    templateMap, 
    layered 
  } from '$ui/gojs'
  import creator from '$ui/gojs/utils/creator'
  import {panelNode} from '$ui/widgets/go-panel-node/panel-node'
  import imgSrc from '$ui/gojs/sources/ATM.png'
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
            panel: panelNode({
              // 面板节点整体配置
              panel: { 
                width: 400
              },
              // 面板头部配置
              header: {
                textKey: 'header', 
                font: 'bold 16pt sans-serif' 
              },
              // 面板body配置
              body: {
                // 图片区域
                image: {
                  sourceKey: 'data.img', 
                  width: 100, 
                  stroke: '#B6B7B9'
                },
                // 信息区域配置
                info: {
                  // 信息标题配置
                  title: {
                    titleKey: 'title',
                    subTitleKey: 'data.subTitle' 
                  },
                  // 内容配置
                  detail: {
                    dataKey: 'data.list',
                    column: 3 
                  }
                } 
              } 
            })
          })   
        },
        nodes: [
          {
            key: '1',
            header: '常规面板节点',
            title: '信息内容标题',
            data: {
              subTitle: '(内容副标题)',
              img: imgSrc, 
              list: [
                {label: '标签', value: '内容1'}, 
                {label: '标签', value: '很长很长很长很长很长很长很长很长很长很长的内容', isRow: true}, 
                {label: '标签', value: '内容2'}, 
                {label: '标签', value: '内容3'}, 
                {label: '标签', value: '内容4'}
              ] 
            },
            category: 'panel'
          } 
        ] 
      }
    } 
  }
  </script>
```html
:::

## 色彩配置
根据 panel、 info.title、 info.detail 中的背景与字体颜色对面板元素进行颜色的修改配置
:::demo

```html
  <template>
  <Diagram height="400px" :links="[]" :nodes="nodes"  :options="options"></Diagram>
  </template> 
  <script>
  import {   
    go,  
    Diagram,
    templateMap, 
    layered 
  } from '$ui/gojs'
  import creator from '$ui/gojs/utils/creator'
  import {panelNode} from '$ui/widgets/go-panel-node/panel-node'
  import imgSrc from '$ui/gojs/sources/ATM.png'
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
            panel: panelNode({
              // 面板节点整体配置
              panel: { 
                width: 400,
                fill: '#061178' // 面板背景颜色
              },
            
              // 面板body配置
              body: {
                // 图片区域
                image: {
                  sourceKey: 'data.img', 
                  width: 100 
                },
                // 信息区域配置
                info: {
                  title: {
                    titleKey: 'title',
                    subTitleKey: 'data.subTitle',
                    titleProps: {
                      stroke: 'white'  // 标题文字颜色
                    },
                    subTitleProps: {
                      stroke: 'white' // 副标题文字颜色
                    }
                  }, 
                  // 内容配置
                  detail: {
                    dataKey: 'data.list',
                    column: 3,
                    color: 'white' // 内容文字颜色
                  }
                } 
              } 
            })
          })   
        },
        nodes: [
          {
            key: '1',
            header: '常规面板节点',
            title: '信息内容标题',
            data: {
              subTitle: '(内容副标题)',
              img: imgSrc, 
              list: [
                {label: '标签', value: '内容1'}, 
                {label: '标签', value: '很长很长很长很长很长很长很长很长很长很长的内容', isRow: true}, 
                {label: '标签', value: '内容2'}, 
                {label: '标签', value: '内容3'}, 
                {label: '标签', value: '内容4'}
              ] 
            },
            category: 'panel'
          } 
        ] 
      }
    } 
  }
  </script>
```html
:::

## Panel节点通用配置
```javascript 
panelNode({          
  panel: { 
    width: 300,
    fill: '#061178', // 面板背景颜色
    sideWidth: 0 // 左侧图片宽度设置为0 
  }
}) 
```

### panelNode的特殊配置参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|  width    | 面板节点宽度|  Number | -   |  200   |
|  fill    | 面板节点背景颜色 | String | -  |  white   |
|  sideWidth    | 定义面板内 左侧图片区域宽度 | Number | -  |  80   | 
|  bg    | 定义面板背景图形的参数(go.Shape的配置) | Object | -  |  -   | 
> sideWidth 左侧图片宽度 可以在panel的‘sideWidth’中预设置，默认为100。也可以读取 body.image 内的 “width” 来控制图片宽度（取最大值）。 **``如果 sideWidth = 0 且 不配置 body.image， 则不显示图片``**
#### 其他节点配置：
panel支持其他 gojs 中的 graphObject 配置

:::demo

```html
  <template>
  <Diagram height="400px" :links="links" :nodes="nodes"  :options="options"></Diagram>
  </template> 
  <script>
  import {   
    go,  
    Diagram,
    templateMap, 
    layered 
  } from '$ui/gojs'
  import creator from '$ui/gojs/utils/creator'
  import {panelNode} from '$ui/widgets/go-panel-node/panel-node' 
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
            panel: panelNode({
              // 面板节点整体配置
              panel: { 
                width: 300,
                fill: 'rgba(7, 18, 122, 0.7)', // '#061178', // 面板背景颜色
                sideWidth: 0, // 左侧图片宽度设置为0, 
                // 其他gojs 的节点配置  
                shadowOffset: new go.Point(14, 14),
                shadowBlur: 20
              }, 
              // 面板body配置
              body: { 
                // 信息区域配置
                info: { 
                  // 内容配置
                  detail: {
                    dataKey: 'data.list',
                    column: 3,
                    color: 'white' // 内容文字颜色
                  }
                } 
              } 
            }),
            bubble: panelNode({
              // 面板节点整体配置
              panel: { 
                width: 300, 
                sideWidth: 0, // 左侧图片宽度设置为0, 
                bg: {
                  figure: 'RoundedRectangle',
                  fill: 'white',
                  strokeWidth: 1,
                  stroke: 'red'
                }
              }, 
              // 面板body配置
              body: { 
                // 信息区域配置
                info: { 
                  // 内容配置
                  detail: {
                    dataKey: 'data.list',
                    column: 3
                    // color: 'white' // 内容文字颜色
                  }
                } 
              } 
            })
          })   
        },
        nodes: [
          {
            key: '1', 
            data: { 
              list: [
                {label: '标签', value: '内容1'}, 
                {label: '标签', value: '很长很长很长很长很长很长很长很长很长很长的内容', isRow: true}, 
                {label: '标签', value: '内容2'}, 
                {label: '标签', value: '内容3'}, 
                {label: '标签', value: '内容4'}
              ] 
            },
            category: 'panel'
          },
          {
            key: '2', 
            data: { 
              list: [
                {label: '标签', value: '内容1'}, 
                {label: '标签', value: '很长很长很长很长很长很长很长很长很长很长的内容', isRow: true}, 
                {label: '标签', value: '内容2'}, 
                {label: '标签', value: '内容3'}, 
                {label: '标签', value: '内容4'}
              ] 
            },
            category: 'bubble'
          }  
        ],
        links: [
          {from: '1', to: '2'}
        ] 
      }
    } 
  }
  </script>
```html
:::


## Header 区域配置
```javascript 
panelNode({          
  panel: {...},
  header: {
    textKey: 'header',
    fill: '#030852',
    font: 'bold 16pt sans-serif',
    color: 'white',
    tools: []
  }
}) 
```
### Header的特殊配置参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|  textKey    | 面板节点宽度|  Number | -   |  200   |
|  fill    | 面板节点背景颜色 | String | -  |  white   |
|  font    | 定义面板内 左侧图片区域宽度 | Number | -  |  80   | 
|  color   | 头部字体颜色 | Object | -  |  -   | 
|  tools   | 工具按钮列表  | Array | -  |  -   | 
|  tools.icon   | 按钮icon, 为svg path 的字符串  | String | -  |  -   |
|  tools.icon   | 按钮颜色  | String | -  |  -   |
|  tools.cb   | 按钮点击回调函数, 参数为 e, obj(gojs的节点实例)  | Function | -  |  -   | 
|  tools.name   | 按钮名称  | String | -  |  -   |

:::demo

```html
  <template>
  <Diagram height="400px" :links="links" :nodes="nodes"  :options="options"></Diagram>
  </template> 
  <script>
  import {   
    go,  
    Diagram,
    templateMap, 
    layered 
  } from '$ui/gojs'
  import creator from '$ui/gojs/utils/creator'
  import {panelNode} from '$ui/widgets/go-panel-node/panel-node'
  const icons = {
    edit: 'M6 10l2-1 7-7-1-1-7 7-1 2zM4.52 13.548c-0.494-1.043-1.026-1.574-2.069-2.069l1.548-4.262 2-1.217 6-6h-3l-6 6-3 10 10-3 6-6v-3l-6 6-1.217 2z',
    

    delete: 'M2 5v10c0 0.55 0.45 1 1 1h9c0.55 0 1-0.45 1-1v-10h-11zM5 14h-1v-7h1v7zM7 14h-1v-7h1v7zM9 14h-1v-7h1v7zM11 14h-1v-7h1v7z M13.25 2h-3.25v-1.25c0-0.412-0.338-0.75-0.75-0.75h-3.5c-0.412 0-0.75 0.338-0.75 0.75v1.25h-3.25c-0.413 0-0.75 0.337-0.75 0.75v1.25h13v-1.25c0-0.413-0.338-0.75-0.75-0.75zM9 2h-3v-0.987h3v0.987z',

    add: 'M15.5 6h-5.5v-5.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v5.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h5.5v5.5c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-5.5h5.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z'
  }
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
            panel: panelNode({
              // 面板节点整体配置
              panel: { 
                width: 300,
                fill: 'rgba(7, 18, 122, 1)', // '#061178', // 面板背景颜色
                sideWidth: 0 // 左侧图片宽度设置为0  
              }, 
              header: {
                textKey: 'header',
                fill: '#030852',
                font: 'bold 16pt sans-serif',
                color: 'white',
                tools: [
                  {
                    icon: icons.delete, 
                    color: 'blue', 
                    cb: this.panelToolClick,
                    name: '删除'
                  },
                  {
                    icon: icons.edit, 
                    color: 'blue', 
                    cb: this.panelToolClick,
                    name: '编辑'
                  },
                  {
                    icon: icons.add, 
                    color: 'blue', 
                    cb: this.panelToolClick,
                    name: '新增'
                  }
                ]
              },
              // 面板body配置
              body: { 
                // 信息区域配置
                info: { 
                  // 内容配置
                  detail: {
                    dataKey: 'data.list',
                    column: 3,
                    color: 'white' // 内容文字颜色
                  }
                } 
              } 
            })
            
          })   
        },
        nodes: [
          {
            key: '1',
            header: '节点header', 
            data: { 
              list: [
                {label: '标签', value: '内容1'}, 
                {label: '标签', value: '很长很长很长很长很长很长很长很长很长很长的内容', isRow: true}, 
                {label: '标签', value: '内容2'}, 
                {label: '标签', value: '内容3'}, 
                {label: '标签', value: '内容4'}
              ] 
            },
            category: 'panel'
          }  
        ],
        links: [] 
      }
    },
    methods: {
      panelToolClick(e, obj) {
        console.log(this, obj.part.location, obj.part.data)
        this.$alert(JSON.stringify(obj.part.data))
      }
    } 
  }
  </script>
```html
:::

## Body 区域配置
Body 分为三大模块： image / info / more

## Body.image 图片模块
- body.image 为Body 中的 图片配置项，可以是一个函数（函数为自定义图片）
- body.image 的宽度 以 panel.sideWidth 和 image.width 中的最大值来定义

### image的特殊配置参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|  sourceKey   | 对应数据内的图片url字段 | String | -   |  -   |
|  width   | 图片宽度|  Number | -   |  80   |
|  height   | 图片高度|  Number | -   |  -   |
|  stroke   | 边框颜色|  String | -   |  -   |
|  isRight  | 控制图片放右边| Boolean | -   |  200   |

:::demo

```html
<template>
  <Diagram height="400px" :links="links" :nodes="nodes"  :options="options"></Diagram>
  </template> 
  <script>
  import {   
    go,  
    Diagram,
    templateMap, 
    layered 
  } from '$ui/gojs'
  import creator from '$ui/gojs/utils/creator'
  import {panelNode} from '$ui/widgets/go-panel-node/panel-node' 
  import imgSrc from '$ui/gojs/sources/ATM.png'
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
            leftImg: panelNode({
              // 面板节点整体配置
              panel: { 
                width: 400,
                fill: '#061178' // 面板背景颜色
              }, 
              // 面板body配置
              body: {
                // 图片区域
                image: {
                  sourceKey: 'data.img', 
                  width: 35,
                  height: 35, 
                  isRight: true 
                },
                // 信息区域配置
                info: {
                  title: {
                    titleKey: 'title',
                    subTitleKey: 'data.subTitle',
                    titleProps: {
                      stroke: 'white'  // 标题文字颜色
                    },
                    subTitleProps: {
                      stroke: 'white' // 副标题文字颜色
                    }
                  }, 
                  // 内容配置
                  detail: {
                    dataKey: 'data.list',
                    column: 3,
                    color: 'white' // 内容文字颜色
                  }
                } 
              } 
            }),
            rightImg: panelNode({
              // 面板节点整体配置
              panel: { 
                width: 400,
                fill: '#061178' // 面板背景颜色
              },
            
              // 面板body配置
              body: {
                // 图片区域
                image: {
                  sourceKey: 'data.img',
                  width: 100
                },
                // 信息区域配置
                info: {
                  title: {
                    titleKey: 'title',
                    subTitleKey: 'data.subTitle',
                    titleProps: {
                      stroke: 'white'  // 标题文字颜色
                    },
                    subTitleProps: {
                      stroke: 'white' // 副标题文字颜色
                    }
                  }, 
                  // 内容配置
                  detail: {
                    dataKey: 'data.list',
                    column: 3,
                    color: 'white' // 内容文字颜色
                  }
                } 
              } 
            })
          })   
        },
        nodes: [
          {
            key: '1', 
            title: '左侧图片节点',
            data: {
              subTitle: '(内容副标题)',
              img: imgSrc, 
              list: [
                {label: '标签', value: '内容1'}, {label: '标签', value: '内容2'},
                {label: '标签', value: '很长很长很长很长很长很长很长很长很长很长的内容', isRow: true} 
              ] 
            },
            category: 'leftImg'
          },
          {
            key: '2', 
            title: '右侧图片节点',
            data: {
              subTitle: '(内容副标题)',
              img: imgSrc, 
              list: [
                {label: '标签', value: '内容1'}, {label: '标签', value: '内容2'},
                {label: '标签', value: '很长很长很长很长很长很长很长很长很长很长的内容', isRow: true},
                
              ] 
            },
            category: 'rightImg'
          }  
        ],
        links: [
          {from: '1', to: '2'}
        ] 
      }
    } 
  }
  </script>
```html
:::

## Body.info 内容模块
内容模块分为 “title” 和 “detail” 两个子模块

### Body.info.title

#### 特殊配置参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|  titleKey   | 标题对应节点数据的字段 | String | -   |  -   |
|  subTitleKey   | 副标题对应节点数据的字段 |  String | -   |  -   |
|  titleProps   | 标题文字（textBlock）的配置|  Object | -   |  -   |
|  subTitleProps  | 副标题文字（textBlock）的配置|  Object | -   |  -   | 

:::demo

```html
  <template>
  <Diagram height="400px" :links="links" :nodes="nodes"  :options="options"></Diagram>
  </template> 
  <script>
  import {   
    go,  
    Diagram,
    templateMap, 
    layered 
  } from '$ui/gojs'
  import creator from '$ui/gojs/utils/creator'
  import {panelNode} from '$ui/widgets/go-panel-node/panel-node' 
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
            onlyTitle: panelNode({
              // 面板节点整体配置
              panel: { 
                width: 300,
                fill: '#f7f3f3a6', // '#061178', // 面板背景颜色
                sideWidth: 0 
              }, 
              // 面板body配置
              body: {
                info: {
                  title: {
                    titleKey: 'title',
                    subTitleKey: 'data.subTitle'
                  } 
                } 
              } 
            }),
            colorTitle: panelNode({
              // 面板节点整体配置
              panel: { 
                width: 300, 
                sideWidth: 0, // 左侧图片宽度设置为0, 
                bg: {
                  figure: 'RoundedRectangle',
                  fill: 'white',
                  strokeWidth: 1,
                  stroke: 'red'
                }
              }, 
              // 面板body配置
              body: { 
                info: {
                  title: {
                    titleKey: 'title',
                    subTitleKey: 'data.subTitle',
                    titleProps: {
                      stroke: '#409eff', 
                      height: 40,
                      font: 'bold 30pt serif',
                      background: 'lightgreen',
                      verticalAlignment: go.Spot.Bottom
                    },
                    subTitleProps: {
                      stroke: '#fd2d18',
                      background: '#f9e603'
                    }
                  }  
                }
                
              } 
            })
          })   
        },
        nodes: [
          {
            key: '1', 
            title: '只有标题节点',
            data: { 
              subTitle: '副标题文字',   
            },
            category: 'onlyTitle'
          },
          {
            key: '2', 
            
            title: '红色主标题',
            data: { 
              subTitle: '蓝色副标题' 
            },
            category: 'colorTitle'
          }  
        ],
        links: [
          // {from: '1', to: '2'}
        ] 
      }
    } 
  }
  </script>
```html
:::

### Body.info.detail 
面板节点中显示数据内容的区域。数据以表格布局形式展示。
info 中的detail 可以为函数形式， 支持自定义生成数据显示内容。

#### detail的特殊配置参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|  dataKey   | 对应节点数据的内容字段 | String | -   |  -   |
|  column   | 数据展示列数 |  Number | -   |  -   |
|  color   | 内容字体颜色 | String | -   |  -   |
|  contentTemplate | 内容模板函数 | Function | -   |  -   |

#### dataKey 对应数据格式
detail 模块 渲染的 数据必须为一个对象数组，数据格式如下：
- label: [string] 字段数据标题
- value: [string] 字段数据内容
- isRow: [boolean] 是否占满整行 

:::demo 
```html
<template>
  <Diagram height="400px" :links="links" :nodes="nodes"  :options="options"></Diagram>
  </template> 
  <script>
  import {   
    go,  
    Diagram,
    templateMap, 
    layered 
  } from '$ui/gojs'
  import creator from '$ui/gojs/utils/creator'
  import {panelNode} from '$ui/widgets/go-panel-node/panel-node' 
  const AddIcon = 'M15.5 6h-5.5v-5.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v5.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h5.5v5.5c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-5.5h5.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z'
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
            normal: panelNode({
              // 面板节点整体配置
              panel: { 
                width: 400,
                fill: '#f7f3f3a6', // 面板背景颜色
                sideWidth: 0 
              }, 
              // 面板body配置
              body: {
                info: {
                  title: {
                    titleKey: 'title'
                  },
                  detail: {
                    dataKey: 'data.list',
                    column: 3 
                  }
                } 
              } 
            }),
            normal2: panelNode({
              // 面板节点整体配置
              panel: { 
                width: 300, 
                sideWidth: 0, // 左侧图片宽度设置为0, 
                bg: {
                  figure: 'RoundedRectangle',
                  fill: 'white',
                  strokeWidth: 1,
                  stroke: 'red'
                }
              }, 
              // 面板body配置
              body: { 
                info: {
                  title: {
                    titleKey: 'title'
                  },
                  detail: {
                    dataKey: 'data.list',
                    column: 2 
                  }
                }   
              } 
            }),
            custom: panelNode({
              // 面板节点整体配置
              panel: { 
                width: 400,
                fill: '#f7f3f3', // 面板背景颜色
                sideWidth: 0 
              }, 
              // 面板body配置
              body: {
                info: {
                  title: {
                    titleKey: 'title'
                  },
                  detail: {
                    dataKey: 'data.list',
                    column: 3,
                    contentTemplate: () => {
                      return [ 
                        creator({
                          name: go.Panel,
                          props: {
                            type: go.Panel.Horizontal,
                            defaultAlignment: go.Spot.Center,
                            stretch: go.GraphObject.Fill
                          },
                          children: [
                            creator({
                              name: go.Shape,
                              props: { 
                                fill: 'red',
                                strokeWidth: 0,
                                width: 12,
                                height: 12,
                                margin: 3,
                                geometry: go.Geometry.parse(AddIcon, true)
                              }
                            }),
                            creator({
                              name: go.TextBlock,
                              props: { 
                                font: '14px sans-serif', 
                                stroke: 'blue', 
                                alignment: go.Spot.Top,
                                $bindings: [ 
                                  new go.Binding('text', '', function(i) { 
                                    return i.value
                                  }),
                                  new go.Binding('width', '', function(i) {  
                                    return i._width - 20
                                  })
                                ] 
                              }
                            })
                          ]
                        })  
                      ]
                    } 
                  }
                } 
              } 
            })
          })   
        },
        nodes: [
          {
            key: '1',
            title: '正常字段展示',  
            data: { 
              list: [
                {label: '标签1', value: '字段内容1'}, 
                {label: '标签2', value: '字段内容2'}, 
                {label: '标签3', value: '字段内容3'}, 
                {label: '标签4', value: '字段内容4'}, 
                {label: '标签5', value: '字段内容5'},
                {label: '标签6', value: '字段内容6'},
                {label: '标签7', value: '字段内容7'},
                {label: '标签8', value: '字段内容8'},
              ],   
            },
            category: 'normal'
          },
          {
            key: '2', 
            title: '长字段展示', 
            data: { 
              list: [
                {label: '标签1', value: '字段内容1'}, 
                {label: '标签2', value: '字段内容2'}, 
                {label: '标签3', value: '字段内容3'}, 
                {label: '标签4', value: '字段内容4'},
                {label: '', value: '很长很长很长字段内容5', isRow: true}, 
                {label: '', value: '很长很长很长很长很长很长很长很长很长字段内容6', isRow: true}
              ],   
            },
            category: 'normal2'
          }, 
          {
            key: '3',  
            title: '自定义字段展示',
            data: { 
              list: [
                {label: '', value: '字段内容1'}, 
                {label: '', value: '字段内容2'}, 
                {label: '', value: '字段内容3'}, 
                {label: '', value: '字段内容4'} 
              ],   
            },
            category: 'custom'
          }
        ],
        links: [
          // {from: '1', to: '2'}
        ] 
      }
    } 
  }
</script>
```html
:::

## Body.more 
描述： more 模块是 body区域中 "info"内容 后面的补充内容区域。
- more 默认提供切换展示按钮，可以切换显示隐藏
- more 区域可以设置为默认显示且不可隐藏，可以用作 节点数据展示的补充布局。

### detail的特殊配置参数
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
|  hideButton   | 是否显示切换按钮 | Boolean | true/false  |  true   |
|  buttonColor   | 按钮颜色 |  String | -   |  -   |
|  defaultShow   | 区域是否默认显示 | Boolean | -   |  false   |
|  detail | 内容模板配置，同 body.info.detail |  | -   |  -   |

:::demo   
```html
<template>
  <Diagram height="400px" :links="[]" :nodes="nodes"  :options="options"></Diagram>
  </template> 
  <script>
  import {   
    go,  
    Diagram,
    templateMap, 
    layered 
  } from '$ui/gojs'
  import creator from '$ui/gojs/utils/creator'
  import {panelNode} from '$ui/widgets/go-panel-node/panel-node'
  import imgSrc from '$ui/gojs/sources/ATM.png'
   const AddIcon = 'M15.5 6h-5.5v-5.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5v5.5h-5.5c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h5.5v5.5c0 0.276 0.224 0.5 0.5 0.5h3c0.276 0 0.5-0.224 0.5-0.5v-5.5h5.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5z'
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
            panel: panelNode({
              // 面板节点整体配置
              panel: { 
                width: 400
              },
              // 面板头部配置
              header: {
                textKey: 'header', 
                font: 'bold 16pt sans-serif' 
              },
              // 面板body配置
              body: {
                // 图片区域
                image: {
                  sourceKey: 'data.img', 
                  width: 100, 
                  stroke: '#B6B7B9'
                },
                // 信息区域配置
                info: {
                  // 信息标题配置
                  title: {
                    titleKey: 'title',
                    subTitleKey: 'data.subTitle' 
                  },
                  // 内容配置
                  detail: {
                    dataKey: 'data.list',
                    column: 3 
                  }
                },
                more: {  
                  defaultShow: false,
                  detail: {
                    dataKey: 'data.other',
                    column: 1
                  } 
                }
              } 
            }),
            frame: panelNode({
              // 面板节点整体配置
              panel: { 
                width: 350,
                bg: {
                  figure: 'RoundedRectangle',
                  fill: 'white',
                  strokeWidth: 1,
                  stroke: 'red'
                }
              },
               
              // 面板body配置
              body: {
                // 图片区域
                image: {
                  sourceKey: 'data.img',
                  isRight: true, 
                  width: 60, 
                  stroke: '#B6B7B9'
                },
                // 信息区域配置
                info: {
                  // 信息标题配置
                  title: {
                    titleKey: 'title'  
                  },
                  // 内容配置
                  detail: {
                    dataKey: 'data.list',
                    column: 2 
                  }
                },
                more: { 
                  hideButton: true, 
                  defaultShow: true,
                  detail: {
                    dataKey: 'data.other',
                    column: 2
                  } 
                }
              } 
            }), 
            customMore: panelNode({
              // 面板节点整体配置
              panel: { 
                width: 350,
                bg: {
                  figure: 'RoundedRectangle',
                  fill: 'skyblue',
                  strokeWidth: 2,
                  stroke: 'yellow'
                }
              },
               
              // 面板body配置
              body: {  
                // 信息区域配置
                info: {
                  // 信息标题配置
                  title: {
                    titleKey: 'title'  
                  },
                  // 内容配置
                  detail: {
                    dataKey: 'data.list',
                    column: 2 
                  }
                },
                more: {  
                  defaultShow: true,
                  detail: () => {
                    return creator({
                      name: go.Shape,
                      props: {
                        fill: 'green',
                        strokeWidth: 0,
                        width: 38,
                        height: 38,
                        margin: 3,
                        alignment: go.Spot.Center,
                        geometry: go.Geometry.parse(AddIcon, true)
                      }
                    })
                  } 
                }
              } 
            })
          })   
        },
        nodes: [
          {
            key: '1',
            header: '常规面板节点',
            title: '可切换more内容',
            data: {
              subTitle: '(内容副标题)',
              img: imgSrc, 
              list: [
                {label: '标签', value: '内容1'}, 
                {label: '标签', value: '很长很长很长很长很长很长很长很长很长很长的内容', isRow: true}, 
                {label: '标签', value: '内容2'}, 
                {label: '标签', value: '内容3'}, 
                {label: '标签', value: '内容4'}
              ],
              other: [
                {
                  label: '', 
                  value: '很长很长很长很长很长很，长很长很长很长很长的内容, 很长很长很长很长很长很长很长很长很长很长的内容'
                },
                {
                  label: '', 
                  value: '内容，非常非常非常非常非常, 非常非常非常非常非常多' 
                }
              ]
            },
            category: 'panel'
          },
          {
            key: '2',
            header: '',
            title: 'more区域用于补充布局',
            data: {
              subTitle: '',
              img: imgSrc, 
              list: [
                {label: '标签', value: '内容1'},  
                {label: '标签', value: '内容2'}, 
                {label: '标签', value: '内容3'}, 
                {label: '标签', value: '内容4'}
              ],
              other: [
                {
                  label: '', 
                  value: '1.很长很长很长很长很长很长很长很长很长很长的内容, 很长很长很长很长很长很长很长很长很长很长的内容',
                  isRow: true
                },
                {
                  label: '', 
                  value: '2.内容，非常非常非常非常非常非常非常非常非常非常多',
                  isRow: true
                }
              ]
            },
            category: 'frame'
          },
          {
            key: '3',
            header: '',
            title: 'more区域自定义内容',
            data: {
              subTitle: '',
              img: '', 
              list: [
                {label: '标签', value: '内容1'},  
                {label: '标签', value: '内容2'}, 
                {label: '标签', value: '内容3'}, 
                {label: '标签', value: '内容4'}
              ],
              other: []
            },
            category: 'customMore'
          }    
        ] 
      }
    } 
  }
  </script>
```html
:::