<template>
   <div style="height: 100%">
   
    <Diagram height="100%" :links="links" :nodes="nodes"  :options="options"></Diagram>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import { 
  // $, 
  go, 
  Diagram,
  circle, 
  rectangle, 
  diamond, 
  templateMap,
  corner,
  layered
  // grid
} from '$ui/gojs'
export default {
  mixins: [],
  components: {Diagram},
  props: {
  },
  data() {
    /*
    const nodes = []
    const links = []
    const makeNodes = function() { 
      for (let index = 0; index < 9; index++) {
        const random = Math.floor(0 + Math.random() * 3)
        const item = {
          key: index,
          text: `${index}`,
          category: ['circle', 'rectangle', 'diamond'].splice(random, 1)[0]
        }
        nodes.push(item)
        if (index < 8) {
          links.push({
            from: index,
            to: index + 1
          })
        }
      } 
    }
    makeNodes() 
    console.log(links)
    */
    return {
      
      // nodes: nodes,
      // links: links,
       
      nodes: [
        { 
          key: '1',
          category: 'circle'
        },
        { 
          key: '2',
          category: 'circle'
        },
        { 
          key: '3.0',
          category: 'rectangle'
        },
        { 
          key: '3.1',
          category: 'rectangle'
        },
        { 
          key: '4',
          category: 'rectangle'
        },
        { 
          key: '5',
          category: 'diamond'
        },
        { 
          key: '6',
          category: 'diamond'
        },
        { 
          key: '7',
          category: 'diamond'
        }
      ],
      links: [
        {
          from: '1',
          to: '2'
        },
        {
          from: '2',
          to: '3.0'
        },
        {
          from: '2',
          to: '3.1'
        },
        {
          from: '3.0',
          to: '4'
        },
        {
          from: '3.1',
          to: '4'
        },
        {
          from: '4',
          to: '5'
        },
        {
          from: '5',
          to: '6'
        }
      ],
      options: {
        layout: layered(),
        nodeTemplateMap: templateMap({
          circle: circle({
            shape: {
              width: 100,
              height: 100,
              portId: '',
              fromLinkable: true,
              toLinkable: true,
              cursor: 'pointer'
            },
            label: {
              $bindings: [
                new go.Binding('text', 'key', (v) => {
                  return `名称: ${v}`
                })
              ]
            }
          }),
          rectangle: rectangle({
            shape: {
              width: 200,
              height: 100,
              portId: '',
              fromLinkable: true,
              toLinkable: true,
              cursor: 'pointer'
            },
            label: {
              $bindings: [
                new go.Binding('text', 'key', (v) => {
                  return `名称: ${v}`
                })
              ]
            }
          }),
          diamond: diamond({
            shape: {
              width: 200,
              height: 100,

              portId: '',
              fromLinkable: true,
              toLinkable: true,
              cursor: 'pointer'
            },
            label: {
              $bindings: [
                new go.Binding('text', 'key', (v) => {
                  return `名称: ${v}`
                })
              ]
            }
              
          })
        }),
        linkTemplate: corner({
          toArrow: true,
          fromArrow: false 
            
        })
      }
    }
  },
  computed: {
  },
  methods: {

  },
  created() {},
  mounted() {}
}
</script>