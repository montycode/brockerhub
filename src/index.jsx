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

var deferredPrompt; 

window.addEventListener('beforeinstallprompt', function (e) {
    deferredPrompt = e; showAddToHomeScreen(); 
}); 

function showAddToHomeScreen() { 
    var a2hsBtn = document.querySelector(".ad2hs-prompt"); 
    a2hsBtn.style.display = "block"; a2hsBtn.addEventListener("click", addToHomeScreen); 
} 

function addToHomeScreen() { 
    var a2hsBtn = document.querySelector(".ad2hs-prompt"); // hide our user interface that shows our A2HS button 
    a2hsBtn.style.display = 'none'; // Show the prompt 
    deferredPrompt.prompt(); // Wait for the user to respond to the prompt 
    deferredPrompt.userChoice .then(function(choiceResult){
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt'); 
        } 
        else {
            console.log('User dismissed the A2HS prompt'); 
        } 
        deferredPrompt = null; 
    });
} 

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

render(
    <App />,
    document.getElementById('app')
);