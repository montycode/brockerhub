import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

import { userService, authenticationService} from '@/_services'
import '../styles/login.css'
import '../styles/tailwind.css'

class RegisterPage extends React.Component {
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
                <Formik
                    initialValues={{
                        first_name: '',
                        last_name: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    validationSchema={Yup.object().shape({
                        first_name: Yup.string().required('*Este campo es requerido'),
                        last_name: Yup.string().required('*Este campo es requerido'),
                        email: Yup.string().required('*Este campo es requerido'),
                        password: Yup.string().required('*Este campo es requerido'),
                        confirmPassword: Yup.string().when("password", {
                          is: val => (val && val.length > 0 ? true : false),
                          then: Yup.string().oneOf(
                            [Yup.ref("password")],
                            "Las contraseñas deben coincidir."
                          ).required('*Este campo es requerido')
                        })
                    })}
                    onSubmit={({ first_name, last_name, email, password }, { setStatus, setSubmitting }) => {
                        setStatus();
                        userService.createUser(first_name, last_name, email, password).then(
                            user => {
                                const { from } = this.props.location.state || { from: { pathname: "/login" } };
                                this.props.history.push(from);
                            },
                            error => {
                                setSubmitting(false);
                                setStatus(error);
                            }
                        );
                    }}
                    render={({ errors, status, touched, isSubmitting }) => (
                        <div className="login__form">
                            <Form className="grid grid-cols-2">
                                <div className="col-span-1 p-2">
                                    <label htmlFor="first_name" className='sr-onl font-bold'>Nombre</label>
                                    <Field name="first_name" type="text" autoComplete="on" className={'mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md' + (errors.first_name && touched.first_name ? ' border-red-500' : '')} />
                                    <ErrorMessage name="first_name" component="div" className="text-red-500 italic" />
                                </div>
                                <div className="col-span-1 p-2">
                                    <label htmlFor="last_name" className='sr-onl font-bold'>Apellido</label>
                                    <Field name="last_name" type="text" autoComplete="on" className={'mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md' + (errors.last_name && touched.last_name ? ' border-red-500' : '')} />
                                    <ErrorMessage name="last_name" component="div" className="text-red-500 italic" />
                                </div>
                                <div className="col-span-2 p-2">
                                    <label htmlFor="email" className='sr-onl font-bold'>Correo Electrónico</label>
                                    <Field name="email" type="email" autoComplete="on" className={'mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md' + (errors.email && touched.email ? ' border-red-500' : '')} />
                                    <ErrorMessage name="email" component="div" className="text-red-500 italic" />
                                </div>
                                <div className="col-span-2 p-2">
                                    <label htmlFor="password" className='font-bold'>Contraseña</label>
                                    <Field name="password" type="password" autoComplete="on" className={'mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md' + (errors.password && touched.password ? ' border-red-500' : '')} />
                                    <ErrorMessage name="password" component="div" className="text-red-500 italic" />
                                </div>
                                <div className="col-span-2 p-2">
                                    <label htmlFor="confirmPassword" className='font-bold'>Confirmar Contraseña</label>
                                    <Field name="confirmPassword" type="password" autoComplete="on" className={'mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md' + (errors.confirmPassword && touched.confirmPassword ? ' border-red-500' : '')} />
                                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 italic" />
                                </div>                                
                                {status &&
                                    <div className='text-center italic text-red-500 font-bold p-2'><p>{error.message}</p></div>
                                }
                                {isSubmitting &&
                                    <div className="flex justify-around col-span-2 p-2">
                                        <div className="inline-flex rounded-md">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                }
                                <div className="login__actions flex col-span-2 p-2">
                                    <button type="submit" className="btn-primary w-full font-bold uppercase text-white p-2" disabled={isSubmitting}>Crear Cuenta</button>
                                </div>
                            </Form>
                            <div className="login__actions w-full flex flex-col p-2">
                                <div className="block">
                                    <div className="py-5">
                                        <div className="border-t border-gray-200"></div>
                                    </div>
                                </div>
                                <p className='text-center p-2 font-bold'>Ya tienes cuenta?</p>
                                <Link to={'/login'} className='btn text-center uppercase p-2 m-2 font-bold text-white'>Iniciar Sesión</Link>
                            </div>
                        </div>
                    )}
                />
            </div>
        )
    }
}

export { RegisterPage }; 