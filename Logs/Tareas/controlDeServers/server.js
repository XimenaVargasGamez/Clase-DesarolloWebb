const express = require('express');
const app = express();
const fs = require('fs');
const { exec } = require('child_process');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

if (!fs.existsSync('logs')) fs.mkdirSync('logs');
if (!fs.existsSync('backups')) fs.mkdirSync('backups');

class ServidorVirtual {
    constructor(nombre, adminId) {
        this.id = Date.now() + Math.random();
        this.nombre = nombre;
        this.adminId = adminId;
        this.estado = 'apagado';
        this.archivoLog = `logs/${this.id}.log`;
    }

    cambiarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
        fs.appendFile(this.archivoLog, `Servidor ${nuevoEstado} en ${new Date().toLocaleString()}\n`, () => {});
    }
}

const servidores = {};

app.use((req, res, next) => {
    if (!req.cookies.adminId) {
        res.cookie('adminId', 'admin_' + Date.now(), { maxAge: 900000000 });
    }
    req.adminId = req.cookies.adminId;
    if (!servidores[req.adminId]) servidores[req.adminId] = [];
    next();
});

app.post('/api/crear-servidor', (req, res) => {
    if (!req.body.nombre) return res.status(400).send('Falta el nombre');
    
    const servidor = new ServidorVirtual(req.body.nombre, req.adminId);
    
    fs.writeFile(servidor.archivoLog, `Log creado en ${new Date().toLocaleString()}\n`, (error) => {
        if (error) return res.status(500).send('Error al crear log');
        servidores[req.adminId].push(servidor);
        res.json(servidor);
    });
});

app.get('/api/servidores', (req, res) => {
    res.json(servidores[req.adminId] || []);
});

app.post('/api/:accion/:id', (req, res) => {
    const servidor = servidores[req.adminId].find(s => s.id == req.params.id);
    if (!servidor) return res.status(404).send('No encontrado');
    
    const accion = req.params.accion;
    
    if (accion === 'encender') {
        servidor.cambiarEstado('encendido');
        return res.json(servidor);
    }
    
    if (accion === 'apagar') {
        servidor.cambiarEstado('apagado');
        return res.json(servidor);
    }
    
    if (accion === 'backup') {
        const backup = `backups/backup_${servidor.nombre}_${Date.now()}.log`;
        const comando = process.platform === 'win32' 
            ? `copy "${servidor.archivoLog}" "${backup}"`
            : `cp "${servidor.archivoLog}" "${backup}"`;
        
        exec(comando, (error) => {
            if (error) return res.status(500).send('Error en backup');
            fs.appendFile(servidor.archivoLog, `Backup en ${new Date().toLocaleString()}\n`, () => {});
            res.send('Backup creado: ' + backup);
        });
    }
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));