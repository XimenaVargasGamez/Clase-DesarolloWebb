const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

const sesiones = {
    'alpha': {
        nombre: 'Alpha',
        mision: 'Hola, Batman! Tu misión es proteger a los ciudadanos de Gotham'
    },
    'omega': {
        nombre: 'Omega',
        mision: 'Hola, Superman! Tu misión de hoy es salvar a la ciudad de New York'
    }
};

app.get('/', (req, res) => {
    const userId = req.cookies.userId;
    const datosUsuario = sesiones[userId];
    if (datosUsuario) {
        if (datosUsuario.nombre === 'Alpha') {
            res.send(`
                <style>
                    body {
                        text-align: center;
                        padding: 20px;
                    }
                    button {
                        margin: 5px;
                        padding: 10px 20px;
                        cursor: pointer;
                    }
                </style>
                <h1>Bienvenido, Agente ${datosUsuario.nombre}</h1>
                <h3>Tu misión: ${datosUsuario.mision}</h3>
                <h2>Preferencia de interfaz:</h2>
                <p>
                    <button id="btnClaro">Tema Claro</button>
                    <button id="btnOscuro">Tema Oscuro</button>
                    <button id="btnAgencia">Tema Agencia</button>
                </p>
                <p>
                    <input type="checkbox" id="gadgetCheckbox">
                    <label for="gadgetCheckbox">Mostrar Panel de Gadgets</label>
                </p>
                <div id="gadgetPanel" style="display: none;">
                    <p>Aqui irian tus herramientas secretas</p>
                </div>
                <script>
                    const body = document.body;
                    const aplicarTema = (tema) => {
                        if (tema === 'claro') {
                            body.style.backgroundColor = 'white';
                            body.style.color = 'black';
                        } else if (tema === 'oscuro') {
                            body.style.backgroundColor = '#2f3136';
                            body.style.color = 'white';
                        } else if (tema === 'agencia') {
                            body.style.backgroundColor = '#2E3D8C';
                            body.style.color = '#FFFFFF';
                        }
                    };
                    const btnClaro = document.getElementById('btnClaro');
                    const btnOscuro = document.getElementById('btnOscuro');
                    const btnAgencia = document.getElementById('btnAgencia');
                    const gadgetCheckbox = document.getElementById('gadgetCheckbox');
                    const gadgetPanel = document.getElementById('gadgetPanel');
                    btnClaro.addEventListener('click', () => {
                        localStorage.setItem('tema', 'claro');
                        aplicarTema('claro');
                    });
                    btnOscuro.addEventListener('click', () => {
                        localStorage.setItem('tema', 'oscuro');
                        aplicarTema('oscuro');
                    });
                    btnAgencia.addEventListener('click', () => {
                        localStorage.setItem('tema', 'agencia');
                        aplicarTema('agencia');
                    });
                    gadgetCheckbox.addEventListener('click', () => {
                        if (gadgetCheckbox.checked) {
                            localStorage.setItem('gadgetsVisibles', 'true');
                            gadgetPanel.style.display = 'block';
                        } else {
                            localStorage.setItem('gadgetsVisibles', 'false');
                            gadgetPanel.style.display = 'none';
                        }
                    });
                    const temaGuardado = localStorage.getItem('tema');
                    if (temaGuardado) {
                        aplicarTema(temaGuardado);
                    }
                    if (localStorage.getItem('gadgetsVisibles') === 'true') {
                        gadgetCheckbox.checked = true;
                        gadgetPanel.style.display = 'block';
                    } else {
                        gadgetCheckbox.checked = false;
                        gadgetPanel.style.display = 'none';
                    }
                </script>
                <a href="/logout">Cerrar sesión</a>
            `);
        } else if (userId === 'omega') {
            res.send(`
                <style>
                    body {
                        text-align: center;
                        padding: 20px;
                    }
                    button {
                        margin: 5px;
                        padding: 10px 20px;
                        cursor: pointer;
                    }
                </style>
                <h1>Bienvenido, Agente ${datosUsuario.nombre}</h1>
                <h3>Tu misión: ${datosUsuario.mision}</h3>
                <h2>Preferencia de interfaz:</h2>
                <p>
                    <button id="btnClaro">Tema Claro</button>
                    <button id="btnOscuro">Tema Oscuro</button>
                    <button id="btnAgencia">Tema Agencia</button>
                </p>
                <p>
                    <input type="checkbox" id="gadgetCheckbox">
                    <label for="gadgetCheckbox">Mostrar Panel de Gadgets</label>
                </p>
                <div id="gadgetPanel" style="display: none;">
                    <p>Herramientas super secretas</p>
                </div>
                <script>
                    const body = document.body;
                    const aplicarTema = (tema) => {
                        if (tema === 'claro') {
                            body.style.backgroundColor = 'white';
                            body.style.color = 'black';
                        } else if (tema === 'oscuro') {
                            body.style.backgroundColor = 'black';
                            body.style.color = 'white';
                        } else if (tema === 'agencia') {
                            body.style.backgroundColor = 'pink';
                            body.style.color = '#FFFFFF';
                        }
                    };
                    const btnClaro = document.getElementById('btnClaro');
                    const btnOscuro = document.getElementById('btnOscuro');
                    const btnAgencia = document.getElementById('btnAgencia');
                    const gadgetCheckbox = document.getElementById('gadgetCheckbox');
                    const gadgetPanel = document.getElementById('gadgetPanel');
                    btnClaro.addEventListener('click', () => {
                        localStorage.setItem('tema', 'claro');
                        aplicarTema('claro');
                    });
                    btnOscuro.addEventListener('click', () => {
                        localStorage.setItem('tema', 'oscuro');
                        aplicarTema('oscuro');
                    });
                    btnAgencia.addEventListener('click', () => {
                        localStorage.setItem('tema', 'agencia');
                        aplicarTema('agencia');
                    });
                    gadgetCheckbox.addEventListener('click', () => {
                        if (gadgetCheckbox.checked) {
                            localStorage.setItem('gadgetsVisibles', 'true');
                            gadgetPanel.style.display = 'block';
                        } else {
                            localStorage.setItem('gadgetsVisibles', 'false');
                            gadgetPanel.style.display = 'none';
                        }
                    });
                    const temaGuardado = localStorage.getItem('tema');
                    if (temaGuardado) {
                        aplicarTema(temaGuardado);
                    }
                    if (localStorage.getItem('gadgetsVisibles') === 'true') {
                        gadgetCheckbox.checked = true;
                        gadgetPanel.style.display = 'block';
                    } else {
                        gadgetCheckbox.checked = false;
                        gadgetPanel.style.display = 'none';
                    }
                </script>
                <a href="/logout">Cerrar sesión</a>
            `);
        }
    } else {
        res.send(`
            <style>
                body {
                    text-align: center;
                    padding: 20px;
                }
                a {
                    color: #2E3D8C;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
            </style>
            <h1>Acceso Denegado</h1>
            <h3>Por favor, inicia sesión con una de estas identidades:</h3>
            <ul style="list-style-position: inside;">
                <li><a href="/login?userId=alpha">Iniciar sesión como Alpha</a></li>
                <li><a href="/login?userId=omega">Iniciar sesión como Omega</a></li>
            </ul>
        `);
    }
});

app.get('/login', (req, res) => {
    const userId = req.query.userId;
    res.cookie('userId', userId, { httpOnly: true });
    res.redirect('/');
});

app.get('/logout', (req, res) => {
    res.clearCookie('userId');
    res.send(`
        <script>
            localStorage.clear();
            window.location.href = '/';
        </script>
    `);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});