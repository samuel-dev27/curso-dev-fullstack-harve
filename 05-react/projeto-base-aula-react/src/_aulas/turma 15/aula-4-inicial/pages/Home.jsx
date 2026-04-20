import { Container } from "react-bootstrap";
import CarouselAnuncios from "../componentes/CarouselAnuncios";
import { ListaProdutos } from "../componentes/ListaProdutos";
import NavBar from "../componentes/NavBar";
import { CarrinhoContext } from "../hooks/CarrinhoContext";
import { useContext } from "react";

function Home() {
  const { setContadorCarrinho } = useContext(CarrinhoContext);

  return (
    <NavBar>
      <br />
      <br />
      <br />
      <button onClick={() => setContadorCarrinho((valor) => valor + 1)}>
        {" "}
        + contador
      </button>

      <button onClick={() => setContadorCarrinho((valor) => valor - 1)}>
        {" "}
        - contador
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <CarouselAnuncios />
      <ListaProdutos />
    </NavBar>
  );
}

export { Home };
