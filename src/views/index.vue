<template>
  <div style="height: 100%; background: #fff;">
    <Diagram fit height="500px" :init="init" :nodes="nodes" :links="links"></Diagram>
  </div>


</template>

<script>
  import {Diagram, init, icon, link} from '$ui/gojs'
  // import avatar from '$ui/gojs/sources/QQ1.png'

  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 'Alpha', selected: false},
          {key: 'Beta', selected: false}
        ],
        links: [
          {key: 1, from: 'Alpha', to: 'Beta'}
        ]
      }
    },
    methods: {
      init($, go) {
        const diagram = init()
        diagram.nodeTemplate = icon({
          label: {
            $bindings: [
              new go.Binding('text', 'key')
            ]
          },
          // image: {
          //   source: avatar
          // },
          $events: {
            click(e, obj) {
              console.log('click')
              obj.movable = !obj.movable
              obj.isEnabled = !obj.isEnabled
              setTimeout(() => {
                obj.movable = !obj.movable
                obj.isEnabled = !obj.isEnabled
              }, 2000)
            }
          },
          $bindings: [
            new go.Binding('isSelected', 'selected')
          ]
        })
        diagram.linkTemplate = link({
          label: {
            $bindings: [
              new go.Binding('text', 'key', (v, o) => {
                const data = diagram.model.findLinkDataForKey(o.part.key)
                return data.from + '->' + data.to
              })
            ]
          }
        })
        return diagram
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
