const { Router } = require('express')
const token = require('../../services/itau/getToken')
const libCobranca = require('../../services/itau/criarCob')

const itauRoutes = Router()

itauRoutes.get('/token', async (req, res) => {
    const resultado = await token.getToken()
    res.json(resultado)
})
itauRoutes.post('/cob', async (req, res) => {
    const cobranca = req.body
    const resultCob = await libCobranca.criarCobranca(cobranca)
    res.status(200).json(resultCob)
})

module.exports = itauRoutes