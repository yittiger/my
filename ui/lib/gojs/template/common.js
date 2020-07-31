import creator from '../utils/creator'
import {go, merge} from '../utils/lib'
import {tooltipOptions} from './options'

/**
 * 基础节点或连线
 * @param {GraphObject} name go.Node / go.Link / go.Group
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

