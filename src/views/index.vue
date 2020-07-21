<template>
  <my-wrapper title="Hello MyUI" fit>
    <template v-slot:actions>
      <el-button size="small" @click="addNodes">增加节点</el-button>
      <el-button size="small" @click="changeLayout">更换布局</el-button>
      <my-timer auto :interval="10" format="H:mm:ss.SSS"></my-timer>
    </template>

    <Diagram style="height: 100%"
             @ChangedSelection="handleEvent"
             ref="go"
             :init="init"
             :on-model-change="onModelChange"
             :nodes="nodes"
             :links="links"></Diagram>
  </my-wrapper>
</template>

<script>
  import {Diagram, go, $} from '$ui/gojs'

  function mock(total) {
    const nodes = [], links = []
    for (let i = 0; i < total; i++) {
      nodes.push({
        key: i
      })
    }
    for (let i = 0; i < total; i++) {
      links.push({
        key: Math.random(),
        from: i,
        to: Math.floor(Math.random() * total)
      })
    }
    return {
      nodes,
      links
    }
  }

  export default {
    components: {
      Diagram
    },
    data() {
      const {nodes, links} = mock(500)
      return {
        nodes: nodes,
        links: links
      }
    },
    methods: {
      handleEvent(e) {
        console.log('event', e)
      },
      init($, go) {
        const diagram = $(go.Diagram, {
          initialAutoScale: go.Diagram.Uniform,
          autoScale: go.Diagram.None,
          initialContentAlignment: go.Spot.Center,
          'undoManager.isEnabled': true,
          'toolManager.mouseWheelBehavior': go.ToolManager.WheelZoom,
          model: $(go.GraphLinksModel, {
            linkKeyProperty: 'key'
          }),
          layout: $(go.ForceDirectedLayout)
        })

        diagram.nodeTemplate = $(go.Node, 'Horizontal',
          {background: '#44CCFF'},
          new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
          $(go.TextBlock, 'Default',
            {margin: 12, stroke: '#fff'},
            new go.Binding('text', 'key'))
        )


        return diagram
      },
      onModelChange(data, e) {
        console.log(data)
      },
      changeLayout() {
        this.$refs.go.layout($(go.CircularLayout))

      },
      addNodes() {
        const {nodes, links} = mock(10)
        this.nodes = nodes
        this.links = links
      }
    },
    mounted() {


    }
  }
</script>

<style lang="scss" scoped>

</style>
