import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { history } from '@/_helpers';
import { authenticationService } from '@/_services';

import "tailwindcss/tailwind.css";

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            isOpen: false
        };
        
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    logout() {
        authenticationService.logout();
        history.push('/login');
    }

    openNav() {
        this.setState({isOpen: true})
    }

    closeNav() {
        this.setState({isOpen: false})
    }

    render() {
        return (
            <Fragment>
                <header className="">
                    <div className="relative">
                        <div className="mx-auto px-6">
                            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                                <div className="flex justify-start lg:w-0 lg:flex-1">                    
                                    <Link to="/"><p className="text-gray-400 font-bold">brokerhub</p></Link>
                                </div>
                                <div className="-mr-2 -my-2 md:hidden">
                                    <button type="button" onClick={this.openNav} className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900">
                                        <span className="sr-only">Open menu</span>
                                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>
                                <nav className="hidden md:flex space-x-10">
                                    <Link to='/about' className="text-base font-medium">Acerca de Nosotros</Link>
                                    <Link to='/profile' className="text-base font-medium">Mi Perfil</Link>
                                    <a onClick={this.logout} className="py-3 px-0 block border-b-2 border-transparent hover:border-orange">Cerrar Sesión</a>
                                </nav>
                            </div>
                        </div>
                        <div className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-50 ${this.state.isOpen ? '' : 'hidden'}`} >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <Link to="/"><p className="text-gray-400 font-bold">brokerhub</p></Link>
                                        </div>
                                        <div className="-mr-2">
                                            <button type="button" onClick={this.closeNav} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900">
                                                <span className="sr-only">Cerrar Menu</span>
                                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid gap-y-8">
                                            <Link to='/about' className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                                <span className="ml-3 text-base font-medium text-gray-900">
                                                    Acerca de Nosotros
                                                </span>
                                            </Link>
                                            <Link to='/profile' className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                                                <span className="ml-3 text-base font-medium text-gray-900">
                                                    Mi Perfil
                                                </span>
                                            </Link>
                                        </nav>
                                    </div>
                                </div>
                                <div className="py-6 px-5 space-y-6">
                                    <div>
                                        <a onClick={this.logout} className="w-full flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-base font-medium text-white bg-orange hover:opacity-75">Cerrar Sesión</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </header>
            </ Fragment>
        );
    }
}

export { Navbar }; 