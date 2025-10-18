const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dbURI = "mongodb+srv://mini:miniscats@cluster0.vwt58xz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(dbURI)
    .then(() => console.log('conexion exitosa'))
    .catch(err => console.error('error de conexion: ', err));

const cazadorSchema = new mongoose.Schema({
    nombre: String,
    respiracion: String,
    rango: String,
})

const Cazador = mongoose.model('Cazador', cazadorSchema);

app.post('/registrar', async (req, res) => {
    try {
        const nuevoCazador = new Cazador({
            nombre: req.body.nombre,
            respiracion: req.body.respiracion,
            rango: 'Mizunoto', // rango por defecto
        });
        await nuevoCazador.save();
        res.send('Cazador registrado correctamente');
    } catch (error) {
        res.status(500).send('Error al registrar el cazador');
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});