export default function Menu() {
    return (
    <div className="contenedorMascotas max-w-7xl mx-auto">
        
        <div>
            <div className="mascota bg-color">
            <div>
            <input className="tituloForm bg-color-uno p-2 placeholder-black rounded-xl"
                placeholder="     DETALLES BASICOS"/>
                
        </div>


        <label className='nombreM text-lg font-medium text-center flex items-center'>Nombre *</label>
        <input
            className=" NombreMascota bg-color border-2 border-black rounded-xl"
        />
        
        <label className='especieM text-lg font-medium text-center flex items-center'>Especie *</label>
        <input
            className=" EspecieMascota bg-color border-2 border-black rounded-xl"
        />
        
        <label className='razaM text-lg font-medium text-center flex items-center'>Raza *</label>
        <input
            className=" RazaMascota bg-color border-2 border-black rounded-xl"
        />

        <label className='fecM text-lg font-medium text-center flex items-center'>Fecha de Nacimiento *</label>
        <input
            className=" FecMascota bg-color border-2 border-black rounded-xl"
        />

        <label className='generoM text-lg font-medium text-center flex items-center'>Genero *</label>
        <input
            className=" GeneroMascota bg-color border-2 border-black rounded-xl"
        />

        <label className='infoM text-lg font-medium text-center flex items-center'>Informacion Medica *</label>
        <input
            className=" InfoMascota bg-color border-2 border-black rounded-xl"
        />

        <label className='fotoM text-lg font-medium text-center flex items-center'>Foto de la Mascota *</label>
        <input
            className=" FotoMascota bg-color border-2 border-black rounded-xl"
        />
        <button className="botonMas bg-color-siete rounded-xl ">Registrarse</button>

        </div>
        </div>
    </div>
    );
}