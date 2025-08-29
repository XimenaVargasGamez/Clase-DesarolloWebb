function cuentaRegresivaConLoop(numero) {
    for (let i = numero;  i > 0 ; i -- ) {
        console.log(i);
    }
    console.log("¡Despegue!");
}

cuentaRegresivaConLoop(10);

function cuentaRegRecursive(n) {
    // Caso Base
    if (n == 0) {
        console.log("¡Despegue!");
        return;
    }
    // Caso General
    console.log(n);
    cuentaRegRecursive(n - 1);
}