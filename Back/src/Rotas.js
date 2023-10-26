const express = require('express');
const fornecedor = require('./controllers/fornecedores');


const rotas = express();

rotas.get('/listagem-produtos', fornecedor.listarProdutos);


module.exports = rotas;