<template>
  <div style="height: 100%"> 
    <my-dv-page target="parent" fit>
      <my-dv-box  x-align="center"
        y-align="middle"
        width="80%"
        height="80%" style="background: rgba(255,0,0,0.2)"
      >
        <my-chart :options="options" width="100%" height="100%"></my-chart> 
      </my-dv-box> 
    </my-dv-page>  
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
const img = ''
const trafficWay = [{
    name: '火车',
    value: 20
}, {
    name: '飞机',
    value: 10
}, {
    name: '客车',
    value: 30
}, {
    name: '轮渡',
    value: 40
}];
export default {
  mixins: [],
  components: {},
  props: {
  },
  data() {
    return {
      data: [],
      color: ['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000'],
      options: {}
    }
  },
  computed: {
  },
  methods: {
    setData() {

      for (let i = 0; i < trafficWay.length; i++) {
        this.data.push(
          {
            value: trafficWay[i].value,
            name: trafficWay[i].name,
            itemStyle: {
              normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: this.color[i],
                shadowColor: this.color[i]
              }
            }
          }, 
          {
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
          }
        );
      }
    },
    setSeriesOption() {
      return [{
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
          data: this.data
      }]
    }
  },
  created() {},
  mounted() {
    this.setData()
    const seriesOption = this.setSeriesOption()
    this.options = {
      backgroundColor: '#0A2E5D',
      color: this.color,
      title: {
          text: '交通方式',
          top: '48%',
          textAlign: 'center',
          left: '49%',
          textStyle: {
              color: '#fff',
              fontSize: 22,
              fontWeight: '400'
          }
      },
      graphic: {
      elements: [{
          type: 'image',
          z: 3,
          style: {
              image: img,
              width: 178,
              height: 178
          },
          left: 'center',
          top: 'center',
          position: [100, 100]
      }]
      },
      tooltip: {
          show: false
      },
      legend: {
          icon: 'circle',
          orient: 'horizontal',
          // x: 'left',
          data: ['火车', '飞机', '客车', '轮渡'],
          right: 340,
          bottom: 150,
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

  }
}
</script>