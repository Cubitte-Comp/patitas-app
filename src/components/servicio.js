import * as React from 'react';


export default function Form(){
    return(
        
        <div >
            
            
            <div className='panel1 flex-1 bg-white border-2 border-black'>
            
                <div className='TextoPanel'>
                    <label>ASEOS PARA MASCOTAS</label>
                </div>
                
            </div>
            
            <div className='precio '>
                <div className='text-center text-white max-w-xs bg-color-dos rounded-xl'>
                    <label >Q175.00</label>
                </div>
                
            </div>
            <div>
            <div className='hora text-center text-white max-w-xs bg-color-dos rounded-xl'>
                    <label >1:30</label>
                </div>
            </div>

            <div className='panel2 flex-1 bg-color-seis rounded-xl'>
                <div>
                    <div className='nombreS'>
                        <label>NOMBRE DEL SERVICIO</label>
                    </div>

                    <div className='descripS'>
                        <label>Descripcion del Servicio</label>
                    </div>
                    
                    <div className='flex flex-col nombreC'>
                        <input
                            className=' rounded-xl border-2 border-black p-2 mt-2'
                            placeholder='Nombre Completo'
                        />
                    </div>
                    <div className='mt-3 flex flex-col correoE'>
                        <input
                            className=' rounded-xl border-2 border-black p-2 mt-2'
                            placeholder='ejemplo@gmail.com'
                        />
                    </div>
                    <div className='mt-3  flex flex-col Fecha'>
                        <input
                            className=' rounded-xl border-2 border-black p-2 mt-2'
                            placeholder='Fecha'
                        />
                    </div>
                    <div className='mt-3 flex flex-col Horario'>
                        <input
                            className=' rounded-xl border-2 border-black p-2 mt-2'
                            placeholder='Seleccionar Horario'
                        />
                    </div>
                    <div className='mt-3  flex flex-col Service'>
                        <input
                            className=' rounded-xl border-2 border-black p-2 mt-2'
                            placeholder='Seleccionar el Servicio'
                        />
                    </div>
                    <div className='btnSolicitar  py-3 rounded-xl mt-8 flex flex-col bg-color-dos text-white'>
                        <button>SOLICITAR</button>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}