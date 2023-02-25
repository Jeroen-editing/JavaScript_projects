
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const legend = document.querySelector('legend');
    const form = document.querySelector('form');
    legend.style.color = 'navajowhite';
    legend.style.textShadow = '1px 1px 2px black';
    form.style.backgroundColor = '#5c5c5c';
}

// Regular =======================================================
console.log('hello');


// Interpolated ==================================================
console.log('Hello I am a %s string!', '👽');
// easier to do it like this
let alien = '🎥';
console.log(`Hello I am a ${alien} string!`);


// Styled =========================================================
console.log('%c I am just a silly text, but you know that.', 'font-size:18px; color:#FF0900; background: darkcyan; text-shadow: 1px 1px 2px black; padding: 4px 6px')


// warning! =======================================================
console.warn('OH NOOOOO !!! What happened here?');


// Error : | ======================================================
console.error('OH SHIT !!! What happened here?');


// Info ===========================================================
console.info('Crocediles eat 3 to 4 people per year.');


// Testing ========================================================
console.assert(1 === 5,'That is wrong, you know that!');
// FALSE so message will be shown

const legend = document.querySelector('legend');

console.assert(legend.classList.contains('devLegend'), 'That is correct, you know that!');
// won't show anything, cause TRUE
console.assert(legend.classList.contains('ouch'), 'That is wrong, you know that!');
// FALSE so message will be shown


// clearing =======================================================
// console.clear(); // will clear console


// Viewing DOM Elements ===========================================
let input = document.querySelector('input');
console.log(input); // in firefox this is giving all info about the element, child's, classes,...
// in chrome only the html code
console.dir(input); // so in chrome you need to to 'dir' to get all the info


console.clear();
console.log('%c Remove "clear" to see the earlier examples!', 'font-size:14px; color:#FF0900');
// Grouping together ===============================================
console.log('%c - - - - - - - - SEPARATED - - - - - - - - - - -', 'font-size:14px; color:#00B333');
dogs.forEach(dog => {
   console.log(`This is ${dog.name}`);
   console.log(`${dog.name} is ${dog.age} years old`);
   console.log(`So ${dog.name} is ${dog.age * 7} years old in 'dog years'`);
});

console.log('%c - - - - - - - - GROUPED OPEN - - - - - - - - -', 'font-size:14px; color:#00B333');

dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`So ${dog.name} is ${dog.age * 7} years old in 'dog years'`);
    console.groupEnd();
});

console.log('%c - - - - - - - - GROUPED COLAPSED - - - - - - -', 'font-size:14px; color:#00B333');

dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`So ${dog.name} is ${dog.age * 7} years old in 'dog years'`);
    console.groupEnd();
});


// counting ========================================================
// console.count('Lisa');
// console.count('Sam');
// console.count('Lisa');
// console.count('Lisa');
// console.count('Lisa');
// console.count('Sam');
// console.count('Lisa');
// console.count('Sam');
// console.count('Lisa');
// console.count('Lisa');
// console.count('Sam');
// console.count('Sam');
// console.count('Lisa');
// console.count('Sam');


// timing ==========================================================
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });


// table ===========================================================
console.table(dogs);
