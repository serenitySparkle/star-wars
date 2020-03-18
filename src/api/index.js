const API_BASE_ADDRESS = 'https://swapi.co/api/'

const endpoints = {
    people: 'people',
    peopleDetails: 'people/:id',
    planets: 'planets',
    planetsDetails: 'planets/:id',
    films: 'films',
    filmsDetails: 'films/:id',
    species: 'species',
    speciesDetails: 'species/:id',
    vehicles: 'vehicles',
    vehiclesDetails: 'vehicles/:id',
    starships: 'starships/',
    starshipsDetails: 'starships/:id'

}

export default class Api {
    
}

// function callFetch(endpoint, method, params) {
//     const uri = API_BASE_ADDRESS + endpoint;
//     return fetch(uri, {
//         method: method,
//         params
//     })
// }

