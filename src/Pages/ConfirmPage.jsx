import React from "react"

export const ConfirmPage = () => {
    return (
        <section className="py-8 px-4 bg-gray-100 bg-opacity-50 bg-gray-200">
            <div className="mx-auto container max-w-2xl md:w-3/4 shadow-md">
                <div className="confirm_lead p-4 border-t-2 bg-opacity-5 border-orange rounded-t">
                    <div className="max-w-sm mx-auto md:w-full md:mx-0">
                        <div className="inline-flex items-center space-x-4 font-bold">
                            <div className="w-10 h-10 object-cover bg-gray-100 rounded-full"></div>
                            <div className="flex flex-col">
                                <h1 className="text-white uppercase">Agent Name</h1>
                                <p className="text-xs text-gray-400">Agente</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white space-y-6">
                    <div className="space-y-4 w-full p-4 text-gray-500 items-center">
                        <h2 className="mx-auto font-bold uppercase">Datos de la cita</h2>
                        <div className="grid grid-cols-2">
                            <div className="col-span-2 md:col-span-1 w-full mx-auto p-2">
                                <label className="text-sm text-gray-400">Fecha Solicitada</label>
                                <div className="w-full inline-flex">
                                    <div className="pt-2 mr-2 w-1/12">
                                        <svg
                                            aria-hidden="true" 
                                            focusable="false" 
                                            data-prefix="fas" 
                                            data-icon="calendar-alt"
                                            role="img" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 448 512"
                                            className="w-6 text-gray-400 mx-auto"
                                            stroke="currentColor"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        className="mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md"
                                        placeholder="21/DIC/2020 15:30 PM"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-1 w-full mx-auto p-2">
                                <label className="text-sm text-gray-400">Duración</label>
                                <div className="w-full inline-flex">
                                    <div className="pt-2 mr-2 w-1/12">
                                        <svg
                                            aria-hidden="true" 
                                            focusable="false" 
                                            data-prefix="far" 
                                            data-icon="clock"
                                            role="img" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 512 512"
                                            className="w-6 text-gray-400 mx-auto"
                                            stroke="currentColor"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        className="mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md"
                                        placeholder="60 Minutos"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-1 w-full mx-auto p-2">
                                <label className="text-sm text-gray-400">Desarrollo</label>
                                <div className="w-full inline-flex">
                                    <div className="pt-2 mr-2 w-1/12">
                                        <svg
                                            aria-hidden="true" 
                                            focusable="false" 
                                            data-prefix="fas" 
                                            data-icon="building"
                                            role="img" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 448 512"
                                            className="w-6 text-gray-400 mx-auto"
                                            stroke="currentColor"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        className="mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md"
                                        placeholder="HighPoint La Cacho"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-1 w-full mx-auto p-2">
                                <label className="text-sm text-gray-400">Asistente</label>
                                <div className="w-full inline-flex">
                                    <div className="pt-2 mr-2 w-1/12">
                                        <svg
                                            aria-hidden="true" 
                                            focusable="false" 
                                            data-prefix="fas" 
                                            data-icon="id-badge"
                                            role="img" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 384 512"
                                            className="w-6 text-gray-400 mx-auto"
                                            stroke="currentColor"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM144 32h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm48 128c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H102.4C90 416 80 407.4 80 396.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        className="mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Manuel Crosthwaite"
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="space-y-4 w-full p-4 text-gray-500 items-center">
                        <h2 className="mx-auto font-bold uppercase">Datos del Prospecto</h2>
                        <div className="grid grid-cols-2">
                            <div className="col-span-2 w-full mx-auto p-2">
                                <label className="text-sm text-gray-400">Nombre Completo</label>
                                <div className="w-full inline-flex">
                                    <div className="pt-2 mr-2">
                                        <svg
                                            aria-hidden="true" 
                                            focusable="false" 
                                            data-prefix="fas" 
                                            data-icon="user"
                                            role="img" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 448 512"
                                            className="w-6 text-gray-400"
                                            stroke="currentColor"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        className="mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Jhon Dowt"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-1 w-full mx-auto p-2">
                                <label className="text-sm text-gray-400">Teléfono</label>
                                <div className="w-full inline-flex">
                                    <div className="pt-2 mr-2 w-1/12">
                                        <svg
                                            aria-hidden="true" 
                                            focusable="false" 
                                            data-prefix="fas" 
                                            data-icon="phone-alt"
                                            role="img" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 512 512"
                                            className="w-6 text-gray-400 mx-auto"
                                            stroke="currentColor"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        className="mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md"
                                        placeholder="(664)-123-4567"
                                        disabled
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-1 w-full mx-auto p-2">
                                <label className="text-sm text-gray-400">Correo</label>
                                <div className="w-full inline-flex">
                                    <div className="pt-2 mr-2 w-1/12">
                                        <svg
                                            aria-hidden="true" 
                                            focusable="false" 
                                            data-prefix="fas" 
                                            data-icon="at"
                                            role="img" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 512 512"
                                            className="w-6 text-gray-400 mx-auto"
                                            stroke="currentColor"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        className="mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md"
                                        placeholder="user@mail.com"
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="space-y-4 w-full p-4 text-gray-500 items-center">
                        <h2 className="mx-auto font-bold uppercase">Acciones</h2>
                        <div className="md:inline-flex w-full space-y-4 md:space-y-0 text-gray-500 items-center">
                            <h2 className="md:w-3/12 mx-auto">Reagendar Cita</h2>
                            <div className="md:w-6/12 w-full mx-auto space-y-5 md:inline-flex pr-2">
                                <div className="w-full inline-flex">
                                    <div className="w-1/12 pt-2 mr-2">
                                        <svg
                                            aria-hidden="true" 
                                            focusable="false" 
                                            data-prefix="fas" 
                                            data-icon="calendar-day"
                                            role="img" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 448 512"
                                            className="w-6 text-gray-400 mx-auto"
                                            stroke="currentColor"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="datetime-local"
                                        className="mt-1 focus:ring-orange focus:border-orange block w-full sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="md:w-3/12 text-center md:px-2">
                                <button className="text-white w-full mx-auto rounded-md text-center bg-opacity-50 bg-orange py-2 px-4 inline-flex items-center focus:outline-none md:float-right">
                                    <svg
                                        fill="none"
                                        className="w-4 text-white mr-2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                        />
                                    </svg>
                                    Reagendar
                                </button>
                            </div>
                        </div>                        
                    </div>
                    <div className="confirm_lead px-4 py-8 border-b-2 bg-opacity-5 border-orange rounded-b w-full p-4 text-right text-gray-500">
                        <div className="flex flex-col p-4 uppercase">
                            <div className="text-center">
                                <button className="bg-orange text-white rounded-lg p-4 w-full items-center justify-center font-bold inline-flex">
                                    Confirmar Cita 
                                    <svg
                                        fill="currentColor"
                                        aria-hidden="true" 
                                        focusable="false"
                                        data-prefix="far" 
                                        data-icon="calendar-check"
                                        className="ml-4 w-4 text-white mr-2"
                                        role="img" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 448 512"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    );
};
