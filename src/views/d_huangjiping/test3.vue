<template>
<div style="height: 100%">
  <el-button @click="test"> test</el-button>
  <!-- :links="initLinks" -->
  <Diagram ref="diagram" height="400px" 
  :nodes="[]"  
  :on-ready="diagramReadyHandle"
  :on-model-change="chartDataChangeHandle"
  :options="diagramOption" 
  ></Diagram>
</div>
  
</template>
<script>
  import {
    // $,  
    go,
    circle,
    Diagram,
    force
  } from '$ui/gojs'
  import creator from '$ui/gojs/utils/creator'
  import {cloneDeep} from '$ui/utils/util'
  const Nodes = [
    {key: '1', text: 'node1'}
    // {key: '2', text: 'node2'},
    // {key: '3', text: 'node3'}
    // {key: '4', text: 'node4'},
    // {key: '5', text: 'node5'},
    // {key: '6', text: 'node6'},
    // {key: '7', text: 'node7'},
    // {key: '8', text: 'node8'},
    // {key: '9', text: 'node9'},
    // {key: '10', text: 'node10'}
  ]
  const Links = [
    {from: '1', to: '2'},
    {from: '1', to: '3'} 
  ]
  const randomNum = function (max) {
    return Math.floor(max * Math.random())
  }
  export default {
    components: {
      Diagram
    },
    data() {
      return {
        diagramOption: {
          'commandHandler.copiesTree': true, // for the copy command
          'commandHandler.deletesTree': true, // for the delete command
          'draggingTool.dragsTree': true, // dragging for both move and copy
          'undoManager.isEnabled': true,
          // layout: $(go.ForceDirectedLayout),
          layout: force(),
          model: creator({
            name: go.TreeModel 
          }),
          nodeTemplate: circle({ 
            $events: {
              click: this.nodeClickHandle 
            }
          })
        },
        diagram: null,
        initNodes: cloneDeep(Nodes),
        initLinks: cloneDeep(Links),
        dataNodes: cloneDeep(Nodes),
        dataLinks: cloneDeep(Links)
      }
    },
    methods: {
      test() {
        const target = this.dataNodes[randomNum(this.dataNodes.length)]
        const targetKey = target.key
        this.addNode(targetKey)
      },
      diagramReadyHandle(diagram) {
        this.diagram = diagram 
        this.$refs.diagram.addNode(this.initNodes)
      },
      chartDataChangeHandle(data, e) {
        // console.log(data) 
      },
      nodeClickHandle(e, obj) {
        console.log(obj.part, 'part')
        this.addNode(obj.key)
        
        // this.diagram.commandHandler.expandTree(obj.part)

      },
      addNode(key) {
        const targetKey = key
        const length = randomNum(10)
        const addNodes = []
        const time = new Date().getTime()
        for (let index = 0; index < length; index++) { 
          addNodes.push({
            key: `${time}_${index}`,
            parent: targetKey,
            text: `node${time}`
          }) 
        } 
        
        if (addNodes.length) {
          const targetNode = this.$refs.diagram.findNode(targetKey, true)
          
          this.diagram.startTransaction('CollapseExpandTree');
          
          const location = targetNode.location 
           
          
          this.$refs.diagram.addNode(addNodes)
          addNodes.forEach((node) => {
            // this.$refs.diagram.addNode(node)
            const child = this.diagram.findNodeForData(node)
            child.location = location
          })

          this.dataNodes = [...this.dataNodes, ...addNodes]

          this.diagram.commandHandler.expandTree(targetNode);
          this.diagram.commitTransaction('CollapseExpandTree');
          this.diagram.zoomToFit();
          
          // setTimeout(() => {
          //   // this.initNodes = cloneDeep(this.dataNodes)
          //   this.diagram.zoomToFit();
          // }, 500)
        }
        
        // 
      }
    }
  }
</script>
