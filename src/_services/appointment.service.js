import config from 'config'
import { authenticationService } from '@/_services'
import { authHeader, handleFetch } from '@/_helpers'

export const appointmentService = {
    createAppointment,
    getSingleAppointment,
    getAppointments
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
    console.log(requestOptions);
    return fetch(`${config.apiUrl}/bookings`, requestOptions)
    .then(handleFetch)
    .then(appointment =>{
        console.log(appointment)
        return appointment;
    });
}

function getAppointments() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/bookings`, requestOptions)
    .then(response => response.json())
    .then(appointments => {
        console.log(appointments);
        return appointments;
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