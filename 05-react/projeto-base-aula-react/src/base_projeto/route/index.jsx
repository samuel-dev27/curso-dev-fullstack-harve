import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IBGE } from "../_aulas/anteriores/aula3/IBGE";
import { IBGEv2 } from "../_aulas/anteriores/aula3/IBGEv2";
import { LoginV2 } from "../_aulas/aula5/LoginV2";
import { Carrinho } from "../pages/Carrinho";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Produto } from "../pages/Produto";
import { BaseSistema } from "./v2/BaseSistema";
import { MinhaRotas } from "./v2/MinhaRotas";
export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produtos" element={<Produto />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/v2/*" element={<BaseSistema componente={MinhaRotas} />} />
        <Route path="/rota/teste/*" element={<MinhaRotas />} />
        <Route path="/ibge" element={<IBGE />} />
        <Route path="/ibge/v2" element={<IBGEv2 />} />
        <Route path="/v2/login" element={<LoginV2 />} />
      </Routes>
    </BrowserRouter>
  );
}
