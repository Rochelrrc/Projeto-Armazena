const knex = require('../conexao');

async function listarProdutos(req, res) {
    try {

        const produtos = await knex('estoque').select('*');

        return res.status(200).json(produtos)

    } catch (error) {
        return res.status(400).json(error.message)
    }
}





module.exports = {
    listarProdutos
}