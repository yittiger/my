import Rect from './Rect'
import Box from '../packages/my-dv-box'
import theme from '../utils/theme.js'

export default {
  mixins: [Rect],
  components: {
    Box
  },
  props: {
    columns: Array,
    rows: Array,
    loader: Function,
    settings: Object,
    extend: {
      type: [Object, Function]
    },
    debug: Boolean
  },
  data() {
    return {
      chartData: {},
      loading: true
    }
  },
  computed: {
    theme() {
      const settings = this?.page?.settings || {}
      return Object.freeze(theme(settings))
    }
  },
  watch: {
    loader: {
      immediate: true,
      handler() {
        this.load()
      }
    },
    rows() {
      this.load()
    },
    columns() {
      this.load()
    }
  },
  methods: {
    load() {
      if (this.loader) {
        this.loading = true
        this.loader().then(({columns, rows}) => {
          this.chartData = Object.freeze({
            columns,
            rows
          })
        }).finally(() => {
          this.loading = false
        })
      } else {
        const {columns, rows} = this
        this.chartData = Object.freeze({
          columns,
          rows
        })
        this.loading = false
      }
    }
  }
}
