const express = require ('express' ) ;
const app = express ( ) ;
const port = 3000;

const usuarios = [
{ id: 1, nombre: 'Ximena Vargas Gamez', email: 'ximenavg@cetys.edu.mx' },
{ id: 2, nombre: 'Mayrin Peredia', email: 'Mayrin@example.com' },
{ id: 3, nombre: 'RaulValdes', email: 'RaulValdes@example.com' }
];

app.get('/', (req, res) => {
    res.send(' ¡Bienvenido a mi primera API con Express! Visita /api/usuarios para ver los datos. ') ;
});

app.get('/api/usuarios', (req, res) => {
    res.json(usuarios) ;
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});