import Vue from 'vue'
import {install} from '$ui/utils/helper'
import Module from './src/Contextmenu'

const directive = {
  // 之所以用 inserted 而不是 bind，是需要确保 contentmenu mounted 后才进行 addRef 操作
  inserted(el, binding, vnode) {
    const node = vnode.context.$refs[binding.arg] || vnode.context.$refs[binding.value]
    const wrapper = Object.prototype.toString.call(node) === '[object Array]' ? node[0] : node
    if (wrapper && wrapper.$refs.contextmenu) {
      const contextmenu = wrapper.$refs.contextmenu
      contextmenu.addRef({el, vnode})
      contextmenu.$contextmenuId = el.id || contextmenu._uid // eslint-disable-line no-underscore-dangle
    }
    
  }
}

Vue.directive('contextmenu', directive)

export default install(Module)
