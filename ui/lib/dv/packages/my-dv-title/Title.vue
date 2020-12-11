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
  /**
   *  标题组件
   *  @module $ui/dv/my-dv-title
   */
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
    /**
     * 属性参数，继承 MyDvBox
     * @member props
     * @property {string|object} [icon] 图标
     * @property {string} [type] 主题风格，可选值：'default', 'primary', 'normal', 'secondary', 'success'，'placeholder', 'warning', 'danger'
     * @property {number} [level=1] 标题大小，可选 1 ~ 6
     * @property {boolean} [shadow] 开启阴影
     * @property {boolean} [strong] 字体加粗
     */
    props: {
      level: {
        type: Number,
        default: 1,
        validator(val) {
          return val > 0 && val < 7
        }
      },
      shadow: Boolean,
      strong: Boolean
    },
    computed: {
      classes() {
        return {
          'is-text-shadow': this.shadow,
          'is-strong': this.strong,
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

    @include when(text-shadow) {
      text-shadow: $--dv-shadow;
    }
    @include when(strong) {
      font-weight: 600;
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

    @include e(icon) {
      margin-right: 0.5em;
      vertical-align: bottom !important;
    }

  }

</style>
