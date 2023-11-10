// App.js


import Regis from "../components/registro";
import Menu from "../components/menu";
import vector from '../images/Vector 9.png';

export function Registro() {

  return (
    <div>
      
      <Menu />

      <div className="flex justify-center items-center h-screen">
        <Regis />
      </div>
      
      <img className='vector' src={vector} alt="vector"/>
    </div>
  );

}

