// Importar express y configurar servidor
const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// Home Page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Procesar datos enviados por GET
app.get('/procesar', (req, res) => {
    const datos = req.query;
    console.log('Datos recibidos por GET:', datos);
    res.send(`Hola ${datos.nombre}! Tu mensaje "${datos.mensaje}" ha sido recibido por GET.`);
});

// Procesar datos enviados por POST
app.post('/procesar', (req, res) => {
    const datos = req.body;
    console.log('Datos recibidos por POST:', datos);
    res.send(`Hola ${datos.nombre}! Tu mensaje "${datos.mensaje}" ha sido recibido por POST.`);
});

// Activa servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});