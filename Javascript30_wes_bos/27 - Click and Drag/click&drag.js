const slider =
    document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    //console.log(e.pageX +  ' / ' + e.pageY);
    startX =
        e.pageX - slider.offsetLeft;
    //console.log(startX);
    scrollLeft =
        slider.scrollLeft
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', () => {
    if (!isDown) return;  // stop func from running
    // console.count(isDown);
    // console.log(startX);
    e.preventDefault();
    const cursorPosition =
        e.pageX - slider.offsetLeft;

    const distanceMoved = (cursorPosition - startX); // for every px moved scroll 3 times the distance

    slider.scrollLeft =
        scrollLeft - distanceMoved;
});