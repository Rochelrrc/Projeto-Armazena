const knex = require('../conexao');

async function listarProdutos(req, res) {
    try {

        const produtos = await knex('lista_produtos').select('*');

        return res.status(200).json(produtos)

    } catch (error) {
        return res.status(400).json(error.message)
    }
}

async function cadastrarProduto(req, res) {
    const { nome, foto, categoria, preco, descricao } = req.body;

    if (!nome) {
        return res.status(404).json('O campo nome é obrigatório')
    }

    if (!categoria) {
        return res.status(404).json('O campo categoria é obrigatório')
    }

    if (!preco) {
        return res.status(404).json('O campo preco é obrigatório')
    }

    if (!descricao) {
        return res.status(404).json('O campo descricao é obrigatório')
    }

    try {
        const produto = await knex('lista_produtos').insert({
            nome,
            foto,
            categoria,
            preco,
            descricao
        }).returning('*');

        if (!produto[0]) {
            return res.status(400).json('O produto não foi cadastrado')
        }

        return res.status(200).json(produto[0])

    } catch (error) {
        return res.status(400).json(error.message)
    }

}




module.exports = {
    listarProdutos,
    cadastrarProduto
}