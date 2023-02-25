/* Get our elements +++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

const player = document.querySelector('.tv__box');
const video = player.querySelector('.viewer');
//const controlBar = player.querySelector('.player__controls');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

const light = player.querySelector('.play__warning');

const fulscreen = player.querySelector('.fullscreen');

/* Our functions ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updatePlayButton() {
    const icon = this.paused ? '❚ ❚' : '▶';
    toggle.textContent = icon;

    const buttonColor = this.paused ? (toggle.style.background='rgba(179,0,18,0.22)') : (toggle.style.background='rgba(0,153,33,0.22)');
    toggle.innerContent = buttonColor;

    const warning = this.paused ? (light.style.background="rgba(179,0,18,0.4)") : (light.style.background='rgba(0,153,33,0.4)');
    light.innerContent = warning;
    light.style.animation = "none";

    setTimeout(() => {
        light.style.animation = "fadeOut 3s forwards";
    }, 3000);
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
    // this.dataset.skip is passing a string so need to convert to a number or float
    // in tutorial he use parseFloat, but Number also works
    // console.log(video.currentTime + '/' + this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const precent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${precent}%`;
}
// console.log(progress);

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    // console.log(scrubTime);
}

fulscreen.innerHTML = '<img class="fullscreenIcon" src="./img/full-screen-1-white.png" height="25px" width="25px" alt="">';

function fullscreenMode() {
    fulscreen.innerHTML = '';
    fulscreen.innerHTML = '<img class="fullscreenIcon" src="./img/full-screen-exit-white.png" height="25px" width="25px" alt="">';
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
}

/* Hook up the event listeners ++++++++++++++++++++++++++++++++++++++++++++ */

video.addEventListener('click', togglePlay);
video.addEventListener('keydown', togglePlay);
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);

video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
// classic code
// progress.addEventListener('mousemove', () => {
//     if(mousedown) {
//         scrub();
//     }
// });
// short arrowfunction
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousemove', () => mousedown = true);
progress.addEventListener('mousedown', () => mousedown = true);

fulscreen.addEventListener('click', fullscreenMode);