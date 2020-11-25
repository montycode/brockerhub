import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { authenticationService } from '@/_services';
import '../styles/login.css'
import '../styles/tailwind.css'
import Logo from '../assets/img/logo-bh.png'

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // redirect to home if already logged in
        if (authenticationService.currentUserValue) { 
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div className='login'>                
                <div class="logo mt-8">
                    <img src={Logo} class="object-contain h-60 w-full animate-pulse p-8" alt="Brokerhub Logo" />
                </div>
                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    validationSchema={Yup.object().shape({
                        username: Yup.string().required('*Este campo es requerido'),
                        password: Yup.string().required('*Este campo es requerido')
                    })}
                    onSubmit={({ username, password }, { setStatus, setSubmitting }) => {
                        setStatus();
                        authenticationService.login(username, password)
                            .then(
                                user => {
                                    const { from } = this.props.location.state || { from: { pathname: "/" } };
                                    this.props.history.push(from);
                                },
                                error => {
                                    setSubmitting(false);
                                    setStatus(error);
                                }
                            );
                    }}
                    render={({ errors, status, touched, isSubmitting }) => (
                        <div className="login__form p-6">
                            <Form>
                                <div className="form-group p-2">
                                    <label htmlFor="username" className='sr-onl font-bold'>Correo Electronico</label>
                                    <Field name="username" type="text" className={'mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md' + (errors.username && touched.username ? ' border-red-500' : '')} />
                                    <ErrorMessage name="username" component="div" className="text-red-500 italic" />
                                </div>
                                <div className="form-group p-2">
                                    <label htmlFor="password" className='font-bold'>Contraseña</label>
                                    <Field name="password" type="password" className={'mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md' + (errors.password && touched.password ? ' border-red-500' : '')} />
                                    <ErrorMessage name="password" component="div" className="text-red-500 italic" />
                                </div>
                                <div className="login__actions container flex flex-col p-2">
                                    <button type="submit" className="btn-primary font-bold uppercase text-white p-2" disabled={isSubmitting}>Iniciar Sesion</button>
                                    {isSubmitting &&
                                    <div className="flex justify-around p-2">
                                        <div className="inline-flex rounded-md">
                                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    }
                                    <div className="block">
                                        <div className="py-5">
                                            <div className="border-t border-gray-200"></div>
                                        </div>
                                    </div>
                                    <p className='text-center p-2 font-bold'>No cuentas con acceso?</p>
                                    <button className='btn uppercase p-2 m-2 font-bold text-white'>Crear cuenta</button>
                                </div>
                                {status &&
                                    <div className='text-center underline text-red-500 font-bold'>{status}</div>
                                }
                            </Form>
                        </div>
                    )}
                />
            </div>
        )
    }
}

export { LoginPage }; 