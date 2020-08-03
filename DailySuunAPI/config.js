module.exports = {
    api: {
        port: process.env.PORT || 3000,
    },
    externalApi: {
        apiKey:
            process.env.EXTERNAL_API_KEY || 'b85273af0f17b65a3df6b1637c6ffb80',
        url:
            process.env.EXTERNAL_URI ||
            'https://api.openweathermap.org/data/2.5/',
    },
}
