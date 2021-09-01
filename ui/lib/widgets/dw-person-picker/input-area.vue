<template>
  <my-panel class="input-area" title="选中人员" :border="false" fit>
    <div class="input-wrapper" @click.stop="focusInput">
      <el-popover
        popper-class="picker__popper"
        placement="bottom-start"
        width="300"
        trigger="manual"
        :value="popoverActive"
      >
        <auto-complete
          :keyword="keyword"
          @select="handleSelect"
        ></auto-complete>
        <my-tag-input
          slot="reference"
          ref="inputTag"
          v-model="value"
          class="input-tag"
          :allow-create="false"
          icon
          @input-change="handleInputChange"
          @remove="remove"
          placeholder="搜索姓名......"
        ></my-tag-input>
      </el-popover>
    </div>
    <div slot="footer">
      <el-button type="primary" @click="submit">确定</el-button>
      <el-button @click="cancel">取消</el-button>
    </div>
  </my-panel>
</template>

<script>
import AutoComplete from './auto-complete'

export default {
  props: {
    multiple: Boolean,
    selected: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    AutoComplete
  },
  data() {
    return {
      timer: null,
      currentItems: this.selected,
      keyword: '',
      popoverActive: false
      // ,
      // value: []
    }
  },
  computed: {
    value: {
      get() {
        console.log(this.currentItems)
        return this.currentItems.map(item => item.name)
      },
      set(val) {
        // this.currentItems = this.currentItems.filter(item =>
        //   val.includes(item.name)
        // )
      }
    }
  },
  watch: {
    // value(newItem, oldItem) {
    //    console.log(newItem)
    //    console.log(oldItem)
    // }
    // selected(val) {
    //   console.log(val)
    //   this.currentItems = val
    // }
  },
  methods: {
    validate(item) {
      const node = this.currentItems.find(n => n.id === item.id)
      if (node) {
        this.$message({
          type: 'warning',
          message: '不能添加相同项'
        })
      }
      return !node
    },
    focusInput() {
      this.$refs.inputTag.$refs.comp.$refs.input.focus()
    },
    handleInputChange(val) {
      console.log(1)
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.keyword = val
        this.popoverActive = !!val
      }, 500)
    },
    handleSelect(item) {
      if (this.validate(item)) {
        if (this.multiple) {
          this.currentItems.push(item)
        } else {
          this.currentItems = [item]
        }
        this.$refs.inputTag.$refs.comp.query = ''
      }
    },
    // removeItem(item) {
    //   this.currentItems = this.currentItems.filter(n => item.id !== n.id)
    // },
    remove(index, tag) {
      if (this.multiple) {
        this.currentItems = this.currentItems.filter(n => tag !== n.name)
        this.$emit('cancelSelect', tag)
      } else {
        this.currentItems = []
      }
    },
    submit() {
      this.$emit('submit', this.currentItems)
    },
    cancel() {
      this.$emit('cancel')
    }
  },
  mounted() {},
  beforeDestroy() {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }
}
</script>

<style lang="scss" scoped>
.input-tag {
  display: block;

  /deep/ {
    .el-input__inner {
      border-color: transparent;
    }
    .el-select__input {
      border-bottom: 1px solid #dcdfe6;
    }
  }
}

.input-wrapper {
  height: 100%;
}
</style>
