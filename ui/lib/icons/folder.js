
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M479.1 181.2l-76-106.4c-12-16.8-31.4-26.8-52-26.8H64C28.7 48 0 76.7 0 112v736c0 70.7 57.3 128 128 128h768c70.7 0 128-57.3 128-128V336c0-70.7-57.3-128-128-128H531.2c-20.6 0-40-10-52.1-26.8zM80 112h262.8c5.2 0 10 2.5 13 6.7l63.8 89.3H80c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16z m816 800H128c-35.3 0-64-28.7-64-64V288c0-8.8 7.2-16 16-16h816c35.3 0 64 28.7 64 64v512c0 35.3-28.7 64-64 64z"/>
    </svg>
  )
}

Vue.component('icon-folder', Icon)
export default Icon

