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
                                <p className='font-bold'>Black Eleven</p>
                                <p className='text-purple-600'>Contrato</p>
                            </div>
                        </div>
                    </td>
                    <td className='text-xs p-2'>9 Sep 2020</td>
                </tr>                                  
            </tbody>
        </table>
    );
}