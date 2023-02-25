/* 
!!! Ik maak altijd even een constante om het element per ID te 
definiëren, zodat ik dit niet steeds voluit moet schrijven./
*/
const getById = (id) => (document.getElementById(id));

/*
Ik gebruik in mijn versie een 'class', ook al is dat niet echt nodig.
Persoonlijk vind ik het overzichtelijker, dus daarom gebruik ik het ook hier. 
De kortere syntax is ('film' is de response v/d fetch):
let titel = film[i].titel;
let inhoud = film[i].beschrijving;
let acteurs = film[i].cast;
let foto = film[i].foto;
let genres = film[i].genres;
let waardering = film[i].rating;
let regisseurs = film[i].regisseurs;
*/
class Movie {
    constructor(movie, i) {
        this.titel = movie[i].titel;
        this.inhoud = movie[i].beschrijving;
        this.actors = movie[i].cast;
        this.foto = movie[i].foto;
        this.genres = movie[i].genres;
        this.rating = movie[i].rating
        this.directors = movie[i].regisseurs;

        this.getTitle = () => {return this.titel};
        this.getInhoud = () => {return this.inhoud};
        this.getActors = () => {return this.actors};
        this.getFoto = () => {return this.foto};
        this.getGenres = () => {return this.genres};
        this.getRating = () => {return this.rating};
        this.getDirectors = () => {return this.directors};
    }
}

// functie om de buttons onderaan het beeldscherm te plaatsen
const checkScreen =  () => {
    let info = getById('info');
    let screen_height = window.innerHeight;
    let max_height = screen_height - (140);
    console.log(screen_height);
    console.log(max_height);
    info.style.minHeight = `${max_height}px`;
    info.style.maxHeight = `${max_height}px`;
}

// functie om de film-info uit het JSON-file te halen
const getFilm = (i) => {
    fetch("films.json")
        .then(film => film.json())
        .then(film => {
            // Van elke film maken we eerst een Object
            const next_film = new Movie(film, i);

            // En nu roepen we elk property op en plaatsen het juiste element.
            // Titel --- console.log(next_film.getTitle());
            getById('filmTitle').innerHTML = next_film.getTitle();

            // Beschrijving --- console.log(next_film.getInhoud());
            getById('inhoudText').innerHTML = next_film.getInhoud();

            // Acteurs --- console.log(next_film.getActors());
            // De acteurs (+genres & regisseurs) staan in een array en moeten van een li-tag voorzien worden.
            // De gemakkelijkste manier die ik vond was om het even in een nieuwe array te zetten.
            let actorsList = [];
            next_film.getActors().forEach((actor) => {actorsList += `<li>${actor}</li>`});
            getById('castList').innerHTML = actorsList;

            // Foto --- console.log(next_film.getFoto());
            getById('filmFoto').src = next_film.getFoto();

            // Genres --- console.log(next_film.getGenres());
            // Als er maar 1 genre (+ regisseur) is verander ik het ul-tag in een p-tag
            let genresArr = next_film.getGenres();
            let genres_ul = getById('genresList');
            //list.outerHTML = `<ul class="genres_list" id="genresList"></ul>`;
            if (genresArr.length > 1) {
                let genresList = [];
                genresArr.forEach((genre) => {genresList += `<li>${genre}</li>`});
                genres_ul.innerHTML = genresList;
                genres_ul.style.listStyleType = 'square';
            } else {
                genres_ul.innerHTML = genresArr;
                genres_ul.style.listStyleType = 'none';
            }

            // Rating --- console.log(next_film.getRating());
            let ratings = [];
            for (let k = 0; k < next_film.getRating(); k++) {
                ratings += `<img class="rating_star" id="ratingStar" src="ster.png" alt="rating star">`;
            }
            getById('ratingBox').innerHTML = ratings;

            // Regisseurs --- console.log(next_film.getDirectors());
            let directorsArr = next_film.getDirectors();
            let directors_ul = getById('directorList');
            if (directorsArr.length > 1) {
                let directorsList = [];
                directorsArr.forEach((director) => {directorsList += `<li>${director}</li>`});
                directors_ul.innerHTML = directorsList;
                directors_ul.style.listStyleType = 'square';
            } else {
                directors_ul.innerHTML = directorsArr;
                directors_ul.style.listStyleType = 'none';
            }
        });
    checkScreen();
}

// functie om de knoppen te gebruiken
const filmLibrary = () => {
    let i = 0;
    // Altijd de 1ste film weergeven
    getFilm(i);
    let next_btn = getById('next');
    let previous_btn = getById('previous');
    
    // 'Volgende' button bediening
    next_btn.addEventListener('click', () => {
        // volgende
        i = i + 1;
        // stoppen na de laatste film + layput button veranderen
        if (i <= 13) {
            getFilm(i);
            previous_btn.classList.replace('btn_inactive', 'btn_active');
            if (i === 13) {
                next_btn.classList.replace('btn_active', 'btn_inactive');
            }
        } else {
            i = 13;
            next_btn.classList.replace('btn_active', 'btn_inactive');
        }
        // console.log(i);
    });  
    // 'Vorige' button bediening + layput button veranderen
    previous_btn.addEventListener('click', () => {
        // vorige
        i = i - 1;
        // stoppen na de eerste film
        if (i >= 0) {
            getFilm(i);
            next_btn.classList.replace('btn_inactive', 'btn_active');
            if (i === 0) {
                previous_btn.classList.replace('btn_active', 'btn_inactive');
            }
        } else {
            i = 0;
            previous_btn.classList.replace('btn_active', 'btn_inactive');
        }
        // console.log(i);
    });
}
filmLibrary();