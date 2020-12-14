import config from 'config'
import { authHeader, handleResponse } from '@/_helpers'

export const userService = {
    getUser,
    createUser
};

function getUser() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/user`, requestOptions).then(handleResponse);
}

function createUser(first_name, last_name, email, password) { 
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
                first_name: first_name,
                last_name: last_name,
                email: email, 
                password: password
        })
    };

    return fetch( `${config.apiUrl}/registrations`, requestOptions)
            .then(handleResponse)
            .then(user => {
                return user;
            })
            .catch(error => {
                return error;
            })
}
