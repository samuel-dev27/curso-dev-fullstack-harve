import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { TesteContext } from "../hooks/TesteContext";

function ComponenteMadrugada() {
  const { dizerMadrugada } = useContext(TesteContext);
  return (
    <div>
      <h2>ComponenteMadrugada</h2>
      <Button onClick={() => dizerMadrugada()}>mudar para madrugada</Button>
    </div>
  );
}

export { ComponenteMadrugada };
