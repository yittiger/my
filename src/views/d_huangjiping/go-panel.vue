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
  templateMap,
  corner,
  layered
  // grid
} from '$ui/gojs'
import creator from '$ui/gojs/utils/creator'
import {panelNode} from '@/components/d_huangjiping/go/panel-node.js'
import {icons} from '@/components/d_huangjiping/go/icon'
import imgSrc from '$ui/gojs/sources/ATM.png'
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
          panel: panelNode({
            panel: {
              // sideWidth: 150,
              width: 400,
              fill: '#061178',
 
              shadowOffset: new go.Point(14, 14),
              shadowBlur: 20
            },
            header: {
              textKey: 'header',
              fill: '#030852',
              font: 'bold 16pt sans-serif',
              color: 'white',
              tools: [
                {
                  icon: icons.delete, 
                  color: 'blue', 
                  cb: this.panelToolClick,
                  name: '删除'
                },
                {
                  icon: icons.edit, 
                  color: 'blue', 
                  cb: this.panelToolClick,
                  name: '编辑'
                },
                {
                  icon: icons.add, 
                  color: 'blue', 
                  cb: this.panelToolClick,
                  name: '新增'
                }
              ]
            },
            body: {
              image: {
                sourceKey: 'data.img', 
                width: 100,
                // height: 200,
                stroke: '#B6B7B9'
              },
              info: {
                title: {
                  titleKey: 'title',
                  subTitleKey: 'data.subTitle',
                  titleProps: {
                    stroke: 'white'
                  },
                  subTitleProps: {
                    stroke: 'white'
                  }
                },
                detail: {
                  dataKey: 'data.list',
                  column: 3,
                  color: 'white'
                }
              },
              more: {
                buttonColor: 'white',
                defaultShow: false,
                detail: {
                  dataKey: 'data.content',
                  column: 1,
                  color: 'white'
                }           

              }
            },
            footer: {
              // fill:
              // content 
            }
          }),
          panelNoHeader: panelNode({
            panel: {
              // sideWidth: 150,
              width: 350,
              fill: 'white'
            }, 
            body: {
              image: {
                sourceKey: 'data.img', 
                width: 100 
              },
              info: {
                title: {
                  titleKey: 'title',
                  subTitleKey: 'data.subTitle'
                  // titleProps: {},
                  // subTitleProps: {}
                },
                detail: {
                  dataKey: 'data.list',
                  column: 2,
                  contentTemplate: () => {
                    return [
                      creator({
                        name: go.Panel,
                        props: {
                          type: go.Panel.Horizontal,
                          stretch: go.GraphObject.Fill
                        },
                        children: [
                          creator({
                            name: go.Shape,
                            props: {
                              fill: 'red',
                              strokeWidth: 0,
                              width: 18,
                              height: 18,
                              margin: 3,
                              geometry: go.Geometry.parse(icons.edit, true)
                            }
                          }),
                          creator({
                            name: go.TextBlock,
                            props: {
                              font: '14px sans-serif', 
                              stroke: 'blue',  
                              $bindings: [ 
                                new go.Binding('text', '', function(i) {  
                                  return i.value
                                })
                              ] 
                            }
                          })
                        ]
                      })
                      
                    ]
                  }
                }
              },
              more: {
                buttonColor: 'rgba(0,0,0,0.3)',
                defaultShow: false,
                detail: () => {
                  return creator({
                    name: go.Shape,
                    props: {
                      fill: 'green',
                      strokeWidth: 0,
                      width: 38,
                      height: 38,
                      margin: 3,
                      geometry: go.Geometry.parse(icons.edit, true)
                    }
                  })
                } 
              }
            }
          })
        }),
        linkTemplate: corner({
          toArrow: true,
          fromArrow: false 
        })
      },
      nodes: [
        {
          key: '1',
          header: '带头部Panel节点',
          title: '面板节点用法',
          data: {
            subTitle: '(常规使用)',
            img: imgSrc, 
            list: [
              {label: '标签', value: '内容1'}, 
              {label: '标签', value: '很长很长很长很长很长很长很长很长很长很长的内容', isRow: true}, 
              {label: '标签', value: '内容2'}, 
              {label: '标签', value: '内容3'}, 
              {label: '标签', value: '内容4'}
            ],
            content: [
              {label: '1', value: '很长很长很长很长很长很长很长很长很长很长的段落内容'},
              {label: '2', value: '很长很长很长很长很长很长很长很长很长很长的段落内容'},
              {label: '3', value: '很长很长很长很长很长很长很长很长很长很长的段落内容'}
            ]
          },
          category: 'panel'
        },
        {
          key: '2',
          header: '',
          title: '无头部卡片',
          data: {
            subTitle: '卡片副标题',
            img: imgSrc,
            // col: 3,
            list: [
               {label: '标签', value: '内容1'}, 
              {label: '标签', value: '很长很长很长很长很长很长很长很长很长很长的内容', isRow: true}, 
              {label: '标签', value: '内容2'}, 
              {label: '标签', value: '内容3'}, 
              {label: '标签', value: '内容4'}
            ],
            content: [
              {label: '1', value: '很长很长很长很长很长很长很长很长很长很长的段落内容'},
              {label: '2', value: '很长很长很长很长很长很长很长很长很长很长的段落内容'},
              {label: '3', value: '很长很长很长很长很长很长很长很长很长很长的段落内容'}
            ]
          },
          category: 'panelNoHeader'
        }

      ],
      links: [
        // {from: '1', to: '2'}
      ]
    }
  },
  computed: {
  },
  methods: {
    panelToolClick(e, obj) {
      console.log(this, obj.part.location, obj.part.data)
    }
  },
  created() {},
  mounted() {}
}
</script>