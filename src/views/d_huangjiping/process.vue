<template>
  <div style="height: 100%;background: #0A101E">

    <div style="width: 600px; height: 24px; ">
      <div class="my-process-bar">
        <div class="my-process-bar__inner"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.my-process-bar{
  position:relative;
  height: 100%;
  background: no-repeat; 
  background-image:
    linear-gradient(90deg, rgba(0,0,0,0.6), transparent),
    repeating-linear-gradient(90deg, #03FAFC 0, #03FAFC 8px, transparent 8px, transparent 14px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.2) 0, rgba(255,255,255,0.2) 8px, transparent 8px, transparent 14px)
    ;
  background-position: 
    left top, 
    left top, 
    left top
  ;
  background-size: 
    100% 100%, 
    80% 100%, 
    100% 100%
  ;
  
}
</style>
<script>
export default {
  mixins: [],
  components: {},
  props: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  created() {},
  mounted() {}
}
</script>