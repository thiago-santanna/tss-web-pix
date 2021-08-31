const { Router } = require('express')

const helloRoutes = Router()

helloRoutes.get('/', (req, res) => { res.status(200).send({ message: "Hello" }) })
helloRoutes.get('/me', (req, res) => { res.status(200).send({ message: "Prazer Thiago" }) })

module.exports = helloRoutes