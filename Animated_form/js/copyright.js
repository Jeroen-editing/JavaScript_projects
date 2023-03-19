let rightsBox = document.getElementById('rights');

function copyRight() {
    let developer = '<a href="mailto:jdv.editing@gmail.com?subject=Saw your portfolio.">Jeroen De Vos </a>';
    let text = "Created by: <b>" + developer + "</b> ";
    let land = " Antwerp&bull;Belgium ";
    
    let now = new Date();
    let date = "june " + now.getFullYear() + " ";
    date = "june 2021 "

    let Year = text + date + "&hyphen;" + land;
    rightsBox.innerHTML = Year + ' ';
}

copyRight();