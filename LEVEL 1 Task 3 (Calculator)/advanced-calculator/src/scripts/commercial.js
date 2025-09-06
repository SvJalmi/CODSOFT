function calculatePercentage(amount, percentage) {
    return (amount * percentage) / 100;
}

function convertCurrency(amount, exchangeRate) {
    return amount * exchangeRate;
}

function calculateTax(amount, taxRate) {
    return amount + (amount * taxRate) / 100;
}

export { calculatePercentage, convertCurrency, calculateTax };