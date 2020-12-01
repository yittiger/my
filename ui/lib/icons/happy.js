
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M512 63.968765c60.370522 0 118.941923 11.794241 174.114983 35.08287 53.273987 22.489019 101.050659 54.773255 142.230551 95.853197 41.079941 41.079941 73.364178 88.956564 95.853197 142.230551 23.288629 55.073109 35.08287 113.64451 35.08287 174.114983s-11.794241 118.941923-35.08287 174.114983c-22.489019 53.273987-54.773255 101.050659-95.853197 142.230551-41.079941 41.079941-88.956564 73.364178-142.230551 95.853197-55.17306 23.288629-113.744461 35.08287-174.114983 35.08287s-118.941923-11.794241-174.114983-35.08287c-53.273987-22.489019-101.050659-54.773255-142.230551-95.853197-41.079941-41.079941-73.364178-88.956564-95.853197-142.230551C76.51264 630.192289 64.718399 571.620888 64.718399 511.250366s11.794241-118.941923 35.08287-174.114983c22.489019-53.273987 54.773255-101.050659 95.853197-142.230551s88.956564-73.364178 142.230551-95.853197C393.058077 75.763006 451.629478 63.968765 512 63.968765m0-63.968765C229.637872 0 0.749634 228.888238 0.749634 511.250366s228.888238 511.250366 511.250366 511.250366 511.250366-228.888238 511.250366-511.250366S794.362128 0 512 0zM264.121035 424.292826m-71.964861 0a71.964861 71.964861 0 1 0 143.929722 0 71.964861 71.964861 0 1 0-143.929722 0ZM759.878965 424.292826m-71.964861 0a71.964861 71.964861 0 1 0 143.929722 0 71.964861 71.964861 0 1 0-143.929722 0ZM291.30776 720.148365c-14.19307 0-21.289605 17.091654-11.394436 27.186725C317.295071 785.416496 396.356467 848.085896 512 848.085896c14.692826 0 140.031625-2.198926 233.18614-100.950708 9.595315-10.195022 2.398829-26.986823-11.594339-26.986823H291.30776z"/>
    </svg>
  )
}

Vue.component('icon-happy', Icon)
export default Icon

