import '../index.css';
import Form from "../components/form";
import patitasImage from '../images/patitas.png'; 
import esquinaImage from '../images/esquina.png';
import esquina2Image from '../images/esquina2.png';
import dog from '../images/imagenPerrito.png';


function App() {
  return (
    <div className='flex w-full h-screen items-center justify-center'>
      <div className='w-1/4 ' > 
      <img className='imagenlogo' src={patitasImage} alt=""/>
      <img className='esquina' src={esquinaImage} alt=""/>
      
      </div>
      
      <div >
        <Form /> 
      </div>

      <div className='w-1/4'>
      <img className='esquina2' src={esquina2Image} alt=""/>
      <img className='dog' src={dog} alt=""/>
      </div>
    </div>
    );
}

export default App;


