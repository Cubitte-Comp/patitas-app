import buscar from "../images/search.png"
import contacto from "../images/contacto2.png"
export default function Menu() {
    return (
    <div className="contenedor max-w-7xl mx-auto">
        <input
            className="busqueda bg-color rounded-xl"
        />
        <img className='buscar active:scale-[.10] ' src={buscar} alt=""/>
        
        <div className="flex flex-wrap justify-center">
            <div className="tarjeta bg-white m-4 p-4 rounded-xl shadow-md">
            <div className="interior1 bg-color mt-4 border-[#000000] border-2"/>
            <h1 className="nombreV1">Nombre</h1>
            <h1 className="espeV1">Especialidad</h1>
            <h1 className="expV1">Experiencia</h1>
            
        </div>
        
        <div className="tarjeta bg-white m-4 p-4 rounded-xl shadow-md">
            <div className="interior1 bg-color mt-4 border-[#000000] border-2"/>
            <h1 className="nombreV2">Nombre</h1>
            <h1 className="espeV2">Especialidad</h1>
            <h1 className="expV2">Experiencia</h1>

        </div>
        
        <div className="tarjetaO bg-white m-4 p-4 rounded-xl shadow-md">
            <div className="interior1 bg-color mt-4 border-[#000000] border-2"/>
                <h1 className="nombreV3">Nombre</h1>
                <h1 className="espeV3">Especialidad</h1>
                <h1 className="expV3">Experiencia</h1>
            </div>
        </div>

        <div className="fila flex flex-wrap justify-center">
            <div className="tarjeta bg-white m-4 p-4 rounded-xl shadow-md">
            <div className="interior1 bg-color mt-4 border-[#000000] border-2"/>
                <h1 className="nombreV3">Nombre</h1>
                <h1 className="espeV3">Especialidad</h1>
                <h1 className="expV3">Experiencia</h1>
            </div>

            <div className="tarjeta bg-white m-4 p-4 rounded-xl shadow-md">
            <div className="interior1 bg-color mt-4 border-[#000000] border-2"/>
                <h1 className="nombreV3">Nombre</h1>
                <h1 className="espeV3">Especialidad</h1>
                <h1 className="expV3">Experiencia</h1>
            </div>

            <div className="tarjetaO bg-white m-4 p-4 rounded-xl shadow-md">
            <div className="interior1 bg-color mt-4 border-[#000000] border-2"/>
                <h1 className="nombreV3">Nombre</h1>
                <h1 className="espeV3">Especialidad</h1>
                <h1 className="expV3">Experiencia</h1>
        </div>
        
        </div>        

        <img className='contacto2' src={contacto} alt=""/>
        <img className='contacto3' src={contacto} alt=""/>
        <img className='contacto4' src={contacto} alt=""/>
        <img className='contacto5' src={contacto} alt=""/>
        <img className='contacto6' src={contacto} alt=""/>
        <img className='contacto7' src={contacto} alt=""/>
    </div>
    );
}