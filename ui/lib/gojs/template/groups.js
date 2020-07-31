import {go, merge} from '../utils/lib'
import creator from '../utils/creator'
import {base} from './common'
import {normalGroupOptions} from './options'

/**
 * 基础分组模板
 * @param options 配置参数 {props, children, $events, $bindings}
 * @returns {GraphObject}
 */
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

/**
 * 通用分组模板
 * @param options 配置参数 {shape, title, button, layout, $events, $bindings}
 * @param theme 主题
 * @returns {GraphObject}
 */
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
        height: 16,
        $events: {
          click(e, obj) {
            const model = obj.diagram?.model
            const part = obj.part
            if (model && part) {
              model.commit(() => {
                part.isSubGraphExpanded = !part.isSubGraphExpanded
              }, 'toggle group expanded')
            }
          }
        }
      },
      children: [
        creator({
          name: go.Shape,
          props: button
        }),
        creator({
          name: go.Shape,
          props: {
            figure: 'MinusLine',
            stroke: '#666',
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
    : null

  const shapeGraph = creator({
    name: go.Shape,
    props: shape
  })

  const wrapper = creator({
    name: go.Panel,
    props: {
      type: go.Panel.Vertical,
      defaultAlignment: go.Spot.Left
    },
    children: [
      creator({
        name: go.Panel,
        props: {
          type: go.Panel.Horizontal,
          defaultAlignment: go.Spot.Left
        },
        children: [
          expandGraph,
          creator({
            name: go.TextBlock,
            props: title
          })
        ]
      }),
      creator({
        name: go.Placeholder,
        props: {
          padding: new go.Margin(5, 10, 10, 10)
        }
      })
    ]
  })

  return groupTemplate({
    props: {
      layout,
      $events,
      $bindings
    },
    children: [
      shapeGraph,
      wrapper
    ]
  })
}
