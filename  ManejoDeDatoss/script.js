const API_BASE = 'http://localhost:3000';

function showResult(elementId, data, isSuccess = true) {
    const element = document.getElementById(elementId);
    element.textContent = JSON.stringify(data, null, 2);
    element.className = `result ${isSuccess ? 'success' : 'error'}`;
}
//hi
function clearResult(elementId) {
    const element = document.getElementById(elementId);
    element.textContent = '';
    element.className = 'result';
}

async function validateCard() {
    const cardNumber = document.getElementById('validateCardNumber').value;
    const pin = document.getElementById('validatePin').value;
    
    if (!cardNumber || !pin) {
        showResult('validateResult', { error: 'Por favor llene todos los campos' }, false);
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/card-info`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cardNumber: parseInt(cardNumber), cardPin: parseInt(pin) })
        });
        
        const data = await response.json();
        showResult('validateResult', data, data.success);
    } catch (error) {
        showResult('validateResult', { error: 'Network error: ' + error.message }, false);
    }
}

async function deposit() {
    const cardNumber = document.getElementById('depositCardNumber').value;
    const amount = document.getElementById('depositAmount').value;
    
    if (!cardNumber || !amount) {
        showResult('depositResult', { error: 'Please fill in all fields' }, false);
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/deposit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cardNumber: parseInt(cardNumber), amount: parseFloat(amount) })
        });
        
        const data = await response.json();
        showResult('depositResult', data, data.success);
    } catch (error) {
        showResult('depositResult', { error: 'Network error: ' + error.message }, false);
    }
}

async function withdraw() {
    const cardNumber = document.getElementById('withdrawCardNumber').value;
    const amount = document.getElementById('withdrawAmount').value;
    
    if (!cardNumber || !amount) {
        showResult('withdrawResult', { error: 'Please fill in all fields' }, false);
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/withdraw`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cardNumber: parseInt(cardNumber), amount: parseFloat(amount) })
        });
        
        const data = await response.json();
        showResult('withdrawResult', data, data.success);
    } catch (error) {
        showResult('withdrawResult', { error: 'Network error: ' + error.message }, false);
    }
}

async function checkBalance() {
    const cardNumber = document.getElementById('balanceCardNumber').value;
    
    if (!cardNumber) {
        showResult('balanceResult', { error: 'Please enter card number' }, false);
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/balance/${cardNumber}`);
        const data = await response.json();
        showResult('balanceResult', data, data.success);
    } catch (error) {
        showResult('balanceResult', { error: 'Network error: ' + error.message }, false);
    }
}

// Clear results when inputs change
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            const sectionId = input.id.replace(/CardNumber|Pin|Amount/, '');
            if (sectionId === 'validate') clearResult('validateResult');
            if (sectionId === 'deposit') clearResult('depositResult');
            if (sectionId === 'withdraw') clearResult('withdrawResult');
            if (sectionId === 'balance') clearResult('balanceResult');
        });
    });
});
