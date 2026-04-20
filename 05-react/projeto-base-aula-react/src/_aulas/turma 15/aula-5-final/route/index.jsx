import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Carrinho } from "../pages/Carrinho";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Produto } from "../pages/Produto";
import { BuscaIbge } from "../componentes/BuscaIbge";
import { BuscaIbgeV2 } from "../componentes/BuscaIbgeV2";

export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produtos" element={<Produto />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/busca/ibge" element={<BuscaIbge />} />
        <Route path="/busca/ibge/v2" element={<BuscaIbgeV2 />} />
      </Routes>
    </BrowserRouter>
  );
}
