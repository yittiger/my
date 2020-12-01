
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M347 827.4V960h-51.2V827.4H347m381.2 0V960H677V827.4h51.2M726.9 0H272.1c0 0.5-0.1 1-0.1 1.5h-40.2v929.9h-68.1v44.2H98.6v48.4h826.9v-48.5h-65.2v-44.2h-68.1V1.5H727c0-0.5-0.1-1-0.1-1.5zM602.1 149.6V57.5h115.1v92.2H602.1v-0.1z m-150.1 0V57.5h115v92.2H452v-0.1z m-150.2 0V57.5h115.1v92.2H301.8v-0.1zM452 272.3v-92h115v92H452z m-150.2 0v-92h115.1v92H301.8z m300.3 0v-92h115.1v92H602.1z m0 122.7v-92h115.1v92H602.1zM452 395v-92h115v92H452z m-150.2 0v-92h115.1v92H301.8z m300.3 122.9v-92h115.1v92H602.1z m-150.1 0v-92h115v92H452z m-150.2 0v-92h115.1v92H301.8z m300.3 122.7v-92h115.1v92H602.1z m-150.1 0v-92h115v92H452z m-150.2 0v-92h115.1v92H301.8z m300.3 122.8v-92h115.1v92H602.1z m-150.1 0v-92h115v92H452z m-150.2 0v-92h115.1v92H301.8zM521 931.3V810.2h92v121.1h-92v0.1-0.1z m-110 0V810.2h92v121.1h-92z"/>
    </svg>
  )
}

Vue.component('icon-high-building', Icon)
export default Icon

