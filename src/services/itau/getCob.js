require('dotenv').config({ path: '../.env.homologacao' })
const axios = require('axios')
const token = require('./getToken')
const queryString = require('querystring')

const getCobranca = async (params) => {
    const dataToken = await token.getToken()
    const authorization = dataToken.token_type + ' ' + dataToken.access_token
    const paramsStringfyed = queryString.stringify(params)
    //const newParams = params.replace(/%/g, ':') Exemplo de expressão regular
    //console.log(newParams)                      para trocar % por :

    const config = {
        method: 'GET',
        url: process.env.URL_BASE + 'sandbox/pix_recebimentos/v2/cob?' + paramsStringfyed,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authorization,
        }
    }
    const result = await axios(config)
    return result.data
}

exports.getCobranca = getCobranca
