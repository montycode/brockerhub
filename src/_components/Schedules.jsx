import React from 'react';

export const Schedules = () => {
    return(
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
                <tr className='flex justify-between items-center'>
                    <td className='text-xs p-2 flex flex-row items-center'>
                        <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1" disabled />
                        <div className="data flex-auto p-1">
                            <p className='text-sm'>Black Eleven</p>
                        </div>
                    </td>
                    <td className='text-xs p-2'>9 Sep 2020</td>
                </tr>
                <tr className='flex justify-between items-center'>
                    <td className='text-xs p-2 flex flex-row items-center'>
                        <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1" disabled />
                        <div className="data flex-auto p-1">
                            <p className='text-sm'>Hight Point</p>
                        </div>
                    </td>
                    <td className='text-xs p-2'>15 Oct 2020</td>
                </tr>
                <tr className='flex justify-between items-center'>
                    <td className='text-xs p-2 flex flex-row items-center'>
                        <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1" disabled checked />
                        <div className="data flex-auto p-1">
                            <p className='text-sm'>Distrito 65</p>
                        </div>
                    </td>
                    <td className='text-xs p-2'>5 Nov 2019</td>
                </tr>
                <tr className='flex justify-between items-center'>
                    <td className='text-xs p-2 flex flex-row items-center'>
                        <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1" disabled  />
                        <div className="data flex-auto p-1">
                            <p className='text-sm'>Central Toreo</p>
                        </div>
                    </td>
                    <td className='text-xs p-2'>24 Nov 2020</td>
                </tr>
                <tr className='flex justify-between items-center'>
                    <td className='text-xs p-2 flex flex-row items-center'>
                        <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1" disabled checked />
                        <div className="data flex-auto p-1">
                            <p className='text-sm'>Distrito 65</p>
                        </div>
                    </td>
                    <td className='text-xs p-2'>27 Nov 2020</td>
                </tr>
                <tr className='flex justify-between items-center'>
                    <td className='text-xs p-2 flex flex-row items-center'>
                        <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1" disabled />
                        <div className="data flex-auto p-1">
                            <p className='text-sm'>Black Eleven</p>
                        </div>
                    </td>
                    <td className='text-xs p-2'>9 Sep 2020</td>
                </tr>
                <tr className='flex justify-between items-center'>
                    <td className='text-xs p-2 flex flex-row items-center'>
                        <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1" disabled checked />
                        <div className="data flex-auto p-1">
                            <p className='text-sm'>Black Eleven</p>
                        </div>
                    </td>
                    <td className='text-xs p-2'>9 Sep 2020</td>
                </tr>
                <tr className='flex justify-between items-center'>
                    <td className='text-xs p-2 flex flex-row items-center'>
                        <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1" disabled />
                        <div className="data flex-auto p-1">
                            <p className='text-sm'>Black Eleven</p>
                        </div>
                    </td>
                    <td className='text-xs p-2'>9 Sep 2020</td>
                </tr>
                <tr className='flex justify-between items-center'>
                    <td className='text-xs p-2 flex flex-row items-center'>
                        <input type="checkbox" className="form-checkbox rounded-full text-gray-300 p-1" disabled checked />
                        <div className="data flex-auto p-1">
                            <p className='text-sm'>Black Eleven</p>
                        </div>
                    </td>
                    <td className='text-xs p-2'>9 Sep 2020</td>
                </tr>
            </tbody>
        </table>
    );
};