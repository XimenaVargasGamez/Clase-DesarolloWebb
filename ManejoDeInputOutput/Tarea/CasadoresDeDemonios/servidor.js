const express = require("express");
const path = require("path");
const postgres = require("postgres");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const connectionString = "postgresql://postgres:guchapa9905!@db.oqybylarzcyzkspyuslt.supabase.co:5432/postgres";
const sql = postgres(connectionString, { ssl: "require" });

console.log("Conectado a PostgreSQL correctamente.");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/cazadores", async (req, res) => {
    try {
        const resultados = await sql`SELECT * FROM cazadores`;
        res.json({
            total: resultados.length,
            cazadores: resultados
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ exito: false, mensaje: "Error al obtener cazadores" });
    }
});

app.post("/registrar", async (req, res) => {
    const { nombre, respiracion, rango } = req.body;

    if (!nombre || !respiracion) {
        return res.status(400).json({
            exito: false,
            mensaje: "Los campos nombre y respiración son obligatorios."
        });
    }

    try {
        const resultado = await sql`
            INSERT INTO cazadores (nombre, respiracion, rango)
            VALUES (${nombre}, ${respiracion}, ${rango || null})
            RETURNING id;
        `;
        res.status(201).json({
            exito: true,
            mensaje: `Bienvenido, ${nombre}!`,
            id: resultado[0].id
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ exito: false, mensaje: "Error al registrar cazador" });
    }
});

app.get("/cazadores/:nombre", async (req, res) => {
    const { nombre } = req.params;
    try {
        const resultados = await sql`
            SELECT * FROM cazadores WHERE nombre = ${nombre};
        `;
        if (resultados.length === 0) {
            return res.status(404).json({ exito: false, mensaje: `Cazador "${nombre}" no encontrado.` });
        }
        res.json({ exito: true, cazador: resultados[0] });
    } catch (err) {
        console.error(err);
        res.status(500).json({ exito: false, mensaje: "Error interno del servidor" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});
