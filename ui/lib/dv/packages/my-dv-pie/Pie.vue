<template>
  <Box class="my-dv-chart my-dv-line"
       default-width="600px"
       default-height="400px"
       v-bind="$attrs">
    <Loading v-if="loading" :zoom="0.6"></Loading>
    <MyChartPie v-else
                v-on="$listeners"
                :debug="debug"
                :theme="theme"
                :settings="mergeSettings"
                :extend="mergeExtend"
                :width="`${width}px`"
                :height="`${height}px`"
                :data="chartData"></MyChartPie>
  </Box>
</template>
<script>

  import {MyChartPie} from '$ui/charts'
  import Chart from '../../mixins/Chart'
  import Loading from '../my-dv-loading'
  import merge from 'lodash/merge'

  export default {
    name: 'MyDvPie',
    mixins: [Chart],
    components: {
      MyChartPie,
      Loading
    },
    props: {
      legend: {
        type: [String, Boolean],
        default: 'v',
        validator() {
          return ['v', 'h']
        }
      }
    },
    computed: {
      mergeExtend() {
        const extend = typeof this.extend === 'function' ? this.extend() : this.extend
        return Object.freeze(merge({
          legend: {
            show: !!this.legend,
            top: 10,
            left: 10,
            right: 10,
            itemWidth: 10,
            itemHeight: 10,
            icon: 'rect',
            align: 'left'
          }
        }, extend))
      },
      mergeSettings() {
        const settings = this.settings
        let center = ['50%', '50%']
        switch (this.legend) {
          case 'v':
            center = ['50%', '55%']
            break
          case 'h':
            center = ['45%', '50%']
            break

        }
        return {
          center,
          radius: '60%',
          legend: this.legend === 'v' ? 'vertical' : '',
          ...settings
        }
      }
    }
  }
</script>
