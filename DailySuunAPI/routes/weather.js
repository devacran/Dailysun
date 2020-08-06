const express = require('express')
const axios = require('axios')
const response = require('../utils/response')
const { externalApi } = require('../config')
const { url, apiKey } = externalApi
function weather(app) {
    const router = express.Router()
    app.use('/weather', router)

    router.get('/today', async (req, res, next) => {
        const { lat, lon, city } = req.query //weekly?latitude=123
        let data
        const query = {
            lat,
            units: 'metric',
            lon,
            appid: apiKey,
        }
        try {
            const u = `${url}weather`
            const r = await axios.get(u, {
                params: query,
            })
            data = r.data
            response.success(res, data, 200)
            next()
        } catch (e) {
            console.log(e)
            e.statusCode = 400
            e.message = 'Ciudad no encontrada'
            next(e)
        }
    })
    router.get('/', async (req, res, next) => {
        const { lat, lon } = req.query //weekly?latitude=123
        const u =
            url +
            'onecall?lat=' +
            lat +
            '&lon=' +
            lon +
            '&units=metric' + //Cambiar para farenheit
            '&appid=' +
            apiKey
        let data
        try {
            const r = await axios.get(u)
            data = r.data
        } catch (e) {
            e.statusCode = 400
            e.message = 'Ciudad no encontrada'
            next(e)
        }
        response.success(res, data, 200)
        next()
    })
    router.get('/hourly/id:', (req, res, next) => {
        res.send('hola')
        next()
    })
    router.get('/monthly/id:', (req, res, next) => {
        res.send('hola')
        next()
    })
}
module.exports = weather
