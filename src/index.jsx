import React from 'react';
import { render } from 'react-dom';

import { App } from './App';

import "./styles/tailwind.css";

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
        }).catch(registrationError => {
        });
    });
}


render(
    <App />,
    document.getElementById('app')
);