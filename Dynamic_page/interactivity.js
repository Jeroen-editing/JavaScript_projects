//---------------- SLIDESHOW ------------------//
let slideIndex = 1;
let captionText = document.getElementById('caption');

const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName('slides');
    let dots = document.getElementsByClassName('demo');

    n > slides.length ? slideIndex = 1 : slideIndex = slideIndex;
    n < 1 ? slideIndex = slides.length : slideIndex = slideIndex;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace('active', '');
    }
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += 'active';
    captionText.innerHTML = `<p class="img_number"> ${n} / 6 </p><p class="img_text"> ${dots[slideIndex-1].alt}</p>`;
}

showSlides(slideIndex);

const plusSlides = (n) => {
    showSlides(slideIndex += n)
}

const currentSlide = (n) => {
    showSlides(slideIndex = n);
    stopInterval();
}

let photoArray = ["sea.jpg", "canyon.jpg", "mountain.jpg", "vulcano.jpg", "lake.jpg", "portal.jpg"];
let photoComments =["Our seaside view", "Our canyon resort view", "Our moutain cabin view", "Our island view", "Our lake view", "Our relaxation center"];
let maxIndex = photoArray.length - 1;
let firstImage = document.getElementById("first_img");

const showPhoto = () => {
    firstImage.src = `assets/slideshow/${photoArray[slideIndex]}`;
    captionText.innerHTML = `<p class="img_number"> ${slideIndex} / 6 </p><p class="img_text"> ${photoComments[slideIndex]}`;
    firstImage.style.transition = `opacity 2s ease-in-out`;
}
const first = () => {
    slideIndex = 0           
    showPhoto();
}
const next = () => {
    slideIndex += 1;
    if (slideIndex === photoArray.length) {
        slideIndex = 0;
    }
    showPhoto();
}
let interval = 0;
const startInterval = () => {
    if (interval == 0) {
        interval= setInterval('next()', 2000);
    }
}
startInterval();
const stopInterval = () => {
    clearInterval(interval);
    interval = 0;
    firstImage.src = `assets/slideshow/${photoArray[0]}`;
}


//---------------- STICKY NAV ------------------//
const nav = document.querySelector('#stickyNav');

const topOfNav = nav.offsetTop;

const fixNav = () => {
    //console.log(topOfNav, window.scrollY);
    if (window.scrollY >= topOfNav) {
        document.body.classList.add('fixed_nav');
        //document.body.style.paddingTop = 1.2 * nav.offsetHeight + 'px';
        //document.body.style.paddingTop = `(1.2 * ${nav.offsetHeight})px`;
    } else {
        document.body.classList.remove('fixed_nav');
        //document.body.style.paddingTop = 0 + 'px';
        //document.body.style.paddingTop = `0px`;
    }
}


//---------------- FOLLOW NAV ------------------//
const triggers = document.querySelectorAll('.nav_list > .nav_item');
const background = document.querySelector('.dropBg');
const nav_base = document.querySelector('.main_nav');

function handleEnter() {
    this.classList.add('trigger_enter');

    setTimeout(() => 
        this.classList.contains('trigger_enter')
        && this.classList.add('trigger_enter_active'), 100);
    
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav_base.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    };
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
    this.classList.remove('trigger_enter');
    setTimeout(() => this.classList.remove('trigger_enter_active'),50);

    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));


//---------------- FOLLOW ALLONG HIGHLIGHTS ------------------//

const targets = document.querySelectorAll('.text_link');
const highlight = document.createElement('p');

highlight.classList.add('highlight');

document.body.append(highlight);

