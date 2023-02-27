
/* Ik maak altijd even een functie om de html elementen (hier per ID)
te selecteren, zodat ik dit niet steeds voluit moet schrijven. */
const getById = (id) => (document.getElementById(id));
const createEl = (e) => (document.createElement(e));

// Ik gebruik een 'class', al is dat niet echt nodig
// **************************************************
/* Persoonlijk vind ik het overzichtelijker en ik probeer er zo veel
mogelijk mee te oefenen, dus vooral daarom gebruik ik het ook hier */ 
class Film {
    constructor(movie) {
        this.titel = movie.titel;
        this.inhoud = movie.beschrijving;
        this.actors = movie.cast;
        this.foto = movie.foto;
        this.genres = movie.genres;
        this.rating = movie.rating
        this.directors = movie.regisseurs;

        this.getTitle = () => {return this.titel};
        this.getInhoud = () => {return this.inhoud};
        this.getActors = () => {return this.actors};
        this.getFoto = () => {return this.foto};
        this.getGenres = () => {return this.genres};
        this.getRating = () => {return this.rating};
        this.getDirectors = () => {return this.directors};
    }
}
/*
De kortere syntax is:
let titel = movies[i].titel;
let inhoud = movies[i].beschrijving;
let acteurs = movies[i].cast;
let foto = movies[i].foto;
let genres = movies[i].genres;
let waardering = movies[i].rating;
let regisseurs = movies[i].regisseurs;
('movies' is dan natuurlijk de response v/d fetch() verderop):
*/

// (extra) eerst de html aanpassen
// *******************************
const insertAfter = (newNode, existingNode, attribute, attributeContent) => {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    newNode.setAttribute(attribute, attributeContent);
}
// container-div toevoegen
let page = getById('body');
let theFirstChild = page.firstChild;
let container = createEl('div');
page.insertBefore(container, theFirstChild);
container.setAttribute('class', 'container');
container.setAttribute('id', 'screen');

// titel in container zetten
let titel = getById('filmTitle');
container.appendChild(titel);

// sectie toevoegen om de info te groeperen
let section = createEl('section');
container.appendChild(section);
section.setAttribute('class', 'info_box');
section.setAttribute('id', 'info');

// beschrijving in sectie zetten en 'p' element toevoegen
let inhoud_titel = getById('inhoudTitle');
section.appendChild(inhoud_titel);
let inhoud = createEl('p')
insertAfter(inhoud, inhoud_titel, 'class', 'inhoud_text');

// cast in sectie zetten en 'ul' element toevoegen
let cast_titel = getById('castTitle');
section.appendChild(cast_titel);
let cast_ul = createEl('ul');
insertAfter(cast_ul, cast_titel, 'class', 'cast_list');
cast_ul.setAttribute('id', 'castList');

// foto in sectie zetten en 'img' element toevoegen
let foto_titel = getById('fotoTitle');
section.appendChild(foto_titel);
let img_div = createEl('div');
insertAfter(img_div, foto_titel, 'class', 'image_box');
img_div.setAttribute('id', 'imageBox')
let image = createEl('img');
img_div.appendChild(image);
image.setAttribute('class', 'film_foto');
image.setAttribute('src', ``);

// genres in sectie zetten en 'ul' element toevoegen
let genres_titel = getById('genresTitle');
section.appendChild(genres_titel);
let genres_ul = createEl('ul');
insertAfter(genres_ul, genres_titel, 'class', 'genres_list');

// rating in sectie zetten en 'div' element toevoegen
let rating_titel = getById('ratingTitle');
section.appendChild(rating_titel);
let rating_box = createEl('div');
insertAfter(rating_box, rating_titel, 'class', 'rating_box');

// directors in sectie zetten en 'ul' element toevoegen
let directors_titel = getById('directorsTitle');
section.appendChild(directors_titel);
let directors_ul = createEl('ul');
insertAfter(directors_ul, directors_titel, 'class', 'director_list');


