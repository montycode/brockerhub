import React from 'react'
import { Router, Route, Switch, Redirect  } from 'react-router-dom'

import { history } from '@/_helpers'
import { authenticationService } from '@/_services'
import { PrivateRoute } from '@/_components'
import { HomePage, LoginPage, LocationsPage, ErrorPage, ProspectListPage, AboutPage,
         ProspectPage, NewProspectPage, SuccessPage, ItineraryPage, LocationDetailsPage
        } from '@/Pages'

import 'tailwindcss/tailwind.css'

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
                <Switch>
                    <PrivateRoute exact path={'/'} component={HomePage} />
                    <PrivateRoute exact path={'/locations'} component={LocationsPage} />
                    <PrivateRoute exact path={'/location/:id'} component={LocationDetailsPage} />
                    <PrivateRoute exact path={'/itinerary'} component={ItineraryPage} />
                    <PrivateRoute exact path={'/prospect'} component={ProspectPage} />
                    <PrivateRoute exact path={'/myprospects'} component={ProspectListPage} />
                    <PrivateRoute exact path={'/prospect/new'} component={NewProspectPage} />
                    <PrivateRoute exact path={'/error'} component={ErrorPage} />
                    <PrivateRoute exact path={'/success'} component={SuccessPage} />
                    <PrivateRoute exact path={'/about'} component={AboutPage} />
                    <Route path='/login' component={LoginPage} />
                    <Redirect to={'/'} />
                </Switch>
            </Router>
        );
    }
}

export { App }; 