# MyGoTool 工具箱

::: tip 提示
MyGoTool 通常作为开发时的工具使用，组件[MyGoTool](/api.html?url=/my-go/doc/module-my-go-tool.html), 内部关联组件[MyGoViewer](/api.html?url=/my-go/doc/module-my-go-viewer.html),[MyGoDraft](/api.html?url=/my-go/doc/module-my-go-draft.html)
:::

## 基础用法

:::demo

```html
<template>
  <div>
    <my-go-tool ref="tool" :diagram-name="'dig1'"></my-go-tool>
    <my-go
      :diagram-name="'dig1'"
      :nodes="nodes"
      :links="links"
      :type="model"
      :node-template-map="nodeTemplateMap"
      :link-template="linkTemplate"
      :config="config"
      :layout="layout"
      @on-ready="diagramReady"
      height="200px"
    ></my-go>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        diagram: null,
        model: 'GraphLinksModel',
        nodes: [
          { key: 'A', category: 'a' },
          { key: 'B', category: 'b' },
          { key: 'C', category: 'c' }
        ],
        links: [
          { from: 'A', to: 'B' },
          { from: 'A', to: 'C' }
        ]
      }
    },
    methods: {
      config($, go) {
        return {
          initialContentAlignment: go.Spot.Center,
          'toolManager.hoverDelay': 100
        }
      },
      layout($, go) {
        return new go.TreeLayout()
      },
      diagramReady(diagram, $, go) {},
      nodeTemplate($, go, color) {
        return $(
          go.Node,
          'Auto',
          { background: color },
          $(
            go.TextBlock,
            'Default Text',
            { margin: 12, stroke: '#ffffff' },
            new go.Binding('text', 'key')
          ),
          new go.Binding('location').makeTwoWay(go.Point.stringify)
        )
      },
      linkTemplate($, go) {
        return $(
          go.Link,
          { routing: go.Link.Orthogonal, corner: 5 },
          $(go.Shape, { strokeWidth: 3, stroke: '#555' })
        )
      },
      nodeTemplateMap($, go, vm) {
        const a = this.nodeTemplate($, go, 'red', vm)
        const b = this.nodeTemplate($, go, 'blue', vm)
        const c = this.nodeTemplate($, go, 'green', vm)
        const map = new go.Map()
        map.add('a', a)
        map.add('b', b)
        map.add('c', c)
        return map
      }
    }
  }
</script>
```

:::