// (extra) functie om de buttons vast, onderaan het beeldscherm te plaatsen
// ************************************************************************
const checkScreen =  () => {
    // het info gedeelte slecteren
    let info = getById('info');
    // kijken hoe hoog het scherm is
    let screen_height = window.innerHeight;
    // de tittelhoogte en buttonhoogte er af halen
    let max_height = screen_height - (135);
    // de gefixeerde hoogte instellen
    info.style.minHeight = `${max_height}px`;
    info.style.maxHeight = `${max_height}px`;
}
// functie om de film-info in het juiste html element te zetten
// ************************************************************
const showFilm = (movie) => {
    // Eerst maken we een instance van de geselecteerde film
    // -----------------------------------------------------
    const next_film = new Film(movie);

    // En nu roepen we elk property op en plaatsen het in het juiste element.
    // Titel
    // -----
    titel.innerHTML = next_film.getTitle();

    // Beschrijving
    // ------------
    inhoud.innerHTML = next_film.getInhoud();

    // Acteurs
    // -------
    /* Acteurs (genres & regisseurs) staan in een array en moeten van een li-tag voorzien 
    worden. De gemakkelijkste manier vond ik, om het in een nieuwe array te zetten */
    let actorsList = [];
    /* ik gebruik bewust geen array.push(), want dan komen er komma's tussen
    en moet je die er weer uit halen met array.join(''). */
    next_film.getActors().forEach((actor) => {actorsList += `<li>${actor}</li>`});
    cast_ul.innerHTML = actorsList;

    // Foto
    // ----
    image.src = `assets/img/${next_film.getFoto()}`;

    // Genres
    // ------
    // Als er maar 1 genre (+ regisseur) is verander ik het ul-tag in een p-tag
    let genresArr = next_film.getGenres();
    //let genres_ul = getById('genresList');
    // checken of het een lijst is of slechts 1 genre
    if (genresArr.length > 1) {
        let genresList = [];
        genresArr.forEach((genre) => {genresList += `<li>${genre}</li>`});
        genres_ul.innerHTML = genresList;
        genres_ul.style.listStyleType = 'square';
    } else {
        genres_ul.innerHTML = genresArr;
        genres_ul.style.listStyleType = 'none';
    }

    // Rating
    // ------
    let ratingStars = [];
    for (let k = 0; k < next_film.getRating(); k++) {
        ratingStars += `<img class="rating_star" id="ratingStar" src="assets/icons/ster.png" alt="rating star">`;
    }
    rating_box.innerHTML = ratingStars;

    // Regisseurs
    // ----------
    let directorsArr = next_film.getDirectors();
    //let directors_ul = getById('directorList');
    // checken of het een lijst is of slechts 1 regisseur
    if (directorsArr.length > 1) {
        let directorsList = [];
        directorsArr.forEach((director) => {directorsList += `<li>${director}</li>`});
        directors_ul.innerHTML = directorsList;
        directors_ul.style.listStyleType = 'square';
    } else {
        directors_ul.innerHTML = directorsArr;
        directors_ul.style.listStyleType = 'none';
    }

    // de functie om de buttons op vaste hoogte te zetten aanroepen
    checkScreen();
}

// functie om de knoppen te gebruiken
// **********************************
const filmLibrary = () => {
    // De gegevens uit het JSON-file halen
    // Ik heb de fetch("films.json") vervangen om de error v/d CORS & Cross origin requests te vermijden
    fetch("https://jeroen-editing.github.io/JavaScript_projects/FilmLibrary/films.json") 
        .then(movies => movies.json())
        .then(movies => {
            let i = 0;
            // Altijd de 1ste film weergeven
            showFilm(movies[i]);

            // selecteer de buttons
            let next_btn = getById('next');
            let previous_btn = getById('previous');
            // in het begin is de 'Vorige-button' uitgeschakeld
            previous_btn.disabled = true;
            
            // de html-classes voor de buttons benoemen
            let active = 'btn_active' 
            let inactive = 'btn_inactive';

            // functies voor de button-acties
            const previous = (i) => {
                // Volgende film weergeven
                showFilm(movies[i]);
                // 'Volgende-button' aanzetten
                next_btn.disabled = false;
                next_btn.classList.replace(inactive, active);
                // stoppen na de eerste film, button uitzetten & layput veranderen
                if (i === 0) {
                    i = 0;
                    previous_btn.disabled = true;
                    previous_btn.classList.replace(active, inactive); 
                }
            };
            const next = (i) => {
                // Vorige film weergeven
                showFilm(movies[i]);
                // 'Vorige-button' aanzetten
                previous_btn.disabled = false;
                previous_btn.classList.replace(inactive, active);
                // stoppen na de laatste film, button uitzetten & layput veranderen
                if (i === 13) {
                    i = movies.length - 1;
                    next_btn.disabled = true;
                    next_btn.classList.replace(active, inactive);
                }
            };

            // 'Volgende-button' bediening
            next_btn.addEventListener('click', () => {
                // Volgende selecteren
                i = i + 1;
                next(i);
            });  
            // 'Vorige-button' bediening
            previous_btn.addEventListener('click', () => {
                // Vorige selecteren
                i = i - 1;
                previous(i);
            });
        })
        .catch(err => console.log(err));
}

// de hoofdfunctie aanroepen
// *************************
filmLibrary();