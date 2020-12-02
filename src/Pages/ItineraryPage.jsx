import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

import { authenticationService } from '@/_services'
import { Navbar, AssistButton } from '@/_components'
import { Link } from 'react-router-dom';

class ItineraryPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            selectedDay: undefined
        };

        this.handleDayChange = this.handleDayChange.bind(this);
    };

    handleDayChange(day) {
        this.setState({ selectedDay: day });
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
                    <div className="title font-bold text-white text-l uppercase p-8">
                        <h3>Mi Itinerario</h3>
                    </div>
                    <AssistButton classNames='fill-current text-white w-6 h-6' />
                    <div className="prospect__container bg-white rounded-tl-2xl pt-8 pr-8 pl-8">
                        <DayPickerInput classNames='mt-2' onDayChange={this.handleDayChange} />
                        <div className="projects overflow-auto overscroll-contain">
                            <table className='table-auto flex container'>
                                <tbody className='container flex flex-col'>
                                    <tr className='flex justify-between'>
                                        <td className='font-bold text-l p-2'>9:00 AM</td>
                                        <td className='text-xs p-2'>
                                            <p>Lina Bo</p>
                                            <p className='text-gray-300'>City Point</p>
                                        </td>
                                        <td className='text-xs p-2'>5 Nov 2020</td>
                                    </tr>
                                    <tr className='flex justify-between'>
                                        <td className='font-bold text-l p-2'>9:00 AM</td>
                                        <td className='text-xs p-2'>
                                            <p>Lina Bo</p>
                                            <p className='text-gray-300'>City Point</p>
                                        </td>
                                        <td className='text-xs p-2'>5 Nov 2020</td>
                                    </tr>
                                    <tr className='flex justify-between'>
                                        <td className='font-bold text-l p-2'>9:00 AM</td>
                                        <td className='text-xs p-2'>
                                            <p>Lina Bo</p>
                                            <p className='text-gray-300'>City Point</p>
                                        </td>
                                        <td className='text-xs p-2'>5 Nov 2020</td>
                                    </tr>
                                    <tr className='flex justify-between'>
                                        <td className='font-bold text-l p-2'>9:00 AM</td>
                                        <td className='text-xs p-2'>
                                            <p>Lina Bo</p>
                                            <p className='text-gray-300'>City Point</p>
                                        </td>
                                        <td className='text-xs p-2'>5 Nov 2020</td>
                                    </tr>
                                    <tr className='flex justify-between'>
                                        <td className='font-bold text-l p-2'>9:00 AM</td>
                                        <td className='text-xs p-2'>
                                            <p>Lina Bo</p>
                                            <p className='text-gray-300'>City Point</p>
                                        </td>
                                        <td className='text-xs p-2'>5 Nov 2020</td>
                                    </tr>
                                    <tr className='flex justify-between'>
                                        <td className='font-bold text-l p-2'>9:00 AM</td>
                                        <td className='text-xs p-2'>
                                            <p>Lina Bo</p>
                                            <p className='text-gray-300'>City Point</p>
                                        </td>
                                        <td className='text-xs p-2'>5 Nov 2020</td>
                                    </tr>
                                    <tr className='flex justify-between'>
                                        <td className='font-bold text-l p-2'>9:00 AM</td>
                                        <td className='text-xs p-2'>
                                            <p>Lina Bo</p>
                                            <p className='text-gray-300'>City Point</p>
                                        </td>
                                        <td className='text-xs p-2'>5 Nov 2020</td>
                                    </tr>
                                    <tr className='flex justify-between'>
                                        <td className='font-bold text-l p-2'>9:00 AM</td>
                                        <td className='text-xs p-2'>
                                            <p>Lina Bo</p>
                                            <p className='text-gray-300'>City Point</p>
                                        </td>
                                        <td className='text-xs p-2'>5 Nov 2020</td>
                                    </tr>
                                    <tr className='flex justify-between'>
                                        <td className='font-bold text-l p-2'>9:00 AM</td>
                                        <td className='text-xs p-2'>
                                            <p>Lina Bo</p>
                                            <p className='text-gray-300'>City Point</p>
                                        </td>
                                        <td className='text-xs p-2'>5 Nov 2020</td>
                                    </tr>
                                    <tr className='flex justify-between'>
                                        <td className='font-bold text-l p-2'>9:00 AM</td>
                                        <td className='text-xs p-2'>
                                            <p>Lina Bo</p>
                                            <p className='text-gray-300'>City Point</p>
                                        </td>
                                        <td className='text-xs p-2'>5 Nov 2020</td>
                                    </tr>
                                    <tr className='flex justify-between'>
                                        <td className='font-bold text-l p-2'>9:00 AM</td>
                                        <td className='text-xs p-2'>
                                            <p>Lina Bo</p>
                                            <p className='text-gray-300'>City Point</p>
                                        </td>
                                        <td className='text-xs p-2'>5 Nov 2020</td>
                                    </tr>
                                    <tr className='flex justify-between'>
                                        <td className='font-bold text-l p-2'>9:00 AM</td>
                                        <td className='text-xs p-2'>
                                            <p>Lina Bo</p>
                                            <p className='text-gray-300'>City Point</p>
                                        </td>
                                        <td className='text-xs p-2'>5 Nov 2020</td>
                                    </tr>
                                    <tr className='flex justify-between'>
                                        <td className='font-bold text-l p-2'>9:00 AM</td>
                                        <td className='text-xs p-2'>
                                            <p>Lina Bo</p>
                                            <p className='text-gray-300'>City Point</p>
                                        </td>
                                        <td className='text-xs p-2'>5 Nov 2020</td>
                                    </tr>
                                    <tr className='flex justify-between'>
                                        <td className='font-bold text-l p-2'>9:00 AM</td>
                                        <td className='text-xs p-2'>
                                            <p>Lina Bo</p>
                                            <p className='text-gray-300'>City Point</p>
                                        </td>
                                        <td className='text-xs p-2'>5 Nov 2020</td>
                                    </tr>
                                    <tr className='flex justify-between'>
                                        <td className='font-bold text-l p-2'>9:00 AM</td>
                                        <td className='text-xs p-2'>
                                            <p>Lina Bo</p>
                                            <p className='text-gray-300'>City Point</p>
                                        </td>
                                        <td className='text-xs p-2'>5 Nov 2020</td>
                                    </tr>
                                    <tr className='flex justify-between'>
                                        <td className='font-bold text-l p-2'>9:00 AM</td>
                                        <td className='text-xs p-2'>
                                            <p>Lina Bo</p>
                                            <p className='text-gray-300'>City Point</p>
                                        </td>
                                        <td className='text-xs p-2'>5 Nov 2020</td>
                                    </tr>
                                    <tr className='flex justify-between'>
                                        <td className='font-bold text-l p-2'>9:00 AM</td>
                                        <td className='text-xs p-2'>
                                            <p>Lina Bo</p>
                                            <p className='text-gray-300'>City Point</p>
                                        </td>
                                        <td className='text-xs p-2'>5 Nov 2020</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>                        
                        <div className="actions container flex flex-col p-4 text-white">
                            <Link to='/appointments' className="btn-primary text-center uppercase p-2 m-2">PROGRAMAR CITA</Link>
                        </div>                     
                    </div>
                </div>
            </div>
        );
    }
}

export { ItineraryPage };