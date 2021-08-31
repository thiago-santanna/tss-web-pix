const { Router } = require('express')
const helloRoutes = require('../controllers/hello')

const routes = Router()

routes.use('/hello', helloRoutes)

module.exports = routes
