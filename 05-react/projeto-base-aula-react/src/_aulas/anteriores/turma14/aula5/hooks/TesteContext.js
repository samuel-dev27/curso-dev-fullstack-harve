import { createContext, useState } from "react";

export const TesteContext = createContext();

function TesteContextProvider({ children }) {
  const [estadoDoDia, setEstadoDoDia] = useState("NÂO SEI");

  function dizerBoanoite() {
    setEstadoDoDia("Boa Noite");
    alert("Boa noite");
  }

  function dizerBomDia() {
    setEstadoDoDia("Bom Dia");
    alert("Bom Dia");
  }

  function dizerMadrugada() {
    setEstadoDoDia("Boa Madrugada");
    alert("Boa Madrugada");
  }

  return (
    <>
      <TesteContext.Provider
        value={{ estadoDoDia, dizerBoanoite, dizerBomDia, dizerMadrugada }}
      >
        {children}
      </TesteContext.Provider>
    </>
  );
}

export { TesteContextProvider };
