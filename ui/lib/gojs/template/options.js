import {go, merge} from '../utils/lib'
import {normal} from './theme'

export function tooltipOptions(theme = {}) {
  const {tooltip} = merge({}, normal, theme)
  return {
    panel: {
      type: go.Panel.Auto,
      alignment: go.Spot.Top,
      alignmentFocus: go.Spot.Bottom
    },
    shape: {
      figure: tooltip.figure,
      fill: tooltip.fill,
      stroke: tooltip.stroke
    },
    text: {
      text: 'Tooltip',
      stroke: tooltip.color,
      margin: new go.Margin(3, 5, 2, 3),
      wrap: go.TextBlock.WrapBreakAll
    }
  }
}

/**
 * 普通节点参数选项
 * @param theme
 * @returns {Object}
 */
export function normalNodeOptions(theme = {}) {
  const {node} = merge({}, normal, theme)
  return {
    shape: {
      name: 'shape',
      figure: node.figure,
      fill: node.fill,
      stroke: node.stroke,
      strokeWidth: node.strokeWidth,
      width: node.width,
      height: node.height,
      $hover: {
        fill: node.hoverFill,
        stroke: node.hoverStroke
      },
      $selected: {
        fill: node.selectedFill,
        stroke: node.selectedStroke
      },
      $disabled: {
        fill: node.disabledFill,
        stroke: node.disabledStroke
      }
    },
    label: {
      name: 'label',
      text: 'text',
      stroke: node.color,
      opacity: node.opacity,
      $hover: {
        stroke: node.hoverColor
      },
      $selected: {
        stroke: node.selectedColor
      },
      $disabled: {
        stroke: node.disabledColor
      }
    }
  }
}

/**
 * 带图标的普通节点参数选项
 * @param theme
 * @returns {Object}
 */
export function normalIconNodeOptions(theme = {}) {
  const {node} = merge({}, normal, theme)
  return {
    ...normalNodeOptions(theme),
    icon: {
      name: 'icon',
      strokeWidth: 0,
      scale: 0.6,
      fill: node.color,
      desiredSize: new go.Size(node.width || 50, node.height || 50),
      margin: new go.Margin(5, 5, 5, 5),
      geometryString: node.geometryString,
      $hover: {
        fill: node.hoverColor
      },
      $selected: {
        fill: node.selectedColor
      },
      $disabled: {
        fill: node.disabledColor
      }
    },
    label: {
      name: 'label',
      text: 'Text',
      stroke: node.textColor,
      margin: new go.Margin(0, 3, 0, 3),
      $disabled: {
        stroke: node.disabledColor
      }
    }
  }
}

/**
 * 带图片的普通节点参数选项
 * @param theme
 * @returns {Object}
 */
export function normalImageNodeOptions(theme = {}) {
  const {node} = merge({}, normal, theme)
  return {
    ...normalNodeOptions(theme),
    image: {
      name: 'image',
      source: node.imageSource,
      opacity: node.opacity,
      $disabled: {
        opacity: node.disabledOpacity
      }
    },
    label: {
      name: 'label',
      text: 'Text',
      stroke: node.textColor,
      opacity: node.opacity,
      margin: new go.Margin(0, 3, 0, 3),
      $disabled: {
        stroke: node.disabledColor,
        opacity: node.disabledOpacity
      }
    }
  }
}

/**
 * 普通连线参数选项
 * @param theme
 * @returns {Object}
 */
export function normalLinkOptions(theme = {}) {
  const {link} = merge({}, normal, theme)
  return {
    line: {
      name: 'line',
      stroke: link.color,
      strokeWidth: link.strokeWidth,
      $selected: {
        stroke: link.selectedColor
      },
      $hover: {
        stroke: link.hoverColor
      },
      $disabled: {
        stroke: link.disabledColor
      }
    },
    arrow: {
      name: 'toArrow',
      toArrow: 'Standard',
      fill: link.color,
      stroke: link.color,
      strokeWidth: link.strokeWidth,
      $hover: {
        stroke: link.hoverColor,
        fill: link.hoverColor
      },
      $selected: {
        stroke: link.selectedColor,
        fill: link.selectedColor
      },
      $disabled: {
        stroke: link.disabledColor,
        fill: link.disabledColor
      }
    },
    label: {
      name: 'label',
      text: '',
      segmentOffset: new go.Point(0, -10),
      segmentOrientation: go.Link.OrientUpright,
      segmentFraction: 0.5,
      segmentIndex: 1,
      stroke: link.color,
      $hover: {
        stroke: link.hoverColor
      },
      $selected: {
        stroke: link.selectedColor
      },
      $disabled: {
        stroke: link.disabledColor
      }
    }
  }
}

/**
 * 通用分组参数选项
 * @param theme
 * @returns {Object}
 */
export function normalGroupOptions(theme = {}) {
  const {group} = merge({}, normal, theme)
  return {
    shape: {
      name: 'shape',
      figure: 'RoundedRectangle',
      fill: group.fill,
      stroke: group.stroke,
      strokeWidth: group.strokeWidth,
      strokeDashArray: [3]
    },
    button: {
      name: 'button',
      figure: 'Rectangle',
      fill: 'rgba(0,0,0,0.1)',
      stroke: 'rgba(0,0,0,0.2)'
    },
    title: {
      name: 'title',
      text: 'Title',
      alignment: go.Spot.TopLeft,
      alignmentFocus: new go.Spot(0, 0, -4, -4),
      font: '14px Sans-Serif',
      stroke: group.color,
      margin: new go.Margin(3, 5, 3, 5)
    }
  }
}
