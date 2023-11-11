import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import Cart from '../images/cart-regular-24.png'
import User from '../images/user.png'
import React, { useState, useEffect } from 'react';

export default function Menu(){
  const [, setCookieExists] = useState(false);

  useEffect(() => {
    // Verificar si la cookie existe al cargar el componente
    const cookieValue = document.cookie.split(';').some((item) => item.trim().startsWith('token='));
    setCookieExists(cookieValue);
  }, []);


  const handleLogout = () => {
    // Eliminar la cookie al hacer clic en el botón de logout
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.reload();
    setCookieExists(false);
  };
  return (
    <div>
    <nav className="bg-color-uno p-0 flex items-center">
      <img src={logo} className="menu-logo" alt="" />

      <ul className="flex flex-1 justify-center space-x-4 text-white">
      <li className='transform active:scale-98 hover:scale-110'>
          <Link to="/home">
            Home
          </Link>
        </li>
        <li className='transform active:scale-98 hover:scale-110'>
          <Link to="/servicios">
            Servicios
          </Link>
        </li>
        <li className='transform active:scale-98 hover:scale-110'>
          <Link to="/mis-mascotas">
            Mis mascotas
          </Link>
        </li>
        <li className='transform active:scale-98 hover:scale-110'>
          <Link to="/veterinarios">
            veterinarios
          </Link>
        </li>
      </ul>

      <button className="botoncarrito bg-color-uno  px-5 rounded active:scale-[1.30] hover:scale-[1.50] rounded-xl text-black">
            <img className="carrito"src={Cart} alt="Texto alternativo de la imagen" />
      </button>
      <button className="botonuser bg-color-uno px-8 rounded active:scale-[1.30] hover:scale-[1.50] rounded-xl text-black">
          <img className="user"src={User} alt="Texto alternativo de la imagen" />
      </button>

      <Link to="/login">
        <button className="botonMenu bg-color-seis text-gray-900 px-4 py-2 rounded active:scale-98 hover:scale-108 rounded-xl text-black" onClick={handleLogout}>
          Logout
        </button>
      </Link>
    </nav>
  </div>
    
  )
}