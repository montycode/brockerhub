import React from 'react'

import { authenticationService } from '@/_services'
import { Navbar } from '@/_components'
import { Link } from 'react-router-dom'

import Logo from '../assets/img/maskable_icon.png'
import { ProjectSchedules, Schedules } from '../_components'
import MailIcon from '../_components/icons/MailIcon'
import PhoneIcon from '../_components/icons/PhoneIcon'

class ProspectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            isActive: true
        };
    };

    componentDidMount() {
        console.log(this.state);
    };

    render() {
        const { currentUser } = this.state;
        return (
            <div className='prospect flex-col'>
                <div className='prospect__data text-left'>
                    {currentUser && <Navbar /> }
                    <div className="title font-bold text-white text-l uppercase pl-8 pr-8">
                        <h3>Detalle de Prospectos</h3>
                    </div>
                    <div className="text-gray-300 text-xs capitalize pl-8 pr-8">
                        <p>Contacto</p>
                    </div>
                    <div className="prospect__info pl-8 pr-8">
                        <div className="overflow-auto overscroll-contain">
                            <div className="p-4 flex space-x-4 text-white text-l items-center">
                                <img src={Logo} alt="Logo" className='flex-none w-16 h-16 rounded-full object-cover bg-gray-100' />
                                <div className="min-w-0 relative flex-auto p-1">
                                    <h4 className='p-1 font-bold'>Lina Bo</h4>
                                    <div className="mb-1 mb-1 flex content-center">
                                        <div className="self-center mr-1">
                                            <MailIcon />
                                        </div>
                                        <p>linabo@gmail.com</p>
                                    </div>
                                    <div className="mb-1 mb-1 flex content-center mb-2">
                                        <div className="self-center mr-1">
                                            <PhoneIcon />
                                        </div>
                                        <p>(664) 123-4567</p>
                                    </div>
                                    <button className='bg-orange rounded-lg pl-1 pr-1 w-full'>Llamar</button>
                                {/*     <label for="country" className="text-sm font-medium">Estatus</label>
                                        <select id="country" className="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-orange focus:border-orange text-sm text-black">
                                            <option>Seleccione</option>
                                            <option>Cita Programada</option>
                                            <option>Cita Cancelada</option>
                                        </select>
                                */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prospect__container bg-white rounded-tl-2xl pt-8 pr-8 pl-8">
                        <div className="actions w-full flex flex-row text-white capitalize justify-around">
                            <button onClick={() => this.setState({ isActive: !this.state.isActive})} 
                                    className={this.state.isActive ? 'bg-gray-200 p-1 m-2 text-center rounded-full text-gray-500 text-xs w-28 font-bold disabled' : 'bg-orange rounded-full text-center p-1 m-2 w-28 font-bold'}
                                    disabled={this.state.isActive}
                                    >Citas</button>
                            <button onClick={() => this.setState({ isActive: !this.state.isActive})} 
                                    className={this.state.isActive ? 'bg-orange rounded-full text-center p-1 m-2 w-28 font-bold' : 'bg-gray-200 p-1 m-2 text-center rounded-full text-gray-500 text-xs w-28 font-bold'}
                                    disabled={!(this.state.isActive)}
                                    >Desarrollos</button>
                        </div>
                        <div className="prospect_details overflow-auto overscroll-contain">
                                {this.state.isActive ? <Schedules /> : <ProjectSchedules />}
                        </div>                        
                        <div className="actions container flex flex-col p-4 text-white">
                            <Link to='/appointments' className="btn-primary text-center font-bold uppercase p-2 m-2">Programar Nueva Visita</Link>
                        </div>                     
                    </div>
                </div>
            </div>
        );
    }
}

export { ProspectPage };