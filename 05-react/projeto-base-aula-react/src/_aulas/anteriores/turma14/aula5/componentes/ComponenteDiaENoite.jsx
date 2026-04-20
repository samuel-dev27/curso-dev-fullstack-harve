import { useContext } from "react";
import { Button } from "react-bootstrap";
import { TesteContext } from "../hooks/TesteContext";

function ComponenteDiaENoite() {
  const { dizerBomDia, dizerBoanoite } = useContext(TesteContext);
  return (
    <div>
      <h2>ComponenteDiaENoite</h2>
      <Button onClick={() => dizerBomDia()}>BOM DIA</Button>
      <Button onClick={() => dizerBoanoite()}>Boa NOITE</Button>
    </div>
  );
}

export { ComponenteDiaENoite };
