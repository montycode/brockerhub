import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import TimePicker from 'react-time-picker'
import 'react-day-picker/lib/style.css'

import { authenticationService } from '@/_services'
import { Navbar, AssistButton } from '@/_components'
import { Link } from 'react-router-dom';

class NewProspectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            time: '10:00',
            selectedDay: undefined
        };

        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleHourChange = this.handleHourChange.bind(this);
    };

    handleDayChange(day) {
        this.setState({ selectedDay: day });
    };

    handleHourChange(time) {
        this.setState({ time });
    };

    componentDidMount() {
        console.log(this.state);
    };    

    render() {
        const { currentUser } = this.state;
        const { selectedDay } = this.state;
        return (
            <div className='prospect flex-col'>
                <div className='prospect__data text-left'>
                    {currentUser && <Navbar /> }
                    <div className="title font-bold text-white text-l uppercase p-8">
                        <h3>Datos del Cliente</h3>
                    </div>
                    <AssistButton classNames={'fill-current text-white w-6 h-6'} />
                    <div className="prospect__container bg-white rounded-tl-2xl pt-8 pr-8 pl-8">
                        <div className="projects overflow-auto overscroll-contain mt-2">
                            <div className="prospect__form grid grid-cols-2">
                                <div className="col-span-1 p-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre(s)</label>
                                    <input type="text" id="name" className="mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md"/>
                                </div>
                                <div className="col-span-1 p-2">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Apellido(s)</label>
                                    <input type="text" id="last-name" className="mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md"/>
                                </div>
                                <div className="col-span-2 p-2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono Móvil</label>
                                    <input type="text" id="phone" className="mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md"/>
                                </div>
                                <div className="col-span-2 p-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                                    <input type="email" id="email" className="mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md"/>
                                </div>
                                <div className="col-span-2 p-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Fecha de visita</label>
                                    <div className="block text-sm font-medium text-gray-700">
                                        {!selectedDay && <p>Seleccione Fecha</p>}
                                        <DayPickerInput onDayChange={this.handleDayChange} />
                                    </div>
                                </div>
                                <div className="col-span-2 p-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Hora de visita</label>
                                    <div className="block text-sm font-medium text-gray-700">
                                        <TimePicker className='block text-sm font-medium text-gray-700' onChange={this.handleHourChange} value={this.state.time} />
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="actions container flex flex-col p-4 text-white">
                            <Link to='/success' className="btn-primary text-center uppercase p-2 m-2">VERIFICAR DISPONIBILIDAD</Link>
                        </div> 
                    </div>
                </div>
            </div>
        );
    }
}

export { NewProspectPage };