class Groente {
    constructor(groente) {
        this.naam = groente.naam;
        this.prijs = groente.prijs;
        this.eenheid = groente.eenheid;

        this.getNaam = () => this.naam;
        this.getPrijs = () => this.prijs;
        this.getEenheid = () => this.eenheid;
    }
}

const verwerkGroenten = groentenLijst => {
    for (const groente of groentenLijst) {
        const nieuweGroente = new Groente(groente);
        //console.log(nieuweGroente);
        //console.log(nieuweGroente.getNaam());
        const option = document.createElement('option');
        //console.log('testprijs ' + nieuweGroente.getPrijs());
        option.innerText = `${nieuweGroente.getNaam()}`;
        option.setAttribute('data-prijs', `${nieuweGroente.getPrijs()}`);
        document.getElementById('groente').appendChild(option);
    }
}

function toonGroenten () {
    fetch("groenten.json")
    .then(groenten => groenten.json())
    .then(groenten => {
        //console.log(groenten); 
        verwerkGroenten(groenten);    
    })
}
toonGroenten();

document.getElementById("keuzeFout").hidden = true;
document.getElementById("aantalFout").hidden = true;
document.getElementById('toevoegen').onclick = function () {
    if (! document.getElementById("groente").checkValidity() &&
    ! document.getElementById("aantal").checkValidity()) {
        document.getElementById("keuzeFout").hidden = false;
        document.getElementById("aantalFout").hidden = false;
    } else {
        const lijst = document.getElementById('groente');
        const geslecteerde = lijst.options[lijst.selectedIndex].value;
        const hoeveelheid = document.getElementById('aantal').value;
        const prijs = lijst.options[lijst.selectedIndex].dataset.prijs;
        openMandje();
        let deletedOption = lijst.options[lijst.selectedIndex];
        deletedOption.remove();
        selecteerGroente(geslecteerde, hoeveelheid, prijs, deletedOption);
    }
    
}
function openMandje() {
    const mandje = document.createElement('div');
    mandje.setAttribute('id', 'mandje');
    document.querySelector('#toevoegen').after(mandje);
    const mandje_tabel = document.createElement('table');
    mandje.appendChild(mandje_tabel)
    const mandje_tr = document.createElement('tr');
    mandje_tr.setAttribute('id', 'mandje_tr');
    mandje_tabel.appendChild(mandje_tr);

}

function selecteerGroente(geselecteerde, hoeveelheid, prijs, deleted) {
    const naam = geselecteerde;
    const aantal = hoeveelheid;
    if (geselecteerde !== "" && aantal !== "") {
        let mandjeRij = document.getElementById('mandje_tr');
/*
        const titel_naam = document.createElement('th');
    titel_naam.innerText = "Groente";
    mandjeRij.appendChild(titel_naam);
    const titel_aantal = document.createElement('th');
    titel_aantal.innerText = "Aantal";
    mandjeRij.appendChild(titel_aantal);
    const titel_prijs = document.createElement('th');
    titel_prijs.innerText = "Prijs";
    mandjeRij.appendChild(titel_prijs);
    const titel_totaalArtikel = document.createElement('th');
    titel_totaalArtikel.innerText = "Totaal";
    mandjeRij.appendChild(titel_totaalArtikel);
    const titel_delete = document.createElement('th');
    titel_delete.innerText = "verwijder keuze";
    mandjeRij.appendChild(titel_delete);
    */

        let naam_th = document.createElement('th');
        naam_th.setAttribute('class', 'keuzegroenteNaam')
        mandjeRij.appendChild(naam_th);
        naam_th.innerText = naam;

        let aantal_td = document.createElement('td');
        aantal_td.setAttribute('class', 'keuzegroenteAantal');
        mandjeRij.appendChild(aantal_td);
        aantal_td.innerText = aantal;
        let prijs_td = document.createElement('td');
        prijs_td.setAttribute('class', 'keuzegroentePrijs');
        prijs_td.innerText = prijs;
        let remove_td = document.createElement('td');
        remove_td.setAttribute('class', 'keuzegroenteRemove');
        mandjeRij.appendChild(remove_td)
        let hyperlink = document.createElement('a');
        hyperlink.setAttribute('class', 'remove');
        hyperlink.href = '#';
        remove_td.appendChild(hyperlink);
        let image = document.createElement('img');
        image.setAttribute('class', 'vuilbak');
        image.src = 'vuilbak.png';
        hyperlink.appendChild(image);
        hyperlink.onclick = function() {
            console.log("yes");
            const tr = this.parentElement.parentElement;
            tr.remove();
            document.getElementById('groente').appendChild(deleted);
        }
        let totaalPrijs = Number(prijs) * Number(aantal);
        let totaal_td = document.createElement('td');
        totaal_td.setAttribute('class', 'keuzegroenteTotaal');
        mandjeRij.appendChild(totaal_td);
        totaal_td.innerText = totaalPrijs
    }
}