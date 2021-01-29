import config from 'config'
import { authHeader, handleFetch } from '@/_helpers'
import { authenticationService } from '@/_services'

export const leadsService = {
    createLead,
    getLeads,
    getSingleLead,
    filterLeads
};

function createLead(first_name, last_name, mobile_phone, email, location_id) {
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
                email: email,
                location_id: location_id
        })
    };
    return fetch(`${config.apiUrl}/leads`, requestOptions)
    .then(handleFetch)
    .then(lead =>{
        lead = lead.results;
        return lead;
    })
}

function getLeads() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/leads`, requestOptions)
    .then(response => response.json())
    .then(leads => {
        leads = leads.results;
        return leads;
    });
}

function getSingleLead(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/leads/${id}`, requestOptions)
    .then(response => response.json())
    .then(lead => {
        lead = lead.results;
        return lead;
    });
}

function filterLeads(name) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    let res = fetch(`${config.apiUrl}/leads/`, requestOptions)
    .then(response => response.json())
    .then((leads) => {
        const result = leads.results.filter(lead => lead.first_name.concat(lead.last_name).toLowerCase().includes(name.replace(/\s/g, '').toLowerCase()));
        return result;
     })
    return res;
}