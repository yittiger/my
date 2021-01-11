import factory from '$ui/charts/utils/factory'
import {columnsToStandard, createDataset} from '$ui/charts/utils/dataset'
import {cloneDeep} from '$ui/utils/util'

const defaultStyle = {
  shading: 'lambert',
  boxHeight: 10,
  regionHeight: 3,
  light: {
    main: {
      shadow: true
    },
    ambient: {
      intensity: 0.2
    }
  },
  itemStyle: {
    color: '#073684',
    borderWidth: 1,
    borderColor: '#215495'
  },
  emphasis: {
    itemStyle: {
      color: '#215495'
    }
  }
}


const props = {
  mapStyle: {
    type: Object,
    default() {
      return defaultStyle
    }
  },
  // 构造序列数据项辅助函数
  dataHelper: [Object, Function],
  // 序列构造辅助函数
  typeHelper: [Object, Function]
}

function createCoords(coordinates, coords) {
  if (!Array.isArray(coords)) return []
  return coords.map(item => {
    if (Array.isArray(item)) {
      return item
    } else {
      return coordinates[item] || null
    }
  }).filter(n => n)
}

function createData(type, {dimensions, source}, {dataHelper}, coordinates) {
  const rows = source.slice(1)
  const isDataHelperFunc = typeof dataHelper === 'function'
  switch (type) {
    case 'map3D':
      return rows.map((row, index) => {
        return {
          name: row[0],
          value: row[1],
          ...(isDataHelperFunc ? dataHelper(row, index) : dataHelper)
        }
      })
    case 'lines3D':
      return rows.map((row, index) => {
        return {
          name: row[0],
          coords: createCoords(coordinates, row[1]),
          ...(isDataHelperFunc ? dataHelper(row, index) : dataHelper)
        }
      })
    case 'scatter3D':
    case 'bar3D':
      return rows.map((row, index) => {
        const name = row[0]
        const coords = coordinates[name] || [undefined, undefined]
        return {
          name: name,
          value: coords.concat(row[1]),
          ...(isDataHelperFunc ? dataHelper(row, index) : dataHelper)
        }
      })
  }
  return []
}

export default function ({data, settings, map, coordinates}) {
  // 克隆数据
  const dataCopy = cloneDeep(data || [])

  const dataArray = [].concat(dataCopy)

  // 获取私有配置的值
  const settingsValue = factory(props, settings)

  const isTypeFunc = typeof settingsValue.typeHelper === 'function'
  const series = dataArray.map((n, index) => {
    // 转换成标准的列配置
    const standardColumns = columnsToStandard(n)
    // 构建dataset
    const dataset = createDataset(standardColumns, n, settingsValue)
    const type = n.type || 'map3D'
    const mapStyle = type === 'map3D' ? settingsValue.mapStyle : null
    return {
      type,
      map: map,
      name: standardColumns[1]?.name,
      coordinateSystem: 'geo3D',
      shading: 'lambert',
      label: {
        show: false
      },
      emphasis: {
        label: {
          show: false
        }
      },
      data: createData(type, dataset, settingsValue, coordinates),
      ...mapStyle,
      ...(isTypeFunc ? settingsValue.typeHelper(n, index) : settingsValue.typeHelper)
    }
  })

  const hasMap = series.find(n => n.type === 'map3D')
  return {
    geo3D: {
      ...settingsValue.mapStyle,
      map: map,
      show: !hasMap

    },
    series
  }
}
