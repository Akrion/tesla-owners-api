let _ = require('lodash/fp')
let luxon = require('luxon')

module.exports = (response) => {
  if (_.has('data.access_token', response)) {
    let createdAt = new Date(_.get('data.created_at', response) * 1000)
    let expiresInSeconds = _.get('data.expires_in', response)

    // Decorate the auth response with the actual dates
    response.data.createdAtDate = createdAt
    response.data.expiresAtDate = luxon.DateTime.fromJSDate(createdAt).plus({ seconds: expiresInSeconds }).toUTC().toJSDate()
  }
  // Only return the needed data part to simplify things
  if(_.has('data.response', response)) {
    return _.get('data.response', response)
  } else {
    return response.data
  }
}