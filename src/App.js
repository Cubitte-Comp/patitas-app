// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './vistas/Principal'
import {Servicios} from './vistas/Servicio'
import {Login} from './vistas/Login'
import {Mascotas} from './vistas/mascotasVista'
import {Registro} from './vistas/Registro'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/servicios' element={<Servicios/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/registro' element={<Registro/>} />
        <Route path='/mis-mascotas' element={<Mascotas/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
