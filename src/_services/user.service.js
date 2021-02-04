import config from 'config'
import { authHeader, handleResponse } from '@/_helpers'
import { authenticationService } from '@/_services'

export const userService = {
    getUser,
    createUser,
    updateUser,
    updatePhoto
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
            .then(user => {
                return user;
            });
}

function updateUser(id, first_name, last_name) {
    const currentUser = authenticationService.currentUserValue;
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',
                   'Authorization': `Bearer ${currentUser.token}` },
        body: JSON.stringify({ 
                first_name: first_name,
                last_name: last_name
        })
    };

    return fetch( `${config.apiUrl}/user/${id}`, requestOptions)
            .then(user => {
                return user;
            });
}

function updatePhoto(id, photo) {
    const currentUser = authenticationService.currentUserValue;
    const requestOptions = {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${currentUser.token}`
        },
        body: JSON.stringify({ 
            photo: photo
        })
    };
    return fetch( `${config.apiUrl}/photos/${id}`, requestOptions)
            .then(res => res.json())
            .then(photo => {
                return photo;
            });
}