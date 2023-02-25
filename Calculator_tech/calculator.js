let calculator_buttons = [
    {   name: "delete",
        symbol: "⌫",
        text: `<p class="special del">⌫</p>`,
        formula: false,
        type: "key",
        class: "square delete"
    },
    {   name : "clear",
        symbol : "c",
        text :`<p class="special aAndc">AC</p>`,
        formula : false,
        type : "key",
        class: "square reset"
    },
    {   name: "7",
        symbol: "7",
        text : `<p class="seven">7</p>`,
        formula: "7",
        type: "number",
        class: "square figure"
    },
    {   name: "8",
        symbol: "8",
        text : `<p class="eight">8</p>`,
        formula: "8",
        type: "number",
        class: "square figure"
    },
    {   name: "9",
        symbol: "9",
        text : `<p class="nine">9</p>`,
        formula: "9",
        type: "number",
        class: "square figure"
    },
    {   name : "division",
        symbol : "÷",
        text: `<p class="special part">÷</p>`,
        formula : "/",
        type : "operator",
        class:  "square division"
    },
    {   name : "percent",
        symbol : "%",
        text : `<p class="special roundOne">º</p><p class="special slashTwo">/</p><p class="special roundTwo">º</p>`,
        formula : "/100",
        type: "number",
        class: "square procentage"
    },
    {   name : "factorial",
        symbol : "x!",
        text : `<p class="special factX">x</p><p class="special fact2">!</p>`,
        formula : "factorial",
        type : "math_function",
        class: "square factorial"
    },
    {   name: "modulus",
        symbol: "mod",
        text : `<p class="special mod">mod</p>`,
        formula: "%",
        type: "math_function",
        class: "square modulus" 
    },
    {   name: "4",
        symbol: "4",
        text : `<p class="four">4</p>`,
        formula: "4",
        type: "number",
        class: "square figure"
    },
    {   name: "5",
        symbol: "5",
        text : `<p class="five">5</p>`,
        formula: "5",
        type: "number",
        class: "square figure"
    },
    {   name: "6",
        symbol: "6",
        text : `<p class="six">6</p>`,
        formula: "6",
        type: "number",
        class: "square figure"
    },
    {   name : "multiplication",
        symbol : "×",
        text : `<p class="special multiply">×</p>`,
        formula : "*",
        type : "operator",
        class: "square multiplication"
    },
    {   name : "open-parenthesis",
        symbol : "(",
        text : `<p class="special openBracket">(</p>`,
        formula : "(",
        type: "number",
        class: "square brackets"
    },
    {   name : "square power",
        symbol : "x<span>2</span>",
        text : '<p class="special powerX">x</p><p class="special powerY">2</p>',
        formula : "Math.pow(,2)",
        type : "math_function",
        class: "square powerOfTwo"
    },
    {   name : "power",
        symbol : "x<span>y</span>",
        text : '<p class="special powerX">x</p><p class="special powerY">y</p',
        formula : "Math.pow()",
        type : "math_function",
        class: "square power"
    },
    {   name: "1",
        symbol: "1",
        text : `<p class="one">1</p>`,
        formula: "1",
        type: "number",
        class: "square figure"
    },
    {   name: "2",
        symbol: "2",
        text : `<p class="two">2</p>`,
        formula: "2",
        type: "number",
        class: "square figure"
    },
    {   name: "3",
        symbol: "3",
        text : `<p class="three">3</p>`,
        formula: "3",
        type: "number",
        class: "square figure"
    },
    {   name : "subtraction",
        symbol : "-",
        text : `<p class="special minus">−</p>`,
        formula : "-",
        type : "operator",
        class: "square substraction"
    },
    {   name : "close-parenthesis",
        symbol : ")",
        text : `<p class="special closeBracket">)</p>`,
        formula : ")",
        type: "number",
        class: "square brackets"
    },
    {   name : "square-root",
        symbol : "√2",
        text : `<p class="special rootY">2</p><img class="special rootSymbol" src="icons/square-root-3.png" alt=""><p class="special rootX">x</p>`,
        formula : "Math.sqrt(2)",
        type : "math_function",
        class: "square root" 
    },
    {   name : "root",
        symbol : "√<span>y</span>",
        text : `<p class="special rootY">y</p><img class="special rootSymbol" src="icons/square-root-3.png" alt=""><p class="special rootX">x</p>`,
        formula : "x * 1/y",
        type : "number",
        class: "square root" 
    },
    {   name : "comma",
        symbol : ",",
        text : `<p>,</p>`,
        formula : ".",
        type : "number",
        class: "square figure" 
    },
    {   name: "0",
        symbol: "0",
        text : `<p class="zero">0</p>`,
        formula: "0",
        type: "number",
        class: "square figure" 
    },  
    {   name : "calculate",
        symbol : "=",
        text : `<p class="special equal">=</p>`,
        formula : "=",
        type : "calculate",
        class: "square calculate" 
    },  
    {   name : "addition",
        symbol : "+",
        text : `<p class="special plus">+</p>`,
        formula : "+",
        type : "operator",
        class: "square addition" 
    },
    {
        name : "negative",
        symbol : "-",
        text : `<p class="special plus">+</p><p class="special slashOne">/</p><p class="special min">-</p>`,
        formula : "-",
        type : "number",
        class : "square plusMinus"
    }
];

