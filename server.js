require('dotenv').config({path:'variaveis.env'})  // serve para ler o arquivo variaveis.env
const express = require('express')
const cors = require('cors') //
const bodyParser = require('body-parser') // converte o body de uma requisição para varios formatos

const routes = require('./routes')

const server = express()

server.use(cors());
server.use('/api', routes)// para nao precisar ficar dando o caminho toda hora em cada operação do crud
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.listen(process.env.PORT, ()=>{
    console.log(`Servidor rodando em : http://localhost:${process.env.PORT}`)
})