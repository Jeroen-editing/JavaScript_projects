"use strict"

const toonGroenten = (groentenLijst) => {
    groentenLijst.forEach(groente => {
        const option = document.createElement('option');
        option.innerHTML = `${groente.naam}&nbsp;&nbsp;---&nbsp;&nbsp;${groente.prijs} €`;
        option.value = groente.naam;
        option.setAttribute('data-prijs', `${groente.prijs}`);
        document.getElementById('groente').appendChild(option);  
    }); 
    openMandje();
    document.querySelector('#mandje table').hidden = true;
}
function fetchGroenten () {
    fetch("groenten.json")
    .then(data => data.json())
    .then(data => {
        toonGroenten(data);
    });
    document.getElementById('keuzeFout').style.opacity = '1';
    document.getElementById('aantalFout').style.opacity = '1';
    document.getElementById('toevoegen').disabled = true;
}
fetchGroenten();

// functie om elementan aan te maken en van class of id te voorzien
const setChild_adClassOrId = (tag, parnt, attr, name, text,) => {
    let element = document.createElement(`${tag}`);
    parnt.appendChild(element);
    element.setAttribute(`${attr}`, `${name}`);
    element.innerText = text;
}
// functie om het mandje aan te maken met tabel en tittelrij
function openMandje() {
    // eerst de div maken en na button invoegen => met .after(element)
    const mandje = document.createElement('div');
    mandje.setAttribute('id', 'mandje');
    document.querySelector('.table_box').appendChild(mandje);
    // tabel invoeren
    setChild_adClassOrId('table', mandje, 'id', 'mandjeTable', '');
    let mandje_tabel = document.getElementById('mandjeTable');
    // tabel head invoeren
    setChild_adClassOrId('thead', mandje_tabel, 'id', 'mandjeTHead', '');
    let tabel_head = document.getElementById('mandjeTHead');
    // titel-rij invoeren
    setChild_adClassOrId('tr', tabel_head, 'id', 'titleRow', '');
    let title_row = document.getElementById('titleRow');
    setChild_adClassOrId('th', title_row, 'id', 'naamTitle', 'Naam');
    setChild_adClassOrId('th', title_row, 'id', 'prijsTitle', 'Prijs');
    setChild_adClassOrId('th', title_row, 'id', 'aantalTitle', 'Aantal');
    setChild_adClassOrId('th', title_row, 'id', 'totaalTitle', 'Totaal');
    setChild_adClassOrId('th', title_row, 'id', 'deleteTitle', '⌫'); // if no claas needed set to null?
    // tabel body invoeren
    setChild_adClassOrId('tbody', mandje_tabel, 'id', 'mandjeTBody', '');
    // tabel footer invoeren
    setChild_adClassOrId('tfoot', mandje_tabel, 'id', 'mandjeTFoot', '');
}

// de inputs en de foutmeldingen selecteren en aanzetten
const keuze_lijst = document.getElementById("groente");
const aantal_input = document.getElementById("aantal");
const keuze_error = document.getElementById("keuzeFout");
const aantal_error = document.getElementById("aantalFout");
const add_button = document.getElementById('toevoegen');

// functie om de validity te testen van de input
// had het eerst met .hidden gedaan en dat werkte perfect, maar door css veranderingen niet meer (?)
// daarom nu via .style.opacity
const checkValidity = () => {
    keuze_lijst.selectedIndex > 0 && aantal_input.value !== "" ? 
        add_button.disabled = false : add_button.disabled = true;
}
// functie om de validity te testen oproepen
keuze_lijst.onchange = () => {
    checkValidity();
    keuze_lijst.selectedIndex > 0 ? 
        keuze_error.style.opacity = "0" : 
        keuze_error.style.opacity = "1";
}
aantal_input.oninput = () => {
    checkValidity();
    aantal_input.value !== "" ?
        aantal_error.style.opacity = '0' :
        aantal_error.style.opacity = '1';
}

