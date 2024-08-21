const express = require('express');
const path = require('path');
const app = express();

// Servir arquivos estáticos na pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Servir a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Servir a página de detalhes do evento
app.get('/event.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'event.html'));
});

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
