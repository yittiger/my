<template>
  <Box class="my-dv-border-12"
       default-width="400px"
       default-height="300px"
       padding="0"
       :class="classes"
       v-bind="$attrs"
       :style="boxStyles">
    <svg class="my-dv-border-12__c1" width="10" height="10">
      <polyline class="line1" points="0,10 0,0 10,0" fill="transparent" stroke-width="4" :stroke="light"/>
    </svg>
    <svg class="my-dv-border-12__c2" width="10" height="10">
      <polyline class="line1" points="0,10 0,0 10,0" fill="transparent" stroke-width="4" :stroke="light"/>
    </svg>
    <svg class="my-dv-border-12__c3" width="10" height="10">
      <polyline class="line1" points="0,10 0,0 10,0" fill="transparent" stroke-width="4" :stroke="light"/>
    </svg>
    <svg class="my-dv-border-12__c4" width="10" height="10">
      <polyline class="line1" points="0,10 0,0 10,0" fill="transparent" stroke-width="4" :stroke="light"/>
    </svg>
    <BoxContent :padding="$attrs.padding">
      <slot></slot>
    </BoxContent>
  </Box>
</template>

<script>
  import Border from '../../mixins/Border'

  export default {
    name: 'MyDvBorder12',
    mixins: [Border],
    computed: {
      boxStyles() {
        return {
          'border-color': this.dark,
          backgroundColor: this.fill
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @include b(dv-border-12) {
    border: 1px solid transparent;
    > svg {
      position: absolute;
    }
    @include e(c1) {
      left: -1px;
      top: -1px;
    }
    @include e(c2) {
      right: -1px;
      top: -1px;
      transform: rotate(90deg);
    }
    @include e(c3) {
      left: -1px;
      bottom: -1px;
      transform: rotate(-90deg);
    }
    @include e(c4) {
      right: -1px;
      bottom: -1px;
      transform: rotate(180deg);
    }
  }
</style>
