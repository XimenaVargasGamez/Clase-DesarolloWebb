let puntuacionTotal = 100;  // const a let
let bonoActivo = true;

function agregarPuntosPorNivel(puntos) {
    puntuacionTotal = puntuacionTotal + puntos;
    console.log(`Puntuación después del nivel: ${puntuacionTotal}`);
    return puntuacionTotal; //return
}

function aplicarBono() {
    let puntosConBonus = 0;
    
    if (bonoActivo) {
        puntosConBonus = puntuacionTotal * 1.25;
        console.log(`Bono aplicado. Puntuación con bonus: ${puntosConBonus}`);
    } else {
        console.log("No hay bono activo.");
    }
    return puntosConBonus;  // return para usar el valor
}

let puntuacionNivel = agregarPuntosPorNivel(50);
let puntuacionFinal = aplicarBono();  // valor retornado por aplicarBono()
console.log(`La puntuación final del jugador es: ${puntuacionFinal}`); // muestra 187.5