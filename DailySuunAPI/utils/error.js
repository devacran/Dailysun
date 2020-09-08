const response = require('./response')
function errors(err, req, res, next) {
    console.log('[error]', err)
    const message = err.message || 'Error Interno'
    const status = err.statusCode || 500
    response.error(res, message, status)
}
module.exports = errors