//const keyboard_element = document.getElementById("keyboard");
//const output_operation_element = document.getElementById("operation");
//const output_formula_element = document.getElementById("result");

const input_element = document.querySelector(".input");
const output_operation_element = document.querySelector(".operation .value");
const output_formula_element = document.querySelector(".formaula .value");

let data = {
    operation : [],
    result : [],
    formula : []
};

function createCalculatorButtons(){
    const btns_per_row = 7;
    let added_btns = 0;

    calculator_buttons.forEach(button => {          
        if (added_btns % btns_per_row == 0){     
            input_element.innerHTML += `<div class="buttonRow"></div>`
        } 
        const row  = document.querySelector(".buttonRow:last-child");
        row.innerHTML += `<button class="${button.class}" id="${button.name}">${button.symbol}</button>`;

        added_btns++; 
    });
}
createCalculatorButtons();

input_element.addEventListener('click', event => {
    const target_btn = event.target;

    calculator_buttons.forEach(button => {
        if(button.name == target_btn.id) calculator(button);
    });
    console.log(target_btn);
});

function calculator(button) {
    if (button.type == "operator") {
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
    }
    else if (button.type == "number") {
        data.operation.push(button.symbol);
        data.formula.push(button.formula);
    }
    /*
    else if (button.type == "math_function") {

    }
    */
    else if (button.type == "key") {

        if (button.name == "clear") {
            data.operation = [];
            data.formula = [];
            updateOutputResult(0);
        }
        else if (button.name == "delete") {
            data.formula.pop();
            data.operation.pop();
        }
    }
    else if (button.type == "calculate") {

        let result_joined = data.formula.join('');
        console.log(data.formula);

        data.operation = [];
        data.formula = [];

        let result_final;

        try {
            result_final = eval(result_joined);           
        }
        catch (error) {
            
            if (error instanceof SyntaxError) {
                result_final = "Syntax Error!"
                updateOutputFormula( result_final );
                return;
            }
        }
        result_final = formatResult(result_final);

        data.operation.push(result_final);
        data.formula.push(result_final);

        updateOutputFormula(result_final);

        return;
    }
    updateOutputOperation(data.operation.join(''));

    //console.log(data.operation);
    //console.log(data.formula);
}

function updateOutputOperation(operation) {
    output_operation_element.innerHTML = operation;
}

function updateOutputFormula(formula) {
    output_formula_element.innerHTML = formula;
}

function digitCounter(number) {
    return number.toString().length;
}

function isFloat(number) {
    return number % 1 != 0;
}

const max_output_number_length = 10;
const output_precission = 5;

function formatResult(result) {
    if (digitCounter(result) > max_output_number_length) {

        if (isFloat(result)) {
            const result_int = parseInt(result);
            const result_int_length = digitCounter(result_int);

            if (result_int_length > max_output_number_length) {
                return result.toPrecission(output_precission);

            } else {
                const num_digits_after_point = max_output_number_length - result_int_length;
                return result.toFixed(num_digits_after_point);
            } 
        } else {
            return result.toPrecission(output_precission);
        }
    } else {
        return result;
    }
}


