import { useEffect, useState } from "react";

function Home() {

  const [nome, setNome] =useState()
  const [email, setEmail] =useState()


  function pegarLocaStorage(){
    const nome = localStorage.getItem('nomeUsuario')
    const email = localStorage.getItem('emailUsario')
    setNome(nome)
    setEmail(nome)
  }

  useEffect(()=>{
    pegarLocaStorage()
  },[])
  return (
    <div className="App">
      HOME EXEMPLO
  <br />
      nome: {nome}
      <br />
      email : {email}
    </div>
  );
}

export { Home };
