const divs =
    document
        .querySelectorAll('div');

const button =
    document
        .querySelector('button');


// function logText(e) {
//     console.log(this.classList.value);
// }

function logText(e) {
    console.log(this.classList.value);
    // e.stopPropagation(); // = stop bubbling up
}

//document.body.addEventListener('click', logText);
//divs.forEach(div => div.addEventListener('click', logText));

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false, // default = false = bubbling up // true = stop bubbling up
    once: true // eventListener is turned off after 1 time used
}));

button.addEventListener("click", () => {
    console.log('Click !!!');
}, {
    once: true // button works only one time
});