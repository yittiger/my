export default process.env.NODE_ENV === 'production'
  ? require('gojs/release/go')
  : require('gojs/release/go-debug')
