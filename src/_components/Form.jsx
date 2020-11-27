import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput';

export const Form = () =>{
    return(        
        <div className="prospect__form grid grid-cols-2">
            <div className="col-span-1 p-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre(s)</label>
                <input type="text" id="name" className="mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md"/>
            </div>
            <div className="col-span-1 p-2">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Apellido(s)</label>
                <input type="text" id="last-name" className="mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md"/>
            </div>
            <div className="col-span-2 p-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono Móvil</label>
                <input type="text" id="phone" className="mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md"/>
            </div>
            <div className="col-span-2 p-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                <input type="email" id="email" className="mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md"/>
            </div>                        
            <div className="col-span-2 p-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Fecha de visita</label>
                <DayPickerInput />
            </div>
        </div>  
    )
}