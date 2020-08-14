import {go, merge} from '../utils/lib';
import {normalIconNodeOptions, normalImageNodeOptions, normalNodeOptions} from './options'
import creator from '../utils/creator'
import {base, defaultTooltip} from './common'

const lockPath = 'F M860.069521 429.487623h-73.242947v-170.422692C786.826574 ' +
  '116.337371 670.888872 0.272064 528.240764 0.272064c-142.650515 0-258.720638 ' +
  '116.065307-258.720638 258.792867v170.422692H196.339779c-35.281619 0-63.879618' +
  ' 28.612445-63.879618 63.91814v466.606275c0 35.368294 28.597999 63.983146 63.879' +
  '618 63.983147h663.79234c35.29125 0 63.821834-28.614852 63.821835-63.983147V493.4' +
  '05763c-0.004815-35.310511-28.590776-63.91814-63.884433-63.91814zM564.114664 738.' +
  '867504v101.889098c0 4.552855-3.765556 8.388233-8.385825 8.388233h-54.91355c-4.' +
  '678053 0-8.446016-3.837785-8.446017-8.388233v-101.889098c-25.800316-13.201114-' +
  '43.672259-39.665939-43.672259-70.68362 0-43.888947 35.613874-79.584681 79.4811' +
  '53-79.584682 43.932285 0 79.548567 35.695734 79.548566 79.584682 0.062599 31.02' +
  '0089-17.811752 57.482507-43.612068 70.68362z m123.476036-309.379881H368.88360' +
  '5v-166.202091c0-87.912723 71.55278-159.501618 159.417351-159.501618s159.287337 ' +
  '71.588895 159.287337 159.501618l0.002407 166.202091z'

function createLockIcon() {
  return creator({
    name: go.Shape,
    props: {
      width: 14,
      height: 14,
      geometryString: lockPath,
      alignment: new go.Spot(0, 0, 10, 10),
      fill: 'yellow',
      opacity: 1,
      $disabled: {
        opacity: 0.1
      },
      $bindings: [
        new go.Binding('visible', 'movable', (yes, obj) => {
          return !obj.part.movable
        }).ofObject()
      ]
    }
  })
}

function createLabel(label, shape) {
  if (!label) return null
  return creator({
    name: go.Panel,
    props: {
      type: go.Panel.Auto,
      margin: new go.Margin(3, 0, 0, 0)
    },
    children: [
      creator({
        name: go.Shape,
        props: {
          figure: 'RoundedRectangle',
          fill: shape?.stroke || 'rgba(0,0,0,0.15)',
          strokeWidth: 0,
          visible: true,
          $disabled: {
            visible: false
          }
        }
      }),
      creator({
        name: go.TextBlock,
        props: label
      })
    ]
  })
}

function createTags(tags) {
  return creator({
    name: go.Panel,
    props: {
      type: go.Panel.Horizontal,
      alignment: go.Spot.TopCenter,
      itemArray: [
        {label: '黄', color: '#7f6e05', fill: '#fde0ac'},
        {label: '毒', color: '#f31506', fill: '#fcb2b2'}
      ],
      itemTemplate: creator({
        name: go.Panel,
        props: {
          type: go.Panel.Auto,
          margin: new go.Margin(0, 2, 25, 2)
        },
        children: [
          creator({
            name: go.Shape,
            props: {
              figure: 'RoundedRectangle',
              fill: '#cccccc',
              strokeWidth: 0,
              $bindings: [
                new go.Binding('fill', 'fill')
              ]
            }
          }),
          creator({
            name: go.TextBlock,
            props: {
              text: '黄',
              stroke: '#ff0000',
              margin: new go.Margin(0, 2, 0, 2),
              $bindings: [
                new go.Binding('text', 'label'),
                new go.Binding('stroke', 'color')
              ]
            }
          })
        ]
      })
    }
  })
}


/**
 * 基础节点模板
 * @param {Object} options 配置参数，{tooltip, props, children, $events, $bindings}
 * @param {Object} wrapperProps
 * @returns {GraphObject}
 */
