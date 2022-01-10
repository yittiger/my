// import { $ } from '$ui/gojs'
import {go, merge} from '$ui/gojs/utils/lib';
import creator from '$ui/gojs/utils/creator'
import {nodeTemplate, imageGraph} from '$ui/gojs/template/nodes'
import imgSrc from '$ui/gojs/sources/ATM.png'

const defaultBodyProps = {
  isShadowed: true,
  shadowOffset: new go.Point(4, 4),
  shadowBlur: 8,
  width: 200
}

// 头部生成
const headerPanelInit = function(headerProps) {
  return creator({
    name: go.Panel,
    props: {
      type: go.Panel.Auto,
      row: 0, 
      column: 0, 
      stretch: go.GraphObject.Horizontal 
    },
    children: [
      creator({
        name: go.Shape,
        props: {
          fill: '#E8E8E8', 
          strokeWidth: 0, 
          shadowVisible: false
        },
        children: []
      }),
      creator({
        name: go.Panel,
        props: {
          type: go.Panel.Horizontal,
          row: 0, 
          columnSpan: 1, 
          alignment: go.Spot.Left, 
          margin: 5
        },
        children: [ 
          creator({
            name: go.TextBlock,
            props: {
              font: 'bold 12pt sans-serif',
              isMultiline: false,
              editable: false,
              text: 'header'
            } 
          })
        ]
      }) 
    ]
  })
}


// 图片生成
const imageGraphInit = function() {
  return imageGraph({
    image: {
      source: imgSrc,
      width: 80,
      height: 80
    },
    shape: {
      figure: 'Rectangle',
      strokeWidth: 1,
      stroke: '#cccccc'
    } 
  })
}

// 标题生成
const titleBlockInit = function() {
  return creator({
    name: go.Panel,
    props: {
      type: go.Panel.Horizontal,
      
      defaultAlignment: go.Spot.Bottom
    },
    children: [
      creator({
        name: go.TextBlock,
        props: {
          font: 'bold 16pt sans-serif',
          isMultiline: false,
          editable: false,
          text: 'title' 
        } 
      }), 
      creator({
        name: go.TextBlock,
        props: {
          font: 'normal 14pt sans-serif',
          isMultiline: false,
          editable: false,
          margin: new go.Margin(0, 0, 2, 10),
          text: 'sub-title' 
        } 
      }) 
    ]
  }) 
}

const infoBodyInit = function() {
  return creator({
    name: go.Panel,
    props: {
      name: 'detail',
      type: go.Panel.Table,
      
      $bindings: [
        new go.Binding('itemArray', '', (v) => {
          
          return v.list.map((item, index) => {
            return {...item, _index: index}
          })
        })
      ],
      itemTemplate: creator({
        name: go.Panel,
        props: {
          type: go.Panel.Auto, 
          margin: 4,
          alignment: go.Spot.Left,
          $bindings: [
            new go.Binding('row', 'data', (i, obj) => { 
              console.log(i, obj, '+')
              return Math.floor(i._index / 2)
            }).ofObject(),
            new go.Binding('column', 'itemIndex', (i) => { 
              return i % 2
            }).ofObject() 
          ] 
        },
        children: [
          creator({
            name: go.TextBlock,
            props: {
              font: '14px sans-serif', 
              $bindings: [
                new go.Binding('text', '', function(i) {  
                  return `${i.label}: ${i.value}`
                })
              ] 
            }
          })
        ]
      })
    }
    // children: [
      
    // ]
  })
}

// 内容生成
const infoBlockInit = function() { 
  return creator({
    name: go.Panel,
    props: {

      type: go.Panel.Vertical,
      defaultAlignment: go.Spot.Left,
      margin: 5
    },
    children: [
      titleBlockInit(),
      infoBodyInit()
    ]
  })   
}

const bodyContentInit = function() { 
  return creator({
    name: go.Panel,
    props: {
      type: go.Panel.Horizontal,
      defaultAlignment: go.Spot.Top 
    },
    children: [
      imageGraphInit(), 
      infoBlockInit()  
    ]
  })      
}

export function panelNode(options) {
  const theme = {}
  const {body} = options
  const bodyProps = merge({}, defaultBodyProps, body) 
  const {width} = bodyProps
  delete bodyProps.width

  return nodeTemplate({
    props: {
      ...bodyProps
    },
    children: [
      creator({
        name: go.Shape,
        props: {
          strokeWidth: 0, 
          width: width,
          fill: 'white'
        }
      }),
      creator({
        name: go.Panel,
        props: {
          type: go.Panel.Table,
          width: width,
          defaultRowSeparatorStrokeWidth: 1,
          defaultRowSeparatorStroke: '#B6B7B9'
        },
        children: [
          headerPanelInit(),
          creator({
            name: go.Panel,
            props: {
              type: go.Panel.Vertical,
              row: 1, 
              columnSpan: 1, 
              alignment: go.Spot.Left, 
              margin: 5
            },
            children: [
              bodyContentInit()
               
              
            ]
          })
        ]
      })  
    ].filter(n => !!n)
  }, theme)
}