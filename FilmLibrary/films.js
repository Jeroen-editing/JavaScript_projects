
/* Ik maak altijd even een functie om de html elementen (hier per ID)
te selecteren, zodat ik dit niet steeds voluit moet schrijven. */
const getById = (id) => (document.getElementById(id));

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
    getById('filmTitle').innerHTML = next_film.getTitle();

    // Beschrijving
    // ------------
    getById('inhoudText').innerHTML = next_film.getInhoud();

    // Acteurs
    // -------
    /* Acteurs (genres & regisseurs) staan in een array en moeten van een li-tag voorzien 
    worden. De gemakkelijkste manier vond ik, om het in een nieuwe array te zetten */
    let actorsList = [];
    /* ik gebruik bewust geen array.push(), want dan komen er komma's tussen
    en moet je die er weer uit halen met array.join(''). */
    next_film.getActors().forEach((actor) => {actorsList += `<li>${actor}</li>`});
    getById('castList').innerHTML = actorsList;

    // Foto
    // ----
    getById('filmFoto').src = `assets/img/${next_film.getFoto()}`;
 
    // Genres
    // ------
    // Als er maar 1 genre (+ regisseur) is verander ik het ul-tag in een p-tag
    let genresArr = next_film.getGenres();
    let genres_ul = getById('genresList');
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
    getById('ratingBox').innerHTML = ratingStars;

    // Regisseurs
    // ----------
    let directorsArr = next_film.getDirectors();
    let directors_ul = getById('directorList');
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
            
            // de html-classes voor de buttons benoemen
            let active = 'btn_active' 
            let inactive = 'btn_inactive';

            // functies voor de button-acties
            /* je kan dit ook in de addEventlistner's zetten, maar ik deel het liever op */
            const previous = () => {
                showFilm(movies[i]);
                next_btn.classList.replace(inactive, active);
                if (i === 0) previous_btn.classList.replace(active, inactive);
            };
            const next = () => {
                showFilm(movies[i]);
                previous_btn.classList.replace(inactive, active);
                if (i === 13) next_btn.classList.replace(active, inactive);
            };
            const first = () => {
                i = 0;
                previous_btn.classList.replace(active, inactive); 
            };
            const last = () => {
                i = movies.length - 1;
                next_btn.classList.replace(active, inactive);
            };

            // 'Volgende-button' bediening
            next_btn.addEventListener('click', () => {
                // volgende
                i = i + 1;
                // stoppen na de laatste film + layput button veranderen
                i < movies.length ? next() : last();
            });  
            // 'Vorige-button' bediening
            previous_btn.addEventListener('click', () => {
                // vorige
                i = i - 1;
                // stoppen na de eerste film + layput button veranderen
                i >= 0 ? previous() : first();
            });
        })
        .catch(err => console.log(err));
}

// de hoofdfunctie aanroepen
// *************************
filmLibrary();