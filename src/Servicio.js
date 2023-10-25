// App.js

import './App.css';
import Servicio from "./components/servicio";
import Menu from "./components/menu";
import Gotas2 from "./images/gotas2.png";

function App() {

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

export default App;