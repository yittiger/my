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
