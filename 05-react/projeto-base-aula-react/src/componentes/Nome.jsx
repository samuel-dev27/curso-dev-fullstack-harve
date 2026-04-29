import { useState } from "react"
function Nome (){

    const [nome, setNome] = useState ("Samuel")

    return(
        <div>    
            <h1 className="tema-azul border">Nome</h1>
            <p style={{ fontStyle: "italic"}}>Nome: {nome}</p>
            <button onClick={() => setNome("João")}>Nome exemplo</button>
            <button className="button" onClick={() => setNome("Samuel")}>Alterar nome</button>
       
        <input type="text" onChange={(e) => setNome(e.target.value)} />
                <input type="text" onBlur={(e) => setNome(e.target.value)} />

       
         </div>
    )
}

export { Nome }