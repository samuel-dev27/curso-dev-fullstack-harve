import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Produto } from "../pages/Produto";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import { LoginV2 } from "../LoginV2";
export function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginv2" element={<LoginV2 />} />
      </Routes>
    </BrowserRouter>
  );
}