const POWER = "POWER(";
let POWER_SEARCH_RESULT = search(data.formula, POWER);

function search(array, keyword) {
    let result_array = [];

    array.forEach((element, index) => {
        if (keyword == element) result_array.push(index);
    });
    return result_array;
}

function powerBaseGetter() {
    let power_bases = [];

    for(let i = 0; i < POWER_SEARCH_RESULT.length; i++) {
        let base = [];
        let parentheses_count = 0;

        power_index = POWER_SEARCH_RESULT[i];
        index = power_index - 1;

        while(index >= 0) {

            if(formula[index] == "(") parentheses_count--;
            if(formula[index] == ")") parentheses_count++;

            is_operator = formula[index] == ["+", "-", "/", "*"];
            is_power = formula[index] == POWER;

            if((is_operator && parentheses_count == 0) || is_power) break;

            base.unshift(formula[index]);
            index = index - 1;
        }
        power_bases.push(base.join(''));
    }
}

let BASES = powerBaseGetter(data.formula, POWER_SEARCH_RESULT);

let formula_str = data.formula.join('');

for(let i = 0; i < BASES.length; i++) {
    let toReplace = base + POWER;

    let replacement = "Math.pow("+ base + ",";

    formula_str = formula_str.replace(toReplace, replacement);
}


const FACTORIAL = "factorial";
let FACTORIAL_SEARCH_RESULT = search(data.formula, FACTORIAL);

function factorialNumberGetter() {

    let factorial_numbers = [];
    let factorial_sequence = 0;
    
    for(let i = 0; i < FACTORIAL_SEARCH_RESULT.length; i++) {
        let next_input_index =  FACTORIAL_SEARCH_RESULT[i] + 1;
        let next_input = formula[next_input_index];

        if (next_input == FACTORIAL) {
            factorial_sequence += 1;
            return;
        }

        let first_factorial_index = i - factorial_sequence;
        let previous_input_index = first_factorial_index - 1;

        while (previous_input_index >= 0) {

            if(formula[previous_input_index] == "(") parentheses_count--;
            if(formula[previous_input_index] == ")") parentheses_count++;

            is_operator = formula[previous_input_index] == ["+", "-", "/", "*"];

            if((is_operator && parentheses_count == 0)) break;

            number.unshift(formula[previous_input_index]);
            previous_input_index--;
        }
    }
    number_str = number.join('');
    let factorial = "factorial(";
    let close_parentheses = ")";
    let times = factorial_sequence + 1;
    
    
    let toReplace = number_str + FACTORIAL.repeat(times);
    let replacement = factorial.repeat(times) + number_str + close_parentheses.repeat(times);

    factorial_numbers.push({
        toReplace : toReplace,
        replacement : replacement
    });
    //let factorial_sequence = 0;
    return factorial_numbers;
}

let FACTORIALS_NUMBERS = factorialNumberGetter(data.formula, FACTORIAL_SEARCH_RESULT);

FACTORIALS_NUMBERS.forEach( factorial => {
    formula_str = formula_str.replace(factorial.toReplace, factorial.replacement);
})

function factorial(num) {

    if (num % 1 != 0) return gamma(num + 1);

    if (num === 0 || num === 1) return 1;

    let result = 1;

    for(let i = 1; i <= num; i++) {
        result = result * i;

        if(result === Infinity) return Infinity;
    }
    return result;
}

function gamma(n) {  // accurate to about 15 decimal places
    //some magic constants 
    var g = 7, // g represents the precision desired, p is the values of p[i] to plug into Lanczos' formula
        p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    if(n < 0.5) {
      return Math.PI / Math.sin(n * Math.PI) / gamma(1 - n);
    }
    else {
      n--;
      var x = p[0];
      for(var i = 1; i < g + 2; i++) {
        x += p[i] / (n + i);
      }
      var t = n + g + 0.5;
      return Math.sqrt(2 * Math.PI) * Math.pow(t, (n + 0.5)) * Math.exp(-t) * x;
    }
  }