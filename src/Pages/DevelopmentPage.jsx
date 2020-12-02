import React from 'react'

import { authenticationService } from '@/_services'
import { Navbar } from '@/_components'
import { Link } from 'react-router-dom';

import Project_One from '../assets/img/projects/project_1.jpg'
import Project_Two from '../assets/img/projects/project_2.jpg'
import Project_Tree from '../assets/img/projects/project_3.jpg'

class DevelopmentPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            isActive: true
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
                    <div className="prospect__container bg-white rounded-tl-2xl pt-8 pr-8 pl-8">
                        <div className="projects overflow-auto overscroll-contain">
                            <div className="project__banner container p-4">
                                <label className="bg-black shadow-lg">
                                    <input type="radio" name="dev_id" value="Project_One"/>
                                    <img className="object-cover" src={Project_One} alt="DevName" />
                                </label>
                            </div>
                            <div className="project__banner container p-4">
                                <label className="bg-black shadow-lg">
                                    <input type="radio" name="dev_id" value="Project_One"/>
                                    <img className="object-cover" src={Project_Two} alt="DevName" />
                                </label>
                            </div>
                            <div className="project__banner container p-4">
                                <label className="bg-black shadow-lg">
                                    <input type="radio" name="dev_id" value="Project_Tree"/>
                                    <img className="object-cover" src={Project_Tree} alt="DevName" />
                                </label>
                            </div>
                            <div className="project__banner container p-4">
                                <label className="bg-black shadow-lg">
                                    <input type="radio" name="dev_id" value="Project_One"/>
                                    <img className="object-cover" src={Project_One} alt="DevName" />
                                </label>
                            </div>
                            <div className="project__banner container p-4">
                                <label className="bg-black shadow-lg">
                                    <input type="radio" name="dev_id" value="Project_Tree"/>
                                    <img className="object-cover" src={Project_Tree} alt="DevName" />
                                </label>
                            </div>
                            <div className="project__banner container p-4">
                                <label className="bg-black shadow-lg">
                                    <input type="radio" name="dev_id" value="Project_Two"/>
                                    <img className="object-cover" src={Project_Two} alt="DevName" />
                                </label>
                            </div>
                        </div>                
                        <div className="actions container flex flex-col p-4 text-white">
                            <Link to='/project' className="btn-primary text-center uppercase p-2 m-2">Ver Más</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { DevelopmentPage };