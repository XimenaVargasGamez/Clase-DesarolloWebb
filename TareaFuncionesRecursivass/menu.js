const menu = {
    nombre: 'Todas las Categorías',
    subcategorias: [
        {
            nombre: 'Electrónica',
            subcategorias: [
                { nombre: 'Celulares', subcategorias: [] },
                { nombre: 'Laptops', subcategorias: [
                    { nombre: 'Gaming', subcategorias: [] },
                    { nombre: 'Oficina', subcategorias: [] }
                ]}
            ]
        },
        {
            nombre: 'Ropa',
            subcategorias: [
                { nombre: 'Dama', subcategorias: [] },
                { nombre: 'Caballero', subcategorias: [] }
            ]
        },
        {
            nombre: 'Hogar',
            subcategorias: []
        }
    ]
};

/**
 * @param {Object} categoria 
 * @param {number} nivel 
 */
function imprimirMenu(categoria, nivel) {
    const sangria = '-'.repeat(nivel * 2);
    console.log(sangria + categoria.nombre);
    
    for (let i = 0; i < categoria.subcategorias.length; i++) {
        const subcategoria = categoria.subcategorias[i];
        imprimirMenu(subcategoria, nivel + 1);
    }
}

console.log('menu\n');
imprimirMenu(menu, 0);
console.log('\nfin de menu');