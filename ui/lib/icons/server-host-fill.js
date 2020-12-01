
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M768 0H256c-35.3 0-64 28.6-64 64v928c0 17.7 14.3 32 32 32h576c17.7 0 32-14.3 32-32V64c0-35.4-28.7-64-64-64zM546 831.5c-8.4 8.4-20.1 13.7-32.9 13.7H511c-25.7 0-46.6-20.9-46.6-46.6 0-12.9 5.2-24.5 13.7-32.9s20-13.7 32.9-13.7h2.1c25.7 0 46.6 20.9 46.6 46.6-0.1 12.9-5.3 24.5-13.7 32.9zM479.3 672c0-8.8 3.6-16.8 9.4-22.6 5.8-5.8 13.8-9.4 22.6-9.4h1.4c17.7 0 32 14.3 32 32 0 8.8-3.6 16.8-9.4 22.6-5.8 5.8-13.8 9.4-22.6 9.4h-1.4c-17.7 0-32-14.3-32-32z m224.3-112c0 8.8-7.2 16-16 16H335.8c-8.8 0-16-7.2-16-16V400c0-8.8 7.2-16 16-16h351.8c8.8 0 16 7.2 16 16v160z m0-256c0 8.8-7.2 16-16 16H335.8c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h351.8c8.8 0 16 7.2 16 16v32z m0.4-128c0 8.8-7.2 16-16 16H336.2c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16H688c8.8 0 16 7.2 16 16v32zM639.6 452v56c0 2.2-1.8 4-4 4H387.8c-2.2 0-4-1.8-4-4v-56c0-2.2 1.8-4 4-4h247.8c2.2 0 4 1.8 4 4z"/>
    </svg>
  )
}

Vue.component('icon-server-host-fill', Icon)
export default Icon

