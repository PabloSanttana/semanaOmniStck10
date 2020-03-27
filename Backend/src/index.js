const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express()
// cconectando o banco de dados online que não e relacional
// MongoDB (Não-relacional)
mongoose.connect('mongodb+srv://PabloSantana:VFTMw7gkgWbnuZIX@cluster0-1nmsl.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

// cors esta liberando o acesso para todas as ablicações
app.use(cors())
// use e pra ser ouvidos em todas as requisition do aplicativo
app.use(express.json())
app.use(routes)






// listem porta do servidor
app.listen(3333)