const screen = document.querySelector('.screen');

const outputScreen = document.getElementById('output');
const inputScreen = document.getElementById('input');

const keyboard = document.querySelector('.keyboard');
const figures = keyboard.querySelectorAll('.figure');
const operators = keyboard.querySelectorAll('.operator');

const result = keyboard.querySelector('.equal');
const reset = keyboard.querySelector('.reset');

let number;
let operator = " ";
let input = " ";
let calculation;

const empty = () => {
    inputScreen.textContent = '';
}

window.onload = empty();


function showInput() {
    number = this.dataset.button;
    input += number;
    inputScreen.textContent = input;
    number = 0;
}
function showOperator() { 
    operator = this.dataset.operator;
    //operator === 'mod' ? operator = '%' :  operator === 'root' ? 
    input += operator;
    inputScreen.textContent = input;
    operator = " ";
}

function calculate() {
    calculation = inputScreen.innerText;
    outputScreen.textContent = eval(calculation);
}

figures.forEach(button => button.addEventListener('click', showInput));

operators.forEach(operator => operator.addEventListener('click', showOperator));

result.addEventListener('click', calculate);