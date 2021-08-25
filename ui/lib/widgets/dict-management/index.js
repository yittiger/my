import dictModelInit from './dict-model' 
import * as dictOpts from './dictOpts'
import * as filter from './filter/index'

export default {
  dictModelInit,
  ...dictOpts,
  ...filter
}