function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}


const  sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {

    sliderImages.forEach(sliderImage => {
        // halfway through the image to slide in
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        console.log(slideInAt);
        // bottom or end of the image to slide back out (to reverse when scroll back up)
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        console.log(imageBottom);
        // to see if image is half shown
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        console.log(isHalfShown);
        // to see if image is not totaly passed yet
        const isNotScrolledPast = window.scrollY <  imageBottom;
        console.log(isNotScrolledPast);

        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));