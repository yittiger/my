
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M327.8 47.8C312.2 38.1 294.1 33 275.7 33c-15.9 0-31.3 3.8-45 10.8-13.7 7-25.8 17.3-35.1 30.1l-117.6 163c-9 12.4-13.8 27.4-13.8 42.8 0 12.6 3.2 24.7 9.1 35.3 5.9 10.7 14.4 19.8 25.1 26.5l629.6 395.3c15.8 9.9 34.1 15.2 52.8 15.2 16.1 0 31.7-3.9 45.7-11.1 13.9-7.2 26.1-17.7 35.4-30.9L1024.2 480 327.8 47.8z m481.8 625.3c-6.6 9.4-17.3 14.9-28.8 14.9-3.3 0-6.6-0.5-9.8-1.4-3.2-0.9-6.2-2.3-9-4L132.4 287.3c-2.6-1.7-4.2-4.6-4.2-7.7 0-1.9 0.6-3.8 1.7-5.3l117.6-163c6.5-9 17-14.4 28.2-14.4 3.2 0 6.5 0.5 9.5 1.3 3.1 0.9 6 2.2 8.8 3.9l638.7 396.4-123.1 174.6zM754.1 768c-11.1 0-22-1.5-32.6-4.5-10.6-3-20.7-7.4-30.2-13.2l-611.8-373c-6.7-4.1-15.3 0.7-15.3 8.6v22.6c0 14.6 7.6 28.2 20 35.8l182.5 112.3C241.2 572 224.2 600 224.2 632c0 20.2 6.8 38.8 18.3 53.7a62.518 62.518 0 0 1-44.2 18.3H64.2v-46.8c0-29-19.5-54.4-47.6-61.9L0.2 591l-0.2 369 28.8-14.3c21.7-10.8 35.5-33 35.5-57.3V768h135.5c25.9 0 50.8-10.3 69.2-28.7l3.1-3.1c10.6-10.6 25-16.3 40-16.3h0.2c46.4 0 84.4-35.9 87.8-81.4L674.2 807.2c9.2 5.7 19.9 8.7 30.7 8.7 9.8 0 19.3-2.5 27.7-6.9 8.4-4.5 15.7-11 21.1-19.2l6.8-10.1c3.2-5-0.4-11.7-6.4-11.7zM312.2 656c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24z"/>
    </svg>
  )
}

Vue.component('icon-video-camera', Icon)
export default Icon

