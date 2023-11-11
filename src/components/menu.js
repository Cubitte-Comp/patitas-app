import { Link } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logo from '../images/logo.png';

export default function Menu() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <nav className="bg-color-uno p-0 flex items-center">
        <img src={logo} className="menu-logo" alt="" />

        <ul className="flex flex-1 justify-center space-x-4 text-white">
          <li className='transform active:scale-98 hover:scale-110'>
            <Link to="/" onClick={scrollToTop}>Inicio</Link>
          </li>
          <li className='transform active:scale-98 hover:scale-110'>
            <ScrollLink to="nosotros" smooth>Sobre nosotros</ScrollLink>
          </li>
          <li className='transform active:scale-98 hover:scale-110'>
            <ScrollLink to="servicio" smooth>Servicio</ScrollLink>
          </li>  

          <li className='transform active:scale-98 hover:scale-110'>
            <Link to="/contactenos">
              Contactenos
          </Link>
          </li>
        </ul>

        <Link to="/login">
          <button className="botonMenu bg-color-seis text-gray-900 px-4 py-2 rounded active:scale-98 hover:scale-108 rounded-xl text-black">
            Login
          </button>
        </Link>
      </nav>
    </div>
  );
}
