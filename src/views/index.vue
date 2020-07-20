<template>
  <my-wrapper title="Hello MyUI" fit>

    <my-timer slot="actions" auto :interval="10" format="H:mm:ss.SSS"></my-timer>
    <MyGoDiagram style="height: 100%"
                 :init="init"
                 :nodes="nodes"
                 :links="links"></MyGoDiagram>
  </my-wrapper>
</template>

<script>
  import {MyGoDiagram} from '$ui/gojs'

  function mock(total) {
    const nodes = [], links = []
    for (let i = 0; i < total; i++) {
      nodes.push({
        key: i.toString()
      })
    }
    for (let i = 0; i < total; i++) {
      links.push({
        key: Math.random().toString(),
        from: i.toString(),
        to: Math.floor(Math.random() * total).toString()
      })
    }
    return {
      nodes,
      links
    }
  }

  export default {
    components: {
      MyGoDiagram
    },
    data() {
      const {nodes, links} = mock(1000)
      return {
        nodes: nodes,
        links: links
      }
    },
    methods: {
      init($, go) {
        const diagram = $(go.Diagram, {
          allowZoom: true,
          // autoScale: go.Diagram.UniformToFill,
          initialAutoScale: go.Diagram.Uniform,
          'toolManager.mouseWheelBehavior': go.ToolManager.WheelZoom
        })

        diagram.nodeTemplate = $(go.Node, 'Horizontal',
          {background: '#44CCFF'},
          $(go.TextBlock, 'Default',
            {margin: 12, stroke: '#fff'},
            new go.Binding('text', 'key'))
        )
        diagram.model = $(go.GraphLinksModel, {
          linkKeyProperty: 'key'
        })

        diagram.layout = $(go.ForceDirectedLayout)

        diagram.addDiagramListener('LayoutCompleted', () => {
          console.log('LayoutCompleted')
        })

        return diagram
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>

</style>
