const { Router } = require('express')
const token = require('../../services/itau/getToken')
const criarCob = require('../../services/itau/criarCob')
const ConsultarCobs = require('../../services/itau/getCob')
const ConsultarTxid = require('../../services/itau/getCobTxId')
const ConsultarQrCodTxId = require('../../services/itau/getQrCodTxId')

const itauRoutes = Router()

itauRoutes.get('/token', async (req, res) => {
    const resultado = await token.getToken()
    res.json(resultado)
})
itauRoutes.post('/cob', async (req, res) => {
    const cobranca = req.body
    const resultCob = await criarCob.criarCobranca(cobranca)
    res.status(200).json(resultCob)
})
itauRoutes.get('/cob', async (req, res) => {
    const params = req.query
    const resultCobs = await ConsultarCobs.getCobranca(params)
    res.status(200).json(resultCobs)
})
itauRoutes.get('/cob/:txid?', async (req, res) => {
    const param = req.params
    const resultCob = await ConsultarTxid.getCobrancaTxId(param)
    res.status(200).json(resultCob)
})
itauRoutes.get('/qrcode/:txid?', async (req, res) => {
    const param = req.params
    const resultQrCod = await ConsultarQrCodTxId.getQrCodTxId(param)
    res.status(200).json(resultQrCod)
})

module.exports = itauRoutes
