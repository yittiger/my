import {go, merge} from '../utils/lib';
import {normalLinkOptions} from './options'
import creator from '../utils/creator'
import {base, defaultTooltip} from './common'

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
      name: 'link',
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
 * @param {object} options 配置项 {props, line, arrow, label, tooltip, $events, $bindings}
 * @param theme
 * @returns {GraphObject}
 */
export function link(options = {}, theme) {
  const opts = merge({}, normalLinkOptions(theme), options)
  const {line, arrow, label, tooltip, props, $events, $bindings} = opts
  return linkTemplate({
    props,
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

/**
 * 折线连线
 * @param options options 配置项 {props, line, arrow, label, tooltip, $events, $bindings}
 * @param theme
 * @returns {GraphObject}
 */
export function cornerLink(options = {}, theme) {
  const opts = {
    props: {
      routing: go.Link.Orthogonal,
      curve: go.Link.JumpOver,
      corner: 10
    },
    label: {
      segmentIndex: 2
    }
  }
  return link(merge(opts, options), theme)
}
