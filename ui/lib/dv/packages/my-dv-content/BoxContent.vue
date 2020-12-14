<template>
  <div class="my-dv-content" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'MyDvContent',
    props: {
      padding: String
    },
    computed: {
      styles() {
        return {
          padding: this.padding
        }
      }
    }
  }
</script>

<style lang="scss">
  .my-dv-content {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
  }
</style>
