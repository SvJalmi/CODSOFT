import createKeypad from '../components/keypad.js';
import { updateDisplay, clearDisplay } from '../components/display.js';
import { sine, cosine, tangent, logarithm, exponential } from './scientific.js';

function Calculator() {
    this.currentInput = '';
    this.previousInput = '';
    this.operation = null;
    this.waitingForOperand = false;

    this.appendNumber = function(number) {
        if (this.waitingForOperand) {
            this.currentInput = number;
            this.waitingForOperand = false;
        } else {
            if (number === '.' && this.currentInput.includes('.')) return;
            this.currentInput += number;
        }
        this.updateDisplay();
    };

    this.chooseOperation = function(operation) {
        if (this.currentInput === '') return;
        if (this.previousInput !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousInput = this.currentInput;
        this.currentInput = '';
        this.waitingForOperand = true;
    };

    this.compute = function() {
        let computation;
        const prev = parseFloat(this.previousInput);
        const current = parseFloat(this.currentInput);
        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentInput = computation.toString();
        this.operation = null;
        this.previousInput = '';
        this.waitingForOperand = true;
        this.updateDisplay();
    };

    this.performScientific = function(func) {
        const input = parseFloat(this.currentInput);
        if (isNaN(input)) return;

        let result;
        switch (func) {
            case 'sin':
                result = sine(input);
                break;
            case 'cos':
                result = cosine(input);
                break;
            case 'tan':
                result = tangent(input);
                break;
            case 'log':
                result = logarithm(input);
                break;
            case 'exp':
                result = exponential(input);
                break;
            case '%':
                result = input / 100;
                break;
            default:
                return;
        }
        this.currentInput = result.toString();
        this.updateDisplay();
    };

    this.updateDisplay = function() {
        updateDisplay(this.currentInput || this.previousInput || '0');
    };

    this.clear = function() {
        this.currentInput = '';
        this.previousInput = '';
        this.operation = null;
        this.waitingForOperand = false;
        this.updateDisplay();
    };

    this.allClear = function() {
        this.clear();
    };
}

const calculator = new Calculator();

const handleButtonClick = (button) => {
    if (!isNaN(button) || button === '.') {
        calculator.appendNumber(button);
    } else if (['+', '-', '*', '/'].includes(button)) {
        calculator.chooseOperation(button);
    } else if (button === '=') {
        calculator.compute();
    } else if (button === 'C') {
        calculator.clear();
    } else if (button === 'AC') {
        calculator.allClear();
    } else if (['sin', 'cos', 'tan', 'log', 'exp', '%'].includes(button)) {
        calculator.performScientific(button);
    }
};

createKeypad(handleButtonClick);
