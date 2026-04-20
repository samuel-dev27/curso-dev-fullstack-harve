 import "./App.css";

import { Competencias } from "./componentes/Competencias";

function App() {
  return (
    <div className="App">
      <Competencias
        nome="REACT"
        descricao="Biblioteca JavaScript para criar interfaces de usuário"
      />

      <Competencias
        nome="HTML"
        descricao="Linguagem de marcação de hipertexto"
      />

      <Competencias nome="python" descricao="Linguagem de programação" />

    </div>
  );
}

export default App;
