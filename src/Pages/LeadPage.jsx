import React from 'react'
import Skeleton from 'react-loading-skeleton'
import Moment from 'react-moment'
import Modal from 'react-modal'
import DropdownList from 'react-widgets/lib/DropdownList'

import { authenticationService, leadsService, appointmentService, locationLeadService, statusService } from '@/_services'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { Navbar } from '@/_components'
import { Link } from 'react-router-dom'

import MailIcon from '../_components/icons/MailIcon'
import PhoneIcon from '../_components/icons/PhoneIcon'
import Gravatar from 'react-gravatar'

import * as Yup from 'yup'

const customStyles = {
    content : {
      width                 : '100%',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#app')

class LeadPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            currentUser: authenticationService.currentUserValue,
            isActive: true,
            lead: [],
            bookings: [],
            showModal: false,
            locationLead: '',
            leadStatus: [],
            selectedStatus: ''
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    };

    handleOpenModal() {
        this.setState({ showModal: true });
    }
      
    handleCloseModal() {
        this.setState({ showModal: false });
    }

    componentDidUpdate() {        
        this.getLead();
    }

    componentDidMount() {
        this.getLead();
        this.getLeadBookings();
        this.getStatus();
    };

    getStatus() {
        statusService.getStatus()
        .then(status => this.setState({ leadStatus: status }))
        .catch(err => console.log(err))
    }

    getLead() {
        leadsService.getSingleLead(this.state.id)
        .then(lead => this.setState({ lead }))
        .catch(err => console.log(err))
    }

    getLeadBookings() {
        appointmentService.getLeadAppointments(this.state.id)
        .then(res => this.setState({ bookings: res }))
        .catch(err => console.log(err))
    }

    render() {
        const { currentUser } = this.state;
        const { lead } = this.state;
        const { bookings } = this.state;
        const { leadStatus } = this.state;
        const statusList = Array.from(leadStatus);
        return (
            <div className='prospect flex-col'>
                <div className='prospect__data text-left'>
                    {currentUser && <Navbar /> }
                    <div className="title font-bold text-white text-l uppercase pl-8 pr-8">
                        <h3>Detalle de Prospectos</h3>
                    </div>
                    <div className="text-gray-300 text-xs capitalize pl-8 pr-8">
                        <p>Contacto</p>
                    </div>
                    <div className="prospect__info pl-8 pr-8">
                        <div className="overflow-auto overscroll-contain">
                            <div className="p-4 flex space-x-4 text-white text-l items-center">
                            {lead !== undefined ? <Gravatar email={lead.email} className="flex-none w-16 h-16 rounded-full object-cover bg-gray-100" /> : <Skeleton rounded={true} />}
                                <div className="min-w-0 relative flex-auto p-1">
                                    {lead !== undefined ? <h4 className='p-1 font-bold'>{lead.first_name} {lead.last_name}</h4> : <Skeleton />}
                                    <div className="mb-1 mb-1 flex content-center">
                                        <div className="self-center mr-1">
                                            <MailIcon />
                                        </div>
                                        {lead !== undefined ? <p>{lead.email}</p> : <Skeleton />}
                                    </div>
                                    <div className="mb-1 mb-1 flex content-center mb-2">
                                        <div className="self-center mr-1">
                                            <PhoneIcon />
                                        </div>
                                        {lead !== undefined ? <p>{lead.mobile_phone}</p> : <Skeleton />}
                                    </div>
                                    <div className="mb-1 mb-1 flex content-center mb-2">
                                        <a className='bg-orange rounded-lg pl-1 pr-1 w-full text-center font-bold' href={`tel:${lead.mobile_phone}`}>Llamar</a>
                                    </div>
                                {/*     <label for="country" className="text-sm font-medium">Estatus</label>
                                        <select id="country" className="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-orange focus:border-orange text-sm text-black">
                                            <option>Seleccione</option>
                                            <option>Cita Programada</option>
                                            <option>Cita Cancelada</option>
                                        </select>
                                */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prospect__container bg-white rounded-tl-2xl pt-8 pr-8 pl-8">
                        <div className="actions w-full flex flex-row text-white capitalize justify-around">
                            <button onClick={() => this.setState({ isActive: !this.state.isActive})} 
                                    className={this.state.isActive ? 'bg-gray-200 p-1 m-2 text-center rounded-full text-gray-500 text-xs w-28 font-bold disabled' : 'bg-orange rounded-full text-center p-1 m-2 w-28 font-bold'}
                                    disabled={this.state.isActive}
                                    >Citas</button>
                            <button onClick={() => this.setState({ isActive: !this.state.isActive})} 
                                    className={this.state.isActive ? 'bg-orange rounded-full text-center p-1 m-2 w-28 font-bold' : 'bg-gray-200 p-1 m-2 text-center rounded-full text-gray-500 text-xs w-28 font-bold'}
                                    disabled={!(this.state.isActive)}
                                    >Desarrollos</button>
                        </div>
                        <div className="prospect_details overflow-auto overscroll-contain">
                                {this.state.isActive ? 
                                <table className='table-auto flex container'>
                                    <tbody className='container flex flex-col'>
                                        <tr className='flex justify-between'>
                                            <td className='text-xs text-gray-300 p-2'>
                                                <p>Desarrollo</p>
                                            </td>
                                            <td className='text-xs text-gray-300 p-2'>
                                                <p>Fecha de Cita</p>
                                            </td>
                                        </tr> 
                                        {bookings != undefined && bookings.length > 0 ? bookings.map(booking => 
                                            <tr key={booking.id} className='flex justify-between items-center'>
                                                <td className='text-xs p-2 flex flex-row items-center'>
                                                    <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1" disabled />
                                                    <div className="data flex-auto p-1">
                                                        <p className='text-sm'>{booking.location_name || <Skeleton />}</p>
                                                    </div>
                                                </td>
                                                <td className='text-xs p-2'><Moment locale="es-mx" format="DD MMM YYYY">{booking.reservation_date || <Skeleton />}</Moment></td>
                                            </tr>
                                        ) : <tr className='flex justify-between items-center'><p className="text-sm italic">*Este prospecto no tiene citas programadas.</p></tr>
                                        } 
                                    </tbody>
                                </table> :
                                <table className='table-auto flex container'>
                                    <tbody className='container flex flex-col'>
                                        <tr className='flex justify-between'>
                                            <td className='text-xs text-gray-300 p-2'>
                                                <p>Contacto</p>
                                            </td>
                                            <td className='text-xs text-gray-300 p-2'>
                                                <p>Fecha de Registro</p>
                                            </td>
                                        </tr>
                                        {lead != undefined && lead.locations.length > 0 ? lead.locations.map(location => 
                                        <tr key={location.id} className='flex justify-between items-center'>
                                            <td className='text-xs p-2'>
                                                <a onClick={() => {
                                                    this.setState({locationLead: location.id});
                                                    this.handleOpenModal();
                                                }}>
                                                    <div className='flex flex-row items-center'>
                                                        <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1 mr-2" checked={location.status_id > 1 ? true : false} disabled />
                                                        <div key={location.status_id} className="data flex-auto">
                                                            <p className='font-bold'>{location.location_name}</p>
                                                            <p className={`text-location${location.status_id}`}>{location.status_name}</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </td>
                                            <td className='text-xs p-2'><Moment locale="es-mx" format="DD MMM YYYY">{location.created_at || <Skeleton />}</Moment></td>
                                        </tr>
                                        ) : <tr className='flex justify-between items-center'><p className="text-sm italic">*Este prospecto no tiene desarrollos asignados.</p></tr>
                                        }                                  
                                    </tbody>
                                </table>
                            
                            }
                        </div>                        
                        <div className="actions container flex flex-col p-4 text-white">
                            <Link to={`/lead/${lead.id}/newBooking`} className="btn-primary text-center font-bold uppercase p-2 m-2">Programar Nueva Visita</Link>
                        </div>                     
                    </div>
                </div>
                <Modal
                    isOpen={this.state.showModal}
                    style={customStyles}
                    contentLabel="Actualizar Prospecto"
                    >
            
                    <h2 className='font-bold text-xl text-orange'>Editar Estatus</h2>
                    <Formik enableReinitialize={true}
                                initialValues={{
                                    location_id: this.state.locationLead,
                                    status_id: this.state.selectedStatus
                                }}
                                validationSchema={Yup.object().shape({
                                    status_id: Yup.string().required('*Este campo es requerido')
                                })}
                                onSubmit={({ location_id, status_id}, { setStatus, setSubmitting }) => {
                                    setStatus();
                                    locationLeadService.updateLocationLead(location_id, status_id).then(
                                        response => {
                                            setSubmitting(false);
                                            setStatus({
                                                sent: true,
                                                msg: "Prospecto actualizado exitosamente"
                                            });                                            
                                        },
                                        err => {
                                            setSubmitting(false);
                                            setStatus({
                                                sent: false,
                                                msg: `Oops! ${err}. Algo salió mal, intenta nuevamente.`
                                            });
                                        }
                                    );
                                }}
                                render={({ status, isSubmitting }) => (
                                    <Form className="login__form p-6">
                                        <div className="prospect__form grid grid-cols-2">
                                            <div className="col-span-2 p-2">
                                                <label htmlFor="status_id" className="block text-sm font-medium text-gray-700">Seleccione Estado</label>
                                                <DropdownList
                                                    name="status_id"
                                                    data={statusList}
                                                    valueField='id'
                                                    textField='name'
                                                    defaultValue={this.state.selectedStatus}
                                                    onChange={value => this.setState({ selectedStatus: value.id })}
                                                />
                                                <ErrorMessage name="status_id" component="div" className="text-red-500 italic" />
                                            </div>
                                            {status && status.msg && (
                                                <p className={`text-center italic font-bold col-span-2 p-2 ${ status.sent ? "text-green-500" : "text-red-500"}`}>
                                                    {status.msg}
                                                </p>
                                            )}
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
                                                <button type="submit" className="btn-primary font-bold uppercase text-white p-2 w-full" disabled={isSubmitting}>Actualizar</button>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            />
                    <div className="actions container flex flex-col p-4 text-white">
                        <button className="btn-primary text-center font-bold uppercase p-1 m-1 text-white" onClick={this.handleCloseModal}>Cerrar</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export { LeadPage };