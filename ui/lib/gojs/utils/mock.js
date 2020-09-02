import go from './lib'
import {cloneDeep} from '$ui/utils/util'

export function mockNodes(min = 0, max = 0) {
  const nodes = []
  min = Math.max(0, min)
  max = Math.max(min, max)
  const total = Math.floor(Math.random() * (max - min + 1)) + min
  for (let i = 0; i < total; i++) {
    nodes.push({
      key: i,
      text: `node${i.toString()}`,
      fill: go.Brush.randomColor()
    });
  }
  // 打乱顺序
  for (let i = 0; i < nodes.length; i++) {
    const swap = Math.floor(Math.random() * nodes.length);
    const temp = nodes[swap]
    nodes[swap] = nodes[i]
    nodes[i] = temp
  }
  return Object.freeze(nodes)
}

export function mockLinks(nodes, min, max) {
  const links = []
  if (nodes.length < 2) return links
  min = Math.min(0, min)
  max = Math.max(min, max)
  let deepCopy = cloneDeep(nodes)
  for (let i = 0; i < nodes.length; i++) {
    const next = nodes[i]
    deepCopy = deepCopy.filter(n => n.key !== next.key)
    const children = Math.floor(Math.random() * (max - min + 1)) + min
    for (let j = 1; j < children; j++) {
      if (deepCopy.length === 0) break
      const to = deepCopy[0]
      deepCopy = deepCopy.filter(n => n.key !== to.key)
      links.push({
        key: Math.random() * Date.now(),
        from: next.key,
        to: to.key,
        text: `link:${next.key}-${to.key}`
      })
    }
  }
  return Object.freeze(links)
}

export function mockTree(minNodes, maxNodes, minChild, maxChild) {
  const nodes = mockNodes(minNodes, maxNodes)
  const links = mockLinks(nodes, minChild, maxChild)
  return {
    nodes,
    links
  }
}
