<template>
  <Tooltip v-bind="tooltipProps">
    <div class="my-go-toolbar__item" :class="classes" @click="handleClick">
      <MyIcon v-bind="iconProps"></MyIcon>
    </div>
  </Tooltip>
</template>

<script>
  import {MyIcon} from '$ui'
  import {Tooltip} from 'element-ui'

  export default {
    name: 'ToolbarItem',
    components: {
      MyIcon,
      Tooltip
    },
    props: {
      name: String,
      type: String,
      disabled: Boolean,
      tooltip: [String, Object],
      icon: [String, Object],
      vertical: Boolean,
      options: Object
    },
    computed: {
      classes() {
        return {
          'is-disabled': this.disabled
        }
      },
      tooltipProps() {
        return typeof this.tooltip === 'string'
          ? {
            content: this.tooltip,
            disabled: this.disabled,
            placement: this.vertical ? 'right' : 'top'
          }
          : {
            placement: this.vertical ? 'right' : 'top',
            disabled: this.disabled,
            ...this.tooltip
          }
      },
      iconProps() {
        return typeof this.icon === 'string'
          ? {
            name: this.icon
          }
          : this.icon
      }
    },
    methods: {
      handleClick() {
        if (this.disabled) return
        this.$emit('click', this)
      }
    }
  }
</script>
