import React from 'react';
import { render } from 'react-dom';

import { App } from './App';

import "./styles/tailwind.css";

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
        }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
        });
    });
}

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

render(
    <App />,
    document.getElementById('app')
);