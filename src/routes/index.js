const { Router } = require('express')
const helloRoutes = require('../controllers/hello')
const itauRoutes = require('../controllers/itau')

const routes = Router()

routes.use('/hello', helloRoutes)
routes.use('/itau', itauRoutes)

module.exports = routes
