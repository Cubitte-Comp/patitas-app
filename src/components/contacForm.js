// App.js


function Contactenos() {

    return (
      <div className="flex w-full h-screen  justify-center">
        <div >
          <div className="contactoForm text-color-texto-1">
              <label >Contáctenos</label>
              <div className="ubi text-color-texto-1">
                  <label>Nuestra Ubicación:</label>
              </div>
              <div className="ubi">
              <label>3ra ave. 5ta Calle, Zona 1</label>
              </div>
              <div className="ubi">
              <label>Cobán, Alta Verapaz</label>
              </div>
              <div className="ubi">
                  <label>e-mail:</label>
              </div>
              <div className="ubi">
              <label>patitas024@gmail.com</label>
              </div>
              <div className="ubi">
                  <label>Telefono:</label>
              </div>
              <div className="ubi">
              <label>(502) 7950-0296</label>
              </div>
          </div>
              <div className="frase1 text-color-texto-1">
                  <label>La atención a nuestros clientes son nuestra prioridad</label>
              </div>
              <div>
                  <input
                      className="nomI border-2 border-[#000000]"
                      placeholder="Ingrese su Nombre"
                  />
              </div>
              <div>
              <input
                      className="nomI border-2 border-[#000000] mt-6"
                      placeholder="Ingrese su Correo Electronico"
                  />
              </div>
  
              <div>
                  <textarea
                      className="area border-2 border-[#000000] mt-6"
                      placeholder="Ingrese su Mensaje"
                  />
              </div>
  
              <div className="butE py-3 rounded-xl flex flex-col bg-color-siete text-black">
                  <button className="bg-color-siete">Enviar</button>
              </div>
          </div>      
      </div>
    );
  
  }
  
  export default Contactenos;