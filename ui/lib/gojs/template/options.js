import {go} from '../utils/lib'
import defaultTheme, {normal} from './theme'

export function normalNodeOptions({node} = normal) {
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
    }
  }
}


// --------------------------------------------------------------------
export function tooltipOptions(theme = defaultTheme) {
  return {
    panel: {
      type: go.Panel.Auto,
      alignment: go.Spot.Top,
      alignmentFocus: go.Spot.Bottom
    },
    shape: {
      figure: 'RoundedRectangle',
      fill: theme.TOOLTIP_FILL,
      stroke: 'rgba(0,0,0,0)'
    },
    text: {
      text: 'Tooltip文本',
      stroke: theme.TOOLTIP_TEXT_COLOR,
      margin: new go.Margin(3, 5, 2, 3),
      wrap: go.TextBlock.WrapBreakAll
    }
  }
}

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
