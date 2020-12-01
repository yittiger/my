
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M688 320h144l112.1-74.7c38-25.3 38-81.2 0-106.5L832 64H688c-8.8 0-16-7.2-16-16V0h-64v48c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16V0h-64v48c0 8.8-7.2 16-16 16H112v256h224c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H192L79.9 458.7c-38 25.3-38 81.2 0 106.5L192 640h144c8.8 0 16 7.2 16 16v368h64V656c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v368h64V656c0-8.8 7.2-16 16-16h224V384H688c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16z m-512-64V128h636.6l56.1 37.4c19 12.7 19 40.6 0 53.3L812.6 256H176z m432 80v32c0 8.8-7.2 16-16 16H432c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16z m240 112v128H211.4l-56.1-37.4c-19-12.7-19-40.6 0-53.3l56.1-37.4H848z"/>
    </svg>
  )
}

Vue.component('icon-map-indicator', Icon)
export default Icon

