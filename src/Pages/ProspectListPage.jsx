import React from 'react'

import { authenticationService } from '@/_services'
import { Navbar } from '@/_components'
import { Link } from 'react-router-dom'

import Logo from '../assets/img/maskable_icon.png'

class ProspectListPage extends React.Component {
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
                    <div className="title font-bold text-white text-l uppercase p-8">
                        <h3>Lista de Prospectos</h3>
                    </div>
                    <div className="prospect__container bg-white rounded-tl-2xl pt-8 pr-8 pl-8">
                    <div className="pt-2 relative mx-auto text-gray-600">
                        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:ring-orange focus:border-orange w-full"
                        type="search" name="search" placeholder="Search" />
                        <button type="submit" className="absolute left-0 top-0 mt-5 ml-1">
                            <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                                viewBox="0 0 56.966 56.966">
                                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                            </svg>
                        </button>
                    </div>
                        <div className="projects overflow-auto overscroll-contain">
                            <table className='table-auto flex container'>
                                <tbody className='container flex flex-col'>
                                    <tr className='flex justify-between'>
                                        <td className='text-xs text-gray-300 p-2'>
                                            <p>Contacto</p>
                                        </td>
                                        <td className='text-xs text-gray-300 p-2'>
                                            <p>Fecha de Alta</p>
                                        </td>
                                    </tr>  
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2'>
                                            <Link to='/prospect' className='flex flex-row items-center'>
                                                <img className='fw-6 h-6 rounded-full bg-gray-100' src={Logo} alt="Logo"/>
                                                <div className="data flex-auto">
                                                    <p>Lina Bo</p>
                                                    <p className='text-gray-300'>(664) 123-4567</p>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className='text-xs p-2'><Link to='/prospect' >9 Sep 2020 </Link></td>
                                    </tr>
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2'>
                                            <Link to='/prospect' className='flex flex-row items-center'>
                                                <img className='fw-6 h-6 rounded-full bg-gray-100' src={Logo} alt="Logo"/>
                                                <div className="data flex-auto">
                                                    <p>Lina Bo</p>
                                                    <p className='text-gray-300'>(664) 123-4567</p>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className='text-xs p-2'><Link to='/prospect' >9 Sep 2020 </Link></td>
                                    </tr>  
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2'>
                                            <Link to='/prospect' className='flex flex-row items-center'>
                                                <img className='fw-6 h-6 rounded-full bg-gray-100' src={Logo} alt="Logo"/>
                                                <div className="data flex-auto">
                                                    <p>Lina Bo</p>
                                                    <p className='text-gray-300'>(664) 123-4567</p>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className='text-xs p-2'><Link to='/prospect' >9 Sep 2020 </Link></td>
                                    </tr>  
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2'>
                                            <Link to='/prospect' className='flex flex-row items-center'>
                                                <img className='fw-6 h-6 rounded-full bg-gray-100' src={Logo} alt="Logo"/>
                                                <div className="data flex-auto">
                                                    <p>Lina Bo</p>
                                                    <p className='text-gray-300'>(664) 123-4567</p>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className='text-xs p-2'><Link to='/prospect' >9 Sep 2020 </Link></td>
                                    </tr>  
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2'>
                                            <Link to='/prospect' className='flex flex-row items-center'>
                                                <img className='fw-6 h-6 rounded-full bg-gray-100' src={Logo} alt="Logo"/>
                                                <div className="data flex-auto">
                                                    <p>Lina Bo</p>
                                                    <p className='text-gray-300'>(664) 123-4567</p>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className='text-xs p-2'><Link to='/prospect' >9 Sep 2020 </Link></td>
                                    </tr>
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2'>
                                            <Link to='/prospect' className='flex flex-row items-center'>
                                                <img className='fw-6 h-6 rounded-full bg-gray-100' src={Logo} alt="Logo"/>
                                                <div className="data flex-auto">
                                                    <p>Lina Bo</p>
                                                    <p className='text-gray-300'>(664) 123-4567</p>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className='text-xs p-2'><Link to='/prospect' >9 Sep 2020 </Link></td>
                                    </tr>  
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2'>
                                            <Link to='/prospect' className='flex flex-row items-center'>
                                                <img className='fw-6 h-6 rounded-full bg-gray-100' src={Logo} alt="Logo"/>
                                                <div className="data flex-auto">
                                                    <p>Lina Bo</p>
                                                    <p className='text-gray-300'>(664) 123-4567</p>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className='text-xs p-2'><Link to='/prospect' >9 Sep 2020 </Link></td>
                                    </tr>  
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2'>
                                            <Link to='/prospect' className='flex flex-row items-center'>
                                                <img className='fw-6 h-6 rounded-full bg-gray-100' src={Logo} alt="Logo"/>
                                                <div className="data flex-auto">
                                                    <p>Lina Bo</p>
                                                    <p className='text-gray-300'>(664) 123-4567</p>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className='text-xs p-2'><Link to='/prospect' >9 Sep 2020 </Link></td>
                                    </tr>  
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2'>
                                            <Link to='/prospect' className='flex flex-row items-center'>
                                                <img className='fw-6 h-6 rounded-full bg-gray-100' src={Logo} alt="Logo"/>
                                                <div className="data flex-auto">
                                                    <p>Lina Bo</p>
                                                    <p className='text-gray-300'>(664) 123-4567</p>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className='text-xs p-2'><Link to='/prospect' >9 Sep 2020 </Link></td>
                                    </tr>  
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2'>
                                            <Link to='/prospect' className='flex flex-row items-center'>
                                                <img className='fw-6 h-6 rounded-full bg-gray-100' src={Logo} alt="Logo"/>
                                                <div className="data flex-auto">
                                                    <p>Lina Bo</p>
                                                    <p className='text-gray-300'>(664) 123-4567</p>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className='text-xs p-2'><Link to='/prospect' >9 Sep 2020 </Link></td>
                                    </tr>  
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2'>
                                            <Link to='/prospect' className='flex flex-row items-center'>
                                                <img className='fw-6 h-6 rounded-full bg-gray-100' src={Logo} alt="Logo"/>
                                                <div className="data flex-auto">
                                                    <p>Lina Bo</p>
                                                    <p className='text-gray-300'>(664) 123-4567</p>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className='text-xs p-2'><Link to='/prospect' >9 Sep 2020 </Link></td>
                                    </tr>  
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2'>
                                            <Link to='/prospect' className='flex flex-row items-center'>
                                                <img className='fw-6 h-6 rounded-full bg-gray-100' src={Logo} alt="Logo"/>
                                                <div className="data flex-auto">
                                                    <p>Lina Bo</p>
                                                    <p className='text-gray-300'>(664) 123-4567</p>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className='text-xs p-2'><Link to='/prospect' >9 Sep 2020 </Link></td>
                                    </tr>  
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2'>
                                            <Link to='/prospect' className='flex flex-row items-center'>
                                                <img className='fw-6 h-6 rounded-full bg-gray-100' src={Logo} alt="Logo"/>
                                                <div className="data flex-auto">
                                                    <p>Lina Bo</p>
                                                    <p className='text-gray-300'>(664) 123-4567</p>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className='text-xs p-2'><Link to='/prospect' >9 Sep 2020 </Link></td>
                                    </tr>  
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2'>
                                            <Link to='/prospect' className='flex flex-row items-center'>
                                                <img className='fw-6 h-6 rounded-full bg-gray-100' src={Logo} alt="Logo"/>
                                                <div className="data flex-auto">
                                                    <p>Lina Bo</p>
                                                    <p className='text-gray-300'>(664) 123-4567</p>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className='text-xs p-2'><Link to='/prospect' >9 Sep 2020 </Link></td>
                                    </tr>  
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2'>
                                            <Link to='/prospect' className='flex flex-row items-center'>
                                                <img className='fw-6 h-6 rounded-full bg-gray-100' src={Logo} alt="Logo"/>
                                                <div className="data flex-auto">
                                                    <p>Lina Bo</p>
                                                    <p className='text-gray-300'>(664) 123-4567</p>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className='text-xs p-2'><Link to='/prospect' >9 Sep 2020 </Link></td>
                                    </tr>  
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2'>
                                            <Link to='/prospect' className='flex flex-row items-center'>
                                                <img className='fw-6 h-6 rounded-full bg-gray-100' src={Logo} alt="Logo"/>
                                                <div className="data flex-auto">
                                                    <p>Lina Bo</p>
                                                    <p className='text-gray-300'>(664) 123-4567</p>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className='text-xs p-2'><Link to='/prospect' >9 Sep 2020 </Link></td>
                                    </tr>  
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2'>
                                            <Link to='/prospect' className='flex flex-row items-center'>
                                                <img className='fw-6 h-6 rounded-full bg-gray-100' src={Logo} alt="Logo"/>
                                                <div className="data flex-auto">
                                                    <p>Lina Bo</p>
                                                    <p className='text-gray-300'>(664) 123-4567</p>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className='text-xs p-2'><Link to='/prospect' >9 Sep 2020 </Link></td>
                                    </tr>  
                                    <tr className='flex justify-between items-center'>
                                        <td className='text-xs p-2'>
                                            <Link to='/prospect' className='flex flex-row items-center'>
                                                <img className='fw-6 h-6 rounded-full bg-gray-100' src={Logo} alt="Logo"/>
                                                <div className="data flex-auto">
                                                    <p>Lina Bo</p>
                                                    <p className='text-gray-300'>(664) 123-4567</p>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className='text-xs p-2'><Link to='/prospect' >9 Sep 2020 </Link></td>
                                    </tr>                                    
                                </tbody>
                            </table>
                        </div>                        
                        <div className="actions container flex flex-col p-4 text-white">
                            <Link to='/prospect' className="btn-primary text-center uppercase p-2 m-2">Continuar</Link>
                        </div>                     
                    </div>
                </div>
            </div>
        );
    }
}

export { ProspectListPage };