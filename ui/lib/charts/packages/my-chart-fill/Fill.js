import {cloneDeep} from '$ui/utils/util'

export default function ({data}) {
  // 克隆数据
  const dataCopy = Array.isArray(data) ? cloneDeep(data) : [0]

  return {
    series: [{
      type: 'liquidFill',
      data: dataCopy
    }]
  }
}
