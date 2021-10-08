<template>
  <div class="table-origin">
    <my-table :columns="columns"
              :loader="loader"
              border
              column-filter
              :page="1"
              :page-size="5"
              :filter-confirm="true"  
              @column-change-confirm="colChange"
            ></my-table>
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
      colChange(val) {
        console.log(val)
      }
    }
  }
</script>