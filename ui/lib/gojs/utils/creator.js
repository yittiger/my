import {go, $} from './lib'

/**
 * 检测当前的图形时候被选中
 * @param obj
 * @returns {boolean}
 */
function isSelected(obj) {
  const selection = obj.diagram.selection
  const it = selection.iterator
  let selected = false
  while (!selected && it.next()) {
    selected = obj.isContainedBy(it.value)
  }
  return selected
}

function createHoverBindings(normal, hover = {}, selected = {}) {
  return Object.entries(hover).map(([k, v]) => {
    return new go.Binding(k, 'isHighlighted', function (yes, obj) {
      const selectedValue = selected[k]
      // 如果有配置selected属性，优先取selected
      if (isSelected(obj) && selectedValue !== undefined) {
        return selectedValue
      } else {
        return yes ? v : normal[k]
      }
    }).ofObject()
  })
}

function createSelectedBindings(normal, selected = {}) {
  return Object.entries(selected).map(([k, v]) => {
    return new go.Binding(k, 'isSelected', yes => {
      return yes ? v : normal[k]
    }).ofObject()
  })
}

function optionsParser(props = {}) {
  const opts = {...props}
  const {$hover, $selected, $bindings, $events} = opts
  delete opts.$hover
  delete opts.$selected
  delete opts.$bindings
  delete opts.$events
  return {
    $normal: {...opts, ...$events},
    $hover,
    $selected,
    $bindings
  }
}


/**
 * GraphObject 模板构造器
 * @param {GraphObject} name GraphObject 类名
 * @param {Object} [props] 配置属性, {...props, $hover, $selected, $events, $bindings}
 * @param {GraphObject|GraphObject[]} [children] 子 GraphObject
 * @returns {GraphObject}
 */
export default function ({name, props, children} = {}) {
  const {$normal, $hover, $selected, $bindings} = optionsParser(props || {})
  const hoverBindings = createHoverBindings($normal, $hover, $selected)
  const selectedBindings = createSelectedBindings($normal, $selected)
  const items = [].concat(children || [])
  const mergeBindings = [...hoverBindings, ...selectedBindings, ...($bindings || [])]
  return $(name, $normal, ...items, ...mergeBindings)
}
