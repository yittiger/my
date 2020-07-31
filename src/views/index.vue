<template>

  <Diagram fit height="500px" :init="init"></Diagram>

</template>

<script>
  import {Diagram, init, normalNode, normalIconNode, normalImageNode} from '$ui/gojs'
  // import avatar from '@/assets/avatar.jpeg'

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
        const diagram = init()
        diagram.add(normalNode({
          shape: null
        }))
        // diagram.add(normalNode({}, theme.color1))
        // diagram.add(normalNode({}, theme.color2))
        // diagram.add(normalNode({}, theme.color3))
        // diagram.add(normalNode({}, theme.color4))
        diagram.add(normalNode({
          shape: {
            width: 20,
            height: 20
          },
          label: null
        }))

        diagram.add(normalIconNode())
        diagram.add(normalIconNode({
          label: null
        }))
        diagram.add(normalIconNode({
          label: null,
          shape: null
        }))

        diagram.add(normalImageNode({
          shape: null
        }))

        return diagram
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
