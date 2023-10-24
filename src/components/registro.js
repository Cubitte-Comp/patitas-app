import * as React from 'react';


export default function Form(){
    return(
        
        <div >
            <div>
                <div>
                    <div className='check '>
                        <input
                            type="checkbox"
                            id="remember"
                        />
                        <label for="remember">Acepto los terminos y condiciones</label>
                    </div>
                </div>
                
                <div className="flex flex-row">
                    <label className='nombre'>Nombre</label>
                    <input 
                        className='nombrec border-2 border-black'
                    />
                </div>

            <div className="mt-0 flex flex-row">
                <label className='apellido'>Apelldio</label>
                <input 
                    className='apellidoc border-2 border-black'
                />
            </div>
            <div className="mt-0 flex flex-row">
                <label className='dpi'>DPI</label>
                <input 
                    className='dpic border-2 border-black'
                />
            </div>
            <div className="mt-0 flex flex-row">
                <label className='correo'>Correo Electronico</label>
                <input 
                    className='correoc border-2 border-black'
                />
            </div>
            <div className="mt-0 flex flex-row">
                <label className='telefono'>Telefono</label>
                <input 
                    className='telefonoc border-2 border-black'
                />
            </div>
            <div className="mt-0 flex flex-row">
                <label className='contraseña'>Contraseña</label>
                <input 
                    className='contraseñac border-2 border-black'
                    type="password"
                />
            </div>
            <div className="mt-0 flex flex-row">
                <label className='confirmar'>Confirmar Contraseña</label>
                <input 
                    className='confirmarc border-2 border-black'
                    type='password'
                />
            </div>
            <div className="mt-0 flex flex-row">
                <label className='direccion'>Direccion</label>
                <input 
                    className='direccionc border-2 border-black'
                />
            </div>
                
            <div className='boton  py-3 rounded-xl flex flex-col bg-color-siete text-black'>
                    <button>Registrarse</button>
            </div>
                
            </div>
        </div>
    )
}