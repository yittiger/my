<template>
  <div>
    <el-divider content-position="left">Calendar</el-divider>
    <el-row>
      <el-calendar v-model="value">
      </el-calendar>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>
