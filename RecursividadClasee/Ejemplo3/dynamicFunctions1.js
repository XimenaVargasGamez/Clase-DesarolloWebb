const calcularIva = function(monto, tasa = 0.16) {
    return monto * tasa;
};

const mostrarTotal = function(monto, tasa = 0.16) {
    if (Array.isArray(monto)) {
        if (monto.length === 0) return;
        mostrarTotal(monto[0], tasa);
        mostrarTotal(monto.slice(1), tasa);
        return;
    }
    
    const iva = calcularIva(monto, tasa);
    const total = monto + iva;
    console.log(`El monto es $${monto}, el iva es $${iva.toFixed(2)} y el total $${total.toFixed(2)}`);
};

mostrarTotal(100);
mostrarTotal([100, 200, 300]);
mostrarTotal([50, 75, 125, 250], 0.20);