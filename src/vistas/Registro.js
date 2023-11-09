// App.js


import Regis from "../components/registro";
import Menu from "../components/menu";
import vector from '../images/Vector 9.png';

function App() {

  return (
    <div>
      
      <Menu />

      <div className="form max-w-lg mx-auto pt-12">

        <Regis />
      </div>

      <img className='vector' src={vector} alt=""/>

    </div>
  );

}

export default App;


