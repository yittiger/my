<template>
  <div>
    <el-divider content-position="left">Table</el-divider>
    <my-table :columns="columns" :loader="loader" :page="2" :page-size="5"></my-table>
  </div>
</template>

<script>
  import Mock from 'mockjs'

  export default {
    data() {
      return {
        columns: [
          {
            type: 'index',
            label: '#'
          },
          {
            label: '姓名',
            prop: 'name'
          },
          {
            label: '身份证',
            prop: 'id'
          },
          {
            label: '年龄',
            prop: 'age'
          },
          {
            label: '地址',
            prop: 'address'
          },
          {
            label: '日期',
            prop: 'date'
          }
        ]
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
      }
    }
  }
</script>
