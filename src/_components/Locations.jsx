import React from 'react'

export const Locations = ({ name, menu_image }) =>{
    return(
        <div className="project__banner container p-4">
            <label className="bg-black shadow-lg">
                <input type="radio" name="dev_id" value={name}/>
                <img className="object-cover" src={menu_image} alt={name} />
            </label>
        </div>
    )
}