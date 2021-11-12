import React from 'react'
import Skeleton from 'react-loading-skeleton'

import { authenticationService, locationsService } from '@/_services'
import { Navbar, AssistButton } from '@/_components'
import { Link } from 'react-router-dom'

class LocationDetailsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            currentUser: authenticationService.currentUserValue,
            location: []
        };
    }

    componentDidMount() {
        this.getLocation();
    };

    getLocation() {
        locationsService.getSingleLocation(this.state.id)
        .then(location => this.setState({ location }))
        .catch(err => console.log(err))
    }

    render() {
        const { currentUser } = this.state;
        const { location } = this.state;
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
                            <div className="project__image w-full mx-auto">
                                <img className="object-cover" src={location.picture || <Skeleton circle={true} height={500} width={500} />} alt="Project Image"/>
                            </div>
                            <h2 className="project__title mt-2 mb-4 font-bold">{location.name || <Skeleton height={25} />}</h2> 
                            <p className="project__description">{location.description || <Skeleton count={10} />}</p>
                        </div>                
                        <div className="actions w-full flex flex-row text-white uppercase font-bold p-2">
                            <a href={location.drive_url} className="bg-gray-200 p-2 m-2 text-center rounded text-gray-500 text-xs">
                                <div className="flex content-center">
                                    <div className="drive_img w-4 m-1">
                                        <img className='object-cover' src="https://cdn1.iconfinder.com/data/icons/logotypes/32/google-drive-512.png" alt="Google Drive"/>
                                    </div>
                                    <p className='self-center'>Drive</p>                                    
                                </div>
                            </a>
                            {location && (
                                <Link to={`/location/${location.id}/new`} className="btn-primary text-center uppercase p-2 m-2 w-full">Programar Cita</Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { LocationDetailsPage };