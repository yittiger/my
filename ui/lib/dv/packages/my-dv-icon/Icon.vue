<template>
  <Box class="my-dv-icon"
       :class="textTypeClass"
       v-bind="$attrs"
       v-on="$listeners">
    <MyIcon v-if="iconProps" v-bind="iconProps" :style="styles"></MyIcon>
  </Box>
</template>

<script>
  import Box from '../my-dv-box'
  import Icon from '../../mixins/Icon'
  import Text from '../../mixins/Text'
  import {MyIcon} from '$ui'

  export default {
    name: 'MyDvIcon',
    mixins: [Icon, Text],
    components: {
      Box,
      MyIcon
    },
    props: {
      size: {
        type: Number,
        default: 40
      }
    },
    computed: {
      styles() {
        return {
          fontSize: `${this.size}px`
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @mixin type($name, $var) {
    @include when($name) {
      color: $var;
    }
  }

  @include b(dv-icon) {
    @include when(pointer) {
      cursor: pointer;
      &:hover {
        opacity: 0.65;
      }
    }
    @include type(primary, $--dv-primary);
    @include type(success, $--dv-success);
    @include type(warning, $--dv-warning);
    @include type(danger, $--dv-danger);
    @include type(normal, $--dv-text-primary);
    @include type(secondary, $--dv-text-normal);
    @include type(placeholder, $--dv-text-secondary);
  }
</style>
