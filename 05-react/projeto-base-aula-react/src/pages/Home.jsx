import CarouselAnuncios from "../componentes/CarouselAnuncios";
import { Informacoes } from "../componentes/Curriculo/Informacoes";
import NavBar from "../componentes/NavBar";

function Home() {

  return (
    <div>
      <NavBar/>
      <CarouselAnuncios/>
    </div>
  );
}

export { Home };
