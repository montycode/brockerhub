import config from 'config'
import { authHeader } from '@/_helpers'

export const locationsService = {
    getLocations,
    getSingleLocation
};

function getLocations() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/locations`, requestOptions)
    .then(response => response.json())
    .then(locations =>{
        return locations;
    });
}

function getSingleLocation(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/locations`, requestOptions)
    .then(response => response.json())
    .then(location => {
        location = location.results[id-1];
        console.log(location);
        return location;
    });
}