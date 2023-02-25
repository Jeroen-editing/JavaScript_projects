const screen = document.querySelector('.screen');

const outputScreen = document.getElementById('output');
const inputScreen = document.getElementById('input');

const keyboard = document.querySelector('.keyboard');
const figures = keyboard.querySelectorAll('.figure');
const operators = keyboard.querySelectorAll('.operator');

const result = keyboard.querySelector('.equal');
const reset = keyboard.querySelector('.reset');

let firstNumber = '';
let secondNumber = '';
let firstOperator = '';
let seconeOperator = '';
let equal = '';
let xNumber = '';
let yNumber = '';

let sum = 0;

function showFirstInput() {
    if (firstOperator == '') {
        firstNumber += this.dataset.button;
        inputScreen.textContent = '';
        inputScreen.textContent += firstNumber;
        console.log(firstNumber);
    } else {
        xNumber = +firstNumber;
        return xNumber;
    }
}

function showOperator() {
    firstOperator += this.dataset.operator;
    inputScreen.textContent += firstOperator;
    console.log(firstOperator);
    xNumber = firstNumber;
    figures.forEach(button => button.addEventListener('click', showSecondInput));
}

function showSecondInput() {
    if (equal ==  '') {
        secondNumber += this.dataset.button;
        inputScreen.textContent += secondNumber;
        console.log(secondNumber);
    }  else {
        yNumber = +secondNumber;
        return secondNumber;
    }
}

function calculate() {
    console.log('x: ' + xNumber);
    console.log('y: ' + yNumber);
    equal += '=';
    showSecondInput();

    if (firstOperator == '÷') {
        sum = +xNumber / +yNumber;
    } else if (firstOperator == 'x') {
        sum = +xNumber * +yNumber;
    } else if (firstOperator == '-') {
        sum = +xNumber - +yNumber;
    } else if (firstOperator == '+') {
        sum = +xNumber + +yNumber;
    } else if (firstOperator == 'mod') {
        sum = +xNumber % +yNumber;
    } else if (firstOperator == '%') {
        sum = +xNumber * +yNumber / 100;
    } else if (firstOperator == 'pow') {
        sum = Math.pow(+xNumber, +yNumber);
    } else if (firstOperator == 'root') {
        sum = Math.pow(+xNumber, 1 / +yNumber);
    }
    console.log(typeof sum + sum);
    outputScreen.textContent = '';
    outputScreen.textContent = sum.toFixed(2).toString();
    outputScreen.style.color = "rgb(141, 219, 72)"
}

function reseting() {
    location.reload();
}

figures.forEach(button => button.addEventListener('click', showFirstInput));
operators.forEach(operator => operator.addEventListener('click', showOperator));

result.addEventListener('click', calculate);
reset.addEventListener('click', reseting);