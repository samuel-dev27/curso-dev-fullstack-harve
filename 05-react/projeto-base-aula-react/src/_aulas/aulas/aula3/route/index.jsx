import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Produto } from "../pages/Produto";
import { Home } from "../pages/Home";
export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto" element={<Produto />} />
      </Routes>
    </BrowserRouter>
  );
}
