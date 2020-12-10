<template>
  <DvTitle class="my-dv-number"
           :class="classes"
           v-bind="$attrs">
    <MyNumber v-bind="$props" v-on="$listeners">
      <template v-if="background" v-slot="{displayValue}">
        <span v-for="(item,index) in getArray(displayValue)"
              :key="index"
              :class="{'is-number':item.number}">{{item.value}}</span>
      </template>
    </MyNumber>
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
      ...MyNumber.props,
      background: Boolean
    },
    computed: {
      classes() {
        return {
          'is-background': this.background
        }
      }
    },
    methods: {
      getArray(value) {
        const array = String(value).split('')
        return array.map(n => {
          return {
            value: n,
            number: !Number.isNaN(Number.parseInt(n))
          }
        })
      }
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
    line-height: 1;
    display: inline-block;
    white-space: nowrap;
    @include when(background) {
      > .my-number > span {
        vertical-align: bottom;
      }
      .my-number__suffix {
        padding: 0 5px;
      }
    }

    .my-number__value {
      margin-top: 5px;
    }
    .my-number__trend, .my-number__prefix, .my-number__suffix {
      zoom: 0.5;
      position: relative;
      top: -5px;
    }
    .is-number {
      background: rgba(24, 144, 255, 0.6);
      padding: 0 5px;
      margin: 0 2px;
      border-radius: 2px;
    }
  }
</style>
