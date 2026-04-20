import "./App.css";

import { ComponenteExemplo } from "../../componentes/ComponenteExemplo";
import { Competencias } from "../../componentes/exemplos/Competencias";

function App() {
  return (
    <div>
      {/* <ComponenteExemplo>
        <p>Ola  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore hic exercitationem blanditiis, similique, doloremque omnis explicabo natus dicta optio corporis rerum possimus atque alias ab totam! Explicabo inventore facere aliquam?</p>
      </ComponenteExemplo> */}

      <Competencias nome="CSS" descricao="css" exp="7 ANOS">
        <h1>O TEXTO FILHO</h1>
      </Competencias>

      <Competencias
        nome="HTML"
        descricao="linguagem de marcação"
        exp="7 ANOS"
      />
    </div>
  );
}

export default App;
