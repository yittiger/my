<template>
   <div style="height: 100%">
    <div>
      <my-icon name="icon-user" svg></my-icon>
    </div>
    
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
import '$ui/icons/user'
const userIcon = require('$ui/icons/user')
export default {
  mixins: [],
  components: {Diagram},
  props: {
  },
  data() {
    
    return {
      
      // nodes: nodes,
      // links: links,
       
      nodes: [
        {
          key: 'panel',
          header: '头部',
          data: {
            header: '头部2',
            // col: 3,
            list: [
              {label: '姓名', value: '黄吉平'}, 
              {label: '地址', value: '发射点发生d啊打发打发水分大撒旦发射点发生大的发', isRow: true}, 
              {label: '年龄', value: '30'}, 
              {label: '性别', value: '男'}, 
              {label: '身份', value: '工程师'}
            ]
          },
          category: 'panel'
        },
        { 
          key: 'a',
          text: 'hello',
          category: 'circle'
        },
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
            panel: {
              width: 300,
              fill: '#cccccc'
            },
            header: {
              fill: 'red',
              font: '',
              stroke: '',
              textProps: 'data.header'
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
  mounted() {
    console.log(userIcon)
  }
}
</script>