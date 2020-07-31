import {go, merge} from '../utils/lib';
import {normalIconNodeOptions, normalImageNodeOptions, normalNodeOptions} from './options'
import creator from '../utils/creator'
import {base, defaultTooltip} from './common'

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
