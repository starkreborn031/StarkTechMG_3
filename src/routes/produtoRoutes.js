// routes/clienteRoutes.js
const express = require('express');
const router = express.Router();
const Cliente = require('../models/cliente');

// Rota para listar todos os clientes
router.get('/', async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (err) {
        res.json({ message: err.message });
    }
});

// Rota para cadastrar um novo cliente
router.post('/', async (req, res) => {
    const cliente = new Cliente(req.body);
    try {
        const savedCliente = await cliente.save();
        res.json(savedCliente);
    } catch (err) {
        res.json({ message: err.message });
    }
});

module.exports = router;
