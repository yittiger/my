import {go, merge} from '../utils/lib'
import creator from '../utils/creator'
import {normalNodeOptions, tooltipOptions, linkOptions} from './options'

const NODE_SIZE = 64

function mergeIconSelected(icon, options, label) {
  if (icon) return label
  label.$selected = {
    stroke: options.icon?.$selected?.fill,
    ...label.$selected
  }
  return label
}

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
      if (obj instanceof go.Group) {
        const nodes = obj.findSubGraphParts()
        nodes.each(n => {
          n.isHighlighted = true
          ++n.zOrder
        })
      } else {
        const topPart = obj.findTopLevelPart()
        if (topPart) {
          topPart.isHighlighted = true
        }
      }

      obj.isHighlighted = true
      ++obj.zOrder
      mouseEnter && mouseEnter(e, obj)
    },
    mouseLeave: (e, obj) => {
      if (obj instanceof go.Group) {
        const nodes = obj.findSubGraphParts()
        nodes.each(n => {
          n.isHighlighted = false
          --n.zOrder
        })
      } else {
        const topPart = obj.findTopLevelPart()
        if (topPart) {
          topPart.isHighlighted = false
        }
      }
      obj.isHighlighted = false
      --obj.zOrder
      mouseLeave && mouseLeave(e, obj)
    }
  }
  return creator({
    name,
    props,
    children
  })
}

/**
 * 基础模板映射
 * @param func
 * @param map
 * @param defaults
 * @returns {go.Map}
 */
export function baseMap(func, map, defaults) {
  const templateMap = new go.Map()
  Object.entries(map).forEach(([category, values]) => {
    templateMap.add(category, func(values.props, values.theme))
  })
  if (defaults) {
    templateMap.add('', func(defaults.props, defaults.theme))
  }
  return templateMap
}

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
 * 默认节点模板构造函数
 * @param {Object} props 配置参数，{shape, icon, image, label, events, tooltip}
 * @param {object} theme 主题变量配置
 * @returns {GraphObject}
 */
export function nodeTemplate(props = {}, theme) {
  const defaultOptions = normalNodeOptions(theme)
  const {shape, icon, image, label, events, tooltip} = merge({}, defaultOptions, props)
  const nodeObj = base({
    name: go.Node,
    props: {
      name: 'Node',
      zOrder: 1,
      toolTip: tooltip ? defaultTooltip(tooltip) : null,
      type: go.Panel.Vertical,
      selectionAdorned: false,
      $events: events
    }
  })

  const panelObj = creator({
    name: go.Panel,
    props: {
      type: image ? go.Panel.Spot : go.Panel.Auto
    }
  })

  const shapeObj = shape ? creator({
    name: go.Shape,
    props: shape
  }) : null

  const iconObj = icon ? creator({
    name: go.Shape,
    props: icon
  }) : null

  const imageObj = image ? creator({
    name: go.Panel,
    props: {
      type: go.Panel.Spot,
      isClipping: true
    },
    children: [
      creator({
        name: go.Shape,
        props: {
          figure: 'Circle',
          width: NODE_SIZE,
          height: NODE_SIZE
        }
      }),
      creator({
        name: go.Picture,
        props: {
          width: NODE_SIZE,
          height: NODE_SIZE,
          ...image
        }
      })
    ]
  }) : null

  const labelObj = label ? creator({
    name: go.TextBlock,
    props: mergeIconSelected(icon, defaultOptions, label)
  }) : null

  nodeObj.add(panelObj)

  if (shape) {
    panelObj.add(shapeObj)
    if (icon || image) {
      icon && panelObj.add(iconObj)
      image && panelObj.add(imageObj)
      label && nodeObj.add(labelObj)
    } else {
      label && panelObj.add(labelObj)
    }
  } else {
    panelObj.type = go.Panel.Vertical
    icon && panelObj.add(iconObj)
    image && panelObj.add(imageObj)
    label && panelObj.add(labelObj)
  }
  return nodeObj
}

/**
 * 默认连线模板
 * @param {Object} props {line, arrow, label, events}
 * @param {object} theme 主题变量配置
 * @returns {GraphObject}
 */
