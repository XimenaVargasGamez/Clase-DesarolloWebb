const aMaysculas = function(texto) {
    console.log(texto.toUpperCase());
};

const aMinusculas = function(texto) {
    console.log(texto.toLowerCase());
};

function procesarMensaje(mensaje, accion) {
    if (Array.isArray(mensaje)) {
        if (mensaje.length === 0) return;
        procesarMensaje(mensaje[0], accion);
        procesarMensaje(mensaje.slice(1), accion);
        return;
    }
    
    console.log(`Procesando el mensaje: "${mensaje}"`);
    accion(mensaje);
}

procesarMensaje("Este es un mensaje secreto:", aMaysculas);
procesarMensaje("Este es otro mensaje secreto:", aMinusculas);
procesarMensaje(["Mensaje 1", "Mensaje 2", "Mensaje 3"], aMaysculas);
procesarMensaje(["Hola", "Mundo", "JavaScript"], aMinusculas);