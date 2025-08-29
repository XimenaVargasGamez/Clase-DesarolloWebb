function factorialConBucle(n) {
    if (n < 0) {
        return "No definido";
    }

    if (n === 0) {
        return 1;
    }
    
    let resultado = 1;
    for (let i = n; i > 0; i -- ) {
        resultado = resultado * i;
    }

    return resultado;
}

console.log('Con bucle: ${factorialConBucle(5)}'); // Resultado: 120
console.log('Con bucle: ${factorialConBucle(0)}'); // Resultado: 1