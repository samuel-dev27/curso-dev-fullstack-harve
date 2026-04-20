import { ToastContainer } from "react-toastify";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import "font-awesome/css/font-awesome.css";
import { TesteContextProvider } from "./hooks/TesteContext";
import { MeuNavBar } from "./componentes/MeuNavBar";
import { ComponenteGerenciarDia } from "./componentes/ComponenteGerenciarDia";
import { RouteApp } from "./route";


function App() {
  return (
    <>
      <TesteContextProvider>
        <MeuNavBar />
        <ComponenteGerenciarDia/>
        {/* <RouteApp/> */}
        <ToastContainer />
      </TesteContextProvider>
    </>
  );
}

export default App;
