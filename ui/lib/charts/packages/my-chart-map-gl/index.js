import MyChart from '$ui/charts/packages/my-chart'
import 'echarts-gl'
import {install} from '$ui/utils/helper'
import MapGl from './MapGl'

const Module = {
  name: 'MyChartMapGl',
  mixins: [MyChart],
  adapter: MapGl
}

export default install(Module)
