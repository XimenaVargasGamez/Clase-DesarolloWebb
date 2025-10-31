const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('inicio', { usuario: 'Invitado'});
});

const fs = require('fs');
app.use((req, res, next) => {
    const log = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;
    fs.appendFile('server.log', log, (error) => {
        if (error) {
            console.error('Error al escribir en el log');
        }
    });
    next();
});

app.get('/perfil/:id', (req, res) => {
    const usuario = undefined;
    res.render('perfil', { usuario: usuario});
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
