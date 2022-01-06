// import { $ } from '$ui/gojs'
import {go, merge} from '$ui/gojs/utils/lib';
import creator from '$ui/gojs/utils/creator'
import {nodeTemplate} from '$ui/gojs/template/nodes'

const defaultBodyProps = {
  isShadowed: true,
  shadowOffset: new go.Point(4, 4),
  shadowBlur: 8,
  width: 200
}

// const defaultTitleProps = {

// }

const titlePanelInit = function(titleProps) {
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
              text: 'title'
            } 
          })
        ]
      })
        
    ]
  })
}

export function panelNode(options) {
  const theme = {}
  const {body} = options
  const bodyProps = merge({}, defaultBodyProps, body)
  console.log(bodyProps, 'ttt')
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
          width: width
          // fill: 'transparent'
        }
      }),
      creator({
        name: go.Panel,
        props: {
          type: go.Panel.Table,
          width: width,
          defaultRowSeparatorStrokeWidth: 1,
          defaultRowSeparatorStroke: '#DEE1E6'
        },
        children: [
          titlePanelInit()
          /*
          ,
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
              creator({
                name: go.TextBlock,
                props: {
                  font: 'normal 12pt sans-serif',
                  isMultiline: false,
                  editable: false,
                  text: 'content'
                } 
              })  
            ]
          })
          */
        ]
      })  
    ].filter(n => !!n)
  }, theme)
}