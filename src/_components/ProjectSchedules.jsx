import React from 'react'

export const ProjectSchedules = () =>{
    return (
        <table className='table-auto flex container'>
            <tbody className='container flex flex-col'>
                <tr className='flex justify-between'>
                    <td className='text-xs text-gray-300 p-2'>
                        <p>Contacto</p>
                    </td>
                    <td className='text-xs text-gray-300 p-2'>
                        <p>Fecha de Cita</p>
                    </td>
                </tr>  
                <tr className='flex justify-between items-center'>
                    <td className='text-xs p-2'>
                        <div className='flex flex-row items-center'>
                            <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1 mr-2" checked disabled />
                            <div className="data flex-auto">
                                <p>Black Eleven</p>
                                <p className='text-purple-600'>Contrato</p>
                            </div>
                        </div>
                    </td>
                    <td className='text-xs p-2'>9 Sep 2020</td>
                </tr>
                <tr className='flex justify-between items-center'>
                    <td className='text-xs p-2'>
                        <div className='flex flex-row items-center'>
                            <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1 mr-2" disabled />
                            <div className="data flex-auto">
                                <p>Hight Point</p>
                                <p className='text-orange'>Oferta Enviada</p>
                            </div>
                        </div>
                    </td>
                    <td className='text-xs p-2'>15 Oct 2020</td>
                </tr>  
                <tr className='flex justify-between items-center'>
                    <td className='text-xs p-2'>
                        <div className='flex flex-row items-center'>
                            <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1 mr-2" disabled />
                            <div className="data flex-auto">
                                <p>Distrito 65</p>
                                <p className='text-blue-500'>Cita Programada</p>
                            </div>
                        </div>
                    </td>
                    <td className='text-xs p-2'>5 Nov 2019</td>
                </tr>  
                <tr className='flex justify-between items-center'>
                    <td className='text-xs p-2'>
                        <div className='flex flex-row items-center'>
                            <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1 mr-2" disabled />
                            <div className="data flex-auto">
                                <p>Centarl Toreo</p>
                                <p className='text-green-500'>Negociación</p>
                            </div>
                        </div>
                    </td>
                    <td className='text-xs p-2'>24 Nov 2020</td>
                </tr>  
                <tr className='flex justify-between items-center'>
                    <td className='text-xs p-2'>
                        <div className='flex flex-row items-center'>
                            <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1 mr-2" disabled />
                            <div className="data flex-auto">
                                <p>Distrito 65</p>
                                <p className='text-blue-500'>Cita Programada</p>
                            </div>
                        </div>
                    </td>
                    <td className='text-xs p-2'>9 Sep 2020</td>
                </tr>
                <tr className='flex justify-between items-center'>
                    <td className='text-xs p-2'>
                        <div className='flex flex-row items-center'>
                            <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1 mr-2" disabled />
                            <div className="data flex-auto">
                                <p>Central Toreo</p>
                                <p className='text-red-700'>Oferta Rechazada</p>
                            </div>
                        </div>
                    </td>
                    <td className='text-xs p-2'>15 Oct 2020</td>
                </tr>                                   
            </tbody>
        </table>
    );
}