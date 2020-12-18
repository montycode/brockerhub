import React from 'react'
import { Link } from 'react-router-dom'

import { authenticationService } from '@/_services'
import { Navbar, AssistButton } from '@/_components'

import Logo from '../assets/img/logo-bh.png'

class AboutPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
        };
    }

    componentDidMount() {
    };

    render() {
        const { currentUser } = this.state;
        return (
            <div className='prospect flex-col'>
                <div className='prospect__data text-left'>
                    {currentUser && <Navbar /> }
                    <div className='title font-bold text-white text-l uppercase p-4'>
                        <h3>Acerca de Nosotros</h3>
                    </div>
                    <AssistButton classNames='fill-current text-white w-6 h-6' />
                    <div className='prospect__container bg-white rounded-tl-2xl pr-6 pl-6'>
                        <div className='projects overflow-auto overscroll-contain container mt-2'>
                            <div className='w-120 p-6 mt-2'>
                                <img className='object-contain mx-auto' src={Logo} alt='Brokerhub'/>
                            </div>
                            <div className='text-center'>
                                <p className='text-gray-400 text-sm p-2 text-justify'>
                                   <span className="font-bold">Brokerhub</span> es una empresa que atiende las necesidades de ventas y rentas externas de los desarrolladores de conjuntos habitacionales, comerciales, corporativos e industriales.
                                </p>
                                <p className='text-gray-400 text-sm p-2 text-justify'>
                                En <span className="font-bold">Brokerhub</span> la venta y/o renta exitosa del inventario inmobiliario de nuestros clientes es nuestro principal objetivo. Nuestro equipo, con más de 15 años de experiencia en el sector inmobiliario, reconoce el papel tan importante que juega la fuerza externa de ventas en los proyectos inmobiliarios, así como los retos que representa su manejo dentro del proceso. Por ello brokerhub ofrece un servicio integral con soluciones para nuestros clientes que van desde una amplia plataforma de concentración de inmobiliarias y brokers independientes, difusión masiva de los desarrollos inmobiliarios, mediación de conflictos, control de registro de clientes, programación de citas, presentación de proyectos, capacitación a fuerza de ventas externa, atención personalizada, seguimiento de prospectos, acceso controlado a información de los proyectos y administración de comisiones.
                                </p>
                            </div>
                        </div>                
                        <div className='actions container flex flex-col p-4 text-white'>
                            <Link to='/' className='btn-primary uppercase p-2 m-2 text-center font-bold'>Volver</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { AboutPage };