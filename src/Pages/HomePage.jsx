import React from 'react';

import { authenticationService } from '@/_services';

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
                <div className="profile__data text-center p-8">
                    <img className="w-32 h-32 rounded-full mx-auto object-cover shadow-md" src="/assets/img/avatar.jpg" alt="" />
                    <h4 className="font-bold text-3xl">{currentUser.firstName} {currentUser.lastName}</h4>
                    {currentUser.gender === 1 ?
                        <p className="font-bold text-sm">Bienvenido a Brockerhub</p> :
                        <p className="font-bold text-sm">Bienvenida a Brockerhub</p> 
                    }
                </div>
                <div className="schedules rounded-tl-2xl">
                    <p className="p-4">Tus numeros</p>
                    <div className="schedules__data p-4 flex">
                        <div className="prospects container rounded-xl p-2 bg-white m-2">
                            <img src="" alt="" />
                            <div className="prospects__data text">
                                <h4 className="font-bold text-3xl">{currentUser.prospects}</h4>
                                <p>Prospectos</p>
                            </div>
                        </div>
                        <div className="appointments container rounded-xl p-2 bg-white m-2">
                            <img src="" alt="" />
                            <div className="appointments__data">
                                <h4 className="font-bold text-3xl">{currentUser.appointments}</h4>
                                <p>Citas</p>
                            </div>                
                        </div>
                    </div>            
                    <section className="holder">
                        <div className="activities text-white text-center rounded-tl-2xl pb-8 pt-8">
                            <div className="activities__info">
                                <p>Hoy tienes programadas</p>
                                <h4 className="font-bold text-3xl">{currentUser.appointments} Citas</h4>
                            </div>
                            <div className="activities__actions container flex flex-col p-4 capitalize">
                                <button className="btn capitalize p-2 m-2">CONSULTAR ITINERARIO</button>
                                <button className="btn-primary capitalize p-2 m-2">PROGRAMAR CITAS</button>
                            </div>    
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export { HomePage };