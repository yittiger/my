<template>
  <div>
    <my-chart  :options="option"  ></my-chart>
  </div>
</template>
<script>

const trafficWay = [
  {
    name: '火车',
    value: 20
  },
  {
    name: '飞机',
    value: 10
  },
  {
    name: '客车',
    value: 30
  },
  {
    name: '轮渡',
    value: 40
  }
];

const data = [];
const color = ['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000']
for (let i = 0; i < trafficWay.length; i++) {
    data.push({
        value: trafficWay[i].value,
        name: trafficWay[i].name,
        itemStyle: {
            normal: {
              borderWidth: 5,
              shadowBlur: 20,
              borderColor: color[i],
              shadowColor: color[i]
            }
        }
    }, {
        value: 2,
        name: '',
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
            }
}
    });
}
const seriesOption = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [105, 109],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: true,
                position: 'outside',
                color: '#ddd',
                formatter: function(params) {
                    let percent = 0;
                    let total = 0;
                    for (let i = 0; i < trafficWay.length; i++) {
                        total += trafficWay[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if(params.name !== '') {
                        return '交通方式：' + params.name + '\n' + '\n' + '占百分比：' + percent + '%';
                    }else {
                        return '';
                    }
                }
            },
            labelLine: {
                length: 30,
                length2: 100,
                show: true,
                color: '#00ffff'
            }
        }
    },
    data: data
}];
const option = {
    backgroundColor: '#0A2E5D',
    color: color,
     
 
    tooltip: {
        show: false
    },
    legend: {
        icon: 'circle',
        orient: 'horizontal',
        // x: 'left',
        data: ['火车', '飞机', '客车', '轮渡'],
        right: 340,
        bottom: 0,
        align: 'right',
        textStyle: {
          color: '#fff'
        },
        itemGap: 20
    },
    toolbox: {
        show: false
    },
    series: seriesOption
}
export default {
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
  created() {
  },
  mounted() {
    console.log(this.option)
  }
}
</script>
<style lang="scss" scoped>
</style>