<template>
  <DvTitle class="my-dv-number"
           v-bind="$attrs">
    <MyNumber v-bind="$props" v-on="$listeners"></MyNumber>
  </DvTitle>
</template>

<script>
  import {MyNumber} from '$ui'
  import DvTitle from '../my-dv-title'

  delete MyNumber.props.type
  export default {
    name: 'MyDvNumber',
    inheritAttrs: false,
    components: {
      MyNumber,
      DvTitle
    },
    props: {
      ...MyNumber.props
    }
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @font-face {
    font-family: "DS-DIGI";
    src: url('~$ui/dv/style/DS-DIGI-1.ttf') format('truetype');
  }

  @include b(dv-number) {
    font-family: "DS-DIGI", Arial, Helvetica, sans-serif;

    display: inline-block;
    .my-number__value {
      margin-top: 5px;
    }
    .my-number__trend, .my-number__prefix, .my-number__suffix {
      zoom: 0.7;
      position: relative;
      top: -5px;
    }
  }
</style>
