const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()

//Conecta ao banco de dados

//Carrega as Rotas
const indexRoute = require('./routes/index-route')
const productRoute = require('./routes/product-route')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extende: false}))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/', indexRoute)
app.use('/aluno', productRoute)

module.exports = app 