import {go, merge} from '../utils/lib'
import creator from '../utils/creator'
import {
  normalNodeOptions,
  normalIconNodeOptions,
  normalImageNodeOptions,
  tooltipOptions,
  normalLinkOptions
} from './options'


/**
 * 基础节点或连线
 * @param {GraphObject} name go.Node  或 go.Link
 * @param {Object} props 配置参数
 * @param {GraphObject[]} children 子GraphObject
 * @returns {GraphObject}
 */
export function base({name, props, children} = {}) {
  const $events = props.$events || {}
  const {mouseEnter, mouseLeave} = $events
  props.$events = {
    ...$events,
    mouseEnter: (e, obj) => {
      obj.part.isHighlighted = true
      ++obj.part.zOrder
      mouseEnter && mouseEnter(e, obj)
    },
    mouseLeave: (e, obj) => {
      obj.part.isHighlighted = false
      --obj.part.zOrder
      mouseLeave && mouseLeave(e, obj)
    }
  }
  return creator({
    name,
    props,
    children
  })
}


// export function groupTemplate(props) {
//
//   const group = base({
//     name: go.Group,
//     props: {
//       name: 'Group',
//       zOrder: 1,
//       type: go.Panel.Auto,
//       toSpot: go.Spot.AllSides,
//       toEndSegmentLength: 30,
//       fromEndSegmentLength: 30,
//       selectionAdorned: false,
//       isSubGraphExpanded: true,
//       layout: new go.CircularLayout()
//     }
//   })
//
//   const button = creator({
//     name: go.Panel,
//     props: {
//       name: 'ExpandButton',
//       type: go.Panel.Auto,
//       cursor: 'pointer',
//       width: 16,
//       height: 16,
//       $events: {
//         click(e, obj) {
//           if (obj.part) {
//             const model = obj.diagram?.model
//             if (model) {
//               model.commit(() => {
//                 obj.part.isSubGraphExpanded = !obj.part.isSubGraphExpanded
//               }, 'toggle expanded')
//             }
//
//           }
//         }
//       }
//     },
//     children: [
//       creator({
//         name: go.Shape,
//         props: {
//           figure: 'Rectangle',
//           fill: 'rgba(0,0,0,0.1)',
//           stroke: 'rgba(0,0,0,0.2)'
//         }
//       }),
//       creator({
//         name: go.Shape,
//         props: {
//           figure: 'MinusLine',
//           stroke: '#424242',
//           strokeWidth: 2,
//           desiredSize: new go.Size(8, 8),
//           $bindings: [
//             new go.Binding('figure', 'isSubGraphExpanded', v => {
//               return v ? 'MinusLine' : 'PlusLine'
//             }).ofObject()
//           ]
//
//         }
//       })
//     ]
//   })
//
//   const shape = creator({
//     name: go.Shape,
//     props: {
//       name: 'groupShape',
//       figure: 'RoundedRectangle',
//       fill: 'rgba(255,0,0,0.01)',
//       stroke: 'rgba(255,0,0,0.3)',
//       strokeDashArray: [3],
//       $hover: {
//         fill: 'rgba(255,0,0,0.05)'
//       }
//     }
//   })
//
//   const wrapper = creator({
//     name: go.Panel,
//     props: {
//       type: go.Panel.Vertical,
//       defaultAlignment: go.Spot.Left
//     }
//   })
//
//   const header = creator({
//     name: go.Panel,
//     props: {
//       type: go.Panel.Horizontal,
//       defaultAlignment: go.Spot.Left
//     },
//     children: [
//       button,
//       creator({
//         name: go.TextBlock,
//         props: {
//           name: 'groupText',
//           text: 'Group Name',
//           alignment: go.Spot.TopLeft,
//           alignmentFocus: new go.Spot(0, 0, -4, -4),
//           font: '12px Sans-Serif',
//           stroke: 'rgba(255,0,0,0.6)',
//           margin: new go.Margin(3, 5, 3, 5)
//         }
//       })
//     ]
//   })
//
//   const placeholder = creator({
//     name: go.Placeholder,
//     props: {
//       padding: new go.Margin(5, 10, 10, 10)
//     }
//   })
//   wrapper.add(header)
//   wrapper.add(placeholder)
//   group.add(shape)
//   group.add(wrapper)
//   return group
//
//
// }

// -------------------- start -----------------------------------------------------------------------------------

/**
 * 基础Tooltip
 * @param {object} props 包含三个GraphObject，{panel, shape, text}
 * @param {object} theme 主题变量配置
 * @returns {GraphObject}
 */
export function defaultTooltip(props = {}, theme) {
  const {panel, shape, text} = merge({}, tooltipOptions(theme), props)
  return creator({
    name: go.Adornment,
    props: {
      type: go.Panel.Spot
    },
    children: [
      creator({
        name: go.Placeholder,
        props: {padding: 5}
      }),
      creator({
        name: go.Panel,
        props: panel,
        children: [
          creator({
            name: go.Shape,
            props: shape
          }),
          creator({
            name: go.TextBlock,
            props: text
          })
        ]
      })
    ]
  })
}

/**
 * 基础节点模板
 * @param {Object} options 配置参数，{tooltip, props, children, $events, $bindings}
 * @returns {GraphObject}
 */
export function nodeTemplate(options = {}) {
  const {props, tooltip, children, $events, $bindings} = options
  return base({
    name: go.Node,
    props: {
      name: 'Node',
      zOrder: 1,
      type: go.Panel.Vertical,
      selectionAdorned: false,
      toolTip: tooltip ? defaultTooltip(tooltip) : null,
      $events,
      $bindings,
      ...(props || {})
    },
    children: children || []
  })
}

