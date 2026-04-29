import { useState } from "react";
import { useEffect } from "react";
import "./Curriculo.css";
function Informacoes(props) {
  const [nome, setNome] = useState("Samuel");
  const [sobrenome, setSobrenome] = useState("Albarran");

  useEffect(() => {
    if (nome) {
      alert("O componente foi pronto");
    }
  }, [nome]);

  useEffect(() => {
    if (sobrenome) {
      alert("O componente foi pronto");
    }
  }, [sobrenome]);

  return (
    <div className="">
      <div className="container-row">
      <h2 className="subtitulo">Nome: </h2>
      <p className="paragrafo">{nome}</p>
      <h2 className="subtitulo">Sobrenome: </h2>
      <p className="paragrafo">{sobrenome}</p>
      <h2 className="subtitulo">Data de Nascimento: </h2>
      <p className="paragrafo">{props.dataNascimento}</p>
      </div>
    <div className="flex-container" >
      <button className="button" onClick={() => setNome("João")}>Set nome "João"</button>
      <button className="button" onClick={() => setNome("Samuel")}>Set nome "Samuel"</button>

      <input type="text" onBlur={(e) => setNome(e.target.value)} placeholder="Nome'onBlur'" />
      <input type="text" onBlur={(i) => setSobrenome(i.target.value)} placeholder="Sobrenome 'onBlur'" />
    </div>
    </div>
  );
}
export { Informacoes };
