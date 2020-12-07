import { BehaviorSubject } from 'rxjs'
import axios from 'axios'

import config from 'config'

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')))

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
}

function login(email, password) {
    try{
        return axios({
            method: 'post',
            mode: 'no-cors',
            url: `${config.apiUrl}/authenticate`,
            data: {
              email: email,
              password: password
            }
          })
          .then(token => {
            const jwt = token.data.auth_token;
            axios({
                method: 'get',
                url: `${config.apiUrl}/user`,
                headers: {Authorization: 'Bearer ' + jwt}
              })
              .then(user => {
                console.log(user.data.user);
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user.data.user));
                currentUserSubject.next(user.data.user);
                return user
              });
            console.log(token.data.auth_token)
            return token
        });
    }
    catch(error){
        return error
    }
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}