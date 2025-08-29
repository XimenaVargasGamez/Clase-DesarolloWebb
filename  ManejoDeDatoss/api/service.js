// Base de datos simulada para propósitos de demostración
let cards = [
    {
        cardNumber: 1234567890123456,
        cardHolder: "John Doe",
        cardExpirationDate: "12/25",
        cardCvv: 123,
        cardBalance: 1000.00,
        cardPin: 1234
    },
    {
        cardNumber: 9876543210987654,
        cardHolder: "Jane Smith",
        cardExpirationDate: "06/26",
        cardCvv: 456,
        cardBalance: 2500.00,
        cardPin: 5678
    },
    {
        cardNumber: 5432109876543210,
        cardHolder: "Mike Johnson",
        cardExpirationDate: "03/27",
        cardCvv: 789,
        cardBalance: 750.50,
        cardPin: 9012
    }
];

const findCard = (cardNumber, cardPin) => {
    return cards.find(card => card.cardNumber === cardNumber && card.cardPin === cardPin);
};

const updateCardBalance = (cardNumber, newBalance) => {
    const cardIndex = cards.findIndex(card => card.cardNumber === cardNumber);
    if (cardIndex !== -1) {
        cards[cardIndex].cardBalance = newBalance;
        return true;
    }
    return false;
};

const cardInfoRequest = (cardNumber, cardPin) => {
    const card = findCard(cardNumber, cardPin);
    if (!card) {
        return { success: false, message: "Invalid card number or PIN" };
    }
    
    // No devolver datos sensibles como PIN y CVV
    const { cardPin: _, cardCvv: __, ...safeCardInfo } = card;
    return { success: true, message: "Card found", data: safeCardInfo };
};

const deposit = (cardNumber, amount) => {
    if (amount <= 0) {
        return { success: false, message: "Amount must be greater than 0" };
    }
    
    const card = cards.find(c => c.cardNumber === cardNumber);
    if (!card) {
        return { success: false, message: "Card not found" };
    }
    
    const newBalance = card.cardBalance + amount;
    updateCardBalance(cardNumber, newBalance);
    return { 
        success: true, 
        message: "Deposit successful", 
        data: { amount, newBalance } 
    };
};

const withdraw = (cardNumber, amount) => {
    if (amount <= 0) {
        return { success: false, message: "Amount must be greater than 0" };
    }
    
    const card = cards.find(c => c.cardNumber === cardNumber);
    if (!card) {
        return { success: false, message: "Card not found" };
    }
    
    if (card.cardBalance < amount) {
        return { success: false, message: "Insufficient funds" };
    }
    
    const newBalance = card.cardBalance - amount;
    updateCardBalance(cardNumber, newBalance);
    return { 
        success: true, 
        message: "Withdrawal successful", 
        data: { amount, newBalance } 
    };
};

const checkBalance = (cardNumber) => {
    const card = cards.find(c => c.cardNumber === cardNumber);
    if (!card) {
        return { success: false, message: "Card not found" };
    }
    
    return { 
        success: true, 
        message: "Balance retrieved", 
        data: { balance: card.cardBalance } 
    };
};

module.exports = {
    cardInfoRequest,
    deposit,
    withdraw,
    checkBalance
};