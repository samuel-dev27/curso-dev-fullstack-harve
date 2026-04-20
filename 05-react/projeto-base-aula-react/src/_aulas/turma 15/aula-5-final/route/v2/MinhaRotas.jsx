import { Route, Routes } from "react-router-dom";
import { ListaProdutos } from "../../componentes/ListaProdutos";
import { Home2 } from "../../pages/v2/Home2";
import { Curriculo } from "../../_aulas/aulas/Curriculo";

function MinhaRotas() {
  return (
    <Routes>
      <Route path="/" element={<Curriculo />} />
      <Route path="/produto" element={<ListaProdutos />} />
    </Routes>
  );
}

export { MinhaRotas };
