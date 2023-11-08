import '../index.css';
import vector from '../images/Vector 8.png';
import contacto from '../images/contacto.png';
import Menu from "../components/menu";
import Principal from "../components/principalP";
import Carrousel from "../components/carrousel";
import Figura from "../images/logoser.png";
import Huellas from "../images/huellas.png";
import Animales from "../images/animales.png";


function App() {
    return (
      <div>
        
        <Menu />

        <div className="form max-w-lg mx-auto pt-12">
            <Principal />
        </div>
        <img className='Contacto' src={contacto} alt=""/>
        <img className='vectorPrincipal' src={vector} alt=""/>

        <div className='titulo2 max-w-xl'>
          <label >NUESTROS SERVICIOS</label>
        </div>
        <div>
            <img className='figura' src={Figura} alt=""/>
            <Carrousel/>
        </div>
        
        <div className="mitadHoja h-screen flex flex-col ">
          <div className="flex bg-color-dos">
            
            <img className='huellitas' src={Huellas} alt=""/>
            <img className='granja' src={Animales} alt=""/>

            <div className='tituloNosotros text-color-texto-1 max-w-xl'>
                <label>SOBRE NOSOTROS</label>
            </div>
            <div className='parrafoNosotros text-color-texto-1 max-w-lg'>
                <label>Nuestra misión es simple pero poderosa: 
                    mejorar la vida y el bienestar de tus 
                    mascotas. Nos esforzamos por proporcionar un entorno seguro, cariñoso 
                    y profesional donde tus mascotas se sientan cómodas y felices.</label>
            </div>
            
        </div>
        <div className='puntosNosotros text-color-texto-1 max-w-md'>
                    <div className='mb-4' >
                        <label>Con más de 10 años de experiencia en el 
                            cuidado de mascotas</label>
                    </div>
                    <div className='mb-4' >
                        <label>Hemos servido a más de 1,000 clientes 
                            satisfechos en toda nuestra trayectoria</label>
                    </div>
                    <div className='mb-4'>
                        <label>Hemos sido galardonados con el Premio a 
                            la Excelencia en el Cuidado de Mascotas 
                            durante tres años consecutivos</label>
                    </div>
                    <div>
                        <label>Amplia gama de servicios, como cuidado a 
                            domicilio, baño, corte de pelo, paseos, etc.,</label>
                    </div>
                </div>
      </div>


      </div>
    );
  }
  
  export default App;