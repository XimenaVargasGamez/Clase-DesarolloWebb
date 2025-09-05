class CuentaBancaria {
    constructor(numeroCuenta, titular, saldoInicial) {
        this.numeroCuenta = numeroCuenta;
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    depositar(monto) {
        this.saldo = this.saldo + monto;
    }

    retirar(monto) {
        if (monto > this.saldo) {
            throw new Error("Fondos insuficientes.");
        }
        this.saldo = this.saldo - monto;
    }
}

class Banco {
    constructor() {
        this.cuentas = [];
    }

    agregarCuenta(cuenta) {
        this.cuentas.push(cuenta);
    }

    buscarCuenta(numeroCuenta) {
        for (let i = 0; i < this.cuentas.length; i++) {
            if (this.cuentas[i].numeroCuenta === numeroCuenta) {
                return this.cuentas[i];
            }
        }
        throw new Error("cuenta no existe.");
    }

    realizarTransaccion(numeroCuenta, tipo, monto) {
        try {
            let cuenta = this.buscarCuenta(numeroCuenta);
            if (tipo === "deposito") {
                cuenta.depositar(monto);
                console.log("deposito exitoso " + numeroCuenta);
            } else if (tipo === "retiro") {
                cuenta.retirar(monto);
                console.log("retiro exitoso " + numeroCuenta);
            }
        } catch (error) {
            console.log("error: " + error.message);
        }
    }
}

// --- Simulación ---
console.log("simulación bancaria...");
const miBanco = new Banco();
const cuentaAna = new CuentaBancaria(101, "ximena vargas", 5000);
const cuentaCarlos = new CuentaBancaria(102, "paty vargas", 2500);
 
// Agregar cuentas al banco
miBanco.agregarCuenta(cuentaAna);
miBanco.agregarCuenta(cuentaCarlos);
 
// Realizar transacciones de prueba
console.log("\n--- Transacciones ---");
 
// 1. Depósito exitoso
miBanco.realizarTransaccion(101, 'deposito', 1500);
 
// 2. Retiro exitoso
miBanco.realizarTransaccion(102, 'retiro', 1000);
 
// 3. Retiro con fondos insuficientes (debe mostrar error)
miBanco.realizarTransaccion(101, 'retiro', 10000);
 
// 4. Transacción en una cuenta que no existe (debe mostrar error)
miBanco.realizarTransaccion(999, 'deposito', 500);
 
// 5. Ver saldos finales
console.log("\n--- Saldos Finales ---");
console.log(miBanco.cuentas);