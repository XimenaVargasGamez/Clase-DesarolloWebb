const fetch = require('node-fetch');
const url = 'https://api.chucknorris.io/jokes/random';

console.log("Pidiendo un dato (con .then)...");

fetch(url)
  .then(respuesta => {
    return respuesta.json();
  })
  .then(datos => {
    console.log("Dato recibido:", datos.value);
  })
  .catch(error => {
    console.error("Ocurrió un error:", error);
  });
