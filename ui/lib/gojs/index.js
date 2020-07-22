import './style/index.scss'
import go from './utils/lib'
import Diagram from './packages/Diagram'
import Overview from './packages/Overview'

export * from './init/index'
export * from './template/index'
const $ = go.GraphObject.make

export {
  go,
  $,
  Diagram,
  Overview
}
