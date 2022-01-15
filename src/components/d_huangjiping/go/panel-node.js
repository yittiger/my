// import { $ } from '$ui/gojs'
import get from 'lodash/get'
import {go, merge} from '$ui/gojs/utils/lib';
import creator from '$ui/gojs/utils/creator'
import {nodeTemplate, imageGraph} from '$ui/gojs/template/nodes'
// import imgSrc from '$ui/gojs/sources/ATM.png'

const defaultPanelProps = {
  isShadowed: true,
  shadowOffset: new go.Point(4, 4),
  shadowBlur: 8,
  width: 250
}

// 头部生成
const headerPanelInit = function(headerProps) { 
  const headerFill = headerProps.fill || '#E8E8E8'
  const headerFont = headerProps.font || 'bold 12pt sans-serif'
  const headerFontStroke = headerProps.color || 'black'
  const textProps = headerProps.textProps
  const headerTools = headerProps.tools
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
          fill: headerFill, // '#E8E8E8', 
          strokeWidth: 0, 
          shadowVisible: false
        },
        children: []
      }),
      creator({
        name: go.Panel,
        props: {
          type: go.Panel.Table,
          row: 0, 
          columnSpan: 1,
          stretch: go.GraphObject.Horizontal 
          // alignment: go.Spot.Left 
          // margin: 5
        },
        children: [ 
          creator({
            name: go.TextBlock,
            props: {
              row: 0, 
              column: 0,
              font: headerFont, // 'bold 12pt sans-serif',
              alignment: go.Spot.TopLeft,
              margin: 5,
              stroke: headerFontStroke,
              isMultiline: false,
              editable: false,
              $bindings: [
                new go.Binding('text', '', (v) => {
                  const val = get(v, textProps) 
                  return val || ''
                })
              ]
              // text: 'header'
            } 
          }),
          headerTools && headerTools.length ? creator({
            name: go.Panel,
            props: {
              type: go.Panel.Horizontal,
              row: 0, 
              column: 1,
              alignment: go.Spot.Right  
            },
            children: [
              ...headerTools.map((item) => { 
                return creator({
                  name: 'Button',
                  props: { 
                    margin: 3, 
                    'ButtonBorder.fill': 'transparent',
                    'ButtonBorder.stroke': 'transparent',
                    'ButtonBorder.strokeWidth': 0,
                    _buttonFillOver: 'transparent',
                    _buttonStrokeOver: 'transparent',
                    _buttonFillPressed: 'transparent',
                    $events: {
                      click: item.cb
                      // function(e, obj) {
                      //   console.log(obj.part.data, 'ddd')
                      // }
                    }
                  },
                  children: [  
                    creator({
                      name: go.Shape,
                      props: {
                        fill: item.color,
                        strokeWidth: 0,
                        geometry: go.Geometry.parse(item.icon, true)
                      }
                    })
                  ]
                })
              })
            ]
          }) : null
        ]
      }) 
    ]
  })
}

// ================================


// 图片生成
export const imageGraphInit = function(imgProps) {
   
  const sourceProp = imgProps.sourceProp
  const stroke = imgProps.stroke
    
  delete imgProps.sourceProp
  delete imgProps.stroke
  return imageGraph({
    image: { 
      width: 80,
      $bindings: [
        new go.Binding('source', '', (v) => { 
          const val = get(v, sourceProp)
          return val
        })
      ], 
      ...imgProps
    },
    shape: {
      figure: 'Rectangle',
      strokeWidth: 1,
      stroke: stroke || '#cccccc'
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
          text: '标题' 
        } 
      }), 
      creator({
        name: go.TextBlock,
        props: {
          font: 'normal 12pt sans-serif',
          isMultiline: false,
          editable: false,
          margin: new go.Margin(0, 0, 2, 10),
          text: '副标题' 
        } 
      }) 
    ]
  }) 
}

