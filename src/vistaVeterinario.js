// App.js

import Menu from "./components/menu";
import VIEW from "./components/viewVeterinarios";

function App() {
  return (
    <div className="bg-[#274060] min-h-screen"> 
      <Menu />

      <main>
        <VIEW/>
      </main>
      
    </div>
  );
}

export default App;