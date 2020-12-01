
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M224 32v544c0 17.7-14.3 32-32 32H96c-53 0-96-43-96-96V96C0 43 43 0 96 0h96c17.7 0 32 14.3 32 32zM942.8 608H671.6c-50.9 0-90.4 44.4-84.6 95l23.5 203.3c7.2 62.7-41.8 117.7-104.9 117.7h-44.9c-16.7 0-31.9-6.8-42.9-17.8S400 980.1 400 963.3c0-63.6-9.8-126.3-28.7-186.3-18.8-59.9-46.8-116.9-83.3-169V123.9C288 55.5 343.5 0 411.9 0h317c122.7 0 227.2 89.3 246.4 210.5l47.9 303.4c7.8 49.4-30.4 94.1-80.4 94.1z"/>
    </svg>
  )
}

Vue.component('icon-bad-fill', Icon)
export default Icon

