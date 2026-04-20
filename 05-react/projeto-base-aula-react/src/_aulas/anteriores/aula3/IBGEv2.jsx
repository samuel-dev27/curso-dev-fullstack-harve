import { useEffect, useState } from "react";
import apiIbge from "../../../_service/aula/apiIbge";


function IBGEv2(props) {
  const [municipios, setMunicipios] = useState([]);
  const [estados, setEstatdos] = useState([]);
  const [uf, setUf] = useState([]);
  useEffect(() => {
    buscarEStados();
  }, []);

  useEffect(() => {
    if (!uf) return;
    buscaCidadeComUF(uf);
  }, [uf]);

  async function buscaCidadeComUF(uf) {
    try {
      const response = await apiIbge.get(
        `/v1/localidades/estados/${uf}/microrregioes`
      );
      // console.log(response.data);
      setMunicipios(response.data);
    } catch (error) {
      alert("O siga deu erro");
    }
  }

  async function buscarEStados() {
    try {
      const response = await apiIbge.get("/v1/localidades/estados");
      setEstatdos(response.data);
    } catch (error) {
      alert("O siga deu erro busca de estados");
    }
  }

  function onChangeSelect(event) {
    console.log(event.target.value);
    setUf(event.target.value);
  }

  return (
    <div className="App">
      <h1>IBGE</h1>

      <hr />
      <h2>Lista estados</h2>

      <select onChange={onChangeSelect}>
        <option>SELECIONE</option>
        {estados.map((estado) => {
          return (
            <>
              <option value={estado.sigla}>
                {estado.sigla} - {estado.nome}
              </option>
            </>
          );
        })}
      </select>

      <br />

      <hr />
      <br />
      <h2>LISTA da UF - {uf} </h2>
      {municipios.map((muni) => {
        return (
          <>
            <p>{muni.nome}</p>
          </>
        );
      })}
    </div>
  );
}

export { IBGEv2 };
