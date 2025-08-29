# Menú de Categorías Recursivo

Función recursiva que imprime un menú de categorías anidadas con sangría.

## Cómo usar

```bash
node menu.js
```

## Salida esperada

```
Todas las Categorías 
--Electrónica 
----Celulares 
----Laptops 
------Gaming 
------Oficina 
--Ropa 
----Dama 
----Caballero 
--Hogar
```

## Función principal

```javascript
function imprimirMenu(categoria, nivel) {
    const sangria = '-'.repeat(nivel * 2);
    console.log(sangria + categoria.nombre);
    
    for (let i = 0; i < categoria.subcategorias.length; i++) {
        imprimirMenu(categoria.subcategorias[i], nivel + 1);
    }
}
```
