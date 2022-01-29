<template>
  <Diagram height="400px" :links="[]" :nodes="nodes"  :options="options"></Diagram>
</template> 
<script>
  import {
    go,   
    Diagram,
    // templateMap, 
    layered 
  } from '$ui/gojs' 
  import {panelNode} from '$ui/widgets/go-panel-node/panel-node'
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
          nodeTemplate: panelNode({
            
            // ==========面板的常规配置===============  
            // 面板节点整体配置
            panel: { 
              width: 400
            },
            // 面板头部配置
            header: {
              textKey: 'header', 
              font: 'bold 16pt sans-serif' 
            },
            // 面板body配置
            body: {
              // 图片区域
              image: {
                sourceKey: 'data.img', 
                width: 100, 
                stroke: '#B6B7B9'
              },
              // 信息区域配置
              info: {
                // 信息标题配置
                title: {
                  titleKey: 'title',
                  subTitleKey: 'data.subTitle' 
                },
                // 内容配置
                detail: {
                  dataKey: 'data.list',
                  column: 3 
                }
              } 
            },

            // ======以下是 nodeTemplate 的自身的快捷配置======
            // 全局锁定
            lock: {
              width: 20,
              height: 20,
              alignment: new go.Spot(0.95, 0.15), 
              alignmentFocus: go.Spot.BottomLeft
            },
            // 全局节点 badge 
            badge: {
              props: {
                alignment: new go.Spot(0, 0), 
                alignmentFocus: go.Spot.BottomLeft
              },
              label: {
                $bindings: [
                  new go.Binding('text', 'count'),
                  new go.Binding('visible', 'count', v => v > 0)
                ]
              }
            },
            // 全局节点tooltip提示
            tooltip: {
              // text: '鼠标经过提示文本'
              $bindings: [
                new go.Binding('text', 'title')
              ]
            },
            // 全局节点数据绑定
            $bindings: [ 
              new go.Binding('movable', 'locked', v => !v)
            ]
          })
        },
        nodes: [
          {
            key: '1',
            locked: true,
            count: 10,
            header: '常规面板节点',
            title: '被锁定的面板节点',
            data: {
              subTitle: '(内容副标题)',
              img: imgSrc, 
              list: [
                {label: '标签', value: '内容1'}, 
                {label: '标签', value: '很长很长很长很长很长很长很长很长很长很长的内容', isRow: true}, 
                {label: '标签', value: '内容2'}, 
                {label: '标签', value: '内容3'}, 
                {label: '标签', value: '内容4'}
              ] 
            },
            category: 'panel'
          } 
        ] 
      }
    } 
  }
</script>