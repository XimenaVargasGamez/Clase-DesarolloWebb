const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

const productos = [
  { id: 1, nombre: 'Poción de Vida' },
  { id: 2, nombre: 'Espada Maestra' },
  { id: 3, nombre: 'Escudo de Hierro' },
  { id: 4, nombre: 'Arco Élfico' },
  { id: 5, nombre: 'Poción de Maná' }
];

app.get('/productos', (req, res) => {
  res.json(productos);
});

app.post('/comprar', (req, res) => {
  const { productosIds } = req.body;
  console.log('Compra recibida con los productos:', productosIds);
  res.json({ mensaje: 'Compra procesada exitosamente' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});