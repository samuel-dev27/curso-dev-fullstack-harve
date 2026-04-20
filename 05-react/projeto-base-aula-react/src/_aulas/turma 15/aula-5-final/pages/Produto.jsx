import { Container } from "react-bootstrap";
import NavBar from "../componentes/NavBar";
import { ListaProdutos } from "../componentes/ListaProdutos";

function Produto() {
  return (
    <NavBar>
      <ListaProdutos />
    </NavBar>
  );
}

export { Produto };
