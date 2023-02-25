function copyRight() {
    let now = new Date();
    let Year =  now.getFullYear();
    document.getElementById("copy-year").innerHTML = Year + ' ';
}

copyRight();