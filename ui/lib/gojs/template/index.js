import {go, merge} from '../utils/lib'
import creator from '../utils/creator'
import {nodeOptions, tooltipOptions, linkOptions} from './options'

const NODE_SIZE = 64

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
      obj.isHighlighted = true
      ++obj.zOrder
      mouseEnter && mouseEnter(e, obj)
    },
    mouseLeave: (e, obj) => {
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
  const {shape, icon, image, label, events, tooltip} = merge({}, nodeOptions(theme), props)
  const nodeObj = base({
    name: go.Node,
    props: {
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
    props: label
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
