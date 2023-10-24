import logo from '../images/logo.png';


export default function Menu(){

  return (
    <div>
      <nav className="bg-color-uno p-0 flex items-center ">
        
      <img src={logo} className="menu-logo" alt="" />

        <ul className="flex flex-1 justify-center space-x-4 text-white">
          <li className='active:scale-[.98] hover:scale-[1.10]'><a href="#inicio">Inicio</a></li>
          <li className='active:scale-[.98] hover:scale-[1.10]'><a href="#nosotros">Sobre nosotros</a></li>
          <li className='active:scale-[.98] hover:scale-[1.10]'><a href="#servicio">Servicio</a></li>  
          <li className='active:scale-[.98] hover:scale-[1.10]'><a href="#tienda">Tienda</a></li>
        </ul>

        <button className=" botonMenu bg-color-seis text-gray-900 px-4 py-2 rounded active:scale-[.98] hover:scale-[1.08] rounded-xl text-black">
          Contactenos
        </button>

      </nav>
    </div>
  )
}