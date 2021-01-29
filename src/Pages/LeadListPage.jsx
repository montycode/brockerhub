import React from 'react'
import Skeleton from 'react-loading-skeleton'
import Gravatar from 'react-gravatar'
import Moment from 'react-moment'
import 'moment/locale/es-mx'

import { authenticationService, leadsService} from '@/_services'
import { Navbar } from '@/_components'
import { Link } from 'react-router-dom'

class LeadListPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            loading: true,
            leads: [],
            leadFilter: ''
        };
    };

    componentDidMount() {
        this.getLeads();
        this.setState({ loading: false })
    };    

    getLeads() {
        leadsService.getLeads()
        .then(leads => this.setState({ leads }))
        .catch(err => console.log(err))
    }
    
    filterLeads(leadFilter) {
        leadsService.filterLeads(leadFilter)
        .then(leads => this.setState({ leads }))
        .catch(err => console.log(err))
    }

    handleChange(event) {
        this.setState({leadFilter: event.target.value})
        this.filterLeads(this.state.leadFilter);
    }

    render() {
        const { currentUser } = this.state;
        const { leads } = this.state;
        return (
            <div className='prospect flex-col'>
                <div className='prospect__data text-left'>
                    {currentUser && <Navbar /> }
                    <div className="title font-bold text-white text-l uppercase px-6 py-4">
                        <h3>Lista de Prospectos</h3>
                    </div>
                    <div className="prospect__container bg-white rounded-tl-2xl pt-2 pr-6 pl-6">
                        <div className="pt-2 relative mx-auto text-gray-600 pb-2">
                            <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:ring-orange focus:border-orange w-full"
                                value={this.state.leadFilter}
                                onChange={this.handleChange.bind(this)}
                                type="search" name="leadFilter" placeholder="Buscar" 
                            />
                            <button type="submit" className="absolute left-0 top-0 mt-5 ml-1">
                                <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                                    xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                                    viewBox="0 0 56.966 56.966">
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </button>
                            <table className='table-auto flex container'>
                                <tbody className='container flex flex-col'>
                                    <tr className='flex justify-between'>
                                        <td className='text-xs text-gray-300 p-2'>
                                            <p>Contacto</p>
                                        </td>
                                        <td className='text-xs text-gray-300 p-2'>
                                            <p>Fecha de Alta</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="projects overflow-auto overscroll-contain">
                            <table className='table-auto flex container'>
                                <tbody className='container flex flex-col'>
                                    {leads !== undefined && leads.length > 0 ? leads.map(lead => 
                                    <tr key={lead.id} className='flex justify-between items-center'>
                                        <td className='text-xs p-2'>
                                            <Link to={`/lead/${lead.id}`} className='flex flex-row items-center'>
                                                <Gravatar email={lead.email || <Skeleton />} className="w-6 h-6 rounded-full bg-gray-100 mr-1" />
                                                <div className="data flex-auto">
                                                    <p>{lead.first_name || <Skeleton />} {lead.last_name || <Skeleton />}</p>
                                                    <p className='text-gray-300'>{lead.mobile_phone || <Skeleton />}</p>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className='text-xs p-2 capitalize'><Link to={`/lead/${lead.id}`} >{<Moment locale="es-mx" format="DD MMM YYYY">{lead.created_at}</Moment> || <Skeleton />}</Link></td>
                                    </tr>
                                    ) || <div style={{lineHeight: 3}}><Skeleton count={15} /></div> : <p className="text-xs italic">*No se encontraron prospectos</p>}                         
                                </tbody>
                            </table>
                        </div>                   
                    </div>
                </div>
            </div>
        );
    }
}

export { LeadListPage };