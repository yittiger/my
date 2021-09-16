<template>
  <my-chart :options="option" width="100%" height="100%"></my-chart>
</template>
<style lang="scss" scoped>
</style>
<script>
const option = {
    // tooltip: {
    //     trigger: 'item'
    // },
    // legend: {
    //     top: '5%',
    //     left: 'center'
    // },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
                {value: 580, name: '邮件营销'},
                {value: 484, name: '联盟广告'},
                {value: 300, name: '视频广告'}
            ]
        }
    ]
};
export default {
  mixins: [],
  components: {},
  props: {
  },
  data() {
    return {
      option: option
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