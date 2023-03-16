const speed =
    document.querySelector('.speed');

const bar =
    speed.querySelector('.speed-bar');

const amount =
    bar.querySelector('.amount');

const video =
    document.querySelector('.flex');



// speed.addEventListener('mousemove', function (e) {
//     //console.log(e);
//     const position =
//         e.pageY - this.offsetTop
//     //console.log(position);
//
//     const percent =
//         (position / this.offsetHeight)  //.toFixed(2);  he does it later on
//     //console.log(percent);
//
//     const min = 0.4;
//     const max = 4;
//
//     const height =
//         Math.round(percent * 100) + '%';
//     //console.log(height);
//
//     bar.style.height = height;
//
//     const playbackRate = (percent * (max - min) + min).toFixed(2);
//     console.log(playbackRate);
//     amount.textContent = playbackRate + 'x';
//
//     video.playbackRate = playbackRate;
// });


function handleSpeed(e) {

    const position =
        e.pageY - this.offsetTop;
    const percent =
        (position / this.offsetHeight);  //.toFixed(2);  he does it later on
    const min = 0.4;
    const max = 4;
    const height =
        Math.round(percent * 100) + '%';

    bar.style.height = height;

    const playbackRate = (percent * (max - min) + min).toFixed(2);

    amount.textContent = playbackRate + 'x';

    // EXTRA: personal input to warn for min and max speed
    if (playbackRate < 0.48 || playbackRate > 3.9) {
        amount.style.color = 'red';
    } else {
        amount.style.color = '#dadada';
    }

    video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove',handleSpeed);