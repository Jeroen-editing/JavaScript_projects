let popUp = document.getElementById('popUp');

let regionButton = document.getElementById('region_btn');

let mask = document.getElementById('mask_overlay');

function showPopUp() {
    popUp.style.cursor = "pointer";
    popUp.classList.remove('popup_hidden');
    popUp.classList.add('popup_shown');
    mask.classList.remove('overlay_hidden');
    mask.classList.add('overlay_shown')
}

function hidePopUp() {
    popUp.classList.remove('popup_shown');
    popUp.classList.add('popup_hidden');
    mask.classList.remove('overlay_shown')
    mask.classList.add('overlay_hidden');
}

regionButton.addEventListener('mouseover', showPopUp);

popUp.addEventListener('mouseleave' , hidePopUp);