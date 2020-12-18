<template>
  <Box class="my-dv-text"
       :class="classes"
       default-width="auto"
       default-height="auto"
       v-bind="$attrs"
       v-on="$listeners">
    <MyParagraph :ellipsis="ellipsis"
                 :rows="rows"
                 :underline="underline">
      <slot></slot>
    </MyParagraph>
  </Box>
</template>

<script>
  /**
   * 文本组件
   * @module $ui/dv/my-dv-text
   */
  import Box from '../my-dv-box'
  import Text from '../../mixins/Text'
  import {MyParagraph} from '$ui'

  export default {
    name: 'MyDvText',
    mixins: [Text],
    components: {
      Box,
      MyParagraph
    },
    /**
     * 属性参数
     * @member props
     * @property {string} [type] 主题风格，可选值：'default', 'primary', 'normal', 'secondary', 'success'，'placeholder', 'warning', 'danger'
     * @property {number} [level=1] 文字大小，可选 1 ~ 4
     * @property {boolean} [ellipsis] 开启省略号
     * @property {number} [rows] 超过几行出现省略号，ellipsis=true时有效
     * @property {boolean} [underline] 下划线
     * @property {boolean} [indent] 段落缩进
     */
    props: {
      level: {
        type: Number,
        default: 1,
        validator(val) {
          return val > 0 && val < 5
        }
      },
      ellipsis: Boolean,
      rows: Number,
      underline: Boolean,
      indent: Boolean
    },
    computed: {
      classes() {
        return {
          'is-indent': this.indent,
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

  @include b(dv-text) {
    color: $--dv-text-primary;
    font-size: $--dv-font-level-7;
    line-height: 1.3;
    .my-paragraph {
      margin-bottom: 0;
    }
    & + .my-dv-text {
      margin-top: 12px;
    }

    @include when(pointer) {
      cursor: pointer;
      &:hover {
        opacity: 0.65;
      }
    }
    @include when(indent) {
      text-indent: 2em;
    }

    @include level(level-1, $--dv-font-level-6);
    @include level(level-2, $--dv-font-level-7);
    @include level(level-3, $--dv-font-level-8);
    @include level(level-4, $--dv-font-level-9);

    @include type(primary, $--dv-primary);
    @include type(success, $--dv-success);
    @include type(warning, $--dv-warning);
    @include type(danger, $--dv-danger);
    @include type(normal, $--dv-text-normal);
    @include type(secondary, $--dv-text-secondary);
    @include type(placeholder, $--dv-text-placeholder);

  }
</style>