export function nodeTemplate(options = {}) {
  const {props, wrapper, tooltip, children, $events, $bindings} = options
  return base({
    name: go.Node,
    props: {
      name: 'node',
      zOrder: 1,
      type: go.Panel.Spot,
      minSize: new go.Size(20, 20),
      toolTip: tooltip ? defaultTooltip(tooltip) : null,
      $events,
      $bindings,
      ...(props || {})
    },
    children: [
      creator({
        name: go.Panel,
        props: {
          type: go.Panel.Auto,
          ...(wrapper || {})
        },
        children: children || []
      }),
      createLockIcon(),
      createTags()
    ]
  })
}

/**
 * 通用节点模板
 * @param options options 配置参数，{shape, label, tooltip, $events, $bindings}
 * @param theme
 * @returns {GraphObject}
 */
export function normalNode(options = {}, theme) {
  const opts = merge({}, normalNodeOptions(theme), options)
  const {props, shape, label, tooltip, $events, $bindings} = opts
  return nodeTemplate({
    props,
    tooltip,
    $events,
    $bindings,
    children: [
      shape
        ? creator({
          name: go.Shape,
          props: shape
        })
        : null,
      label
        ? creator({
          name: go.TextBlock,
          props: label
        })
        : null
    ]
  })
}

/**
 * 圆形节点
 * @param options
 * @param theme
 * @returns {GraphObject}
 */
export function circle(options = {}, theme) {
  const opts = merge({}, options, {
    shape: {
      figure: 'Circle'
    }
  })
  return normalNode(opts, theme)
}

/**
 * 圆角矩形节点
 * @param options
 * @param theme
 * @returns {GraphObject}
 */
export function rectangle(options = {}, theme) {
  const opts = merge({}, options, {
    props: {
      toSpot: go.Spot.AllSides,
      fromSpot: go.Spot.AllSides
    },
    shape: {
      figure: 'RoundedRectangle'
    }
  })
  return normalNode(opts, theme)
}

/**
 * 菱形节点
 * @param options
 * @param theme
 * @returns {GraphObject}
 */
export function diamond(options = {}, theme) {
  const opts = merge({}, options, {
    props: {
      toSpot: go.Spot.AllSides,
      fromSpot: go.Spot.AllSides
    },
    shape: {
      figure: 'Diamond'
    }
  })
  return normalNode(opts, theme)
}

/**
 * 带图标的普通节点模板
 * @param options options 配置参数，{shape, label, icon, tooltip, $events, $bindings}
 * @param theme
 * @returns {GraphObject}
 */
export function icon(options = {}, theme) {
  const opts = merge({}, normalIconNodeOptions(theme), options)
  const {props, shape, label, icon, tooltip, $events, $bindings} = opts
  return nodeTemplate({
    props,
    wrapper: {
      type: go.Panel.Vertical
    },
    tooltip,
    $events,
    $bindings,
    children: [
      creator({
        name: go.Panel,
        props: {
          type: go.Panel.Auto
        },
        children: [
          shape
            ? creator({
              name: go.Shape,
              props: shape
            })
            : null,
          icon
            ? creator({
              name: go.Shape,
              props: icon
            })
            : null
        ]
      }),
      createLabel(label, shape)
    ]
  })
}

/**
 * 带图片的普通节点
 * @param options options 配置参数，{shape, label, image, tooltip, $events, $bindings}
 * @param theme
 * @returns {GraphObject}
 */
export function image(options = {}, theme) {
  const opts = merge({}, normalImageNodeOptions(theme), options)
  const {props, shape, label, image, tooltip, $events, $bindings} = opts
  const {width = 64, height = 64, strokeWidth = 0, figure} = shape || {}
  const imageGraph = creator({
    name: go.Panel,
    props: {
      ...props,
      type: go.Panel.Spot,
      isClipping: true
    },
    children: [
      creator({
        name: go.Shape,
        props: {
          figure: figure,
          width,
          height
        }
      }),
      creator({
        name: go.Picture,
        props: {
          width,
          height,
          ...(image || {})
        }
      })
    ]
  })
  return nodeTemplate({
    tooltip,
    $events,
    $bindings,
    children: [
      creator({
        name: go.Panel,
        props: {
          type: go.Panel.Spot,
          width: width + strokeWidth * 2,
          height: height + strokeWidth * 2
        },
        children: [
          shape
            ? creator({
              name: go.Shape,
              props: shape
            })
            : null,
          image ? imageGraph : null
        ]
      }),
      createLabel(label, shape)
    ]
  })
}
