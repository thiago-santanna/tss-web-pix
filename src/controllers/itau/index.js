const { Router } = require('express')
const token = require('../../services/itau/getToken')

const itauRoutes = Router()

itauRoutes.get('/token', async (req, res) => {
    const resultado = await token.getToken()
    res.json(resultado)
})
itauRoutes.post('/cob', (req, res) => { res.status(200).send({ message: "ok" }) })

module.exports = itauRoutes