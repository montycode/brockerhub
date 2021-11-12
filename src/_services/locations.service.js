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
    .then(locations => {
        console.log(locations);
        return locations;
    });
}

function getSingleLocation(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/locations`, requestOptions)
    .then(response => response.json())
    .then(locations => {
        console.log(locations.results.filter((location) => location.id == id))
        let newLocations = locations.results.filter((location) => location.id == id);
        console.log(newLocations);
        return newLocations[0];
    });
}