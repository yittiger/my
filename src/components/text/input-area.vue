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
import AutoComplete from './auto-complete';

export default {
  props: {
    multiple: Boolean,
    selectData: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  components: {
    AutoComplete
  },
  data() {
    return {
      timer: null,
      currentItems: [],
      keyword: '',
      popoverActive: false
    };
  },
  computed: {
    value: {
      get() {
        return this.currentItems.map(item => item.name);
      },
      set(val) {}
    }
  },
  watch: {
    selectData: {
      handler(newName, oldName) {
        this.currentItems = newName;
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    focusInput() {
      this.$refs.inputTag.$refs.comp.$refs.input.focus();
    },
    handleInputChange(val) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.keyword = val;
        this.popoverActive = !!val;
      }, 500);
    },
    handleSelect(item) {
      const id = this.currentItems.findIndex(e => {
        return item.id === e.id;
      });
      if (id === -1) {
        this.currentItems.push(item);
      }
      this.popoverActive = false;
    },
    remove(index, tag) {
      const currentItems = this.currentItems.find(n => tag === n.name);
      this.$emit('cancelSelect', currentItems, false);
    },
    submit() {
      this.$emit('submit');
    },
    cancel() {
      this.$emit('cancel');
    }
  },
  mounted() {},
  beforeDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
};
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
