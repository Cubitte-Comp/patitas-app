import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'
import * as yup from 'yup';



const schema = yup.object().shape({
    name: yup.string().required('El nombre es obligatorio'),
    lastName: yup.string().required('El apellido es obligatorio'),
    dpi: yup.string().min(13, 'El dpi debe tener 13 caracteres').max(13,'El dpi debe tener 13 caracteres').required('El telefono es obligatorio'),
    email: yup.string().email('Ingrese un correo electrónico válido').required('El correo electrónico es obligatorio'),
    phoneNumber: yup.string().min(8, 'El numero debe tener 8 caracteres').max(8,'El numero debe tener 8 caracteres').required('El telefono es obligatorio'),
    address: yup.string().required('La direccion es obligatoria'),
    password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria'),
    confirmPassword: yup.string().min(6, 'La confirmación de contraseña debe tener al menos 6 caracteres').required('La confirmación de contraseña es obligatoria'),
    aceptaTerminos: yup.boolean().oneOf([true], 'Debe aceptar los términos y condiciones').required(),
});
  
  
export default function Form(){
    const { register, handleSubmit, setError,reset , clearErrors, formState: { errors }} = useForm();
    
    const onSubmit = async (data) => {
        try{
            await schema.validate(data, { abortEarly: false });

            if(data.password !== data.confirmPassword){
                toast.error('Las contraseñas no coinciden', {
                    theme: 'dark'
                });
                return
            }
            clearErrors();
            const apiData = {
                name: data.name,
                lastName: data.lastName,
                dpi: data.dpi,
                email: data.email,
                phoneNumber: data.phoneNumber,
                address: data.address,
                password: data.confirmPassword,
                typeUser: 1
            };
          
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(apiData),
              });
        
              if (response.ok) {
                toast.success('Usuario registrado con éxito!', {
                    theme: 'dark'
                });
                reset();
              } else {
                toast.error('Error al registrar el usuario. Por favor, inténtalo de nuevo.', {
                    theme: 'dark'
                });
              }
        }catch (validationError) {
            if (validationError.inner && validationError.inner.length > 0) {
                const firstError = validationError.inner[0];
                setError(firstError.path, { message: firstError.message });
                toast.error(firstError.message, {
                    theme: 'dark'
                });
            }
        } 
    };
    
    return(
        
            <form className='bg-white p-8 rounded shadow-md w-60'  onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-2xl font-semibold mb-6">Registro de Usuario</h2>
                <div className="mb-4">
                    <label className='block mb-2'>Nombre</label>
                    <input 
                        name="name" 
                        className={`w-full py-2 px-3 focus:outline-none focus:border-blue-500  border-2 border-black ${    errors.name ? 'border-red-500' : ''}`}
                        {...register('name')}
                    />
                </div>

                <div className="mb-4">
                    <label className='block mb-2 '>Apellido</label>
                    <input 
                        name="lastName"
                        className={`w-full py-2 px-3 focus:outline-none focus:border-blue-500  border-2 border-black ${errors.lastName ? 'border-red-500' : ''}`}
                        {...register('lastName')}
                    />
                </div>
                <div className="mb-4">
                    <label className='block mb-2 '>DPI</label>
                    <input 
                        name="dpi"
                        className={`w-full py-2 px-3 focus:outline-none focus:border-blue-500  border-2 border-black ${errors.dpi ? 'border-red-500' : ''}`}
                        {...register('dpi')}
                    />
                </div>
                <div className="mb-4">
                    <label className='block mb-2'>Correo Electronico</label>
                    <input 
                        name="email" 
                        className={`w-full py-2 px-3  focus:outline-none focus:border-blue-500 border-2 border-black  ${errors.email ? 'border-red-500': ''}`}
                        {...register('email')}
                    />
                </div>
                <div className="mb-4">
                    <label className='block mb-2'>Telefono</label>
                    <input 
                        name="phoneNumber" 
                        className={`w-full py-2 px-3 border-2 focus:outline-none focus:border-blue-500 border-black ${errors.phoneNumber ? 'border-red-500': ''}`}
                        {...register('phoneNumber')}
                    />
                </div>
                <div className="mb-4">
                    <label className='block mb-2'>Direccion</label>
                    <input 
                        name="address"
                        className={`w-full py-2 px-3 border-2 focus:outline-none focus:border-blue-500 border-black ${errors.address ? 'border-red-500': ''}`}
                        {...register('address')}
                    />
                </div>
                <div className="mb-4">
                    <label className='block mb-2'>Contraseña</label>
                    <input 
                        name="password" 
                        className={`w-full py-2 px-3  border-2 focus:outline-none focus:border-blue-500 border-black ${errors.password ? 'border-red-500': ''}`}
                        type="password"
                        {...register('password')}
                    />
                </div>
                <div className="mb-4">
                    <label className='block mb-2 '>Confirmar Contraseña</label>
                    <input 
                        name="confirmPassword" 
                        className={`w-full py-2 px-3 focus:outline-none focus:border-blue-500 border-2 border-black ${errors.confirmPassword ? 'border-red-500': ''}`}
                        type='password'
                        {...register('confirmPassword')}
                    />
                </div>
                <div className="mb-6">
                    <label className="flex items-center">
                        <input
                        name="aceptaTerminos"
                        type="checkbox"
                        className={`mr-2${errors.aceptaTerminos ? 'border-red-500' : ''}`}
                        {...register('aceptaTerminos')}
                        />
                        <span className="text-sm">
                        Acepto los <a href="/terminos">términos y condiciones</a>
                        </span>
                    </label>
                </div>
                <div>
                    <button type='sybmit' className='w-full bg-color-siete text-black hover:bg-color-dos hover:text-white  py-2 px-4 rounded-md'>Registrarse</button>
                </div>

                <div className='mt-6 text-center'>
                        Ya tienes cuenta?{" "}
                    <Link to="/login" className='text-color-cuatro font-medium active:scale-[.98] hover:scale-[1.01] hover:underline transition-all'>
                        Ingresa
                    </Link>
                </div>
            </form>
            
        
    )
}