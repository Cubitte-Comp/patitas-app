import * as React from 'react';


export default function Form(){
    return(
        
        <div >
            <div >
                <div className='flex flex-col'>
                    <label className='text-lg font-medium text-center flex items-center'>Correo Electronico</label>
                    <input
                    className='w-full border-2 border-black p-4 mt-2'
                    placeholder='example@gmail.com'
                    />
                </div>
                <div className='mt-8'>
                <label className='text-lg font medium'>Contraseña</label>
                    <input
                    className='w-full border-2 border-black p-4 mt-2'
                    placeholder='*******'
                    type='password'
                    />
                </div>
                <div>
                    <button className='text-color-cuatro active:scale-[.98] hover:scale-[1.01]'>¿Olvidaste tu contraseña?</button>
                </div>
                <div className='active:scale-[.98] hover:scale-[1.01] py-3 rounded-xl mt-8 flex flex-col bg-color-cinco text-white'>
                    <button>Ingresar</button>
                </div>
                <div className='active:scale-[.98] hover:scale-[1.01] py-3 rounded-xl mt-8 flex flex-col bg-color-uno text-white'>
                    <button>Registrarse</button>
                </div>
                
            </div>
        </div>
    )
}