// server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Configurar middleware para aceitar JSON
app.use(express.json());

// Configurar rota para clientes
app.use('/clientes', require('./src/routes/clienteRoutes'));

// Rota inicial
app.get('/', (req, res) => {
    res.send('Bem-vindo à sua aplicação!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
