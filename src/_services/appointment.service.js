import config from 'config'
import { authenticationService } from '@/_services'
import { authHeader, handleResponse } from '@/_helpers'

export const appointmentService = {
    createAppointment,
    getSingleAppointment,
    getAppointments
};

function createAppointment(location_id, reservation_date, lead_id) {
    const currentUser = authenticationService.currentUserValue;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 
                    Authorization: `Bearer ${currentUser.token}`
        },
        body: JSON.stringify({ 
                reservation_date: reservation_date,
                lead_id: lead_id,
                location_id: location_id
        })
    };
    return fetch(`${config.apiUrl}/bookings`, requestOptions)
    .then(handleResponse)
    .then(appointment =>{
        console.log(appointment)
        return appointment;
    })    
    .catch(error =>{
        console.log(error)
        return error;
    });
}

function getAppointments() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/bookings`, requestOptions)
    .then(response => response.json())
    .then(bookings => {
        console.log(bookings);
        return bookings;
    });
}

function getSingleAppointment(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/bookings`, requestOptions)
    .then(response => response.json())
    .then(bookings => {
        bookings = bookings.results;
        bookings.filter(booking =>{
            booking.id === id;
            bookings = booking
            return booking;
        })
        return bookings;
    });

}