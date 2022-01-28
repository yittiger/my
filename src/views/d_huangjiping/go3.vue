<template>
  <Diagram height="400px" :links="[]" :nodes="nodes"  :options="options"></Diagram>
</template> 
<script>
  import { 
    $,  
    go,  
    Diagram,
    templateMap,
    layered 
  } from '$ui/gojs'
  import creator from '$ui/gojs/utils/creator'
  export default {
    mixins: [],
    components: {Diagram},
    props: {
    },
    data() {
      return {
        options: {
          layout: layered(),
          nodeTemplateMap: templateMap({
            origin: $(go.Node, go.Panel.Position,
              { background: 'lightgray' },
              $(go.TextBlock, 'node1', { background: 'lightgreen' })
            ),

            creator: creator({
              name: go.Node,
              props: {
                type: go.Panel.Position, 
                background: 'lightgray'
              },
              children: [
                creator({
                  name: go.TextBlock,
                  props: {
                    text: 'node2',
                    background: 'lightgreen'
                  }
                })
              ]
            }) 
             
          })
        },
        nodes: [
          {key: 1, category: 'origin'},
          {key: 2, category: 'creator'}
        ]
      }
    }
  }
</script> 