<template>
  <my-dialog
    :title="title"
    :visible.sync="draftVisible"
    :target="target"
    class="my-go-draft"
    :width="width"
    :height="height"
    @close="close"
    :draggable="draggable"
  >
    <slot
      :close="close"
      :draftList="draftList"
      :remove="remove"
      :load="load"
      :save="save"
      :clear="clear"
    >
      <div class="my-go-draft__content">
        <div v-for="(item, idx) in draftList" :key="idx" class="my-go-draft__item">
          <img :src="item.thumb" class="img" />
          <span class="txt">
            <div class="name">{{item.name}}</div>
            <div class="time">{{item.time}}</div>
          </span>
          <div class="btns">
            <i @click="remove(item)" class="iconfont icon-multiply remove"></i>
            <i @click="load(item)" class="iconfont icon-download load"></i>
          </div>
        </div>
      </div>
      <div slot="footer" class="my-go-draft__footer" @keyup.enter="save()">
        <el-input v-model="itemName" class="name-input" size="mini" placeholder="输入草稿名称"></el-input>
        <el-button size="mini" type="primary" @click="save()" circle>
          <my-icon name="icon-save" svg></my-icon>
        </el-button>
        <el-button size="mini" type="primary" @click="clear()" circle>
          <my-icon name="icon-delete" svg></my-icon>
        </el-button>
      </div>
    </slot>
  </my-dialog>
</template>
<script>
/**
 * MyGoDraft组件
 * @module my-go-draft
 * @description 草稿箱组件
 */
import go from 'gojs'
import '$ui/icons/save'
import '$ui/icons/delete'
import { save, get, remove } from '../../../utils/storage'
import diagramManager from '../../../utils/dataManager/diagramManager'
/**
 * 插槽
 * @member slots
 * @property {String} [default] 草稿箱插槽,slot-scope =
 * @property {Function} [default.close] 关闭方法
 * @property {Array} [default.draftList] 草稿列表 =  [{ json: '{ "class": "GraphLinksModel",↵ "nodeDataArray": [ ↵{"key":"A", "category":"a", "location":{"class":"go.Point", "x":0, "y":30.250027885742202}},↵ {"key":"B", "category":"b", "location":{"class":"go.Point", "x":83.13034326171876, "y":0}}, ↵{"key":"C", "category":"c", "location":{"class":"go.Point", "x":83.13034326171876, "y":60.500055771484405}}↵ ],↵ "linkDataArray": [ ↵{"from":"A", "to":"B"},↵{"from":"A", "to":"C"}↵ ]}', name: 'ddd", thumb: 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACG...', time: '2019/9/26 下午4:41:28 下午4:41:28' }]
 * @property {Function} [default.remove] 删除某行
 * @property {Function} [default.load] 读取某行
 * @property {Function} [default.save] 保存当前内容
 * @property {Function} [default.clear] 清除列表
 */
export default {
  name: 'MyGoDraft',
  components: {},
  /**
   * 参数属性
   * @property {Boolean} [draggable=true] 是否可拖拽
   * @property {String} [localKey=''] 当存在多个草稿箱时用来区分在localStorage中的key
   * @property {Object} [local=true] 是否使用本地存储，如果选择否，只放在内存中，草稿箱销毁即没有，但可以通过事件提供的数据存储调用接口存储到后端
   * @property {String} [diagramName='dig'] go.Diagram对象名称
   * @property {Object} [visible.sync=false] 草稿箱是否显示
   * @property {Object} [list=[]] 初始化的草稿列表，如果local=true,会优先选择本地存储，
   *                            如果本地存储为空，则使用传入的数据
   *                            数据格式：
   *                           [{ 
   *                              json: '{ "class": "GraphLinksModel",↵  "nodeDataArray":
   *  [ ↵{"key":"A", "category":"a",
   *  "location":{"class":"go.Point", "x":0, "y":30.250027885742202}},↵
   * {"key":"B", "category":"b", "location":{"class":"go.Point", "x":83.13034326171876, "y":0}},
   * ↵{"key":"C", "category":"c", "location":{"class":"go.Point", "x":83.13034326171876, "y":60.500055771484405}}↵ ],↵
   *   "linkDataArray": [ ↵{"from":"A", "to":"B"},↵{"from":"A", "to":"C"}↵ ]}',
                                  name: 'ddd",
                                  thumb: 'data:image/png;base64,
                                  iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACG...',
                                  time: '2019/9/26 下午4:41:28 下午4:41:28'
                                }]
   */
  props: {
    diagramName: {
      type: String,
      default: 'dig'
    },
    title: {
      type: String,
      default: '草稿箱'
    },
    width: {
      type: [Number, String],
      default: '400px'
    },
    height: {
      type: [Number, String],
      default: '500px'
    },
    target: {
      type: String,
      default: 'body'
    },
    draggable: {
      type: Boolean,
      default: true
    },
    localKey: {
      type: String,
      default: ''
    },
    // 是否使用本地缓存
    local: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      draftList: [],
      imageDefaultOption: {
        size: new go.Size(30, 30),
        type: 'image/png'
      },
      itemName: '',
      draftVisible: false
    }
  },
  watch: {
    draftVisible(val) {
      this.$emit('update:visible', val)
    },
    visible(val) {
      this.draftVisible = val
    }
  },
  methods: {
    /**
     * @function
     * @name close
     * @description 关闭窗口
     */
    close() {
      this.draftVisible = false
    },
    /**
     * @function
     * @name save
     * @description 保存当前记录
     */
    save() {
      const bounds = diagramManager[this.diagramName].documentBounds
      const scaleW = 30 / bounds.width
      const scaleH = 30 / bounds.height
      const scale = Math.min(scaleW, scaleH)
      const options = Object.assign({}, this.imageDefaultOption, {
        scale: scale
      })
      const data = diagramManager[this.diagramName].makeImageData(options)
      const date = new Date()
      const item = {
        thumb: data,
        name: this.itemName,
        time: `${date.toLocaleString()} ${date.toLocaleTimeString()}`,
        json: diagramManager[this.diagramName].model.toJson()
      }
      this.draftList.push(item)
      this.$emit('save', item)
      if (this.local) {
        save('my-go-DRAFT' + this.localKey, this.draftList, localStorage)
      }
      this.$emit('save')
    },
    /**
     * @function
     * @name remove
     * @description 删除行
     * @param {Object} [item] 行数据
     */
    remove(item) {
      const idx = this.draftList.indexOf(item)
      this.$emit('remove', this.draftList[idx])
      this.draftList.splice(idx, 1)
      if (this.local) {
        save('MY-GO-DRAFT' + this.localKey, this.draftList, localStorage)
      }
    },
    /**
     * @function
     * @name load
     * @description 读取草稿到图
     * @param {Object} [item] 行数据
     */
    load(item) {
      diagramManager[this.diagramName].clear()
      diagramManager[this.diagramName].model = go.Model.fromJson(item.json)
    },
    /**
     * @function
     * @name clear
     * @description 清除草稿箱
     */
    clear() {
      this.draftList = []
      this.$emit('clear')
      if (this.local) {
        remove('MY-GO-DRAFT' + this.localKey, localStorage)
      }
    }
  },
  created() {
    this.draftVisible = this.visible
    if (this.local) {
      const draftList = get('MY-GO-DRAFT' + this.localKey, localStorage)
      this.draftList = draftList || this.list
    } else {
      this.draftList = this.list
    }
  }
}
</script>
