let _ = require('lodash/fp')
let request = require('../util/request')
let Vehicle = require('../vehicle/vehicle')
const CONFIG = require('../config')

let setRequestToken = (token) => request.defaults.headers.common['Authorization'] = `Bearer ${token}`

module.exports = class Tesla {
  static login(options) {
    let {email, password} = options
    return new Tesla(options).login(email, password)
  }
  constructor(options = {}) {
    let {requestAgent, token} = options
    if (requestAgent) { request.defaults.headers.common['User-Agent'] = requestAgent }
    if (token) { setRequestToken(token) }
  }
  login(email, password) {
    return request
      .post(`${CONFIG.apiHost}${CONFIG.apiOath}`, {
        email:         email,
        password:      password,
        grant_type:    'password',
        client_id:     CONFIG.clientId, 
        client_secret: CONFIG.clientSecret
      })
      .then(data => {
        // Decorate with the auth data
        Object.defineProperty(this, 'auth', { value: data })
        // Set the global request default to now contain the token!
        setRequestToken(data.accessToken)
        // return auth & vehicles
        return this.getVehicles().then(vehicles => ({          
            auth: data,
            vehicles: vehicles          
        }))
      })
      .catch(err => err)
  }
  getVehicles(vehicleId) {
    return request.get('/vehicles')
      .then(response => {
        let vehicles = _.map(data => new Vehicle(this.getVehicles, data), response)
        if (vehicleId) { return _.find({idS: vehicleId}, vehicles) }
        return vehicles
      })
      .catch(err => err)
  }
}
