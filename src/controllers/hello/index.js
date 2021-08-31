const { Router } = require('express')
const { hello, me } = require('../../services/hello')

const helloRoutes = Router()

helloRoutes.get('/', (req, res) => { res.status(200).send({ message: hello }) })
helloRoutes.get('/me', (req, res) => { res.status(200).send({ message: me }) })

module.exports = helloRoutes