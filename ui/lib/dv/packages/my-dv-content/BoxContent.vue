<template functional>
  <div class="my-dv-content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'MyDvContent'
  }
</script>

<style lang="scss">
  .my-dv-content {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 14px;
  }
</style>
