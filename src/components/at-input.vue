<template>
   
  <el-input class="at-input" :size="type === 'textarea' ? 'small' : size" v-model="useless">
    <template slot="append"> 
      <el-popover
      v-bind="{...popoverProps}"
      trigger="manual" 
      v-model="listVisible"> 
        <slot name="popover"></slot>
        <!-- <div>
          <ul>
            <li v-for="i in 5" @click="itemClick(i)" :key="i">{{i}}</li>
          </ul>
        </div> -->
        <div  slot="reference" class="popup-btn" :style="{'left':`${popupLeft}px`, 'top': `${popupTop}px`}"></div>
      </el-popover>
    
    <div ref="contentEdit"  :class="['content-edit', 'el-input__inner', `${type}-type`]"  :contenteditable="true" @keydown="editHandle"  :style="{'max-width': `${maxWidth}px`, ...contentEditStyle}"></div>
    
    </template>
  </el-input>
 
</template>
<style lang="scss" scoped>
.at-input.el-input{
  /deep/ .el-input__inner{
    display: none;
  }
  /deep/.el-input-group__append{
    background-color: none; 
    display: block;
    position: relative;
    border: 0px solid rgba(0,0,0,.15);
    border-radius: 0px;
    padding: 0px;
    width: 100%; 
    max-width:100%;
    & > .el-input__inner{
      display: block;
      border-radius: 4px;
      width: 100%; 
      max-width:100%;
    }
    .content-edit{
      &.textarea-type{
        overflow: auto;
      }
      &.input-type{
        overflow: hidden; 
        div{
          display: inline;
        }
        br {
          display: none
        }
      }
      &.textarea-type{
        div{
          width:fit-content;
          
        }
      }
    }
     
    .popup-btn{
      position: fixed;
      width: 3px;
      height: 3px;
      pointer-events: none;
    }
     
  }
  // &.input-type .el-input-group__append .content-shadow.el-input__inner{
  //   div {
  //     display: inline !important; 
  //   }
  // }
}
</style>
<script>
const TextareaLineHeight = 36
const TagClassName = 'tag-span'
const DefaultPopoverProps = {
  placement: 'right-end',
  title: '标题2',
  width: 400
}
export default {
  mixins: [],
  components: {},
  props: {
    tagClassName: {
      type: String,
      default: TagClassName
    },
    popoverProps: {
      type: Object,
      default: () => {
        return DefaultPopoverProps
      }
    },
    type: {
      type: String,
      default: 'input',
      validator: function(v) {
        return ['textarea', 'input'].includes(v)
      }
    },
    rows: {
      type: Number,
      default: 4
    },
    size: {
      type: String,
      default: 'medium',
      validator: function(v) {
        return ['medium', 'small', 'mini'].includes(v)
      }
    },
    preInsert: {
      type: Function,
      default: () => {
        return Promise.reject(new Error('未定义插入数据'))
      }
    }
  },
  data() {
    return {
      maxWidth: 280,
      useless: '',
      listVisible: false,
      lastSelection: {
        range: '',
        offset: '',
        selection: '',
        lastOffset: ''
      },
      popupLeft: 0,
      popupTop: 0,
      maxEditHeight: TextareaLineHeight,

      tagData: {},

      editContent: '',
      contentChangeTimer: null
    }
  },
  computed: {
    contentEditStyle() {
      if (this.type === 'textarea') {
        return {height: `${TextareaLineHeight * this.rows}px`} 
      } else {
        return {}
      }
    }
  },
  watch: {
    editContent(val) {
      this.$emit('change', val)
    }
  },
  methods: {
    editHandle(ev) {
      const selection = window.getSelection() 
      this.lastSelection.range = selection.getRangeAt(0)
      this.lastSelection.selection = selection
      this.lastSelection.lastOffset = selection.focusOffset
      
      // this.listVisible = false
      

      if (ev.code === 'Digit2' && ev.shiftKey) {  
        this.lastSelection.offset = selection.focusOffset
        setTimeout(() => {
          this._atKeyHandle()
        }, 200) 
      } 
      if(ev.code === 'Backspace') {
        
        this._backSpaceHandle()
      } 
       
      if (this.contentChangeTimer) {
        clearTimeout(this.contentChangeTimer)
      }
      this.contentChangeTimer = setTimeout(() => {
        this.editContent = this.$refs.contentEdit.innerHTML 
      }, 500)

      if (this.listVisible) {
        const reg = /\s/g
        setTimeout(() => {
          const selection = window.getSelection()
          const atArr = this.lastSelection.range.endContainer.textContent.split('@')
          const afterAtStr = atArr[atArr.length - 1]
          this.$emit('on-tagEdit', afterAtStr)
          if (reg.test(selection.focusNode.nodeValue[selection.focusOffset - 1])) {
            this.$nextTick(() => {
              this.listVisible = false
            })
          } 
        }, 50)
      }
       
    },
    // '@' 字符键入时响应函数
    _atKeyHandle() { 
      const currentTextNode = this.lastSelection.selection.baseNode 
      const range = document.createRange()
      range.setStart(currentTextNode, 0)
      range.setEnd(currentTextNode, this.lastSelection.lastOffset)
      const ranngePosData = range.getBoundingClientRect()
      // console.log(ranngePosData, '-----------------')
      const width = ranngePosData.x + ranngePosData.width
      const top = ranngePosData.y
      this.popupLeft = width + 40
      this.popupTop = top
      this.listVisible = true
    },
    // 回退删除按键响应函数
    _backSpaceHandle() {
      const range = this.lastSelection.range 
      // 删除到'@'前一个字符时，弹框出现 
      if (range.endContainer.textContent[range.endContainer.textContent.length - 2] === '@') {
        this.listVisible = true
      }
      // 删除到'@'字符时，弹框关闭
      if (range.endContainer.textContent[range.endContainer.textContent.length - 1] === '@') {
        this.listVisible = false
      }

      let removeNode = null
      if (range.startOffset <= 1 && range.startContainer.parentElement.className !== this.tagClassName) {
        removeNode = range.startContainer.previousElementSibling
      }
    

      if (range.startContainer.parentElement.className === this.tagClassName) {
        removeNode = range.startContainer.parentElement
      }

      
      if (removeNode && removeNode.className === this.tagClassName) { 
        this.$refs.contentEdit.removeChild(removeNode)

        this.$emit('on-tagDelete', this.tagData[removeNode.id])
        delete this.tagData[removeNode.id] 
      }
    },
     
    tagInsert(data) {
      if (data) {
        const range = this.lastSelection.range 
        const num = this.lastSelection.lastOffset - this.lastSelection.offset === 0 
        ? this.lastSelection.lastOffset + 1 : this.lastSelection.lastOffset
        const textNode = range.startContainer
        
        range.setStart(textNode, this.lastSelection.offset)
        range.setEnd(textNode, num)
        range.deleteContents() 

        const tagSpan = document.createElement('span')
        const spaceSpan = document.createElement('span')

        // 设置标签
        tagSpan.className = this.tagClassName
        tagSpan.style.color = data.color || '#409EFF'
        tagSpan.innerHTML = '@' + data.name
        spaceSpan.innerHTML = '&nbsp;'
        
        // 绑定数据
        const tagId = data.id ? data.id : `tag_${new Date().getTime()}`
        tagSpan.id = tagId
        this.tagData[tagId] = data.data

        const fragment = document.createDocumentFragment()

        let node = ''
        let lastNode = ''
        fragment.appendChild(tagSpan)
        while((node = spaceSpan.firstChild)) {
          lastNode = fragment.appendChild(node)
        }
        if (this.lastSelection.range && this.lastSelection.selection) {
          
          this.lastSelection.range.insertNode(fragment)
          this.lastSelection.selection.extend(lastNode, 1)
          this.lastSelection.selection.collapseToEnd()
        } 
        this.listVisible = false 
      } else {
        this.$message.danger('未设置绑定数据')
        this.listVisible = false
      }

    },
    _setMaxWidth() {
      this.maxWidth = this.$el.offsetWidth
    }
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this._setMaxWidth()
      this.maxEditHeight = this.$refs.contentEdit.offsetHeight
    }, 300)

    
    

  }
}
</script>