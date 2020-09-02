import {go, toList} from '../utils/lib'

export default {
  methods: {
    addNode(data) {
      const model = this.diagram.model
      this.commit(() => {
        Array.isArray(data)
          ? model.addNodeDataCollection(data)
          : model.addNodeData(data)
      }, 'addNode')
    },
    addLink(data) {
      const model = this.diagram.model
      this.commit(() => {
        Array.isArray(data)
          ? model.addLinkDataCollection(data)
          : model.addLinkData(data)
      }, 'addLink')
    },
    removeNode(keyOrFunc) {
      const nodes = typeof keyOrFunc === 'function'
        ? this.findNodes(keyOrFunc)
        : this.findNode(keyOrFunc)
      this.commit(() => {
        this.diagram.model.removeNodeDataCollection([].concat(nodes))
      })
    },
    removeLink(keyOrFunc) {
      const links = typeof keyOrFunc === 'function'
        ? this.findLinks(keyOrFunc)
        : this.findLink(keyOrFunc)
      this.commit(() => {
        this.diagram.model.removeLinkDataCollection([].concat(links))
      })
    },
    findNode(keyOrFunc, isObject) {
      const model = this.diagram.model
      const nodeDataArray = model.nodeDataArray || []
      const data = typeof keyOrFunc === 'function'
        ? nodeDataArray.find(keyOrFunc)
        : model.findNodeDataForKey(keyOrFunc)
      return isObject ? this.diagram.findNodeForData(data) : data
    },
    findLink(keyOrFunc, isObject) {
      const model = this.diagram.model
      const linkDataArray = model.linkDataArray || []
      const data = typeof keyOrFunc === 'function'
        ? linkDataArray.find(keyOrFunc)
        : model.findLinkDataForKey(keyOrFunc)
      return isObject ? this.diagram.findLinkForData(data) : data
    },
    findNodes(filter, isObject) {
      const model = this.diagram.model
      const nodeDataArray = model.nodeDataArray || []
      const dataArray = nodeDataArray.filter(filter)
      return isObject
        ? dataArray.map(data => this.diagram.findNodeForData(data))
        : dataArray
    },
    findLinks(filter, isObject) {
      const model = this.diagram.model
      const linkDataArray = model.linkDataArray || []
      const dataArray = linkDataArray.filter(filter)
      return isObject
        ? dataArray.map(data => this.diagram.findLinkForData(data))
        : dataArray
    },
    allNodes() {
      return toList(this.diagram.nodes)
    },
    allLinks() {
      return toList(this.diagram.links)
    },
    findChild(key, isObject = false, parentKey = 'parent') {
      const model = this.diagram.model
      if (model instanceof go.GraphLinksModel) {
        const links = this.findLinks(n => n.from === key)
        const nodes = links.map(link => this.findNode(link.to))
        return isObject
          ? {
            nodes: nodes.map(data => this.diagram.findNodeForData(data)),
            links: links.map(data => this.diagram.findLinkForData(data))
          }
          : {nodes, links}
      }
    }
  }
}
