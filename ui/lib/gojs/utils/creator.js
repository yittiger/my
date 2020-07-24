import {go, $} from './lib'

function createHoverBindings(normal, hover = {}, selected = {}) {
  return Object.entries(hover).map(([k, v]) => {
    return new go.Binding(k, 'isHighlighted', function (yes, obj) {
      const selectedValue = selected[k]
      // 如果有配置selected属性，优先取selected
      if (selectedValue !== undefined && selectedValue === obj[k]) {
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

function optionsParser(options = {}) {
  const opts = {...options}
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
 * @param {Object} [options] 配置选项, {...props, $hover, $selected, $events, $bindings}
 * @param {GraphObject|GraphObject[]} [children] 子 GraphObject
 * @returns {GraphObject}
 */
export default function ({name, options, children} = {}) {
  const {$normal, $hover, $selected, $bindings} = optionsParser(options || {})
  const hoverBindings = createHoverBindings($normal, $hover, $selected)
  const selectedBindings = createSelectedBindings($normal, $selected)
  const items = [].concat(children || [])
  const mergeBindings = [...hoverBindings, ...selectedBindings, ...($bindings || [])]
  return $(name, $normal, ...items, ...mergeBindings)
}
