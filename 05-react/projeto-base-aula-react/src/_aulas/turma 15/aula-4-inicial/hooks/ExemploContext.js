import { createContext, useEffect, useState } from "react";

export const ExemploContext = createContext();

function ExemploContextProvider({ children }) {
  const [varExemplo, setVarExemplo] = useState([]);

  function exemplo(idProduto) {
    alert("exemplo");
  }

  return (
    <ExemploContext.Provider value={{ varExemplo, exemplo }}>
      {children}
    </ExemploContext.Provider>
  );
}

export default ExemploContextProvider;
