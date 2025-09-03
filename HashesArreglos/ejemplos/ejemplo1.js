const catalogo = [
    { id: 1, nombre: 'Laptop Gamer', stock: 5 },
    { id: 2, nombre: 'Playera Casual', stock: 20 },
    { id: 3, nombre: 'Mouse Inalámbrico', stock: 15 }
];

console.log (catalogo[1].nombre);

catalogo.push({ id: 4, nombre: 'Teclado', stock: 10 });
console.log(catalogo. length);

let primerProducto = catalogo[0];
primerProducto.stock = 3;
primerProducto.enOferta = true;
console.log(primerProducto);

function convertirAJason(datos) {
    const jsonString = JSON.stringify(datos);
    console.log("Conversion exitosa.");
    return jsonString;
}
convertirAJason({nombre: "Ximena", edad: 20});

let obj1 = {};
let obj2 = {};
obj1.a = obj2;
// obj2.b = obj1;

//convertirAJason(obj1);

try {
    console.log("intentando convertit datos completos");
    convertirAJason(obj1);
} catch (error){
    console.log("error! pero el programa continua");
    console.log("detalle del error: ", error.message);
}
console.log("el progrma sigue funcionando despues del error. ");