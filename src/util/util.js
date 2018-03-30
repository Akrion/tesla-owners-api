let _ = require('lodash/fp')
let forOwnWithKey = _.forOwn.convert({ 'cap': false });
let isTraversable = (value) => _.isArray(value) || _.isPlainObject(value)

function convertToCamelCase(value) {
  if (_.isArray(value)) { return value.map(v => convertToCamelCase(v))} 
  else if (_.isPlainObject(value)) {
    var result = {}
    forOwnWithKey((v,k) => result[_.camelCase(k)] = isTraversable(v) ? convertToCamelCase(v) : v, value)
    return result
  } else { return _.camelCase(value) }
}

module.exports = {
  convertToCamelCase: convertToCamelCase
}