function crearSaludador(idioma) {
    if (idioma === 'es') {
        return function(nombre) {
            console.log(`Hola, ${nombre}`);
        }
    } else if (idioma === 'en') {
        return function(nombre) {
            console.log(`Hello, ${nombre}`);
        }
    }
}

const saludarEnEspanol = crearSaludador('es');
const saludarEnIngles = crearSaludador('en');
saludarEnEspanol("Ana"); // Muestra: Hola, Ana
saludarEnIngles("John"); // Muestra: Hello, John