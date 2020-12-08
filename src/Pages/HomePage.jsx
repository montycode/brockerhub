import React from 'react';
import { Link } from 'react-router-dom';

import { authenticationService } from '@/_services'
import { Navbar, AssistButton } from '@/_components'
import UserIcon from '../_components/icons/UserIcon'
import AttendanceIcon from '../_components/icons/AttendanceIcon'
import Gravatar from 'react-gravatar'

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
        };
    }

    componentDidMount() {
        console.log(this.state);
    };

    render() {
        const { currentUser } = this.state;
        return (
            <div className="profile flex-col">
                {currentUser && <Navbar /> }
                <div className="profile__data text-center p-6 mb-6">
                    <Gravatar email={currentUser.user.email} className="w-32 h-32 rounded-full mx-auto object-cover shadow-md bg-white" />
                    <h4 className="font-bold text-3xl">{currentUser.user.first_name} {currentUser.user.last_name}</h4>
                    {currentUser.gender === 0 ?
                        <p className="font-bold text-sm">Bienvenida a Brokerhub</p> :
                        <p className="font-bold text-sm">Bienvenido a Brokerhub</p> 
                    }
                </div>
                <div className="schedules rounded-tl-2xl">
                    <AssistButton classNames='fill-current text-white w-6 h-6' />
                    <p className="p-4 mt-6">Tus numeros</p>
                    <div className="schedules__data p-2 flex">
                        <Link to='/myprospects' className="prospects container rounded-xl p-2 bg-white m-2">
                            <div className="icon inline-block p-2">
                                <UserIcon color={'orange large'} />
                            </div>
                            <div className="prospects__data inline-block">
                                <h4 className="font-bold text-3xl">{currentUser.prospects}</h4>
                                <p>Prospectos</p>
                            </div>
                        </Link>
                        <Link to='/itinerary' className="appointments container rounded-xl p-2 bg-white m-2">
                            <div className="icon inline-block p-2">
                                <AttendanceIcon color={'orange-fill large'} />
                            </div>
                            <div className="appointments__data inline-block">
                                <h4 className="font-bold text-3xl">{currentUser.appointments}</h4>
                                <p>Citas</p>
                            </div>                
                        </Link>
                    </div>            
                    <section className="holder">
                        <div className="activities text-white text-center rounded-tl-2xl pb-8 pt-8">
                            <div className="activities__info">
                                <p>Hoy tienes programadas</p>
                                <h4 className="font-bold text-3xl">{currentUser.appointments} Citas</h4>
                            </div>
                            <div className="activities__actions container flex flex-col p-4 uppercase">
                                <Link to='/itinerary' className="btn uppercase p-2 m-2">CONSULTAR ITINERARIO</Link>
                                <Link to='/appointments' className="btn-primary uppercase p-2 m-2">PROGRAMAR CITAS</Link>
                            </div>    
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export { HomePage };