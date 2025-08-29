const puntuacionTotal = 100;
let bonoActivo = true;

function agregarPuntosPorNivel(puntos) {
    puntuacionTotal = puntuacionTotal + puntos;
    console.log(`Puntuación después del nivel: ${puntuacionTotal}`);
}
//hola
//hihi
//test
function aplicarBono() {
    let puntosConBonus = 0;
    let bonoActivo = false;
    
    if (bonoActivo) {
        puntosConBonus = puntuacionTotal * 1.25;
        console.log(`Bono aplicado. Puntuación con bonus: ${puntosConBonus}`);
    } else {
        console.log("No hay bono activo.");
    }
}

let puntuacionNivel = agregarPuntosPorNivel(50);
aplicarBono();
let puntuacionFinal = puntosConBonus;
console.log(`La puntuación final del jugador es: ${puntuacionFinal}`); // Debería mostrar 187.5