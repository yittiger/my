<template>
  <div v-if="optMap">
    <my-cascader  v-model="city" :options="optMap.city" root="100000"    ></my-cascader>  
    <p >{{code|formatFilter('CITY')}}</p>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
import {findPathInOpts} from '@/helper/dict-management/index'
export default {
  mixins: [],
  components: {},
  props: {
  },
  data() {
    return {
      code: '623026',
      optMap: null,
      city: []
    }
  },
  computed: {
  },
  methods: {
  },
  created() {},
  mounted() {
    this.$getOptionsMap([{name: 'city', code: 'CITY'}]).then((res) => {
      console.log(res)
      this.optMap = res

      console.log(findPathInOpts(this.optMap.city, '623026'))
    })
  }
}
</script>