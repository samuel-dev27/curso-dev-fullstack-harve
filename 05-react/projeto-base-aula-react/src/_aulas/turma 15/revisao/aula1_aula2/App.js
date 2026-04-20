import "./App.css";

import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";
import { Nome } from "./componentes/Nome";
import { Competencias } from "./componentes/Competencia";
import { NomeV2 } from "./componentes/NomeV2";


function App() {
  return (
    <div className="App">
      <h1>APP</h1>
      <p>Ola mundo</p>

      <Nome nome="Maria" sobrenome="Pedroso" />

      <h1>Competencias</h1>
      <Competencias nome="HTML" descricao="Linguagem de maracação" />
      <Competencias nome="CSS" descricao="Linguagem de maracação" />
      <Competencias nome="JS" descricao="Linguagem de maracação" />
      <Competencias nome="NODES" descricao="Linguagem de maracação" />

      <br />
      <br />
      <br />
      <br />
      <NomeV2 />
    </div>
  );
}

export default App;