export function linkTemplate(props = {}, theme) {
  const {line, arrow, label, events} = merge({}, linkOptions(theme), props)
  const linkObj = base({
    name: go.Link,
    props: {
      name: 'link',
      zOrder: 1,
      curve: go.Link.Bezier,
      selectionAdorned: false,
      $events: events
    }
  })
  const lineObj = line ? creator({
    name: go.Shape,
    props: line
  }) : null
  const arrowObj = arrow ? creator({
    name: go.Shape,
    props: arrow
  }) : null
  const labelObj = label ? creator({
    name: go.TextBlock,
    props: label
  }) : null

  lineObj && linkObj.add(lineObj)
  arrowObj && linkObj.add(arrowObj)
  labelObj && linkObj.add(labelObj)
  return linkObj


}

/**
 * 节点模板映射
 * @param {Object} map 节点映射对象 {category:{props, theme}}
 * @param {object} defaults 默认节点配置 {props, theme}
 * @returns {go.Map}
 */
export function nodeTemplateMap(map = {}, defaults) {
  return baseMap(nodeTemplate, map, defaults)
}

/**
 * 连线模板映射
 * @param {Object} map 节点映射对象 {category:{props, theme}}
 * @param {object} defaults 默认节点配置 {props, theme}
 * @returns {go.Map}
 */
export function linkTemplateMap(map = {}, defaults) {
  return baseMap(linkTemplate, map, defaults)
}

export function groupTemplate(props) {

  const group = base({
    name: go.Group,
    props: {
      name: 'Group',
      zOrder: 1,
      type: go.Panel.Auto,
      toSpot: go.Spot.AllSides,
      toEndSegmentLength: 30,
      fromEndSegmentLength: 30,
      selectionAdorned: false,
      isSubGraphExpanded: true,
      layout: new go.CircularLayout()
    }
  })

  const button = creator({
    name: go.Panel,
    props: {
      name: 'ExpandButton',
      type: go.Panel.Auto,
      cursor: 'pointer',
      width: 16,
      height: 16,
      $events: {
        click(e, obj) {
          if (obj.part) {
            const model = obj.diagram?.model
            if (model) {
              model.commit(() => {
                obj.part.isSubGraphExpanded = !obj.part.isSubGraphExpanded
              }, 'toggle expanded')
            }

          }
        }
      }
    },
    children: [
      creator({
        name: go.Shape,
        props: {
          figure: 'Rectangle',
          fill: 'rgba(0,0,0,0.1)',
          stroke: 'rgba(0,0,0,0.2)'
        }
      }),
      creator({
        name: go.Shape,
        props: {
          figure: 'MinusLine',
          stroke: '#424242',
          strokeWidth: 2,
          desiredSize: new go.Size(8, 8),
          $bindings: [
            new go.Binding('figure', 'isSubGraphExpanded', v => {
              return v ? 'MinusLine' : 'PlusLine'
            }).ofObject()
          ]

        }
      })
    ]
  })

  const shape = creator({
    name: go.Shape,
    props: {
      name: 'groupShape',
      figure: 'RoundedRectangle',
      fill: 'rgba(255,0,0,0.01)',
      stroke: 'rgba(255,0,0,0.3)',
      strokeDashArray: [3],
      $hover: {
        fill: 'rgba(255,0,0,0.05)'
      }
    }
  })

  const wrapper = creator({
    name: go.Panel,
    props: {
      type: go.Panel.Vertical,
      defaultAlignment: go.Spot.Left
    }
  })

  const header = creator({
    name: go.Panel,
    props: {
      type: go.Panel.Horizontal,
      defaultAlignment: go.Spot.Left
    },
    children: [
      button,
      creator({
        name: go.TextBlock,
        props: {
          name: 'groupText',
          text: 'Group Name',
          alignment: go.Spot.TopLeft,
          alignmentFocus: new go.Spot(0, 0, -4, -4),
          font: '12px Sans-Serif',
          stroke: 'rgba(255,0,0,0.6)',
          margin: new go.Margin(3, 5, 3, 5)
        }
      })
    ]
  })

  const placeholder = creator({
    name: go.Placeholder,
    props: {
      padding: new go.Margin(5, 10, 10, 10)
    }
  })
  wrapper.add(header)
  wrapper.add(placeholder)
  group.add(shape)
  group.add(wrapper)
  return group


}
