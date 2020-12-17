export const map = {}

export const scatter = {
  symbolSize: 16
}

export const effectScatter = {
  symbolSize: 16,
  rippleEffect: {
    brushType: 'stroke'
  }
}

export const lines = {
  effect: {
    show: true,
    period: 3, // 箭头指向速度，值越小速度越快
    trailLength: 0.3, // 特效尾迹长度[0,1]值越大，尾迹越长重
    symbol: 'circle', // 箭头图标
    symbolSize: 6 // 图标大小
  },
  lineStyle: {
    width: 2,
    opacity: 0.2,
    curveness: 0.2
  },
  emphasis: {
    lineStyle: {
      opacity: 0.5,
      width: 4
    }
  }
}

export default {
  map,
  scatter,
  effectScatter,
  lines
}
