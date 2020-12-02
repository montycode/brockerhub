import React from 'react'

import { authenticationService } from '@/_services'
import { Navbar, AssistButton } from '@/_components'
import { Link } from 'react-router-dom'

import Project_One from '../assets/img/projects/project_1.jpg'
import DriveIcon from '../assets/img/drive.png'

class DevelopmentDetailsPage extends React.Component {
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
            <div className="prospect flex-col">
                <div className="prospect__data text-left">
                    {currentUser && <Navbar /> }
                    <div className="title font-bold text-white text-l capitalize p-8">
                        <h3>SELECCIONAR DESARROLLO</h3>
                    </div>
                    <AssistButton classNames='fill-current text-white w-6 h-6' />
                    <div className="prospect__container bg-white rounded-tl-2xl pt-8 pr-8 pl-8">
                        <div className="projects overflow-auto overscroll-contain mt-2">
                            <div className="project__image w-full mx-auto">
                                <img className="object-cover" src={Project_One} alt="Project Image"/>
                            </div>
                            <h2 className="project__title mt-2 mb-4 font-bold">Project Name</h2>
                            <p className="project__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a est lorem. Fusce tristique ligula sit amet felis fermentum, non congue magna pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut risus ac ex sollicitudin mollis. Nulla ut auctor odio, et vehicula est.</p>
                        </div>                
                        <div className="actions w-full flex flex-row text-white uppercase font-bold">
                            <a href='https://www.google.com/intl/es-419_ve/drive/' className="bg-gray-200 p-2 m-2 text-center rounded text-gray-500 text-xs">
                                <div className="flex content-center">
                                    <div className="drive_img w-6">
                                        <img className='object-cover' src={DriveIcon} alt="Google Drive"/>
                                    </div>
                                    <p className='self-center'>Drive</p>                                    
                                </div>
                            </a>
                            <Link to='/prospect/new' className="btn-primary text-center uppercase p-2 m-2 w-full">Programar Cita</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { DevelopmentDetailsPage };