// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './vistas/Principal'
import {Servicios} from './vistas/Servicio'
import {Login} from './vistas/Login'
import {Mascotas} from './vistas/mascotasVista'
import {Registro} from './vistas/Registro'
import {Veterinarios} from './vistas/vistaVeterinario'
import {Contactenos} from './vistas/Contactenos'
import Menu2 from "../src/components/header";
import Menu from "../src/components/menu";

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/servicios' element={<Servicios/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/registro' element={<Registro/>} />
        <Route path='/mis-mascotas' element={<Mascotas/>} />
        <Route path='/contactenos' element={<Contactenos/>} />
        <Route path='/veterinarios' element={<Veterinarios/>} />
      </Routes>
    </BrowserRouter>
  );
}

function Navigation() {
  // Para obtener el valor de una cookie
  const obtenerValorCookie = (nombre) => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${nombre}=`)) {
        return cookie.substring(nombre.length + 1);
      }
    }
    return null;
  };

  const valorCookie = obtenerValorCookie("token");
  console.log(valorCookie);

  return (
    <>
      {valorCookie ? (
        <Menu2 />
        
      ) : (
        <Menu />
      )}
    </>
  );
}


export default App;