/**
 * 通用节点模板
 * @param options options 配置参数，{shape, label, tooltip, $events, $bindings}
 * @param theme
 * @returns {GraphObject}
 */
export function normalNode(options = {}, theme) {
  const opts = merge({}, normalNodeOptions(theme), options)
  const {shape, label, tooltip, $events, $bindings} = opts
  const props = {
    type: go.Panel.Auto
  }
  return nodeTemplate({
    props,
    tooltip,
    $events,
    $bindings,
    children: [
      creator({
        name: go.Shape,
        props: shape || {}
      }),
      creator({
        name: go.TextBlock,
        props: label || {}
      })
    ]
  })
}

/**
 * 带图标的普通节点模板
 * @param options options 配置参数，{shape, label, icon, tooltip, $events, $bindings}
 * @param theme
 * @returns {GraphObject}
 */
export function normalIconNode(options = {}, theme) {
  const opts = merge({}, normalIconNodeOptions(theme), options)
  const {shape, label, icon, tooltip, $events, $bindings} = opts
  return nodeTemplate({
    tooltip,
    $events,
    $bindings,
    children: [
      creator({
        name: go.Panel,
        props: {
          type: go.Panel.Auto
        },
        children: [
          creator({
            name: go.Shape,
            props: shape || {}
          }),
          creator({
            name: go.Shape,
            props: icon || {}
          })
        ]
      }),
      creator({
        name: go.TextBlock,
        props: label || {}
      })
    ]
  })
}

/**
 * 带图片的普通节点
 * @param options options 配置参数，{shape, label, image, tooltip, $events, $bindings}
 * @param theme
 * @returns {GraphObject}
 */
export function normalImageNode(options = {}, theme) {
  const opts = merge({}, normalImageNodeOptions(theme), options)
  const {shape, label, image, tooltip, $events, $bindings} = opts
  const {width = 60, height = 60, strokeWidth = 0, figure} = shape || {}
  const imageGraph = creator({
    name: go.Panel,
    props: {
      type: go.Panel.Spot,
      isClipping: true
    },
    children: [
      creator({
        name: go.Shape,
        props: {
          figure: figure,
          width,
          height
        }
      }),
      creator({
        name: go.Picture,
        props: {
          width,
          height,
          ...(image || {})
        }
      })
    ]
  })
  return nodeTemplate({
    tooltip,
    $events,
    $bindings,
    children: [
      creator({
        name: go.Panel,
        props: {
          type: go.Panel.Spot,
          width: width + strokeWidth * 2,
          height: height + strokeWidth * 2
        },
        children: [
          creator({
            name: go.Shape,
            props: shape || {}
          }),
          imageGraph
        ]
      }),
      creator({
        name: go.TextBlock,
        props: label || {}
      })
    ]
  })
}

/**
 * 节点模板映射
 * @param {Object} map 节点映射对象 {category: template}
 * @returns {go.Map}
 */
export function templateMap(map = {}) {
  const templateMap = new go.Map()
  Object.entries(map).forEach(([category, template]) => {
    templateMap.add(category, template)
  })
  return templateMap
}

/**
 * 基础连线模板
 * @param {Object} options 配置参数，{tooltip, props, children, $events, $bindings}
 * @returns {GraphObject}
 */
export function linkTemplate(options = {}) {
  const {props, tooltip, children, $events, $bindings} = options
  return base({
    name: go.Link,
    props: {
      name: 'Link',
      zOrder: 1,
      curve: go.Link.Bezier,
      selectionAdorned: false,
      toolTip: tooltip ? defaultTooltip(tooltip) : null,
      $events,
      $bindings,
      ...(props || {})
    },
    children: children || []
  })
}

/**
 * 通用连线模板
 * @param {object} options 配置项 {line, arrow, label, tooltip, $events, $bindings}
 * @param theme
 * @returns {GraphObject}
 */
export function normalLink(options = {}, theme) {
  const opts = merge({}, normalLinkOptions(theme), options)
  const {line, arrow, label, tooltip, $events, $bindings} = opts
  return linkTemplate({
    tooltip,
    $events,
    $bindings,
    children: [
      creator({
        name: go.Shape,
        props: line || {}
      }),
      creator({
        name: go.Shape,
        props: arrow || {}
      }),
      creator({
        name: go.TextBlock,
        props: label || {}
      })
    ]
  })

}

export function groupTemplate(options = {}) {
  const {props, children, $events, $bindings} = options
  return base({
    name: go.Group,
    props: {
      name: 'Group',
      zOrder: 1,
      type: go.Panel.Auto,
      toSpot: go.Spot.AllSides,
      toEndSegmentLength: 30,
      fromEndSegmentLength: 30,
      selectionAdorned: false,
      $events,
      $bindings,
      ...(props || {})
    },
    children: children || []
  })
}

export function normalGroup(options = {}, theme) {
  const opts = merge({}, normalGroupOptions(theme), options)
  const {shape, title, button, layout, $events, $bindings} = opts
  const expandGraph = button
    ? creator({
      name: go.Panel,
      props: {
        name: 'GroupExpand',
        type: go.Panel.Auto,
        cursor: 'pointer',
        width: 16,
        height: 16
      },
      children: [
        creator({
          name: go.Shape,
          props: button
        })
      ]
    })
    : null

  return groupTemplate({
    props: {
      layout,
      $events,
      $bindings
    },
    children: []
  })
}


