class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
        this.fechaRegistro = new Date();
        this.estaActivo = true;
    }

    presentarse() {
        console.log('bienvenid@ a BlogSphere :3')
        console.log(`Hola, soy ${this.nombre} y mi email es ${this.email}. :D`);
    }

    cambiarEstado() {
        this.estaActivo = !this.estaActivo;
        if (this.estaActivo) {
            console.log(`activo: ${this.nombre}`);
        } else {
            console.log(`inactivo: ${this.nombre}`);
        }
    }
}

const usuario1 = new Usuario('ximena vargas', 'ximenavg@cetys.edu.mx');
const usuario2 = new Usuario('raul valdes', 'raul.valdes@cetys.edu.m');

usuario1.presentarse();
usuario2.presentarse();

usuario1.cambiarEstado();

console.log(usuario1);