function highlightLink() {
    const linkCoords = this.getBoundingClientRect();

    const coords = {
        width : linkCoords.width,
        height : linkCoords.height,
        top : linkCoords.top + window.scrollY,
        left : linkCoords.left + window.scrollX
    };

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;

    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

targets.forEach(a => a.addEventListener('mouseenter', highlightLink));

//---------------- PHOTO SLIDE INS ------------------//

let photoSpace = document.querySelectorAll('.photo_box');
let specialSpace = document.querySelectorAll('.special_box');

const setImage = (photo, w, h) => { 
    let child = photo.childNodes;
    //console.log(w, h);
    //console.log(child);
    child[1].src = `https://unsplash.it/${w}/${h}`;
}

let window_width = window.innerWidth;

function getSize(e) {
    let log = getComputedStyle(e);
    let w = Number(Math.round((log.width).replace('px', '')));
    let h = Number(Math.round((log.height).replace('px', '')));
    //console.log(windowWidth);

    const getRandom = (min, max) => {
        return Math.random() * (max - min) + min;
    }
    if(window_width < 768) {
        h = Math.round(w / getRandom(2, 3));
    } else {
        if (h < 30) {
            h = 110;

        } else {
            h = h -10;
        }
        //console.log(h);
    }
    //console.log(w, h);
    setImage(e, w, h);
}
function getSpecialSize(e) {
    let log = getComputedStyle(e);
    let w = Number(Math.round((log.width).replace('px', '')));
    let h = Number(Math.round((log.height).replace('px', '')));

    const getRandom = (min, max) => {
        return Math.random() * (max - min) + min;
    }
    if(window_width < 768) {
        h = Math.round(w / getRandom(2, 3));
    } else {
        h = h + 100;
        //console.log(h);
    }
    //console.log(w, h);
    setImage(e, w, h);
}

photoSpace.forEach(box => getSize(box));
specialSpace.forEach(box => getSpecialSize(box));


const  sliderImages = document.querySelectorAll('.slide_in');

const debounce = (func, wait = 20, immediate = true) => {
    let timeout;

    return () => {
        let context = this, args = arguments;
        let later = () => {
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    }
}

const checkSlide = () => {
    sliderImages.forEach(image => {
        const slideInAt = (window.scrollY + window.innerHeight) - image.height / 3;
        //console.log("a: " + slideInAt);

        const imageBottom = image.offsetTop + image.height;
        //console.log("b: " + imageBottom);

        const isHalfShown = slideInAt > image.offsetTop;
        //console.log("c: " + isHalfShown);

        const isNotScrolledPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrolledPast) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', () => {
    fixNav();
    debounce(checkSlide());
});


//---------------- PHOTO DRAG ------------------//
const slider = document.querySelector('.photo_drag');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;

    slider.classList.add('drag');

    startX = e.pageX - slider.offsetLeft;

    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;

    slider.classList.remove('drag');
});

slider.addEventListener('mouseup', () => {
    isDown = false;

    slider.classList.remove('drag');
});

slider.addEventListener('mousemove', () => {
    if(!isDown) return;

    e.preventDefault();

    const cursorPosition = e.pageX - slider.offsetLeft;

    const distanceMoved = (cursorPosition - startX);

    slider.scrollLeft = scrollLeft - distanceMoved;
});


