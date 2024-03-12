// models/cliente.js
const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nome: String,
    email: String,
    // Adicione outros campos conforme necessário
});

module.exports = mongoose.model('Cliente', clienteSchema);
