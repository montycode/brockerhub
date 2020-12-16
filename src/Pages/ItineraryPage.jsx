import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-day-picker/lib/style.css'
import Moment from 'react-moment'

import { authenticationService, appointmentService } from '@/_services'
import { Navbar, AssistButton } from '@/_components'
import { Link } from 'react-router-dom';

import momentLocalizer from 'react-widgets-moment'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'


momentLocalizer()

class ItineraryPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            appointments: [],
            dateFilter: new Date()
        };
    };

    componentDidMount() {
        this.getTodayBookings(this.state.dateFilter);
    };

    getTodayBookings(date) {
        appointmentService.getTodayAppointments(date)
        .then(res => this.setState({ appointments: res }))
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
                        <DateTimePicker
                            containerClassName='mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md'
                            name="dateFilter"
                            format={"DD/MM/yyyy"}
                            value={this.state.dateFilter}
                            onChange={dateFilter => {
                                this.setState({ dateFilter });
                                this.getTodayBookings(dateFilter);
                            }}
                            time={false}
                        />
                        <div className="projects overflow-auto overscroll-contain">
                            <table className='table-auto flex container'>
                                <tbody className='container flex flex-col'>                                    
                                    {appointments != undefined && appointments.length > 0 ? appointments.map(appointment =>
                                        <tr key={appointment.id} className='flex justify-between'>
                                            <td className='font-bold text-l p-2'><Moment format="h:mm A">{appointment.reservation_date}</Moment></td>
                                            <td className='text-xs p-2'>
                                                <p>{appointment.lead_name}</p>
                                                <p className='text-gray-300'>{appointment.location_name}</p>
                                            </td>
                                            <td className='text-xs p-2 capitalize'><Moment locale="es-mx" format="DD MMM YYYY">{appointment.reservation_date}</Moment></td>
                                        </tr>
                                    ) : <tr className='flex justify-between'>
                                            <p>*No hay citas programadas para hoy.</p>
                                        </tr>}    
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