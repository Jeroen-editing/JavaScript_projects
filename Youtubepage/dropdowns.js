// ***********************  SIDEBAR  **********************************************************************

let sidebarShow = document.getElementById('show-sidebar');
let sidebarHide = document.getElementById('hide-sidebar');

let sidebar = document.getElementById('hidden-sidebar');
let overlay = document.getElementById('overlay');

sidebarShow.addEventListener('click', showSlidebar);

function showSlidebar() {

    sidebar.classList.add('sidebar-shown');
    sidebar.classList.remove('sidebar-hide');
    overlay.style.display = 'block';
    overlay.classList.add('animate-overlay');
}

sidebarHide.addEventListener('click', hideSlidebar);

function hideSlidebar() {

    sidebar.classList.remove('sidebar-shown');
    sidebar.classList.add('sidebar-hide');
    overlay.style.display = 'none';
    overlay.classList.remove('animate-overlay');
}
hideSlidebar();

// ***********************   TABLE   **********************************************************************

let btnTable = document.getElementById('table-button');

function dropdownTable () {
    let table = document.getElementById('hidden-table')

    if (table.className.indexOf("table-show") == -1) {
        table.className += " table-show";
        btnTable.innerText = "";
        btnTable.innerText = "Show less";

    } else {
        table.className = table.className.replace(" table-show", "");
        btnTable.innerText = "";
        btnTable.innerText = "Show more";
    }
}

btnTable.addEventListener('click', dropdownTable);



// ***********************   MENU   ***********************************************************************

let btnMenu = document.getElementById('sort-button');

function dropdownMenu () {
    let menu = document.getElementById('hidden-menu');

    if (menu.className.indexOf("menu-show") == -1) {
        menu.className += " menu-show";

    } else {
        menu.className = menu.className.replace(" menu-show", "");
    }
}

btnMenu.addEventListener('click', dropdownMenu);


// ***********************   SIGNI IN & SUBSCRIBE   *******************************************************

let btnSubscribeSignIn = document.getElementById('subscribe-signin-button');


function dropdownSubscribeSignIn () {
    let subscribeSignIn = document.getElementById('hidden-subscribe-sigin');


    if (subscribeSignIn.className.indexOf("subscribe-sigin-show") == -1) {
        subscribeSignIn.className += " subscribe-sigin-show";

    } else {
        subscribeSignIn.className = subscribeSignIn.className.replace(" subscribe-sigin-show", "");
    }
}

btnSubscribeSignIn.addEventListener('click', dropdownSubscribeSignIn);