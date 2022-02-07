<template>
    <div class="table-origin" style="height: 100%">
      <!-- <my-table :columns="columns" :data="list" fit></my-table> -->
      <el-table
        :data="list"
        height="100%"
        border
        style="width: 100%">
        <el-table-column
          v-for="(col, index) in columns"
          :key="index"
          :prop="col.prop"
          :label="col.label"
           >
        </el-table-column>
        
      </el-table>
    </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  data() {
    return {
      columns: [
          // { type: 'index', label: '#' },
          { label: '姓名a', prop: 'name'},
          { label: '身份证a', prop: 'id'},
          { label: '年龄a', prop: 'age'},
          { label: '地址a', prop: 'address'},
          { label: '日期a', prop: 'date'}
      ],
      list: []
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
    }
  },
  created() {
    this.list = this.mock(30).list
  },
  mounted() {
    this.$emit('on-listShow')
  }
}
</script>