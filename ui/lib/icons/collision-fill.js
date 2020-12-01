
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M600 0C437.6 0 296.6 91.3 225.3 225.3 91.3 296.6 0 437.6 0 600c0 234.2 189.8 424 424 424 162.4 0 303.4-91.3 374.7-225.3C932.7 727.4 1024 586.4 1024 424 1024 189.8 834.2 0 600 0z m78.6 854.6c-33.1 33.1-71.6 59-114.5 77.2C519.8 950.5 472.6 960 424 960s-95.8-9.5-140.1-28.3c-42.9-18.1-81.4-44.1-114.5-77.2-33.1-33.1-59-71.6-77.2-114.5C73.5 695.8 64 648.6 64 600s9.5-95.8 28.3-140.1c18.1-42.9 44.1-81.4 77.2-114.5l0.2-0.2c5.1-5.1 13.7-0.6 12.5 6.5-4 23.5-6.1 47.6-6.1 72.2 0 234 190 424 424 424 24.6 0 48.8-2.1 72.2-6.1 7.1-1.2 11.6 7.4 6.5 12.5-0.1 0.1-0.2 0.2-0.2 0.3z m176-176l-0.2 0.2c-5.1 5.1-13.7 0.6-12.5-6.5 4-23.5 6.1-47.6 6.1-72.2 0-234-190-424-424-424-24.6 0-48.7 2.1-72.2 6.1-7.1 1.2-11.6-7.4-6.5-12.5l0.2-0.2c33.1-33.1 71.6-59 114.5-77.2C504.2 73.5 551.4 64 600 64s95.8 9.5 140.1 28.3c42.9 18.1 81.4 44.1 114.5 77.2 33.1 33.1 59 71.6 77.2 114.5 18.7 44.2 28.2 91.4 28.2 140s-9.5 95.8-28.3 140.1c-18.1 42.9-44.1 81.4-77.1 114.5z"/>
    </svg>
  )
}

Vue.component('icon-collision-fill', Icon)
export default Icon

