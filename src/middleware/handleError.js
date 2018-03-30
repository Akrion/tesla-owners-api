let _ = require('lodash/fp')

module.exports = (response) => Promise.reject(`${_.get('response.statusText', response)} / ${response.stack}`)