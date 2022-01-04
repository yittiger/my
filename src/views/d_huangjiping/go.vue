<template>
  <div style="height: 100%">
    <!--  :links="links" :nodes="nodes" :data="data" -->
    <Diagram height="100%" :links="[]" :nodes="nodes"  :options="options"></Diagram>
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
import treeData from '@/assets/data/tree.json' 
import creator from '$ui/gojs/utils/creator'
const TreeData = treeData.map((item) => {
  if (!item.parentId) {
    delete item.parentId
  }
  item.key = item.id
  return item
})
 
const FlatTreeLayoutInit = function() {
  const FlatTreeLayout = function() {
    go.TreeLayout.call(this);
  }
  go.Diagram.inherit(FlatTreeLayout, go.TreeLayout);
  // This assumes the TreeLayout.angle is 90 -- growing downward
  FlatTreeLayout.prototype.commitLayout = function() {
    go.TreeLayout.prototype.commitLayout.call(this); // call base method first
    // find maximum Y position of all Nodes
    let y = -Infinity;
     
    this.network.vertexes.each(function(v) {
      y = Math.max(y, v.node.position.y);
    });
    
    // move down all leaf nodes to that Y position, but keeping their X position
    this.network.vertexes.each(function(v) {
      if (v.destinationEdges.count === 0) {
        // shift the node down to Y
        v.node.position = new go.Point(v.node.position.x, y);
        // extend the last segment vertically
        v.node.toEndSegmentLength = Math.abs(v.centerY - y);
      } else { // restore to normal value
        v.node.toEndSegmentLength = 10;
      }
    });
  };
  return FlatTreeLayout
}
  
 
export default {
  mixins: [],
  components: {Diagram},
  props: {
  },
  data() {
    const FlatTreeLayout = FlatTreeLayoutInit()
    // console.log(FlatTreeLayout) 
    return {
      nodes: TreeData,
      links: [],
       
      options: {
        nodeTemplate: this.customNodeTemp(),
        linkTemplate: $(go.Link, $(go.Shape, { strokeWidth: 1.5 })),
        // model: $(go.TreeModel)
        model: creator({
          name: go.TreeModel,
          props: {
            nodeParentKeyProperty: 'parentId'
          }
        }),
        // layout: $(go.TreeLayout, { angle: 90, nodeSpacing: 3 })
        layout: $(FlatTreeLayout, // custom Layout, defined below
          {
            angle: 90,
            compaction: go.TreeLayout.CompactionNone
          }
        )
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
            new go.Binding('text', 'label', (v) => {
              console.log(v)
              return `${v}_`
            })
          )
        ),
        $(go.Panel, // this is underneath the "BODY"
          { height: 17 }, // always this height, even if the TreeExpanderButton is not visible
          $('TreeExpanderButton')
        )
      );
    }
    
    
  },
  created() {
    
     
  },
  mounted() {

  }
}
</script>