import React from 'react'
import PWAInstallerPrompt from 'react-pwa-installer-prompt'


export const InstallButton = () => {
  return(
    <PWAInstallerPrompt 
      render={({ onClick }) => (        
        <div className="flex justify-around p-2 w-full">
            <div className="inline-flex rounded-md">
                <button className='btn-primary font-bold uppercase text-white p-2' onClick={onClick}>Instalar Aplicación</button>
            </div>
        </div>
      )}
      callback={(data) => console.log(data)} 
    />
  )
}