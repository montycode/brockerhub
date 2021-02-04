import React from 'react'
import { Link } from 'react-router-dom'
import Gravatar from 'react-gravatar'

import { authenticationService, userService } from '@/_services'
import { Navbar, AssistButton } from '@/_components'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            base64TextString: "",
            submitting: false,
            isDissabled: true,
            statusMsg: ''
        };
    }

    componentDidMount() {
    };

    onChange (e) {
        this.setState({ isDissabled: false })
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
        this.setState({ submitting: true });
        const preview = document.getElementById('profile-picture');
        console.log("BINARY STRING:: ", this.state.base64TextString);

        let photo = "data:image/jpg;base64," + this.state.base64TextString ;
        let userId = this.state.currentUser.user.id;
        console.log(userId, photo);
        userService.updatePhoto(userId, photo).then(
            user => {
                this.setState({ submitting: false });
                this.setState({ isDissabled: true });
                this.setState({ statusMsg: 'Tu perfil se ha actualizado con exito, reinicia tu sesión para ver los cambios.'});
            },
            error => {
                this.setState({ submitting: false });
                this.setState({ isDissabled: true });
                this.setState({ statusMsg: 'Oops! Algo ha salido terriblemente mal, intenta de nuevo.'})
            }
        );
        preview.src = "data:image/jpg;base64," + this.state.base64TextString;
    }

    render() {
        const { currentUser } = this.state;
        const { isDissabled } = this.state;
        const { statusMsg } = this.state;
        const { submitting } = this.state;
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
                            <div className="w-full py-5">
                                <div className="flex items-center w-11/12 mx-auto">
                                    <p className="text-lg text-gray-800 font-bold">Actualizar Perfil</p>
                                </div>
                            </div>
                            <div className="w-11/12 mx-auto">
                                <div className="mx-auto">
                                    <div className="flex flex-col w-full space-y-2">
                                        <p className="text-center italic font-bold col-span-2 text-green-500 p-2">{statusMsg}</p>
                                    </div>                                    
                                    {submitting &&                                    
                                    <div className="w-full p-4 mt-6 flex justify-around">
                                        <div className="inline-flex rounded-md">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    }
                                    <form onSubmit={(e) => this.onFileSubmit(e)} onChange={(e) => this.onChange(e)} className="flex flex-col w-full space-y-2" >
                                        <input className="w-full py-4 sm:px-12 px-4 flex justify-end rounded-bl rounded-br" type="file" name="image" id="file" accept=".jpeg, .png, .jpg" placeholder="Actualizar imagen de perfil" />
                                        <button disabled={isDissabled} className={'text-sm focus:outline-none text-white border border-gray-300 py-2 px-6 mr-4 rounded ' + (isDissabled ? 'bg-gray-500' : 'bg-orange')} type="submit">
                                        Actualizar Imagen
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <Formik className="mt-16 p-6"
                                initialValues={{
                                    first_name: currentUser.user.first_name,
                                    last_name: currentUser.user.last_name
                                }}
                                validationSchema={Yup.object().shape({
                                    first_name: Yup.string().required('*Este campo es requerido'),
                                    last_name: Yup.string().required('*Este campo es requerido')
                                })}
                                onSubmit={({ id, first_name, last_name,  }, { setStatus, setSubmitting }) => {
                                    setStatus();
                                    userService.updateUser(id, first_name, last_name).then(
                                        user => {
                                            setSubmitting(false);
                                            setStatus({
                                                sent: true,
                                                msg: "Tu perfil se ha actualizado con exito, reinicia tu sesión para ver los cambios."
                                            });
                                        },
                                        error => {
                                            setSubmitting(false);
                                            setStatus({
                                                sent: false,
                                                msg: `Oops! ${error}. Algo salió mal, intenta nuevamente.`
                                            });
                                        }
                                    );
                                }}
                                render={({ errors, status, touched, isSubmitting }) => (
                                    <Form>                                        
                                        <div className="w-11/12 mx-auto">
                                            <div className="mx-auto">
                                                <div className="bg-center bg-cover bg-no-repeat rounded relative mt-8 h-10">
                                                    <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 mx-auto shadow">
                                                        {currentUser.user.base64_avatar_image ? 
                                                        <img id="profile-picture" src={currentUser.user.base64_avatar_image} className="w-full h-full object-cover overflow-hidden absolute z-0 rounded-full shadow" />
                                                        :
                                                        <Gravatar id="profile-picture" className='w-full h-full object-cover overflow-hidden absolute z-0 rounded-full shadow' email={currentUser.user.email} />
                                                        }
                                                    </div>
                                                </div>
                                                <div className="mt-16 flex flex-col w-full">
                                                    <label htmlFor="first_name" className='pb-2 text-sm font-bold text-gray-800'>Nombre</label>
                                                    <Field name="first_name" type="text" autoComplete="on" className={'mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md' + (errors.first_name && touched.first_name ? ' border-red-500' : '')} />
                                                    <ErrorMessage name="first_name" component="div" className="text-red-500 italic" />
                                                </div>
                                                <div className="mt-8 flex flex-col w-full">
                                                    <label htmlFor="last_name" className='pb-2 text-sm font-bold text-gray-800'>Apellido</label>
                                                    <Field name="last_name" type="text" autoComplete="on" className={'mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md' + (errors.last_name && touched.last_name ? ' border-red-500' : '')} />
                                                    <ErrorMessage name="last_name" component="div" className="text-red-500 italic" />
                                                </div>                                                    
                                                <div className="mt-8 flex flex-col w-full">
                                                    <label htmlFor="email" className="pb-2 text-sm font-bold text-gray-800">
                                                        Correo Electrónico
                                                    </label>
                                                    <input type="email" id="email" name="email" defaultValue={currentUser.user.email} disabled className="border bg-gray-300 border-gray-300 pl-3 py-3 shadow-sm rounded text-sm italic focus:outline-none focus:border-orange text-gray-500" placeholder="correo@example.com" required />
                                                </div>                                                    
                                                {isSubmitting &&
                                                <div className="w-full p-4 mt-6 flex justify-around">
                                                    <div className="inline-flex rounded-md">
                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                    </div>
                                                </div>}
                                                {status && status.msg && (
                                                    <div className="w-full p-4 mt-6 flex justify-around">
                                                        <p className={`text-center italic font-bold col-span-2 p-2 ${ status.sent ? "text-green-500" : "text-red-500"}`}>
                                                            {status.msg}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>                                           
                                        <div className="w-full py-4 sm:px-12 px-4 mt-6 flex justify-end rounded-bl rounded-br">
                                            <Link to='/' className="btn text-sm focus:outline-none text-white border border-gray-300 py-2 px-6 mr-4 rounded">Volver</Link>
                                            <button disabled={isSubmitting} className="bg-orange rounded text-white px-8 py-2 text-sm focus:outline-none" type="submit">
                                                Guardar
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Profile };