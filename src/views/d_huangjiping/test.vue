<template>
  <my-form>
    <my-checkbox name="select" :options="options" :props="{border: false}"></my-checkbox>
  </my-form>
</template>

<script>
export default {
  data() {
    return {
      options: [
          {label: '选项一', value: 1},
          {label: '选项二', value: 2},
          {label: '选项三', value: 3},
          {label: '选项四', value: 4},
          {label: '选项五', value: 5}
      ]
    }
  }
}
</script>