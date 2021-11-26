const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors')

//Iniciando o App 
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o banco de dados
mongoose.connect('mongodb+srv://user:2098@cluster0.kkubv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true });

requireDir('./src/models');

//Iniciei a primeira rota. 
// Rotas 
app.use('/api', require('./src/routes'));

app.listen(3001);