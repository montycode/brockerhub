import React from 'react'
import { Link } from 'react-router-dom'
import Gravatar from 'react-gravatar'

import { authenticationService, userService } from '@/_services'
import { Navbar, AssistButton } from '@/_components'

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            base64TextString: ""
        };
    }

    componentDidMount() {
    };

    onChange (e) {
        console.log("File to upload:: ", e.target.files[0]);
        let file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    }

    _handleReaderLoaded (readerEvt) {
        let binaryString = readerEvt.target.result;
        this.setState({
            base64TextString: btoa(binaryString)
        });
    }

    onFileSubmit (e) {
        e.preventDefault();
        const preview = document.getElementById('profile-picture');
        console.log("BINARY STRING:: ", this.state.base64TextString);

        let payload = { photo: this.state.base64TextString };
        let userId = this.state.currentUser.user.id;
        console.log(userId, payload);
        userService.updatePhoto(userId, payload);
        preview.src = "data:image/png;base64," + this.state.base64TextString;
    }

    render() {
        const { currentUser } = this.state;
        console.log(currentUser);
        return (
            <div className='prospect flex-col'>
                <div className='prospect__data text-left'>
                    {currentUser && <Navbar /> }
                    <div className='title font-bold text-white text-l uppercase p-4'>
                        <h3>Mi Perfil</h3>
                    </div>
                    <AssistButton classNames='fill-current text-white w-6 h-6' />
                    <div className='prospect__container bg-white rounded-tl-2xl pr-6 pl-6'>
                        <div className="container mx-auto bg-white rounded">
                            <div className="xl:w-full py-5">
                                <div className="flex items-center w-11/12 mx-auto">
                                    <p className="text-lg text-gray-800 font-bold">Actualizar Perfil</p>
                                </div>
                            </div>
                            <div className="w-11/12 mx-auto">
                                <div className="xl:w-9/12 mx-auto xl:mx-0">
                                    <form onSubmit={(e) => this.onFileSubmit(e)} onChange={(e) => this.onChange(e)} className="flex flex-col xl:w-2/6 lg:w-2/6 w-full space-y-2" >
                                        <input className="w-full py-4 sm:px-12 px-4 flex justify-end rounded-bl rounded-br" type="file" name="image" id="file" accept=".jpeg, .png, .jpg" placeholder="Actualizar imagen de perfil" />
                                        <button className="bg-orange transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm focus:outline-none" type="submit">
                                        Actualizar Imagen
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <form>
                                <div className="w-11/12 mx-auto">
                                    <div className="xl:w-9/12 mx-auto xl:mx-0">
                                        <div className="bg-center bg-cover bg-no-repeat rounded relative mt-8 h-10">
                                            <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 mx-auto shadow">
                                                {currentUser.user.photo ? 
                                                <img id="profile-picture" src={currentUser.user.photo} className="w-full h-full object-cover overflow-hidden absolute z-0 rounded-full shadow" />
                                                :
                                                <Gravatar id="profile-picture" className='w-full h-full object-cover overflow-hidden absolute z-0 rounded-full shadow' email={currentUser.user.email} />
                                                }
                                            </div>
                                        </div>
                                        <div className="mt-16 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                                            <label htmlFor="first_name" className="pb-2 text-sm font-bold text-gray-800">
                                                Nombre
                                            </label>
                                            <input type="text" id="first_name" name="first_name" defaultValue={currentUser.user.first_name} className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-orange text-gray-800" placeholder="Nombre" required />
                                        </div>
                                        <div className="mt-8 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                                            <label htmlFor="last_name" className="pb-2 text-sm font-bold text-gray-800">
                                                Apellido
                                            </label>
                                            <input type="text" id="last_name" name="last_name" defaultValue={currentUser.user.last_name} className="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-orange text-gray-800" placeholder="Apellido" required />
                                        </div>
                                        <div className="mt-8 flex flex-col xl:w-2/6 lg:w-2/6 w-full">
                                            <label htmlFor="email" className="pb-2 text-sm font-bold text-gray-800">
                                                Correo Electrónico
                                            </label>
                                            <input type="email" id="email" name="email" defaultValue={currentUser.user.email} disabled className="border bg-gray-300 border-gray-300 pl-3 py-3 shadow-sm rounded text-sm italic focus:outline-none focus:border-orange text-gray-500" placeholder="correo@example.com" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full py-4 sm:px-12 px-4 mt-6 flex justify-end rounded-bl rounded-br">
                                    <Link to='/' className="btn text-sm focus:outline-none text-white border border-gray-300 py-2 px-6 mr-4 rounded hover:bg-gray-200 transition duration-150 ease-in-out">Volver</Link>
                                    <button className="bg-orange transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm focus:outline-none" type="submit">
                                        Guardar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Profile };