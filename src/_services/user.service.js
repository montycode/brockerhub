import config from 'config'
import { authHeader, handleResponse } from '@/_helpers'

export const userService = {
    getUser
};

function getUser() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/user`, requestOptions).then(handleResponse);
}