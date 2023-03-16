"use strict"

class Groente {
    constructor(groente) {
        this.naam = groente.naam;
        this.prijs = groente.prijs;

        this.getNaam = () => this.naam;
        this.getPrijs = () => this.prijs;
    }
}
const toonGroenten = (groentenLijst) => {
    //for (const groente of groentenLijst) {
    groentenLijst.forEach(groente => {
        const nieuweGroente = new Groente(groente);
        const option = document.createElement('option');
        option.innerHTML = `${nieuweGroente.getNaam()}&nbsp;-&nbsp;${nieuweGroente.getPrijs()}€`;
        option.value = `${nieuweGroente.getNaam()}`;
        option.setAttribute('data-prijs', `${nieuweGroente.getPrijs()}`);
        document.getElementById('groente').appendChild(option);  
    }); 
    openMandje();
    //document.querySelector('#mandje table').hidden = true;
}
function fetchGroenten () {
    fetch("groenten.json")
    .then(data => data.json())
    .then(data => {
        toonGroenten(data);
    });
    document.getElementById("keuzeFout").style.opacity = '1';
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
    // titel-rij invoeren
    setChild_adClassOrId('tr', mandje_tabel, 'id', 'titleRow', '');
    let title_row = document.getElementById('titleRow');
    setChild_adClassOrId('th', title_row, 'id', 'NaamTitle', 'Naam');
    setChild_adClassOrId('th', title_row, 'id', 'PrijsTitle', 'Prijs');
    setChild_adClassOrId('th', title_row, 'id', 'AantalTitle', 'Aantal');
    setChild_adClassOrId('th', title_row, 'id', 'TotaalTitle', 'Totaal');
    setChild_adClassOrId('th', title_row, 'id', 'DeleteTitle', '⌫'); // if no claas needed set to null?
}

// de inputs en de foutmeldingen selecteren en aanzetten
const keuze_lijst = document.getElementById("groente");
const aantal_input = document.getElementById("aantal");
const keuze_error = document.getElementById("keuzeFout");
const aantal_error = document.getElementById("aantalFout");
const add_button = document.getElementById('toevoegen');
// functie om de validity te testen van de input
// 
const checkValidity = () => {
    //console.log(keuze_lijst.selectedIndex > 0 && aantal_input.value !== "");
    aantal_input.value !== "" ? aantal_error.hidden = true : aantal_error.hidden = false;
    keuze_lijst.selectedIndex > 0 && aantal_input.value !== "" ? 
        add_button.disabled = false : add_button.disabled = true;
}
// functie om de validity te testen oproepen
keuze_lijst.onchange = () => {
    checkValidity();
    console.log(keuze_lijst.selectedIndex);
    keuze_lijst.selectedIndex > 0 ? 
        keuze_error.style.opacity = "0" : 
        keuze_error.style.opacity = "1";
}
aantal_input.oninput = () => checkValidity();

// functie om de de geseleceerde groente in het mandje te zetten en de prijs te berekenen
// er zit nog een conrole van de input in, maar die mag weg denk ik
let totaal = 0;
function selecteerGroente(geselecteerde, prijs, hoeveelheid, deleted) {
    if (document.getElementById('totaal_rij')) {
        document.getElementById('totaal_rij').remove()
    }
    if (geselecteerde !== "" && hoeveelheid !== "") {
        let tabel = document.getElementById('mandjeTable');
        setChild_adClassOrId('tr', tabel, 'class', 'rij', '');

        let subTotaal = Number(prijs) * Number(hoeveelheid);
        let groente_rij = document.querySelector('.rij');
        setChild_adClassOrId('th', groente_rij, 'class', 'naam', geselecteerde);
        setChild_adClassOrId('td', groente_rij, 'class', 'prijs', prijs);
        setChild_adClassOrId('td', groente_rij, 'class', 'aantal', hoeveelheid);
        setChild_adClassOrId('td', groente_rij, 'class', 'subTotaal', subTotaal);
        setChild_adClassOrId('td', groente_rij, 'class', 'remove', '');

        let link_td = document.querySelector('.rij .remove');
        setChild_adClassOrId('a', link_td, 'class', 'hyperlink', '');
        let hyperlink = document.querySelector('.rij .hyperlink');
        setChild_adClassOrId('img', hyperlink, 'class', 'trashbin', '');
        let vuilbak = document.querySelector('.rij .trashbin');
        vuilbak.src = 'vuilbak.png';

        // rij defenitiev class geven, anders word maar 1 rij aangemaakt/herkent
        groente_rij.classList.replace('rij', 'groente_rij');

        totaal += subTotaal;
        console.log(totaal);
        subTotaal = 0;
        let total_row = document.getElementById('mandjeTable').insertRow(-1);
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

        hyperlink.onclick = function() {
            let rij = hyperlink.parentElement.parentElement;
            let deletedTotaal = Number(rij.querySelector('.subTotaal').innerText);
            let totaal_cell = document.querySelector('#totaal_rij .totaal')
            totaal = totaal_cell.innerText;
            totaal -= deletedTotaal;
            console.log(deletedTotaal);
            totaal_cell.innerText = totaal.toFixed(2)
            const tr = this.parentElement.parentElement;
            tr.remove();
            let groente_lijst = document.getElementById('groente');
            groente_lijst.appendChild(deleted);
            groente_lijst.selectedIndex = 0; // select terugzetten

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
    const lijst = document.getElementById('groente');
    const geslecteerde = lijst.options[lijst.selectedIndex].value;
    const hoeveelheid = document.getElementById('aantal').value;
    const prijs = lijst.options[lijst.selectedIndex].dataset.prijs;
    let deletedOption = lijst.options[lijst.selectedIndex];
    deletedOption.remove();
    checkValidity();
    selecteerGroente(geslecteerde, prijs, hoeveelheid, deletedOption);
};