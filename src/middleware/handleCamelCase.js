let _ = require('lodash/fp')
let util = require('../util/util')

module.exports = (response) => {
  return util.convertToCamelCase(response)
}