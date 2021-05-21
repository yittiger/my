<template>
  <div>
     <el-input class="at-input" :size="type === 'textarea' ? 'small' : size" v-model="useless">
       <template slot="append"> 
        <!-- <div ref="shadowDom" :class="['content-shadow', 'el-input__inner', `${type}-type`]" style="border: 1px solid; display:inline-block;height: auto"> 
        </div> -->
          <el-popover
          placement="right-end"
          title="标题"
          width="400"
          trigger="manual"
           
          v-model="listVisible"> 
            <div>
              <ul>
                <li v-for="i in 5" @click="itemClick(i)" :key="i">{{i}}</li>
              </ul>
            </div>
            <div  slot="reference" class="popup-btn" :style="{'left':`${popupLeft}px`, 'top': `${popupTop}px`}"></div>
          </el-popover>
       
        <div ref="contentEdit" :class="['content-edit', 'el-input__inner', `${type}-type`]"  :contenteditable="true" @keydown="editHandle" :style="contentEditStyle"></div>
        <!-- <div v-show="listVisible" class="popup-warp">
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </ul>
        </div> -->
       </template>
     </el-input>

  </div>
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
    & > .el-input__inner{
      display: block;
    }
    .content-edit{
      &.textarea-type{
        overflow: auto;
      }
      .input-type{ 
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
    /*
    .content-shadow{
      position: absolute;
      left: 0;
      top: 0;
      width: auto;
      max-width: 100%;
      background: none;
      color: rgba(0,0,0,0.4); 
      pointer-events: none;
      opacity: 0.1; 
      &.input-type{
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
          border-bottom: 1px solid;
        }
      }
    }
    */
    .popup-btn{
      position: fixed;
      width: 10px;
      height: 10px;
      background: red;
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
export default {
  mixins: [],
  components: {},
  props: {
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
    }
  },
  data() {
    return {
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
      maxEditHeight: TextareaLineHeight
      // editWarpHeight: this.height || 0
    }
  },
  computed: {
    contentEditStyle() {
      if (this.type === 'textarea') {
        return {height: `${TextareaLineHeight * this.rows}px`} 
      } else {
        return null
      }
    }
  },
  methods: {
    editHandle(ev) {
      const selection = window.getSelection() 
      this.lastSelection.range = selection.getRangeAt(0)
      this.lastSelection.selection = selection
      this.lastSelection.lastOffset = selection.focusOffset
      
      this.listVisible = false
      

      if (ev.code === 'Digit2' && ev.shiftKey) {  
        this.lastSelection.offset = selection.focusOffset
        setTimeout(() => {
          this._atKeyHandle()
        }, 200)
        

      }

      // if(ev.code === 'Enter' && this.) {}
      // console.log(ev.target.innerHTML)
    },
    // '@' 字符键入时相应函数
    _atKeyHandle() {
      
      
      const currentTextNode = this.lastSelection.selection.baseNode
      // console.log(this.lastSelection.selection, currentTextNode, this.lastSelection.lastOffset)
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

    itemClick(i) {
      console.log(i)
      const range = this.lastSelection.range 
      const num = this.lastSelection.lastOffset - this.lastSelection.offset === 0 
      ? this.lastSelection.lastOffset + 1 : this.lastSelection.lastOffset
      const textNode = range.startContainer
      console.log(num, textNode, this.lastSelection.offset, this.lastSelection.lastOffset)
      range.setStart(textNode, this.lastSelection.offset)
      range.setEnd(textNode, num)
      range.deleteContents()



      const tagSpan = document.createElement('span')
      const spaceSpan = document.createElement('span')


      tagSpan.className = 'tag-span'
      tagSpan.style.color = 'red'
      tagSpan.innerHTML = '@' + i
      spaceSpan.innerHTML = '&nbsp;'

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


    }
  },
  created() {},
  mounted() {
    console.log(this._uid)
    setTimeout(() => {
      this.maxEditHeight = this.$refs.contentEdit.offsetHeight
    }, 300)
  }
}
</script>