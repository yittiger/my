<template>
  <my-map :adapter="adapter"></my-map>
</template>
<script>
export default {
  data() {
    return {
      adapter: {
        type: 'TDT',
        tk: '464554f64aa4f4e90e0321c17a57a331'
      }
    }
  }
}
</script>
