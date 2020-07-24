import merge from 'lodash/merge'

const go = process.env.NODE_ENV === 'production'
  ? require('gojs/release/go')
  : require('gojs/release/go-debug')

const $ = go.GraphObject.make

export default go
export {
  go,
  $,
  merge
}
