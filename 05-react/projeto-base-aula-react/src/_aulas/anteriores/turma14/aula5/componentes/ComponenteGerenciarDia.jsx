import { Button } from "react-bootstrap";
import { ComponenteDia } from "./ComponenteDia";
import { ComponenteNoite } from "./ComponenteNoite";
import { ComponenteMadrugada } from "./ComponenteMadrugada";
import { ComponenteDiaENoite } from "./ComponenteDiaENoite";

function ComponenteGerenciarDia() {
  return (
    <div>
      <h2>ComponenteGerenciarDia</h2>

      <ComponenteDia />
      <ComponenteNoite />
      <ComponenteMadrugada />

      <br />
      <br />
      <br />
      <ComponenteDiaENoite/>
    </div>
  );
}

export { ComponenteGerenciarDia };
