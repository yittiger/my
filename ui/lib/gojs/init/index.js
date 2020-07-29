import {go, $} from '../utils/lib'

export function init(options = {}) {
  return $(go.Diagram, {
    initialAutoScale: go.Diagram.Uniform,
    autoScale: go.Diagram.None,
    allowSelect: true,
    initialContentAlignment: go.Spot.Center,
    'undoManager.isEnabled': true,
    'toolManager.mouseWheelBehavior': go.ToolManager.WheelZoom,
    'toolManager.hoverDelay': 300,
    model: $(go.Model, {}),
    layout: $(go.ForceDirectedLayout, {
      defaultSpringLength: 10,
      isRealtime: false
    }),
    ...options
  })
}
