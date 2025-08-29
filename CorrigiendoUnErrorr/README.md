# Corrigiendo Error

En el código se encontraron 4 errores principales:

**Primer Error:**

const puntuacionTotal = 100;

*El error encontrado aquí fue que nuestra función era const y debíamos usar let*

Corrección:

let puntuacionTotal = 100; 

**Segundo Error:**

function agregarPuntosPorNivel(puntos) {
    puntuacionTotal = puntuacionTotal + puntos;
    console.log(`Puntuación después del nivel: ${puntuacionTotal}`);
}

*El error encontrado aquí fue que no había una función de return, por ende no podíamos usar lo que la función nos regresó*

Corrección:

function agregarPuntosPorNivel(puntos) {
    puntuacionTotal = puntuacionTotal + puntos;
    console.log(`Puntuación después del nivel: ${puntuacionTotal}`);
    return puntuacionTotal; //return
}


**Tercer Errore:**

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

*El error encontrado aquí fue que no había una función de return, por ende no podíamos usar lo que la función nos regresó, de igual manera estaba el  let bonoActivo = false;  y este causaba error en el código*

Corrección:

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