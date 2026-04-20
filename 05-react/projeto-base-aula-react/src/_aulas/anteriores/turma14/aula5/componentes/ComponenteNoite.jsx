import { useContext } from "react";
import { Button } from "react-bootstrap";
import { TesteContext } from "../hooks/TesteContext";

function ComponenteNoite() {
  const { dizerBoanoite } = useContext(TesteContext);
  return (
    <div>
      <h2>ComponenteNoite</h2>
      <Button onClick={() => dizerBoanoite()}>mudar para noite</Button>
    </div>
  );
}

export { ComponenteNoite };
