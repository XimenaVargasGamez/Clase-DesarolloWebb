const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/saludar', (req, res) => {
    const nombre = req.query.nombre;
    if (nombre) {
        res.cookie('usuario', nombre, { maxAge: 900000, httpOnly: true });
        res.send(`Hola ${nombre}!, hemos guardado tu nombre`);
    } else {
        res.send('Porfavor, dime tu nombre usando ?nombre=TU_NOMBRE');
    }
});

app.get('/', (req, res) => {
    const nombreUsuario = req.cookies.usuario;
    if (nombreUsuario) {
        res.send(`Te recuerdo! eres ${nombreUsuario}!`);
    } else {
        res.send('Hola extraño! No se quién eres..., ve a /saludar para presentarte');
    }
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});