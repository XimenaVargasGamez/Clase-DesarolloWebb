const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    const fecha = new Date().toISOString();
    const logEntry = `${fecha} - ${req.method} ${req.url}\n`;
    fs.appendFile('sede.log', logEntry, (err) => {
        if (err) console.error('Error writing to log file:', err);
    });
    next();
});

const cazadores = [
    {nombre: 'Tanjiro Kamado', respiracion: 'Agua'},
    {nombre: 'Inosuke Hashibira', respiracion: 'Bestia'},
];

app.get('/', (req, res) => {
    res.render('cazadores', { cazadores: cazadores });
});

app.post('/registrar', (req, res) => {
    const nuevoCazador = {
        nombre: req.body.nombre,
        respiracion: req.body.respiracion,
    };
    if (cazadores.find(c => c.nombre === nuevoCazador.nombre)) {
        res.send('Error: un cazador con ese nombre ya existe');
        return;
    } else {
        cazadores.push(nuevoCazador);
        res.redirect('/');
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});