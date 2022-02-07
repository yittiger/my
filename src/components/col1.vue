<template>
    <div class="table-origin" style="height: 100%">
      <my-table :columns="columns" :data="list" fit></my-table>
    </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  data() {
    return {
      columns: [
          { type: 'index', label: '#' },
          { label: '姓名', prop: 'name'},
          { label: '身份证', prop: 'id'},
          { label: '年龄', prop: 'age'},
          { label: '地址', prop: 'address'},
          { label: '日期', prop: 'date'}
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
    // this.$emit('on-listShow')
  }
}
</script>