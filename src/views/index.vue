<template>
  <my-wrapper title="Hello MyUI" fit>


    <Diagram fit ref="go" :init="init" :nodes="nodes" :links="links">
    </Diagram>

  </my-wrapper>
</template>

<script>
  import {Diagram, init, normalIconNode, templateMap, normalLink, theme} from '$ui/gojs'
  // import avatar from '@/assets/avatar.jpeg'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 'Alpha', category: '1', enabled: true},
          {key: 'Beta', category: '2', enabled: true}
        ],
        links: [
          {from: 'Alpha', to: 'Beta'}
        ]
      }
    },
    methods: {
      init($, go) {
        const myDiagram = init()

        myDiagram.nodeTemplateMap = templateMap({
          1: normalIconNode(),
          2: normalIconNode(null, theme.normalColor1)
        })

        myDiagram.linkTemplate = normalLink()

        // myDiagram.nodeTemplate = normalIconNode({
        //   tooltip: {},
        //   label: {
        //     $bindings: [
        //       new go.Binding('text', 'key')
        //     ]
        //   },
        //   $bindings: [
        //     new go.Binding('isEnabled', 'enabled')
        //   ],
        //   $events: {
        //     doubleClick(e, obj) {
        //       console.log('doubleClick')
        //       myDiagram.model.commit(() => {
        //         obj.isEnabled = !obj.isEnabled
        //       }, 'doubleClick')
        //
        //     }
        //   }
        // }, theme.normalColor1)


        return myDiagram
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
