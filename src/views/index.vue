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
  import {Diagram, Overview, go, $, init, nodeTemplate, linkTemplate, theme} from '$ui/gojs'
  import avatar from '@/assets/avatar.jpeg'

  const iconPath = 'M825.1638884 444.66484003c-9.23242596 0-21.66542623 0-30.8978522 3.07747533l-52.56327844-133.07003277 9.23242595-52.56327844h61.91880341c15.5104756 0 30.89785218-6.15495063 30.89785219-21.66542624 0-15.5104756-12.43300028-30.89785218-30.89785219-30.8978522h-89.73918028c-15.5104756 0-27.82037688 9.23242596-27.82037688 24.74290156l-9.23242596 64.99627873L382.74603662 336.33770883 351.84818444 262.10900415H395.05593791c15.5104756 0 33.97532751-6.15495063 33.97532751-21.66542624 0-15.5104756-12.43300028-30.89785218-30.89785221-30.8978522H280.57385606c-15.5104756 0-30.89785218 12.43300028-30.8978522 30.8978522 0 15.5104756 15.5104756 21.66542623 33.97532752 21.66542624h3.07747532l46.40832781 98.97160624-61.91880341 98.97160624c-21.66542623-9.23242596-46.40832779-15.5104756-71.15122936-15.51047562-102.04908156 0-182.55583589 83.58422963-182.55583588 182.55583588 0 102.04908156 83.58422963 182.55583589 182.55583588 182.55583589 89.73918028 0 167.04536027-64.99627873 182.55583588-151.65798367h105.24965587v-6.15495066c3.07747533 0 9.23242596 0 12.4330003-3.07747531 3.07747533-3.07747533 6.15495063-3.07747533 9.23242597-6.15495063L710.68180656 370.43613535l33.9753275 92.81665561c-64.99627873 27.82037688-108.32713121 92.8166556-108.32713121 167.04536028 0 102.04908156 83.58422963 182.55583589 182.5558359 182.55583588 102.04908156 0 182.55583589-83.58422963 182.55583589-182.55583588 6.27804966-102.17218056-77.18308098-185.6333112-176.27778624-185.63331121zM382.74603662 608.63272498c-6.15495063-49.48580312-30.89785218-89.73918028-64.99627871-120.63703246l46.40832781-74.2287047 92.81665558 194.86573716H382.74603662z m111.40460653-30.89785218l-83.58422964-191.78826184L661.19600343 358.1262341 494.15064315 577.7348728z m52.56327844 108.2040322h-58.8413281c-15.5104756 0-30.89785218 9.23242596-30.89785219 27.82037687 0 15.5104756 24.74290156 21.66542623 40.25337717 21.66542625h49.48580312c15.5104756 0 30.89785218-3.07747533 30.8978522-21.66542625 0-18.46485191-12.30990128-27.82037688-30.8978522-27.82037687z m0 0'

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
        console.log(avatar)
        const diagram = init({
          allowSelect: true
        })

        diagram.nodeTemplate = nodeTemplate({
          label: {
            $bindings: [
              new go.Binding('text', 'key')
            ]
          },
          icon: {
            geometry: go.Geometry.parse(iconPath, true)
          },
          // image: {
          //   source: avatar
          // },
          // image: null,
          tooltip: {},
          events: {
            click: e => {
              // alert(e)
            },
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
        }, theme.category1)

        diagram.linkTemplate = linkTemplate()

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
