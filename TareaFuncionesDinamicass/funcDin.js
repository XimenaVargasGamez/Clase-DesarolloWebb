// Catálogo de productos inicial
const catalogo = [
    { id: 1, nombre: 'Laptop Gamer', precio: 25000, categoria: 'Electrónica', stock: 5 },
    { id: 2, nombre: 'Playera Casual', precio: 350, categoria: 'Ropa', stock: 20 },
    { id: 3, nombre: 'Mouse Inalámbrico', precio: 450, categoria: 'Electrónica', stock: 15 },
    { id: 4, nombre: 'Pantalón de Mezclilla', precio: 700, categoria: 'Ropa', stock: 8 },
    { id: 5, nombre: 'Libro de Programación', precio: 550, categoria: 'Libros', stock: 0 }
];

/**
 * @param {Array} productos 
 * @param {Function} criterioCallback 
 * @returns {Array}
 */
function filtrarProductos(productos, criterioCallback) {
    const productosFiltrados = [];

    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        
        if (criterioCallback(producto)) {
            productosFiltrados.push(producto);
        }
    }
    
    return productosFiltrados;
}

/**
 * @param {Object} producto 
 * @returns {boolean} 
 */
function esBarato(producto) {
    return producto.precio <= 500;
}

/**
 * @param {Object} producto 
 * @returns {boolean}
 */
function esElectronico(producto) {
    return producto.categoria === 'Electrónica';
}

/**
 * @param {Object} producto 
 * @returns {boolean}
 */
function tieneStock(producto) {
    return producto.stock > 0;
}

console.log("=== PRUEBAS DE FILTRADO ===\n");

const productosBaratos = filtrarProductos(catalogo, esBarato);
console.log("Productos Baratos (≤ $500):");
console.log(productosBaratos);
console.log(`Se encontraron ${productosBaratos.length} productos baratos.\n`);

const productosElectronicos = filtrarProductos(catalogo, esElectronico);
console.log("Productos Electrónicos:");
console.log(productosElectronicos);
console.log(`Se encontraron ${productosElectronicos.length} productos electrónicos.\n`);

const productosConStock = filtrarProductos(catalogo, tieneStock);
console.log("Productos con Stock Disponible:");
console.log(productosConStock);
console.log(`Se encontraron ${productosConStock.length} productos con stock.\n`);

/**\
 * @param {string} categoria 
 * @returns {Function} 
 */
function crearFiltroPorCategoria(categoria) {
    return function(producto) {
        return producto.categoria === categoria;
    };
}

console.log("reto extra\n");

const filtroRopa = crearFiltroPorCategoria('ropa');
const ropaDisponible = filtrarProductos(catalogo, filtroRopa);
console.log("productos de ropa:");
console.log(ropaDisponible);
console.log(`se encontraron: ${ropaDisponible.length} productos de ropa.\n`);

const filtroLibros = crearFiltroPorCategoria('Libros');
const librosDisponibles = filtrarProductos(catalogo, filtroLibros);
console.log("Productos de Libros:");
console.log(librosDisponibles);
console.log(`Se encontraron ${librosDisponibles.length} productos de libros.\n`);

console.log("ejemplos adicionales\n");

const productosCarosConStock = filtrarProductos(catalogo, function(producto) {
    return producto.precio > 500 && producto.stock > 0;
});
console.log("Productos Caros con Stock (> $500 y stock > 0):");
console.log(productosCarosConStock);

const productosElectronicosCaros = filtrarProductos(catalogo, 
    producto => producto.categoria === 'Electrónica' && producto.precio > 1000
);
console.log("\nProductos Electrónicos Caros (> $1000):");
console.log(productosElectronicosCaros);