<template>
  <div
    class="persin-picker"
    style="min-width: 400px; min-height: 400px; height: 100%; width: 100%"
  >
    <el-row class="wrapper">
      <el-col :span="12" class="input-col">
        <input-area
          ref="input"
          :multiple="multiple"
          :selectData="selectData"
          @submit="handleSubmit"
          @cancel="handleClosed"
          @cancelSelect="handleListSelect"
        ></input-area>
      </el-col>
      <el-col :span="12">
        <org-list
          ref="orgList"
          v-if="visible"
          v-bind="$attrs"
          :selectData="selectData"
          :multiple="multiple"
          @select="handleListSelect"
        ></org-list>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import InputArea from './input-area';
import OrgList from './org-list';

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
        return [];
      }
    }
  },
  data() {
    return {
      // 选中的数据
      selectData: this.value
    };
  },
  methods: {
    handleListSelect(item, isAdd) {
      if (this.multiple) {
        if (isAdd) {
          this.selectData.push(item);
        } else {
          const idIndex = this.selectData.findIndex(e => item.id === e.id);
          this.selectData.splice(idIndex, 1);
        }
      } else {
        this.selectData = [];
        if (isAdd) {
          this.selectData.push(item);
        }
      }
    //   console.log(this.selectData);
    },
    // 确定按钮
    handleSubmit() {
    },
     // 取消按钮
    handleClosed() {
    },
    // 获取当前人员
    getSelectPeoloe () {
        return this.selectData
    },
     // 获取当前路径部门
    getPaths() {
        return this.$refs.orgList.paths
    }
   
  }
};
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
