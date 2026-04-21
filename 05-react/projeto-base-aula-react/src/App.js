import "./App.css";

import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";
import { PrimeiroComponente } from "./componentes/PrimeiroComponente";
import { Nome } from "./componentes/Nome";
import { Sobrenome } from "./componentes/Sobrenome";
import { Habilidades } from "./componentes/Habilidades";
import { Cursos } from "./componentes/Cursos";
import { Experiencia } from "./componentes/Experiencia";

function App() {
  return (
    <div className="App">
      <Nome />
      <Sobrenome />

      <h1>Habilidades: </h1>
      <Habilidades>HTML</Habilidades>
      <Habilidades>CSS</Habilidades>
      <Habilidades>JavaScript</Habilidades>
      <Habilidades>Node.js</Habilidades>
      <Habilidades>React</Habilidades>

      <h1>Cursos: </h1>
      <Cursos>Desenvolvimento web fullstack</Cursos>

      <h1>Experiência Profissional</h1>
      <Experiencia cargo="Desenvolvedor Frontend" empresa="Empresa X" ano="2020 - 2022" />
    </div>
  );

}



export default App;