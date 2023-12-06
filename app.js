const express = require('express')
const app = express()
const path = require('path')
const bodyparser = require('body-parser')
const routeUser = require('./src/routes/userRoutes')
const routeLogin = require('./src/routes/loginRoutes')
const routeNotes = require('./src/routes/notesRoutes')
const session = require('express-session');
require('dotenv').config()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

// NECESSARIO PARA USAR O ARQUIVOS DE OUTRA PASTA
// REMOVE ERRO DE MIME TYPE CSS
// NECESSARIO PARA USAR AS IMAGENS DO DIRETORIO 'imagens'
// Defina o diretório de views
app.set('views', path.join(__dirname, 'src/views'))
app.use(express.static(path.join(__dirname, '/')))

// Configuração da sessão
app.use(session({
  secret: 'seu-segredo-aqui',
  resave: false,
  saveUninitialized: true,
  cookie: {
    cookie: { secure: false }
  }
}));

app.use('/login',routeLogin)
app.use('/user',routeUser)
app.use('/notes',routeNotes)

app.get('/', async (req, res) =>
{
  res.redirect('/login')
})

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('System up on port:', process.env.PORT)
  }
})
