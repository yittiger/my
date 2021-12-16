<template>
  <el-popover 
    v-bind="{
      ...popPropsProxy,
      trigger: type === 'popover' ? 'click' : 'manual'
    }" 
    v-model="popVisible">
    <slot name="field" slot="reference" :selItems="selItems">
      <my-tag-input :allow-create="false" label="人员" v-model="selItemNames" @click.native="openPicker" @remove="selRemove"></my-tag-input>
    </slot> 
    <div class="picker-warp" v-if="type==='popover'" :style="{'height': `${popPropsProxy.height || 400}px`}">
      <dw-person-picker-core ref="picker" v-bind="$attrs" @submit="showResult"></dw-person-picker-core>  
    </div> 
    <my-dialog  :visible.sync="dialogVisible" v-if="type==='dialog'" v-bind="{...dialogPropsProxy}"> 
      <dw-person-picker-core ref="picker" v-bind="$attrs" @submit="showResult"></dw-person-picker-core>
    </my-dialog>
  </el-popover>
 
 
  <!--   -->
</template>
<style lang="scss" scoped>
</style>
<script>
import DwPersonPickerCore from '@/components/dw-person-picker/core'
import {isEqual} from '$ui/utils/util'
const DefaultDialogProps = {
  target: 'body', 
  title: '选择', 
  width: '700px',
  height: '580px', 
  footer: false,
  modal: true
}

const DefaultPopProps = {
  placement: 'bottom-start',
  title: '选择',
  width: 600,
  height: 400 
}
export default {
  mixins: [],
  components: {DwPersonPickerCore},
 
  props: {
    value: {
      type: Array,
      default: () => { return [] }
    },
    type: {
      type: String,
      default: 'popover',
      validator: function(t) {
        return ['dialog', 'popover'].includes(t)
      }
    },
    fieldPropsMap: {
      type: Object,
      default: () => {
        return {
          name: 'name',
          id: 'id'
        }
      }
    },
    dialogProps: {
      type: Object,
      default: () => {
        return {}
      }
    },
    popProps: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      selItemNames: [],
      selItems: [],

      popVisible: false,
      dialogVisible: false,
      dialogPropsProxy: {
        ...DefaultDialogProps,
        ...this.dialogProps
      },
      popPropsProxy: {
        ...DefaultPopProps,
        ...this.popProps
      }
      
    }
  },
  computed: {
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        if (!isEqual(val, this.selItems)) {
          this.selItems = [...val]
        }
      }
    },
    selItems: {
      immediate: true,
      handler(val) {
        setTimeout(() => {
          this.selItemNames = this.selItems.map((item) => {
            return item[this.fieldPropsMap.name]
          })
        }, 200)
        
        this.$emit('change', val)
        this.$emit('input', val) 
      }
    }
  },
  methods: {
    openPicker() {
      console.log('cc')
      if (this.type === 'dialog') {
        this.dialogVisible = true
      } 
    }, 
    showResult(targets, dept) {  
      const uniTarget = this._removeDuplicate(targets, this.selItems, this.fieldPropsMap.id) 
      this.selItems = this.selItems.concat(uniTarget)
      this.dialogVisible = false
      this.popVisible = false
    },
    selRemove(index, label) {
      this.selItems.splice(index, 1)
    },
    _removeDuplicate(data, targets, key) {
      return data.filter((item) => {
        const Key = item[key] // 唯一表示
        const targetIndex = targets.findIndex((node) => {
          return node[key] === Key
        })
        return targetIndex < 0
      })
    }
  },
  created() {},
  mounted() {}
}
</script>