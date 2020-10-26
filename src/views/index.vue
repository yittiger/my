<template>
  <div style="height:500px">
    <my-dv-page target="parent" fit>
      <my-dv-list width="80%"
                  x-align="center"
                  y-align="middle"
                  radius
                  :columns="columns"
                  :rows="rows">
        <template v-slot:one="{rowIndex}">
          <el-tag size="small" type="success">{{rowIndex}}</el-tag>
        </template>
      </my-dv-list>
    </my-dv-page>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        columns: [
          {label: '列一', width: 100, prop: 'one'},
          {label: '列二', width: 200, prop: 'two'},
          {label: '列三', width: 100, prop: 'three'}
        ],
        rows: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .my-dv-page {
    background: url("~$ui/assets/bg/02.png") no-repeat center center;
  }
</style>
