const color = '#073684'
const borderColor = '#215495'
const hoverColor = '#1890FF'
const hoverBorderColor = 'red'

const geo3D = {
  boxHeight: 20,
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
    itemStyle: {
      color: hoverColor,
      borderColor: hoverBorderColor
    }
  },
  viewControl: {
    autoRotate: false,
    distance: 100,
    alpha: 40,
    beta: 0,
    minBeta: -Infinity,
    maxBeta: Infinity,
    maxDistance: 500,
    minDistance: 10,
    center: [0, 0, 0]
  }
}

export {
  geo3D
}
