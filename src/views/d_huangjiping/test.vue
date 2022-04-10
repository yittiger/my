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
              @column-change-confirm="submitCloChange"
      >
      <!-- <div slot="filter-confirm" style="text-align: center">
        <el-button type="text" :disabled="isColChanged" @click="submitCloChange">
          提交
          <span v-show="!isColChanged">*</span>
        </el-button>  
      </div>         -->
    </my-table>
  </div>
</template>

<script>
import Mock from 'mockjs' 
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
      showCols: [] 
    }
  },
  computed: {
     
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
    colChangeHandle(showCols) {
      this.showCols = showCols
    },
    submitCloChange(val) {
      this.$alert(`提交列表更改: ${JSON.stringify(val)}`).then(() => {
        // this.oriShowCols = [...this.showCols]
        console.log(val)
      })
    }  
  },
  mounted() {
     
  }
}
</script>