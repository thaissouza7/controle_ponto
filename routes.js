const express = require('express')
const router = express.Router()
const pontoController = require('./controllers/pontoController.js')


router.get('/pontos', pontoController.buscarTodos)
router.get('/ponto/:funcionario', pontoController.buscarUm)
router.post('/coloca', pontoController.inserir)

module.exports = router