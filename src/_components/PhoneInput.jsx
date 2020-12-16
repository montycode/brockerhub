import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export const TelInput = () => {
    return(
        <PhoneInput
            country='mx'
            regions={['north-america', 'carribean', 'south-america', 'central-america',]}
            inputStyle={{width: '100%'}}
            inputClass={'mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md'}
        />
    )
}