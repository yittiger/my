<template>
  <div>
    <el-divider content-position="left">List</el-divider>
    <el-row>


      <my-list :data="list" border split stripe>
        <template v-slot="{item}">
          <div class="item">{{item}}</div>
        </template>
      </my-list>
    </el-row>
    <el-row>
      <my-list :data="list" split :header-style="{padding:0}">

        <template v-slot:header>
          <my-header title="头部标题" theme="bg-right"></my-header>
        </template>

        <template v-slot="{item}">
          <div class="item">{{item}}</div>
        </template>

        <template v-slot:footer>
          底部内容
        </template>

      </my-list>
    </el-row>
    <el-row>
      <my-list split border stripe :page-size="5" :loader="loader">
        <template v-slot:header>
          Header
        </template>

        <template v-slot="{item}">
          <div class="item">{{item}}</div>
        </template>

        <template v-slot:footer>
          Footer
        </template>

      </my-list>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      loader(page, pageSize) {
        const list = []
        for (let i = 0; i < pageSize; i++) {
          list.push((page - 1) * pageSize + i + 1)
        }
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({
              list: list,
              total: 1000
            })
          }, 300)
        })
      }
    }
  }
</script>
