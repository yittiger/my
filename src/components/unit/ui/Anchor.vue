<template>
  <div>
    <el-divider content-position="left">Anchor</el-divider>
    <el-row>
      <my-anchor :bounds="20" :data="data"></my-anchor>
    </el-row>
  </div>
</template>

<script>
  export default {

    data() {
      return {
        affix: {},
        data: [
          {
            title: '基本信息1',
            anchor: '#box1'
          },
          {
            title: '基本信息2',
            anchor: '#box2',
            children: [
              {
                title: '选项一',
                anchor: '#box3'
              },
              {
                title: '选项二',
                anchor: '#box4'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
