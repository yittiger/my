import {icons} from './icon'




const groupTypeTag = function ($, go) {
  return $(go.Panel, 'Spot',
    new go.Binding('opacity', 'type', function(t) { return t ? 1 : 0 }), // note that the opacity defaults to zero (not visible),
    { 
      // opacity: 0,
      alignment: new go.Spot(1, 0, 5, -5),
      alignmentFocus: go.Spot.TopRight 
    },
    $(go.Shape, // 右上角梯形标签图形
      { geometryString: 'F1 M0 0 L30 0 70 40 70 70z', fill: '#8EB2F7', stroke: null, strokeWidth: 0, shadowVisible: true }),
    $(go.TextBlock,
      new go.Binding('text', 'type'),
      {
        alignment: new go.Spot(1, 0, -29, 29),
        angle: 45,
        maxSize: new go.Size(100, NaN),
        stroke: 'white',
        font: 'bold 13px sans-serif',
        textAlign: 'center'
      }
    )
  )
}

const contentTemplate = function ($, go) {
  return $(go.Panel, 'Table', { row: 1, column: 0, stretch: go.GraphObject.Fill, background: 'white' },
    new go.Binding('itemArray', 'persons'),
    {
      itemTemplate: $(go.Panel, 'Horizontal', {
          margin: 4
        },
        new go.Binding('row', 'itemIndex', function(i) { return Math.floor((i / 2)) }).ofObject(),
        new go.Binding('column', 'itemIndex', function(i) { return i % 2 }).ofObject(),
        $(go.TextBlock,
          { margin: 4, width: 20, height: 16, textAlign: 'center', alignment: go.Spot.Center, background: '#F75A2E', stroke: 'white', font: 'bold 12px sans-serif' },
          new go.Binding('text', 'itemIndex', function(i) { return i + 1 }).ofObject()
        ),
        $(go.TextBlock,
          { isMultiline: false, editable: false, font: '14px sans-serif' },
          new go.Binding('text', 'name')
        )
      )    
    }
  )
}

export const toolBtn = function($, go, tool) {
  return $(go.Panel, 'Auto', {margin: 2, click: tool.fn},
    $(go.Shape, 'Circle', {
      width: 18,
      fill: 'transparent',
      strokeWidth: 0
    }),
    $(go.Shape, {
      fill: tool.color, // '#F7051F',
      strokeWidth: 0,
      geometry: go.Geometry.parse(icons[tool.icon], true)
    }) 
  )
}

export const departmentNode = function ($, go, toolBtns) {
  return $(go.Node, 'Auto', {
      locationSpot: go.Spot.Center,
      fromSpot: go.Spot.AllSides,
      toSpot: go.Spot.AllSides,
      selectionAdorned: true,
      isShadowed: true,
      shadowOffset: new go.Point(3, 3),
      shadowBlur: 6
    },
    $(go.Shape, {strokeWidth: 0, width: 200}),
    $(go.Panel, 'Table', {
        width: 200,
        defaultRowSeparatorStrokeWidth: 1,
        defaultRowSeparatorStroke: '#DEE1E6' 
      },
      // 标题-----
      $(go.Panel, 'Auto', { row: 0, column: 0, stretch: go.GraphObject.Horizontal },
        $(go.Shape, { fill: 'white', strokeWidth: 0, shadowVisible: false }), // '#E8E8E8'
        $(go.Panel, 'Horizontal', {row: 0, columnSpan: 1, alignment: go.Spot.Left, margin: 5},
          $(go.TextBlock, 
            {
              font: 'bold 12pt sans-serif',
              isMultiline: false,
              editable: false
            },
            new go.Binding('text', 'title')
          ),
          $(go.TextBlock, '', {text: '('}),
          $(go.TextBlock, '', {stroke: 'red', margin: 0}, new go.Binding('text', 'personCount')),
          $(go.TextBlock, '', {text: ')'}),
          // 按钮列表-----
          toolBtns($, go)
        )
      ),
      // 内容-------
      contentTemplate($, go)
    ),
    // 左上标签------
    groupTypeTag($, go),
    $(go.Panel, // this is underneath the "BODY"
      { 
        height: 15,
        alignment: new go.Spot(1, 1, 0, -45)
        // alignmentFocus: go.Spot.Right 
      }, // always this height, even if the TreeExpanderButton is not visible
      $('TreeExpanderButton')
    )
  )
}
