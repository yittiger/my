<template>
  <DvTitle class="my-dv-date"
           v-bind="$attrs">
    <MyDate v-bind="$props" v-on="$listeners"></MyDate>
  </DvTitle>
</template>

<script>
  import {MyDate} from '$ui'
  import DvTitle from '../my-dv-title'

  delete MyDate.props.type
  export default {
    name: 'MyDvDate',
    components: {
      MyDate,
      DvTitle
    },
    props: {
      ...MyDate.props
    }
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @font-face {
    font-family: "DS-DIGI";
    src: url('~$ui/dv/style/DS-DIGI-1.ttf') format('truetype');
  }

  @include b(dv-date) {
    font-family: "DS-DIGI", Arial, Helvetica, sans-serif;
    display: inline-block;
    .my-date {
      margin-top: 5px;
    }
  }
</style>
