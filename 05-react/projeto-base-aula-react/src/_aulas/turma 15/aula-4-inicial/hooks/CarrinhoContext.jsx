import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

function CarrinhoContextProvider({ children }) {
  const [contadorCarrinho, setContadorCarrinho] = useState(10);

  function helloWorld(){
    alert('OLA mundo')
  }

  return (
    <CarrinhoContext.Provider value={{ contadorCarrinho, setContadorCarrinho, helloWorld }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export { CarrinhoContextProvider };
