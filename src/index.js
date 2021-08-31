require('dotenv').config({ path: './.env' })
const customExpress = require('./config/customExpress')

const app = customExpress()
const porta = process.env.PORTA
app.listen(porta, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`Servidor na porta: ${porta}`)
    }
})