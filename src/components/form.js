import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'


export default function Form(){
    const navigate = useNavigate();
    const [email,setEmail]= useState("");
    const [password, setPassword] = useState("")
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if([email,password].includes("")){
            toast.error("😞 Todos los campos son obligatorios",{
                theme: "dark",
            });
            return;
        }        

        try {
            // Realizar la solicitud a la API para obtener el token
            const apiData = {
                email: email,
                password: password
            };
          
            const response = await fetch('http://localhost:4000/login/auth', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(apiData),credentials: 'include', 
              });
      
            // Verificar si la respuesta es exitosa y contiene un token
            if (response.ok) {
                const data = await response.json();
                document.cookie = `token=${data.token}; max-age=${60 * 60 * 24 * 7} path=/; samesite=strict`
              // Redirigir a la página principal
              navigate('/');
              window.location.reload();
            } else {
              // Mostrar un mensaje de error si la respuesta no es la esperada
              toast.error('Error al iniciar sesión. Verifica tus credenciales.', {
                theme: 'dark',
              });
            }
          } catch (error) {
            console.error('Error al iniciar sesión:', error);
            toast.error('Error al iniciar sesión. Inténtalo de nuevo más tarde.', {
              theme: 'dark',
            });
          }
    }
    
    return(
        
        <div>
            <div className='mb-10 color-texto-1'>
                <h1 className='text-3xl uppercase font-bold text-center text-indigo-500'>Iniciar Sesión</h1>
            </div>
            <form className='mb-6' onSubmit={handleSubmit} >
                <div className='flex flex-col'>
                    <label className='text-lg font-medium text-center flex items-center'>Correo Electronico</label>
                    <input type='email'
                    className='w-full border-2 border-black p-4 mt-2'
                    placeholder='ejemplo@gmail.com'
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mt-8'>
                <label className='text-lg font medium'>Contraseña</label>
                    <input
                    className='w-full border-2 border-black p-4 mt-2'
                    placeholder='*******'
                    type='password'
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='text-right'>
                    <button className='text-gray-500  active:scale-[.98] hover:text-color-cuatro hover:underline transition-colors'>¿Olvidaste tu contraseña?</button>
                </div>
               

                <button type='submit' className='w-full py-3  mt-8  rounded-xl bg-color-cinco text-white'>Ingresar</button>
                
            </form>
            
            <div className='text-center'>
                No tienes una cuenta?{" "}
               <Link to="/registro" className='text-color-cuatro font-medium active:scale-[.98] hover:scale-[1.01] hover:underline transition-all'>
                Regístrate
              </Link>
            </div>
        </div>
    )  
}
