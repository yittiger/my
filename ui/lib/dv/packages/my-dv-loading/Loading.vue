<template>
  <Box class="my-dv-loading"
       default-width="auto"
       default-height="auto"
       v-bind="$attrs"
       x-align="center"
       y-align="middle">
    <svg width="50px" height="50px">
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="transparent"
        stroke-width="3"
        stroke-dasharray="31.415, 31.415"
        stroke="#02bcfe"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0, 25 25;360, 25 25"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          values="#02bcfe;#3be6cb;#02bcfe"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="25"
        cy="25"
        r="10"
        fill="transparent"
        stroke-width="3"
        stroke-dasharray="15.7, 15.7"
        stroke="#3be6cb"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="360, 25 25;0, 25 25"
          dur="1.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke"
          values="#3be6cb;#02bcfe;#3be6cb"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
    <div class="my-dv-loading__tip">
      <slot/>
    </div>
  </Box>
</template>

<script>
  /**
   * 加载中提示，继承MyDvBox
   * @module $ui/dv/my-dv-loading
   */
  import Box from '../my-dv-box'

  /**
   * 插槽
   * @member slots
   * @property {string} default 定义提示文本
   */
  export default {
    name: 'MyDvLoading',
    components: {
      Box
    }
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @include b(dv-loading) {
    text-align: center;
    @include e(tip) {
      font-size: 16px;
      color: $--dv-text-primary;
      margin-top: 8px;
    }
  }


</style>
