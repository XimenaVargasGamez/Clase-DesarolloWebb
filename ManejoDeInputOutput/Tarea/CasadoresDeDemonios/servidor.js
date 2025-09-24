const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

class Cazador {
    constructor(nombre, rango, estiloDeRespiracion) {
        this.nombre = nombre;
        this.rango = rango;
        this.estiloDeRespiracion = estiloDeRespiracion;
        this.misionesCompletadas = 0;
    }

    presentarse() {
        console.log(`hola, soy ${this.nombre}! ¡${this.estiloDeRespiracion}!`);
        return `hola, soy ${this.nombre}! ¡${this.estiloDeRespiracion}!`;
    }

    completarMision() {
        this.misionesCompletadas++;
        console.log(`${this.nombre} completó una misión con un total de: ${this.misionesCompletadas}`);
        return this.misionesCompletadas;
    }
}

class SedeCazadores {
    constructor() {
        this.cazadores = [];
        this.inicializarCazadoresEjemplo();
    }

    inicializarCazadoresEjemplo() {
        this.registrarCazador(new Cazador('Mona', 'Stellaris Phantasm', 'Respiración del Agua'));
        this.registrarCazador(new Cazador('Skirk', 'Havoc Extinction', 'Respiración del Frio'));
        this.registrarCazador(new Cazador('Navia', 'As The Sun Sets', 'Respiración de las Rocas'));
        
        console.log('ejemplos: ');
    }

    registrarCazador(cazador) {
        this.cazadores.push(cazador);
        cazador.presentarse();
    }

    obtenerTodosCazadores() {
        return this.cazadores;
    }

    buscarCazadorPorNombre(nombre) {
        return this.cazadores.find(cazador => 
            cazador.nombre.toLowerCase() === nombre.toLowerCase()
        );
    }

    enviarAMision(nombreCazador, nombreDemonio) {
        try {
            console.log(`\n misión contra ${nombreDemonio} a ${nombreCazador}...`);
            
            const cazador = this.buscarCazadorPorNombre(nombreCazador);
            
            if (!cazador) {
                throw new Error(`"${nombreCazador}" no se encuentra en los registros de la sede`);
            }

            if (cazador.rango !== 'Havoc Extinction') {
                throw new Error(`epigro! rango: Havoc Extinction. ${cazador.nombre} es rango ${cazador.rango}`);
            }

            cazador.completarMision();
            const mensaje = `completado existosamente ${cazador.nombre} (Havoc Extinction) derrotó a ${nombreDemonio}. misiones cumplidas ${cazador.misionesCompletadas}`;
            console.log(mensaje);
            return { exito: true, mensaje: mensaje };

        } catch (error) {
            console.log(`erro al asignar misión: ${error.message}`);
            return { exito: false, mensaje: error.message };
        }
    }
}

const sede = new SedeCazadores();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'registro.html'));
});

app.get('/cazadores', (req, res) => {
    console.log('📋 Consultando lista de cazadores...');
    const cazadores = sede.obtenerTodosCazadores();
    res.json({
        total: cazadores.length,
        cazadores: cazadores
    });
});

app.post('/registrar-cazador', (req, res) => {
    try {
        const { nombre, rango, estiloDeRespiracion } = req.body;
        
        if (!nombre || !rango || !estiloDeRespiracion) {
            return res.status(400).json({
                exito: false,
                mensaje: 'llenar campos bligatorios'
            });
        }

        const cazadorExistente = sede.buscarCazadorPorNombre(nombre);
        if (cazadorExistente) {
            return res.status(409).json({
                exito: false,
                mensaje: `cazador: ${nombre} ya existe en la sede`
            });
        }

        const nuevoCazador = new Cazador(nombre, rango, estiloDeRespiracion);
        sede.registrarCazador(nuevoCazador);

        console.log(`cazador registrado: ${nombre}`);

        res.status(201).json({
            exito: true,
            mensaje: `bienvenido, ${nombre}!`,
            cazador: nuevoCazador
        });

    } catch (error) {
        console.error('error al registrar cazador:', error);
        res.status(500).json({
            exito: false,
            mensaje: 'error interno del servidor'
        });
    }
});

app.post('/asignar-mision', (req, res) => {
    const { nombreCazador, nombreDemonio } = req.body;
    
    if (!nombreCazador || !nombreDemonio) {
        return res.status(400).json({
            exito: false,
            mensaje: 'requiere nombre del cazador y del demonio'
        });
    }

    const resultado = sede.enviarAMision(nombreCazador, nombreDemonio);
    
    if (resultado.exito) {
        res.json(resultado);
    } else {
        res.status(400).json(resultado);
    }
});

app.get('/cazadores/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    const cazador = sede.buscarCazadorPorNombre(nombre);
    
    if (cazador) {
        res.json(cazador);
    } else {
        res.status(404).json({
            exito: false,
            mensaje: `cazador "${nombre}" no encontrado`
        });
    }
});

app.listen(PORT, () => {
    console.log(`   ACTIVO`);
    console.log(`   port: ${PORT}`);
    console.log(`abre http://localhost:${PORT}`);
    console.log(`cazadores: http://localhost:${PORT}/cazadores`);
    console.log(`registro: http://localhost:${PORT}/`);
    console.log(`\n🐦‍⬛ Written in the Stars!`);
});