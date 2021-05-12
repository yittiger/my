<template>
  <Diagram height="100%" width="100%" :nodes="nodes" :links="links" :options="options"></Diagram>
</template>
<script>
  import {$, go, Diagram} from '$ui/gojs' // , link 
  import tree from '../../docs/.vuepress/data/tree.json'
  import 'gojs/extensions/HyperlinkText'
  export default {
    components: {
      Diagram
    },
    data() {
      return {
        nodes: [
          {key: 1, text: 'node1'},
          {key: 2, text: 'node2'},
          {key: 3, text: 'node3'},
          {key: 4, text: 'node4'},
          {key: 5, text: 'node5'},
          {key: 6, text: 'node6'},
          {key: 7, text: 'node7'},
          {key: 8, text: 'node8'},
          {key: 9, text: 'node9'},
          {key: 10, text: 'node10'}
        ],
        links: [
          {from: 1, to: 2},
          {from: 1, to: 3},
          {from: 1, to: 4},
          {from: 1, to: 5},
          {from: 1, to: 6},
          {from: 2, to: 7},
          {from: 2, to: 8},
          {from: 2, to: 9},
          {from: 2, to: 10}
        ],
        options: {
          nodeTemplate: this.cusNodeTemplate(),
          // circle({
          //   label: {
          //     $bindings: {
          //       text: 'text'
          //     }
          //   }
          // }),
          linkTemplate: $(go.Link, {
              curve: go.Link.Bezier,
              toEndSegmentLength: 30, 
              fromEndSegmentLength: 30
            },
            $(go.Shape, { strokeWidth: 1.5 }) // the link shape, with the default black stroke
          ),
          /*
          link({
            toArrow: {},
            label: {
              $bindings: [
                new go.Binding('text', 'to', (v, o) => {
                  const props = o.part.data.props 
                  return `link:${props.fromNode.label}-${props.toNode.label}`
                })
              ]
            }
          }),
          */
          layout: $(go.TreeLayout, { nodeSpacing: 3 })
        }
      }
    },
    methods: {
      cusNodeTemplate() {
        return $(go.Node,
          $('HyperlinkText', 
            function(node) {
              return `http://newgateway.gitee.io/my/ui/components/${node.data.key}.html` 
            },
 
            $(go.Panel, 'Auto',
              $(go.Shape, { fill: '#1F4963', stroke: null }),
              $(go.TextBlock,
                {
                  font: 'bold 13px Helvetica, bold Arial, sans-serif',
                  stroke: 'white', 
                  margin: 3
                },
                new go.Binding('text', '', (o) => {
                  return o.label
                })
              )
            )
          )
        )
      },
      makeRelation() {
        this.nodes = tree.map((item) => {
          return {
            key: item.id,
            text: item.label,
            ...item
          }
        })
        const nodeMap = this.nodes.reduce((total, item) => {
          total[item.key] = []
          return total
        }, {})
        
        this.nodes.forEach((item) => {
          if (item.parentId) {
            nodeMap[item.parentId].push(item)
          }
        })
        const links = Object.entries(nodeMap).reduce((total, entry) => {
          if (entry[1].length) {
            const fromNode = this.nodes.find((item) => {
              return item.key === entry[0]
            })
            const links = entry[1].map((item) => {
              return {
                from: entry[0],
                to: item.key,
                props: {
                  fromNode: fromNode,
                  toNode: item
                }
              }
            })
            total = total.concat(links)
          }  
          return total
        }, [])
        console.log(links)
        this.links = links
        // 
      }
    },
    mounted() { 
      this.makeRelation()
      
    }
  }
</script>