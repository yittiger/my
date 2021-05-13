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
        nodes: [],
        links: [],
        options: {
          nodeTemplate: this.cusNodeTemplate(), 
          linkTemplate: $(go.Link, {
              curve: go.Link.Bezier,
              toEndSegmentLength: 30, 
              fromEndSegmentLength: 30
            },
            $(go.Shape, { strokeWidth: 1.5 }) // the link shape, with the default black stroke
          ), 
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
        this.links = links
      }
    },
    mounted() { 
      this.makeRelation()
    }
  }
</script>