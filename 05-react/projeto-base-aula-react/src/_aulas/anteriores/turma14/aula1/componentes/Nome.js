import { useEffect, useState } from "react";

function Nome() {
  const [nome, setNome] = useState("Nome");
  const [somaAlteracao, setSomaAlteracao] = useState(0);

  useEffect(() => {
    if (nome == "Nome") return;

    setSomaAlteracao(somaAlteracao + 1);
    // alert(`O nome foi alterado para ${nome}`);
  }, [nome]);

  return (
    <>
      alterações :{somaAlteracao}
      <br />
      <button onClick={() => setNome("APELIDO")}> APELIDO</button> <br />
      <button onClick={() => setNome("NOME COMPLETO")}>
        {" "}
        NOME COMPLETO
      </button>{" "}
      <br />
      <p>NOME: {nome}</p>
      <br />
      <br />
      <input type="text" onChange={(evento) => setNome(evento.target.value)} />
    </>
  );
}

export { Nome };
