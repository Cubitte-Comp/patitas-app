// App.js

import Servicio from "../components/servicio";
import Menu from "../components/menu";
import Gotas2 from "../images/gotas2.png";

export function Servicios() {

  return (
    <div>


      <div>
        <Menu />
        <Servicio/>
        <div>
        <img className='gotas2' src={Gotas2} alt=""/>
        </div>
      </div>

      
      
    </div>
  );

}
