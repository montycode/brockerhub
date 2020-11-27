import React from 'react'

import { authenticationService } from '@/_services'
import { Navbar } from '@/_components'
import { Link } from 'react-router-dom'

import Logo from '../assets/img/maskable_icon.png'

class ProspectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue
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
                                <div className="min-w-0 relative flex-auto font-bold">
                                    <h4 className='p-1'>Lina Bo</h4>
                                    <p>linabo@gmail.com</p>
                                    <p>(664) 123-4567</p>
                                    <button className='bg-orange rounded-lg pl-1 pr-1 w-full'>Llamar</button>
                                    <label for="country" className="text-sm font-medium">Estatus</label>
                                    <select id="country" className="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-orange focus:border-orange text-sm text-black">
                                        <option>Seleccione</option>
                                        <option>Cita Programada</option>
                                        <option>Cita Cancelada</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prospect__container bg-white rounded-tl-2xl pt-8 pr-8 pl-8">
                        <div className="prospect_details overflow-auto overscroll-contain">
                            <table className='table-auto flex container'>
                                <tbody className='container flex flex-col'>
                                    <tr className='flex justify-between'>
                                        <td className='text-xs text-gray-300 p-2'>
                                            <p>Desarrollo</p>
                                        </td>
                                        <td className='text-xs text-gray-300 p-2'>
                                            <p>Fecha de Cita</p>
                                        </td>
                                    </tr>  
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2 flex flex-row items-center'>
                                            <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1" disabled checked />
                                            <div className="data flex-auto p-1">
                                                <p className='text-sm'>Black Eleven</p>
                                            </div>
                                        </td>
                                        <td className='text-xs p-2'>9 Sep 2020</td>
                                    </tr>
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2 flex flex-row items-center'>
                                            <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1" disabled checked />
                                            <div className="data flex-auto p-1">
                                                <p className='text-sm'>Black Eleven</p>
                                            </div>
                                        </td>
                                        <td className='text-xs p-2'>9 Sep 2020</td>
                                    </tr>
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2 flex flex-row items-center'>
                                            <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1" disabled checked />
                                            <div className="data flex-auto p-1">
                                                <p className='text-sm'>Black Eleven</p>
                                            </div>
                                        </td>
                                        <td className='text-xs p-2'>9 Sep 2020</td>
                                    </tr>
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2 flex flex-row items-center'>
                                            <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1" disabled checked />
                                            <div className="data flex-auto p-1">
                                                <p className='text-sm'>Black Eleven</p>
                                            </div>
                                        </td>
                                        <td className='text-xs p-2'>9 Sep 2020</td>
                                    </tr>
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2 flex flex-row items-center'>
                                            <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1" disabled checked />
                                            <div className="data flex-auto p-1">
                                                <p className='text-sm'>Black Eleven</p>
                                            </div>
                                        </td>
                                        <td className='text-xs p-2'>9 Sep 2020</td>
                                    </tr>
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2 flex flex-row items-center'>
                                            <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1" disabled checked />
                                            <div className="data flex-auto p-1">
                                                <p className='text-sm'>Black Eleven</p>
                                            </div>
                                        </td>
                                        <td className='text-xs p-2'>9 Sep 2020</td>
                                    </tr>
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2 flex flex-row items-center'>
                                            <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1" disabled checked />
                                            <div className="data flex-auto p-1">
                                                <p className='text-sm'>Black Eleven</p>
                                            </div>
                                        </td>
                                        <td className='text-xs p-2'>9 Sep 2020</td>
                                    </tr>
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2 flex flex-row items-center'>
                                            <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1" disabled checked />
                                            <div className="data flex-auto p-1">
                                                <p className='text-sm'>Black Eleven</p>
                                            </div>
                                        </td>
                                        <td className='text-xs p-2'>9 Sep 2020</td>
                                    </tr>
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2 flex flex-row items-center'>
                                            <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1" disabled checked />
                                            <div className="data flex-auto p-1">
                                                <p className='text-sm'>Black Eleven</p>
                                            </div>
                                        </td>
                                        <td className='text-xs p-2'>9 Sep 2020</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>                        
                        <div className="actions container flex flex-col p-4 text-white">
                            <Link to='/appointments' className="btn-primary text-center uppercase p-2 m-2">Programar Nueva Visita</Link>
                        </div>                     
                    </div>
                </div>
            </div>
        );
    }
}

export { ProspectPage };