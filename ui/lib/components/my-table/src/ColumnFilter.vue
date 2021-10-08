<template>
  <div class="my-table-column-filter">
    <el-popover
      placement="bottom"
      popper-class="my-table-column-filter__popper"
      trigger="click">
      <i slot="reference" class="my-table-column-filter__trigger el-icon-more"></i>
      <div v-if="checkboxList.length" >
        <el-checkbox-group v-model="currentValue">
          <el-checkbox v-for="(col,index) in checkboxList"
                      :key="col.prop||index"
                      :disabled="col.display==='always'"
                      :label="col.prop">{{col.label}}
          </el-checkbox>
        </el-checkbox-group>
        <div style="margin-top:5px; text-align:center" v-if="filterConfirm">
          <el-button type="primary" size="mini" @click="filterConfirmClick">确定</el-button>
        </div>
      </div>
      
      <div v-else>没有可显示的列</div>
    </el-popover>
  </div>
</template>

<script>
  export default {
    props: {
      columns: {
        type: Array,
        default() {
          return []
        }
      },
      value: {
        type: Array,
        default() {
          return []
        }
      },
      filterConfirm: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        currentValue: this.value || []
      }
    },
    computed: {
      checkboxList() {
        return this.columns.filter(col => !!col.prop && !col.type)
      }
    },
    watch: {
      value: {
        immediate: true,
        handler(val) {
          this.currentValue = val
        }
      },
      currentValue(val) {
        this.$emit('input', val)
      }
    },
    methods: {
      filterConfirmClick() {
        this.$emit('column-change-confirm')
      }
    }
  }
</script>

