import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Produtos } from "../pages/Produtos";
import { Home } from "../pages/Home";
export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ " element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
}
