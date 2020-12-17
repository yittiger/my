import merge from 'lodash/merge'

const go = process.env.NODE_ENV === 'production'
  ? require('gojs/release/go')
  : require('gojs/release/go-debug')

const $ = go.GraphObject.make

// 对segmentFraction 设置自定义动画
go.AnimationManager.defineAnimationEffect('fraction',
function(obj, startValue, endValue, easing, currentTime, duration, animation) {
  obj.segmentFraction = easing(currentTime, startValue, endValue - startValue, duration);
});

go.Shape.defineFigureGenerator('Terminator', function (shape, w, h) {
  console.log(w, h)
  const geo = new go.Geometry();
  const fig = new go.PathFigure(0.25 * w, 0, true);
  geo.add(fig);

  fig.add(new go.PathSegment(go.PathSegment.Arc, 270, 180, 0.75 * w, 0.5 * h, 0.25 * w, 0.5 * h));
  fig.add(new go.PathSegment(go.PathSegment.Arc, 90, 180, 0.25 * w, 0.5 * h, 0.25 * w, 0.5 * h));
  geo.spot1 = new go.Spot(0.23, 0);
  geo.spot2 = new go.Spot(0.77, 1);
  return geo;
})


export function toList(collection) {
  const items = []
  const it = collection.iterator
  while (it.next()) {
    items.push(it.value)
  }
  return items
}

export default go
export {
  go,
  $,
  merge
}

// 查找最短路径相关方法
export function getShortestPath(diag, startNode, endNode) {
  const findRouteFun = findRouteProxy(diag)
  const paths = findRouteFun([startNode], endNode)
  let minPath, minLength
  if (paths.length === 0) {
    return []
  }
  paths.forEach(r => {
    if(minLength === undefined || r.length < minLength) {
      minPath = r
      minLength = r.length
    }
  })
  return minPath
}
export function findRouteProxy(diag) {
  let found
  const finding = {}
  // startNodes 为开始节点的key
  const findRoute = function (startNodes, endNode) {
    if(!found) {
      found = { start: startNodes[0], paths: []}
      finding[found.start] = [found.start]
    }
    const starts = []
    startNodes.forEach(n1 => {
      const node1 = diag.findNodeForKey(n1)
      const cNodes = node1.findNodesConnected()
      cNodes.each(N => {
        // 如果finding[N.key]不为空，则说明这个节点之前已经找过，不再二次查找
        if(!finding[N.key] && found.start !== N.key) {
          if(N.key === endNode) {
            found.paths.push(finding[n1].concat([N.key]))
          } else {
            starts.push(N.key)
            finding[N.key] = finding[n1].concat([N.key])
          }
        }
      })
    })
    if(starts.length === 0) {
      return found.paths
    } else {
      return findRoute(starts, endNode)
    }
  }
  return findRoute
}
export function getChain(diag, path) {
  const nodes = [], links = [], chain = []
  for (let i = 0; i < path.length - 1; i++) {
    const node1 = diag.findNodeForKey(path[i])
    const node2 = diag.findNodeForKey(path[i + 1])
    if(i === 0) {
      nodes.push(node1)
      chain.push(node1)
    }
    const _links = node1.findLinksBetween(node2)
    _links.each(r => {
      links.push(r)
      chain.push(r)
    })
    nodes.push(node2)
    chain.push(node2)
  }
  return { nodes, links, chain }
}

 // 多条link线上加动画
 export function linksTrack(links, diagram, animation) {
  let _links = []
  if (links.toString && links.toString() === 'SetIterator') {
    _links = toList(links)
  } else {
    _links = links
  }
   diagram.startTransaction('addLinkTrackPoint')
    animation.duration = 3000
    animation.runCount = Infinity
  _links.forEach(L => {
    L.add($(go.Shape, 'Circle', {
      name: 'trackPoint',
      fill: 'red',
      strokeWidth: 0,
      width: 20,
      height: 20,
      segmentIndex: 0
    }))
    animation.add(L.findObject('trackPoint'),
     'fraction', 0, 1)
     let fromColor = '#ed7d31', toColor = '#ed7d31', fromObj = null, toObj = null
     fromObj = L.fromNode.findObject('shape') || L.fromNode.findObject('icon')
     if(fromObj) {
       fromColor = fromObj.fill
     }
     toObj = L.toNode.findObject('shape') || L.toNode.findObject('icon')
     if(toObj) {
       toColor = toObj.fill
     }
    animation.add(L.findObject('trackPoint'), 
    'fill', 
    fromColor, 
    toColor)
  })
  animation.start()
  diagram.commitTransaction('addLinkTrackPoint')
}
// 单条link线上动画
export function linkTrack(link, diagram, animation) {
  diagram.startTransaction('addLinkTrackPoint')
  animation.duration = 3000
  animation.runCount = Infinity
  link.add($(go.Shape, 'Circle', {
    name: 'trackPoint',
    fill: 'red',
    strokeWidth: 0,
    width: 20,
    height: 20,
    segmentIndex: 0
  }))
  
  animation.add(link.findObject('trackPoint'),
    'fraction', 0, 1)
  animation.add(link.findObject('trackPoint'), 
  'fill', 
  link.fromNode.findObject('shape').fill, 
  link.toNode.findObject('shape').fill)
  diagram.commitTransaction('addLinkTrackPoint')
  animation.start()
}
