import React from 'react';
import { Router, Route } from 'react-router-dom';

import { history } from '@/_helpers';
import { authenticationService } from '@/_services';
import { PrivateRoute } from '@/_components';
import { HomePage } from '@/Pages/HomePage';
import { LoginPage } from '@/Pages/LoginPage';

import "tailwindcss/tailwind.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
    }


    render() {
        return (
            <Router history={history}>
                <PrivateRoute exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
            </Router>
        );
    }
}

export { App }; 