import config from 'config'
import { authHeader } from '@/_helpers'

export const statusService = {
    getStatus
};

function getStatus() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/status`, requestOptions)
    .then(response => response.json())
    .then(status => {
        status = status.results;
        return status;
    });
}

