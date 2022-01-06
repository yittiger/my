<template>
   <div style="height: 100%">
   
    <Diagram height="100%" :links="links" :nodes="nodes"  :options="options"></Diagram>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import { 
  $, 
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
import {departmentNode, toolBtn} from '@/components/d_huangjiping/go/depNode.js'
import {panelNode} from '@/components/d_huangjiping/go/panel-node.js'
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
          key: 'a',
          text: 'hello',
          category: 'circle'
        },
        // { 
        //   key: '2',
        //   category: 'circle'
        // },
        // { 
        //   key: '3.0',
        //   category: 'rectangle'
        // },
        // { 
        //   key: '3.1',
        //   category: 'rectangle'
        // },
        // { 
        //   key: '4',
        //   category: 'rectangle'
        // },
        // { 
        //   key: '5',
        //   category: 'diamond'
        // },
        // { 
        //   key: '6',
        //   category: 'diamond'
        // },
        // { 
        //   key: '7',
        //   category: 'diamond'
        // },

        {
          key: 1,
          title: '指挥组',
          persons: [{name: '张云涨'}, {name: '李宇'}, {name: '曹宫韦'}, {name: '方大宇'}],
          personCount: 4,
          type: '内部组',
          category: 'custom'
        },
        {
          key: 2,
          title: '指挥组',
          persons: [{name: '张云涨'}, {name: '李宇'}, {name: '曹宫韦'}, {name: '方大宇'}],
          personCount: 4,
          type: '内部组',
          category: 'custom'
        },
        {
          key: 3,
          title: '指挥组',
          persons: [{name: '张云涨'}, {name: '李宇'}, {name: '曹宫韦'}, {name: '方大宇'}, {name: '曹宫韦'}, {name: '方大宇'}, {name: '李宇'}],
          personCount: 4,
          type: '内部组',
          category: 'custom'
        },
        {
          key: 'panel',
          category: 'panel'
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
                new go.Binding('text', '', function(modelData, obj) {
                  // console.log(modelData, obj, '---')
                  return `名称: ${modelData.text}`
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
            }
          ),
          custom: departmentNode($, go, this.depTools),
          panel: panelNode({
            body: {
              width: 300
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
    depTools($, go) {
      const delBtn = {
        color: '#F7051F',
        icon: 'delete',
        fn: (e, obj) => {
          console.log('delete', e)
        }
      }
      const addBtn = {
        color: '#90552C',
        icon: 'add',
        fn: (e, obj) => {
          console.log('add', e)
          // this.nodeModel.from = obj.part.data.key
          // this.formClose = false
        }
      }
      const editBtn = {
        color: '#6A9D3B',
        icon: 'edit',
        fn: (e, obj) => {
          console.log('add', e)
        }
      }
      return $(go.Panel, 'Horizontal',
        toolBtn($, go, delBtn),
        toolBtn($, go, addBtn),
        toolBtn($, go, editBtn)
      )
    }
  },
  created() {},
  mounted() {}
}
</script>