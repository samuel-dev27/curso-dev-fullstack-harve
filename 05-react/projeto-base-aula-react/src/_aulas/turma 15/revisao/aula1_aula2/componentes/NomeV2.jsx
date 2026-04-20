import { useEffect, useState } from "react";
import "./revisao.css";

function NomeV2(props) {
  const [nome, setNome] = useState("COM NOME QUALQUER");

  useEffect(() => {
    alert("Bem vindo");
  }, []);

  useEffect(() => {
    alert(`O nome Alterou para ${nome}`);
  }, [nome]);

  return (
    <div className="classe-nome">
      <h1> o nome é = {nome} </h1>

      <button onClick={() => setNome("Bruno pedroso")}> mudar para nome</button>
      <button onClick={() => setNome("PEDROSO")}> mudar para apelido</button>
    </div>
  );
}
export { NomeV2 };
