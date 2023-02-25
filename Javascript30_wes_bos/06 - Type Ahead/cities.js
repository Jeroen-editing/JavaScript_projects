const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const prom = 0;

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));
// ... = spreading the data in the array
// in stead of pushing the array in an array. so it won't become a nested array

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // see if any city matches te search
        const regex = new RegExp(wordToMatch, 'gi')
        return place.city.match(regex) || place.state.match(regex);
    })
}

function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function displayMatches() {
    const matchesArray = findMatches(this.value, cities);
    const html = matchesArray.map(place => {

        const regex  = new RegExp(this.value, 'gi');

        const cityName = place.city.replace(regex, `<span class="highlight">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="highlight">${this.value}</span>`);

        const latitude = (place.latitude).toFixed(4);
        const longitude = (place.longitude).toFixed(4);
        console.log(latitude + '/' + longitude);

        return `<li><p class="top"><span class="name">- ${cityName}, ${stateName}</span><span class="population">pop: ${numberWithDots(place.population)}</span></p>
                    <p class="bottom"><span class="latitude">lat: ${latitude}°</span><span class="between">-</span><span class="longitude">long: ${longitude}°</span></p></li>`;

    }).join('');

    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);