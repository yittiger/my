import creator from '../utils/creator'
import {go} from '../utils/lib'


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
    // 当鼠标快速经过节点群时，为避免画面闪烁和节约性能，对鼠标进出进行延时处理
    mouseEnter: (e, obj) => {
      const model = obj.diagram?.model
      if (!model) {
        mouseEnter && mouseEnter(e, obj)
        return
      }
      const highlightMode = model.modelData.myGoHighlightMode
      model.set(model.modelData, 'myGoIsHighlighting', true)
      if (highlightMode === 'adjoin') {
        if (obj.part instanceof go.Node) {
          const connectedNodes = obj.part.findNodesConnected()
          const connectedLinks = obj.part.findLinksConnected()
          connectedNodes.each(N => {
            N.isHighlighted = true
          })
          connectedLinks.each(L => {
            L.isHighlighted = true
          })
        } else if (obj.part instanceof go.Link) {
          if (obj.part.fromNode) obj.part.fromNode.isHighlighted = true
          if (obj.part.fromNode) obj.part.toNode.isHighlighted = true
        }
      }
      obj.part.isHighlighted = true
      if (obj instanceof go.Group) {
        const parts = obj.findSubGraphParts()
        parts.each(parts => {
          ++parts.zOrder
        })
      } else {
        ++obj.part.zOrder
      }
      mouseEnter && mouseEnter(e, obj)
    },
    mouseLeave: (e, obj) => {
      const model = obj.diagram?.model
      if (!model) {
        mouseLeave && mouseLeave(e, obj)
        return
      }
      const highlightMode = model.modelData.myGoHighlightMode
      model.set(model.modelData, 'myGoIsHighlighting', false)
      if (highlightMode === 'adjoin') {
        if (obj.part instanceof go.Node) {
          const connectedNodes = obj.part.findNodesConnected()
          const connectedLinks = obj.part.findLinksConnected()
          connectedNodes.each(N => {
            N.isHighlighted = false
          })
          connectedLinks.each(L => {
            L.isHighlighted = false
          })
        } else if (obj.part instanceof go.Link) {
          if (obj.part.fromNode) obj.part.fromNode.isHighlighted = false
          if (obj.part.fromNode) obj.part.toNode.isHighlighted = false
        }
      }
      obj.part.isHighlighted = false
      if (obj instanceof go.Group) {
        const parts = obj.findSubGraphParts()
        parts.each(parts => {
          --parts.zOrder
        })
      } else {
        --obj.part.zOrder
      }
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
 * @param {object} tooltip
 * @returns {GraphObject}
 */
export function defaultTooltip(tooltip = {}) {
  return creator({
    name: go.Adornment,
    props: {
      name: 'tooltip',
      type: go.Panel.Spot,
      zOrder: 1
    },
    children: [
      creator({
        name: go.Placeholder,
        props: {padding: 5}
      }),
      creator({
        name: go.Panel,
        props: {
          type: go.Panel.Auto,
          alignment: go.Spot.Top,
          alignmentFocus: go.Spot.Bottom
        },
        children: [
          creator({
            name: go.Shape,
            props: {
              figure: 'RoundedRectangle',
              fill: 'rgba(0,0,0,0.5)',
              strokeWidth: 0
            }
          }),
          creator({
            name: go.TextBlock,
            props: {
              text: 'tooltip text',
              stroke: '#fff',
              margin: new go.Margin(1, 5, 1, 5),
              wrap: go.TextBlock.WrapBreakAll,
              ...tooltip
            }
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

