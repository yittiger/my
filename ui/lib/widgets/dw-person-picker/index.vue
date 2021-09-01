<template>
  <div
    class="persin-picker"
    style="min-width: 400px; min-height: 400px; height: 100%; width: 100%"
  >
    <el-row class="wrapper">
      <el-col :span="12" class="input-col">
        <input-area
          ref="input"
          @cancel="handleClosed"
          @cancelSelect="handCancelSelect"
          :multiple="multiple"
          @submit="handleSubmit"
        ></input-area>
      </el-col>
      <el-col :span="12">
        <org-list
          ref="orgList"
          v-if="visible"
          @select="handleListSelect"
          :multiple="multiple"
          :default-id="userDwId"
        ></org-list>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import InputArea from './input-area'
import OrgList from './org-list'

export default {
  components: {
    InputArea,
    OrgList
  },
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: true
    },
    value: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      userDwId: 'this.$access.get().userInfo.dwdm'
    }
  },
  methods: {
    handleListSelect(item, isAdd) {
      if (isAdd) {
        this.$refs.input.handleSelect(item)
      } else {
        this.$refs.input.removeItem(item)
      }
    },
    handCancelSelect(item) {
      this.$refs.orgList.removeSelect(item)
    },
    // 当前人员和部门
    handleSubmit(items) {
      console.log(items)
      console.log(this.$refs.orgList.paths)
      // this.$emit('submit', items)
    },
    handleClosed() {
      // this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/style/_vars.scss";
.persin-picker {
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
  /deep/ .wrapper {
    height: 100%;
    .el-col {
      box-sizing: border-box;
      height: 100%;
    }
  }

  .input-col {
    border-right: 1px solid $blue-8;
  }
}
</style>
