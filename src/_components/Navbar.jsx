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
        };
    }

    logout() {
        authenticationService.logout();
        history.push('/login');
    }

    render() {
        return (
            <Fragment>
                <header className="px-6 bg-transparent flex flex-wrap items-center py-2">
                    <div className="flex-1 flex justify-between items-center">
                        <Link to="/"><p className="text-gray-400 font-bold">BrokerHub</p></Link>
                    </div>
                    <label htmlFor="menu-toggle" className="pointer-cursor block"><svg className="fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
                    <input className="hidden" type="checkbox" id="menu-toggle" />
                    <div className="hidden w-full" id="menu">
                        <nav>
                            <ul className="items-center justify-between text-base text-gray-400 pt-4">
                                <li><a href='#!' className="py-3 px-0 block border-b-2 border-transparent hover:border-orange">Acerca de Nosotros</a></li>
                                <li><a onClick={this.logout} className="py-3 px-0 block border-b-2 border-transparent hover:border-orange">Cerrar Sesión</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </ Fragment>
        );
    }
}

export { Navbar }; 