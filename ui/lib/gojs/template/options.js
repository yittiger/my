import {go} from '../utils/lib'
import defaultTheme from './theme'


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
      figure: 'Circle',
      fill: theme.NODE_FILL,
      stroke: theme.NODE_STROKE,
      strokeWidth: theme.NODE_STROKE_WIDTH,
      width: theme.NODE_SIZE,
      height: theme.NODE_SIZE,
      $hover: {
        fill: theme.NODE_FILL_HOVER
      },
      $selected: {
        fill: theme.NODE_FILL_SELECTED
      }
    },
    icon: {
      name: 'icon',
      figure: 'Circle',
      fill: theme.NODE_ICON_COLOR,
      scale: 0.6,
      strokeWidth: 0,
      desiredSize: new go.Size(theme.NODE_SIZE, theme.NODE_SIZE),
      margin: new go.Margin(-8, 0, 0, 0),
      $hover: {
        fill: theme.NODE_ICON_COLOR_HOVER
      },
      $selected: {
        fill: theme.NODE_ICON_COLOR_SELECTED
      }
    },
    label: {
      stroke: theme.NODE_TEXT_COLOR,
      text: '文本',
      name: 'label',
      textAlign: 'center',
      font: '14px "Microsoft YaHei",Serif'
    }
  }
}


export function linkOptions(theme = defaultTheme) {
  return {
    line: {
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
      text: '连线文本',
      segmentOffset: new go.Point(0, -10),
      segmentOrientation: go.Link.OrientUpright,
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
