import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Nome() {
  const [nome, setNome] = useState("Nome");
  const [sobrenome, setSobrenome] = useState("Bobrenome");

  const [somaAlteracao, setSomaAlteracao] = useState(0);

  useEffect(() => {
    if (nome == "Nome") return;

    setSomaAlteracao(somaAlteracao + 1);

    alert(`O nome ou sobrenome foi alterado para ${nome} ${sobrenome}`);
  }, [nome, sobrenome]);

  return (
    <div className="div-nome">
      <span className="contador-nome">alterações: {somaAlteracao}</span>
      <br /> <br />
      <button onClick={() => setNome("SEU APELIDO")}>
        {" "}
        Altere APELIDO
      </button>{" "}
      <br /> <br />
      <button onClick={() => setNome("SEU NOME")}> Altere NOME</button> <br />
      <Button variant="primary" onClick={() => setNome("SEU NOME")}>
        Primary
      </Button>
      <br />
      <br />
      <br />
      <p>NOME: {nome}</p>
      <br />
      <br />
      {/* <input type="text" onChange={(evento) => setNome(evento.target.value)} /> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      SOBRENOME SOBRENOME: {sobrenome}
      <br />
      <br />
      <button onClick={() => setSobrenome("SEU SOBRENOME")}>
        {" "}
        Altere sobrenome
      </button>{" "}
      <br /> <br />
      <button onClick={() => setSobrenome("SEU CODENOME")}>
        {" "}
        Altere codenome
      </button>{" "}
    </div>
  );
}

export { Nome };
