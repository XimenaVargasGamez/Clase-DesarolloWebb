const express = require( 'express');
const app = express();
const port = 3000;
const upload = multer({ dest: 'uploads/' });
const fs = require('fs');

app.use(express.static(__dirname));

app.post('/subir.perfil', upload.single('pfp'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No se subió archivo');
  }

  const rutaTemporal = req.file.path;
  const rutaFinal = path.join(__dirname, 'uploads', 'perfilUser.png');

  fs.rename(rutaTemporal, rutaFinal, (err) => {
    if (err) {
      return res.status(500).send('error al guardar archivo');
    }
    res.send('El archivo se subió correctamente');
  });
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
