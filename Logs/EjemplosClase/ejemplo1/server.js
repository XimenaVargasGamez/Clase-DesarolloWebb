const express = require( 'express');
const app = express();
const port = 3000;
const fs = require('fs');

app.get('/crear.log', (req, res) => {
    const fecha = new Date().toLocalestring();
        fs.writeFile('log.txt', `Log creado en: $(fecha}`, (error) => {
            if (error) {
                return res.status (500) .send("Error al escribir el archivo.");
            }
        res. send("Archivo de log creado con éxito.");
    });
});

app.get ('/leer.log', (req, res) => {
    fs.readFile('log.txt', 'utf8', (error, datos) => {
        if (error) {
            return res.status(500).send("Error al leer el archivo. ¿Lo creaste primero?");
        }
        res.type('text/plain').send(datos);
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
    });

const { exec } = require('child process');
    app.get ('/info-cpu', (reg, res) => {
        exec ('uname -a', (error, stdout, stderr) => {
            if (error) {
                return res.status (500). send (`Error al ejecutar comando: ${stderr}`);
            }
            res.type('text/plain').send(`Info del sistema: \n ${stdout}`);    
        });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});