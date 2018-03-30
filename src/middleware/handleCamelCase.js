let _ = require('lodash/fp')
let util = require('../util/util')

module.exports = (response) => util.convertToCamelCase(response)