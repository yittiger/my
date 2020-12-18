<template>
  <DvTitle class="my-dv-timer"
           v-bind="$attrs">
    <MyTimer v-bind="$props" v-on="$listeners"></MyTimer>
  </DvTitle>
</template>

<script>
  import {MyTimer} from '$ui'
  import DvTitle from '../my-dv-title'

  delete MyTimer.props.type
  export default {
    name: 'MyDvTimer',
    components: {
      MyTimer,
      DvTitle
    },
    props: {
      ...MyTimer.props
    }
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @font-face {
    font-family: "DS-DIGI";
    src: url('~$ui/dv/style/DS-DIGI-1.ttf') format('truetype');
  }

  @include b(dv-timer) {
    font-family: "DS-DIGI", Arial, Helvetica, sans-serif;
    display: inline-block;
    .my-timer {
      margin-top: 5px;
    }
  }
</style>
