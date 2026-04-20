import { Container } from "react-bootstrap";
import CarouselAnuncios from "../componentes/CarouselAnuncios";
import { ListaProdutos } from "../componentes/ListaProdutos";
import NavBar from "../componentes/NavBar";

function Home() {
  return (
    <NavBar>
      <CarouselAnuncios />
      <ListaProdutos />
    </NavBar>
  );
}

export { Home };
