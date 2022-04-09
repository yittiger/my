<template>
  <div class="table-origin">
    <my-table :columns="columns"
              :loader="loader"
              border
              column-filter
              filter-confirm
              :page="1"
              :page-size="5"
              @column-change="colChangeHandle"
      >
      <div slot="filter-confirm" style="text-align: center">
        <el-button type="text" :disabled="isColChanged" @click="submitCloChange">
          提交
          <span v-show="!isColChanged">*</span>
        </el-button>  
      </div>        
    </my-table>
  </div>
</template>

<script>
import Mock from 'mockjs'
import {isEqual} from '$ui/utils/util'
const Col = [
  {
    type: 'index',
    label: '#'
  },
  {
    label: '姓名',
    prop: 'name',
    display: 'always'
  },
  {
    label: '身份证',
    prop: 'id'
  },
  {
    label: '年龄',
    prop: 'age',
    display: false
  },
  {
    label: '地址',
    prop: 'address',
    display: false
  },
  {
    label: '日期',
    prop: 'date',
    display: false
  }
]
export default {
  data() {
    return {
      columns: Col,
      oriShowCols: [],
      showCols: [] 
    }
  },
  computed: {
    isColChanged() {
      return isEqual(this.oriShowCols, this.showCols)
    }
  },
  methods: {
    mock(limit) {
      return Mock.mock({
        [`list|${limit}`]: [
          {
            id: '@id',
            name: '@cname',
            'age|10-100': 18,
            address: '@ctitle',
            date: '@date(yyyy-MM-dd)'
          }
        ]
      })
    },
    loader(page, pageSize) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            total: 1000,
            list: this.mock(pageSize).list
          })
        }, 1000)
      })
    },
    getShowColProps() {
      return Col.filter((col) => {
        if (!col.prop || col.type) return false
        return col.display !== false
      }).map(col => col.prop)
    },
    colChangeHandle(showCols) {
      this.showCols = showCols
    },
    submitCloChange() {
      this.$alert(`提交列表更改: ${JSON.stringify(this.showCols)}`).then(() => {
        this.oriShowCols = [...this.showCols]
      })
    }  
  },
  mounted() {
    this.oriShowCols = this.getShowColProps()
    this.showCols = this.getShowColProps()
  }
}
</script>