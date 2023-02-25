const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {

    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = Math.floor((seconds / 60) * 360) + 90;
    if (secondsDegrees === 450){
        secondsDegrees === 90;
        return secondsDegrees
    }
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log('s: ' + secondsDegrees);

    const minutes = now.getMinutes();
    const minutesDegrees = Math.floor((minutes/ 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    console.log('m: ' + minutesDegrees);

    const hours = now.getHours();
    const hoursDegrees = Math.floor((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    console.log('h: ' + hoursDegrees);
    console.log('-------');
}

setInterval(setDate, 1000);