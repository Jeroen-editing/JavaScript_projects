const nav =
    document
        .querySelector('#nav');

const topOfNNav =
    nav
        .offsetTop;


function fixNav() {
    console.log(topOfNNav, window.scrollY);
    if (window.scrollY >= topOfNNav) {
        document.body.classList.add('fixed-nav');
        document.body.style.paddingTop = 1.2 * nav.offsetHeight + 'px';
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0 + 'px';
    }
}


window.addEventListener('scroll', fixNav);