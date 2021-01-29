import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { authenticationService, locationsService } from '@/_services'
import { Navbar, AssistButton } from '@/_components'
import { Link } from 'react-router-dom';

class LocationsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            isActive: true,
            locations: [],
            loading: true,
            selectedOption: ''
        };
    }

    componentDidMount() {
        this.getLocations();
        this.setState({ loading: false })
    }
    
    getLocations(){
        locationsService.getLocations()
        .then(locations => this.setState({ locations }))
        .catch(err => console.log(err))
    }

    handleChange = (event) => {
        this.setState({
            selectedOption: event.target.value
        });
    }

    render() {
        const { currentUser } = this.state;
        const { locations } = this.state;
        const { selectedOption } = this.state;
        return (
            <div className="prospect flex-col">
                <div className="prospect__data text-left">
                    {currentUser && <Navbar /> }
                    <div className="title font-bold text-white text-l capitalize py-4 px-6">
                        <h3>SELECCIONAR DESARROLLO</h3>
                    </div>
                    <AssistButton classNames='fill-current text-white w-6 h-6' />
                    <div className="prospect__container bg-white rounded-tl-2xl pt-8 px-6">
                        <div className="projects overflow-auto overscroll-contain mt-2">
                            {locations.results ? locations.results.map(location => 
                            <div key={location.id} className="project__banner container p-4">
                                <label className="bg-black shadow-lg">
                                    <input type="radio" name="dev_id" value={location.id} 
                                    onChange={this.handleChange}/>
                                    <img className="object-cover" src={location.menu_image} alt={location.name} />
                                </label>
                            </div>
                            ) : <div style={{lineHeight: 3}}><Skeleton count={5} height={86} /></div>}
                        </div>                
                        <div className="actions flex flex-col p-2 text-white">
                            {selectedOption === '' ? <button className="bg-gray-300 text-center font-bold uppercase p-2 m-2 rounded-lg" disabled >Ver Más</button> :
                            <Link to={`/location/${selectedOption}`} className="btn-primary text-center font-bold uppercase p-2 m-2" >Ver Más</Link>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { LocationsPage };