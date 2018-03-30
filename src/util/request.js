let axios = require('axios')
let CONFIG = require('../config')

axios.defaults.baseURL = CONFIG.apiUrl
axios.defaults.headers = { common: { "User-Agent": CONFIG.userAgents[CONFIG.userAgents.default] } }

// Register middleware
axios.interceptors.response.use(require('../middleware/handleResponse'), undefined)
axios.interceptors.response.use(require('../middleware/handleCamelCase'), undefined)
axios.interceptors.response.use(undefined, require('../middleware/handleError'))

module.exports = axios