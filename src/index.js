require('dotenv').config({ path: './.env' })
const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(routes)

const porta = process.env.PORTA

app.listen(porta, (err) => {
    (err) ? console.log(err) : console.log(`Servidor na porta: ${porta}`)
})