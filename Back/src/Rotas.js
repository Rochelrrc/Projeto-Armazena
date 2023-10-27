const express = require('express');
const fornecedor = require('./controllers/fornecedores');


const rotas = express();

rotas.get('/listagem-produtos', fornecedor.listarProdutos);
rotas.post('/cadastro-produto', fornecedor.cadastrarProduto);


module.exports = rotas;