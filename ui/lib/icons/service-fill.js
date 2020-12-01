
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M1016 464H8c-4.4 0-8 3.6-8 8v264c0 17.7 14.3 32 32 32h440c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8H296c-4.4 0-8 3.6-8 8v50c0 4.4 3.6 8 8 8h176c4.4 0 8 3.6 8 8v18c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4v-18c0-4.4 3.6-8 8-8h176c4.4 0 8-3.6 8-8v-50c0-4.4-3.6-8-8-8H552c-4.4 0-8-3.6-8-8v-80c0-4.4 3.6-8 8-8h440c17.7 0 32-14.3 32-32V472c0-4.4-3.6-8-8-8zM128 592c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z m758.6 22.6c-5.8 5.8-13.8 9.4-22.6 9.4H288c-17.7 0-32-14.3-32-32s14.3-32 32-32h576c17.7 0 32 14.3 32 32 0 8.8-3.6 16.8-9.4 22.6zM992 144H32c-17.7 0-32 14.3-32 32v264c0 4.4 3.6 8 8 8h1008c4.4 0 8-3.6 8-8V176c0-17.7-14.3-32-32-32zM128 272c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z m758.6 22.6c-5.8 5.8-13.8 9.4-22.6 9.4H288c-17.7 0-32-14.3-32-32s14.3-32 32-32h576c17.7 0 32 14.3 32 32 0 8.8-3.6 16.8-9.4 22.6z"/>
    </svg>
  )
}

Vue.component('icon-service-fill', Icon)
export default Icon

