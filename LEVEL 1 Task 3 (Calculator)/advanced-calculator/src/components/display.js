const displayElement = document.getElementById('display');

export function updateDisplay(value) {
    displayElement.textContent = value;
}

export function clearDisplay() {
    displayElement.textContent = '';
}
