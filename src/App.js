import { useState } from "react";
import Colaboradores from './components/Colaboradores.jsx';
import Inputs from './components/Inputs.jsx';
import { BaseColaboradores } from './BaseColaboradores';
import Busqueda from "./components/Busqueda.jsx";

function App() {
  const [usuarios, setUsuarios] = useState(BaseColaboradores)
  const [filtroPalabra, setFiltroPalabra] = useState('')
  return (
    <div className="d-flex flex-column align-items-center p-3">
      <h1>Desafio 3</h1>
      <hr/>
      <Inputs usuarios={usuarios} setUsuarios={setUsuarios} />
      <hr/>
      <Busqueda usuarios={usuarios} setUsuarios={setUsuarios} filtroPalabra={filtroPalabra} setFiltroPalabra={setFiltroPalabra}/>
      <hr/>
      <Colaboradores usuarios={usuarios} filtroPalabra={filtroPalabra}/>
    </div>
  );
}

export default App;