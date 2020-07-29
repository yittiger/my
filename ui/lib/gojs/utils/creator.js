import {go, $} from './lib'

/**
 * 检测当前的图形时候被选中
 * @param obj
 * @returns {boolean}
 */
// function isSelected(obj) {
//   const selection = obj.diagram.selection
//   const it = selection.iterator
//   let selected = false
//   while (!selected && it.next()) {
//     selected = obj.isContainedBy(it.value)
//   }
//   return selected
// }
//
// function createHoverBindings(normal, hover = {}, selected = {}) {
//   return Object.entries(hover).map(([k, v]) => {
//     return new go.Binding(k, 'isHighlighted', function (yes, obj) {
//       console.log(yes)
//       return yes ? v : normal[k]
//       // return yes ? v : normal[k]
//       // const selectedValue = selected[k]
//       // // 如果有配置selected属性，优先取selected
//       // if (isSelected(obj) && selectedValue !== undefined) {
//       //   return selectedValue
//       // } else {
//       //   return yes ? v : normal[k]
//       // }
//     }).ofObject()
//   })
// }


function parseProps(props = {}) {
  const opts = {...props}
  const {$hover, $selected, $bindings, $events, $disabled} = opts
  delete opts.$hover
  delete opts.$selected
  delete opts.$bindings
  delete opts.$events
  delete opts.$disabled
  return {
    $normal: {...opts, ...$events},
    $hover,
    $selected,
    $bindings,
    $disabled
  }
}

function createHoverBindings(normal, hover, selected = {}, disabled = {}) {
  if (!hover) return []
  return Object.entries(hover).map(([name, value]) => {
    return new go.Binding(name, 'isHighlighted', (yes, obj) => {
      const isSelected = obj.part?.isSelected
      const isEnabled = obj.part?.isEnabled
      const selectedValue = selected[name]
      const disabledValue = disabled[name]
      if (!isEnabled && disabledValue !== undefined) {
        return disabledValue
      }
      // 如果当前节点已经选中了，不改变鼠标经过样式
      if (isSelected && selectedValue !== undefined) {
        return selectedValue
      }
      return yes ? value : normal[name]
    }).ofObject()
  })
}

function createSelectedBindings(normal, selected = {}, disabled = {}) {
  if (!selected) return []
  return Object.entries(selected).map(([name, value]) => {
    return new go.Binding(name, 'isSelected', (yes, obj) => {
      const isEnabled = obj.part?.isEnabled
      const disabledValue = disabled[name]
      if (!isEnabled && disabledValue !== undefined) {
        return disabledValue
      }
      return yes ? value : normal[name]
    }).ofObject()
  })
}

function createDisabledBindings(normal, disabled = {}) {
  if (!disabled) return []
  return Object.entries(disabled).map(([name, value]) => {
    return new go.Binding(name, 'isEnabled', yes => {
      return yes ? normal[name] : value
    }).ofObject()
  })
}


/**
 * GraphObject 模板构造器
 * @param {GraphObject} name GraphObject 类名
 * @param {Object} [props] 配置属性, {...props, $hover, $selected, $events, $bindings, $disabled}
 * @param {GraphObject|GraphObject[]} [children] 子 GraphObject
 * @returns {GraphObject}
 */
export default function ({name, props, children} = {}) {
  const {$normal, $hover, $selected, $bindings, $disabled} = parseProps(props || {})
  const items = [].concat(children || [])
  return $(name,
    $normal,
    ...items,
    ...($bindings || []),
    ...createHoverBindings($normal, $hover, $selected, $disabled),
    ...createSelectedBindings($normal, $selected, $disabled),
    ...createDisabledBindings($normal, $disabled)
  )
  // const hoverBindings = [] // createHoverBindings($normal, $hover, $selected)
  // const selectedBindings = [] // createSelectedBindings($normal, $selected)
  // const items = [].concat(children || [])
  // const mergeBindings = [...hoverBindings, ...selectedBindings, ...($bindings || [])]
  // return $(name, $normal, ...items, ...mergeBindings)
}
