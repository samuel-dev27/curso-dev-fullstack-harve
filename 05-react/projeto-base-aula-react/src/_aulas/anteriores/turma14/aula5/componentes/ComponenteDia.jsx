import { useContext } from "react";
import { Button } from "react-bootstrap";
import { TesteContext } from "../hooks/TesteContext";

function ComponenteDia() {
  const { dizerBomDia } = useContext(TesteContext);
  return (
    <div>
      <h2>ComponenteDia</h2>
      <Button onClick={() => dizerBomDia()}>mudar para dia</Button>
    </div>
  );
}

export { ComponenteDia };
