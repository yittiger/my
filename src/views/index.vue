<template>
  <my-wrapper title="Hello MyUI" fit>


    <Diagram fit ref="go" :init="init" :nodes="nodes">
    </Diagram>

  </my-wrapper>
</template>

<script>
  import {Diagram, nodeTemplate} from '$ui/gojs'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 'Alpha'}
        ]
      }
    },
    methods: {
      init($, go) {
        const myDiagram =
          $(go.Diagram)
        const myModel = $(go.Model)
        myDiagram.model = myModel

        myDiagram.nodeTemplate = nodeTemplate({
          events: {
            doubleClick(e, obj) {
              console.log('doubleClick')
              obj.isEnabled = false
            }
          }
        })


        return myDiagram
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
