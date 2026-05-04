import { useEffect, useState } from "react";




function ListaDeEstados() {

    const [estados, setEstados] = useState([]);
    
    useEffect(() => {
        buscarEstados();
    }, []);

    async function buscarEstados() {
        try {
            const response = await fetch(
                "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
            );

            const data = await response.json();

            setEstados(data);
        } catch (error) {
            console.error("Erro ao buscar estados:", error.message);
        }
    }

    return(
        <div className="container"></div>
    )
}

export { ListaDeEstados };