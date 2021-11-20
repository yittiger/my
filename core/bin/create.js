const core = require('../index')
const utils = require('../utils')
const join = utils.join
const root = core.MyRootPath
const pathsList = {
  bin: join(root, 'bin'),
  core: join(root, 'core'),
  types: join(root, 'types'),
  ui: join(root, 'ui'),
  web: join(root, 'web'),
  LICENSE: join(root, 'LICENSE'),
  'package.json': join(root, 'package.json'),
  'README.md': join(root, 'README.md')
}

const localPath = join(core.ProjectRootPath, '.my', '@xdh', 'my')

module.exports = function(args = []) {
  utils.mkdir(localPath)
  Object.entries(pathsList).forEach((entry) => {
    utils.copy(entry[1], join(localPath, entry[0]))
  })
  
  utils.log('执行成功', 'success')
}