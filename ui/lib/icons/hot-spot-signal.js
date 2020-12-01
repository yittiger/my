
/**
 * 该文件由 .my/core/build/svg.js 生成
 */
 
import Vue from 'vue'
import globalConfig from '$ui/config'

const Icon = ({props}) => {
  const attrs = {...globalConfig.svg, ...props}
  return (
    <svg {...{attrs: attrs}}>
       <path d="M975.999737 465.300316c-0.3 110.799937-39.499978 212.49988-104.599941 292.099835-11.999993 14.699992-34.099981 15.899991-47.499973 2.499999-11.599993-11.599993-12.499993-30.199983-2.099998-42.899976 24.099986-29.499983 43.799975-62.099965 58.699966-97.299945C901.399779 570.400257 911.999773 518.000287 911.999773 464.000317c0-53.999969-10.599994-106.39994-31.399982-155.699912-20.099989-47.599973-48.999972-90.399949-85.799951-127.199928s-79.499955-65.599963-127.199928-85.799951C618.39994 74.600538 565.999969 64.000544 512 64.000544S405.60006 74.600538 356.300088 95.400526c-47.599973 20.099989-90.399949 48.999972-127.199928 85.799951s-65.599963 79.499955-85.799951 127.199928C122.600221 357.600377 112.000227 410.000348 112.000227 464.000317s10.599994 106.39994 31.399982 155.699912c14.899992 35.29998 34.59998 67.899962 58.699967 97.299945 10.399994 12.699993 9.599995 31.299982-2.099999 42.899976-13.399992 13.399992-35.39998 12.299993-47.399973-2.299999C87.300241 677.600196 48.000263 575.400254 48.000263 464.000317 48.000263 207.500462 256.100145-0.39942 512.7 0.00058c257.099854 0.4 463.999737 208.199882 463.299737 465.299736zM815.999828 464.000317c0 66.599962-21.399988 128.199927-57.699968 178.199899-11.499993 15.899991-34.49998 17.49999-48.399972 3.699998-11.099994-11.099994-12.499993-28.699984-3.199998-41.399976 10.599994-14.599992 19.399989-30.299983 26.499985-47.099974 12.499993-29.499983 18.799989-60.999965 18.799989-93.399947s-6.299996-63.899964-18.799989-93.399947c-12.099993-28.599984-29.399983-54.199969-51.499971-76.299957-22.099987-22.099987-47.699973-39.399978-76.299957-51.499971-29.599983-12.499993-60.999965-18.799989-93.399947-18.799989s-63.799964 6.299996-93.399947 18.799989c-28.599984 12.099993-54.199969 29.399983-76.299957 51.499971-22.099987 22.099987-39.399978 47.699973-51.499971 76.299957-12.499993 29.499983-18.799989 60.999965-18.799989 93.399947s6.299996 63.799964 18.799989 93.399947c7.099996 16.699991 15.899991 32.499982 26.499985 47.099974 9.199995 12.799993 7.899996 30.299983-3.199998 41.399976-13.799992 13.799992-36.899979 12.199993-48.399972-3.699998-36.299979-49.999972-57.699967-111.599937-57.699968-178.199899 0-167.899905 136.099923-303.999828 303.999828-303.999828s303.999828 136.099923 303.999828 303.999828zM563.299971 581.300251c44.499975-19.499989 75.699957-63.499964 76.699957-114.899935 1.299999-70.99996-56.099968-129.899926-127.099929-130.399926-71.09996-0.5-128.899927 56.999968-128.899927 127.999927 0 52.39997 31.499982 97.499945 76.699957 117.299934 11.699993 5.099997 19.299989 16.599991 19.299989 29.399983V896.000072c0 35.29998-28.699984 63.999964-63.999964 63.999964h-14.999991c-8.799995 0-15.999991 7.199996-15.999991 15.999991v31.999982c0 8.799995 7.199996 15.999991 15.999991 15.999991h222.999874c8.799995 0 15.999991-7.199996 15.999991-15.999991v-31.999982c0-8.799995-7.199996-15.999991-15.999991-15.999991h-15.999991c-35.29998 0-63.999964-28.699984-63.999964-63.999964V610.700234c0-12.799993 7.599996-24.299986 19.299989-29.399983zM512 528.000281c-35.29998 0-63.999964-28.699984-63.999964-63.999964s28.699984-63.999964 63.999964-63.999964 63.999964 28.699984 63.999964 63.999964-28.699984 63.999964-63.999964 63.999964z"/>
    </svg>
  )
}

Vue.component('icon-hot-spot-signal', Icon)
export default Icon

