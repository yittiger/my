<template> 
  <el-row class="my-key-val-list" :gutter="10" style="
    display: flex;
    flex-flow: row wrap;
  ">
    <el-col v-for="(item, index) in showColList" :key="`${item.prop}_${index}`" :span="setSpan(item)"> 
      <template>
        <slot v-if="item.type === 'devide'" :name="item.prop">

        </slot>
        <slot v-else :name="item.prop"  v-bind="{...item, $index: index, value: data[item.prop]}">
          <my-description :title="item.label" :width="item.width ? item.width : 100" :align="item.align ? item.align : 'right'">
          {{data[item.prop]}} 
          </my-description>  
        </slot>
      </template> 
    </el-col> 
  </el-row>
</template>
<script>
import dynamicCol from './cust-response' // dynamic-col
export default {
  name: 'KeyValList',
  mixins: [dynamicCol],
  components: {},
  props: {
    column: {
      type: Array,
      default: () => {
        return []
      }
    },
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
       
    }
  },
  watch: {
    
  },
  computed: {
    showColList() {
      return this.column.reduce((total, item) => {
        if (!item.devide) {
          total.push(item)
        } else {
          total.push(item)
          total.push({prop: item.devide, type: 'devide'})
        }
        return total
      }, [])
    }
  },
  methods: {
    setSpan(item) {
      if (!item.span) {
        if (item.type === 'devide') {
          return 24
        } else {
          return 24 / this.currentColumn
        }
      } else if (item.span > 24) {
        return 24
      } else {
        if (24 % item.span === 0) {
          return item.span
        } else {
          return 24 / this.currentColumn
        }
      } 
    }
    
  },
  created() {
  },
  mounted() {
    // console.log(this.currentColumn)
    // window.addEventListener('resize', () => {
    //   console.log(this.currentColumn)
    // })

  }
}
</script>
<style lang="scss" scoped>
/deep/ .my-key-val-list.el-row{
  display: flex;
  flex-flow: row wrap;
  
}
</style>