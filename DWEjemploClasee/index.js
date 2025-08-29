const express = require('express');

const app = express();

const port = 3000; 

app.get('/', (req, res) => {
    res.send('Hola Mundo con Express');
});

app.get('/acerca', (req, res) => {
    res.send('Esta es la pag "Acerca de"');
});

app.listen(port, () => {
    console.log(`Servidor corriendo exitosamente en http://localhost:${port}`);
});
