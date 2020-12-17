import React from 'react'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import DropdownList from 'react-widgets/lib/DropdownList'

import momentLocalizer from 'react-widgets-moment'

momentLocalizer()

import * as Yup from 'yup'

import { authenticationService, locationsService, leadsService, appointmentService } from '@/_services'
import { Navbar, AssistButton } from '@/_components'
import Skeleton from 'react-loading-skeleton'

class LeadBooking extends React.Component {
    constructor(props) {
        super(props);

        this.state = {            
            id_lead: this.props.match.params.id_lead,
            currentUser: authenticationService.currentUserValue,
            location_id: '',
            lead: [],
            locations: []
        };
    };

    componentDidMount() {
        this.getLead();
        this.getLocations();
        console.log(this.state);
    }; 

    getLead(){
        leadsService.getSingleLead(this.state.id_lead)
        .then(lead => {
            this.setState({ lead });
        })
        .catch(err => console.log(err))
    }  

    getLocations(){
        locationsService.getLocations()
        .then(res => this.setState({ locations: res.results }))
        .catch(err => console.log(err))
    }

    render() {
        const { currentUser } = this.state;
        const { lead } = this.state;
        const { locations } = this.state;
        const locationList = Array.from(locations);
        console.log(locationList);
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
                            {lead != undefined ?
                            <Formik enableReinitialize={true}
                                initialValues={{
                                    lead_id: lead.id,
                                    first_name: lead.first_name,
                                    last_name: lead.last_name,
                                    location_id: this.state.location_id,
                                    reservation_date: new Date()
                                }}
                                validationSchema={Yup.object().shape({
                                    first_name: Yup.string().required('*Este campo es requerido'),
                                    last_name: Yup.string().required('*Este campo es requerido'),
                                    location_id: Yup.string().required('*Este campo es requerido'),
                                    reservation_date: Yup.string().required('*Este campo es requerido')
                                })}
                                onSubmit={({ location_id, reservation_date, lead_id}, { setStatus, setSubmitting }) => {
                                    setStatus();
                                        appointmentService.createAppointment(location_id, reservation_date, lead_id).then(
                                            appointment =>{
                                                this.props.history.push('/success');
                                            },
                                        error => {
                                            setSubmitting(false);
                                            setStatus(error);
                                        }
                                    );
                                }}
                                render={({ status, isSubmitting, handleChange, handleBlur }) => (
                                    <Form className="login__form p-6">
                                        <div className="prospect__form grid grid-cols-2">
                                            <div className="col-span-1 p-2">
                                                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 disabled:opacity-50">Nombre(s)</label>
                                                <Field type="text" name="first_name" type="text" autoComplete="on" className={'mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md'} disabled />
                                                <ErrorMessage name="first_name" component="div" className="text-red-500 italic" />
                                            </div>
                                            <div className="col-span-1 p-2">
                                                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 disabled:opacity-50">Apellido(s)</label>
                                                <Field type="text" name="last_name" className={'mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md'} disabled/>
                                                <ErrorMessage name="last_name" component="div" className="text-red-500 italic" />
                                            </div>
                                            <div className="col-span-2 p-2">
                                                <label htmlFor="location_id" className="block text-sm font-medium text-gray-700">Desarrollo</label>
                                                { lead != undefined ? 
                                                    <DropdownList
                                                        name="location_id"
                                                        data={locationList}
                                                        valueField='id'
                                                        textField='name'
                                                        onChange={value => this.setState({ location_id: value.id })}
                                                    /> 
                                                :   <Skeleton />
                                                }
                                                <ErrorMessage name="location_id" component="div" className="text-red-500 italic" />
                                            </div>
                                            <div className="col-span-2 p-2">
                                                <label htmlFor="reservation_date" className="block text-sm font-medium text-gray-700">Fecha y Hora</label>
                                                <DateTimePicker
                                                    containerClassName='mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md'
                                                    name="reservation_date"
                                                    min={new Date()}
                                                    format={"yyyy-MM-DD HH:mm"}
                                                    step={30}
                                                    defaultValue={new Date()}                                                    
                                                />
                                                <ErrorMessage name="reservation_date" component="div" className="text-red-500 italic" />
                                            </div>
                                            {status &&
                                                <div className='text-center italic text-red-500 font-bold col-span-2 p-2'><p>*Este horario no esta disponible.</p></div>
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
                                            <div className="login__actions flex col-span-2">
                                                <button type="submit" className="btn-primary font-bold uppercase text-white p-2 w-full" disabled={isSubmitting}>VERIFICAR DISPONIBILIDAD</button>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            /> : <Skeleton />}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { LeadBooking };