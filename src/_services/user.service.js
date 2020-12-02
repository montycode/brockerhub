import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';

export const userService = {
    getAll
};

export const fetchProjects ={
    getProjects
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function getProjects() {
    return fetch(`${config.apiUrl}/projects`, requestOptions).then(handleResponse);
}