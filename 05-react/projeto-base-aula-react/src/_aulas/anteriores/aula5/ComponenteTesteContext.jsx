import { useContext } from "react"
import { TesteContext } from "../../hooks/aula5/TesteContext";
import { ComponenteBotaoTesteContext } from "./ComponenteBotaoTesteContext";

function ComponenteTesteContext(props) {

  const {varTeste} = useContext(TesteContext)

  return(
    <>
    <h1>teste context valor = {varTeste}</h1>

    <hr />

    <ComponenteBotaoTesteContext/>
    </>
  )
  
}

export {ComponenteTesteContext}