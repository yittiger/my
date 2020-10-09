<template>
  <Box class="my-dv-adorn-10"
       :class="classes"
       :style="styles"
       default-width="600px"
       default-height="20px"
       v-bind="$attrs"
       v-on="$listeners">
    <svg :width="`${width}px`" :height="`${height}px`">
      <polyline
        :stroke="dark"
        stroke-width="2"
        :points="`0, ${height / 2} ${width}, ${height / 2}`"
      />

      <polyline
        :stroke="light"
        stroke-width="2"
        :points="`5, ${height / 2} ${width * 0.2 - 3}, ${height / 2}`"
        :stroke-dasharray="`0, ${width * 0.2}`"
        fill="freeze"
      >
        <animate
          :id="`a2${_uid}`"
          attributeName="stroke-dasharray"
          :values="`0, ${width * 0.2};${width * 0.2}, 0;`"
          dur="3s"
          :begin="`a1${_uid}.end`"
          fill="freeze"
        />
        <animate
          attributeName="stroke-dasharray"
          :values="`${width * 0.2}, 0;0, ${width * 0.2}`"
          dur="0.01s"
          :begin="`a7${_uid}.end`"
          fill="freeze"
        />
      </polyline>

      <polyline
        :stroke="light"
        stroke-width="2"
        :points="`${width * 0.2 + 3}, ${height / 2} ${width * 0.8 - 3}, ${height / 2}`"
        :stroke-dasharray="`0, ${width * 0.6}`"
      >
        <animate
          :id="`a4${_uid}`"
          attributeName="stroke-dasharray"
          :values="`0, ${width * 0.6};${width * 0.6}, 0`"
          dur="3s"
          :begin="`a3${_uid}.end + 1s`"
          fill="freeze"
        />
        <animate
          attributeName="stroke-dasharray"
          :values="`${width * 0.6}, 0;0, ${width * 0.6}`"
          dur="0.01s"
          :begin="`a7${_uid}.end`"
          fill="freeze"
        />
      </polyline>

      <polyline
        :stroke="light"
        stroke-width="2"
        :points="`${width * 0.8 + 3}, ${height / 2} ${width - 5}, ${height / 2}`"
        :stroke-dasharray="`0, ${width * 0.2}`"
      >
        <animate
          :id="`a6${_uid}`"
          attributeName="stroke-dasharray"
          :values="`0, ${width * 0.2};${width * 0.2}, 0`"
          dur="3s"
          :begin="`a5${_uid}.end + 1s`"
          fill="freeze"
        />
        <animate
          attributeName="stroke-dasharray"
          :values="`${width * 0.2}, 0;0, ${width * 0.3}`"
          dur="0.01s"
          :begin="`a7${_uid}.end`"
          fill="freeze"
        />
      </polyline>

      <circle cx="2" :cy="height / 2" r="2" :fill="dark">
        <animate
          :id="`a1${_uid}`"
          attributeName="fill"
          :values="`${dark};${light}`"
          :begin="`0s;a7${_uid}.end`"
          dur="0.3s"
          fill="freeze"
        />
      </circle>

      <circle :cx="width * 0.2" :cy="height / 2" r="2" :fill="dark">
        <animate
          :id="`a3${_uid}`"
          attributeName="fill"
          :values="`${dark};${light}`"
          :begin="`a2${_uid}.end`"
          dur="0.3s"
          fill="freeze"
        />
        <animate
          attributeName="fill"
          :values="`${dark};${light}`"
          dur="0.01s"
          :begin="`a2${_uid}.end`"
          fill="freeze"
        />
      </circle>

      <circle :cx="width * 0.8" :cy="height / 2" r="2" :fill="dark">
        <animate
          :id="`a5${_uid}`"
          attributeName="fill"
          :values="`${dark};${light}`"
          :begin="`a4${_uid}.end`"
          dur="0.3s"
          fill="freeze"
        />
        <animate
          attributeName="fill"
          :values="`${dark};${light}`"
          dur="0.01s"
          :begin="`a7${_uid}.end`"
          fill="freeze"
        />
      </circle>

      <circle :cx="width - 2" :cy="height / 2" r="2" :fill="dark">
        <animate
          :id="`a7${_uid}`"
          attributeName="fill"
          :values="`${dark};${light}`"
          :begin="`a6${_uid}.end`"
          dur="0.3s"
          fill="freeze"
        />
        <animate
          attributeName="fill"
          :values="`${dark};${light}`"
          dur="0.01s"
          :begin="`a7${_uid}.end`"
          fill="freeze"
        />
      </circle>
    </svg>
  </Box>
</template>

<script>
  import Adorn from '../../mixins/Adorn'

  export default {
    name: 'MyDvAdorn10',
    mixins: [Adorn]
  }
</script>
