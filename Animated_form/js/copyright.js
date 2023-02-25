let rightsBox = document.getElementById('rights');

function copyRight() {
    let developer = "Jeroen De Vos ";
    let text = "Created by: <b>" + developer + "</b> ";
    let land = " Antwerp&bull;Belgium ";
    let email = " <b>jdv.editing@gmail.com</>";
    
    let now = new Date();
    let date = " june " + now.getFullYear() + " ";

    let Year = text + "&hyphen;" + date + "&hyphen;" + land + "&hyphen;" + email;
    rightsBox.innerHTML = Year + ' ';
}

copyRight();