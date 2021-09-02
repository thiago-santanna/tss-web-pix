require('dotenv').config({ path: '../.env.homologacao' })
const axios = require('axios')
const token = require('./getToken')

const getQrCodTxId = async (param) => {
    const dataToken = await token.getToken()
    const authorization = dataToken.token_type + ' ' + dataToken.access_token
    const config = {
        method: 'GET',
        url: process.env.URL_BASE + 'sandbox/pix_recebimentos/v2/cob/' + param.txid + '/qrcode',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authorization,
        }
    }
    const result = await axios(config)
    return result.data
}

exports.getQrCodTxId = getQrCodTxId
