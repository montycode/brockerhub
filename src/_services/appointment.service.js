import config from 'config'
import moment from 'moment'

import { authenticationService } from '@/_services'
import { authHeader, handleFetch } from '@/_helpers'

export const appointmentService = {
    createAppointment,
    getSingleAppointment,
    getAppointments,
    getLeadAppointments,
    getTodayAppointments,
    confirmAppointment
};

function createAppointment(location_id, reservation_date, lead_id) {
    const currentUser = authenticationService.currentUserValue;
    const requestOptions = {
        method: 'POST',
        headers: {  'Content-Type': 'application/json', 
                    'Authorization': `Bearer ${currentUser.token}`
        },
        body: JSON.stringify({ 
                location_id: location_id,
                reservation_date: reservation_date,
                lead_id: lead_id
        })
    };
    return fetch(`${config.apiUrl}/bookings`, requestOptions)
    .then(handleFetch)
    .then(appointment =>{
        return appointment;
    });
}

function getAppointments() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/bookings`, requestOptions)
    .then(response => response.json())
    .then(appointments => {
        return appointments;
    });
}

function getSingleAppointment(id) {
    const requestOptions = { method: 'GET' };
    return fetch(`${config.apiUrl}/confirmations/${id}`, requestOptions)
    .then(response => response.json())
    .then(bookings => {
        bookings = bookings.results;
        return bookings;
    });
}

function confirmAppointment(booking_id, reservation_date, confirm) {
    const requestOptions = { 
        method: 'PUT',
        headers: {  'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            reservation_date: reservation_date,
            confirm: confirm
        })
     };
    return fetch(`${config.apiUrl}/confirmations/${booking_id}`, requestOptions)
    .then(response => response.json())
    .then(confirmation => {
        return confirmation;
    });
}

function getLeadAppointments(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    
    let res = fetch(`${config.apiUrl}/bookings/`, requestOptions)
    .then(response => response.json())
    .then((appointments) => {
        const result = appointments.results.filter(appointment => appointment.lead_id == id);
        return result;
     })
    return res;
}

function getTodayAppointments(date) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    let res = fetch(`${config.apiUrl}/bookings/`, requestOptions)
    .then(response => response.json())
    .then((appointments) => {
        const result = appointments.results.filter(appointment => moment(appointment.reservation_date).format('MM D YYYY') == moment(date).format('MM D YYYY'));
        return result;
     })
    return res;
}

