
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1013.04039 527.1L892.84039 196.9c-0.9-2.6 1-5.4 3.8-5.4H973.34039c2.2 0 4-1.8 4-4.1 0-16.5-6.7-31.5-17.6-42.4-10.9-10.9-25.9-17.6-42.4-17.6H560.34039c-8.8 0-16-7.2-16-16V64.1c0-17.5-13.8-32.2-31.3-32.6-9.1-0.2-17.4 3.4-23.4 9.4-5.8 5.8-9.4 13.8-9.4 22.6v48c0 8.8-7.2 16-16 16H108.34039c-33.1 0-60 26.9-60 60 0 1.1 0.5 2.1 1.2 2.8 0.7 0.7 1.7 1.2 2.8 1.2h73.7c2.8 0 4.7 2.8 3.8 5.4L9.64039 527.1c-0.3 0.8-0.6 1.6-1 2.4C-3.75961 555-3.05961 584.9 12.34039 608.7c11.9 18.5 27.2 35 45 48.9 36.9 28.7 84.7 46 137 46 81.4 0 152-41.9 187.2-103.4 12.9-22.5 11.3-49.8-2-72.1-0.2-0.3-0.3-0.6-0.4-0.9L258.84039 196.9c-0.9-2.6 1-5.4 3.8-5.4H384.34039c53 0 96 43 96 96v583.6c0 23.6-17.2 43.8-40.5 47.4-63.4 9.8-115.2 30.9-143.6 58h448.3c-30.6-29.1-88-51.2-157.9-60-24.1-3-42.2-23.4-42.2-47.6V287.5c0-53 43-96 96-96h120.5c2.8 0 4.7 2.8 3.8 5.4L644.34039 527.1c-0.2 0.5-0.4 1-0.7 1.5-13.3 24.3-13.8 53.6 0.8 77.2 36.2 58.4 105 97.8 183.9 97.8 81.3 0 151.8-41.8 187-103.1 13-22.6 11.3-50.1-2-72.5-0.1-0.4-0.2-0.6-0.3-0.9zM194.24039 639.5c-35.8 0-70.2-11.4-97.1-32H291.34039c-26.8 20.6-61.3 32-97.1 32z m122.6-96h-245l118.8-326.4c1.3-3.5 6.2-3.5 7.5 0l118.7 326.4z m511.6 96c-35.8 0-70.2-11.4-97.1-32h194.1c-26.8 20.6-61.3 32-97 32z m-121.9-96l118.4-325.4c1.3-3.5 6.2-3.5 7.5 0l118.4 325.4H706.54039z"/>
    </svg>
  )
}

Vue.component('icon-balance', Icon)
export default Icon

