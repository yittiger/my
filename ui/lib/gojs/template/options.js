import {go, merge} from '../utils/lib'
import defaultTheme, {normal} from './theme'

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
      name: 'NodeShape',
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
      name: 'NodeLabel',
      text: 'Text',
      stroke: node.color,
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
      name: 'NodeIcon',
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
      name: 'NodeLabel',
      text: 'Text',
      stroke: node.textColor,
      margin: new go.Margin(5, 0, 0, 0),
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
      name: 'NodeImage',
      source: node.imageSource
    },
    label: {
      name: 'NodeLabel',
      text: 'Text',
      stroke: node.textColor,
      margin: new go.Margin(5, 0, 0, 0),
      $disabled: {
        stroke: node.disabledColor
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
      name: 'LinkLine',
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
      name: 'LinkArrow',
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
      name: 'LinkLabel',
      text: 'Link Text',
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
      name: 'GroupShape',
      figure: 'RoundedRectangle',
      fill: group.fill,
      stroke: group.stroke,
      strokeWidth: group.strokeWidth,
      strokeDashArray: [3]
    },
    button: {
      name: 'GroupButton',
      figure: 'Rectangle',
      fill: 'rgba(0,0,0,0.1)',
      stroke: 'rgba(0,0,0,0.2)'
    },
    title: {
      name: 'GroupTitle',
      text: 'Title',
      alignment: go.Spot.TopLeft,
      alignmentFocus: new go.Spot(0, 0, -4, -4),
      font: '12px Sans-Serif',
      stroke: group.color,
      margin: new go.Margin(3, 5, 3, 5)
    }
  }
}

// --------------------------------------------------------------------


export function nodeOptions(theme = defaultTheme) {
  return {
    shape: {
      name: 'shape',
      figure: theme.NODE_FIGURE,
      fill: theme.NODE_FILL,
      stroke: theme.NODE_STROKE,
      strokeWidth: theme.NODE_STROKE_WIDTH,
      width: theme.NODE_WIDTH,
      height: theme.NODE_HEIGHT,
      $hover: {
        fill: theme.NODE_FILL_HOVER
      },
      $selected: {
        fill: theme.NODE_FILL_SELECTED
      }
    },
    icon: {
      name: 'icon',
      figure: theme.NODE_FIGURE,
      fill: theme.NODE_ICON_COLOR,
      scale: 0.6,
      strokeWidth: 0,
      desiredSize: new go.Size(theme.NODE_WIDTH, theme.NODE_HEIGHT),
      margin: new go.Margin(-8, 0, 0, 0),
      $hover: {
        fill: theme.NODE_ICON_COLOR_HOVER
      },
      $selected: {
        fill: theme.NODE_ICON_COLOR_SELECTED
      }
    },
    label: {
      name: 'label',
      stroke: theme.NODE_TEXT_COLOR,
      text: '文本',
      textAlign: 'center',
      font: '14px "Microsoft YaHei",Serif'
    }
  }
}

export function linkOptions(theme = defaultTheme) {
  return {
    line: {
      name: 'line',
      stroke: theme.LINK_STROKE,
      strokeWidth: theme.LINK_STROKE_WIDTH,
      $selected: {
        stroke: theme.LINK_STROKE_SELECTED,
        strokeWidth: theme.LINK_STROKE_WIDTH
      },
      $hover: {
        stroke: theme.LINK_STROKE_HOVER,
        strokeWidth: theme.LINK_STROKE_WIDTH
      }
    },
    arrow: {
      name: 'arrow',
      toArrow: 'Standard',
      fill: theme.LINK_STROKE,
      stroke: theme.LINK_STROKE,
      strokeWidth: theme.LINK_STROKE_WIDTH,
      $hover: {
        stroke: theme.LINK_STROKE_HOVER,
        fill: theme.LINK_STROKE_HOVER,
        strokeWidth: theme.LINK_STROKE_WIDTH
      },
      $selected: {
        stroke: theme.LINK_STROKE_SELECTED,
        fill: theme.LINK_STROKE_SELECTED,
        strokeWidth: theme.LINK_STROKE_WIDTH
      }
    },
    label: {
      name: 'linkLabel',
      text: '连线文本',
      segmentOffset: new go.Point(0, -10),
      segmentOrientation: go.Link.OrientUpright,
      segmentFraction: 0.5,
      segmentIndex: 0,
      stroke: theme.LINK_TEXT_COLOR,
      $hover: {
        stroke: theme.LINK_TEXT_COLOR_HOVER
      },
      $selected: {
        stroke: theme.LINK_TEXT_COLOR_SELECTED
      }
    }
  }
}