const detailBodyInit = function(infoProps) {
  return creator({
    name: go.Panel,
    props: {
      name: 'detail',
      type: go.Panel.Table, 
      width: infoProps.width,
      $bindings: [
        
        new go.Binding('itemArray', 'data', (v) => {
          const arr = v.list
          const _arr = arr.reduce((total, item, i) => {
            if (!item.isRow) {
              if (arr[i + 1] && arr[i + 1].isRow) {
                total.push(item)
                total.push(null)
              } else {
                total.push(item)
              }
            } else {
              total.push(item)
              total.push(null)
            }
            return total
          }, [])
          // console.log(_arr, '55')
          const table = []
          _arr.forEach((item, index) => {
            const i = Math.floor(index / 2)
            if (!table[i]) {
              table[i] = [item]
            } else {
              table[i].push(item)
            }
          })
          
          const tableData = table.reduce((total, row, rowNum) => {
            const rowData = row.map((col, colNum) => {
              if (col) {
                col._row = rowNum
                col._col = colNum
              } 
              return col
            })
            total = [...total, ...rowData]
            return total  
          }, []).filter((item) => {
            return !!item
          })
          console.log(tableData)
          return v.list
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
              return i._row // Math.floor(i / 2)
            }).ofObject(),
            new go.Binding('column', 'data', (i) => { 
              return i._col // i % 2
            }).ofObject(),
            new go.Binding('columnSpan', 'data', (i, obj) => { 
              return i.isRow ? 2 : 1
            }).ofObject() 
          ] 
        },
        children: [
          creator({
            name: go.TextBlock,
            props: {
              font: '14px sans-serif', 
             
              $bindings: [
                // maxSize: new go.Size(190, NaN),
                new go.Binding('maxSize', '', function(i) { 
                  // console.log(i) 
                  if (i.isRow) {
                    return new go.Size(280, NaN)
                  } else {
                    return new go.Size(85, NaN)
                  }
                }),
                new go.Binding('text', '', function(i) {  
                  return `${i.label}：${i.value}`
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
const infoBlockInit = function(infoProps) { 
  console.log(infoProps.width, 'infoWidth')
  return creator({
    name: go.Panel,
    props: {
      type: go.Panel.Vertical,
      defaultAlignment: go.Spot.Left,
      width: infoProps.width,
      margin: 5
    },
    children: [
      titleBlockInit(),
      detailBodyInit(infoProps)
    ]
  })   
}

const bodyContentInit = function(bodyProps) {
  // const width = bodyProps.width
 
  const {image} = bodyProps
  const info = bodyProps.info || {}
  info.width = bodyProps.width - (image.width || 80) - 5
  return creator({
    name: go.Panel,
    props: {
      type: go.Panel.Horizontal,
      defaultAlignment: go.Spot.Top 
    },
    children: [ 
      image ? imageGraphInit(image) : null, 
      infoBlockInit(info)  
    ]
  })  
}


export function panelNode(options) {
  const theme = {}
  // panel props ----------------
  const {panel} = options
  const panelProps = merge({}, defaultPanelProps, panel) 
  const panelWidth = panelProps.width
  const panelFill = panelProps.fill
  delete panelProps.width
  delete panelProps.fill

  // header props ----------------
  const {header} = options
  const {body} = options
  const bodyProps = {...body, width: panelWidth}
  return nodeTemplate({
    props: {
      ...panelProps
    },
    children: [
      creator({
        name: go.Shape,
        props: {
          strokeWidth: 0, 
          width: panelWidth,
          fill: panelFill || 'white'
        }
      }),
      creator({
        name: go.Panel,
        props: {
          type: go.Panel.Table,
          width: panelWidth,
          defaultRowSeparatorStrokeWidth: 1,
          defaultRowSeparatorStroke: '#B6B7B9'
        },
        children: [ 
          header ? headerPanelInit(header) : null,
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
              bodyContentInit(bodyProps)
            ]
          })
        ]
      })  
    ].filter(n => !!n)
  }, theme)
}