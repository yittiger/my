const color = '#073684'
const borderColor = '#215495'
const hoverColor = '#1890FF'
const highlightColor = '#1de2ff'
const textColor = '#b4e4ff'

// const color = '#2a3139'
// const borderColor = '#3f5c68'
// const hoverColor = '#373b40'
// const highlightColor = '#58b5c8'
// const textColor = '#b4e4ff'

const mapStyle = {
  boxHeight: 10,
  regionHeight: 3,
  shading: 'lambert',
  light: {
    main: {
      shadow: true
    },
    ambient: {
      intensity: 0.2
    }
  },
  itemStyle: {
    borderColor: borderColor,
    borderWidth: 1,
    color: color
  },
  label: {
    show: false,
    textStyle: {
      fontSize: 14
    }
  },
  emphasis: {
    label: {
      show: true
    },
    itemStyle: {
      color: hoverColor
    }
  }
}

const viewControl = {
  autoRotate: false,
  distance: 100,
  alpha: 30,
  beta: 0,
  minBeta: -Infinity,
  maxBeta: Infinity,
  maxDistance: 500,
  minDistance: 10,
  center: [0, 0, 0]
}

const visualMap = {
  show: false,
  left: 'left',
  min: 0,
  max: 100,
  color: [highlightColor, color],
  text: ['高', '低'],
  calculable: true,
  textStyle: {
    color: textColor
  }
}


export {
  mapStyle,
  viewControl,
  visualMap
}
