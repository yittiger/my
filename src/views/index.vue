<template>
  <my-wrapper title="Hello MyUI" fit>
    <template v-slot:actions>
      <el-button size="small" @click="addNodes">增加节点</el-button>
      <el-button size="small" @click="changeLayout">更换布局</el-button>
      <my-timer auto :interval="10" format="H:mm:ss.SSS"></my-timer>
    </template>

    <Diagram fit
             @ChangedSelection="handleEvent"
             ref="go"
             :init="init"
             :on-model-change="onModelChange"
             :nodes="nodes"
             :links="links">
      <Overview width="200px" height="150px"></Overview>
    </Diagram>
    <my-radial-menu ref="menu"
                    :size="200"
                    :z-index="1000"
                    :visible.sync="visible"
                    :items="items"
                    :position="position"
                    appendToBody></my-radial-menu>
  </my-wrapper>
</template>

<script>
  import {Diagram, Overview, go, $, defaultDiagramInit, defaultNodeTemplate} from '$ui/gojs'

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
      Diagram,
      Overview
    },
    data() {
      const {nodes, links} = mock(100)
      return {
        nodes: nodes,
        links: links,
        visible: false,
        position: null,
        items: [
          {id: 11, label: '子菜单'},
          {id: 12, label: '子菜单'},
          {id: 13, label: '子菜单'},
          {id: 13, label: '子菜单'}
        ]
      }
    },
    methods: {
      handleEvent(e) {
        // console.log('event', e)
      },
      init($, go) {
        const diagram = defaultDiagramInit($, go)
        diagram.nodeTemplate = defaultNodeTemplate({
          label: null,
          icon: {},
          tooltip: {},
          events: {
            contextClick: e => {
              console.log(e, e.event.preventDefault)
              const {pageX, pageY} = e.event
              e.event.preventDefault()
              e.event.stopPropagation()
              this.position = [pageX, pageY]
              this.visible = true
              return false
            }
          }
        })

        return diagram
      },
      onModelChange(data, e) {
        // console.log(data)
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
