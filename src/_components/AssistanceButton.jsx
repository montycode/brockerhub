import React from 'react'
import AssistanceIcon from './icons/AssistenceIcon'

export const AssistButton = () => {
    return(
        <div className="assist_button">
            <div className="help_button uppercase text-center bg-orange text-white rounded-sm p-3">
                <a href="tel:+526641990980">
                    <div className="flex flex-col justify-center">
                        <AssistanceIcon classNames={'fill-current text-white w-6 mx-auto'}/>
                        <p className='text-xxs font-bold'>Asistencia</p>
                    </div>
                </a>
            </div>
        </div>
    )
}
