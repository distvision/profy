// Servidores
const express = require('express')
const server = express()

const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses
} = require('./pages')

// configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})

// Inicio e configuracao do cervidor
server
  // receber dados do req.body
  .use(express.urlencoded({ extended: true }))
  // configura arquivos estaticos (css, escrips e imagens)
  .use(express.static('public'))
  // rotas da aplicação
  .get('/', pageLanding)
  .get('/study', pageStudy)
  .get('/give-classes', pageGiveClasses)
  .post('/save-classes', saveClasses)
  .listen(3300)
