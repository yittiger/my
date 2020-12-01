
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M480.1 205.7c42.9 0 84.5 11.7 120.4 33.9 34.7 21.4 62.6 51.6 80.8 87.2l16.7 32.7 36.7 2.1c61.4 3.6 118.4 29.3 160.6 72.4C937.2 476.8 960.2 532.8 960.2 591.7c0 31.4-6 61.7-17.8 90.3-11.4 27.5-27.7 52.2-48.4 73.5-42.3 43.3-98.3 67.1-157.8 67.1H257.8c-53.2-3.2-102.5-24.3-138.9-59.4-35.4-34.2-54.9-78.6-54.9-124.8 0-39.3 13.8-76.8 40-108.5 13-15.7 28.6-29.5 46.4-40.9 18.3-11.7 38.4-20.7 59.8-26.6l43.4-12 3.3-44.9c4-53.8 28.8-103.9 69.7-141.1 41.7-37.9 96.2-58.7 153.5-58.7m0-64c-152 0-276.2 114.3-287 259C81.4 431.5 0 526.2 0 638.3c0 132.1 113.2 240.7 256 248.3H736.2c159 0 288-132 288-294.8 0-157-126.4-284.8-285.8-294-47.1-92.4-144.8-156.1-258.3-156.1zM576.2 352v380c0 2.2-1.8 4-4 4H388.2c-2.2 0-4-1.8-4-4V356c0-2.2 1.8-4 4-4h188z m-224-64c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V320c0-17.7-14.3-32-32-32H352.2zM536.2 448.5H424.2c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8zM536.2 544.5H424.2c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8zM480.2 671.5c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/>
    </svg>
  )
}

Vue.component('icon-cloud-disk', Icon)
export default Icon

