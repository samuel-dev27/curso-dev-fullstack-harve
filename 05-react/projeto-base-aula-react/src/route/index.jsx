import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { ListaMunicipio } from "../pages/ListaMunicipio";
import { Login } from "../pages/Login";
import { ListaDeProdutos } from "../pages/ListaDeProdutos";
// import { ListaDeEstados } from "../componentes/ListaDeEstados";

export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ListaDeProdutos" element={<ListaDeProdutos />} />
        <Route path="/municipios" element={<ListaMunicipio />} /> 
        {/* <Route path="/listadeestados" element={<ListaDeEstados />} /> */}
      </Routes>
    </BrowserRouter> 
  );
}
