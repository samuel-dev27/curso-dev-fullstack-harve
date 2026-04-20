import axios from "axios";
import { useState } from "react";

function BuscaIbge() {
  const [municipios, setMunicipios] = useState([]);
  const [loading, setLoading] = useState([]);


  function pegarValorSelect(event) {
    // console.log(event.target.value);

    const uf = event.target.value;

    buscaNaApiIBGE(uf);
  }

  async function buscaNaApiIBGE(uf) {
    try {
      setLoading(true)

      const resultado = await axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
      );

      // console.log(resultado.data);

      setMunicipios(resultado.data);
    } catch (error) {
      alert("DEU RUIM para buscar dados");
    }finally{
      setLoading(false)
    }
  }

  // console.log(municipios);

  return (
    <>
      <div className="App">
        <h1>BusacaIbge</h1>

        <br />
        <br />
        <hr />
        <select name="uf" id="uf" onChange={pegarValorSelect}>
          <option value="">Selecione</option>
          <option value="pr">Parana</option>
          <option value="sc">SC</option>
          <option value="rs">RS</option>
          <option value="sp">SP</option>
          <option value="pa">PA</option>
        </select>

        <br />
        <br />
        <hr />
        <h1>lista municipios</h1>

        {municipios.map((item) => {
          console.log("item - ", item.nome);

          return (
            <>
              <p>
                {item.nome}
              </p>
            </>
          );
        })}
      </div>
    </>
  );
}

export { BuscaIbge };
