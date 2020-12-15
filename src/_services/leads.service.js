import config from 'config'
import { authHeader, handleResponse } from '@/_helpers'
import { authenticationService } from '@/_services'

export const leadsService = {
    createLead,
    getLeads,
    getSingleLead
};

function createLead(first_name, last_name, mobile_phone, location_id, email) {
    const currentUser = authenticationService.currentUserValue;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 
                    'Authorization': `Bearer ${currentUser.token}`
        },
        body: JSON.stringify({ 
                first_name: first_name,
                last_name: last_name,
                mobile_phone: mobile_phone,
                location_id: location_id,
                email: email
        })
    };
    console.log(requestOptions);
    return fetch(`${config.apiUrl}/leads`, requestOptions)
    .then(handleResponse)
    .then(lead =>{
        console.log(lead)
        return lead;
    })
}

function getLeads() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/leads`, requestOptions)
    .then(response => response.json())
    .then(leads => {
        console.log(leads);
        return leads;
    });
}

function getSingleLead(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/leads`, requestOptions)
    .then(response => response.json())
    .then(leads => {
        leads = leads.results;
        leads.filter(lead =>{
            lead.id === id;
            leads = lead
            return lead;
        })
        return leads;
    });

}