import {go, toList} from '../utils/lib'

export default {
  methods: {
    /**
     * 新增节点
     * @param {Object|Object[]} data 节点数据或数据数组
     */
    addNode(data) {
      const model = this.diagram.model
      this.commit(() => {
        Array.isArray(data)
          ? model.addNodeDataCollection(data)
          : model.addNodeData(data)
      }, 'addNode')
    },
    /**
     * 新增连线
     * @param {Object|Object[]} data 连线数据或数据数组
     */
    addLink(data) {
      const model = this.diagram.model
      this.commit(() => {
        Array.isArray(data)
          ? model.addLinkDataCollection(data)
          : model.addLinkData(data)
      }, 'addLink')
    },
    /**
     * 删除节点
     * @param {string|number|function} keyOrFunc 节点key或匹配函数
     */
    removeNode(keyOrFunc) {
      const nodes = typeof keyOrFunc === 'function'
        ? this.findNodes(keyOrFunc)
        : this.findNode(keyOrFunc)
      this.commit(() => {
        this.diagram.model.removeNodeDataCollection([].concat(nodes))
      })
    },
    /**
     * 删除连线
     * @param {string|number|function} keyOrFunc 连线key或匹配函数
     */
    removeLink(keyOrFunc) {
      const links = typeof keyOrFunc === 'function'
        ? this.findLinks(keyOrFunc)
        : this.findLink(keyOrFunc)
      this.commit(() => {
        this.diagram.model.removeLinkDataCollection([].concat(links))
      })
    },
    /**
     * 查找单个节点
     * @param {string|number|function} keyOrFunc 节点key或匹配函数
     * @param {boolean} [isObject] 返回图形对象
     * @returns {Object|go.GraphObject}
     */
    findNode(keyOrFunc, isObject) {
      const model = this.diagram.model
      const nodeDataArray = model.nodeDataArray || []
      const data = typeof keyOrFunc === 'function'
        ? nodeDataArray.find(keyOrFunc)
        : model.findNodeDataForKey(keyOrFunc)
      return isObject ? this.diagram.findNodeForData(data) : data
    },
    /**
     * 查找单个连线
     * @param  {string|number|function} keyOrFunc 连线key或匹配函数
     * @param {boolean} [isObject] 返回图形对象
     * @returns {Object|go.GraphObject}
     */
    findLink(keyOrFunc, isObject) {
      const model = this.diagram.model
      const linkDataArray = model.linkDataArray || []
      const data = typeof keyOrFunc === 'function'
        ? linkDataArray.find(keyOrFunc)
        : model.findLinkDataForKey(keyOrFunc)
      return isObject ? this.diagram.findLinkForData(data) : data
    },
    /**
     * 查找多个节点
     * @param {function} filter 过滤函数
     * @param {boolean} [isObject] 返回图形对象
     * @returns {Object[]|go.GraphObject[]}
     */
    findNodes(filter, isObject) {
      const model = this.diagram.model
      const nodeDataArray = model.nodeDataArray || []
      const dataArray = nodeDataArray.filter(filter)
      return isObject
        ? dataArray.map(data => this.diagram.findNodeForData(data))
        : dataArray
    },
    /**
     * 查找多个连线
     * @param {function} filter 过滤函数
     * @param {boolean} [isObject] 返回图形对象
     * @returns {Object[]|go.GraphObject[]}
     */
    findLinks(filter, isObject) {
      const model = this.diagram.model
      const linkDataArray = model.linkDataArray || []
      const dataArray = linkDataArray.filter(filter)
      return isObject
        ? dataArray.map(data => this.diagram.findLinkForData(data))
        : dataArray
    },
    /**
     * 全部节点
     * @returns {go.GraphObject[]}
     */
    allNodes() {
      return toList(this.diagram.nodes)
    },
    /**
     * 全部连线
     * @returns {go.GraphObject[]}
     */
    allLinks() {
      return toList(this.diagram.links)
    },
    /**
     * 查找子节点和连线
     * @param {string|number} key 节点的key
     * @param {boolean} [isObject] 返回图形对象
     * @param {string} [parentKey=parent] parentKey
     * @returns {{nodes, links}}
     */
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
      } else if (model instanceof go.TreeModel) {
        const nodeDataArray = model.nodeDataArray || []
        const nodes = nodeDataArray.filter(item => item[parentKey] === key)
        return {
          nodes: isObject ? nodes.map(data => this.diagram.findNodeForData(data)) : nodes,
          links: isObject ? this.allLinks().filter(link => link.fromNode?.key === key) : []
        }
      }
    },

    /**
     * 查找相邻关联的节点和连线
     * @param {string|number} key 节点的key
     * @param {boolean} [isObject] 返回图形对象
     * @param {string} [parentKey=parent] parentKey
     * @returns {{nodes, links}}
     */
    findRelated(key, isObject = false, parentKey = 'parent') {
      const model = this.diagram.model
      if (model instanceof go.GraphLinksModel) {
        const links = this.findLinks(n => n.from === key || n.to === key)
        const nodes = []
        links.forEach(link => {
          let temp = this.findNode(link.to)
          temp && nodes.push(temp)
          temp = this.findNode(link.from)
          temp && nodes.push(temp)
        })
        return isObject
          ? {
            nodes: nodes.map(data => this.diagram.findNodeForData(data)),
            links: links.map(data => this.diagram.findLinkForData(data))
          }
          : {nodes, links}

      } else if (model instanceof go.TreeModel) {
        const nodeDataArray = model.nodeDataArray || []
        const currentNode = this.findNode(key)
        const parent = currentNode ? this.findNode(currentNode[parentKey]) : null
        const nodes = nodeDataArray.filter(item => item[parentKey] === key)
        if (parent) {
          nodes.push(parent)
        }
        return {
          nodes: isObject ? nodes.map(data => this.diagram.findNodeForData(data)) : nodes,
          links: isObject
            ? this.allLinks().filter(link => link.fromNode?.key === key || link.toNode?.key === key)
            : []
        }
      }
    },

    /**
     * 清空画布
     */
    clear() {
      this.diagram.clear()
    },

    /**
     * 更新图形
     */
    resize(alwaysQueueUpdate) {
      if (!this.diagram) return
      this.diagram.requestUpdate(alwaysQueueUpdate)
    }
  }
}
