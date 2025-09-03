function cuentaRegresivaConLoop(numero) {
    for (let i = numero;  i > 0 ; i -- ) {
        console.log(i);
    }
    console.log("¡Despegue!");
}

cuentaRegresivaConLoop(10);

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
return result;
}