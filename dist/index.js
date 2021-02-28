
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-clock.cjs.production.min.js')
} else {
  module.exports = require('./react-clock.cjs.development.js')
}
