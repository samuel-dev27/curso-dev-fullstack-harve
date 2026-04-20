import { useContext } from "react";
import { TesteContext } from "../../hooks/aula5/TesteContext";

function ComponenteBotaov2TesteContext() {
  const { manipulaVarTeste } = useContext(TesteContext);

  return (
    <>
      <h1>BOTAOOOOOO V2 COMPONNETE </h1>

      <button type="button" onClick={() => manipulaVarTeste(" BOTAO 1 COM IMPORT DIRETO")}>
        {" "}
        MANIPUILA  BOTAO 1 COM IMPORT DIRETO
      </button>
    </>
  );
}

export { ComponenteBotaov2TesteContext };
