import {go, merge} from '../utils/lib'
import creator from '../utils/creator'
import {nodeOptions, tooltipOptions} from './options'

/**
 * 基础结点
 * @param {object} options go.Node属性
 * @param {GraphObject|GraphObject[]} children 子GraphObject
 * @returns {GraphObject}
 */
export function baseNode({options, children} = {}) {
  const $events = options.$events || {}
  const {mouseEnter, mouseLeave} = $events
  options.$events = {
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
    name: go.Node,
    options,
    children
  })
}

/**
 * 基础Tooltip
 * @param {object} options 包含三个GraphObject，{panel, shape, text}
 * @returns {GraphObject}
 */
export function baseTooltip(options = {}) {
  const {panel, shape, text} = merge({}, tooltipOptions, options)
  return creator({
    name: go.Adornment,
    options: {type: go.Panel.Spot},
    children: [
      creator({
        name: go.Placeholder,
        options: {padding: 5}
      }),
      creator({
        name: go.Panel,
        options: panel,
        children: [
          creator({
            name: go.Shape,
            options: shape
          }),
          creator({
            name: go.TextBlock,
            options: text
          })
        ]
      })
    ]
  })
}

export function defaultNodeTemplate(options = {}) {
  const {shape, icon, label, events, tooltip} = merge({}, nodeOptions, options)
  const nodeObj = baseNode({
    options: {
      zOrder: 1,
      toolTip: tooltip ? baseTooltip(tooltip) : null,
      type: go.Panel.Vertical,
      selectionAdorned: false,
      $events: events
    }
  })

  const panelObj = creator({
    name: go.Panel,
    options: {
      type: go.Panel.Auto
    }
  })

  const shapeObj = shape ? creator({
    name: go.Shape,
    options: shape
  }) : null

  const iconObj = icon ? creator({
    name: go.Shape,
    options: icon
  }) : null

  const labelObj = label ? creator({
    name: go.TextBlock,
    options: label
  }) : null

  nodeObj.add(panelObj)

  if (shape) {
    panelObj.add(shapeObj)
    if (icon) {
      panelObj.add(iconObj)
      label && nodeObj.add(labelObj)
    } else {
      label && panelObj.add(labelObj)
    }
  } else {
    panelObj.type = go.Panel.Vertical
    icon && panelObj.add(iconObj)
    label && panelObj.add(labelObj)
  }
  return nodeObj
}
