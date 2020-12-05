import { BehaviorSubject } from 'rxjs';

import config from 'config';
import { handleResponse } from '@/_helpers';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
const currentTokenSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentToken')));

export const authenticationService = {
    login,
    logout,
    getToken,
    currentToken: currentTokenSubject.asObservable(),
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value },
    get currentTokenValue () { return currentTokenSubject.value }
};

function login(token) {
    const requestOptions = {
        method: 'GET',
        headers:{ Authorization: `Bearer ${token}` },
        mode: 'no-cors'
    };

    return fetch(`${config.apiUrl}/user`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);

            return user;
        });
}

function getToken(email, password) {
    let formData = new FormData();
    const authURL = `${config.apiUrl}/authenticate`;
    formData.append('email', email);
    formData.append('password', password);

    const requestOptions  = {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // no-cors, *cors, same-origin        
    };

    console.log("User: ", email, password);   

    function getAuth(url) {
       return fetch(url, requestOptions).then(response => response.json());
    }

    getAuth(authURL).then(function(data) {
        console.log(data);
    })
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}
