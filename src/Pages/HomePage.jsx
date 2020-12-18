import React from 'react';
import { Link } from 'react-router-dom';

import { authenticationService, leadsService, appointmentService } from '@/_services'
import { Navbar, AssistButton } from '@/_components'
import UserIcon from '../_components/icons/UserIcon'
import AttendanceIcon from '../_components/icons/AttendanceIcon'
import Gravatar from 'react-gravatar'

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            loading: true,
            appointments: [],
            leads: [],
            todayBookings: []
        };
    }

    componentDidMount() {
        this.getLeads();
        this.getAppointments();
        this.getTodayBookings();
        this.setState({ loading: false })
    };

    getLeads() {
        leadsService.getLeads()
        .then(leads => this.setState({ leads }))
        .catch(err => console.log(err))
    }

    getAppointments() {
        appointmentService.getAppointments()
        .then(appointments => this.setState({ appointments }))
        .catch(err => console.log(err))
    }
    

    getTodayBookings() {
        let date = new Date();
        appointmentService.getTodayAppointments(date)
        .then(res => this.setState({ todayBookings: res }))
        .catch(err => console.log(err))
    }

    render() {
        const { currentUser } = this.state;
        const { leads } = this.state;
        const { appointments } = this.state;
        const { todayBookings } = this.state;
        return (
            <div className="profile flex-col">
                {currentUser && <Navbar /> }
                <div className="profile__data text-center p-6 mb-6">
                    <Gravatar email={currentUser.user.email} className="w-32 h-32 rounded-full mx-auto object-cover shadow-md bg-white" />
                    <h4 className="font-bold text-3xl">{currentUser.user.first_name} {currentUser.user.last_name}</h4>
                    <p className="font-bold text-sm">Bienvenido a Brokerhub</p> 
                </div>
                <div className="schedules rounded-tl-2xl">
                    <AssistButton classNames='fill-current text-white w-6 h-6' />
                    <p className="p-4 mt-6">Tus numeros</p>
                    <div className="schedules__data p-2 flex">
                        <Link to='/myleads' className="prospects container rounded-xl p-2 bg-white m-2">
                            <div className="icon inline-block p-2">
                                <UserIcon color={'orange large'} />
                            </div>
                            <div className="prospects__data inline-block">
                                <h4 className="font-bold text-3xl">{leads ? leads.length : 0}</h4>
                                <p>Prospectos</p>
                            </div>
                        </Link>
                        <Link to='/itinerary' className="appointments container rounded-xl p-2 bg-white m-2">
                            <div className="icon inline-block p-2">
                                <AttendanceIcon color={'orange-fill large'} />
                            </div>
                            <div className="appointments__data inline-block">
                                <h4 className="font-bold text-3xl">{appointments.results ? appointments.results.length : 0}</h4>
                                <p>Citas</p>
                            </div>                
                        </Link>
                    </div>            
                    <section className="holder">
                        <div className="activities text-white text-center rounded-tl-2xl pb-8 pt-8">
                            <div className="activities__info">
                                <p>Hoy tienes programadas</p>
                                <h4 className="font-bold text-3xl">{todayBookings ? todayBookings.length : 0} {todayBookings.length == 1 ? 'Cita' : 'Citas'}</h4>
                            </div>
                            <div className="activities__actions container flex flex-col p-4 uppercase">
                                <Link to='/itinerary' className="btn uppercase p-2 m-2">CONSULTAR ITINERARIO</Link>
                                <Link to='/locations' className="btn-primary uppercase p-2 m-2">PROGRAMAR CITAS</Link>
                            </div>    
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export { HomePage };