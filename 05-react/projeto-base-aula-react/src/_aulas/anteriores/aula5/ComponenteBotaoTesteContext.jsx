import { useContext } from "react";
import { ComponenteBotaov2TesteContext } from "./ComponenteBotaov2TesteContext";
import { TesteContext } from "../../hooks/aula5/TesteContext";

function ComponenteBotaoTesteContext() {
  const { manipulaVarTesteParaeRuim } = useContext(TesteContext);

  return (
    <>
      <h1>BOTAOOOOOO COMPONNETE </h1>

      <button type="button" onClick={() => manipulaVarTesteParaeRuim()}>
        {" "}
        DEU RUIM
      </button>

      <hr />
      <ComponenteBotaov2TesteContext />
    </>
  );
}

export { ComponenteBotaoTesteContext };
