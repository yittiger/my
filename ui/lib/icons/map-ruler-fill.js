
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M996.2 679L340 22.8c-12.5-12.5-32.8-12.5-45.3 0L23.2 294.3c-12.5 12.5-12.5 32.8 0 45.3l656.2 656.2c12.5 12.5 32.8 12.5 45.3 0l271.5-271.5c12.5-12.5 12.5-32.8 0-45.3zM262.6 234.9l119.2-119.2c1.6-1.6 4.1-1.6 5.7 0l39.6 39.6c1.6 1.6 1.6 4.1 0 5.7L307.9 280.2c-1.6 1.6-4.1 1.6-5.7 0l-39.6-39.6c-1.5-1.6-1.5-4.1 0-5.7z m112.9 45l85.2-85.2c1.6-1.6 4.1-1.6 5.7 0l39.6 39.6c1.6 1.6 1.6 4.1 0 5.7l-85.2 85.2c-1.6 1.6-4.1 1.6-5.7 0l-39.6-39.6c-1.5-1.6-1.5-4.1 0-5.7z m79 79l85.2-85.2c1.6-1.6 4.1-1.6 5.7 0l39.6 39.6c1.6 1.6 1.6 4.1 0 5.7l-85.2 85.2c-1.6 1.6-4.1 1.6-5.7 0l-39.6-39.6c-1.6-1.6-1.6-4.1 0-5.7z m45.7 113.6l119.2-119.2c1.6-1.6 4.1-1.6 5.7 0l39.6 39.6c1.6 1.6 1.6 4.1 0 5.7L545.5 517.8c-1.6 1.6-4.1 1.6-5.7 0l-39.6-39.6c-1.5-1.6-1.5-4.1 0-5.7z m152.5 90.3l-39.6-39.6c-1.6-1.6-1.6-4.1 0-5.7l85.2-85.2c1.6-1.6 4.1-1.6 5.7 0l39.6 39.6c1.6 1.6 1.6 4.1 0 5.7l-85.2 85.2c-1.6 1.6-4.1 1.6-5.7 0z m39.4 33.7l85.2-85.2c1.6-1.6 4.1-1.6 5.7 0l39.6 39.6c1.6 1.6 1.6 4.1 0 5.7l-85.2 85.2c-1.6 1.6-4.1 1.6-5.7 0l-39.6-39.6c-1.6-1.6-1.6-4.1 0-5.7z m85.3 158.9l-39.6-39.6c-1.6-1.6-1.6-4.1 0-5.7L857 590.9c1.6-1.6 4.1-1.6 5.7 0l39.6 39.6c1.6 1.6 1.6 4.1 0 5.7L783.1 755.4c-1.6 1.5-4.1 1.5-5.7 0z"/>
    </svg>
  )
}

Vue.component('icon-map-ruler-fill', Icon)
export default Icon

