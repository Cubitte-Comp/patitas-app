import './index.css';
import vector from './images/Vector 8.png';
import contacto from './images/contacto.png';
import Menu from "./components/menu";
import Principal from "./components/principalP";


function App() {
  return (
    <div>
      
      <Menu />

      <div className="form max-w-lg mx-auto pt-12">

        <Principal />
      </div>

      <img className='Contacto' src={contacto} alt=""/>
      <img className='vectorPrincipal' src={vector} alt=""/>

    </div>
  );
}

export default App;