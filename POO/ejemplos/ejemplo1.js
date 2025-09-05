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