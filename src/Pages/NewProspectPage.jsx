import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { authenticationService, locationsService, leadsService } from '@/_services'
import { Navbar, AssistButton } from '@/_components'
import { Link } from 'react-router-dom'
import { appointmentService } from '../_services/appointment.service'

class NewProspectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {            
            id: this.props.match.params.id,
            currentUser: authenticationService.currentUserValue,
            location: []
        };
    };

    componentDidMount() {
        this.getLocation();
        console.log(this.state);
    }; 

    getLocation(){
        locationsService.getSingleLocation(this.state.id)
        .then(location => this.setState({ location }))
        .catch(err => console.log(err))
    }   

    render() {
        const { currentUser } = this.state;
        const { location } = this.state;
        const { id } = this.state;
        return (
            <div className='prospect flex-col'>
                <div className='prospect__data text-left'>
                    {currentUser && <Navbar /> }
                    <div className="title font-bold text-white text-l uppercase p-8">
                        <h3>Datos del Cliente</h3>
                    </div>
                    <AssistButton classNames={'fill-current text-white w-6 h-6'} />
                    <div className="prospect__container bg-white rounded-tl-2xl pt-8 pr-8 pl-8">
                        <div className="projects overflow-auto overscroll-contain mt-2">
                            {console.log(location.id)}
                            <Formik
                                initialValues={{
                                    first_name: '',
                                    last_name: '',
                                    mobile_phone: '',
                                    email: '',
                                    location_id: 0
                                }}
                                validationSchema={Yup.object().shape({
                                    first_name: Yup.string().required('*Este campo es requerido'),
                                    last_name: Yup.string().required('*Este campo es requerido'),
                                    mobile_phone: Yup.string().required('*Este campo es requerido'),
                                    location_id: Yup.string().required('*Este campo es requerido')

                                })}
                                onSubmit={({ first_name, last_name, mobile_phone, location_id, email}, { setStatus, setSubmitting }) => {
                                    setStatus();
                                    leadsService.createLead(first_name, last_name, mobile_phone, location_id, email).then(
                                        lead => {
                                            console.log(lead);
                                            setSubmitting(false);
                                        },
                                        error => {
                                            setSubmitting(false);
                                            setStatus(error);
                                        }
                                    );
                                }}
                                render={({ errors, status, touched, isSubmitting, handleChange }) => (
                                    <Form className="login__form p-6">
                                        <div className="prospect__form grid grid-cols-2">
                                            <div className="col-span-1 p-2">
                                                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Nombre(s)</label>
                                                <Field type="text" name="first_name" type="text" autoComplete="on" className={'mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md' + (errors.first_name && touched.first_name ? ' border-red-500' : '')} />
                                                <ErrorMessage name="first_name" component="div" className="text-red-500 italic" />
                                            </div>
                                            <div className="col-span-1 p-2">
                                                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Apellido(s)</label>
                                                <Field type="text" name="last_name" className="mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md"/>
                                                <ErrorMessage name="last_name" component="div" className="text-red-500 italic" />
                                            </div>
                                            <div className="col-span-2 p-2">
                                                <label htmlFor="mobile_phone" className="block text-sm font-medium text-gray-700">Teléfono Móvil</label>
                                                <Field type="tel" name="mobile_phone" className="mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md"/>
                                                <ErrorMessage name="mobile_phone" component="div" className="text-red-500 italic" />
                                            </div>
                                            <div className="col-span-2 p-2">
                                                <label htmlFor="location_id" className="block text-sm font-medium text-gray-700">Proyecto</label>
                                                <Field type="text" name="location_id" className="mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md" onChange={handleChange} defaultValue={location.id} placeholder={location.id}/>
                                                <ErrorMessage name="location_id" component="div" className="text-red-500 italic" />
                                            </div>
                                            <div className="col-span-2 p-2">
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                                                <Field type="email" name="email" className="mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md"/>
                                                <ErrorMessage name="email" component="div" className="text-red-500 italic" />
                                            </div>
                                            {status &&
                                                <div className='text-center italic text-red-500 font-bold p-2'><p>*El prospecto ya se encuentra registrado.</p></div>
                                            }
                                            {isSubmitting &&
                                                <div className="flex justify-around p-2">
                                                    <div className="inline-flex rounded-md">
                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            }
                                            <div className="login__actions flex col-span-2">
                                                <button type="submit" className="btn-primary font-bold uppercase text-white p-2 w-full" disabled={isSubmitting}>VERIFICAR DISPONIBILIDAD</button>
                                            </div>
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

export { NewProspectPage };