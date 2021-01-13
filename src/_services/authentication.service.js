import { BehaviorSubject } from 'rxjs'
import { handleLogin } from '@/_helpers'

import config from 'config'

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')))

export const authenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
}

function login(email, password) {
  const requestOptions = {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
              email: email, 
              password: password
      })
  };

  return fetch( `${config.apiUrl}/authenticate`, requestOptions)
              .then(handleLogin)
              .then(token => {
                let auth_token = token.auth_token;
                const requestUserOptions = { 
                    method: 'GET', 
                    mode: 'no-cors',
                    headers: { Authorization: `Bearer ${auth_token}` }
                }
                return fetch(`${config.apiUrl}/user`, requestUserOptions)
                            .then(handleLogin)
                            .then(user => {
                              user.token = token.auth_token;
                              // store user details and jwt token in local storage to keep user logged in between page refreshes
                              localStorage.setItem('currentUser', JSON.stringify(user));
                              currentUserSubject.next(user);
                  
                              return user;
                          })
            })
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}