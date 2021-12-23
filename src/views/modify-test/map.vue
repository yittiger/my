<template>
  <my-map :adapter="adapter" height="400px">
    <my-map-zoom></my-map-zoom>
  </my-map>
</template>
<script>
export default {
  data() {
    return {
      adapter: {
        type: 'XYZ',
        url: 'http://localhost:8080/{z}/{x}/{y}.png' // 'http://localhost:8026/googlemaps/roadmap/{z}/{x}/{y}.png'
      }
    }
  }
}
</script>