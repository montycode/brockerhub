import config from 'config'
import { handleFetch } from '@/_helpers'
import { authenticationService } from '@/_services'

export const locationLeadService = {
    updateLocationLead
};

function updateLocationLead(id, status_id) {
    console.log("ID: ", id, "Status: ", status_id)
    const currentUser = authenticationService.currentUserValue;
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 
                    'Authorization': `Bearer ${currentUser.token}`
        },
        body: JSON.stringify({ 
            status_id: status_id
        })
    };
    return fetch(`${config.apiUrl}/locationleads/${id}`, requestOptions)
    .then(handleFetch)
    .then(response =>{
        return response;
    });
}