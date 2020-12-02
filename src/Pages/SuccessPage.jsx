import React from 'react'
import { Link } from 'react-router-dom'

import { authenticationService } from '@/_services'
import { Navbar, AssistButton } from '@/_components'

import Success from '../assets/img/success.png'

class SuccessPage extends React.Component {
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
                    <div className='title font-bold text-white text-l uppercase p-4'>
                        <h3>VALIDACIÓN PROSPECTOS</h3>
                    </div>
                    <AssistButton classNames='fill-current text-white w-6 h-6' />
                    <div className='prospect__container bg-white rounded-tl-2xl pr-6 pl-6'>
                        <div className='projects container mt-2'>
                            <div className='w-120 p-6 mt-2'>
                                <img className='object-contain mx-auto' src={Success} alt='Success'/>
                            </div>
                            <div className='text-center font-bold'>
                                <h2 className='text-orange text-3xl p-2'>¡Felicidades!</h2>
                                <p className='text-gray-400 text-sm p-2'>Tu prospecto ha sido registrado.</p>
                            </div>
                        </div>                
                        <div className='actions container flex flex-col p-4 text-white'>
                            <Link to='/appointments' className='btn-primary uppercase p-2 m-2 text-center font-bold'>REGISTRAR OTRO PROSPECTO</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { SuccessPage };