//---------------- FLEX PANELS ------------------//
console.log(window_width);
if (window_width < 768) {
    const panel_box = document.getElementById('panel_box');
    panel_box.classList.replace('photo_panels_box', 'replace_box')
    panel_box.innerHTML = '';
    panel_box.innerHTML = ` <div class="replace replace1">
                                <p class="smallP topline">Hey</p>
                                <p class="bigP">Let's</p>
                                <p class="smallP bottomline">Move</p>
                            </div>
                            <div class="replace replace2">
                                <p class="smallP topline">Give</p>
                                <p class="bigP">take</p>
                                <p class="smallP bottomline">Receive</p>
                            </div>
                            <div class="replace replace3">
                                <p class="smallP topline">Experience</p>
                                <p class="bigP">it</p>
                                <p class="smallP bottomline">Today</p>
                            </div>
                            <div class="replace replace4">
                                <p class="smallP topline">Give</p>
                                <p class="bigP">all</p>
                                <p class="smallP bottomline">You can</p>
                            </div>
                            <div class="replace replace5">
                                <p class="smallP topline">Life</p>
                                <p class="bigP">in</p>
                                <p class="smallP bottomline">Motion</p>
                            </div>`;

    let smalle_texts = document.querySelectorAll('.replace .smallP');
    smalle_texts.forEach(item => item.style.opacity = '0');

    const setTiming = (box, timeA, timeB) => {
        let top_text = document.querySelector(`${box} .topline`);
        let bottom_text = document.querySelector(`${box} .bottomline`);
        let panel = document.querySelector(`${box}`);
        setTimeout(() => {
            top_text.style.animation = 'fadeInHold 3s 1';
            bottom_text.style.animation = 'fadeInHold 3s 1';
            panel.style.animation = 'fadeInBg 3s 1';
        } , timeA);
        setTimeout(() => {
            top_text.style.animation = 'fadeOut 2s 1';
            bottom_text.style.animation = 'fadeOut 2s 1';
            panel.style.animation = 'fadeOutBg 2s 1';
        } , timeB);
    }
    const displayText = () => {
        setTiming(".replace1", 1500, 4500);
        setTiming(".replace5", 5500, 8500);
        setTiming(".replace3", 9500, 12500);
        setTiming(".replace2", 13500, 16500);
        setTiming(".replace4", 17500, 20500);
        setTiming(".replace3", 21500, 23500);
    }
    const startDisplay = () => {
        displayText();
        setInterval(displayText, 25000);
    }
    startDisplay();

} else {
    const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
        this.classList.toggle('open');
        const close = () => {
            this.classList.remove('open');
        }
        setTimeout(close, 3000);

        const addAddRemoveText = () => {
            this.classList.toggle('open_active');
            const removeText = () => {
                this.classList.remove('open_active');
            }
            setTimeout(removeText, 2000)
        }
        setTimeout(addAddRemoveText, 1000);
    }
    /*
    function toggleActive(e) {
        if(e.propertyName.includes('flex')) {
            this.classList.toggle('open_active');
            const removeText = () => {
                this.classList.remove('open_active');
            }
            setTimeout(removeText, 2800)
        }
    }
    */
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    //panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
}


//---------------- VIDEO ------------------------//
const tv = document.querySelector('.tv_box');
const viewer = tv.querySelector('.viewer');

const toggle = tv.querySelector('.toggle');
const skipButtons = tv.querySelectorAll('[data-skip]');
const progress = tv.querySelector('.progress');
const progressBar = tv.querySelector('.progress_filled');
const light = tv.querySelector('.play_warning');
const sound = tv.querySelector('.player_slider');


const togglePlay = () => {
    const method = viewer.paused ? 'play' : 'pause';
    viewer[method]();
}
function updatePlayButton() {
    const icon = this.paused ? '❚ ❚' : '▶';
    toggle.textContent = icon;

    const buttonColor = this.paused ? (toggle.style.background='rgba(118,14,14,.3)') : (toggle.style.background='rgba(12, 68, 84, .6)');
    toggle.innerContent = buttonColor;

    const warning = this.paused ? (light.style.background='rgba(118,14,14,.6)') : (light.style.background='rgba(12, 68, 84, .8)');
    light.innerContent = warning;
}
function skip() {
    viewer.currentTime += parseFloat(this.dataset.skip);
}
function handleRangeUpdate() {
    viewer[this.name] = this.value;
}
function handleProgress() {
    const precent = (viewer.currentTime / viewer.duration) * 100;
    progressBar.style.flexBasis = `${precent}%`;
}
function scrub(e) {
    //console.log(e.offsetX);
    const scrubTime = (e.offsetX / progress.offsetWidth) * viewer.duration;
    viewer.currentTime = scrubTime;
}


viewer.addEventListener('click', togglePlay);
viewer.addEventListener('keydown', togglePlay);
viewer.addEventListener('play', updatePlayButton);
viewer.addEventListener('pause', updatePlayButton);

viewer.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

sound.addEventListener('change', handleRangeUpdate);
sound.addEventListener('mousemove', handleRangeUpdate);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousemove', () => mousedown = true);
progress.addEventListener('mousedown', () => mousedown = true);
