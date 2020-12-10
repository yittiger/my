import {LinearGradient} from 'echarts/lib/util/graphic'

export default function ({colors, textColor, dark, light, fill}) {
  return {
    color: colors || [
      '#1890ff',
      '#a0d911',
      '#13c2c2',
      '#fdaa09',
      '#2f54eb',
      '#52c41a',
      '#fa541c',
      '#2a71c4',
      '#f5222d',
      '#eb3197',
      '#722ed1'
    ],
    backgroundColor: 'transparent',
    textStyle: {
      fontSize: 16
    },
    title: {
      textStyle: {
        color: textColor
      },
      subtextStyle: {
        color: '#aaaaaa'
      }
    },
    line: {
      itemStyle: {
        normal: {
          borderWidth: 2
        }
      },
      lineStyle: {
        normal: {
          width: 4
        }
      },
      symbolSize: 8,
      symbol: 'circle',
      smooth: true
    },
    radar: {
      itemStyle: {
        borderWidth: '1'
      },
      areaStyle: {
        opacity: 0.5
      },
      lineStyle: {
        normal: {
          width: 2
        }
      },
      symbolSize: '6',
      symbol: 'emptyCircle',
      smooth: true
    },
    bar: {
      itemStyle: {
        normal: {
          barBorderWidth: '1',
          barBorderColor: textColor
        },
        emphasis: {
          barBorderWidth: '1',
          barBorderColor: textColor
        }
      }
    },
    pie: {
      itemStyle: {
        normal: {
          borderWidth: '1',
          borderColor: textColor
        },
        emphasis: {
          borderWidth: '1',
          borderColor: textColor
        }
      }
    },
    scatter: {
      itemStyle: {
        normal: {
          borderWidth: '1',
          borderColor: textColor
        },
        emphasis: {
          borderWidth: '1',
          borderColor: textColor
        }
      }
    },
    boxplot: {
      itemStyle: {
        normal: {
          borderWidth: '1',
          borderColor: textColor
        },
        emphasis: {
          borderWidth: '1',
          borderColor: textColor
        }
      }
    },
    parallel: {
      itemStyle: {
        normal: {
          borderWidth: '1',
          borderColor: textColor
        },
        emphasis: {
          borderWidth: '1',
          borderColor: textColor
        }
      }
    },
    sankey: {
      itemStyle: {
        normal: {
          borderWidth: '1',
          borderColor: textColor
        },
        emphasis: {
          borderWidth: '1',
          borderColor: textColor
        }
      }
    },
    funnel: {
      itemStyle: {
        normal: {
          borderWidth: '1',
          borderColor: textColor
        },
        emphasis: {
          borderWidth: '1',
          borderColor: textColor
        }
      }
    },
    gauge: {
      itemStyle: {
        normal: {
          borderWidth: '1',
          borderColor: textColor
        },
        emphasis: {
          borderWidth: '1',
          borderColor: textColor
        }
      }
    },
    candlestick: {
      itemStyle: {
        normal: {
          color: '#fd1050',
          color0: '#0cf49b',
          borderColor: '#fd1050',
          borderColor0: '#0cf49b',
          borderWidth: 1
        }
      }
    },
    graph: {
      itemStyle: {
        normal: {
          borderWidth: '1',
          borderColor: textColor
        }
      },
      lineStyle: {
        normal: {
          width: 1,
          color: '#aaaaaa'
        }
      },
      symbolSize: '6',
      symbol: 'emptyCircle',
      smooth: true,
      color: [
        '#dd6b66',
        '#759aa0',
        '#e69d87',
        '#8dc1a9',
        '#ea7e53',
        '#eedd78',
        '#73a373',
        '#73b9bc',
        '#7289ab',
        '#91ca8c',
        '#f49f42'
      ],
      label: {
        normal: {
          textStyle: {
            color: textColor
          }
        }
      }
    },
    map: {
      itemStyle: {
        borderColor: '#215495',
        borderWidth: 1,
        areaColor: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.8,
          colorStops: [{
            offset: 0,
            color: '#073684' // 0% 处的颜色
          }, {
            offset: 1,
            color: '#061E3D' // 100% 处的颜色
          }]
        }
      },
      emphasis: {
        label: {
          color: '#fff',
          show: false
        },
        itemStyle: {
          areaColor: '#1890FF'
        }
      }
    },
    geo: {
      show: true,
      roam: false,
      layoutSize: '100%',
      z: 2,
      itemStyle: {
        normal: {
          areaColor: {
            type: 'radial',
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [{
              offset: 0,
              color: '#073684' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#061E3D' // 100% 处的颜色
            }]
          },
          borderColor: new LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#00F6FF'
          }, {
            offset: 1,
            color: '#53D9FF'
          }], false),
          borderWidth: 3,
          shadowBlur: 100,
          shadowColor: 'rgba(10,76,139,0.8)',
          shadowOffsetY: 0
          // shadowColor: '#186c84'
          // shadowOffsetX: 5,
          // shadowOffsetY: 8,
          // shadowBlur: 1
        },
        emphasis: {
          label: {
            show: false
          },
          areaColor: '#1890FF',
          borderWidth: 1,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },
      label: {
        normal: {
          textStyle: {
            color: '#fff'
          }
        },
        emphasis: {
          show: false,
          textStyle: {
            color: '#fff'
          }
        }
      }
    },
    categoryAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: textColor,
          width: 2
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: textColor
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: textColor
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: [
            'rgba(170,170,170,0.18)'
          ]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: [
            '#eeeeee'
          ]
        }
      }
    },
    valueAxis: {
      nameTextStyle: {
        color: dark
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: 'rgba(238,238,238,0.2)'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(24,76,115,0.5)'
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: textColor
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dotted',
          color: [
            'rgba(24,76,115,0.5)'
          ]
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: [
            'rgba(170,170,170,0.05)',
            'rgba(170,170,170,0.01)'
          ]
        }
      }
    },
    logAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(238,238,238,0.2)'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(238,238,238,0.12)'
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#eeeeee'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: [
            'rgba(170,170,170,0.18)'
          ]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: [
            '#eeeeee'
          ]
        }
      }
    },
    timeAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(238,238,238,0.2)'
        }
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: 'rgba(238,238,238,0.12)'
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#eeeeee'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: [
            'rgba(170,170,170,0.18)'
          ]
        }
      },
      splitArea: {
        show: false,
        areaStyle: {
          color: [
            '#eeeeee'
          ]
        }
      }
    },
    toolbox: {
      iconStyle: {
        normal: {
          borderColor: textColor
        },
        emphasis: {
          borderColor: textColor
        }
      }
    },
    legend: {
      align: 'auto',
      textStyle: {
        color: textColor
      }
    },
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'item',
        label: {
          backgroundColor: '#6a7985'
        },
        lineStyle: {
          color: 'rgba(180,228,225,0.5)',
          width: '1'
        },
        crossStyle: {
          color: 'rgba(180,228,225,0.5)',
          width: '1'
        }
      }
    },
    timeline: {
      lineStyle: {
        color: '#eeeeee',
        width: 1
      },
      itemStyle: {
        normal: {
          color: '#dd6b66',
          borderWidth: 1
        },
        emphasis: {
          color: '#a9334c'
        }
      },
      controlStyle: {
        normal: {
          color: textColor,
          borderColor: textColor,
          borderWidth: 0.5
        },
        emphasis: {
          color: textColor,
          borderColor: textColor,
          borderWidth: 0.5
        }
      },
      checkpointStyle: {
        color: '#e43c59',
        borderColor: 'rgba(194,53,49,0.5)'
      },
      label: {
        normal: {
          textStyle: {
            color: textColor
          }
        },
        emphasis: {
          textStyle: {
            color: textColor
          }
        }
      }
    },
    visualMap: {
      left: 40,
      bottom: 10,
      color: [
        '#f5222d',
        '#fdaa09',
        '#52c41a'
      ],
      textStyle: {
        color: '#fff'
      }
    },
    dataZoom: {
      backgroundColor: 'rgba(47,69,84,0)',
      dataBackgroundColor: 'rgba(255,255,255,0.3)',
      fillerColor: 'rgba(167,183,204,0.4)',
      handleColor: '#a7b7cc',
      handleSize: '100%',
      textStyle: {
        color: textColor
      }
    },
    markPoint: {
      label: {
        normal: {
          textStyle: {
            color: textColor
          }
        },
        emphasis: {
          textStyle: {
            color: textColor
          }
        }
      }
    }
  }
}
