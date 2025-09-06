const createKeypad = (onButtonClick) => {
    const keypadContainer = document.getElementById('keypad');
    keypadContainer.className = 'keypad';

    // Clear existing buttons if any
    keypadContainer.innerHTML = '';

    const buttons = [
        { label: '7', class: 'number' },
        { label: '8', class: 'number' },
        { label: '9', class: 'number' },
        { label: '/', class: 'operation' },
        { label: '4', class: 'number' },
        { label: '5', class: 'number' },
        { label: '6', class: 'number' },
        { label: '*', class: 'operation' },
        { label: '1', class: 'number' },
        { label: '2', class: 'number' },
        { label: '3', class: 'number' },
        { label: '-', class: 'operation' },
        { label: '0', class: 'number' },
        { label: '.', class: 'decimal' },
        { label: '=', class: 'equals' },
        { label: '+', class: 'operation' },
        { label: 'sin', class: 'scientific' },
        { label: 'cos', class: 'scientific' },
        { label: 'tan', class: 'scientific' },
        { label: 'log', class: 'scientific' },
        { label: 'exp', class: 'scientific' },
        { label: '%', class: 'scientific' },
        { label: 'C', class: 'clear' },
        { label: 'AC', class: 'all-clear' }
    ];

    buttons.forEach(button => {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = button.label;
        buttonElement.className = `button ${button.class}`;
        buttonElement.addEventListener('click', () => onButtonClick(button.label));
        keypadContainer.appendChild(buttonElement);
    });
};

export default createKeypad;
