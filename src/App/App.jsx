import React from 'react'
import { Router, Route, Switch, Redirect  } from 'react-router-dom'

import { history } from '@/_helpers'
import { authenticationService } from '@/_services'
import { PrivateRoute } from '@/_components'
import { HomePage, LoginPage, LocationsPage, ErrorPage, LeadListPage, AboutPage, RegisterPage,
    LeadPage, NewLeadPage, SuccessPage, ItineraryPage, LocationDetailsPage, LeadBooking, ConfirmPage
        } from '@/Pages'

import 'tailwindcss/tailwind.css'
import 'react-widgets/dist/css/react-widgets.css'

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
                    <PrivateRoute exact path={'/lead/:id'} component={LeadPage} />
                    <PrivateRoute exact path={'/lead/:id_lead/newBooking'} component={LeadBooking} />
                    <PrivateRoute exact path={'/myleads'} component={LeadListPage} />
                    <PrivateRoute exact path={'/location/:id/new'} component={NewLeadPage} />
                    <PrivateRoute exact path={'/error'} component={ErrorPage} />
                    <PrivateRoute exact path={'/success'} component={SuccessPage} />
                    <PrivateRoute exact path={'/about'} component={AboutPage} />
                    <Route path='/login' component={LoginPage} />
                    <Route path='/register' component={RegisterPage} />
                    <Route exact path={'/confirm/:id/'} component={ConfirmPage} />
                    <Redirect to={'/'} />
                </Switch>
            </Router>
        );
    }
}

export { App }; 