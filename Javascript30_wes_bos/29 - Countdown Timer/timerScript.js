let countdown;

const timerDisplay =
    document.querySelector('.display__time-left');

const secondDisplay =
    document.querySelector('.second__time-left');

const endTime =
    document.querySelector('.display__end-time');

const buttons =
    document.querySelectorAll('[data-time]');

function timer(seconds) {
    // first clear any running timer
    clearInterval(countdown);

    // setInterval(function () {
    //     seconds--;
    // }, 1000);
    // PROBLEM with this code, it will stop running (browsers stops running it)

    const now =
        Date.now();
        // (new Date()).getTime(); old way of writing

    const then =
        now + seconds * 1000;

    //console.log({now, then});

    displayTimeLeft(seconds); // to display the first second and repeat it after interval (see down)
    displayEndTime(then);

    countdown =
        setInterval(() => {
            const secondsLeft =
                Math.round((then - Date.now()) / 1000);

            // check if it shold stop (when timer is at 0)
            if (secondsLeft < 0) {
                clearInterval(countdown);
                return;
            }
            // display it
            displayTimeLeft(secondsLeft);
            // but then it won't display the first second, so we need to run it 1 time before
            // the interval function (sse up)

        }, 1000);

}

//timer(10); // to test function


function displayTimeLeft(seconds) {

    const hours =
        Math.floor(seconds / 3600);

    // function countMinutes() {
    //     if (hours >= 1) {
    //         return Math.floor((seconds - (hours * 3600)) / 60);
    //     } else {
    //         return Math.floor(seconds / 60);
    //     }
    // }
    // const minutes =
    //     countMinutes();

    const minutes =
        Math.floor((seconds % 3600) / 60);

    const remainderSeconds =
        seconds % 60;

    const display =
        `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

    timerDisplay.textContent =
        display;

    secondDisplay.textContent =
        display;

    document.title =
        display;
}

function displayEndTime(timeStamp) {
    const end =
        new Date(timeStamp);

    const hour =
        end.getHours();

    const minute =
        end.getMinutes();

    const second =
        end.getSeconds();

    endTime.textContent =
        `${hour < 10 ? '0' : ''}${hour}:${minute < 10 ? '0' : ''}${minute}:${second < 10 ? '0' : ''}${second}`;

}

function startTimer() {
    const seconds =
        parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.timeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const hrs =
        this.hours.value;
    const mins =
        this.minutes.value;
    console.log('h: ' + hrs, 'm: ' + mins);
    const secs =
        ((hrs * 3600) + (mins * 60));
    timer(secs);
    console.log('secs: ' + secs);
    this.reset(); // to clear input
});

/*
document.timeForm.hours
document.timeForm.minutes*/
