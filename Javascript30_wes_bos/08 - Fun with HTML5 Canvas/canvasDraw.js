const canvas =  document.querySelector('#draw'); // select the canvas from the html

const context = canvas.getContext('2d'); // select the context from the canvas

// don't set the js canvas to the original html canvas !!!!!!
// in tutorial they do :
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// but this is setting canvas to full screen

// add the beginning values and drawing style
context.strokeStyle = 'BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 20;
// mixing colors when you draw over a line
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Compositing
context.globalCompositeOperation = 'screen';

// start values is NOT drawing pr false
let isDrawing = false;

// the last values after drawing
let lastX = 0;
let lastY = 0;

// setting the color
let hue = 0;

// var for reversing the change of line width after hue = 360
let direction = true;

// the actual function for drawing
function draw(e) {
    if (!isDrawing) return; // stops the function from running when they ar e not moused

    console.log(e); //console the mouse coordinates

    // beginning value for the color of the drawing
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    context.beginPath();
    // start from
    context.moveTo(lastX, lastY);
    // go to
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    // update the x and y position
    [lastX, lastY] = [e.offsetX, e.offsetY];

    //switching color while you are drawing
    hue++;
    // resetting the color to begin value red, just to be safe
    // (normally automatically with hsl)
    if (hue >= 360) {
        hue = 0
    }

    // changing the line width from thicker to smaller during dawing
    if (context.lineWidth >= 100 || context.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) {
        context.lineWidth++;
    } else {
        context.lineWidth--;
    }

}

// put mousedown in a function so it updates the x & y and starts drawing drom there
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});


//the mouse commands --> what if mouse ...
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

