

const express = require('express');
const app = express();
const port = 3000;

// Importar funciones del servicio
const atmService = require('./service');

// Este middleware es esencial - permite a Express leer JSON de las peticiones POST
app.use(express.json());

// Ruta básica
app.get('/', (req, res) => {
    res.json({ message: 'ATM API is running' });
});

// Endpoint para validar tarjeta
app.post('/card-info', (req, res) => {
    const { cardNumber, cardPin } = req.body;
    
    if (!cardNumber || !cardPin) {
        return res.status(400).json({ 
            success: false, 
            message: 'Card number and PIN are required' 
        });
    }
    
    const result = atmService.cardInfoRequest(cardNumber, cardPin);
    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(401).json(result);
    }
});

// Endpoint para depositar dinero
app.post('/deposit', (req, res) => {
    const { cardNumber, amount } = req.body;
    
    if (!cardNumber || !amount) {
        return res.status(400).json({ 
            success: false, 
            message: 'Card number and amount are required' 
        });
    }
    
    const result = atmService.deposit(cardNumber, amount);
    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(400).json(result);
    }
});

// Endpoint para retirar dinero
app.post('/withdraw', (req, res) => {
    const { cardNumber, amount } = req.body;
    
    if (!cardNumber || !amount) {
        return res.status(400).json({ 
            success: false, 
            message: 'Card number and amount are required' 
        });
    }
    
    const result = atmService.withdraw(cardNumber, amount);
    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(400).json(result);
    }
});

// Endpoint para consultar saldo
app.get('/balance/:cardNumber', (req, res) => {
    const { cardNumber } = req.params;
    
    if (!cardNumber) {
        return res.status(400).json({ 
            success: false, 
            message: 'Card number is required' 
        });
    }
    
    const result = atmService.checkBalance(parseInt(cardNumber));
    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(404).json(result);
    }
});

app.listen(port, () => {
    console.log(`Servidor ATM API ejecutándose en el puerto ${port}`);
    console.log(`Endpoints disponibles:`);
    console.log(`- POST /card-info - Validar tarjeta`);
    console.log(`- POST /deposit - Realizar depósito`);
    console.log(`- POST /withdraw - Realizar retiro`);
    console.log(`- GET /balance/:cardNumber - Consultar saldo`);
});