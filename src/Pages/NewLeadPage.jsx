import React from 'react'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import MaskedInput from "react-text-mask"
import { Formik, Field, Form, ErrorMessage } from 'formik'

import momentLocalizer from 'react-widgets-moment'
import moment from 'moment'

const phoneNumberMask = [
    "(",
    /[1-9]/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ];

momentLocalizer()

import * as Yup from 'yup'

import { authenticationService, locationsService, leadsService, appointmentService } from '@/_services'
import { Navbar, AssistButton } from '@/_components'

class NewLeadPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {            
            id: this.props.match.params.id,
            currentUser: authenticationService.currentUserValue,
            location: [],
            dateValue: new Date()
        };
    };

    componentDidMount() {
        this.getLocation();
    }; 

    getLocation(){
        locationsService.getSingleLocation(this.state.id)
        .then(location => this.setState({ location }))
        .catch(err => console.log(err))
    }   

    render() {
        const { currentUser } = this.state;
        const location = this.state.id;
        const { dateValue } = this.state;
        return (
            <div className='prospect flex-col'>
                <div className='prospect__data text-left'>
                    {currentUser && <Navbar /> }
                    <div className="title font-bold text-white text-l uppercase py-4 px-6">
                        <h3>Datos del Cliente</h3>
                    </div>
                    <AssistButton classNames={'fill-current text-white w-6 h-6'} />
                    <div className="prospect__container bg-white rounded-tl-2xl pt-8 px-6">
                        <div className="h-full mt-2">
                            <Formik 
                                initialValues={{
                                    first_name: '',
                                    last_name: '',
                                    mobile_phone: '',
                                    location_id: location,
                                    email: ''
                                }}
                                validationSchema={Yup.object().shape({
                                    first_name: Yup.string().required('*Este campo es requerido'),
                                    last_name: Yup.string().required('*Este campo es requerido'),
                                    mobile_phone: Yup.string().required('*Este campo es requerido'),
                                    email: Yup.string().required('*Este campo es requerido')

                                })}
                                onSubmit={({ first_name, last_name, mobile_phone, location_id, email, reservation_date}, { setStatus, setSubmitting }) => {
                                    setStatus();
                                    leadsService.createLead(first_name, last_name, mobile_phone, email, location_id).then(
                                        lead => {
                                            let lead_id = lead.id;
                                            let parseDate = moment(dateValue).format();
                                            reservation_date = parseDate;
                                            appointmentService.createAppointment(location_id, reservation_date, lead_id).then(
                                                appointment =>{
                                                    this.props.history.push('/success');
                                                },
                                                error =>{
                                                    setSubmitting(false);
                                                    setStatus(error);
                                                    this.props.history.push('/error');
                                                }
                                            )
                                        },
                                        error => {
                                            setSubmitting(false);
                                            setStatus(error);
                                            this.props.history.push('/error');
                                        }
                                    );
                                }}
                                render={({ errors, status, touched, isSubmitting, handleChange, handleBlur }) => (
                                    <Form className="login__form">
                                        <div className="prospect__form grid grid-cols-2">
                                            <div className="col-span-1 p-2">
                                                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Nombre(s)</label>
                                                <Field type="text" name="first_name" type="text" autoComplete="on" className={'mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md' + (errors.first_name && touched.first_name ? ' border-red-500' : '')} />
                                                <ErrorMessage name="first_name" component="div" className="text-red-500 italic" />
                                            </div>
                                            <div className="col-span-1 p-2">
                                                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Apellido(s)</label>
                                                <Field type="text" name="last_name" className={'mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md' + (errors.last_name && touched.last_name ? ' border-red-500' : '')}/>
                                                <ErrorMessage name="last_name" component="div" className="text-red-500 italic" />
                                            </div>
                                            <div className="col-span-2 p-2">
                                                <label htmlFor="mobile_phone" className="block text-sm font-medium text-gray-700">Teléfono Móvil</label>
                                                <Field
                                                    name="mobile_phone"
                                                    render={({ field }) => (
                                                        <MaskedInput
                                                        {...field}
                                                        mask={phoneNumberMask}
                                                        id="mobile_phone"
                                                        type="text"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={
                                                            errors.mobile_phone && touched.mobile_phone
                                                            ? "mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md border-red-500"
                                                            : "mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md"
                                                        }
                                                        />
                                                    )}
                                                />
                                                <ErrorMessage name="mobile_phone" component="div" className="text-red-500 italic" />
                                            </div>
                                            <div className="col-span-2 p-2">
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                                                <Field type="email" name="email" className="mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md"/>
                                                <ErrorMessage name="email" component="div" className="text-red-500 italic" />
                                            </div>
                                            <div className="col-span-2 p-2">
                                                <label htmlFor="reservation_date" className="block text-sm font-medium text-gray-700">Fecha y Hora</label>
                                                <DateTimePicker
                                                    containerClassName='mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md'
                                                    name="reservation_date"
                                                    min={new Date()}
                                                    format={"yyyy-MM-DD HH:mm"}
                                                    step={60}
                                                    value={this.state.dateValue}
                                                    onChange={dateValue => this.setState({ dateValue })}   
                                                    onKeyDown={e => e.preventDefault()}                                              
                                                />
                                                <ErrorMessage name="reservation_date" component="div" className="text-red-500 italic" />
                                            </div>
                                            {status &&
                                                <div className='text-center italic text-red-500 font-bold col-span-2 p-2'><p>*Este prospecto ya se encuentra registrado.</p></div>
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
                                            <div className="py-4 flex col-span-2">
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

export { NewLeadPage };