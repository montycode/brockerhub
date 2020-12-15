import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-day-picker/lib/style.css'
import Moment from 'react-moment'

import { authenticationService, appointmentService } from '@/_services'
import { Navbar, AssistButton } from '@/_components'
import { Link } from 'react-router-dom';

class ItineraryPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            appointments: []
        };
    };

    componentDidMount() {
        this.getAppointments();
    };

    getAppointments() {
        appointmentService.getAppointments()
        .then(appointments => this.setState({ appointments }))
        .catch(err => console.log(err))
    }

    render() {
        const { currentUser } = this.state;
        const { appointments } = this.state;
        return (
            <div className='prospect flex-col'>
                <div className='prospect__data text-left'>
                    {currentUser && <Navbar /> }
                    <div className="title font-bold text-white text-l uppercase p-8">
                        <h3>Mi Itinerario</h3>
                    </div>
                    <AssistButton classNames='fill-current text-white w-6 h-6' />
                    <div className="prospect__container bg-white rounded-tl-2xl pt-8 pr-8 pl-8">
                        <div className="projects overflow-auto overscroll-contain">
                            <table className='table-auto flex container'>
                                <tbody className='container flex flex-col'>                                    
                                    {appointments.results ? appointments.results.map(appointment =>
                                        <tr key={appointment.id} className='flex justify-between'>
                                            <td className='font-bold text-l p-2'><Moment format="h:mm A">{appointment.reservation_date}</Moment></td>
                                            <td className='text-xs p-2'>
                                                <p>{appointment.lead_name}</p>
                                                <p className='text-gray-300'>{appointment.location_name}</p>
                                            </td>
                                            <td className='text-xs p-2 capitalize'><Moment locale="es-mx" format="DD MMM YYYY">{appointment.reservation_date}</Moment></td>
                                        </tr>
                                    ) : <Skeleton count={15} />}    
                                </tbody>
                            </table>
                        </div>                        
                        <div className="actions container flex flex-col p-4 text-white">
                            <Link to='/locations' className="btn-primary text-center uppercase p-2 m-2">PROGRAMAR CITA</Link>
                        </div>                     
                    </div>
                </div>
            </div>
        );
    }
}

export { ItineraryPage };