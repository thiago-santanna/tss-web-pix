require('dotenv').config({ path: './.env' })
const express = require('express')
const cors = require('cors')
const routes = require('./routes/index')

const app = express()

app.use(routes)
app.use(express.json())
app.use(cors())

const porta = process.env.PORTA

app.listen(porta, (err) => {
    (err) ? console.log(err) : console.log(`Servidor na porta: ${porta}`)
})