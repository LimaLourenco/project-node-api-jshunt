const { query } = require('express');
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    // Função: Listagem do produtos
    async index(req, res) {
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, {page, limit: 10 }); //Usei o await antes, basicamente pq isto vai fazer com que a proxima linha so execute depois dele conseguir busca os requistros no banco de dados.

        return res.json(products); // Proxima linha.
    },

    // Função: Mostra os Detalhes geral referente ao produto
    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product); 
    },

    // Função: Criação referente aos produtos 
    async store(req, res) {
        // Criação
        const product = await Product.create(req.body);
        return res.json(product);
    },

    // Funçao Atualização/update
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(product);
    },

    // Função: Delete/excluir
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);
        return res.send(); // Retorna uma Resposta de sucesso sem nenhum conteudo.
    }

};