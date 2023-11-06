import logo from '../images/logo.png';
import Cart from '../images/cart-regular-24.png'
import User from '../images/user.png'

export default function Menu(){

  return (
    <div>
      <nav className="bg-color-uno p-0 flex items-center ">
        
      <img src={logo} className="menu-logo" alt="" />

        <ul className="flex flex-1 justify-center space-x-4 text-white">
          <li className='active:scale-[.98] hover:scale-[1.10]'><a href="#inicio">Inicio</a></li>
          <li className='active:scale-[.98] hover:scale-[1.10]'><a href="#servicio">Servicios</a></li>  
          <li className='active:scale-[.98] hover:scale-[1.10]'><a href="#tienda">Tienda</a></li>
          <li className='active:scale-[.98] hover:scale-[1.10]'><a href="#Dashboard">Dashboard</a></li>
        </ul>

        <button className="botoncarrito bg-color-uno  px-5 rounded active:scale-[1.30] hover:scale-[1.50] rounded-xl text-black">
            <img className="carrito"src={Cart} alt="Texto alternativo de la imagen" />
        </button>
        <button className="botonuser bg-color-uno px-8 rounded active:scale-[1.30] hover:scale-[1.50] rounded-xl text-black">
            <img className="user"src={User} alt="Texto alternativo de la imagen" />
        </button>


      </nav>
    </div>
  )
}