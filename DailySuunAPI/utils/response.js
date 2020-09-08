exports.success = function(res, message, status) {
    const statusCode = status || 200
    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: message,
    })
}
exports.error = function(res, message, status) {
    const statusCode = status || 500
    const statusMessage = message || 'Internal Server Error'
    res.status(statusCode).send({
        error: true,
        status: statusCode,
        body: statusMessage,
    })
}
