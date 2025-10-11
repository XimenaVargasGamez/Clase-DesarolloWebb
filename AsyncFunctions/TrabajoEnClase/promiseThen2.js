const fetch = require('node-fetch');
const url = 'https://api.chucknorris.io/jokes/random';

async function obtenerDato() {
  try {
    console.log("\nPidiendo un dato (con async/await)...");
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    console.log("Dato recibido:", datos.value);
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}

obtenerDato();
