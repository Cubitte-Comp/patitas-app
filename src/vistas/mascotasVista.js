// App.js

import Menu from "../components/menu";
import VIEW from "../components/MascotasView";

export function Mascotas() {
  return (
    <div className="bg-[#274060] min-h-screen"> 
    
      <Menu />
      
      
      <VIEW/>
      
    </div>
  );
}

