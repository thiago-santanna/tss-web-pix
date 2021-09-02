require('dotenv').config({ path: '../.env.homologacao' })
const axios = require('axios')
const token = require('./getToken')

const criarCobranca = async (cobranca) => {
    const dataToken = await token.getToken()
    const authorization = dataToken.token_type + ' ' + dataToken.access_token
    const config = {
        method: 'POST',
        url: process.env.URL_BASE + 'sandbox/pix_recebimentos/v2/cob',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authorization,
        },
        data: cobranca
    }

    const result = await axios(config)
    return result.data
}

exports.criarCobranca = criarCobranca