// functie om de de geseleceerde groente in het mandje te zetten en de prijs te berekenen
// er zit nog een conrole van de input in, maar die mag weg denk ik
let totaal = 0;
function selecteerGroente(geselecteerde, prijs, hoeveelheid, deleted) {
    if (document.getElementById('totaal_rij')) {
        document.getElementById('totaal_rij').remove()
    }
    if (geselecteerde !== "" && hoeveelheid !== "") {
        let tabel_body = document.getElementById('mandjeTBody');
        setChild_adClassOrId('tr', tabel_body, 'class', 'rij', '');

        let subTotaal = Number(prijs).toFixed(2) * Number(hoeveelheid).toFixed(2);
        let groente_rij = document.querySelector('.rij');
        setChild_adClassOrId('td', groente_rij, 'class', 'naam', geselecteerde);
        document.querySelector('.naam').setAttribute('colspan', '1');
        setChild_adClassOrId('td', groente_rij, 'class', 'prijs', prijs);
        setChild_adClassOrId('td', groente_rij, 'class', 'aantal', hoeveelheid);
        setChild_adClassOrId('td', groente_rij, 'class', 'subTotaal', subTotaal.toFixed(2));
        setChild_adClassOrId('td', groente_rij, 'class', 'remove', '');

        let link_td = document.querySelector('.rij .remove');
        setChild_adClassOrId('a', link_td, 'class', 'hyperlink', '');
        let hyperlink = document.querySelector('.rij .hyperlink');
        setChild_adClassOrId('img', hyperlink, 'class', 'trashbin', '');
        let vuilbak = document.querySelector('.rij .trashbin');
        vuilbak.src = 'bin_white.png';

        // rij defenitiev class geven, anders word maar 1 rij aangemaakt/herkent
        groente_rij.classList.replace('rij', 'groente_rij');
        
        totaal += subTotaal;
        console.log(totaal);
        subTotaal = 0;
        let total_row = document.getElementById('mandjeTFoot').insertRow(-1);
        total_row.setAttribute('id', 'totaal_rij');
        let long_cell = total_row.insertCell(0);
        let prijs_cell = total_row.insertCell(1);
        let empty_cell = total_row.insertCell(2);
        long_cell.setAttribute('colspan', '3')
        long_cell.setAttribute('class', 'totaalTitel');
        long_cell.innerText = 'Totaal';
        prijs_cell.innerText = totaal.toFixed(2);
        prijs_cell.setAttribute('class', 'totaal')
        empty_cell.setAttribute('class', 'empty');
        empty_cell.innerText = '€'

        hyperlink.onclick = function() {
            let rij = hyperlink.parentElement.parentElement;
            let deletedTotaal = Number(rij.querySelector('.subTotaal').innerText);
            let totaal_cell = document.querySelector('#totaal_rij .totaal')
            totaal = totaal_cell.innerText;
            totaal -= deletedTotaal;
            //console.log(deletedTotaal);
            totaal_cell.innerText = totaal.toFixed(2)
            const tr = this.parentElement.parentElement;
            tr.remove();
            let groente_lijst = document.getElementById('groente');
            groente_lijst.appendChild(deleted);
            groente_lijst.selectedIndex = 0; // select terugzetten

            if (totaal === 0) total_row.remove();
            if (document.getElementById('mandjeTBody').innerHTML === ""){
                document.querySelector('#mandje table').hidden = true;
            }

            // select sorteren werkte niet ???
            // me eerst een array te maken werkt het al gedeeltelijk
            /*
            let arrOfList = [];
            for(let i = groente_lijst.length - 1; i > 1; i--) {
                arrOfList.push(groente_lijst[i].innerText);
            }
            groente_lijst = "";
            arrOfList = arrOfList.sort();
            let new_option = document.createElement('option');
            for(let j = 0; j < arrOfList.length; j++) {
                new_option.innerText = arrOfList[j];
                document.getElementById('groente').appendChild(new_option);
            }
            */
        }
    }
}
document.getElementById('toevoegen').onclick = () => {
    document.querySelector('#mandje table').hidden = false;
    document.getElementById("keuzeFout").style.opacity = "1";
    const lijst = document.getElementById('groente');
    const geslecteerde = lijst.options[lijst.selectedIndex].value;
    const hoeveelheid = document.getElementById('aantal').value; 
    const prijs = lijst.options[lijst.selectedIndex].dataset.prijs;
    let deletedOption = lijst.options[lijst.selectedIndex];
    deletedOption.remove();
    checkValidity();
    selecteerGroente(geslecteerde, prijs, hoeveelheid, deletedOption);
};