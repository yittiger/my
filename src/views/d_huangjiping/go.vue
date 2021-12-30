<template>
  <div>
    <!--  :links="links" :nodes="nodes" -->
    <Diagram height="600px" :data="data"  :options="options"></Diagram>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import { 
  $, 
  go, 
  Diagram
} from '$ui/gojs'
// import { creator } from '$ui/gojs/utils/creator'
const nodeDataArray = [
  { key: 1, text: 'Sentence', fill: '#f68c06', stroke: '#4d90fe' },
  { key: 2, text: 'NP', fill: '#f68c06', stroke: '#4d90fe', parent: 1 },
  { key: 3, text: 'DT', fill: '#ccc', stroke: '#4d90fe', parent: 2 },
  { key: 4, text: 'A', fill: '#f8f8f8', stroke: '#4d90fe', parent: 3 },
  { key: 5, text: 'JJ', fill: '#ccc', stroke: '#4d90fe', parent: 2 },
  { key: 6, text: 'rare', fill: '#f8f8f8', stroke: '#4d90fe', parent: 5 }
]
export default {
  mixins: [],
  components: {Diagram},
  props: {
  },
  data() {
    return {
      nodes: [],
      links: [],
      data: {nodeDataArray: nodeDataArray}, 
      options: {
        nodeTemplate: this.customNodeTemp(),
        linkTemplate: $(go.Link, $(go.Shape, { strokeWidth: 1.5 })),
        model: $(go.TreeModel)
        // model: creator({
        //   name: go.TreeModel 
        // })
      }
    }
  },
  computed: {
  },
  methods: {
    customNodeTemp() {
      return $(go.Node, 'Vertical', { selectionObjectName: 'BODY' },
        $(go.Panel, 'Auto', { name: 'BODY' },
          $(go.Shape, 'RoundedRectangle', { fill: 'transparent', stroke: 'black'}),
          $(go.TextBlock,
            { font: 'bold 12pt Arial, sans-serif', margin: new go.Margin(4, 2, 2, 2) },
            new go.Binding('text'))
        ),
        $(go.Panel, // this is underneath the "BODY"
          { height: 17 }, // always this height, even if the TreeExpanderButton is not visible
          $('TreeExpanderButton')
        )
      );
    }
    
  },
  created() {
    
    // this.data = $(go.TreeModel, { nodeDataArray: nodeDataArray })
    this.nodes = nodeDataArray
          // console.log(this.data)
  },
  mounted() {}
}
</script>