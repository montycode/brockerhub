import React from 'react'

import { authenticationService } from '@/_services'
import { Navbar } from '@/_components'

import Oops from '../assets/img/ops.png'

class ErrorPage extends React.Component {
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
            <div className='prospect flex-col'>
                <div className='prospect__data text-left'>
                    {currentUser && <Navbar /> }
                    <div className='title font-bold text-white text-l uppercase p-8'>
                        <h3>VALIDACIÓN PROSPECTOS</h3>
                    </div>
                    <div className='prospect__container bg-white rounded-tl-2xl pt-8 pr-8 pl-8'>
                        <div className='projects container'>
                            <div className='w-120 p-6 mt-2'>
                                <img className='object-contain mx-auto' src={Oops} alt='OoPs!'/>
                            </div>
                            <div className='text-center font-bold'>
                                <h2 className='text-orange text-6xl p-2'>¡OoPS!</h2>
                                <p className='text-gray-400 text-xs p-2'>Ya existe un registro con estos datos, en breve nos pondremos en contacto contigo.</p>
                            </div>
                        </div>                
                        <div className='actions container flex flex-col p-4 text-white'>
                            <Link to='/prospect/new' className='btn-primary uppercase p-2 m-2'>REGISTRAR OTRO PROSPECTO</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { ErrorPage };