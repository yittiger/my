<template>
  <Box class="my-dv-title"
       :class="classes"
       default-width="auto"
       default-height="auto"
       v-bind="$attrs"
       v-on="$listeners">
    <MyIcon class="my-dv-title__icon" v-if="iconProps" v-bind="iconProps"></MyIcon>
    <slot></slot>
  </Box>
</template>

<script>
  import Box from '../my-dv-box'
  import Icon from '../../mixins/Icon'
  import Text from '../../mixins/Text'
  import {MyIcon} from '$ui'

  export default {
    name: 'MyDvTitle',
    mixins: [Icon, Text],
    components: {
      Box,
      MyIcon
    },
    props: {
      level: {
        type: Number,
        default: 1,
        validator(val) {
          return val > 0 && val < 7
        }
      },
      shadow: Boolean
    },
    computed: {
      classes() {
        return {
          'is-shadow': this.shadow,
          [`is-level-${this.level}`]: !!this.level,
          ...this.textTypeClass
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../style/vars";

  @mixin level($value, $var) {
    @include when($value) {
      font-size: $var;
      @include e(icon) {
        margin-right: $var / 4;
      }
    }
  }

  @mixin type($name, $var) {
    @include when($name) {
      color: $var;
    }
  }

  @include b(dv-title) {
    font-weight: 400;
    color: $--dv-font-color;

    @include when(shadow) {
      text-shadow: $-dv-shadow;
    }
    @include when(pointer) {
      cursor: pointer;
      &:hover {
        opacity: 0.65;
      }
    }

    @include level(level-1, $--dv-font-level-1);
    @include level(level-2, $--dv-font-level-2);
    @include level(level-3, $--dv-font-level-3);
    @include level(level-4, $--dv-font-level-4);
    @include level(level-5, $--dv-font-level-5);
    @include level(level-6, $--dv-font-level-6);

    @include type(primary, $--dv-primary);
    @include type(success, $--dv-success);
    @include type(warning, $--dv-warning);
    @include type(danger, $--dv-danger);
    @include type(normal, $--dv-text-primary);
    @include type(secondary, $--dv-text-normal);
    @include type(placeholder, $--dv-text-secondary);


  }

</style>
