const inventario = [
    { id: 'p001', nombre: 'Teclado Mecánico', stock: 10 },
    { id: 'p002', nombre: 'Mouse Gamer', stock: 5 },
    { id: 'p003', nombre: 'Monitor 24"', stock: 0 },
    { id: 'p004', nombre: 'Audífonos Pro', stock: 8 }
];

/**
 * @param {string}
 * @returns {Object}
 * @throws {Error}
 */

function obtenerProductoID(id){
    const producto = inventario.find(item => item.id === id);
    if (!producto){
        throw new Error(`error! Producto con ID: '${id}' no encontrado.`);
    }
    return producto;
}

/**
 * @param {string}
 * @param {number}
 */

function procesarVenta(id, cantidad) {
    try{
        const producto = obtenerProductoID(id);
        if (producto.stock < cantidad) {
            throw new Error('no hay suficientes prodcutos en stock.');
        }
        producto.stock -= cantidad;
        console.log(`Venta exitosa: ${cantidad} unidad(es) de ${producto.nombre}. stock restante: ${producto.stock}.`);
    } catch (error) {
        console.error(`no se pudo procesar la venta, mensaje de error: ${error.message}`);
    }
}

console.log("--- Intentando procesar ventas ---");
 
 
// Caso 1: Venta exitosa
procesarVenta('p002', 3);
 
 
// Caso 2: Producto no encontrado
procesarVenta('p999', 1);
 
 
// Caso 3: Stock insuficiente
procesarVenta('p001', 15);
 
 
// Caso 4: Producto sin stock (stock es 0)
procesarVenta('p003', 1);
 
 
console.log("\n--- Estado final del inventario ---");
console.log(inventario);

class producto{
    constructor(id, nombre, precio, stiock) {
    }
    mostrarInfo(){
        console.log('INFO: ${this.nombre} (ID: ${this.id})');
        console.log('Precio: $${this.precio}');
        console.log('Stock disponible: ${this.stock} unidades');
    }

}

const laptopActualizado = new Producto ('p001', 'laptop gamer', 25000, 5);
laptopActualizado.mostrarInfo();
