const express = require('express')
const router = express.Router()
const pontoController = require('./controllers/pontoController.js')

router.get('/ponto', pontoController.buscarTodos)

module.exports = router