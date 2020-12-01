
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M402.2 198.4c-118.8 0-227 45.3-308.4 119.5l36.2 53.7c34.8-33.3 74.7-59.6 119-78.3 48.5-20.5 100-30.9 153.2-30.9s104.7 10.4 153.2 30.9c46.9 19.8 89 48.2 125.1 84.4s64.5 78.3 84.4 125.1c20.5 48.5 30.9 100 30.9 153.2 0 3.7 0 7.5-0.2 11.2l64.1-5.3V656c0.1-252.7-204.8-457.6-457.5-457.6zM402.2 32C249 32 108.6 87.2 0 178.9l36 53.4c16.9-14.6 34.6-28.2 53.1-40.7 29.9-20.2 61.9-37.6 95.1-51.6 69-29.2 142.3-44 218-44s149 14.8 218 44c33.2 14 65.2 31.4 95.1 51.6 29.7 20 57.6 43.1 82.9 68.4 25.4 25.4 48.4 53.3 68.4 82.9 20.2 29.9 37.6 61.9 51.6 95.1 28.8 68.2 43.6 140.6 44 215.3l64-5.3c-4.3-340.9-282-616-624-616zM126.9 527l128.1 74c14.6 8.4 31.2 12.9 48 12.9 20.3 0 39.7-6.3 56.2-18.2 13.2-9.5 29.4-14.8 45.7-14.8 12.7 0 24.9 3.1 36.2 9.1 13.9 7.4 25 18.6 32.3 32.4 7.1 13.6 10 28.8 8.5 43.9-3.8 37.7 14.8 74.3 47.5 93.1l122.2 70.5c-24.3 34.8-55.8 64.3-92.3 86.4-46.7 28.2-100.4 43.3-155.3 43.7H402.2c-40.9 0-80.6-7.9-117.9-23.6-36.1-15.1-68.5-36.8-96.3-64.5-27.9-27.7-49.8-59.9-65.2-95.8-15.9-37.2-24.2-76.8-24.5-117.8-0.4-45.6 9.4-90.5 28.6-131.3m-12.6-76.3c-10.9 0-21.4 5.5-27.4 15.5C53 522.4 33.7 588.3 34.2 658.8 35.7 861.4 199.8 1024 402.2 1024h2.2c137.6-0.8 257.3-77.1 319.8-189.6 8.5-15.3 3.3-34.6-11.9-43.4l-150.8-87.1c-11-6.3-17.1-18.6-15.8-31.2 5.6-55.5-22.1-111.5-74.4-139.3-21.2-11.2-43.9-16.6-66.3-16.6-29.8 0-59 9.4-83.2 27-5.5 4-12.1 6-18.6 6-5.5 0-11.1-1.4-16-4.3L130.3 455c-5.1-2.9-10.6-4.3-16-4.3z"/>
    </svg>
  )
}

Vue.component('icon-gps', Icon)
export default Icon

