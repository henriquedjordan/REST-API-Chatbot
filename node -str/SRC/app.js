const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const router = express.Router()

//Conecta ao banco de dados
mongoose.connect('mongodb+srv://user-admin:1234@nodestr.7hfpfyb.mongodb.net/test')

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